const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/HomePage.vue') }],
  },
  { path: '/portfolio', redirect: '/#projects' },
  { path: '/about', redirect: '/#about' },
  { path: '/cv', redirect: '/#about' },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
