export const menuList = [
  {
    title: "Home",
    path: "/",
    icon: "fas fa-house",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "fas fa-chart-pie",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
  {
    title: "Users List",
    path: "/users",
    icon: "fa-solid fa-users",
  },

  {
    title: "Product List",
    path: "/products",
    icon: "fa-solid fa-bag-shopping",
  },

  {
    title: "Components",
    path: "/components",
    isDropdown: true,
    icon: "fa-solid fa-clover",
    children: [
      {
        title: "Modals",
        path: "/components/modals",
      },
    ],
  },
  {
    title: "Authentication",
    path: "/auth",
    isDropdown: true,
    icon: "fa-solid fa-file-lines",
    children: [
      {
        title: "Sign In",
        path: "/signin",
      },
      {
        title: "Sign Up",
        path: "/signup",
      },
      {
        title: "Forgot password",
        path: "/forgotpassword",
      },
      {
        title: "Reset password",
        path: "/resetpassword",
      },
      {
        title: "Verify",
        path: "/verify",
      },
    ],
  },

  {
    title: "Exception",
    path: "/exception",
    isDropdown: true,
    icon: "fa-solid fa-bomb",
    children: [
      {
        title: "403 Not Permission",
        path: "/403",
      },
      {
        title: "404 Not found",
        path: "/404",
      },
      {
        title: "500 Server error",
        path: "/500",
      },
    ],
  },
];
