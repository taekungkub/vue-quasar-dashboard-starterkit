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
    title: "Carlendar",
    path: "/carlendar",
    icon: "fa-solid fa-calendar-days",
  },

  {
    title: "Invoice",
    path: "/invoice",
    icon: "fa-solid fa-file-lines",
  },

  {
    title: "Ecommerce",
    path: "/ecommerce",
    isDropdown: true,
    icon: "fa-solid fa-bag-shopping",
    children: [
      {
        title: "Products",
        path: "/ecommerce/products",
      },
      {
        title: "AddProduct",
        path: "/ecommerce/add-product",
      },
      {
        title: "Orders",
        path: "/ecommerce/orders",
      },
      {
        title: "Checkout",
        path: "/ecommerce/checkout",
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
      {
        title: "Confirm Mail",
        path: "/confirm-mail",
      },
    ],
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
    title: "Projects",
    path: "/projects",
    isDropdown: true,
    icon: "fa-solid fa-umbrella",
    children: [
      {
        title: "Project Grid",
        path: "/projects/project-grid",
      },
      {
        title: "Project List",
        path: "/projects/project-list",
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

  {
    title: "Test",
    path: "/test",
    isDropdown: true,
    icon: "fa-solid fa-campground",
    children: [
      {
        title: "Test1",
        path: "/test",
      },
      {
        title: "Collection",
        path: "/collection",
      },
      {
        title: "Collection 2",
        path: "/collection2",
      },
    ],
  },
];
