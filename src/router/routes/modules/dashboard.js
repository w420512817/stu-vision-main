const dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('@common/layouts/BasicLayout/index.vue'),
  redirect: '/dashboard/overview',
  meta: {
    envMode: 'development',
    title: '首页',
    icon: 'icon-park-outline:workbench',
    hideChildrenInMenu: true,
    orderNo: 1
  },
  children: [
    {
      path: 'overview',
      name: 'Overview',
      component: () => import('@/views/dashbord/index.vue'),
      meta: {
        hideBreadcrumb: true,
        title: '首页'
      }
    }
  ]
};

export default dashboard;
