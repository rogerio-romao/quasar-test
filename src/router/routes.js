import Landing from "../pages/Landing.vue";

const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/featured",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Featured.vue") }],
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Portfolio.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/About.vue") }],
  },
  {
    path: "/blog",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Blog.vue") }],
  },
  {
    path: "/cv",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/CV.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
