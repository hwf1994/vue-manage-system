<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-setting"></i> 管理员设置
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div>
               <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="名称" prop="name">
				    <el-input v-model="ruleForm.name"></el-input>
				  </el-form-item>
				  <el-form-item label="logo：" prop="logo_image">
                    <el-upload
					  class="avatar-uploader"
					  action="http://upload-z2.qiniup.com"
					  :show-file-list="false"
					  :data="uploadToken"
					  :on-success="res=>$set(ruleForm,'logo_image',`http://qf3kxzyub.hn-bkt.clouddn.com/${res.key}`)"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="ruleForm.logo_images" :src="ruleForm.logo_image" class="avatar">
					  <div v-else>
					  	 <i class="el-icon-plus avatar-uploader-icon"></i>
					  </div>
					</el-upload>
                  </el-form-item>
                  <el-form-item label="图库：" prop="images">
                    <el-upload
					  class="avatar-uploader"
					  action="http://upload-z2.qiniup.com"
					  :multiple="true"
					  :data="uploadToken"
					  :file-list="fileList"
                      list-type="picture"
					  :on-success="multiSuccess"
					  :on-remove="handleRemove"
					  :before-upload="beforeAvatarUpload">
					  <el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
                  </el-form-item>
				  <el-form-item label="联系电话" prop="mobile">
				    <el-input v-model="ruleForm.mobile"></el-input>
				  </el-form-item>
				  <el-form-item label="介绍" prop="content">
				    <el-input v-model="ruleForm.content"></el-input>
				  </el-form-item>
				  <el-form-item label="地址" prop="address">
				    <el-input v-model="ruleForm.address"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				  </el-form-item>
				</el-form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
           images:[]
        },
        uploadToken:{   //上传图片时用
	        token:""
	    },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ],
          logo_image: [
            {  trigger: 'change',required: true, message: '请上传logo', }
          ],
          images: [
            {  trigger: 'change',required: true, message: '请上传图库', }
          ],
          mobile: [
            { required: true, message: '请选择联系电话', trigger: 'change' }
          ],
          content: [
            { required: true, message: '请输入介绍', trigger: 'change' }
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'change' }
          ],
        },
        //图片数组上传
        fileList: [],
        
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //图片上传
      async beforeAvatarUpload(){
    	 const res = await this.axios.get('http://localhost:3000/upload_token')
         this.uploadToken.token=res.data.uploadToken
      },
      handleRemove(file, fileList) {
      	var index=this.ruleForm.images.indexOf(file.url)
      	this.ruleForm.images.splice(index,1)
      	this.fileList.splice(index,1)
      },
      multiSuccess(res){  //多数组上传成功后处理
      	var img=`http://qf3kxzyub.hn-bkt.clouddn.com/${res.key}`
      	this.ruleForm.images.push(img)
      	this.fileList.push({
      		name:res.key,
      		url:img
      	})
      	console.log(this.ruleForm.images)
      	this.$refs.ruleForm.clearValidate()
      }
    }
  }
</script>

<style>
	.demo-ruleForm{width: 30%;}
	.el-upload--text{width: 100%;}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    line-height: 178px;
	    text-align: center;
	}
</style>