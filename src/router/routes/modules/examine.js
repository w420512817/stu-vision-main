const temp = {
  path: '/examine',
  name: 'Examine',
  component: () => import('@common/layouts/BasicLayout/index.vue'),
  meta: {
    title: '进度管理',
    icon: 'carbon:gui-management',
    orderNo: 4,
    resourceId: 9004
  },
  children: [
    {
      path: 'plan-manage',
      name: 'PlanManage',
      component: () => import('@common/system-views/examine/plan/index.vue'),
      meta: {
        title: '筛查管理',
        keepAlive: true,
        resourceId: 9005
      }
    },
    {
      path: 'add-plan',
      name: 'AddPlan',
      component: () => import('@common/system-views/examine/plan/addPlan.vue'),
      meta: {
        title: '新增筛查',
        keepAlive: true,
        hideMenu: true,
        hideBreadcrumb: true,
        activeMenu: '/examine/plan-manage',
        resourceId: [9006, 9008]
      }
    },
    // 区编辑省市下发的任务
    {
      path: 'edit-plan',
      name: 'EditPlan',
      component: () => import('@common/system-views/examine/plan/editProvinceOrCityPlan.vue'),
      meta: {
        title: '编辑筛查',
        keepAlive: true,
        hideMenu: true,
        hideBreadcrumb: true,
        activeMenu: '/examine/plan-manage',
        resourceId: [9008, 9056, 9104, 9152]
      }
    },
    {
      path: 'plan-detail',
      name: 'PlanDetail',
      component: () => import('@common/system-views/examine/plan/detail.vue'),
      meta: {
        title: '计划详情',
        keepAlive: true,
        hideMenu: true,
        activeMenu: '/examine/plan-manage',
        hideBreadcrumb: true,
        resourceId: 9007
      }
    },
    // {
    //   path: 'plan-list',
    //   name: 'PlanList',
    //   component: () => import('@common/system-views/examine/plan/index.vue'),
    //   meta: {
    //     title: '我的计划',
    //     keepAlive: true,
    //     resourceId: 2060,
    //     hideMenu: true,
    //     hideBreadcrumb: true
    //   }
    // },
    // {
    //   path: 'plan-detail',
    //   name: 'planDetail',
    //   component: () => import('@common/system-views/examine/plan/detail.vue'),
    //   meta: {
    //     title: '查看-我的计划',
    //     keepAlive: true,
    //     hideMenu: true,
    //     hideBreadcrumb: true
    //   }
    // },

    {
      path: 'school-permission',
      name: 'SchoolPermission',
      component: () => import('@common/system-views/examine/plan/schoolPermission.vue'),
      meta: {
        title: '权限控制',
        keepAlive: true,
        hideMenu: true,
        hideBreadcrumb: true,
        activeMenu: '/examine/plan-manage',
        resourceId: 9010
      }
    },
    // {
    //   path: 'select-App-task',
    //   name: 'SelectAppTask',
    //   component: () => import('@common/system-views/examine/task/selectAppTask.vue'),
    //   meta: {
    //     title: '任务查询',
    //     keepAlive: true,
    //     resourceId: 3021
    //   }
    // },
    {
      path: 'task-list',
      name: 'TaskList',
      component: () => import('@common/system-views/examine/task/index.vue'),
      meta: {
        title: '任务管理',
        keepAlive: true,
        resourceId: 9015
      }
    },
    {
      path: 'task-modify',
      name: 'TaskModify',
      component: () => import('@common/system-views/examine/task/modify.vue'),
      meta: {
        title: '新增任务',
        keepAlive: true,
        hideMenu: true,
        hideBreadcrumb: true,
        activeMenu: '/examine/task-list',
        resourceId: [9019, 9020, 9023]
      }
    },
    {
      path: 'task-detail',
      name: 'TaskDetail',
      component: () => import('@common/system-views/examine/task/detail.vue'),
      meta: {
        title: '任务详情',
        keepAlive: true,
        hideMenu: true,
        hideBreadcrumb: true,
        activeMenu: '/examine/task-list',
        resourceId: [9016, 9022]
      }
    },
    {
      path: 'task-configuration',
      name: 'TaskConfiguration',
      component: () => import('@common/system-views/examine/task/configuration.vue'),
      meta: {
        title: '任务配置',
        hideMenu: true,
        hideBreadcrumb: true,
        activeMenu: '/examine/task-list',
        resourceId: [9022, 9016, 9064, 9070, 9112, 9118, 9160, 9166]
      }
    }
  ]
};

export default temp;
