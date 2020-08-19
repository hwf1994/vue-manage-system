<template>
    <div class="teacher">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-user"></i> 教师列表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.name" placeholder="名称" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                <el-button style="float: right;" type="primary" icon="el-icon-plus" @click="handleCreate">创建</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="名称" align="center"></el-table-column>
                <el-table-column label="级别" align="center">
                    <template slot-scope="scope">￥{{scope.row.money}}</template>
                </el-table-column>
                <el-table-column prop="name" label="创建时间" align="center"></el-table-column>
                <el-table-column label="头像" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.thumb"
                            :preview-src-list="[scope.row.thumb]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column label="图片" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.thumb"
                            :preview-src-list="[scope.row.thumb]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="介绍" align="center"></el-table-column>
                <el-table-column prop="name" label="机构" align="center"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog :title="editStatus=='create'?'新建教师':'编辑教师'" :visible.sync="editVisible" width="50%">
            <el-form :rules="rules" ref="form" :model="form" label-width="70px">
                <el-form-item label="名称：" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="级别：" prop="level">
                	<el-select v-model="form.level" placeholder="请选择级别">
				      <el-option label="初级" value="low"></el-option>
				      <el-option label="中级" value="mid"></el-option>
				      <el-option label="高级" value="heigh"></el-option>
				    </el-select>
                </el-form-item>
                <el-row :gutter="20">
				    <el-col :span="12">
				  	    <el-form-item label="头像：" prop="image">
		                    <el-upload
							  class="avatar-uploader"
							  action="http://upload-z2.qiniup.com"
							  :show-file-list="false"
							  :data="uploadToken"
							  :on-success="res=>{$set(form,'image',`http://qf3kxzyub.hn-bkt.clouddn.com/${res.key}`);$refs.form.clearValidate()}"
							  :before-upload="beforeAvatarUpload">
							  <img v-if="form.image" :src="form.image" class="avatar">
							  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
		                </el-form-item>
				    </el-col>
				    <el-col :span="12">
				  	    <el-form-item label="图片：" prop="images">
		                    <el-upload
							  class="avatar-uploader"
							  action="http://upload-z2.qiniup.com"
							  :show-file-list="false"
							  :data="uploadToken"
							  :on-success="res=>{$set(form,'images',`http://qf3kxzyub.hn-bkt.clouddn.com/${res.key}`);$refs.form.clearValidate()}"
							  :before-upload="beforeAvatarUpload">
							  <img v-if="form.images" :src="form.images" class="avatar">
							  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
		                </el-form-item>
				    </el-col>
				</el-row>
                <el-form-item label="介绍：" prop="content">
                    <el-input v-model="form.content"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit('form')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
export default {
    name: 'basetable',
    data() {
        return {
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            rules: {
		          name: [
		            { required: true, message: '名称不能为空', trigger: 'blur' }
		          ],
		          level: [
		            { required: true, message: '级别不能为空', trigger: 'change' }
		          ],
		          content: [
		            { required: true, message: '介绍不能为空', trigger: 'blur' }
		          ],
		          image: [
		           {  trigger: 'change',required: true, message: '请上传用户头像', }
		          ],
		          images: [
		           {  trigger: 'change',required: true, message: '请上传用户图片', }
		          ],
		    },
            idx: -1,
            id: -1,
            uploadToken:{   //上传图片时用
	        	token:""
	        },
            
            editStatus:"create",
        };
    },
    created() {
        this.getData();
    },
    methods: {
        // 获取 easy-mock 的模拟数据
        getData() {
            this.$api.getstudentlist().then(res=>{
                this.tableData=res.list;
                this.pageTotal=res.pageTotal||50;
         })
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = Object.assign(this.form,row);
            this.editStatus='edit';
            this.editVisible = true;
        },
        handleCreate(){
        	this.editStatus='create';
        	this.editVisible=true;
        	this.form={}
        },
        // 保存编辑
        saveEdit(formName) {
        	this.$refs[formName].validate((valid) => {
		          if (valid) {
		            
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
//          this.editVisible = false;
//          this.$message.success(`修改第 ${this.idx + 1} 行成功`);
//          this.$set(this.tableData, this.idx, this.form);
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        },
        
        //图片上传之前获取token
        async beforeAvatarUpload(){
        	 const res = await this.$get('http://localhost:3000/upload_token')
             this.uploadToken.token=res.data.uploadToken
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
<style>
	/*图片上传*/
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
.teacher .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload--text{
  	width: auto;
  }
</style>