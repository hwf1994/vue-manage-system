import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () =>
                import ( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [{
                    path: '/dashboard',
                    component: () =>
                        import ( /* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/studentlist',
                    component: () =>
                        import ( /* webpackChunkName: "table" */ '../components/page/StudentList.vue'),
                    // meta: { title: '基础表格' }
                    meta: { title: '学员列表' }
                },
                {
                    path: '/form',
                    component: () =>
                        import ( /* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    path: '/comment',
                    component: () =>
                        import ( /* webpackChunkName: "form" */ '../components/page/Comment.vue'),
                    meta: { title: '评论管理' }
                },
                {
                    path: '/orderlist',
                    component: () =>
                        import ( /* webpackChunkName: "form" */ '../components/page/order/OrderList.vue'),
                    meta: { title: '订单管理' }
                },
                {
                    path: '/tabs',
                    component: () =>
                        import ( /* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/information',
                    component: () =>
                        import ( /* webpackChunkName: "form" */ '../components/page/InforMation.vue'),
                    meta: { title: '基本信息' }
                },
                {
                    path: '/coursemanagement',
                    component: () =>
                        import ( /* webpackChunkName: "form" */ '../components/page/CoursManagement.vue'),
                    meta: { title: '课程管理' }
                },
                {
                    path: '/teacher',
                    component: () =>
                        import ( /* webpackChunkName: "form" */ '../components/page/teacher.vue'),
                    meta: { title: '师资管理' }
                },
                {
                    path: '/activity',
                    component: () =>
                        import ( /* webpackChunkName: "form" */ '../components/page/Activity.vue'),
                    meta: { title: '活动管理' }
                },
                {
                    path: '/orderdetail/:id',
                    component: () =>
                        import ( /* webpackChunkName: "form" */ '../components/page/order/OrderDetail.vue'),
                    meta: { title: '订单详情' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () =>
                        import ( /* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () =>
                        import ( /* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () =>
                        import ( /* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () =>
                        import ( /* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () =>
                        import ( /* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () =>
                        import ( /* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () =>
                        import ( /* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () =>
                        import ( /* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () =>
                        import ( /* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () =>
                        import ( /* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/adminSet',
                    component: () =>
                    import ( /* webpackChunkName: "donate" */ '../components/page/system/adminSet.vue'),
                    meta: { title: '设置' }
                },
                {
                    path: '/orgSet',
                    component: () =>
                    import ( /* webpackChunkName: "donate" */ '../components/page/system/orgSet.vue'),
                    meta: { title: '设置' }
                }
            ]
        },
        {
            path: '/login',
            component: () =>
                import ( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});