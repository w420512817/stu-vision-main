const early = {
  path: '/early',
  name: 'Early',
  component: () => import('@common/layouts/BasicLayout/index.vue'),
  redirect: '/early/eyesight',
  meta: {
    title: '预警管理',
    icon: 'material-symbols:warning-outline',
    orderNo: 6,
    resourceId: 9047,
    hideChildrenInMenu: true
  },
  children: [
    {
      path: 'eyesight',
      name: 'eyesightEarly',
      component: () => import('@/views/early/eyesight/index.vue'),
      meta: {
        title: '视力预警',
        keepAlive: true,
        resourceId: 9047,
        hideMenu: true,
        hideBreadcrumb: true
      },
      children: [
        {
          path: 'setEarly',
          name: 'setEarly',
          component: () => import('@/views/early/eyesight/setEarly.vue'),
          meta: {
            title: '预警阀值设置',
            keepAlive: true,
            hideMenu: true,
            resourceId: 9048,
            hideBreadcrumb: true,
            activeMenu: '/early/eyesight'
          }
        }
      ]
    },
    {
      path: 'detail',
      name: 'commonDetail',
      component: () => import('@/views/early/detail.vue'),
      meta: {
        title: '查看详情',
        keepAlive: true,
        hideMenu: true,
        resourceId: 9050,
        activeMenu: '/early/eyesight'
      }
    }
    // {
    //   path: 'studentDetail',
    //   name: 'commonStudentDetail',
    //   component: () => import('@/views/early/studentDetail.vue'),
    //   meta: {
    //     title: '预警学生详情',
    //     keepAlive: true,
    //     hideMenu: true,
    //     activeMenu: '/early/eyesight'
    //   }
    // }
  ]
};

export default early;
