import { resultPageSuccess, resultSuccess } from '../utils';
// import { Random } from 'mockjs';

const list = (() => {
  const result = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      year: '@date("yyyy")',
      name: '@cword(2,8)',
      'appType|1': ['视力筛查', '体检筛查', '龋齿筛查'],
      'type|1': ['普查', '自查'],
      range: '@county(true)',
      startDate: '@date("yyyy-MM-dd")', // @date("yyyy-MM-dd HH:mm:ss")
      endDate: '@date("yyyy-MM-dd")', // @date("yyyy-MM-dd HH:mm:ss")
      'status|1': ['待开始', '进行中', '已完成', '已超时'],
      orgName: '杭州教育局',
      plan: '@cword(2,5)' + '计划',
      school: '杭一高'
    });
  }
  return result;
})();
const resultObj = {
  levelLoading: false,
  areaLevel: '1',
  nowLevel: '1',
  nowAreaId: '',
  levelData: [],
  schoolData: [],
  originAreaId: '',
  planId: '1',
  loading: false,
  planName: '@cword(2,8)',
  planYear: '@date("yyyy")',
  startTime: '@date("yyyy-MM-dd")',
  endTime: '@date("yyyy-MM-dd")',
  'planTypeLaber|1': ['普查', '抽查'],
  appGroupName: '@cword(2,8)',
  appGroupId: '',
  planRange: '@county(true)',
  'checkIndex|1': ['0', '1'],
  'checkNum|0-100': 10,
  'screenNum|10-999': 400,
  'control|1': ['0', '1'],
  'screenNum|1-99': 1,
  'gradeName|1-10': 1,
  screeningOptions: [
    {
      screeningTypeId: '1',
      screeningTypeName: '视力',
      itemList: [
        {
          screeningTypeId: '11',
          screeningItemName: '裸眼视力',
          selection: 1
        },
        {
          screeningTypeId: '12',
          screeningItemName: '矫正视力'
        }
      ]
    },
    {
      screeningTypeId: '2',
      screeningTypeName: '电脑验光',
      itemList: [
        {
          screeningTypeId: '21',
          screeningItemName: '球镜度数'
        },
        {
          screeningTypeId: '22',
          screeningItemName: '柱镜度数'
        },
        {
          screeningTypeId: '23',
          screeningItemName: '轴位'
        }
      ]
    },
    {
      screeningTypeId: '3',
      screeningTypeName: '其他',
      itemList: [
        {
          screeningTypeId: '31',
          screeningItemName: 'ok镜度数'
        }
      ]
    }
  ],
  detail: {},
  necessItem: '',
  selecItem: '',
  percentage: 50,
  dashboard: {},
  current: 1,
  size: 15,
  pageCount: 1
};
export default [
  {
    url: '/basic-api/examine/planList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, list);
    }
  },
  {
    url: '/basic-api/examine/taskList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, list);
    }
  },
  {
    url: '/basic-api/base-screen/plan/planInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      // return resultSuccess(resultObj);
      return resultSuccess({
        appGroupId: '1054206868520704',
        appGroupName: '视力筛查应用组',
        appVersion: 3,
        applicationId: '1037894827663104',
        areaId: '610000',
        areaLevel: 1,
        checkIndex: 0,
        checkNum: null,
        control: 0,
        createTime: '2023-12-18 18:07:53',
        creator: '1280675499532032',
        creatorName: '陕西教育局',
        creatorOrg: '1280674354847488',
        creatorOrgName: '陕西教育局',
        endDate: null,
        endTime: '2024-03-31',
        gradeId: null,
        gradeName: null,
        planId: '1283048021704448',
        planMode: 1,
        planModeLaber: '计划模式',
        planName: '陕西省视力筛查计划',
        planRange: '610000',
        planRangeLaber: '陕西省',
        planStatus: 1,
        planStatusLaber: '已完成',
        planType: 101,
        planTypeLaber: '普查',
        planYear: 2023,
        provinceId: '610000',
        rate: null,
        region: null,
        remark: null,
        schoolId: null,
        schoolName: null,
        screenNum: 65154,
        screenType: 2,
        screeningCondition: '[]',
        screeningConditionList: [],
        screeningIndex: 0,
        screeningOptions: [
          {
            itemList: [
              {
                custonDisable: 1,
                id: '1283048022531840',
                inputType: null,
                planId: '1283048021704448',
                screeningItemCode: 'sl',
                screeningItemId: '1',
                screeningItemName: '视力',
                screeningItemType: 1,
                screeningTypeId: '1037894936428288',
                selection: 1,
                selectionLaber: '必查',
                taskId: null
              }
            ],
            screeningTypeId: '1037894936428288',
            screeningTypeName: '视光-视力'
          },
          {
            itemList: [
              {
                custonDisable: 1,
                id: '1283048022687488',
                inputType: null,
                planId: '1283048021704448',
                screeningItemCode: 'qg',
                screeningItemId: '2',
                screeningItemName: '屈光',
                screeningItemType: 1,
                screeningTypeId: '1045122495110912',
                selection: 1,
                selectionLaber: '必查',
                taskId: null
              }
            ],
            screeningTypeId: '1045122495110912',
            screeningTypeName: null
          }
        ],
        startTime: '2023-12-18',
        studentNum: null
      });
    }
  }
];
