/*
 * @Author: wjq-work\wjq wjq4416@163.com
 * @Date: 2024-09-09 13:00:59
 * @LastEditors: wangjq
 * @LastEditTime: 2024-10-02 01:13:15
 */
import { resultPageSuccess, resultSuccess } from '../utils';
// import { Random } from 'mockjs';

const list = (() => {
  const result = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      planId: `${index + 1}`,
      planYear: '@date("yyyy")',
      planName: '@cword(2,8)',
      planMode: '1',
      'appType|1': ['视力筛查', '体检筛查', '龋齿筛查'],
      'type|1': ['普查', '抽查'],
      planRange: '@county(true)',
      startTime: '@date("yyyy-MM-dd")', // @date("yyyy-MM-dd HH:mm:ss")
      endTime: '@date("yyyy-MM-dd")', // @date("yyyy-MM-dd HH:mm:ss")
      'planStatus|1': ['待开始', '进行中', '已完成', '已超时'],
      creatorOrgName: '杭州教育局',
      'rate|0-100': 10,
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
const dashboard = {
  'schoolCount|0-10': 10,
  'studentCount|50-100': 60,
  'rate|0-100': 10,
  'haveScreeningNum|0-999': 1,
  'onScreeningNum|0-999': 1,
  'notStartedScreeningNum|0-999': 1,
  'haveScreeningCount|0-999': 1,
  'notScreeningCount|0-999': 1
};
const levelDataList = (() => {
  const result = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      areaId: `${index}`,
      areaName: '@county(true)',
      'schoolCount|0-999': 1,
      'studentCount|0-999': 1,
      'rate|0-100': 1,
      orgName: '@cword(2,8)',
      statusLaber: '进行中',
      orgPropertyLaber: '独立学校',
      'prefx|1': ['小学', '初中'],
      schoolLevelLaber: '常规'
    });
  }
  return result;
})();
const getAppGroupList = (() => {
  const result = [];
  for (let index = 0; index < 4; index++) {
    result.push({
      appGroupId: `${index}`,
      appGroupName: ['视力筛查', '体检筛查', '龋齿筛查', '体测筛查'][index]
    });
  }
  return result;
})();

