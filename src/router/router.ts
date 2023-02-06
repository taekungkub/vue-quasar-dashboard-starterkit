import { createRouter, createWebHashHistory, createWebHistory, Router } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "DashboadLayout",
    meta: {
      layout: "admin",
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard/index.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
      },
      {
        path: "/users",
        name: "Users",
        component: () => import("../views/Users.vue"),
      },
      {
        path: "/carlendar",
        name: "Carlendar",
        component: () => import("../views/Carlendar.vue"),
      },
      {
        path: "/invoice",
        name: "Invoice",
        component: () => import("../views/Invoice.vue"),
      },

      // end single
      {
        path: "/ecommerce/products",
        name: "Products",
        component: () => import("../views/Ecommerce/Products.vue"),
      },
      {
        path: "/ecommerce/add-product",
        name: "AddProduct",
        component: () => import("../views/Ecommerce/AddProduct.vue"),
      },
      {
        path: "/ecommerce/orders",
        name: "Orders",
        component: () => import("../views/Ecommerce/Orders.vue"),
      },

      {
        path: "/ecommerce/checkout",
        name: "Checkout",
        component: () => import("../views/Ecommerce/Checkout.vue"),
      },

      {
        path: "/components",
        name: "Components",
        redirect: "/components/modals",
        component: () => import("../views/PageComponents/index.vue"),
        children: [
          {
            path: "/components/modals",
            name: "Modals",
            component: () => import("../views/PageComponents/Modals.vue"),
          },
        ],
      },
    ],
  },

  {
    path: "/",
    name: "EmptyLayout",
    meta: {
      layout: "empty",
    },
    children: [
      {
        path: "/signin",
        name: "SignIn",
        component: () => import("../views/Auth/SignIn.vue"),
      },
      {
        path: "/signup",
        name: "SignUp",
        component: () => import("../views/Auth/SignUp.vue"),
      },
      {
        path: "/forgotpassword",
        name: "Forgotpassword",
        component: () => import("../views/Auth/Forgotpassword.vue"),
      },

      {
        path: "/verify",
        name: "Verify",
        component: () => import("../views/Auth/Verify.vue"),
      },

      {
        path: "/confirm-mail",
        name: "ConfirmMail",
        component: () => import("../views/Auth/ConfirmMail.vue"),
      },

      {
        path: "/resetpassword",
        name: "Resetpassword",
        component: () => import("../views/Auth/Resetpassword.vue"),
      },

      {
        path: "/404",
        name: "404",
        component: () => import("../views/Exception/404.vue"),
      },
      {
        path: "/403",
        name: "403",
        component: () => import("../views/Exception/403.vue"),
      },
      {
        path: "/500",
        name: "500",
        component: () => import("../views/Exception/500.vue"),
      },

      {
        path: "/:pathMatch(.*)",
        name: "NotFound",
        component: () => import("../views/Exception/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
