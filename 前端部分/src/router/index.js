// 路由模块入口文件
//引入Vue路由对象创建函数、createWebHistory 函数
import { createRouter,createWebHashHistory} from "vue-router"
import MyHome from '../components/MyHome'
import MyBookList from '../components/MyBookList'
import MyNewsList from '@/components/MyNewsList'
import MyBookDetail from '@/components/MyBookDetail'
import MyCart from '@/components/MyCart'
import MyOrderList from '../components/MyOrderList'

const routes=[
    {
        path:"/",   //连接路径
        redirect:"/home"    //对应的组件
    },
    {
        path:'/home',
        component:MyHome
    },
    {
        path:'/login',
        component:()=>import('../components/MyLogin.vue')//懒加载
    },
    {
        path:'/booklist',
        component:MyBookList
    },
    {
        path:'/newslist',
        component:MyNewsList,
        children:[
            {path:'detail/:id',component:MyBookDetail}
        ]
    },
    {
        path:'/cart',
        component:MyCart
    },
    {
        path:'/orderlist',
        component:MyOrderList
    }
]
//创建router（路由管理者，用来管理路由）
const router = createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
);
//路由拦截
router.beforeEach(to =>{
    //判断目标路由是否是/login，如果是，则直接返回true
    if(to.path == "/login" || to.path == "/home" || to.path == "/orderlist"){
        return true
    }
    else{
        //否则判断用户是否已经登录，注意这里是字符串判断
        if(sessionStorage.isAuth === "true"){
            return true
        }
        //如果用户访问的是受保护的资源，且没有登录，则跳转到登录页面
        //并将当前路由的完整路径作为查询参数转给Login组件，以便登录成功后返回先前的页面
        else{
            return{
                path:'/login',
                query:{redirect:to.fullPath}
            }
        }
    }
})
//导出管理对象
export default router;