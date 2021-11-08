import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Cart from "../views/Cart.vue";
import MyOrders from "../views/MyOrders.vue";
import EditOrder from "../views/EditOrder.vue";
import AdminLogin from "../views/admin/Login.vue";
import GuestLayout from "../layouts/Guest.vue";
import AdminLayout from "../layouts/Admin.vue";
import ProductsList from "../views/admin/products/Index.vue";
import ProductCreate from "../views/admin/products/Create.vue";
import ProductUpdate from "../views/admin/products/Update.vue";
import OrderList from "../views/admin/orders/Index.vue";
import OrderDetails from "../views/admin/orders/Show.vue";

import store from "@/store";

import auth from "@/middleware/auth";
import admin from "@/middleware/admin";
import guest from "@/middleware/guest";

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
    meta: {
      middleware: [guest],
    },
  },
  {
    path: "/orders-details/:id",
    name: "UserOrderDetails",
    component: OrderDetails,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/order-edit/:id",
    name: "EditOrder",
    component: EditOrder,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      middleware: [guest],
    },
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
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/admin-login",
    name: "AdminLogin",
    component: AdminLogin,
    meta: { layout: GuestLayout, middleware: [guest] },
  },
  {
    path: "/admin/products",
    name: "ProductsList",
    component: ProductsList,
    meta: { layout: AdminLayout, middleware: [admin] },
  },
  {
    path: "/admin/products/create",
    name: "ProductCreate",
    component: ProductCreate,
    meta: { layout: AdminLayout, middleware: [admin] },
  },
  {
    path: "/admin/products/:id/edit",
    name: "ProductUpdate",
    component: ProductUpdate,
    meta: { layout: AdminLayout, middleware: [admin] },
  },
  {
    path: "/admin/orders",
    name: "OrderList",
    component: OrderList,
    meta: { layout: AdminLayout, middleware: [admin] },
  },
  {
    path: "/admin/orders/:id",
    name: "OrderDetails",
    component: OrderDetails,
    meta: { layout: AdminLayout, middleware: [admin] },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Than run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
      store,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }
  next();
});

export default router;
