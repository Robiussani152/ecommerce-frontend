import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Cart from "../views/Cart.vue";
import MyOrders from "../views/MyOrders.vue";
import AdminLogin from "../views/admin/Login.vue";
import GuestLayout from "../layouts/Guest.vue";
import AdminLayout from "../layouts/Admin.vue";
import ProductsList from "../views/admin/products/Index.vue";
import ProductCreate from "../views/admin/products/Create.vue";
import ProductUpdate from "../views/admin/products/Update.vue";
import OrderList from "../views/admin/orders/Index.vue";
import OrderDetails from "../views/admin/orders/Show.vue";
import DeliveredOrderList from "../views/admin/orders/DeliveredOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/my-orders",
    name: "MyOrders",
    component: MyOrders,
  },
  {
    path: "/admin-login",
    name: "AdminLogin",
    component: AdminLogin,
    meta: { layout: GuestLayout },
  },
  {
    path: "/admin/products",
    name: "ProductsList",
    component: ProductsList,
    meta: { layout: AdminLayout },
  },
  {
    path: "/admin/products/create",
    name: "ProductCreate",
    component: ProductCreate,
    meta: { layout: AdminLayout },
  },
  {
    path: "/admin/products/:id/edit",
    name: "ProductUpdate",
    component: ProductUpdate,
    meta: { layout: AdminLayout },
  },
  {
    path: "/admin/orders",
    name: "OrderList",
    component: OrderList,
    meta: { layout: AdminLayout },
  },
  {
    path: "/admin/orders/:id",
    name: "OrderDetails",
    component: OrderDetails,
    meta: { layout: AdminLayout },
  },
  {
    path: "/admin/delivered-order",
    name: "DeliveredOrderList",
    component: DeliveredOrderList,
    meta: { layout: AdminLayout },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
