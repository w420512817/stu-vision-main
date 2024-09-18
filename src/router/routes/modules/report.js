const report = {
  path: '/report',
  name: 'Report ',
  component: () => import('@common/layouts/BasicLayout/index.vue'),
  redirect: '/report/report-select',
  meta: {
    icon: 'iconoir:reports',
    title: '报告管理',
    orderNo: 10,
    resourceId: 9031
  },
  children: [
    {
      path: 'report-select',
      name: 'ReportSelect',
      activeMenu: '/report/report-select',
      component: () => import('@/views/report/report/indexCheckType.vue'),
      meta: {
        title: '报告选择',
        keepAlive: true,
        resourceId: [9032, 9035, 9038, 9041, 9044]
      }
    },
    {
      path: 'report-view',
      name: 'ReportView',
      activeMenu: '/report/report-select',
      component: () => import('@/views/report/report/ReportView.vue'),
      meta: {
        title: '报告详情', // 政府
        hideMenu: true,
        hideTab: true,
        hideBreadcrumb: true,
        resourceId: [9033, 9036, 9039]
      }
    },
    {
      path: 'report-view-school',
      name: 'ReportViewSchool',
      activeMenu: '/report/report-select',
      component: () => import('@/views/report/report/report-school/reportViewSchool.vue'),
      meta: {
        title: '报告详情', // 学校
        hideMenu: true,
        hideTab: true,
        hideBreadcrumb: true,
        resourceId: [9039, 9042, 9045]
      }
    },
    {
      path: 'report-custom',
      name: 'ReportViewCustom',
      activeMenu: '/report/report-select',
      component: () => import('@/views/report/cus-report/index.vue'),
      meta: {
        title: '自定义报告'
      }
    }
  ]
};

export default report;
