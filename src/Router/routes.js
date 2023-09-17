import {lazy}  from "react";

const routes = [
    {
        path:'/product',
        component:lazy(()=> import('../Pages/Product'))
    },
    {
        path:'/category',
        component:lazy(()=> import('../Pages/Category'))
    },
    {
        path:'/login',
        component:lazy(()=> import('../Pages/Login'))
    },
    {
        path:"/productdetails/:id",
        component: lazy(() => import("../Pages/ProductDetail"))
    },
    {
        path:"/admin/updatecategory/:id",
        component: lazy(() => import("../Pages/Admin/UpdateAdminCategory"))
    },
    {
        path:"/admin/updateproduct/:id",
        component: lazy(() => import("../Pages/Admin/UpdateAdminProduct"))
    },
    {
        path:"/admin/addcategory",
        component: lazy(() => import("../Pages/Admin/AddCategory"))
    },
    {
        path:"/admin/category",
        component: lazy(() => import("../Pages/Admin/AdminCategory"))
    },
    {
        path:"/admin/product",
        component: lazy(() => import("../Pages/Admin/AdminProduct"))
    },
    {
        path:"/admin/home",
        component: lazy(() => import("../Pages/Admin/Home"))
    },
    {
        path:'/',
        component:lazy(()=> import('../Pages/Home'))
    }
]

export default routes;