const classList = (() => {
  const result = [];
  for (let index = 0; index < 6; index++) {
    result.push({
      classId: `${index}`,
      className: '@cword(2,5)'
    });
  }
  return result;
})();
const getGradeClassList = (() => {
  const result = [];
  for (let index = 0; index < 6; index++) {
    result.push({
      id: `${index}`,
      gradeId: `${index}`,
      gradeName: ['1年级', '2年级', '3年级', '4年级', '5年级', '6年级'][index],
      classList
    });
  }
  return result;
})();
const getSchoolList = (() => {
  const result = [];
  for (let index = 0; index < 10; index++) {
    result.push({
      orgId: `${index}`,
      orgName: '@cword(2,5)'
    });
  }
  return result;
})();
export default [
  {
    url: '/basic-api/base-screen/plan/getPlanList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      // return resultPageSuccess(page, pageSize, list);
      return resultPageSuccess(page, pageSize, [
        {
          appGroupId: '1054206868520704',
          appGroupName: '视力筛查应用组',
          appVersion: 3,
          applicationId: '1037894827663104',
          areaId: null,
          areaLevel: null,
          checkIndex: null,
          checkNum: null,
          control: null,
          createTime: null,
          creator: '1280675499532032',
          creatorName: '安徽教育局',
          creatorOrg: '1280674354847488',
          creatorOrgName: '安徽教育局',
          endDate: null,
          endTime: '2024-03-31',
          gradeId: null,
          gradeName: null,
          planId: '1283048021704448',
          planMode: 1,
          planModeLaber: '计划模式',
          planName: '安徽省视力筛查计划',
          planRange: '安徽省',
          planRangeLaber: null,
          planStatus: 1,
          planStatusLaber: '已完成',
          planType: 101,
          planTypeLaber: '普查',
          planYear: 2023,
          provinceId: null,
          rate: 100,
          region: null,
          remark: null,
          schoolId: null,
          schoolName: null,
          screenNum: 65154,
          screenType: null,
          screeningCondition: '[]',
          screeningConditionList: null,
          screeningIndex: 0,
          screeningOptions: null,
          startTime: '2023-12-18',
          studentNum: null
        }
      ]);
    }
  },
  {
    url: '/basic-api/base-screen/plan/planInfo',
    timeout: 100,
    method: 'get',
    response: () => {
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
        creatorName: '安徽教育局',
        creatorOrg: '1280674354847488',
        creatorOrgName: '安徽教育局',
        endDate: null,
        endTime: '2024-03-31',
        gradeId: null,
        gradeName: null,
        planId: '1283048021704448',
        planMode: 1,
        planModeLaber: '计划模式',
        planName: '安徽省视力筛查计划',
        planRange: '610000',
        planRangeLaber: '安徽省',
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
  },
  // 筛查概览
  {
    url: '/basic-api/base-screen/plan/getScreningRate',
    timeout: 100,
    method: 'get',
    // response: () => resultSuccess(dashboard)
    response: () =>
      resultSuccess({
        haveScreeningCount: 0,
        haveScreeningNum: 0,
        notScreeningCount: 66654,
        notStartedScreeningNum: 10,
        onScreeningNum: 10,
        rate: 0,
        schoolCount: 69,
        studentCount: 66654
      })
  },
  // 各地筛查进度
  {
    url: '/basic-api/base-screen/plan/getScreningRateInfoForArea',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          areaId: '610100',
          areaName: '‌合肥市',
          rate: 0,
          schoolCount: 8,
          studentCount: 9118
        },
        {
          areaId: '610200',
          areaName: '‌淮北市',
          rate: 0,
          schoolCount: 4,
          studentCount: 4500
        },
        {
          areaId: '610300',
          areaName: '亳州市',
          rate: 0,
          schoolCount: 4,
          studentCount: 4500
        },
        {
          areaId: '610400',
          areaName: '‌宿州市',
          rate: 0,
          schoolCount: 5,
          studentCount: 5404
        },
        {
          areaId: '610500',
          areaName: '蚌埠市',
          rate: 0,
          schoolCount: 6,
          studentCount: 6750
        },
        {
          areaId: '610600',
          areaName: '‌阜阳市',
          rate: 0,
          schoolCount: 5,
          studentCount: 5250
        },
        {
          areaId: '610700',
          areaName: '淮南市',
          rate: 0,
          schoolCount: 4,
          studentCount: 4500
        },
        {
          areaId: '610800',
          areaName: '滁州市',
          rate: 0,
          schoolCount: 5,
          studentCount: 5250
        },
        {
          areaId: '610900',
          areaName: '六安市',
          rate: 0,
          schoolCount: 4,
          studentCount: 4500
        },
        {
          areaId: '611000',
          areaName: '‌马鞍山市',
          rate: 0,
          schoolCount: 4,
          studentCount: 16882
        }
      ])
  },
  {
    url: '/basic-api/base-screen/plan/getScreningRateInfoForRegion',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, levelDataList);
    }
  },
  {
    url: '/basic-api/base-screen/plan/add',
    timeout: 100,
    method: 'post',
    response: () => {
      return resultSuccess(resultObj);
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
    url: '/basic-api/base-config/appGroup/getAppGroupList',
    timeout: 100,
    method: 'get',
    // response: () => resultSuccess(getAppGroupList)
    response: () =>
      resultSuccess([
        {
          appGroupId: '1054206868520704',
          appGroupName: '视力筛查应用组',
          appId: '1037894827663104',
          appVersion: 3
        }
      ])
  },
  {
    url: '/basic-api/org/plan/schoolGradeList',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          gradeId: '921830381248271',
          name: '一年级'
        },
        {
          gradeId: '921830381248272',
          name: '二年级'
        },
        {
          gradeId: '921830381248273',
          name: '三年级'
        },
        {
          gradeId: '921830381248274',
          name: '四年级'
        },
        {
          gradeId: '921830381248275',
          name: '五年级'
        },
        {
          gradeId: '921830381248276',
          name: '六年级'
        },
        {
          gradeId: '921830381248277',
          name: '初一'
        },
        {
          gradeId: '921830381248278',
          name: '初二'
        },
        {
          gradeId: '921830381248279',
          name: '初三'
        },
        {
          gradeId: '921830381248283',
          name: '初四'
        },
        {
          gradeId: '921830381248284|921830381248287',
          name: '高一'
        },
        {
          gradeId: '921830381248285|921830381248288',
          name: '高二'
        },
        {
          gradeId: '921830381248286|921830381248289',
          name: '高三'
        }
      ])
  },
  {
    url: '/basic-api/org/plan/getGradeClassList',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          classList: [
            {
              classId: '1282974992858880',
              className: '1'
            },
            {
              classId: '1282974992867072',
              className: '2'
            },
            {
              classId: '1282974992875264',
              className: '3'
            },
            {
              classId: '1282974992875265',
              className: '4'
            },
            {
              classId: '1282974992883456',
              className: '5'
            }
          ],
          gradeCode: null,
          gradeName: '一年级',
          id: '921830381248271',
          schoolType: 2,
          studyYear: 2022
        },
        {
          classList: [
            {
              classId: '1282974992883457',
              className: '1'
            },
            {
              classId: '1282974992891648',
              className: '2'
            },
            {
              classId: '1282974992899840',
              className: '3'
            },
            {
              classId: '1282974992899841',
              className: '4'
            },
            {
              classId: '1282974992899842',
              className: '5'
            }
          ],
          gradeCode: null,
          gradeName: '二年级',
          id: '921830381248272',
          schoolType: 2,
          studyYear: 2021
        },
        {
          classList: [
            {
              classId: '1282974992908032',
              className: '1'
            },
            {
              classId: '1282974992908033',
              className: '2'
            },
            {
              classId: '1282974992916224',
              className: '3'
            },
            {
              classId: '1282974992916225',
              className: '4'
            },
            {
              classId: '1282974992924416',
              className: '5'
            }
          ],
          gradeCode: null,
          gradeName: '三年级',
          id: '921830381248273',
          schoolType: 2,
          studyYear: 2020
        },
        {
          classList: [
            {
              classId: '1282974992932608',
              className: '1'
            },
            {
              classId: '1282974992932609',
              className: '2'
            },
            {
              classId: '1282974992940800',
              className: '3'
            },
            {
              classId: '1282974992940801',
              className: '4'
            },
            {
              classId: '1282974992948992',
              className: '5'
            }
          ],
          gradeCode: null,
          gradeName: '四年级',
          id: '921830381248274',
          schoolType: 2,
          studyYear: 2019
        },
        {
          classList: [
            {
              classId: '1282974992948993',
              className: '1'
            },
            {
              classId: '1282974992957184',
              className: '2'
            },
            {
              classId: '1282974992957185',
              className: '3'
            },
            {
              classId: '1282974992957186',
              className: '4'
            },
            {
              classId: '1282974992965376',
              className: '5'
            }
          ],
          gradeCode: null,
          gradeName: '五年级',
          id: '921830381248275',
          schoolType: 2,
          studyYear: 2018
        },
        {
          classList: [
            {
              classId: '1282974992973568',
              className: '1'
            },
            {
              classId: '1282974992973569',
              className: '2'
            },
            {
              classId: '1282974992973570',
              className: '3'
            },
            {
              classId: '1282974992981760',
              className: '4'
            },
            {
              classId: '1282974992981761',
              className: '5'
            }
          ],
          gradeCode: null,
          gradeName: '六年级',
          id: '921830381248276',
          schoolType: 2,
          studyYear: 2017
        }
      ])
  },
  {
    url: '/basic-api/base-config/application/getScreeningOpitons',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          itemList: [
            {
              custonDisable: 1,
              id: null,
              inputType: 3,
              planId: null,
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
              id: null,
              inputType: 3,
              planId: null,
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
          screeningTypeName: '视光-屈光'
        }
        //   {
        //   screeningTypeId: '1',
        //   screeningTypeName: '视力',
        //   itemList: [
        //     {
        //       screeningTypeId: '11',
        //       screeningItemName: '裸眼视力'
        //     },
        //     {
        //       screeningTypeId: '12',
        //       screeningItemName: '矫正视力'
        //     }
        //   ]
        // },
        // {
        //   screeningTypeId: '2',
        //   screeningTypeName: '电脑验光',
        //   itemList: [
        //     {
        //       screeningTypeId: '21',
        //       screeningItemName: '球镜度数'
        //     },
        //     {
        //       screeningTypeId: '22',
        //       screeningItemName: '柱镜度数'
        //     },
        //     {
        //       screeningTypeId: '23',
        //       screeningItemName: '轴位'
        //     }
        //   ]
        // },
        // {
        //   screeningTypeId: '3',
        //   screeningTypeName: '其他',
        //   itemList: [
        //     {
        //       screeningTypeId: '31',
        //       screeningItemName: 'ok镜度数'
        //     }
        //   ]
        // }
      ])
  },
  {
    url: '/basic-api/org/basicConfig/getAreaTree',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        children: [
          {
            children: [
              {
                children: null,
                gradeNum: null,
                haveScreeningNum: null,
                level: 3,
                regionId: '610102',
                regionName: '庐阳区',
                screeningNum: null,
                stuCount: null
              }
            ],
            gradeNum: null,
            haveScreeningNum: null,
            level: 2,
            regionId: '610100',
            regionName: '‌合肥市',
            screeningNum: null,
            stuCount: null
          }
        ],
        gradeNum: null,
        haveScreeningNum: null,
        level: 1,
        regionId: '610000',
        regionName: '安徽省',
        screeningNum: null,
        stuCount: null
      })
  },
  {
    url: '/basic-api/org/plan/getSchoolList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, [
        {
          orgId: '1280739653607168',
          orgName: '‌合肥实验小学',
          prefx: '2'
        },
        {
          orgId: '1280811255480064',
          orgName: '西工大锦园实验小学',
          prefx: '2'
        },
        {
          orgId: '1280813813284608',
          orgName: '‌合肥市曲江第二小学',
          prefx: '2'
        },
        {
          orgId: '1280814431477504',
          orgName: '‌合肥新知小学',
          prefx: '2'
        },
        {
          orgId: '1280818111389440',
          orgName: '‌合肥市庐阳区黄河小学',
          prefx: '2'
        },
        {
          orgId: '1280829299023616',
          orgName: '安徽师范大学附属中学',
          prefx: '3'
        },
        {
          orgId: '1280836240989952',
          orgName: '‌合肥爱知初级中学',
          prefx: '3'
        },
        {
          orgId: '1280838121021184',
          orgName: '溢新中学',
          prefx: '3'
        },
        {
          orgId: '1280838378077952',
          orgName: '汇知中学',
          prefx: '3'
        },
        {
          orgId: '1280838658088704',
          orgName: '航天小学',
          prefx: '2'
        },
        {
          orgId: '1280838980189952',
          orgName: '辉搏小学',
          prefx: '2'
        },
        {
          orgId: '1280839705206528',
          orgName: '青年路小学',
          prefx: '2'
        },
        {
          orgId: '1280839936499456',
          orgName: '建国路小学',
          prefx: '2'
        },
        {
          orgId: '1280840432017152',
          orgName: '逸翠园中学',
          prefx: '3'
        },
        {
          orgId: '1280840838307584',
          orgName: '亳州中学',
          prefx: '3'
        },
        {
          orgId: '1280841731907328',
          orgName: '‌宿州中学',
          prefx: '3'
        },
        {
          orgId: '1280842054844160',
          orgName: '‌宿州市实验学校',
          prefx: '3'
        },
        {
          orgId: '1280865665253120',
          orgName: '‌宿州市秦都区天王小学',
          prefx: '2'
        },
        {
          orgId: '1280865904631552',
          orgName: '‌宿州市渭城区风轮小学',
          prefx: '2'
        },
        {
          orgId: '1280866553208576',
          orgName: '蚌埠市临渭区蚌埠小学',
          prefx: '2'
        },
        {
          orgId: '1280866676858624',
          orgName: '蚌埠市临渭区沋西小学',
          prefx: '2'
        },
        {
          orgId: '1280866902605568',
          orgName: '蚌埠高新区第三小学',
          prefx: '2'
        },
        {
          orgId: '1280902949986048',
          orgName: '蚌埠中学',
          prefx: '3'
        },
        {
          orgId: '1280918381117184',
          orgName: '蚌埠市瑞泉中学',
          prefx: '3'
        },
        {
          orgId: '1280921252585216',
          orgName: '蚌埠高级中学',
          prefx: '3'
        },
        {
          orgId: '1280921850732288',
          orgName: '安徽合肥中学',
          prefx: '3'
        },
        {
          orgId: '1280922019979008',
          orgName: '‌阜阳市第一中学',
          prefx: '3'
        },
        {
          orgId: '1280922140901120',
          orgName: '‌阜阳市实验中学',
          prefx: '3'
        },
        {
          orgId: '1280922322083584',
          orgName: '‌阜阳实验小学',
          prefx: '2'
        },
        {
          orgId: '1280922434871040',
          orgName: '‌阜阳市宝塔区中石油小学',
          prefx: '2'
        },
        {
          orgId: '1280922811383552',
          orgName: '淮南市实验小学',
          prefx: '2'
        },
        {
          orgId: '1280923447992064',
          orgName: '淮南市东塔小学',
          prefx: '2'
        },
        {
          orgId: '1280923647221504',
          orgName: '安徽省庐阳中学',
          prefx: '3'
        },
        {
          orgId: '1280923850325760',
          orgName: '淮南市汉台第二中学',
          prefx: '3'
        },
        {
          orgId: '1280924451667712',
          orgName: '滁州市第一小学',
          prefx: '2'
        },
        {
          orgId: '1280924624125696',
          orgName: '滁州市第三小学',
          prefx: '2'
        },
        {
          orgId: '1280924790824704',
          orgName: '安徽省滁州中学',
          prefx: '3'
        },
        {
          orgId: '1280924966903552',
          orgName: '滁州市第一中学',
          prefx: '3'
        },
        {
          orgId: '1280925139074816',
          orgName: '滁州市横山中学',
          prefx: '3'
        },
        {
          orgId: '1280925515824896',
          orgName: '安徽省六安中学',
          prefx: '3'
        },
        {
          orgId: '1280925671718656',
          orgName: '六安中学高新分校',
          prefx: '3'
        },
        {
          orgId: '1280925899857664',
          orgName: '六安职业技术学院附属小学',
          prefx: '2'
        },
        {
          orgId: '1280926011129600',
          orgName: '六安市第一小学',
          prefx: '2'
        },
        {
          orgId: '1280926377189120',
          orgName: '‌马鞍山市小学',
          prefx: '2'
        },
        {
          orgId: '1280926488502016',
          orgName: '‌马鞍山市商州区第二小学',
          prefx: '2'
        },
        {
          orgId: '1280926711013120',
          orgName: '安徽省‌马鞍山中学',
          prefx: '3'
        },
        {
          orgId: '1280927378177792',
          orgName: '‌马鞍山市商州秦韵初级中学',
          prefx: '3'
        },
        {
          orgId: '237181339265282048',
          orgName: '安徽中医药大学第二附属医院',
          prefx: ''
        },
        {
          orgId: '237206953598791680',
          orgName: '安徽省‌宿州市教育局',
          prefx: ''
        },
        {
          orgId: '237286224140840960',
          orgName: '文教园第一小学',
          prefx: '2'
        }
      ]);
    }
  },
  {
    url: '/basic-api/base-screen/plan/screeningNumber',
    timeout: 100,
    method: 'post',
    response: () => resultSuccess('@integer(0,999)')
  }
];
