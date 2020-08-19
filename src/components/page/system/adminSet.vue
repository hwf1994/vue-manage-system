<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-setting"></i> 账户设置
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div>
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="用户名:">admin</el-form-item>
                    <el-form-item label="原密码:" prop="repassword">
                        <el-input type="password:" v-model="ruleForm.repassword"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码:" prop="password">
                        <el-input type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item label="银行卡号:">
                        <span style="margin-right:10px">(未绑定)</span>
                        <el-button @click="bingVisible=true" type="primary">绑定</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <!-- 点击绑定银行卡 -->
        <el-dialog
            title="绑定银行卡"
            :visible.sync="bingVisible"
            width="30%"
        >
            <el-form label-width="80px">
                <el-form-item label="银行卡号:">
                    <el-input v-model="cardNumber"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="bingVisible = false">取 消</el-button>
                <el-button type="primary" @click="bindCard">绑 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {},
            bingVisible: true,
            cardNumber: '',
            rules: {
                repassword: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
                password: [{ required: true, message: '请输入新密码', trigger: 'blur' }]
            }
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
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        bindCard() {
            //绑定银行卡
            if (this.cardNumber) {
                
            } else {
                this.$message({
                    showClose: true,
                    message: '请填写银行卡号',
                    type: 'error'
                });
            }
        }
    }
};
</script>

<style>
.demo-ruleForm {
    width: 30%;
}
</style>