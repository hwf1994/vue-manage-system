<!--  -->
<template>
	<el-card class="box-card orderDetail">
	    <el-row>
			  <el-col :span="6"><span>id：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>用户：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>课程：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>创建时间：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>更新时间：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>删除时间：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>数量：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>收货地址：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>状态：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>支付：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>支付时间：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>发货时间：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>完成时间：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>订单号：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>备注：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>总价：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>商品总价：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>快照：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>单价：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>快递公司：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>快递单号：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>姓名：</span><span>张三</span></el-col>
			  <el-col :span="6"><span>机构：</span><span>张三</span></el-col>
			   <el-col :span="6"><span>倒计时：</span><span>张三</span></el-col>
			</el-row>
	</el-card>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
	.orderDetail .el-col{margin-bottom: 15px;}
</style>