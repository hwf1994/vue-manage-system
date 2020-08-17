<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-user"></i> 订单列表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.name" placeholder="名称" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                <!--<el-button style="float: right;" type="primary" icon="el-icon-plus" @click="handleCreate">创建</el-button>-->
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="用户" align="center"></el-table-column>
                <el-table-column label="课程" align="center">
                    <template slot-scope="scope">￥{{scope.row.money}}</template>
                </el-table-column>
                <el-table-column prop="date" label="创建时间" align="center"></el-table-column>
                <el-table-column prop="name" label="数量" align="center"></el-table-column>
                <el-table-column prop="name" label="状态" align="center"></el-table-column>
                <el-table-column prop="name" label="支付时间" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                <el-table-column prop="name" label="快递公司" align="center"></el-table-column>

                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                    	  <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleDetail(scope.row.id)"
                        >详情</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="Examine=true"
                        >审核</el-button>
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
        
        <!--审核订单-->
        <el-dialog
		  title="提示"
		  :visible.sync="Examine"
		  width="30%">
		  <span style="display: block;font-size: 18px;text-align: center;">请审核该订单！</span>
		  <span slot="footer" class="dialog-footer" style="text-align: center;">
		    <el-button type="primary" @click="dialogVisible = false">审核通过</el-button>
		    <el-button type="danger" @click="dialogVisible = false">审核不通过</el-button>
		    <el-button @click="Examine = false">取消</el-button>
		  </span>
		</el-dialog>
    </div>
</template>

<script>
import { fetchData } from '../../../api/index';
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
            idx: -1,
            id: -1,
            Examine:false,  //订单审核展示
            
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
        //查看详情页面
        handleDetail(id){
        	  this.$router.push({
        	  	  path: `/orderdetail/${id}`,
        	  })
        },
        toExamine(id){
        	  this.$confirm('是否审核通过该订单?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消审核'
		          });          
		        });
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        },
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
  .avatar-uploader-icon {
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
  .el-dialog__footer{
  	text-align: center;
  }
</style>