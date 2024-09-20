import { resultPageSuccess, resultSuccess } from '../utils';
export default [
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
    url: '/basic-api/base-screen/plan/report/getPlanList',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          appGroupId: null,
          appGroupName: null,
          appVersion: null,
          applicationId: null,
          areaId: null,
          areaLevel: null,
          checkIndex: null,
          checkNum: null,
          control: null,
          createTime: null,
          creator: null,
          creatorName: null,
          creatorOrg: null,
          creatorOrgName: null,
          endDate: null,
          endTime: null,
          gradeId: null,
          gradeName: null,
          planId: '1283048021704448',
          planMode: null,
          planModeLaber: '',
          planName: '安徽省视力筛查计划',
          planRange: null,
          planRangeLaber: null,
          planStatus: null,
          planStatusLaber: '',
          planType: null,
          planTypeLaber: '',
          planYear: 2023,
          provinceId: null,
          rate: null,
          region: null,
          remark: null,
          schoolId: null,
          schoolName: null,
          screenNum: null,
          screenType: null,
          screeningCondition: null,
          screeningConditionList: null,
          screeningIndex: null,
          screeningOptions: null,
          startTime: null,
          studentNum: null
        }
      ])
  },
  {
    url: '/basic-api/eyesight/report/province/getMyopiaInfoByAge',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        dataList: [
          {
            age: '6岁',
            highMyopiaCount: '452',
            highMyopiaMyopiaRate: 0.6706,
            myopiaCount: '538',
            myopiaMyopiaRate: 0.7982
          },
          {
            age: '7岁',
            highMyopiaCount: '3142',
            highMyopiaMyopiaRate: 0.671,
            myopiaCount: '3729',
            myopiaMyopiaRate: 0.7964
          },
          {
            age: '8岁',
            highMyopiaCount: '3471',
            highMyopiaMyopiaRate: 0.6702,
            myopiaCount: '4105',
            myopiaMyopiaRate: 0.7926
          },
          {
            age: '9岁',
            highMyopiaCount: '3246',
            highMyopiaMyopiaRate: 0.6754,
            myopiaCount: '3808',
            myopiaMyopiaRate: 0.7923
          },
          {
            age: '10岁',
            highMyopiaCount: '3108',
            highMyopiaMyopiaRate: 0.6803,
            myopiaCount: '3630',
            myopiaMyopiaRate: 0.7946
          },
          {
            age: '11岁',
            highMyopiaCount: '3043',
            highMyopiaMyopiaRate: 0.6721,
            myopiaCount: '3560',
            myopiaMyopiaRate: 0.7863
          },
          {
            age: '12岁',
            highMyopiaCount: '3268',
            highMyopiaMyopiaRate: 0.6887,
            myopiaCount: '3797',
            myopiaMyopiaRate: 0.8002
          },
          {
            age: '13岁',
            highMyopiaCount: '3091',
            highMyopiaMyopiaRate: 0.6898,
            myopiaCount: '3581',
            myopiaMyopiaRate: 0.7991
          },
          {
            age: '14岁',
            highMyopiaCount: '3091',
            highMyopiaMyopiaRate: 0.6661,
            myopiaCount: '3695',
            myopiaMyopiaRate: 0.7963
          },
          {
            age: '15岁',
            highMyopiaCount: '3223',
            highMyopiaMyopiaRate: 0.6931,
            myopiaCount: '3741',
            myopiaMyopiaRate: 0.8045
          },
          {
            age: '16岁',
            highMyopiaCount: '0',
            highMyopiaMyopiaRate: 0,
            myopiaCount: '0',
            myopiaMyopiaRate: 0
          }
        ],
        name: '安徽省'
      })
  },
  {
    url: '/basic-api/eyesight/report/province/getVisionDistribute',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        dataList: [
          {
            rate: null,
            vision: '5.3',
            visionNum: 5246
          },
          {
            rate: null,
            vision: '5.2',
            visionNum: 5129
          },
          {
            rate: null,
            vision: '5.1',
            visionNum: 5074
          },
          {
            rate: null,
            vision: '5.0',
            visionNum: 5100
          },
          {
            rate: null,
            vision: '4.9',
            visionNum: 5078
          },
          {
            rate: null,
            vision: '4.8',
            visionNum: 5108
          },
          {
            rate: null,
            vision: '4.7',
            visionNum: 5044
          },
          {
            rate: null,
            vision: '4.6',
            visionNum: 5042
          },
          {
            rate: null,
            vision: '4.5',
            visionNum: 5065
          },
          {
            rate: null,
            vision: '4.4',
            visionNum: 5199
          },
          {
            rate: null,
            vision: '4.3',
            visionNum: 5207
          },
          {
            rate: null,
            vision: '4.2',
            visionNum: 5090
          },
          {
            rate: null,
            vision: '4.1',
            visionNum: 5082
          },
          {
            rate: null,
            vision: '4.0',
            visionNum: 5117
          },
          {
            rate: null,
            vision: '3.9',
            visionNum: 5098
          },
          {
            rate: null,
            vision: '3.8',
            visionNum: 5155
          },
          {
            rate: null,
            vision: '3.7',
            visionNum: 5007
          },
          {
            rate: null,
            vision: '3.6',
            visionNum: 4976
          },
          {
            rate: null,
            vision: '3.5',
            visionNum: 5001
          },
          {
            rate: null,
            vision: '3.4',
            visionNum: 5083
          },
          {
            rate: null,
            vision: '3.3',
            visionNum: 2524
          }
        ],
        name: '安徽省'
      })
  },
  {
    url: '/basic-api/eyesight/report/province/getDiopterSituation',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        dataList: [
          {
            className: null,
            classYear: '2020',
            dpSphAverageValue: -0.25,
            dpSphStandardDeviation: 11.59,
            eqDpSphAverageValue: -5.24,
            eqDpSphStandardDeviation: 11.95,
            gradeName: '',
            name: '(无2020)',
            prefix: 0
          },
          {
            className: null,
            classYear: '2019',
            dpSphAverageValue: -0.5,
            dpSphStandardDeviation: 11.53,
            eqDpSphAverageValue: -5.41,
            eqDpSphStandardDeviation: 11.89,
            gradeName: '',
            name: '(无2019)',
            prefix: 0
          },
          {
            className: null,
            classYear: '2018',
            dpSphAverageValue: -0.93,
            dpSphStandardDeviation: 11.33,
            eqDpSphAverageValue: -5.8,
            eqDpSphStandardDeviation: 11.78,
            gradeName: '',
            name: '(无2018)',
            prefix: 0
          },
          {
            className: null,
            classYear: '2017',
            dpSphAverageValue: 0.26,
            dpSphStandardDeviation: 11.57,
            eqDpSphAverageValue: -4.62,
            eqDpSphStandardDeviation: 11.91,
            gradeName: '',
            name: '(无2017)',
            prefix: 0
          },
          {
            className: null,
            classYear: '2022',
            dpSphAverageValue: 0.04,
            dpSphStandardDeviation: 11.41,
            eqDpSphAverageValue: -4.91,
            eqDpSphStandardDeviation: 11.74,
            gradeName: '一年级',
            name: '(小学2022)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2021',
            dpSphAverageValue: 0.06,
            dpSphStandardDeviation: 11.41,
            eqDpSphAverageValue: -4.86,
            eqDpSphStandardDeviation: 11.75,
            gradeName: '二年级',
            name: '(小学2021)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2020',
            dpSphAverageValue: -0.04,
            dpSphStandardDeviation: 11.43,
            eqDpSphAverageValue: -4.99,
            eqDpSphStandardDeviation: 11.8,
            gradeName: '三年级',
            name: '(小学2020)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2019',
            dpSphAverageValue: -0.18,
            dpSphStandardDeviation: 11.42,
            eqDpSphAverageValue: -5.17,
            eqDpSphStandardDeviation: 11.81,
            gradeName: '四年级',
            name: '(小学2019)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2018',
            dpSphAverageValue: 0.07,
            dpSphStandardDeviation: 11.43,
            eqDpSphAverageValue: -4.86,
            eqDpSphStandardDeviation: 11.81,
            gradeName: '五年级',
            name: '(小学2018)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2017',
            dpSphAverageValue: -0.02,
            dpSphStandardDeviation: 11.5,
            eqDpSphAverageValue: -4.95,
            eqDpSphStandardDeviation: 11.84,
            gradeName: '六年级',
            name: '(小学2017)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2022',
            dpSphAverageValue: -0.09,
            dpSphStandardDeviation: 11.46,
            eqDpSphAverageValue: -5.01,
            eqDpSphStandardDeviation: 11.89,
            gradeName: '初一',
            name: '(初中2022)',
            prefix: 3
          },
          {
            className: null,
            classYear: '2021',
            dpSphAverageValue: 0.01,
            dpSphStandardDeviation: 11.52,
            eqDpSphAverageValue: -4.97,
            eqDpSphStandardDeviation: 11.89,
            gradeName: '初二',
            name: '(初中2021)',
            prefix: 3
          },
          {
            className: null,
            classYear: '2020',
            dpSphAverageValue: -0.05,
            dpSphStandardDeviation: 11.43,
            eqDpSphAverageValue: -5.01,
            eqDpSphStandardDeviation: 11.79,
            gradeName: '初三',
            name: '(初中2020)',
            prefix: 3
          }
        ],
        dpSphList: [
          {
            count: '34',
            data: -20
          },
          {
            count: '874',
            data: -19.75
          },
          {
            count: '874',
            data: -19.5
          },
          {
            count: '949',
            data: -19.25
          },
          {
            count: '876',
            data: -19
          },
          {
            count: '861',
            data: -18.75
          },
          {
            count: '857',
            data: -18.5
          },
          {
            count: '889',
            data: -18.25
          },
          {
            count: '919',
            data: -18
          },
          {
            count: '911',
            data: -17.75
          },
          {
            count: '881',
            data: -17.5
          },
          {
            count: '938',
            data: -17.25
          },
          {
            count: '851',
            data: -17
          },
          {
            count: '918',
            data: -16.75
          },
          {
            count: '903',
            data: -16.5
          },
          {
            count: '862',
            data: -16.25
          },
          {
            count: '914',
            data: -16
          },
          {
            count: '896',
            data: -15.75
          },
          {
            count: '931',
            data: -15.5
          },
          {
            count: '911',
            data: -15.25
          },
          {
            count: '905',
            data: -15
          },
          {
            count: '904',
            data: -14.75
          },
          {
            count: '936',
            data: -14.5
          },
          {
            count: '845',
            data: -14.25
          },
          {
            count: '887',
            data: -14
          },
          {
            count: '929',
            data: -13.75
          },
          {
            count: '858',
            data: -13.5
          },
          {
            count: '886',
            data: -13.25
          },
          {
            count: '890',
            data: -13
          },
          {
            count: '902',
            data: -12.75
          },
          {
            count: '875',
            data: -12.5
          },
          {
            count: '877',
            data: -12.25
          },
          {
            count: '890',
            data: -12
          },
          {
            count: '941',
            data: -11.75
          },
          {
            count: '940',
            data: -11.5
          },
          {
            count: '894',
            data: -11.25
          },
          {
            count: '882',
            data: -11
          },
          {
            count: '912',
            data: -10.75
          },
          {
            count: '868',
            data: -10.5
          },
          {
            count: '867',
            data: -10.25
          },
          {
            count: '933',
            data: -10
          },
          {
            count: '847',
            data: -9.75
          },
          {
            count: '925',
            data: -9.5
          },
          {
            count: '927',
            data: -9.25
          },
          {
            count: '858',
            data: -9
          },
          {
            count: '884',
            data: -8.75
          },
          {
            count: '884',
            data: -8.5
          },
          {
            count: '864',
            data: -8.25
          },
          {
            count: '901',
            data: -8
          },
          {
            count: '904',
            data: -7.75
          },
          {
            count: '862',
            data: -7.5
          },
          {
            count: '938',
            data: -7.25
          },
          {
            count: '881',
            data: -7
          },
          {
            count: '896',
            data: -6.75
          },
          {
            count: '834',
            data: -6.5
          },
          {
            count: '882',
            data: -6.25
          },
          {
            count: '912',
            data: -6
          },
          {
            count: '924',
            data: -5.75
          },
          {
            count: '817',
            data: -5.5
          },
          {
            count: '881',
            data: -5.25
          },
          {
            count: '872',
            data: -5
          },
          {
            count: '878',
            data: -4.75
          },
          {
            count: '898',
            data: -4.5
          },
          {
            count: '892',
            data: -4.25
          },
          {
            count: '881',
            data: -4
          },
          {
            count: '889',
            data: -3.75
          },
          {
            count: '876',
            data: -3.5
          },
          {
            count: '898',
            data: -3.25
          },
          {
            count: '947',
            data: -3
          },
          {
            count: '915',
            data: -2.75
          },
          {
            count: '928',
            data: -2.5
          },
          {
            count: '851',
            data: -2.25
          },
          {
            count: '863',
            data: -2
          },
          {
            count: '890',
            data: -1.75
          },
          {
            count: '885',
            data: -1.5
          },
          {
            count: '879',
            data: -1.25
          },
          {
            count: '869',
            data: -1
          },
          {
            count: '844',
            data: -0.75
          },
          {
            count: '860',
            data: -0.5
          },
          {
            count: '905',
            data: -0.25
          },
          {
            count: '1754',
            data: 0
          },
          {
            count: '876',
            data: 0.25
          },
          {
            count: '887',
            data: 0.5
          },
          {
            count: '875',
            data: 0.75
          },
          {
            count: '893',
            data: 1
          },
          {
            count: '886',
            data: 1.25
          },
          {
            count: '869',
            data: 1.5
          },
          {
            count: '896',
            data: 1.75
          },
          {
            count: '838',
            data: 2
          },
          {
            count: '926',
            data: 2.25
          },
          {
            count: '873',
            data: 2.5
          },
          {
            count: '905',
            data: 2.75
          },
          {
            count: '935',
            data: 3
          },
          {
            count: '901',
            data: 3.25
          },
          {
            count: '868',
            data: 3.5
          },
          {
            count: '922',
            data: 3.75
          },
          {
            count: '868',
            data: 4
          },
          {
            count: '897',
            data: 4.25
          },
          {
            count: '841',
            data: 4.5
          },
          {
            count: '860',
            data: 4.75
          },
          {
            count: '865',
            data: 5
          },
          {
            count: '897',
            data: 5.25
          },
          {
            count: '928',
            data: 5.5
          },
          {
            count: '907',
            data: 5.75
          },
          {
            count: '899',
            data: 6
          },
          {
            count: '876',
            data: 6.25
          },
          {
            count: '917',
            data: 6.5
          },
          {
            count: '898',
            data: 6.75
          },
          {
            count: '866',
            data: 7
          },
          {
            count: '891',
            data: 7.25
          },
          {
            count: '896',
            data: 7.5
          },
          {
            count: '887',
            data: 7.75
          },
          {
            count: '899',
            data: 8
          },
          {
            count: '909',
            data: 8.25
          },
          {
            count: '864',
            data: 8.5
          },
          {
            count: '913',
            data: 8.75
          },
          {
            count: '895',
            data: 9
          },
          {
            count: '882',
            data: 9.25
          },
          {
            count: '901',
            data: 9.5
          },
          {
            count: '884',
            data: 9.75
          },
          {
            count: '860',
            data: 10
          },
          {
            count: '919',
            data: 10.25
          },
          {
            count: '885',
            data: 10.5
          },
          {
            count: '902',
            data: 10.75
          },
          {
            count: '909',
            data: 11
          },
          {
            count: '869',
            data: 11.25
          },
          {
            count: '855',
            data: 11.5
          },
          {
            count: '914',
            data: 11.75
          },
          {
            count: '873',
            data: 12
          },
          {
            count: '944',
            data: 12.25
          },
          {
            count: '872',
            data: 12.5
          },
          {
            count: '867',
            data: 12.75
          },
          {
            count: '902',
            data: 13
          },
          {
            count: '902',
            data: 13.25
          },
          {
            count: '885',
            data: 13.5
          },
          {
            count: '884',
            data: 13.75
          },
          {
            count: '880',
            data: 14
          },
          {
            count: '849',
            data: 14.25
          },
          {
            count: '876',
            data: 14.5
          },
          {
            count: '891',
            data: 14.75
          },
          {
            count: '886',
            data: 15
          },
          {
            count: '894',
            data: 15.25
          },
          {
            count: '872',
            data: 15.5
          },
          {
            count: '901',
            data: 15.75
          },
          {
            count: '889',
            data: 16
          },
          {
            count: '891',
            data: 16.25
          },
          {
            count: '869',
            data: 16.5
          },
          {
            count: '864',
            data: 16.75
          },
          {
            count: '847',
            data: 17
          },
          {
            count: '871',
            data: 17.25
          },
          {
            count: '911',
            data: 17.5
          },
          {
            count: '925',
            data: 17.75
          },
          {
            count: '897',
            data: 18
          },
          {
            count: '874',
            data: 18.25
          },
          {
            count: '860',
            data: 18.5
          },
          {
            count: '920',
            data: 18.75
          },
          {
            count: '893',
            data: 19
          },
          {
            count: '893',
            data: 19.25
          },
          {
            count: '893',
            data: 19.5
          },
          {
            count: '832',
            data: 19.75
          },
          {
            count: '31',
            data: 20
          }
        ],
        eqDpSphList: [
          {
            count: '1',
            data: -29.75
          },
          {
            count: '9',
            data: -29.63
          },
          {
            count: '8',
            data: -29.5
          },
          {
            count: '18',
            data: -29.38
          },
          {
            count: '25',
            data: -29.25
          },
          {
            count: '39',
            data: -29.13
          },
          {
            count: '36',
            data: -29
          },
          {
            count: '41',
            data: -28.88
          },
          {
            count: '45',
            data: -28.75
          },
          {
            count: '67',
            data: -28.63
          },
          {
            count: '64',
            data: -28.5
          },
          {
            count: '66',
            data: -28.38
          },
          {
            count: '59',
            data: -28.25
          },
          {
            count: '83',
            data: -28.13
          },
          {
            count: '72',
            data: -28
          },
          {
            count: '86',
            data: -27.88
          },
          {
            count: '93',
            data: -27.75
          },
          {
            count: '102',
            data: -27.63
          },
          {
            count: '107',
            data: -27.5
          },
          {
            count: '100',
            data: -27.38
          },
          {
            count: '99',
            data: -27.25
          },
          {
            count: '128',
            data: -27.13
          },
          {
            count: '132',
            data: -27
          },
          {
            count: '130',
            data: -26.88
          },
          {
            count: '116',
            data: -26.75
          },
          {
            count: '146',
            data: -26.63
          },
          {
            count: '142',
            data: -26.5
          },
          {
            count: '151',
            data: -26.38
          },
          {
            count: '161',
            data: -26.25
          },
          {
            count: '172',
            data: -26.13
          },
          {
            count: '166',
            data: -26
          },
          {
            count: '184',
            data: -25.88
          },
          {
            count: '207',
            data: -25.75
          },
          {
            count: '186',
            data: -25.63
          },
          {
            count: '181',
            data: -25.5
          },
          {
            count: '221',
            data: -25.38
          },
          {
            count: '206',
            data: -25.25
          },
          {
            count: '215',
            data: -25.13
          },
          {
            count: '213',
            data: -25
          },
          {
            count: '260',
            data: -24.88
          },
          {
            count: '234',
            data: -24.75
          },
          {
            count: '258',
            data: -24.63
          },
          {
            count: '257',
            data: -24.5
          },
          {
            count: '229',
            data: -24.38
          },
          {
            count: '236',
            data: -24.25
          },
          {
            count: '242',
            data: -24.13
          },
          {
            count: '283',
            data: -24
          },
          {
            count: '243',
            data: -23.88
          },
          {
            count: '285',
            data: -23.75
          },
          {
            count: '267',
            data: -23.63
          },
          {
            count: '272',
            data: -23.5
          },
          {
            count: '309',
            data: -23.38
          },
          {
            count: '273',
            data: -23.25
          },
          {
            count: '269',
            data: -23.13
          },
          {
            count: '292',
            data: -23
          },
          {
            count: '328',
            data: -22.88
          },
          {
            count: '303',
            data: -22.75
          },
          {
            count: '329',
            data: -22.63
          },
          {
            count: '333',
            data: -22.5
          },
          {
            count: '325',
            data: -22.38
          },
          {
            count: '354',
            data: -22.25
          },
          {
            count: '381',
            data: -22.13
          },
          {
            count: '346',
            data: -22
          },
          {
            count: '366',
            data: -21.88
          },
          {
            count: '362',
            data: -21.75
          },
          {
            count: '365',
            data: -21.63
          },
          {
            count: '406',
            data: -21.5
          },
          {
            count: '345',
            data: -21.38
          },
          {
            count: '400',
            data: -21.25
          },
          {
            count: '401',
            data: -21.13
          },
          {
            count: '375',
            data: -21
          },
          {
            count: '423',
            data: -20.88
          },
          {
            count: '418',
            data: -20.75
          },
          {
            count: '421',
            data: -20.63
          },
          {
            count: '380',
            data: -20.5
          },
          {
            count: '434',
            data: -20.38
          },
          {
            count: '452',
            data: -20.25
          },
          {
            count: '414',
            data: -20.13
          },
          {
            count: '420',
            data: -20
          },
          {
            count: '473',
            data: -19.88
          },
          {
            count: '461',
            data: -19.75
          },
          {
            count: '445',
            data: -19.63
          },
          {
            count: '427',
            data: -19.5
          },
          {
            count: '463',
            data: -19.38
          },
          {
            count: '469',
            data: -19.25
          },
          {
            count: '438',
            data: -19.13
          },
          {
            count: '432',
            data: -19
          },
          {
            count: '432',
            data: -18.88
          },
          {
            count: '478',
            data: -18.75
          },
          {
            count: '438',
            data: -18.63
          },
          {
            count: '440',
            data: -18.5
          },
          {
            count: '481',
            data: -18.38
          },
          {
            count: '498',
            data: -18.25
          },
          {
            count: '426',
            data: -18.13
          },
          {
            count: '457',
            data: -18
          },
          {
            count: '469',
            data: -17.88
          },
          {
            count: '447',
            data: -17.75
          },
          {
            count: '436',
            data: -17.63
          },
          {
            count: '431',
            data: -17.5
          },
          {
            count: '437',
            data: -17.38
          },
          {
            count: '458',
            data: -17.25
          },
          {
            count: '434',
            data: -17.13
          },
          {
            count: '443',
            data: -17
          },
          {
            count: '421',
            data: -16.88
          },
          {
            count: '455',
            data: -16.75
          },
          {
            count: '450',
            data: -16.63
          },
          {
            count: '442',
            data: -16.5
          },
          {
            count: '429',
            data: -16.38
          },
          {
            count: '400',
            data: -16.25
          },
          {
            count: '448',
            data: -16.13
          },
          {
            count: '436',
            data: -16
          },
          {
            count: '442',
            data: -15.88
          },
          {
            count: '450',
            data: -15.75
          },
          {
            count: '449',
            data: -15.63
          },
          {
            count: '406',
            data: -15.5
          },
          {
            count: '436',
            data: -15.38
          },
          {
            count: '431',
            data: -15.25
          },
          {
            count: '415',
            data: -15.13
          },
          {
            count: '460',
            data: -15
          },
          {
            count: '439',
            data: -14.88
          },
          {
            count: '424',
            data: -14.75
          },
          {
            count: '434',
            data: -14.63
          },
          {
            count: '425',
            data: -14.5
          },
          {
            count: '413',
            data: -14.38
          },
          {
            count: '410',
            data: -14.25
          },
          {
            count: '429',
            data: -14.13
          },
          {
            count: '468',
            data: -14
          },
          {
            count: '445',
            data: -13.88
          },
          {
            count: '438',
            data: -13.75
          },
          {
            count: '496',
            data: -13.63
          },
          {
            count: '455',
            data: -13.5
          },
          {
            count: '436',
            data: -13.38
          },
          {
            count: '452',
            data: -13.25
          },
          {
            count: '439',
            data: -13.13
          },
          {
            count: '463',
            data: -13
          },
          {
            count: '487',
            data: -12.88
          },
          {
            count: '434',
            data: -12.75
          },
          {
            count: '475',
            data: -12.63
          },
          {
            count: '439',
            data: -12.5
          },
          {
            count: '436',
            data: -12.38
          },
          {
            count: '456',
            data: -12.25
          },
          {
            count: '486',
            data: -12.13
          },
          {
            count: '458',
            data: -12
          },
          {
            count: '460',
            data: -11.88
          },
          {
            count: '452',
            data: -11.75
          },
          {
            count: '431',
            data: -11.63
          },
          {
            count: '451',
            data: -11.5
          },
          {
            count: '451',
            data: -11.38
          },
          {
            count: '428',
            data: -11.25
          },
          {
            count: '400',
            data: -11.13
          },
          {
            count: '455',
            data: -11
          },
          {
            count: '454',
            data: -10.88
          },
          {
            count: '487',
            data: -10.75
          },
          {
            count: '414',
            data: -10.63
          },
          {
            count: '439',
            data: -10.5
          },
          {
            count: '476',
            data: -10.38
          },
          {
            count: '401',
            data: -10.25
          },
          {
            count: '462',
            data: -10.13
          },
          {
            count: '406',
            data: -10
          },
          {
            count: '465',
            data: -9.88
          },
          {
            count: '471',
            data: -9.75
          },
          {
            count: '458',
            data: -9.63
          },
          {
            count: '453',
            data: -9.5
          },
          {
            count: '454',
            data: -9.38
          },
          {
            count: '463',
            data: -9.25
          },
          {
            count: '467',
            data: -9.13
          },
          {
            count: '450',
            data: -9
          },
          {
            count: '448',
            data: -8.88
          },
          {
            count: '452',
            data: -8.75
          },
          {
            count: '477',
            data: -8.63
          },
          {
            count: '471',
            data: -8.5
          },
          {
            count: '438',
            data: -8.38
          },
          {
            count: '434',
            data: -8.25
          },
          {
            count: '458',
            data: -8.13
          },
          {
            count: '461',
            data: -8
          },
          {
            count: '459',
            data: -7.88
          },
          {
            count: '419',
            data: -7.75
          },
          {
            count: '452',
            data: -7.63
          },
          {
            count: '442',
            data: -7.5
          },
          {
            count: '456',
            data: -7.38
          },
          {
            count: '450',
            data: -7.25
          },
          {
            count: '444',
            data: -7.13
          },
          {
            count: '444',
            data: -7
          },
          {
            count: '482',
            data: -6.88
          },
          {
            count: '474',
            data: -6.75
          },
          {
            count: '396',
            data: -6.63
          },
          {
            count: '458',
            data: -6.5
          },
          {
            count: '444',
            data: -6.38
          },
          {
            count: '452',
            data: -6.25
          },
          {
            count: '450',
            data: -6.13
          },
          {
            count: '428',
            data: -6
          },
          {
            count: '469',
            data: -5.88
          },
          {
            count: '436',
            data: -5.75
          },
          {
            count: '451',
            data: -5.63
          },
          {
            count: '436',
            data: -5.5
          },
          {
            count: '449',
            data: -5.38
          },
          {
            count: '433',
            data: -5.25
          },
          {
            count: '448',
            data: -5.13
          },
          {
            count: '488',
            data: -5
          },
          {
            count: '423',
            data: -4.88
          },
          {
            count: '439',
            data: -4.75
          },
          {
            count: '439',
            data: -4.63
          },
          {
            count: '490',
            data: -4.5
          },
          {
            count: '459',
            data: -4.38
          },
          {
            count: '478',
            data: -4.25
          },
          {
            count: '448',
            data: -4.13
          },
          {
            count: '436',
            data: -4
          },
          {
            count: '437',
            data: -3.88
          },
          {
            count: '457',
            data: -3.75
          },
          {
            count: '447',
            data: -3.63
          },
          {
            count: '455',
            data: -3.5
          },
          {
            count: '427',
            data: -3.38
          },
          {
            count: '459',
            data: -3.25
          },
          {
            count: '475',
            data: -3.13
          },
          {
            count: '465',
            data: -3
          },
          {
            count: '472',
            data: -2.88
          },
          {
            count: '483',
            data: -2.75
          },
          {
            count: '479',
            data: -2.63
          },
          {
            count: '481',
            data: -2.5
          },
          {
            count: '433',
            data: -2.38
          },
          {
            count: '396',
            data: -2.25
          },
          {
            count: '480',
            data: -2.13
          },
          {
            count: '455',
            data: -2
          },
          {
            count: '484',
            data: -1.88
          },
          {
            count: '454',
            data: -1.75
          },
          {
            count: '459',
            data: -1.63
          },
          {
            count: '463',
            data: -1.5
          },
          {
            count: '486',
            data: -1.38
          },
          {
            count: '491',
            data: -1.25
          },
          {
            count: '435',
            data: -1.13
          },
          {
            count: '432',
            data: -1
          },
          {
            count: '431',
            data: -0.88
          },
          {
            count: '464',
            data: -0.75
          },
          {
            count: '470',
            data: -0.63
          },
          {
            count: '489',
            data: -0.5
          },
          {
            count: '453',
            data: -0.38
          },
          {
            count: '443',
            data: -0.25
          },
          {
            count: '474',
            data: -0.13
          },
          {
            count: '457',
            data: 0
          },
          {
            count: '441',
            data: 0.13
          },
          {
            count: '422',
            data: 0.25
          },
          {
            count: '449',
            data: 0.38
          },
          {
            count: '455',
            data: 0.5
          },
          {
            count: '437',
            data: 0.63
          },
          {
            count: '448',
            data: 0.75
          },
          {
            count: '457',
            data: 0.88
          },
          {
            count: '438',
            data: 1
          },
          {
            count: '444',
            data: 1.13
          },
          {
            count: '431',
            data: 1.25
          },
          {
            count: '439',
            data: 1.38
          },
          {
            count: '473',
            data: 1.5
          },
          {
            count: '443',
            data: 1.63
          },
          {
            count: '399',
            data: 1.75
          },
          {
            count: '459',
            data: 1.88
          },
          {
            count: '460',
            data: 2
          },
          {
            count: '443',
            data: 2.13
          },
          {
            count: '443',
            data: 2.25
          },
          {
            count: '455',
            data: 2.38
          },
          {
            count: '425',
            data: 2.5
          },
          {
            count: '453',
            data: 2.63
          },
          {
            count: '469',
            data: 2.75
          },
          {
            count: '475',
            data: 2.88
          },
          {
            count: '438',
            data: 3
          },
          {
            count: '448',
            data: 3.13
          },
          {
            count: '434',
            data: 3.25
          },
          {
            count: '456',
            data: 3.38
          },
          {
            count: '442',
            data: 3.5
          },
          {
            count: '415',
            data: 3.63
          },
          {
            count: '448',
            data: 3.75
          },
          {
            count: '426',
            data: 3.88
          },
          {
            count: '411',
            data: 4
          },
          {
            count: '462',
            data: 4.13
          },
          {
            count: '426',
            data: 4.25
          },
          {
            count: '457',
            data: 4.38
          },
          {
            count: '440',
            data: 4.5
          },
          {
            count: '451',
            data: 4.63
          },
          {
            count: '469',
            data: 4.75
          },
          {
            count: '435',
            data: 4.88
          },
          {
            count: '440',
            data: 5
          },
          {
            count: '396',
            data: 5.13
          },
          {
            count: '467',
            data: 5.25
          },
          {
            count: '428',
            data: 5.38
          },
          {
            count: '478',
            data: 5.5
          },
          {
            count: '446',
            data: 5.63
          },
          {
            count: '423',
            data: 5.75
          },
          {
            count: '443',
            data: 5.88
          },
          {
            count: '451',
            data: 6
          },
          {
            count: '440',
            data: 6.13
          },
          {
            count: '465',
            data: 6.25
          },
          {
            count: '466',
            data: 6.38
          },
          {
            count: '435',
            data: 6.5
          },
          {
            count: '453',
            data: 6.63
          },
          {
            count: '435',
            data: 6.75
          },
          {
            count: '462',
            data: 6.88
          },
          {
            count: '457',
            data: 7
          },
          {
            count: '477',
            data: 7.13
          },
          {
            count: '461',
            data: 7.25
          },
          {
            count: '400',
            data: 7.38
          },
          {
            count: '436',
            data: 7.5
          },
          {
            count: '424',
            data: 7.63
          },
          {
            count: '423',
            data: 7.75
          },
          {
            count: '453',
            data: 7.88
          },
          {
            count: '441',
            data: 8
          },
          {
            count: '416',
            data: 8.13
          },
          {
            count: '455',
            data: 8.25
          },
          {
            count: '463',
            data: 8.38
          },
          {
            count: '438',
            data: 8.5
          },
          {
            count: '424',
            data: 8.63
          },
          {
            count: '471',
            data: 8.75
          },
          {
            count: '415',
            data: 8.88
          },
          {
            count: '454',
            data: 9
          },
          {
            count: '490',
            data: 9.13
          },
          {
            count: '434',
            data: 9.25
          },
          {
            count: '425',
            data: 9.38
          },
          {
            count: '439',
            data: 9.5
          },
          {
            count: '451',
            data: 9.63
          },
          {
            count: '477',
            data: 9.75
          },
          {
            count: '472',
            data: 9.88
          },
          {
            count: '421',
            data: 10
          },
          {
            count: '414',
            data: 10.13
          },
          {
            count: '389',
            data: 10.25
          },
          {
            count: '390',
            data: 10.38
          },
          {
            count: '454',
            data: 10.5
          },
          {
            count: '369',
            data: 10.63
          },
          {
            count: '416',
            data: 10.75
          },
          {
            count: '427',
            data: 10.88
          },
          {
            count: '420',
            data: 11
          },
          {
            count: '378',
            data: 11.13
          },
          {
            count: '388',
            data: 11.25
          },
          {
            count: '375',
            data: 11.38
          },
          {
            count: '351',
            data: 11.5
          },
          {
            count: '387',
            data: 11.63
          },
          {
            count: '380',
            data: 11.75
          },
          {
            count: '341',
            data: 11.88
          },
          {
            count: '384',
            data: 12
          },
          {
            count: '339',
            data: 12.13
          },
          {
            count: '359',
            data: 12.25
          },
          {
            count: '345',
            data: 12.38
          },
          {
            count: '356',
            data: 12.5
          },
          {
            count: '318',
            data: 12.63
          },
          {
            count: '297',
            data: 12.75
          },
          {
            count: '328',
            data: 12.88
          },
          {
            count: '308',
            data: 13
          },
          {
            count: '278',
            data: 13.13
          },
          {
            count: '285',
            data: 13.25
          },
          {
            count: '268',
            data: 13.38
          },
          {
            count: '329',
            data: 13.5
          },
          {
            count: '289',
            data: 13.63
          },
          {
            count: '260',
            data: 13.75
          },
          {
            count: '227',
            data: 13.88
          },
          {
            count: '267',
            data: 14
          },
          {
            count: '251',
            data: 14.13
          },
          {
            count: '285',
            data: 14.25
          },
          {
            count: '227',
            data: 14.38
          },
          {
            count: '239',
            data: 14.5
          },
          {
            count: '236',
            data: 14.63
          },
          {
            count: '232',
            data: 14.75
          },
          {
            count: '206',
            data: 14.88
          },
          {
            count: '218',
            data: 15
          },
          {
            count: '233',
            data: 15.13
          },
          {
            count: '202',
            data: 15.25
          },
          {
            count: '197',
            data: 15.38
          },
          {
            count: '211',
            data: 15.5
          },
          {
            count: '179',
            data: 15.63
          },
          {
            count: '173',
            data: 15.75
          },
          {
            count: '154',
            data: 15.88
          },
          {
            count: '187',
            data: 16
          },
          {
            count: '158',
            data: 16.13
          },
          {
            count: '150',
            data: 16.25
          },
          {
            count: '162',
            data: 16.38
          },
          {
            count: '164',
            data: 16.5
          },
          {
            count: '143',
            data: 16.63
          },
          {
            count: '159',
            data: 16.75
          },
          {
            count: '139',
            data: 16.88
          },
          {
            count: '138',
            data: 17
          },
          {
            count: '106',
            data: 17.13
          },
          {
            count: '112',
            data: 17.25
          },
          {
            count: '109',
            data: 17.38
          },
          {
            count: '137',
            data: 17.5
          },
          {
            count: '99',
            data: 17.63
          },
          {
            count: '98',
            data: 17.75
          },
          {
            count: '85',
            data: 17.88
          },
          {
            count: '105',
            data: 18
          },
          {
            count: '75',
            data: 18.13
          },
          {
            count: '73',
            data: 18.25
          },
          {
            count: '55',
            data: 18.38
          },
          {
            count: '55',
            data: 18.5
          },
          {
            count: '61',
            data: 18.63
          },
          {
            count: '53',
            data: 18.75
          },
          {
            count: '51',
            data: 18.88
          },
          {
            count: '47',
            data: 19
          },
          {
            count: '33',
            data: 19.13
          },
          {
            count: '38',
            data: 19.25
          },
          {
            count: '24',
            data: 19.38
          },
          {
            count: '25',
            data: 19.5
          },
          {
            count: '3',
            data: 19.63
          },
          {
            count: '10',
            data: 19.75
          }
        ],
        name: '安徽省'
      })
  },
  {
    url: '/basic-api/eyesight/report/province/getMyopiaCorrectInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        city: '安徽省',
        contactLensStdCount: '13053',
        correctMyopiaRate: 0.0525,
        correctMyopiaStdCount: '2973',
        frameGlassesStdCount: '12938',
        gradeMyopiaCorrectInfos: [
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '1381',
            correctMyopiaRate: 0.048,
            correctMyopiaStdCount: '277',
            frameGlassesStdCount: '1322',
            gradeId: '921830381248271',
            gradeName: '一年级',
            manCorrectMyopiaRate: 0.0493,
            manCorrectMyopiaStdCount: '96',
            manMyopiaStdCount: '1946',
            manUdMyopiaRate: 0.724,
            manUdMyopiaStdCount: '1409',
            manUnMyopiaRate: 0.2266,
            manUnMyopiaStdCount: '441',
            myopiaStdCount: '5764',
            okLensStdCount: '1775',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2022',
            udMyopiaRate: 0.7288,
            udMyopiaStdCount: '4201',
            unMyopiaRate: 0.2231,
            unMyopiaStdCount: '1286',
            womanCorrectMyopiaRate: 0.0466,
            womanCorrectMyopiaStdCount: '90',
            womanMyopiaStdCount: '1930',
            womanUdMyopiaRate: 0.7217,
            womanUdMyopiaStdCount: '1393',
            womanUnMyopiaRate: 0.2316,
            womanUnMyopiaStdCount: '447'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '1357',
            correctMyopiaRate: 0.0487,
            correctMyopiaStdCount: '284',
            frameGlassesStdCount: '1325',
            gradeId: '921830381248272',
            gradeName: '二年级',
            manCorrectMyopiaRate: 0.0544,
            manCorrectMyopiaStdCount: '103',
            manMyopiaStdCount: '1892',
            manUdMyopiaRate: 0.7114,
            manUdMyopiaStdCount: '1346',
            manUnMyopiaRate: 0.2341,
            manUnMyopiaStdCount: '443',
            myopiaStdCount: '5822',
            okLensStdCount: '1808',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2021',
            udMyopiaRate: 0.7224,
            udMyopiaStdCount: '4206',
            unMyopiaRate: 0.2287,
            unMyopiaStdCount: '1332',
            womanCorrectMyopiaRate: 0.0504,
            womanCorrectMyopiaStdCount: '97',
            womanMyopiaStdCount: '1924',
            womanUdMyopiaRate: 0.7203,
            womanUdMyopiaStdCount: '1386',
            womanUnMyopiaRate: 0.2292,
            womanUnMyopiaStdCount: '441'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '1570',
            correctMyopiaRate: 0.0551,
            correctMyopiaStdCount: '386',
            frameGlassesStdCount: '1627',
            gradeId: '921830381248273',
            gradeName: '三年级',
            manCorrectMyopiaRate: 0.0486,
            manCorrectMyopiaStdCount: '123',
            manMyopiaStdCount: '2530',
            manUdMyopiaRate: 0.7173,
            manUdMyopiaStdCount: '1815',
            manUnMyopiaRate: 0.2339,
            manUnMyopiaStdCount: '592',
            myopiaStdCount: '7000',
            okLensStdCount: '2172',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2020',
            udMyopiaRate: 0.7118,
            udMyopiaStdCount: '4983',
            unMyopiaRate: 0.233,
            unMyopiaStdCount: '1631',
            womanCorrectMyopiaRate: 0.0594,
            womanCorrectMyopiaStdCount: '148',
            womanMyopiaStdCount: '2489',
            womanUdMyopiaRate: 0.6942,
            womanUdMyopiaStdCount: '1728',
            womanUnMyopiaRate: 0.2462,
            womanUnMyopiaStdCount: '613'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '176',
            correctMyopiaRate: 0.0422,
            correctMyopiaStdCount: '32',
            frameGlassesStdCount: '190',
            gradeId: '921830381248273',
            gradeName: '',
            manCorrectMyopiaRate: 0.0398,
            manCorrectMyopiaStdCount: '15',
            manMyopiaStdCount: '376',
            manUdMyopiaRate: 0.7367,
            manUdMyopiaStdCount: '277',
            manUnMyopiaRate: 0.2234,
            manUnMyopiaStdCount: '84',
            myopiaStdCount: '758',
            okLensStdCount: '212',
            otherRate: 0,
            prefix: 0,
            prefixName: '无',
            schoolId: null,
            schoolName: null,
            studyYear: '2020',
            udMyopiaRate: 0.7203,
            udMyopiaStdCount: '546',
            unMyopiaRate: 0.2374,
            unMyopiaStdCount: '180',
            womanCorrectMyopiaRate: 0.0445,
            womanCorrectMyopiaStdCount: '17',
            womanMyopiaStdCount: '382',
            womanUdMyopiaRate: 0.7041,
            womanUdMyopiaStdCount: '269',
            womanUnMyopiaRate: 0.2513,
            womanUnMyopiaStdCount: '96'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '1573',
            correctMyopiaRate: 0.0529,
            correctMyopiaStdCount: '366',
            frameGlassesStdCount: '1601',
            gradeId: '921830381248274',
            gradeName: '四年级',
            manCorrectMyopiaRate: 0.0529,
            manCorrectMyopiaStdCount: '129',
            manMyopiaStdCount: '2436',
            manUdMyopiaRate: 0.729,
            manUdMyopiaStdCount: '1776',
            manUnMyopiaRate: 0.2179,
            manUnMyopiaStdCount: '531',
            myopiaStdCount: '6910',
            okLensStdCount: '2146',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2019',
            udMyopiaRate: 0.7169,
            udMyopiaStdCount: '4954',
            unMyopiaRate: 0.2301,
            unMyopiaStdCount: '1590',
            womanCorrectMyopiaRate: 0.0537,
            womanCorrectMyopiaStdCount: '132',
            womanMyopiaStdCount: '2456',
            womanUdMyopiaRate: 0.706,
            womanUdMyopiaStdCount: '1734',
            womanUnMyopiaRate: 0.2402,
            womanUnMyopiaStdCount: '590'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '168',
            correctMyopiaRate: 0.0667,
            correctMyopiaStdCount: '45',
            frameGlassesStdCount: '133',
            gradeId: '921830381248274',
            gradeName: '',
            manCorrectMyopiaRate: 0.0695,
            manCorrectMyopiaStdCount: '24',
            manMyopiaStdCount: '345',
            manUdMyopiaRate: 0.7159,
            manUdMyopiaStdCount: '247',
            manUnMyopiaRate: 0.2144,
            manUnMyopiaStdCount: '74',
            myopiaStdCount: '674',
            okLensStdCount: '209',
            otherRate: 0,
            prefix: 0,
            prefixName: '无',
            schoolId: null,
            schoolName: null,
            studyYear: '2019',
            udMyopiaRate: 0.6899,
            udMyopiaStdCount: '465',
            unMyopiaRate: 0.2433,
            unMyopiaStdCount: '164',
            womanCorrectMyopiaRate: 0.0638,
            womanCorrectMyopiaStdCount: '21',
            womanMyopiaStdCount: '329',
            womanUdMyopiaRate: 0.6626,
            womanUdMyopiaStdCount: '218',
            womanUnMyopiaRate: 0.2735,
            womanUnMyopiaStdCount: '90'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '1558',
            correctMyopiaRate: 0.053,
            correctMyopiaStdCount: '362',
            frameGlassesStdCount: '1552',
            gradeId: '921830381248275',
            gradeName: '五年级',
            manCorrectMyopiaRate: 0.0486,
            manCorrectMyopiaStdCount: '119',
            manMyopiaStdCount: '2444',
            manUdMyopiaRate: 0.7127,
            manUdMyopiaStdCount: '1742',
            manUnMyopiaRate: 0.2385,
            manUnMyopiaStdCount: '583',
            myopiaStdCount: '6820',
            okLensStdCount: '2099',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2018',
            udMyopiaRate: 0.7107,
            udMyopiaStdCount: '4847',
            unMyopiaRate: 0.2362,
            unMyopiaStdCount: '1611',
            womanCorrectMyopiaRate: 0.0518,
            womanCorrectMyopiaStdCount: '126',
            womanMyopiaStdCount: '2431',
            womanUdMyopiaRate: 0.7075,
            womanUdMyopiaStdCount: '1720',
            womanUnMyopiaRate: 0.2406,
            womanUnMyopiaStdCount: '585'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '109',
            correctMyopiaRate: 0.0497,
            correctMyopiaStdCount: '23',
            frameGlassesStdCount: '108',
            gradeId: '921830381248275',
            gradeName: '',
            manCorrectMyopiaRate: 0.0376,
            manCorrectMyopiaStdCount: '9',
            manMyopiaStdCount: '239',
            manUdMyopiaRate: 0.7698,
            manUdMyopiaStdCount: '184',
            manUnMyopiaRate: 0.1924,
            manUnMyopiaStdCount: '46',
            myopiaStdCount: '462',
            okLensStdCount: '150',
            otherRate: 0,
            prefix: 0,
            prefixName: '无',
            schoolId: null,
            schoolName: null,
            studyYear: '2018',
            udMyopiaRate: 0.7445,
            udMyopiaStdCount: '344',
            unMyopiaRate: 0.2056,
            unMyopiaStdCount: '95',
            womanCorrectMyopiaRate: 0.0627,
            womanCorrectMyopiaStdCount: '14',
            womanMyopiaStdCount: '223',
            womanUdMyopiaRate: 0.7174,
            womanUdMyopiaStdCount: '160',
            womanUnMyopiaRate: 0.2197,
            womanUnMyopiaStdCount: '49'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '88',
            correctMyopiaRate: 0.0623,
            correctMyopiaStdCount: '23',
            frameGlassesStdCount: '86',
            gradeId: '921830381248276',
            gradeName: '',
            manCorrectMyopiaRate: 0.0744,
            manCorrectMyopiaStdCount: '14',
            manMyopiaStdCount: '188',
            manUdMyopiaRate: 0.7074,
            manUdMyopiaStdCount: '133',
            manUnMyopiaRate: 0.218,
            manUnMyopiaStdCount: '41',
            myopiaStdCount: '369',
            okLensStdCount: '117',
            otherRate: 0,
            prefix: 0,
            prefixName: '无',
            schoolId: null,
            schoolName: null,
            studyYear: '2017',
            udMyopiaRate: 0.7262,
            udMyopiaStdCount: '268',
            unMyopiaRate: 0.2113,
            unMyopiaStdCount: '78',
            womanCorrectMyopiaRate: 0.0497,
            womanCorrectMyopiaStdCount: '9',
            womanMyopiaStdCount: '181',
            womanUdMyopiaRate: 0.7458,
            womanUdMyopiaStdCount: '135',
            womanUnMyopiaRate: 0.2044,
            womanUnMyopiaStdCount: '37'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '1638',
            correctMyopiaRate: 0.0518,
            correctMyopiaStdCount: '362',
            frameGlassesStdCount: '1552',
            gradeId: '921830381248276',
            gradeName: '六年级',
            manCorrectMyopiaRate: 0.0501,
            manCorrectMyopiaStdCount: '124',
            manMyopiaStdCount: '2471',
            manUdMyopiaRate: 0.7195,
            manUdMyopiaStdCount: '1778',
            manUnMyopiaRate: 0.2302,
            manUnMyopiaStdCount: '569',
            myopiaStdCount: '6975',
            okLensStdCount: '2155',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2017',
            udMyopiaRate: 0.7144,
            udMyopiaStdCount: '4983',
            unMyopiaRate: 0.2336,
            unMyopiaStdCount: '1630',
            womanCorrectMyopiaRate: 0.0564,
            womanCorrectMyopiaStdCount: '141',
            womanMyopiaStdCount: '2498',
            womanUdMyopiaRate: 0.7017,
            womanUdMyopiaStdCount: '1753',
            womanUnMyopiaRate: 0.2417,
            womanUnMyopiaStdCount: '604'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '1088',
            correctMyopiaRate: 0.0523,
            correctMyopiaStdCount: '249',
            frameGlassesStdCount: '1061',
            gradeId: '921830381248277',
            gradeName: '初一',
            manCorrectMyopiaRate: 0.0517,
            manCorrectMyopiaStdCount: '81',
            manMyopiaStdCount: '1564',
            manUdMyopiaRate: 0.7301,
            manUdMyopiaStdCount: '1142',
            manUnMyopiaRate: 0.218,
            manUnMyopiaStdCount: '341',
            myopiaStdCount: '4759',
            okLensStdCount: '1528',
            otherRate: 0,
            prefix: 3,
            prefixName: '初中',
            schoolId: null,
            schoolName: null,
            studyYear: '2022',
            udMyopiaRate: 0.7203,
            udMyopiaStdCount: '3428',
            unMyopiaRate: 0.2273,
            unMyopiaStdCount: '1082',
            womanCorrectMyopiaRate: 0.0445,
            womanCorrectMyopiaStdCount: '70',
            womanMyopiaStdCount: '1571',
            womanUdMyopiaRate: 0.7173,
            womanUdMyopiaStdCount: '1127',
            womanUnMyopiaRate: 0.238,
            womanUnMyopiaStdCount: '374'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '1057',
            correctMyopiaRate: 0.0552,
            correctMyopiaStdCount: '262',
            frameGlassesStdCount: '1042',
            gradeId: '921830381248278',
            gradeName: '初二',
            manCorrectMyopiaRate: 0.0586,
            manCorrectMyopiaStdCount: '94',
            manMyopiaStdCount: '1602',
            manUdMyopiaRate: 0.7159,
            manUdMyopiaStdCount: '1147',
            manUnMyopiaRate: 0.2253,
            manUnMyopiaStdCount: '361',
            myopiaStdCount: '4744',
            okLensStdCount: '1533',
            otherRate: 0,
            prefix: 3,
            prefixName: '初中',
            schoolId: null,
            schoolName: null,
            studyYear: '2021',
            udMyopiaRate: 0.7103,
            udMyopiaStdCount: '3370',
            unMyopiaRate: 0.2344,
            unMyopiaStdCount: '1112',
            womanCorrectMyopiaRate: 0.047,
            womanCorrectMyopiaStdCount: '73',
            womanMyopiaStdCount: '1551',
            womanUdMyopiaRate: 0.7085,
            womanUdMyopiaStdCount: '1099',
            womanUnMyopiaRate: 0.2443,
            womanUnMyopiaStdCount: '379'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '1290',
            correctMyopiaRate: 0.0544,
            correctMyopiaStdCount: '302',
            frameGlassesStdCount: '1339',
            gradeId: '921830381248279',
            gradeName: '初三',
            manCorrectMyopiaRate: 0.0578,
            manCorrectMyopiaStdCount: '113',
            manMyopiaStdCount: '1952',
            manUdMyopiaRate: 0.7325,
            manUdMyopiaStdCount: '1430',
            manUnMyopiaRate: 0.2095,
            manUnMyopiaStdCount: '409',
            myopiaStdCount: '5549',
            okLensStdCount: '1750',
            otherRate: 0,
            prefix: 3,
            prefixName: '初中',
            schoolId: null,
            schoolName: null,
            studyYear: '2020',
            udMyopiaRate: 0.7347,
            udMyopiaStdCount: '4077',
            unMyopiaRate: 0.2108,
            unMyopiaStdCount: '1170',
            womanCorrectMyopiaRate: 0.0517,
            womanCorrectMyopiaStdCount: '100',
            womanMyopiaStdCount: '1933',
            womanUdMyopiaRate: 0.7387,
            womanUdMyopiaStdCount: '1428',
            womanUnMyopiaRate: 0.2095,
            womanUnMyopiaStdCount: '405'
          }
        ],
        manCorrectMyopiaRate: 0.0522,
        manCorrectMyopiaStdCount: '1044',
        manMyopiaStdCount: '19985',
        manUdMyopiaRate: 0.7218,
        manUdMyopiaStdCount: '14426',
        manUnMyopiaRate: 0.2259,
        manUnMyopiaStdCount: '4515',
        myopiaStdCount: '56606',
        okLensStdCount: '17654',
        otherRate: 0,
        regionMyopiaCorrectInfos: [
          {
            contactLensStdCount: '821',
            correctMyopiaRate: 0.0477,
            correctMyopiaStdCount: '172',
            frameGlassesStdCount: '788',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.052,
            manCorrectMyopiaStdCount: '63',
            manMyopiaStdCount: '1210',
            manUdMyopiaRate: 0.7297,
            manUdMyopiaStdCount: '883',
            manUnMyopiaRate: 0.2181,
            manUnMyopiaStdCount: '264',
            myopiaStdCount: '3599',
            okLensStdCount: '1165',
            otherRate: 0,
            region: '‌淮北市',
            regionId: '610200',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7229,
            udMyopiaStdCount: '2602',
            unMyopiaRate: 0.2292,
            unMyopiaStdCount: '825',
            womanCorrectMyopiaRate: 0.043,
            womanCorrectMyopiaStdCount: '51',
            womanMyopiaStdCount: '1186',
            womanUdMyopiaRate: 0.7124,
            womanUdMyopiaStdCount: '845',
            womanUnMyopiaRate: 0.2445,
            womanUnMyopiaStdCount: '290'
          },
          {
            contactLensStdCount: '777',
            correctMyopiaRate: 0.0527,
            correctMyopiaStdCount: '188',
            frameGlassesStdCount: '839',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0501,
            manCorrectMyopiaStdCount: '62',
            manMyopiaStdCount: '1236',
            manUdMyopiaRate: 0.6998,
            manUdMyopiaStdCount: '865',
            manUnMyopiaRate: 0.25,
            manUnMyopiaStdCount: '309',
            myopiaStdCount: '3561',
            okLensStdCount: '1077',
            otherRate: 0,
            region: '淮南市',
            regionId: '610700',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7034,
            udMyopiaStdCount: '2505',
            unMyopiaRate: 0.2437,
            unMyopiaStdCount: '868',
            womanCorrectMyopiaRate: 0.0573,
            womanCorrectMyopiaStdCount: '66',
            womanMyopiaStdCount: '1151',
            womanUdMyopiaRate: 0.6933,
            womanUdMyopiaStdCount: '798',
            womanUnMyopiaRate: 0.2493,
            womanUnMyopiaStdCount: '287'
          },
          {
            contactLensStdCount: '973',
            correctMyopiaRate: 0.0549,
            correctMyopiaStdCount: '226',
            frameGlassesStdCount: '939',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0498,
            manCorrectMyopiaStdCount: '68',
            manMyopiaStdCount: '1364',
            manUdMyopiaRate: 0.7382,
            manUdMyopiaStdCount: '1007',
            manUnMyopiaRate: 0.2118,
            manUnMyopiaStdCount: '289',
            myopiaStdCount: '4111',
            okLensStdCount: '1306',
            otherRate: 0,
            region: '‌阜阳市',
            regionId: '610600',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7278,
            udMyopiaStdCount: '2992',
            unMyopiaRate: 0.2172,
            unMyopiaStdCount: '893',
            womanCorrectMyopiaRate: 0.0618,
            womanCorrectMyopiaStdCount: '83',
            womanMyopiaStdCount: '1342',
            womanUdMyopiaRate: 0.7131,
            womanUdMyopiaStdCount: '957',
            womanUnMyopiaRate: 0.225,
            womanUnMyopiaStdCount: '302'
          },
          {
            contactLensStdCount: '813',
            correctMyopiaRate: 0.0469,
            correctMyopiaStdCount: '168',
            frameGlassesStdCount: '799',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0432,
            manCorrectMyopiaStdCount: '51',
            manMyopiaStdCount: '1178',
            manUdMyopiaRate: 0.7495,
            manUdMyopiaStdCount: '883',
            manUnMyopiaRate: 0.2071,
            manUnMyopiaStdCount: '244',
            myopiaStdCount: '3575',
            okLensStdCount: '1163',
            otherRate: 0,
            region: '六安市',
            regionId: '610900',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7292,
            udMyopiaStdCount: '2607',
            unMyopiaRate: 0.2237,
            unMyopiaStdCount: '800',
            womanCorrectMyopiaRate: 0.0423,
            womanCorrectMyopiaStdCount: '51',
            womanMyopiaStdCount: '1204',
            womanUdMyopiaRate: 0.72,
            womanUdMyopiaStdCount: '867',
            womanUnMyopiaRate: 0.2375,
            womanUnMyopiaStdCount: '286'
          },
          {
            contactLensStdCount: '1224',
            correctMyopiaRate: 0.0504,
            correctMyopiaStdCount: '273',
            frameGlassesStdCount: '1253',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0506,
            manCorrectMyopiaStdCount: '89',
            manMyopiaStdCount: '1756',
            manUdMyopiaRate: 0.7363,
            manUdMyopiaStdCount: '1293',
            manUnMyopiaRate: 0.2129,
            manUnMyopiaStdCount: '374',
            myopiaStdCount: '5413',
            okLensStdCount: '1708',
            otherRate: 0,
            region: '蚌埠市',
            regionId: '610500',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7227,
            udMyopiaStdCount: '3912',
            unMyopiaRate: 0.2268,
            unMyopiaStdCount: '1228',
            womanCorrectMyopiaRate: 0.0468,
            womanCorrectMyopiaStdCount: '85',
            womanMyopiaStdCount: '1816',
            womanUdMyopiaRate: 0.7164,
            womanUdMyopiaStdCount: '1301',
            womanUnMyopiaRate: 0.2367,
            womanUnMyopiaStdCount: '430'
          },
          {
            contactLensStdCount: '840',
            correctMyopiaRate: 0.0539,
            correctMyopiaStdCount: '194',
            frameGlassesStdCount: '820',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0551,
            manCorrectMyopiaStdCount: '65',
            manMyopiaStdCount: '1179',
            manUdMyopiaRate: 0.7082,
            manUdMyopiaStdCount: '835',
            manUnMyopiaRate: 0.2366,
            manUnMyopiaStdCount: '279',
            myopiaStdCount: '3598',
            okLensStdCount: '1122',
            otherRate: 0,
            region: '亳州市',
            regionId: '610300',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7192,
            udMyopiaStdCount: '2588',
            unMyopiaRate: 0.2267,
            unMyopiaStdCount: '816',
            womanCorrectMyopiaRate: 0.0494,
            womanCorrectMyopiaStdCount: '60',
            womanMyopiaStdCount: '1213',
            womanUdMyopiaRate: 0.718,
            womanUdMyopiaStdCount: '871',
            womanUnMyopiaRate: 0.2324,
            womanUnMyopiaStdCount: '282'
          },
          {
            contactLensStdCount: '973',
            correctMyopiaRate: 0.053,
            correctMyopiaStdCount: '220',
            frameGlassesStdCount: '928',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0533,
            manCorrectMyopiaStdCount: '72',
            manMyopiaStdCount: '1349',
            manUdMyopiaRate: 0.7168,
            manUdMyopiaStdCount: '967',
            manUnMyopiaRate: 0.2297,
            manUnMyopiaStdCount: '310',
            myopiaStdCount: '4144',
            okLensStdCount: '1289',
            otherRate: 0,
            region: '滁州市',
            regionId: '610800',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7166,
            udMyopiaStdCount: '2970',
            unMyopiaRate: 0.2302,
            unMyopiaStdCount: '954',
            womanCorrectMyopiaRate: 0.0581,
            womanCorrectMyopiaStdCount: '83',
            womanMyopiaStdCount: '1428',
            womanUdMyopiaRate: 0.7114,
            womanUdMyopiaStdCount: '1016',
            womanUnMyopiaRate: 0.2303,
            womanUnMyopiaStdCount: '329'
          },
          {
            contactLensStdCount: '3055',
            correctMyopiaRate: 0.0534,
            correctMyopiaStdCount: '719',
            frameGlassesStdCount: '3149',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0519,
            manCorrectMyopiaStdCount: '289',
            manMyopiaStdCount: '5565',
            manUdMyopiaRate: 0.7225,
            manUdMyopiaStdCount: '4021',
            manUnMyopiaRate: 0.2255,
            manUnMyopiaStdCount: '1255',
            myopiaStdCount: '13446',
            okLensStdCount: '4141',
            otherRate: 0,
            region: '‌马鞍山市',
            regionId: '611000',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7159,
            udMyopiaStdCount: '9626',
            unMyopiaRate: 0.2306,
            unMyopiaStdCount: '3101',
            womanCorrectMyopiaRate: 0.0564,
            womanCorrectMyopiaStdCount: '301',
            womanMyopiaStdCount: '5332',
            womanUdMyopiaRate: 0.7053,
            womanUdMyopiaStdCount: '3761',
            womanUnMyopiaRate: 0.2381,
            womanUnMyopiaStdCount: '1270'
          },
          {
            contactLensStdCount: '2577',
            correctMyopiaRate: 0.0534,
            correctMyopiaStdCount: '582',
            frameGlassesStdCount: '2467',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0573,
            manCorrectMyopiaStdCount: '205',
            manMyopiaStdCount: '3573',
            manUdMyopiaRate: 0.7117,
            manUdMyopiaStdCount: '2543',
            manUnMyopiaRate: 0.2308,
            manUnMyopiaStdCount: '825',
            myopiaStdCount: '10894',
            okLensStdCount: '3367',
            otherRate: 0,
            region: '‌合肥市',
            regionId: '610100',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7186,
            udMyopiaStdCount: '7829',
            unMyopiaRate: 0.2279,
            unMyopiaStdCount: '2483',
            womanCorrectMyopiaRate: 0.0481,
            womanCorrectMyopiaStdCount: '179',
            womanMyopiaStdCount: '3720',
            womanUdMyopiaRate: 0.7155,
            womanUdMyopiaStdCount: '2662',
            womanUnMyopiaRate: 0.2362,
            womanUnMyopiaStdCount: '879'
          },
          {
            contactLensStdCount: '1000',
            correctMyopiaRate: 0.0541,
            correctMyopiaStdCount: '231',
            frameGlassesStdCount: '956',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0507,
            manCorrectMyopiaStdCount: '80',
            manMyopiaStdCount: '1575',
            manUdMyopiaRate: 0.7168,
            manUdMyopiaStdCount: '1129',
            manUnMyopiaRate: 0.2323,
            manUnMyopiaStdCount: '366',
            myopiaStdCount: '4265',
            okLensStdCount: '1316',
            otherRate: 0,
            region: '‌宿州市',
            regionId: '610400',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.713,
            udMyopiaStdCount: '3041',
            unMyopiaRate: 0.2328,
            unMyopiaStdCount: '993',
            womanCorrectMyopiaRate: 0.0524,
            womanCorrectMyopiaStdCount: '79',
            womanMyopiaStdCount: '1506',
            womanUdMyopiaRate: 0.7118,
            womanUdMyopiaStdCount: '1072',
            womanUnMyopiaRate: 0.2357,
            womanUnMyopiaStdCount: '355'
          }
        ],
        udMyopiaRate: 0.7185,
        udMyopiaStdCount: '40672',
        unMyopiaRate: 0.2289,
        unMyopiaStdCount: '12961',
        womanCorrectMyopiaRate: 0.0521,
        womanCorrectMyopiaStdCount: '1038',
        womanMyopiaStdCount: '19898',
        womanUdMyopiaRate: 0.7111,
        womanUdMyopiaStdCount: '14150',
        womanUnMyopiaRate: 0.2367,
        womanUnMyopiaStdCount: '4710'
      })
  },
  {
    url: '/basic-api/eyesight/report/province/getCityHyperopiaReserve',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        areaHyperopiaReserveInfos: [
          {
            hyperopiaReservesEnough: '14',
            hyperopiaReservesEnoughNum: '431',
            hyperopiaReservesNotEnough: '28',
            hyperopiaReservesNotEnoughNum: '29',
            region: '‌马鞍山市',
            regionId: '611000'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '滁州市',
            regionId: '610800'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '蚌埠市',
            regionId: '610500'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '淮南市',
            regionId: '610700'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '六安市',
            regionId: '610900'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '‌淮北市',
            regionId: '610200'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '71',
            hyperopiaReservesNotEnough: '3',
            hyperopiaReservesNotEnoughNum: '3',
            region: '‌宿州市',
            regionId: '610400'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '2',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '‌合肥市',
            regionId: '610100'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '亳州市',
            regionId: '610300'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '‌阜阳市',
            regionId: '610600'
          }
        ],
        gradeHyperopiaReserveInfos: [
          {
            gradeId: '921830381248271',
            gradeName: '一年级',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          },
          {
            gradeId: '921830381248272',
            gradeName: '二年级',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          },
          {
            gradeId: '921830381248273',
            gradeName: '',
            hyperopiaReservesEnough: '2',
            hyperopiaReservesEnoughNum: '133',
            hyperopiaReservesNotEnough: '10',
            hyperopiaReservesNotEnoughNum: '10'
          },
          {
            gradeId: '921830381248273',
            gradeName: '三年级',
            hyperopiaReservesEnough: '6',
            hyperopiaReservesEnoughNum: '194',
            hyperopiaReservesNotEnough: '16',
            hyperopiaReservesNotEnoughNum: '16'
          },
          {
            gradeId: '921830381248274',
            gradeName: '四年级',
            hyperopiaReservesEnough: '5',
            hyperopiaReservesEnoughNum: '93',
            hyperopiaReservesNotEnough: '4',
            hyperopiaReservesNotEnoughNum: '5'
          },
          {
            gradeId: '921830381248274',
            gradeName: '',
            hyperopiaReservesEnough: '1',
            hyperopiaReservesEnoughNum: '84',
            hyperopiaReservesNotEnough: '1',
            hyperopiaReservesNotEnoughNum: '1'
          },
          {
            gradeId: '921830381248275',
            gradeName: '五年级',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          },
          {
            gradeId: '921830381248275',
            gradeName: '',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          },
          {
            gradeId: '921830381248276',
            gradeName: '',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          },
          {
            gradeId: '921830381248276',
            gradeName: '六年级',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          },
          {
            gradeId: '921830381248277',
            gradeName: '初一',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          },
          {
            gradeId: '921830381248278',
            gradeName: '初二',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          },
          {
            gradeId: '921830381248279',
            gradeName: '初三',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          }
        ],
        hyperopiaReservesEnough: '14',
        hyperopiaReservesEnoughNum: '504',
        hyperopiaReservesNotEnough: '31',
        hyperopiaReservesNotEnoughNum: '32'
      })
  },
  {
    url: '/basic-api/eyesight/report/province/getMyopiaTypeInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        astigmatismRate: 0,
        astigmatismStdCount: '0',
        city: '安徽省',
        cityId: '610000',
        hyperopiaRate: 0.2935,
        hyperopiaStdCount: '20886',
        myopiaRate: 0.7955,
        myopiaStdCount: '56606',
        regionMyopiaInfoTypes: [
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2884,
            hyperopiaStdCount: '1298',
            myopiaRate: 0.7997,
            myopiaStdCount: '3599',
            region: '‌淮北市',
            regionId: '610200',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.93,
            totalStdCount: '4185'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.3028,
            hyperopiaStdCount: '1363',
            myopiaRate: 0.7913,
            myopiaStdCount: '3561',
            region: '淮南市',
            regionId: '610700',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9346,
            totalStdCount: '4206'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2994,
            hyperopiaStdCount: '1572',
            myopiaRate: 0.783,
            myopiaStdCount: '4111',
            region: '‌阜阳市',
            regionId: '610600',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9371,
            totalStdCount: '4920'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2848,
            hyperopiaStdCount: '1282',
            myopiaRate: 0.7944,
            myopiaStdCount: '3575',
            region: '六安市',
            regionId: '610900',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9277,
            totalStdCount: '4175'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2882,
            hyperopiaStdCount: '1946',
            myopiaRate: 0.8019,
            myopiaStdCount: '5413',
            region: '蚌埠市',
            regionId: '610500',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.934,
            totalStdCount: '6305'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2875,
            hyperopiaStdCount: '1294',
            myopiaRate: 0.7995,
            myopiaStdCount: '3598',
            region: '亳州市',
            regionId: '610300',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9335,
            totalStdCount: '4201'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2933,
            hyperopiaStdCount: '1540',
            myopiaRate: 0.7893,
            myopiaStdCount: '4144',
            region: '滁州市',
            regionId: '610800',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9245,
            totalStdCount: '4854'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2945,
            hyperopiaStdCount: '4972',
            myopiaRate: 0.7965,
            myopiaStdCount: '13446',
            region: '‌马鞍山市',
            regionId: '611000',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9327,
            totalStdCount: '15745'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2948,
            hyperopiaStdCount: '4015',
            myopiaRate: 0.7999,
            myopiaStdCount: '10894',
            region: '‌合肥市',
            regionId: '610100',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9333,
            totalStdCount: '12710'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2968,
            hyperopiaStdCount: '1604',
            myopiaRate: 0.7892,
            myopiaStdCount: '4265',
            region: '‌宿州市',
            regionId: '610400',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9263,
            totalStdCount: '5006'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2935,
            hyperopiaStdCount: '20886',
            myopiaRate: 0.7955,
            myopiaStdCount: '56606',
            region: '合计',
            regionId: null,
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9318,
            totalStdCount: '66307'
          }
        ],
        schoolPrefixMyopiaInfoTypes: [
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2846,
            hyperopiaStdCount: '799',
            myopiaRate: 0.8061,
            myopiaStdCount: '2263',
            prefix: 0,
            prefixName: '无',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            totalRate: 0.9369,
            totalStdCount: '2630'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2946,
            hyperopiaStdCount: '14540',
            myopiaRate: 0.7962,
            myopiaStdCount: '39291',
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            totalRate: 0.9325,
            totalStdCount: '46018'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2919,
            hyperopiaStdCount: '5547',
            myopiaRate: 0.7921,
            myopiaStdCount: '15052',
            prefix: 3,
            prefixName: '初中',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            totalRate: 0.9293,
            totalStdCount: '17659'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2935,
            hyperopiaStdCount: '20886',
            myopiaRate: 0.7955,
            myopiaStdCount: '56606',
            prefix: null,
            prefixName: '合计',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            totalRate: 0.9318,
            totalStdCount: '66307'
          }
        ],
        totalRate: 0.9318,
        totalStdCount: '66307'
      })
  },
  {
    url: '/basic-api/eyesight/report/province/getCityPoorVision',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        areaPoorVisionInfoList: [
          {
            eyeSightCheckCount: '12741',
            highPoorVisionCount: '10680',
            highPoorVisionRate: 0.8382,
            lowPoorVisionCount: '322',
            lowPoorVisionRate: 0.0252,
            midPoorVisionCount: '1175',
            midPoorVisionRate: 0.0922,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '12177',
            poorVisionRate: 0.9557,
            region: '‌马鞍山市',
            regionId: '611000'
          },
          {
            eyeSightCheckCount: '3961',
            highPoorVisionCount: '3268',
            highPoorVisionRate: 0.825,
            lowPoorVisionCount: '83',
            lowPoorVisionRate: 0.0209,
            midPoorVisionCount: '381',
            midPoorVisionRate: 0.0961,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '3732',
            poorVisionRate: 0.9421,
            region: '滁州市',
            regionId: '610800'
          },
          {
            eyeSightCheckCount: '5042',
            highPoorVisionCount: '4220',
            highPoorVisionRate: 0.8369,
            lowPoorVisionCount: '88',
            lowPoorVisionRate: 0.0174,
            midPoorVisionCount: '498',
            midPoorVisionRate: 0.0987,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '4806',
            poorVisionRate: 0.9531,
            region: '蚌埠市',
            regionId: '610500'
          },
          {
            eyeSightCheckCount: '3423',
            highPoorVisionCount: '2878',
            highPoorVisionRate: 0.8407,
            lowPoorVisionCount: '72',
            lowPoorVisionRate: 0.021,
            midPoorVisionCount: '323',
            midPoorVisionRate: 0.0943,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '3273',
            poorVisionRate: 0.9561,
            region: '淮南市',
            regionId: '610700'
          },
          {
            eyeSightCheckCount: '3337',
            highPoorVisionCount: '2779',
            highPoorVisionRate: 0.8327,
            lowPoorVisionCount: '79',
            lowPoorVisionRate: 0.0236,
            midPoorVisionCount: '313',
            midPoorVisionRate: 0.0937,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '3171',
            poorVisionRate: 0.9502,
            region: '六安市',
            regionId: '610900'
          },
          {
            eyeSightCheckCount: '3335',
            highPoorVisionCount: '2784',
            highPoorVisionRate: 0.8347,
            lowPoorVisionCount: '62',
            lowPoorVisionRate: 0.0185,
            midPoorVisionCount: '336',
            midPoorVisionRate: 0.1007,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '3182',
            poorVisionRate: 0.9541,
            region: '‌淮北市',
            regionId: '610200'
          },
          {
            eyeSightCheckCount: '4088',
            highPoorVisionCount: '3366',
            highPoorVisionRate: 0.8233,
            lowPoorVisionCount: '99',
            lowPoorVisionRate: 0.0242,
            midPoorVisionCount: '413',
            midPoorVisionRate: 0.101,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '3878',
            poorVisionRate: 0.9486,
            region: '‌宿州市',
            regionId: '610400'
          },
          {
            eyeSightCheckCount: '10251',
            highPoorVisionCount: '8574',
            highPoorVisionRate: 0.8364,
            lowPoorVisionCount: '235',
            lowPoorVisionRate: 0.0229,
            midPoorVisionCount: '985',
            midPoorVisionRate: 0.096,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '9794',
            poorVisionRate: 0.9554,
            region: '‌合肥市',
            regionId: '610100'
          },
          {
            eyeSightCheckCount: '3378',
            highPoorVisionCount: '2796',
            highPoorVisionRate: 0.8277,
            lowPoorVisionCount: '62',
            lowPoorVisionRate: 0.0183,
            midPoorVisionCount: '355',
            midPoorVisionRate: 0.105,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '3213',
            poorVisionRate: 0.9511,
            region: '亳州市',
            regionId: '610300'
          },
          {
            eyeSightCheckCount: '3944',
            highPoorVisionCount: '3334',
            highPoorVisionRate: 0.8453,
            lowPoorVisionCount: '85',
            lowPoorVisionRate: 0.0215,
            midPoorVisionCount: '367',
            midPoorVisionRate: 0.093,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '3786',
            poorVisionRate: 0.9599,
            region: '‌阜阳市',
            regionId: '610600'
          },
          {
            eyeSightCheckCount: '53500',
            highPoorVisionCount: '44679',
            highPoorVisionRate: 0.8351,
            lowPoorVisionCount: '1187',
            lowPoorVisionRate: 0.0221,
            midPoorVisionCount: '5146',
            midPoorVisionRate: 0.0961,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '51012',
            poorVisionRate: 0.9534,
            region: '合计',
            regionId: null
          }
        ],
        gradePoorVisionInfoList: [
          {
            eyeSightCheckCount: '2120',
            highPoorVisionCount: '1769',
            highPoorVisionRate: 0.8344,
            lowPoorVisionCount: '58',
            lowPoorVisionRate: 0.0273,
            midPoorVisionCount: '201',
            midPoorVisionRate: 0.0948,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '2028',
            poorVisionRate: 0.9566,
            unifyPrefx: 0,
            unifyPrefxName: '无'
          },
          {
            eyeSightCheckCount: '37189',
            highPoorVisionCount: '31123',
            highPoorVisionRate: 0.8368,
            lowPoorVisionCount: '828',
            lowPoorVisionRate: 0.0222,
            midPoorVisionCount: '3548',
            midPoorVisionRate: 0.0954,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '35499',
            poorVisionRate: 0.9545,
            unifyPrefx: 2,
            unifyPrefxName: '小学'
          },
          {
            eyeSightCheckCount: '14191',
            highPoorVisionCount: '11787',
            highPoorVisionRate: 0.8305,
            lowPoorVisionCount: '301',
            lowPoorVisionRate: 0.0212,
            midPoorVisionCount: '1397',
            midPoorVisionRate: 0.0984,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '13485',
            poorVisionRate: 0.9502,
            unifyPrefx: 3,
            unifyPrefxName: '初中'
          },
          {
            eyeSightCheckCount: '53500',
            highPoorVisionCount: '44679',
            highPoorVisionRate: 0.8351,
            lowPoorVisionCount: '1187',
            lowPoorVisionRate: 0.0221,
            midPoorVisionCount: '5146',
            midPoorVisionRate: 0.0961,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '51012',
            poorVisionRate: 0.9534,
            unifyPrefx: null,
            unifyPrefxName: '合计'
          }
        ]
      })
  },
  {
    url: '/basic-api/eyesight/report/province/getPrefixMyopiaRate',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          effectiveStdCount: '2807',
          myopiaRate: 0.8061,
          myopiaStdCount: '2263',
          prefix: 0,
          prefixName: '无',
          schoolCount: '3'
        },
        {
          effectiveStdCount: '34459',
          myopiaRate: 0.7965,
          myopiaStdCount: '27447',
          prefix: 2,
          prefixName: '小学',
          schoolCount: '40'
        },
        {
          effectiveStdCount: '12811',
          myopiaRate: 0.794,
          myopiaStdCount: '10173',
          prefix: 3,
          prefixName: '初中',
          schoolCount: '28'
        }
      ])
  }
  // {
  //   url: '/basic-api/eyesight/report/province/',
  //   timeout: 100,
  //   method: 'get',
  //   response: () => resultSuccess()
  // }
];
