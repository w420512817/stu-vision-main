/*
 * @Author: wjq-work\wjq wjq4416@163.com
 * @Date: 2024-09-18 11:51:40
 * @LastEditors: wjq-work\wjq
 * @LastEditTime: 2024-09-19 18:43:29
 */
import { resultPageSuccess, resultSuccess } from '../utils';

const reportList = (() => {
  const result = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      year: '2021',
      name: '计划名字'
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/config/reportList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, reportList);
    }
  },
  {
    url: '/basic-api/eyesight/report/getEyesightReport',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { areaId } = query;
      let data = {};
      if (areaId == '610000') {
        data = {
          analysisTime: '2024-09-19 15:20:04',
          areaName: null,
          endTime: null,
          equipment: '',
          noteContent:
            '本报表计算方法来自国家卫生健康委员会，近视判断标准为：裸眼视力＜5.0且非睫状肌麻痹下电脑验光等效球镜度数＜-0.50D；同时，确认为佩戴隐形眼镜和角膜塑形镜的受检者计入近视样本。因器质性眼病变、损伤等原因导致的单眼或双眼视力低下的学生不纳入统计分析，调查人数为数据清理之后的有效调查样本人数。',
          nounDefinition:
            '1.近视：单眼裸眼视力＜5.0，且等效球镜＜-0.5D<br/>2.近视率：近视人数占有效筛查人数的百分比 <br/>3.总筛查率：完成视力和屈光筛查人数占应筛查人数百分比<br/>4.视力筛查率：完成视力筛查人数占应筛查人数的百分比<br/>5.屈光筛查率：完成屈光筛查人数占应筛查人数的百分比<br/>6.低度近视：单眼视力＜5.0，且-3.0D≤等效球镜＜-0.5D<br/>7.中度近视：单眼视力＜5.0，且-6.0D≤等效球镜＜-3.0D<br/>8.高度近视：单眼视力＜5.0，且等效球镜＜-6.0D<br/>9.近视足矫：符合近视标准，且双眼矫正视力≥4.9<br/>10.近视欠矫：符合近视标准，且单眼矫正视力＜4.9<br/>11.近视未矫：符合近视标准，且未配戴眼镜，包括框架眼镜、隐形眼镜、OK镜等<br/>12.足矫率：足矫人数占近视人数的百分比<br/>13.欠矫率：欠矫人数占近视人数的百分比<br/>14.未矫率：未矫人数占近视人数的百分比<br/>15.远视储备：10岁及以下儿童生理情况下眼屈光为远视状态，并随年龄增长向正视化转变。6岁及以下儿童，眼屈光在100-300度之间（等效球镜为1.00D-3.00D）；6-10岁儿童，眼屈光在25-300度之间（等效球镜为0.25D-3.00D）<br/>16.远视：等效球镜＞3.0D为疑似远视，建议至医院复查<br/>17.散光：柱镜＜-1.0D为疑似散光，建议至医院复查<br/>18.视力不良：包括近视、远视、散光<br/>注：普查计划应筛查人数为已导入系统的在读学生人数，抽查计划应筛查人数为已被添加至筛查任务里的学生人数',
          outline:
            '经统计分析，本校现有近视学生788人,近视率为79.83%,高度近视学生674人,高度近视率为68.28% ;按性别分类，男生有效筛查482人，近视学生379人，近视率为78.63%，高度近视率为64.93%;女生有效筛查505人，近视学生409人，近视率为80.99%，高度近视率为64.93%.女生近视率高于男生2.36%.',
          planMode: 1,
          planModeName: '计划模式',
          planName: '陕西省视力筛查计划',
          planRange: null,
          planType: 101,
          planYear: 2023,
          reportContentType: '235,205,215,220,225,230,255,256,250,245,256,210',
          schoolName: null,
          screeningItem: null,
          startTime: null,
          title: '陕西省',
          worker: ''
        };
      }

      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getSchoolStdInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        prefixSchoolCountInfoVO: '@float(0,0,2)'
      })
  },
  {
    url: '/basic-api/eyesight/report/province/getSchoolStdInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess({
        prefixSchoolCountInfoVO: {
          schoolCount: '@integer(1,100)',
          kindergartenCount: '@integer(1,100)',
          kindergartenCountRate: '@integer(1,100)',
          kindergartenStdCountRate: '@integer(1,100)',
          primarySchoolCount: '@integer(1,100)',
          primarySchoolCountRate: '@integer(1,100)',
          primarySchoolStdCountRate: '@integer(1,100)',
          middleSchoolCount: '@integer(1,100)',
          middleSchoolCountRate: '@integer(1,100)',
          middleSchoolStdCountRate: '@integer(1,100)',
          highSchoolCount: '@integer(1,100)',
          highSchoolCountRate: '@integer(1,100)',
          highSchoolStdCountRate: '@integer(1,100)',
          collegeCount: '@integer(1,100)',
          collegeCountRate: '@integer(1,100)',
          collegeStdCountRate: '@integer(1,100)',
          kindergartenStdCount: '@integer(500,3000)',
          primarySchoolStdCount: '@integer(500,3000)',
          middleSchoolStdCount: '@integer(500,3000)',
          highSchoolStdCount: '@integer(500,3000)',
          collegeStdCount: '@integer(500,3000)'
        },
        maxSchoolRegion: '@county()',
        minSchoolRegion: '@county()',
        maxSchoolRegionCount: '@integer(100,999)',
        minSchoolRegionCount: '@integer(0,500)',
        prefixPeopleRatio: '1:400:2878:4544:2223',
        'maxPeoplePrefix|1': ['幼儿园', '小学', '初中', '高中', '大学'],
        'minPeoplePrefix|1': ['幼儿园', '小学', '初中', '高中', '大学']
      });
    }
  },
  {
    url: '/basic-api/eyesight/report/school/getSchoolPoorVision',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        classYearPoorVisionInfoList: [
          {
            astigmiaStdCount: '0',
            astigmiaStdRate: 0.0,
            gradeId: '921830381248271',
            gradeName: '一年级',
            hyperopiaStdCount: '83',
            hyperopiaStdRate: 0.332,
            myopiaRate: 0.812,
            myopiaStdCount: '203',
            poorVisionCount: '187',
            poorVisionRate: 0.954
          },
          {
            astigmiaStdCount: '0',
            astigmiaStdRate: 0.0,
            gradeId: '921830381248272',
            gradeName: '二年级',
            hyperopiaStdCount: '69',
            hyperopiaStdRate: 0.276,
            myopiaRate: 0.808,
            myopiaStdCount: '202',
            poorVisionCount: '189',
            poorVisionRate: 0.945
          },
          {
            astigmiaStdCount: '0',
            astigmiaStdRate: 0.0,
            gradeId: '921830381248273',
            gradeName: '三年级',
            hyperopiaStdCount: '69',
            hyperopiaStdRate: 0.276,
            myopiaRate: 0.772,
            myopiaStdCount: '193',
            poorVisionCount: '175',
            poorVisionRate: 0.9358
          },
          {
            astigmiaStdCount: '0',
            astigmiaStdRate: 0.0,
            gradeId: '921830381248274',
            gradeName: '四年级',
            hyperopiaStdCount: '63',
            hyperopiaStdRate: 0.252,
            myopiaRate: 0.8,
            myopiaStdCount: '200',
            poorVisionCount: '180',
            poorVisionRate: 0.9424
          },
          {
            astigmiaStdCount: '0',
            astigmiaStdRate: 0.0,
            gradeId: '921830381248275',
            gradeName: '五年级',
            hyperopiaStdCount: '80',
            hyperopiaStdRate: 0.32,
            myopiaRate: 0.808,
            myopiaStdCount: '202',
            poorVisionCount: '180',
            poorVisionRate: 0.9625
          },
          {
            astigmiaStdCount: '0',
            astigmiaStdRate: 0.0,
            gradeId: '921830381248276',
            gradeName: '六年级',
            hyperopiaStdCount: '79',
            hyperopiaStdRate: 0.316,
            myopiaRate: 0.796,
            myopiaStdCount: '199',
            poorVisionCount: '181',
            poorVisionRate: 0.9576
          },
          {
            astigmiaStdCount: '0',
            astigmiaStdRate: 0.0,
            gradeId: null,
            gradeName: '总计',
            hyperopiaStdCount: '443',
            hyperopiaStdRate: 0.2953,
            myopiaRate: 0.7993,
            myopiaStdCount: '1199',
            poorVisionCount: '1092',
            poorVisionRate: 0.9495
          }
        ],
        plansPoorVisionInfoList: [
          {
            planName: '陕西省视力筛查计划',
            poorVisionRate: 0.9495
          }
        ],
        schoolPoorVisionInfo: {
          astigmiaStdCount: '0',
          astigmiaStdRate: 0.0,
          hyperopiaStdCount: '443',
          hyperopiaStdRate: 0.2953,
          myopiaRate: 0.7993,
          myopiaStdCount: '1199',
          poorVisionCount: '1092',
          poorVisionRate: 0.9495
        }
      })
  },
  {
    url: '/basic-api/eyesight/report/school/getOverallMyopiaInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        effectiveStdCount: '987',
        gradeMyopiaInfos: [
          {
            classMyopiaInfoVOS: [
              {
                classId: '1282974993571584',
                className: '1',
                effectiveStdCount: '29',
                gradeName: '一年级',
                highMyopiaRate: 0.6206,
                highMyopiaStdCount: '18',
                manEffectiveStdCount: '11',
                manHighMyopiaRate: 0.3636,
                manHighMyopiaStdCount: '4',
                manMyopiaRate: 0.5454,
                manMyopiaStdCount: '6',
                manStdCount: '11',
                myopiaRate: 0.7586,
                myopiaStdCount: '22',
                noMyopiaRate: 0.2413,
                noMyopiaStdCount: '7',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.5454,
                    manMyopiaStdCount: '6',
                    myopiaRate: 0.7586,
                    myopiaStdCount: '22',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8888,
                    womanMyopiaStdCount: '16'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0344,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0555,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.1818,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.1034,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0555,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.3636,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.6206,
                    myopiaStdCount: '18',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7777,
                    womanMyopiaStdCount: '14'
                  },
                  {
                    manMyopiaRate: 0.4545,
                    manMyopiaStdCount: '5',
                    myopiaRate: 0.2413,
                    myopiaStdCount: '7',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1111,
                    womanMyopiaStdCount: '2'
                  }
                ],
                stdCount: '29',
                studentMyopiaInfos: null,
                studyYear: '2022',
                womanEffectiveStdCount: '18',
                womanHighMyopiaRate: 0.7777,
                womanHighMyopiaStdCount: '14',
                womanMyopiaRate: 0.8888,
                womanMyopiaStdCount: '16',
                womanStdCount: '18'
              },
              {
                classId: '1282974993571585',
                className: '2',
                effectiveStdCount: '29',
                gradeName: '一年级',
                highMyopiaRate: 0.7241,
                highMyopiaStdCount: '21',
                manEffectiveStdCount: '18',
                manHighMyopiaRate: 0.7777,
                manHighMyopiaStdCount: '14',
                manMyopiaRate: 0.8333,
                manMyopiaStdCount: '15',
                manStdCount: '18',
                myopiaRate: 0.8275,
                myopiaStdCount: '24',
                noMyopiaRate: 0.1724,
                noMyopiaStdCount: '5',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8333,
                    manMyopiaStdCount: '15',
                    myopiaRate: 0.8275,
                    myopiaStdCount: '24',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8181,
                    womanMyopiaStdCount: '9'
                  },
                  {
                    manMyopiaRate: 0.0555,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.1034,
                    myopiaStdCount: '3',
                    myopiaType: 1,
                    womanMyopiaRate: 0.1818,
                    womanMyopiaStdCount: '2'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0,
                    myopiaStdCount: '0',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.7777,
                    manMyopiaStdCount: '14',
                    myopiaRate: 0.7241,
                    myopiaStdCount: '21',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6363,
                    womanMyopiaStdCount: '7'
                  },
                  {
                    manMyopiaRate: 0.1666,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.1724,
                    myopiaStdCount: '5',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1818,
                    womanMyopiaStdCount: '2'
                  }
                ],
                stdCount: '29',
                studentMyopiaInfos: null,
                studyYear: '2022',
                womanEffectiveStdCount: '11',
                womanHighMyopiaRate: 0.6363,
                womanHighMyopiaStdCount: '7',
                womanMyopiaRate: 0.8181,
                womanMyopiaStdCount: '9',
                womanStdCount: '11'
              },
              {
                classId: '1282974993571586',
                className: '3',
                effectiveStdCount: '33',
                gradeName: '一年级',
                highMyopiaRate: 0.7272,
                highMyopiaStdCount: '24',
                manEffectiveStdCount: '18',
                manHighMyopiaRate: 0.7222,
                manHighMyopiaStdCount: '13',
                manMyopiaRate: 0.9444,
                manMyopiaStdCount: '17',
                manStdCount: '18',
                myopiaRate: 0.8787,
                myopiaStdCount: '29',
                noMyopiaRate: 0.1212,
                noMyopiaStdCount: '4',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.9444,
                    manMyopiaStdCount: '17',
                    myopiaRate: 0.8787,
                    myopiaStdCount: '29',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.1111,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0606,
                    myopiaStdCount: '2',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.1111,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0909,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0666,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.7222,
                    manMyopiaStdCount: '13',
                    myopiaRate: 0.7272,
                    myopiaStdCount: '24',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7333,
                    womanMyopiaStdCount: '11'
                  },
                  {
                    manMyopiaRate: 0.0555,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.1212,
                    myopiaStdCount: '4',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2,
                    womanMyopiaStdCount: '3'
                  }
                ],
                stdCount: '33',
                studentMyopiaInfos: null,
                studyYear: '2022',
                womanEffectiveStdCount: '15',
                womanHighMyopiaRate: 0.7333,
                womanHighMyopiaStdCount: '11',
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '12',
                womanStdCount: '15'
              },
              {
                classId: '1282974993579776',
                className: '4',
                effectiveStdCount: '33',
                gradeName: '一年级',
                highMyopiaRate: 0.6969,
                highMyopiaStdCount: '23',
                manEffectiveStdCount: '18',
                manHighMyopiaRate: 0.7777,
                manHighMyopiaStdCount: '14',
                manMyopiaRate: 0.8888,
                manMyopiaStdCount: '16',
                manStdCount: '18',
                myopiaRate: 0.8181,
                myopiaStdCount: '27',
                noMyopiaRate: 0.1818,
                noMyopiaStdCount: '6',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8888,
                    manMyopiaStdCount: '16',
                    myopiaRate: 0.8181,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7333,
                    womanMyopiaStdCount: '11'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0303,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0666,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.1111,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0909,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0666,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.7777,
                    manMyopiaStdCount: '14',
                    myopiaRate: 0.6969,
                    myopiaStdCount: '23',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6,
                    womanMyopiaStdCount: '9'
                  },
                  {
                    manMyopiaRate: 0.1111,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.1818,
                    myopiaStdCount: '6',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2666,
                    womanMyopiaStdCount: '4'
                  }
                ],
                stdCount: '33',
                studentMyopiaInfos: null,
                studyYear: '2022',
                womanEffectiveStdCount: '15',
                womanHighMyopiaRate: 0.6,
                womanHighMyopiaStdCount: '9',
                womanMyopiaRate: 0.7333,
                womanMyopiaStdCount: '11',
                womanStdCount: '15'
              },
              {
                classId: '1282974993579777',
                className: '5',
                effectiveStdCount: '36',
                gradeName: '一年级',
                highMyopiaRate: 0.6388,
                highMyopiaStdCount: '23',
                manEffectiveStdCount: '18',
                manHighMyopiaRate: 0.4444,
                manHighMyopiaStdCount: '8',
                manMyopiaRate: 0.6111,
                manMyopiaStdCount: '11',
                manStdCount: '18',
                myopiaRate: 0.75,
                myopiaStdCount: '27',
                noMyopiaRate: 0.25,
                noMyopiaStdCount: '9',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.6111,
                    manMyopiaStdCount: '11',
                    myopiaRate: 0.75,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8888,
                    womanMyopiaStdCount: '16'
                  },
                  {
                    manMyopiaRate: 0.0555,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0277,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.1111,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0833,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0555,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.4444,
                    manMyopiaStdCount: '8',
                    myopiaRate: 0.6388,
                    myopiaStdCount: '23',
                    myopiaType: 3,
                    womanMyopiaRate: 0.8333,
                    womanMyopiaStdCount: '15'
                  },
                  {
                    manMyopiaRate: 0.3888,
                    manMyopiaStdCount: '7',
                    myopiaRate: 0.25,
                    myopiaStdCount: '9',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1111,
                    womanMyopiaStdCount: '2'
                  }
                ],
                stdCount: '36',
                studentMyopiaInfos: null,
                studyYear: '2022',
                womanEffectiveStdCount: '18',
                womanHighMyopiaRate: 0.8333,
                womanHighMyopiaStdCount: '15',
                womanMyopiaRate: 0.8888,
                womanMyopiaStdCount: '16',
                womanStdCount: '18'
              },
              {
                classId: null,
                className: '合计',
                effectiveStdCount: '160',
                gradeName: '一年级',
                highMyopiaRate: 0.6812,
                highMyopiaStdCount: '109',
                manEffectiveStdCount: '83',
                manHighMyopiaRate: 0.6385,
                manHighMyopiaStdCount: '53',
                manMyopiaRate: 0.7831,
                manMyopiaStdCount: '65',
                manStdCount: '83',
                myopiaRate: 0.8062,
                myopiaStdCount: '129',
                noMyopiaRate: null,
                noMyopiaStdCount: '31',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7831,
                    manMyopiaStdCount: '65',
                    myopiaRate: 0.8062,
                    myopiaStdCount: '129',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8311,
                    womanMyopiaStdCount: '64'
                  },
                  {
                    manMyopiaRate: 0.0481,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.05,
                    myopiaStdCount: '8',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0519,
                    womanMyopiaStdCount: '4'
                  },
                  {
                    manMyopiaRate: 0.0963,
                    manMyopiaStdCount: '8',
                    myopiaRate: 0.075,
                    myopiaStdCount: '12',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0519,
                    womanMyopiaStdCount: '4'
                  },
                  {
                    manMyopiaRate: 0.6385,
                    manMyopiaStdCount: '53',
                    myopiaRate: 0.6812,
                    myopiaStdCount: '109',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7272,
                    womanMyopiaStdCount: '56'
                  },
                  {
                    manMyopiaRate: 0.2168,
                    manMyopiaStdCount: '18',
                    myopiaRate: 0.1937,
                    myopiaStdCount: '31',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1688,
                    womanMyopiaStdCount: '13'
                  }
                ],
                stdCount: '160',
                studentMyopiaInfos: null,
                studyYear: '2022',
                womanEffectiveStdCount: '77',
                womanHighMyopiaRate: 0.7272,
                womanHighMyopiaStdCount: '56',
                womanMyopiaRate: 0.8311,
                womanMyopiaStdCount: '64',
                womanStdCount: '77'
              }
            ],
            effectiveStdCount: '160',
            gradeId: '921830381248271',
            gradeName: '一年级',
            highMyopiaRate: 0.6812,
            highMyopiaStdCount: '109',
            manEffectiveStdCount: '83',
            manHighMyopiaRate: 0.6385,
            manHighMyopiaStdCount: '53',
            manMyopiaRate: 0.7831,
            manMyopiaStdCount: '65',
            manStdCount: '83',
            maxClass: {
              classId: '1282974993571586',
              className: '3',
              effectiveStdCount: '33',
              gradeName: '一年级',
              highMyopiaRate: 0.7272,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '18',
              manHighMyopiaRate: 0.7222,
              manHighMyopiaStdCount: '13',
              manMyopiaRate: 0.9444,
              manMyopiaStdCount: '17',
              manStdCount: '18',
              myopiaRate: 0.8787,
              myopiaStdCount: '29',
              noMyopiaRate: 0.1212,
              noMyopiaStdCount: '4',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.9444,
                  manMyopiaStdCount: '17',
                  myopiaRate: 0.8787,
                  myopiaStdCount: '29',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0606,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0909,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0666,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7222,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.7272,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7333,
                  womanMyopiaStdCount: '11'
                },
                {
                  manMyopiaRate: 0.0555,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.1212,
                  myopiaStdCount: '4',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2,
                  womanMyopiaStdCount: '3'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.7333,
              womanHighMyopiaStdCount: '11',
              womanMyopiaRate: 0.8,
              womanMyopiaStdCount: '12',
              womanStdCount: '15'
            },
            maxHighClass: {
              classId: '1282974993571586',
              className: '3',
              effectiveStdCount: '33',
              gradeName: '一年级',
              highMyopiaRate: 0.7272,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '18',
              manHighMyopiaRate: 0.7222,
              manHighMyopiaStdCount: '13',
              manMyopiaRate: 0.9444,
              manMyopiaStdCount: '17',
              manStdCount: '18',
              myopiaRate: 0.8787,
              myopiaStdCount: '29',
              noMyopiaRate: 0.1212,
              noMyopiaStdCount: '4',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.9444,
                  manMyopiaStdCount: '17',
                  myopiaRate: 0.8787,
                  myopiaStdCount: '29',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0606,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0909,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0666,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7222,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.7272,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7333,
                  womanMyopiaStdCount: '11'
                },
                {
                  manMyopiaRate: 0.0555,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.1212,
                  myopiaStdCount: '4',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2,
                  womanMyopiaStdCount: '3'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.7333,
              womanHighMyopiaStdCount: '11',
              womanMyopiaRate: 0.8,
              womanMyopiaStdCount: '12',
              womanStdCount: '15'
            },
            minClass: {
              classId: '1282974993579777',
              className: '5',
              effectiveStdCount: '36',
              gradeName: '一年级',
              highMyopiaRate: 0.6388,
              highMyopiaStdCount: '23',
              manEffectiveStdCount: '18',
              manHighMyopiaRate: 0.4444,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.6111,
              manMyopiaStdCount: '11',
              manStdCount: '18',
              myopiaRate: 0.75,
              myopiaStdCount: '27',
              noMyopiaRate: 0.25,
              noMyopiaStdCount: '9',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.6111,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.75,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8888,
                  womanMyopiaStdCount: '16'
                },
                {
                  manMyopiaRate: 0.0555,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0277,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0833,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.4444,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.6388,
                  myopiaStdCount: '23',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8333,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.3888,
                  manMyopiaStdCount: '7',
                  myopiaRate: 0.25,
                  myopiaStdCount: '9',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1111,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '36',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '18',
              womanHighMyopiaRate: 0.8333,
              womanHighMyopiaStdCount: '15',
              womanMyopiaRate: 0.8888,
              womanMyopiaStdCount: '16',
              womanStdCount: '18'
            },
            minHighClass: {
              classId: '1282974993571584',
              className: '1',
              effectiveStdCount: '29',
              gradeName: '一年级',
              highMyopiaRate: 0.6206,
              highMyopiaStdCount: '18',
              manEffectiveStdCount: '11',
              manHighMyopiaRate: 0.3636,
              manHighMyopiaStdCount: '4',
              manMyopiaRate: 0.5454,
              manMyopiaStdCount: '6',
              manStdCount: '11',
              myopiaRate: 0.7586,
              myopiaStdCount: '22',
              noMyopiaRate: 0.2413,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.5454,
                  manMyopiaStdCount: '6',
                  myopiaRate: 0.7586,
                  myopiaStdCount: '22',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8888,
                  womanMyopiaStdCount: '16'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0344,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.1818,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1034,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.3636,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.6206,
                  myopiaStdCount: '18',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7777,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.4545,
                  manMyopiaStdCount: '5',
                  myopiaRate: 0.2413,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1111,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '29',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '18',
              womanHighMyopiaRate: 0.7777,
              womanHighMyopiaStdCount: '14',
              womanMyopiaRate: 0.8888,
              womanMyopiaStdCount: '16',
              womanStdCount: '18'
            },
            myopiaRate: 0.8062,
            myopiaStdCount: '129',
            noMyopiaStdCount: '31',
            noMyopiaStdRate: null,
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7831,
                manMyopiaStdCount: '65',
                myopiaRate: 0.8062,
                myopiaStdCount: '129',
                myopiaType: 0,
                womanMyopiaRate: 0.8311,
                womanMyopiaStdCount: '64'
              },
              {
                manMyopiaRate: 0.0481,
                manMyopiaStdCount: '4',
                myopiaRate: 0.05,
                myopiaStdCount: '8',
                myopiaType: 1,
                womanMyopiaRate: 0.0519,
                womanMyopiaStdCount: '4'
              },
              {
                manMyopiaRate: 0.0963,
                manMyopiaStdCount: '8',
                myopiaRate: 0.075,
                myopiaStdCount: '12',
                myopiaType: 2,
                womanMyopiaRate: 0.0519,
                womanMyopiaStdCount: '4'
              },
              {
                manMyopiaRate: 0.6385,
                manMyopiaStdCount: '53',
                myopiaRate: 0.6812,
                myopiaStdCount: '109',
                myopiaType: 3,
                womanMyopiaRate: 0.7272,
                womanMyopiaStdCount: '56'
              },
              {
                manMyopiaRate: 0.2168,
                manMyopiaStdCount: '18',
                myopiaRate: 0.1937,
                myopiaStdCount: '31',
                myopiaType: 4,
                womanMyopiaRate: 0.1688,
                womanMyopiaStdCount: '13'
              }
            ],
            stdCount: '160',
            studyYear: '2022',
            womanEffectiveStdCount: '77',
            womanHighMyopiaRate: 0.7272,
            womanHighMyopiaStdCount: '56',
            womanMyopiaRate: 0.8311,
            womanMyopiaStdCount: '64',
            womanStdCount: '77'
          },
          {
            classMyopiaInfoVOS: [
              {
                classId: '1282974993579778',
                className: '1',
                effectiveStdCount: '34',
                gradeName: '二年级',
                highMyopiaRate: 0.6176,
                highMyopiaStdCount: '21',
                manEffectiveStdCount: '13',
                manHighMyopiaRate: 0.6923,
                manHighMyopiaStdCount: '9',
                manMyopiaRate: 0.8461,
                manMyopiaStdCount: '11',
                manStdCount: '13',
                myopiaRate: 0.7647,
                myopiaStdCount: '26',
                noMyopiaRate: 0.2352,
                noMyopiaStdCount: '8',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8461,
                    manMyopiaStdCount: '11',
                    myopiaRate: 0.7647,
                    myopiaStdCount: '26',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7142,
                    womanMyopiaStdCount: '15'
                  },
                  {
                    manMyopiaRate: 0.1538,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.1176,
                    myopiaStdCount: '4',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0952,
                    womanMyopiaStdCount: '2'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0294,
                    myopiaStdCount: '1',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0476,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.6923,
                    manMyopiaStdCount: '9',
                    myopiaRate: 0.6176,
                    myopiaStdCount: '21',
                    myopiaType: 3,
                    womanMyopiaRate: 0.5714,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.1538,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.2352,
                    myopiaStdCount: '8',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2857,
                    womanMyopiaStdCount: '6'
                  }
                ],
                stdCount: '34',
                studentMyopiaInfos: null,
                studyYear: '2021',
                womanEffectiveStdCount: '21',
                womanHighMyopiaRate: 0.5714,
                womanHighMyopiaStdCount: '12',
                womanMyopiaRate: 0.7142,
                womanMyopiaStdCount: '15',
                womanStdCount: '21'
              },
              {
                classId: '1282974993579779',
                className: '2',
                effectiveStdCount: '35',
                gradeName: '二年级',
                highMyopiaRate: 0.7142,
                highMyopiaStdCount: '25',
                manEffectiveStdCount: '17',
                manHighMyopiaRate: 0.647,
                manHighMyopiaStdCount: '11',
                manMyopiaRate: 0.7647,
                manMyopiaStdCount: '13',
                manStdCount: '17',
                myopiaRate: 0.8571,
                myopiaStdCount: '30',
                noMyopiaRate: 0.1428,
                noMyopiaStdCount: '5',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7647,
                    manMyopiaStdCount: '13',
                    myopiaRate: 0.8571,
                    myopiaStdCount: '30',
                    myopiaType: 0,
                    womanMyopiaRate: 0.9444,
                    womanMyopiaStdCount: '17'
                  },
                  {
                    manMyopiaRate: 0.0588,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0857,
                    myopiaStdCount: '3',
                    myopiaType: 1,
                    womanMyopiaRate: 0.1111,
                    womanMyopiaStdCount: '2'
                  },
                  {
                    manMyopiaRate: 0.0588,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0571,
                    myopiaStdCount: '2',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0555,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.647,
                    manMyopiaStdCount: '11',
                    myopiaRate: 0.7142,
                    myopiaStdCount: '25',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7777,
                    womanMyopiaStdCount: '14'
                  },
                  {
                    manMyopiaRate: 0.2352,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.1428,
                    myopiaStdCount: '5',
                    myopiaType: 4,
                    womanMyopiaRate: 0.0555,
                    womanMyopiaStdCount: '1'
                  }
                ],
                stdCount: '35',
                studentMyopiaInfos: null,
                studyYear: '2021',
                womanEffectiveStdCount: '18',
                womanHighMyopiaRate: 0.7777,
                womanHighMyopiaStdCount: '14',
                womanMyopiaRate: 0.9444,
                womanMyopiaStdCount: '17',
                womanStdCount: '18'
              },
              {
                classId: '1282974993579780',
                className: '3',
                effectiveStdCount: '33',
                gradeName: '二年级',
                highMyopiaRate: 0.6666,
                highMyopiaStdCount: '22',
                manEffectiveStdCount: '20',
                manHighMyopiaRate: 0.65,
                manHighMyopiaStdCount: '13',
                manMyopiaRate: 0.8,
                manMyopiaStdCount: '16',
                manStdCount: '20',
                myopiaRate: 0.7575,
                myopiaStdCount: '25',
                noMyopiaRate: 0.2424,
                noMyopiaStdCount: '8',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8,
                    manMyopiaStdCount: '16',
                    myopiaRate: 0.7575,
                    myopiaStdCount: '25',
                    myopiaType: 0,
                    womanMyopiaRate: 0.6923,
                    womanMyopiaStdCount: '9'
                  },
                  {
                    manMyopiaRate: 0.1,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0606,
                    myopiaStdCount: '2',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.05,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0303,
                    myopiaStdCount: '1',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.65,
                    manMyopiaStdCount: '13',
                    myopiaRate: 0.6666,
                    myopiaStdCount: '22',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6923,
                    womanMyopiaStdCount: '9'
                  },
                  {
                    manMyopiaRate: 0.2,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.2424,
                    myopiaStdCount: '8',
                    myopiaType: 4,
                    womanMyopiaRate: 0.3076,
                    womanMyopiaStdCount: '4'
                  }
                ],
                stdCount: '33',
                studentMyopiaInfos: null,
                studyYear: '2021',
                womanEffectiveStdCount: '13',
                womanHighMyopiaRate: 0.6923,
                womanHighMyopiaStdCount: '9',
                womanMyopiaRate: 0.6923,
                womanMyopiaStdCount: '9',
                womanStdCount: '13'
              },
              {
                classId: '1282974993587968',
                className: '4',
                effectiveStdCount: '33',
                gradeName: '二年级',
                highMyopiaRate: 0.6969,
                highMyopiaStdCount: '23',
                manEffectiveStdCount: '13',
                manHighMyopiaRate: 0.6923,
                manHighMyopiaStdCount: '9',
                manMyopiaRate: 0.7692,
                manMyopiaStdCount: '10',
                manStdCount: '13',
                myopiaRate: 0.7878,
                myopiaStdCount: '26',
                noMyopiaRate: 0.2121,
                noMyopiaStdCount: '7',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7692,
                    manMyopiaStdCount: '10',
                    myopiaRate: 0.7878,
                    myopiaStdCount: '26',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '16'
                  },
                  {
                    manMyopiaRate: 0.0769,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0606,
                    myopiaStdCount: '2',
                    myopiaType: 1,
                    womanMyopiaRate: 0.05,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0303,
                    myopiaStdCount: '1',
                    myopiaType: 2,
                    womanMyopiaRate: 0.05,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.6923,
                    manMyopiaStdCount: '9',
                    myopiaRate: 0.6969,
                    myopiaStdCount: '23',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7,
                    womanMyopiaStdCount: '14'
                  },
                  {
                    manMyopiaRate: 0.2307,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.2121,
                    myopiaStdCount: '7',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2,
                    womanMyopiaStdCount: '4'
                  }
                ],
                stdCount: '33',
                studentMyopiaInfos: null,
                studyYear: '2021',
                womanEffectiveStdCount: '20',
                womanHighMyopiaRate: 0.7,
                womanHighMyopiaStdCount: '14',
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '16',
                womanStdCount: '20'
              },
              {
                classId: '1282974993587969',
                className: '5',
                effectiveStdCount: '37',
                gradeName: '二年级',
                highMyopiaRate: 0.6216,
                highMyopiaStdCount: '23',
                manEffectiveStdCount: '15',
                manHighMyopiaRate: 0.6666,
                manHighMyopiaStdCount: '10',
                manMyopiaRate: 0.8,
                manMyopiaStdCount: '12',
                manStdCount: '15',
                myopiaRate: 0.7567,
                myopiaStdCount: '28',
                noMyopiaRate: 0.2432,
                noMyopiaStdCount: '9',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8,
                    manMyopiaStdCount: '12',
                    myopiaRate: 0.7567,
                    myopiaStdCount: '28',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7272,
                    womanMyopiaStdCount: '16'
                  },
                  {
                    manMyopiaRate: 0.0666,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.027,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.0666,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.1081,
                    myopiaStdCount: '4',
                    myopiaType: 2,
                    womanMyopiaRate: 0.1363,
                    womanMyopiaStdCount: '3'
                  },
                  {
                    manMyopiaRate: 0.6666,
                    manMyopiaStdCount: '10',
                    myopiaRate: 0.6216,
                    myopiaStdCount: '23',
                    myopiaType: 3,
                    womanMyopiaRate: 0.5909,
                    womanMyopiaStdCount: '13'
                  },
                  {
                    manMyopiaRate: 0.2,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.2432,
                    myopiaStdCount: '9',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2727,
                    womanMyopiaStdCount: '6'
                  }
                ],
                stdCount: '37',
                studentMyopiaInfos: null,
                studyYear: '2021',
                womanEffectiveStdCount: '22',
                womanHighMyopiaRate: 0.5909,
                womanHighMyopiaStdCount: '13',
                womanMyopiaRate: 0.7272,
                womanMyopiaStdCount: '16',
                womanStdCount: '22'
              },
              {
                classId: null,
                className: '合计',
                effectiveStdCount: '172',
                gradeName: '二年级',
                highMyopiaRate: 0.6627,
                highMyopiaStdCount: '114',
                manEffectiveStdCount: '78',
                manHighMyopiaRate: 0.6666,
                manHighMyopiaStdCount: '52',
                manMyopiaRate: 0.7948,
                manMyopiaStdCount: '62',
                manStdCount: '78',
                myopiaRate: 0.7848,
                myopiaStdCount: '135',
                noMyopiaRate: null,
                noMyopiaStdCount: '37',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7948,
                    manMyopiaStdCount: '62',
                    myopiaRate: 0.7848,
                    myopiaStdCount: '135',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7765,
                    womanMyopiaStdCount: '73'
                  },
                  {
                    manMyopiaRate: 0.0897,
                    manMyopiaStdCount: '7',
                    myopiaRate: 0.0697,
                    myopiaStdCount: '12',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0531,
                    womanMyopiaStdCount: '5'
                  },
                  {
                    manMyopiaRate: 0.0384,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.0523,
                    myopiaStdCount: '9',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0638,
                    womanMyopiaStdCount: '6'
                  },
                  {
                    manMyopiaRate: 0.6666,
                    manMyopiaStdCount: '52',
                    myopiaRate: 0.6627,
                    myopiaStdCount: '114',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6595,
                    womanMyopiaStdCount: '62'
                  },
                  {
                    manMyopiaRate: 0.2051,
                    manMyopiaStdCount: '16',
                    myopiaRate: 0.2151,
                    myopiaStdCount: '37',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2234,
                    womanMyopiaStdCount: '21'
                  }
                ],
                stdCount: '172',
                studentMyopiaInfos: null,
                studyYear: '2021',
                womanEffectiveStdCount: '94',
                womanHighMyopiaRate: 0.6595,
                womanHighMyopiaStdCount: '62',
                womanMyopiaRate: 0.7765,
                womanMyopiaStdCount: '73',
                womanStdCount: '94'
              }
            ],
            effectiveStdCount: '172',
            gradeId: '921830381248272',
            gradeName: '二年级',
            highMyopiaRate: 0.6627,
            highMyopiaStdCount: '114',
            manEffectiveStdCount: '78',
            manHighMyopiaRate: 0.6666,
            manHighMyopiaStdCount: '52',
            manMyopiaRate: 0.7948,
            manMyopiaStdCount: '62',
            manStdCount: '78',
            maxClass: {
              classId: '1282974993579779',
              className: '2',
              effectiveStdCount: '35',
              gradeName: '二年级',
              highMyopiaRate: 0.7142,
              highMyopiaStdCount: '25',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.647,
              manHighMyopiaStdCount: '11',
              manMyopiaRate: 0.7647,
              manMyopiaStdCount: '13',
              manStdCount: '17',
              myopiaRate: 0.8571,
              myopiaStdCount: '30',
              noMyopiaRate: 0.1428,
              noMyopiaStdCount: '5',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7647,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.8571,
                  myopiaStdCount: '30',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9444,
                  womanMyopiaStdCount: '17'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 1,
                  womanMyopiaRate: 0.1111,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0571,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.647,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.7142,
                  myopiaStdCount: '25',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7777,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.2352,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.1428,
                  myopiaStdCount: '5',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '35',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '18',
              womanHighMyopiaRate: 0.7777,
              womanHighMyopiaStdCount: '14',
              womanMyopiaRate: 0.9444,
              womanMyopiaStdCount: '17',
              womanStdCount: '18'
            },
            maxHighClass: {
              classId: '1282974993579779',
              className: '2',
              effectiveStdCount: '35',
              gradeName: '二年级',
              highMyopiaRate: 0.7142,
              highMyopiaStdCount: '25',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.647,
              manHighMyopiaStdCount: '11',
              manMyopiaRate: 0.7647,
              manMyopiaStdCount: '13',
              manStdCount: '17',
              myopiaRate: 0.8571,
              myopiaStdCount: '30',
              noMyopiaRate: 0.1428,
              noMyopiaStdCount: '5',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7647,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.8571,
                  myopiaStdCount: '30',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9444,
                  womanMyopiaStdCount: '17'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 1,
                  womanMyopiaRate: 0.1111,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0571,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.647,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.7142,
                  myopiaStdCount: '25',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7777,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.2352,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.1428,
                  myopiaStdCount: '5',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '35',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '18',
              womanHighMyopiaRate: 0.7777,
              womanHighMyopiaStdCount: '14',
              womanMyopiaRate: 0.9444,
              womanMyopiaStdCount: '17',
              womanStdCount: '18'
            },
            minClass: {
              classId: '1282974993587969',
              className: '5',
              effectiveStdCount: '37',
              gradeName: '二年级',
              highMyopiaRate: 0.6216,
              highMyopiaStdCount: '23',
              manEffectiveStdCount: '15',
              manHighMyopiaRate: 0.6666,
              manHighMyopiaStdCount: '10',
              manMyopiaRate: 0.8,
              manMyopiaStdCount: '12',
              manStdCount: '15',
              myopiaRate: 0.7567,
              myopiaStdCount: '28',
              noMyopiaRate: 0.2432,
              noMyopiaStdCount: '9',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.7567,
                  myopiaStdCount: '28',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7272,
                  womanMyopiaStdCount: '16'
                },
                {
                  manMyopiaRate: 0.0666,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.027,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0666,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.1081,
                  myopiaStdCount: '4',
                  myopiaType: 2,
                  womanMyopiaRate: 0.1363,
                  womanMyopiaStdCount: '3'
                },
                {
                  manMyopiaRate: 0.6666,
                  manMyopiaStdCount: '10',
                  myopiaRate: 0.6216,
                  myopiaStdCount: '23',
                  myopiaType: 3,
                  womanMyopiaRate: 0.5909,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.2,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2432,
                  myopiaStdCount: '9',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2727,
                  womanMyopiaStdCount: '6'
                }
              ],
              stdCount: '37',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '22',
              womanHighMyopiaRate: 0.5909,
              womanHighMyopiaStdCount: '13',
              womanMyopiaRate: 0.7272,
              womanMyopiaStdCount: '16',
              womanStdCount: '22'
            },
            minHighClass: {
              classId: '1282974993579778',
              className: '1',
              effectiveStdCount: '34',
              gradeName: '二年级',
              highMyopiaRate: 0.6176,
              highMyopiaStdCount: '21',
              manEffectiveStdCount: '13',
              manHighMyopiaRate: 0.6923,
              manHighMyopiaStdCount: '9',
              manMyopiaRate: 0.8461,
              manMyopiaStdCount: '11',
              manStdCount: '13',
              myopiaRate: 0.7647,
              myopiaStdCount: '26',
              noMyopiaRate: 0.2352,
              noMyopiaStdCount: '8',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8461,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.7647,
                  myopiaStdCount: '26',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7142,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.1538,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1176,
                  myopiaStdCount: '4',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0952,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0294,
                  myopiaStdCount: '1',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0476,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.6923,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.6176,
                  myopiaStdCount: '21',
                  myopiaType: 3,
                  womanMyopiaRate: 0.5714,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1538,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.2352,
                  myopiaStdCount: '8',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2857,
                  womanMyopiaStdCount: '6'
                }
              ],
              stdCount: '34',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '21',
              womanHighMyopiaRate: 0.5714,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.7142,
              womanMyopiaStdCount: '15',
              womanStdCount: '21'
            },
            myopiaRate: 0.7848,
            myopiaStdCount: '135',
            noMyopiaStdCount: '37',
            noMyopiaStdRate: null,
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7948,
                manMyopiaStdCount: '62',
                myopiaRate: 0.7848,
                myopiaStdCount: '135',
                myopiaType: 0,
                womanMyopiaRate: 0.7765,
                womanMyopiaStdCount: '73'
              },
              {
                manMyopiaRate: 0.0897,
                manMyopiaStdCount: '7',
                myopiaRate: 0.0697,
                myopiaStdCount: '12',
                myopiaType: 1,
                womanMyopiaRate: 0.0531,
                womanMyopiaStdCount: '5'
              },
              {
                manMyopiaRate: 0.0384,
                manMyopiaStdCount: '3',
                myopiaRate: 0.0523,
                myopiaStdCount: '9',
                myopiaType: 2,
                womanMyopiaRate: 0.0638,
                womanMyopiaStdCount: '6'
              },
              {
                manMyopiaRate: 0.6666,
                manMyopiaStdCount: '52',
                myopiaRate: 0.6627,
                myopiaStdCount: '114',
                myopiaType: 3,
                womanMyopiaRate: 0.6595,
                womanMyopiaStdCount: '62'
              },
              {
                manMyopiaRate: 0.2051,
                manMyopiaStdCount: '16',
                myopiaRate: 0.2151,
                myopiaStdCount: '37',
                myopiaType: 4,
                womanMyopiaRate: 0.2234,
                womanMyopiaStdCount: '21'
              }
            ],
            stdCount: '172',
            studyYear: '2021',
            womanEffectiveStdCount: '94',
            womanHighMyopiaRate: 0.6595,
            womanHighMyopiaStdCount: '62',
            womanMyopiaRate: 0.7765,
            womanMyopiaStdCount: '73',
            womanStdCount: '94'
          },
          {
            classMyopiaInfoVOS: [
              {
                classId: '1282974993587970',
                className: '1',
                effectiveStdCount: '35',
                gradeName: '三年级',
                highMyopiaRate: 0.6857,
                highMyopiaStdCount: '24',
                manEffectiveStdCount: '17',
                manHighMyopiaRate: 0.7058,
                manHighMyopiaStdCount: '12',
                manMyopiaRate: 0.7647,
                manMyopiaStdCount: '13',
                manStdCount: '17',
                myopiaRate: 0.7714,
                myopiaStdCount: '27',
                noMyopiaRate: 0.2285,
                noMyopiaStdCount: '8',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7647,
                    manMyopiaStdCount: '13',
                    myopiaRate: 0.7714,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7777,
                    womanMyopiaStdCount: '14'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0285,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0555,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.0588,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0571,
                    myopiaStdCount: '2',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0555,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.7058,
                    manMyopiaStdCount: '12',
                    myopiaRate: 0.6857,
                    myopiaStdCount: '24',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6666,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.2352,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.2285,
                    myopiaStdCount: '8',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2222,
                    womanMyopiaStdCount: '4'
                  }
                ],
                stdCount: '35',
                studentMyopiaInfos: null,
                studyYear: '2020',
                womanEffectiveStdCount: '18',
                womanHighMyopiaRate: 0.6666,
                womanHighMyopiaStdCount: '12',
                womanMyopiaRate: 0.7777,
                womanMyopiaStdCount: '14',
                womanStdCount: '18'
              },
              {
                classId: '1282974993587971',
                className: '2',
                effectiveStdCount: '33',
                gradeName: '三年级',
                highMyopiaRate: 0.5454,
                highMyopiaStdCount: '18',
                manEffectiveStdCount: '17',
                manHighMyopiaRate: 0.5294,
                manHighMyopiaStdCount: '9',
                manMyopiaRate: 0.7647,
                manMyopiaStdCount: '13',
                manStdCount: '17',
                myopiaRate: 0.7272,
                myopiaStdCount: '24',
                noMyopiaRate: 0.2727,
                noMyopiaStdCount: '9',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7647,
                    manMyopiaStdCount: '13',
                    myopiaRate: 0.7272,
                    myopiaStdCount: '24',
                    myopiaType: 0,
                    womanMyopiaRate: 0.6875,
                    womanMyopiaStdCount: '11'
                  },
                  {
                    manMyopiaRate: 0.0588,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0606,
                    myopiaStdCount: '2',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0625,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.1764,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.1212,
                    myopiaStdCount: '4',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0625,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.5294,
                    manMyopiaStdCount: '9',
                    myopiaRate: 0.5454,
                    myopiaStdCount: '18',
                    myopiaType: 3,
                    womanMyopiaRate: 0.5625,
                    womanMyopiaStdCount: '9'
                  },
                  {
                    manMyopiaRate: 0.2352,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.2727,
                    myopiaStdCount: '9',
                    myopiaType: 4,
                    womanMyopiaRate: 0.3125,
                    womanMyopiaStdCount: '5'
                  }
                ],
                stdCount: '33',
                studentMyopiaInfos: null,
                studyYear: '2020',
                womanEffectiveStdCount: '16',
                womanHighMyopiaRate: 0.5625,
                womanHighMyopiaStdCount: '9',
                womanMyopiaRate: 0.6875,
                womanMyopiaStdCount: '11',
                womanStdCount: '16'
              },
              {
                classId: '1282974993587972',
                className: '3',
                effectiveStdCount: '39',
                gradeName: '三年级',
                highMyopiaRate: 0.6153,
                highMyopiaStdCount: '24',
                manEffectiveStdCount: '21',
                manHighMyopiaRate: 0.5714,
                manHighMyopiaStdCount: '12',
                manMyopiaRate: 0.7619,
                manMyopiaStdCount: '16',
                manStdCount: '21',
                myopiaRate: 0.7692,
                myopiaStdCount: '30',
                noMyopiaRate: 0.2307,
                noMyopiaStdCount: '9',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7619,
                    manMyopiaStdCount: '16',
                    myopiaRate: 0.7692,
                    myopiaStdCount: '30',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7777,
                    womanMyopiaStdCount: '14'
                  },
                  {
                    manMyopiaRate: 0.0952,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0769,
                    myopiaStdCount: '3',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0555,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.0952,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0769,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0555,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.5714,
                    manMyopiaStdCount: '12',
                    myopiaRate: 0.6153,
                    myopiaStdCount: '24',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6666,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.238,
                    manMyopiaStdCount: '5',
                    myopiaRate: 0.2307,
                    myopiaStdCount: '9',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2222,
                    womanMyopiaStdCount: '4'
                  }
                ],
                stdCount: '39',
                studentMyopiaInfos: null,
                studyYear: '2020',
                womanEffectiveStdCount: '18',
                womanHighMyopiaRate: 0.6666,
                womanHighMyopiaStdCount: '12',
                womanMyopiaRate: 0.7777,
                womanMyopiaStdCount: '14',
                womanStdCount: '18'
              },
              {
                classId: '1282974993596160',
                className: '4',
                effectiveStdCount: '34',
                gradeName: '三年级',
                highMyopiaRate: 0.7058,
                highMyopiaStdCount: '24',
                manEffectiveStdCount: '17',
                manHighMyopiaRate: 0.7058,
                manHighMyopiaStdCount: '12',
                manMyopiaRate: 0.8235,
                manMyopiaStdCount: '14',
                manStdCount: '17',
                myopiaRate: 0.7941,
                myopiaStdCount: '27',
                noMyopiaRate: 0.2058,
                noMyopiaStdCount: '7',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8235,
                    manMyopiaStdCount: '14',
                    myopiaRate: 0.7941,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7647,
                    womanMyopiaStdCount: '13'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0,
                    myopiaStdCount: '0',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.1176,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0882,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0588,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.7058,
                    manMyopiaStdCount: '12',
                    myopiaRate: 0.7058,
                    myopiaStdCount: '24',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7058,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.1764,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.2058,
                    myopiaStdCount: '7',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2352,
                    womanMyopiaStdCount: '4'
                  }
                ],
                stdCount: '34',
                studentMyopiaInfos: null,
                studyYear: '2020',
                womanEffectiveStdCount: '17',
                womanHighMyopiaRate: 0.7058,
                womanHighMyopiaStdCount: '12',
                womanMyopiaRate: 0.7647,
                womanMyopiaStdCount: '13',
                womanStdCount: '17'
              },
              {
                classId: '1282974993596161',
                className: '5',
                effectiveStdCount: '38',
                gradeName: '三年级',
                highMyopiaRate: 0.6842,
                highMyopiaStdCount: '26',
                manEffectiveStdCount: '23',
                manHighMyopiaRate: 0.6086,
                manHighMyopiaStdCount: '14',
                manMyopiaRate: 0.6956,
                manMyopiaStdCount: '16',
                manStdCount: '23',
                myopiaRate: 0.7368,
                myopiaStdCount: '28',
                noMyopiaRate: 0.2631,
                noMyopiaStdCount: '10',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.6956,
                    manMyopiaStdCount: '16',
                    myopiaRate: 0.7368,
                    myopiaStdCount: '28',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0,
                    myopiaStdCount: '0',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.0869,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0526,
                    myopiaStdCount: '2',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.6086,
                    manMyopiaStdCount: '14',
                    myopiaRate: 0.6842,
                    myopiaStdCount: '26',
                    myopiaType: 3,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.3043,
                    manMyopiaStdCount: '7',
                    myopiaRate: 0.2631,
                    myopiaStdCount: '10',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2,
                    womanMyopiaStdCount: '3'
                  }
                ],
                stdCount: '38',
                studentMyopiaInfos: null,
                studyYear: '2020',
                womanEffectiveStdCount: '15',
                womanHighMyopiaRate: 0.8,
                womanHighMyopiaStdCount: '12',
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '12',
                womanStdCount: '15'
              },
              {
                classId: null,
                className: '合计',
                effectiveStdCount: '179',
                gradeName: '三年级',
                highMyopiaRate: 0.648,
                highMyopiaStdCount: '116',
                manEffectiveStdCount: '95',
                manHighMyopiaRate: 0.621,
                manHighMyopiaStdCount: '59',
                manMyopiaRate: 0.7578,
                manMyopiaStdCount: '72',
                manStdCount: '95',
                myopiaRate: 0.7597,
                myopiaStdCount: '136',
                noMyopiaRate: null,
                noMyopiaStdCount: '43',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7578,
                    manMyopiaStdCount: '72',
                    myopiaRate: 0.7597,
                    myopiaStdCount: '136',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7619,
                    womanMyopiaStdCount: '64'
                  },
                  {
                    manMyopiaRate: 0.0315,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.0335,
                    myopiaStdCount: '6',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0357,
                    womanMyopiaStdCount: '3'
                  },
                  {
                    manMyopiaRate: 0.1052,
                    manMyopiaStdCount: '10',
                    myopiaRate: 0.0782,
                    myopiaStdCount: '14',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0476,
                    womanMyopiaStdCount: '4'
                  },
                  {
                    manMyopiaRate: 0.621,
                    manMyopiaStdCount: '59',
                    myopiaRate: 0.648,
                    myopiaStdCount: '116',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6785,
                    womanMyopiaStdCount: '57'
                  },
                  {
                    manMyopiaRate: 0.2421,
                    manMyopiaStdCount: '23',
                    myopiaRate: 0.2402,
                    myopiaStdCount: '43',
                    myopiaType: 4,
                    womanMyopiaRate: 0.238,
                    womanMyopiaStdCount: '20'
                  }
                ],
                stdCount: '179',
                studentMyopiaInfos: null,
                studyYear: '2020',
                womanEffectiveStdCount: '84',
                womanHighMyopiaRate: 0.6785,
                womanHighMyopiaStdCount: '57',
                womanMyopiaRate: 0.7619,
                womanMyopiaStdCount: '64',
                womanStdCount: '84'
              }
            ],
            effectiveStdCount: '179',
            gradeId: '921830381248273',
            gradeName: '三年级',
            highMyopiaRate: 0.648,
            highMyopiaStdCount: '116',
            manEffectiveStdCount: '95',
            manHighMyopiaRate: 0.621,
            manHighMyopiaStdCount: '59',
            manMyopiaRate: 0.7578,
            manMyopiaStdCount: '72',
            manStdCount: '95',
            maxClass: {
              classId: '1282974993596160',
              className: '4',
              effectiveStdCount: '34',
              gradeName: '三年级',
              highMyopiaRate: 0.7058,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.7058,
              manHighMyopiaStdCount: '12',
              manMyopiaRate: 0.8235,
              manMyopiaStdCount: '14',
              manStdCount: '17',
              myopiaRate: 0.7941,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2058,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8235,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.7941,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7647,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1176,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0882,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0588,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7058,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.7058,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7058,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1764,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2058,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2352,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '34',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '17',
              womanHighMyopiaRate: 0.7058,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.7647,
              womanMyopiaStdCount: '13',
              womanStdCount: '17'
            },
            maxHighClass: {
              classId: '1282974993596160',
              className: '4',
              effectiveStdCount: '34',
              gradeName: '三年级',
              highMyopiaRate: 0.7058,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.7058,
              manHighMyopiaStdCount: '12',
              manMyopiaRate: 0.8235,
              manMyopiaStdCount: '14',
              manStdCount: '17',
              myopiaRate: 0.7941,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2058,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8235,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.7941,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7647,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1176,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0882,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0588,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7058,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.7058,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7058,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1764,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2058,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2352,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '34',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '17',
              womanHighMyopiaRate: 0.7058,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.7647,
              womanMyopiaStdCount: '13',
              womanStdCount: '17'
            },
            minClass: {
              classId: '1282974993587971',
              className: '2',
              effectiveStdCount: '33',
              gradeName: '三年级',
              highMyopiaRate: 0.5454,
              highMyopiaStdCount: '18',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.5294,
              manHighMyopiaStdCount: '9',
              manMyopiaRate: 0.7647,
              manMyopiaStdCount: '13',
              manStdCount: '17',
              myopiaRate: 0.7272,
              myopiaStdCount: '24',
              noMyopiaRate: 0.2727,
              noMyopiaStdCount: '9',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7647,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.7272,
                  myopiaStdCount: '24',
                  myopiaType: 0,
                  womanMyopiaRate: 0.6875,
                  womanMyopiaStdCount: '11'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0606,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.1764,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.1212,
                  myopiaStdCount: '4',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.5294,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.5454,
                  myopiaStdCount: '18',
                  myopiaType: 3,
                  womanMyopiaRate: 0.5625,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.2352,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2727,
                  myopiaStdCount: '9',
                  myopiaType: 4,
                  womanMyopiaRate: 0.3125,
                  womanMyopiaStdCount: '5'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '16',
              womanHighMyopiaRate: 0.5625,
              womanHighMyopiaStdCount: '9',
              womanMyopiaRate: 0.6875,
              womanMyopiaStdCount: '11',
              womanStdCount: '16'
            },
            minHighClass: {
              classId: '1282974993587971',
              className: '2',
              effectiveStdCount: '33',
              gradeName: '三年级',
              highMyopiaRate: 0.5454,
              highMyopiaStdCount: '18',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.5294,
              manHighMyopiaStdCount: '9',
              manMyopiaRate: 0.7647,
              manMyopiaStdCount: '13',
              manStdCount: '17',
              myopiaRate: 0.7272,
              myopiaStdCount: '24',
              noMyopiaRate: 0.2727,
              noMyopiaStdCount: '9',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7647,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.7272,
                  myopiaStdCount: '24',
                  myopiaType: 0,
                  womanMyopiaRate: 0.6875,
                  womanMyopiaStdCount: '11'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0606,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.1764,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.1212,
                  myopiaStdCount: '4',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.5294,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.5454,
                  myopiaStdCount: '18',
                  myopiaType: 3,
                  womanMyopiaRate: 0.5625,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.2352,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2727,
                  myopiaStdCount: '9',
                  myopiaType: 4,
                  womanMyopiaRate: 0.3125,
                  womanMyopiaStdCount: '5'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '16',
              womanHighMyopiaRate: 0.5625,
              womanHighMyopiaStdCount: '9',
              womanMyopiaRate: 0.6875,
              womanMyopiaStdCount: '11',
              womanStdCount: '16'
            },
            myopiaRate: 0.7597,
            myopiaStdCount: '136',
            noMyopiaStdCount: '43',
            noMyopiaStdRate: null,
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7578,
                manMyopiaStdCount: '72',
                myopiaRate: 0.7597,
                myopiaStdCount: '136',
                myopiaType: 0,
                womanMyopiaRate: 0.7619,
                womanMyopiaStdCount: '64'
              },
              {
                manMyopiaRate: 0.0315,
                manMyopiaStdCount: '3',
                myopiaRate: 0.0335,
                myopiaStdCount: '6',
                myopiaType: 1,
                womanMyopiaRate: 0.0357,
                womanMyopiaStdCount: '3'
              },
              {
                manMyopiaRate: 0.1052,
                manMyopiaStdCount: '10',
                myopiaRate: 0.0782,
                myopiaStdCount: '14',
                myopiaType: 2,
                womanMyopiaRate: 0.0476,
                womanMyopiaStdCount: '4'
              },
              {
                manMyopiaRate: 0.621,
                manMyopiaStdCount: '59',
                myopiaRate: 0.648,
                myopiaStdCount: '116',
                myopiaType: 3,
                womanMyopiaRate: 0.6785,
                womanMyopiaStdCount: '57'
              },
              {
                manMyopiaRate: 0.2421,
                manMyopiaStdCount: '23',
                myopiaRate: 0.2402,
                myopiaStdCount: '43',
                myopiaType: 4,
                womanMyopiaRate: 0.238,
                womanMyopiaStdCount: '20'
              }
            ],
            stdCount: '179',
            studyYear: '2020',
            womanEffectiveStdCount: '84',
            womanHighMyopiaRate: 0.6785,
            womanHighMyopiaStdCount: '57',
            womanMyopiaRate: 0.7619,
            womanMyopiaStdCount: '64',
            womanStdCount: '84'
          },
          {
            classMyopiaInfoVOS: [
              {
                classId: '1282974993596162',
                className: '1',
                effectiveStdCount: '37',
                gradeName: '四年级',
                highMyopiaRate: 0.7027,
                highMyopiaStdCount: '26',
                manEffectiveStdCount: '22',
                manHighMyopiaRate: 0.7727,
                manHighMyopiaStdCount: '17',
                manMyopiaRate: 0.8181,
                manMyopiaStdCount: '18',
                manStdCount: '22',
                myopiaRate: 0.7297,
                myopiaStdCount: '27',
                noMyopiaRate: 0.2702,
                noMyopiaStdCount: '10',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8181,
                    manMyopiaStdCount: '18',
                    myopiaRate: 0.7297,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.6,
                    womanMyopiaStdCount: '9'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0,
                    myopiaStdCount: '0',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.0454,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.027,
                    myopiaStdCount: '1',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.7727,
                    manMyopiaStdCount: '17',
                    myopiaRate: 0.7027,
                    myopiaStdCount: '26',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6,
                    womanMyopiaStdCount: '9'
                  },
                  {
                    manMyopiaRate: 0.1818,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.2702,
                    myopiaStdCount: '10',
                    myopiaType: 4,
                    womanMyopiaRate: 0.4,
                    womanMyopiaStdCount: '6'
                  }
                ],
                stdCount: '37',
                studentMyopiaInfos: null,
                studyYear: '2019',
                womanEffectiveStdCount: '15',
                womanHighMyopiaRate: 0.6,
                womanHighMyopiaStdCount: '9',
                womanMyopiaRate: 0.6,
                womanMyopiaStdCount: '9',
                womanStdCount: '15'
              },
              {
                classId: '1282974993596163',
                className: '2',
                effectiveStdCount: '26',
                gradeName: '四年级',
                highMyopiaRate: 0.6538,
                highMyopiaStdCount: '17',
                manEffectiveStdCount: '14',
                manHighMyopiaRate: 0.5714,
                manHighMyopiaStdCount: '8',
                manMyopiaRate: 0.7142,
                manMyopiaStdCount: '10',
                manStdCount: '14',
                myopiaRate: 0.7692,
                myopiaStdCount: '20',
                noMyopiaRate: 0.2307,
                noMyopiaStdCount: '6',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7142,
                    manMyopiaStdCount: '10',
                    myopiaRate: 0.7692,
                    myopiaStdCount: '20',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8333,
                    womanMyopiaStdCount: '10'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0384,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0833,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.1428,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0769,
                    myopiaStdCount: '2',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.5714,
                    manMyopiaStdCount: '8',
                    myopiaRate: 0.6538,
                    myopiaStdCount: '17',
                    myopiaType: 3,
                    womanMyopiaRate: 0.75,
                    womanMyopiaStdCount: '9'
                  },
                  {
                    manMyopiaRate: 0.2857,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.2307,
                    myopiaStdCount: '6',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1666,
                    womanMyopiaStdCount: '2'
                  }
                ],
                stdCount: '26',
                studentMyopiaInfos: null,
                studyYear: '2019',
                womanEffectiveStdCount: '12',
                womanHighMyopiaRate: 0.75,
                womanHighMyopiaStdCount: '9',
                womanMyopiaRate: 0.8333,
                womanMyopiaStdCount: '10',
                womanStdCount: '12'
              },
              {
                classId: '1282974993596164',
                className: '3',
                effectiveStdCount: '30',
                gradeName: '四年级',
                highMyopiaRate: 0.6333,
                highMyopiaStdCount: '19',
                manEffectiveStdCount: '16',
                manHighMyopiaRate: 0.6875,
                manHighMyopiaStdCount: '11',
                manMyopiaRate: 0.875,
                manMyopiaStdCount: '14',
                manStdCount: '16',
                myopiaRate: 0.8666,
                myopiaStdCount: '26',
                noMyopiaRate: 0.1333,
                noMyopiaStdCount: '4',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.875,
                    manMyopiaStdCount: '14',
                    myopiaRate: 0.8666,
                    myopiaStdCount: '26',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8571,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0333,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0714,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.1875,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.2,
                    myopiaStdCount: '6',
                    myopiaType: 2,
                    womanMyopiaRate: 0.2142,
                    womanMyopiaStdCount: '3'
                  },
                  {
                    manMyopiaRate: 0.6875,
                    manMyopiaStdCount: '11',
                    myopiaRate: 0.6333,
                    myopiaStdCount: '19',
                    myopiaType: 3,
                    womanMyopiaRate: 0.5714,
                    womanMyopiaStdCount: '8'
                  },
                  {
                    manMyopiaRate: 0.125,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.1333,
                    myopiaStdCount: '4',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1428,
                    womanMyopiaStdCount: '2'
                  }
                ],
                stdCount: '30',
                studentMyopiaInfos: null,
                studyYear: '2019',
                womanEffectiveStdCount: '14',
                womanHighMyopiaRate: 0.5714,
                womanHighMyopiaStdCount: '8',
                womanMyopiaRate: 0.8571,
                womanMyopiaStdCount: '12',
                womanStdCount: '14'
              },
              {
                classId: '1282974993604352',
                className: '4',
                effectiveStdCount: '34',
                gradeName: '四年级',
                highMyopiaRate: 0.7352,
                highMyopiaStdCount: '25',
                manEffectiveStdCount: '19',
                manHighMyopiaRate: 0.6842,
                manHighMyopiaStdCount: '13',
                manMyopiaRate: 0.7894,
                manMyopiaStdCount: '15',
                manStdCount: '19',
                myopiaRate: 0.7941,
                myopiaStdCount: '27',
                noMyopiaRate: 0.2058,
                noMyopiaStdCount: '7',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7894,
                    manMyopiaStdCount: '15',
                    myopiaRate: 0.7941,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.1052,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0588,
                    myopiaStdCount: '2',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0,
                    myopiaStdCount: '0',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.6842,
                    manMyopiaStdCount: '13',
                    myopiaRate: 0.7352,
                    myopiaStdCount: '25',
                    myopiaType: 3,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.2105,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.2058,
                    myopiaStdCount: '7',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2,
                    womanMyopiaStdCount: '3'
                  }
                ],
                stdCount: '34',
                studentMyopiaInfos: null,
                studyYear: '2019',
                womanEffectiveStdCount: '15',
                womanHighMyopiaRate: 0.8,
                womanHighMyopiaStdCount: '12',
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '12',
                womanStdCount: '15'
              },
              {
                classId: '1282974993604353',
                className: '5',
                effectiveStdCount: '30',
                gradeName: '四年级',
                highMyopiaRate: 0.7333,
                highMyopiaStdCount: '22',
                manEffectiveStdCount: '10',
                manHighMyopiaRate: 0.6,
                manHighMyopiaStdCount: '6',
                manMyopiaRate: 0.8,
                manMyopiaStdCount: '8',
                manStdCount: '10',
                myopiaRate: 0.9,
                myopiaStdCount: '27',
                noMyopiaRate: 0.1,
                noMyopiaStdCount: '3',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8,
                    manMyopiaStdCount: '8',
                    myopiaRate: 0.9,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.95,
                    womanMyopiaStdCount: '19'
                  },
                  {
                    manMyopiaRate: 0.2,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.1333,
                    myopiaStdCount: '4',
                    myopiaType: 1,
                    womanMyopiaRate: 0.1,
                    womanMyopiaStdCount: '2'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0333,
                    myopiaStdCount: '1',
                    myopiaType: 2,
                    womanMyopiaRate: 0.05,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.6,
                    manMyopiaStdCount: '6',
                    myopiaRate: 0.7333,
                    myopiaStdCount: '22',
                    myopiaType: 3,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '16'
                  },
                  {
                    manMyopiaRate: 0.2,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.1,
                    myopiaStdCount: '3',
                    myopiaType: 4,
                    womanMyopiaRate: 0.05,
                    womanMyopiaStdCount: '1'
                  }
                ],
                stdCount: '30',
                studentMyopiaInfos: null,
                studyYear: '2019',
                womanEffectiveStdCount: '20',
                womanHighMyopiaRate: 0.8,
                womanHighMyopiaStdCount: '16',
                womanMyopiaRate: 0.95,
                womanMyopiaStdCount: '19',
                womanStdCount: '20'
              },
              {
                classId: null,
                className: '合计',
                effectiveStdCount: '157',
                gradeName: '四年级',
                highMyopiaRate: 0.6942,
                highMyopiaStdCount: '109',
                manEffectiveStdCount: '81',
                manHighMyopiaRate: 0.679,
                manHighMyopiaStdCount: '55',
                manMyopiaRate: 0.8024,
                manMyopiaStdCount: '65',
                manStdCount: '81',
                myopiaRate: 0.8089,
                myopiaStdCount: '127',
                noMyopiaRate: null,
                noMyopiaStdCount: '30',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8024,
                    manMyopiaStdCount: '65',
                    myopiaRate: 0.8089,
                    myopiaStdCount: '127',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8157,
                    womanMyopiaStdCount: '62'
                  },
                  {
                    manMyopiaRate: 0.0493,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.0509,
                    myopiaStdCount: '8',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0526,
                    womanMyopiaStdCount: '4'
                  },
                  {
                    manMyopiaRate: 0.074,
                    manMyopiaStdCount: '6',
                    myopiaRate: 0.0636,
                    myopiaStdCount: '10',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0526,
                    womanMyopiaStdCount: '4'
                  },
                  {
                    manMyopiaRate: 0.679,
                    manMyopiaStdCount: '55',
                    myopiaRate: 0.6942,
                    myopiaStdCount: '109',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7105,
                    womanMyopiaStdCount: '54'
                  },
                  {
                    manMyopiaRate: 0.1975,
                    manMyopiaStdCount: '16',
                    myopiaRate: 0.191,
                    myopiaStdCount: '30',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1842,
                    womanMyopiaStdCount: '14'
                  }
                ],
                stdCount: '157',
                studentMyopiaInfos: null,
                studyYear: '2019',
                womanEffectiveStdCount: '76',
                womanHighMyopiaRate: 0.7105,
                womanHighMyopiaStdCount: '54',
                womanMyopiaRate: 0.8157,
                womanMyopiaStdCount: '62',
                womanStdCount: '76'
              }
            ],
            effectiveStdCount: '157',
            gradeId: '921830381248274',
            gradeName: '四年级',
            highMyopiaRate: 0.6942,
            highMyopiaStdCount: '109',
            manEffectiveStdCount: '81',
            manHighMyopiaRate: 0.679,
            manHighMyopiaStdCount: '55',
            manMyopiaRate: 0.8024,
            manMyopiaStdCount: '65',
            manStdCount: '81',
            maxClass: {
              classId: '1282974993604353',
              className: '5',
              effectiveStdCount: '30',
              gradeName: '四年级',
              highMyopiaRate: 0.7333,
              highMyopiaStdCount: '22',
              manEffectiveStdCount: '10',
              manHighMyopiaRate: 0.6,
              manHighMyopiaStdCount: '6',
              manMyopiaRate: 0.8,
              manMyopiaStdCount: '8',
              manStdCount: '10',
              myopiaRate: 0.9,
              myopiaStdCount: '27',
              noMyopiaRate: 0.1,
              noMyopiaStdCount: '3',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.9,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.95,
                  womanMyopiaStdCount: '19'
                },
                {
                  manMyopiaRate: 0.2,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1333,
                  myopiaStdCount: '4',
                  myopiaType: 1,
                  womanMyopiaRate: 0.1,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0333,
                  myopiaStdCount: '1',
                  myopiaType: 2,
                  womanMyopiaRate: 0.05,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.6,
                  manMyopiaStdCount: '6',
                  myopiaRate: 0.7333,
                  myopiaStdCount: '22',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '16'
                },
                {
                  manMyopiaRate: 0.2,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1,
                  myopiaStdCount: '3',
                  myopiaType: 4,
                  womanMyopiaRate: 0.05,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '30',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '20',
              womanHighMyopiaRate: 0.8,
              womanHighMyopiaStdCount: '16',
              womanMyopiaRate: 0.95,
              womanMyopiaStdCount: '19',
              womanStdCount: '20'
            },
            maxHighClass: {
              classId: '1282974993604352',
              className: '4',
              effectiveStdCount: '34',
              gradeName: '四年级',
              highMyopiaRate: 0.7352,
              highMyopiaStdCount: '25',
              manEffectiveStdCount: '19',
              manHighMyopiaRate: 0.6842,
              manHighMyopiaStdCount: '13',
              manMyopiaRate: 0.7894,
              manMyopiaStdCount: '15',
              manStdCount: '19',
              myopiaRate: 0.7941,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2058,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7894,
                  manMyopiaStdCount: '15',
                  myopiaRate: 0.7941,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1052,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0588,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.6842,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.7352,
                  myopiaStdCount: '25',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.2105,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2058,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2,
                  womanMyopiaStdCount: '3'
                }
              ],
              stdCount: '34',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.8,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.8,
              womanMyopiaStdCount: '12',
              womanStdCount: '15'
            },
            minClass: {
              classId: '1282974993596162',
              className: '1',
              effectiveStdCount: '37',
              gradeName: '四年级',
              highMyopiaRate: 0.7027,
              highMyopiaStdCount: '26',
              manEffectiveStdCount: '22',
              manHighMyopiaRate: 0.7727,
              manHighMyopiaStdCount: '17',
              manMyopiaRate: 0.8181,
              manMyopiaStdCount: '18',
              manStdCount: '22',
              myopiaRate: 0.7297,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2702,
              noMyopiaStdCount: '10',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8181,
                  manMyopiaStdCount: '18',
                  myopiaRate: 0.7297,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.6,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0454,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.027,
                  myopiaStdCount: '1',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.7727,
                  manMyopiaStdCount: '17',
                  myopiaRate: 0.7027,
                  myopiaStdCount: '26',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.1818,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2702,
                  myopiaStdCount: '10',
                  myopiaType: 4,
                  womanMyopiaRate: 0.4,
                  womanMyopiaStdCount: '6'
                }
              ],
              stdCount: '37',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.6,
              womanHighMyopiaStdCount: '9',
              womanMyopiaRate: 0.6,
              womanMyopiaStdCount: '9',
              womanStdCount: '15'
            },
            minHighClass: {
              classId: '1282974993596164',
              className: '3',
              effectiveStdCount: '30',
              gradeName: '四年级',
              highMyopiaRate: 0.6333,
              highMyopiaStdCount: '19',
              manEffectiveStdCount: '16',
              manHighMyopiaRate: 0.6875,
              manHighMyopiaStdCount: '11',
              manMyopiaRate: 0.875,
              manMyopiaStdCount: '14',
              manStdCount: '16',
              myopiaRate: 0.8666,
              myopiaStdCount: '26',
              noMyopiaRate: 0.1333,
              noMyopiaStdCount: '4',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.875,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.8666,
                  myopiaStdCount: '26',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8571,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0333,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0714,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.1875,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2,
                  myopiaStdCount: '6',
                  myopiaType: 2,
                  womanMyopiaRate: 0.2142,
                  womanMyopiaStdCount: '3'
                },
                {
                  manMyopiaRate: 0.6875,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.6333,
                  myopiaStdCount: '19',
                  myopiaType: 3,
                  womanMyopiaRate: 0.5714,
                  womanMyopiaStdCount: '8'
                },
                {
                  manMyopiaRate: 0.125,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1333,
                  myopiaStdCount: '4',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1428,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '30',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '14',
              womanHighMyopiaRate: 0.5714,
              womanHighMyopiaStdCount: '8',
              womanMyopiaRate: 0.8571,
              womanMyopiaStdCount: '12',
              womanStdCount: '14'
            },
            myopiaRate: 0.8089,
            myopiaStdCount: '127',
            noMyopiaStdCount: '30',
            noMyopiaStdRate: null,
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8024,
                manMyopiaStdCount: '65',
                myopiaRate: 0.8089,
                myopiaStdCount: '127',
                myopiaType: 0,
                womanMyopiaRate: 0.8157,
                womanMyopiaStdCount: '62'
              },
              {
                manMyopiaRate: 0.0493,
                manMyopiaStdCount: '4',
                myopiaRate: 0.0509,
                myopiaStdCount: '8',
                myopiaType: 1,
                womanMyopiaRate: 0.0526,
                womanMyopiaStdCount: '4'
              },
              {
                manMyopiaRate: 0.074,
                manMyopiaStdCount: '6',
                myopiaRate: 0.0636,
                myopiaStdCount: '10',
                myopiaType: 2,
                womanMyopiaRate: 0.0526,
                womanMyopiaStdCount: '4'
              },
              {
                manMyopiaRate: 0.679,
                manMyopiaStdCount: '55',
                myopiaRate: 0.6942,
                myopiaStdCount: '109',
                myopiaType: 3,
                womanMyopiaRate: 0.7105,
                womanMyopiaStdCount: '54'
              },
              {
                manMyopiaRate: 0.1975,
                manMyopiaStdCount: '16',
                myopiaRate: 0.191,
                myopiaStdCount: '30',
                myopiaType: 4,
                womanMyopiaRate: 0.1842,
                womanMyopiaStdCount: '14'
              }
            ],
            stdCount: '157',
            studyYear: '2019',
            womanEffectiveStdCount: '76',
            womanHighMyopiaRate: 0.7105,
            womanHighMyopiaStdCount: '54',
            womanMyopiaRate: 0.8157,
            womanMyopiaStdCount: '62',
            womanStdCount: '76'
          },
          {
            classMyopiaInfoVOS: [
              {
                classId: '1282974993604354',
                className: '1',
                effectiveStdCount: '32',
                gradeName: '五年级',
                highMyopiaRate: 0.6875,
                highMyopiaStdCount: '22',
                manEffectiveStdCount: '16',
                manHighMyopiaRate: 0.5625,
                manHighMyopiaStdCount: '9',
                manMyopiaRate: 0.6875,
                manMyopiaStdCount: '11',
                manStdCount: '16',
                myopiaRate: 0.8125,
                myopiaStdCount: '26',
                noMyopiaRate: 0.1875,
                noMyopiaStdCount: '6',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.6875,
                    manMyopiaStdCount: '11',
                    myopiaRate: 0.8125,
                    myopiaStdCount: '26',
                    myopiaType: 0,
                    womanMyopiaRate: 0.9375,
                    womanMyopiaStdCount: '15'
                  },
                  {
                    manMyopiaRate: 0.0625,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0625,
                    myopiaStdCount: '2',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0625,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.0625,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0625,
                    myopiaStdCount: '2',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0625,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.5625,
                    manMyopiaStdCount: '9',
                    myopiaRate: 0.6875,
                    myopiaStdCount: '22',
                    myopiaType: 3,
                    womanMyopiaRate: 0.8125,
                    womanMyopiaStdCount: '13'
                  },
                  {
                    manMyopiaRate: 0.3125,
                    manMyopiaStdCount: '5',
                    myopiaRate: 0.1875,
                    myopiaStdCount: '6',
                    myopiaType: 4,
                    womanMyopiaRate: 0.0625,
                    womanMyopiaStdCount: '1'
                  }
                ],
                stdCount: '32',
                studentMyopiaInfos: null,
                studyYear: '2018',
                womanEffectiveStdCount: '16',
                womanHighMyopiaRate: 0.8125,
                womanHighMyopiaStdCount: '13',
                womanMyopiaRate: 0.9375,
                womanMyopiaStdCount: '15',
                womanStdCount: '16'
              },
              {
                classId: '1282974993604355',
                className: '2',
                effectiveStdCount: '31',
                gradeName: '五年级',
                highMyopiaRate: 0.6774,
                highMyopiaStdCount: '21',
                manEffectiveStdCount: '14',
                manHighMyopiaRate: 0.5714,
                manHighMyopiaStdCount: '8',
                manMyopiaRate: 0.8571,
                manMyopiaStdCount: '12',
                manStdCount: '14',
                myopiaRate: 0.8064,
                myopiaStdCount: '25',
                noMyopiaRate: 0.1935,
                noMyopiaStdCount: '6',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8571,
                    manMyopiaStdCount: '12',
                    myopiaRate: 0.8064,
                    myopiaStdCount: '25',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7647,
                    womanMyopiaStdCount: '13'
                  },
                  {
                    manMyopiaRate: 0.1428,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0645,
                    myopiaStdCount: '2',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.1428,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0645,
                    myopiaStdCount: '2',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.5714,
                    manMyopiaStdCount: '8',
                    myopiaRate: 0.6774,
                    myopiaStdCount: '21',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7647,
                    womanMyopiaStdCount: '13'
                  },
                  {
                    manMyopiaRate: 0.1428,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.1935,
                    myopiaStdCount: '6',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2352,
                    womanMyopiaStdCount: '4'
                  }
                ],
                stdCount: '31',
                studentMyopiaInfos: null,
                studyYear: '2018',
                womanEffectiveStdCount: '17',
                womanHighMyopiaRate: 0.7647,
                womanHighMyopiaStdCount: '13',
                womanMyopiaRate: 0.7647,
                womanMyopiaStdCount: '13',
                womanStdCount: '17'
              },
              {
                classId: '1282974993612544',
                className: '3',
                effectiveStdCount: '35',
                gradeName: '五年级',
                highMyopiaRate: 0.7714,
                highMyopiaStdCount: '27',
                manEffectiveStdCount: '19',
                manHighMyopiaRate: 0.7894,
                manHighMyopiaStdCount: '15',
                manMyopiaRate: 0.8947,
                manMyopiaStdCount: '17',
                manStdCount: '19',
                myopiaRate: 0.9142,
                myopiaStdCount: '32',
                noMyopiaRate: 0.0857,
                noMyopiaStdCount: '3',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8947,
                    manMyopiaStdCount: '17',
                    myopiaRate: 0.9142,
                    myopiaStdCount: '32',
                    myopiaType: 0,
                    womanMyopiaRate: 0.9375,
                    womanMyopiaStdCount: '15'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0857,
                    myopiaStdCount: '3',
                    myopiaType: 1,
                    womanMyopiaRate: 0.1875,
                    womanMyopiaStdCount: '3'
                  },
                  {
                    manMyopiaRate: 0.1052,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0571,
                    myopiaStdCount: '2',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.7894,
                    manMyopiaStdCount: '15',
                    myopiaRate: 0.7714,
                    myopiaStdCount: '27',
                    myopiaType: 3,
                    womanMyopiaRate: 0.75,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.1052,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0857,
                    myopiaStdCount: '3',
                    myopiaType: 4,
                    womanMyopiaRate: 0.0625,
                    womanMyopiaStdCount: '1'
                  }
                ],
                stdCount: '35',
                studentMyopiaInfos: null,
                studyYear: '2018',
                womanEffectiveStdCount: '16',
                womanHighMyopiaRate: 0.75,
                womanHighMyopiaStdCount: '12',
                womanMyopiaRate: 0.9375,
                womanMyopiaStdCount: '15',
                womanStdCount: '16'
              },
              {
                classId: '1282974993612545',
                className: '4',
                effectiveStdCount: '27',
                gradeName: '五年级',
                highMyopiaRate: 0.7037,
                highMyopiaStdCount: '19',
                manEffectiveStdCount: '8',
                manHighMyopiaRate: 0.75,
                manHighMyopiaStdCount: '6',
                manMyopiaRate: 0.875,
                manMyopiaStdCount: '7',
                manStdCount: '8',
                myopiaRate: 0.7407,
                myopiaStdCount: '20',
                noMyopiaRate: 0.2592,
                noMyopiaStdCount: '7',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.875,
                    manMyopiaStdCount: '7',
                    myopiaRate: 0.7407,
                    myopiaStdCount: '20',
                    myopiaType: 0,
                    womanMyopiaRate: 0.6842,
                    womanMyopiaStdCount: '13'
                  },
                  {
                    manMyopiaRate: 0.125,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.037,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0,
                    myopiaStdCount: '0',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.75,
                    manMyopiaStdCount: '6',
                    myopiaRate: 0.7037,
                    myopiaStdCount: '19',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6842,
                    womanMyopiaStdCount: '13'
                  },
                  {
                    manMyopiaRate: 0.125,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.2592,
                    myopiaStdCount: '7',
                    myopiaType: 4,
                    womanMyopiaRate: 0.3157,
                    womanMyopiaStdCount: '6'
                  }
                ],
                stdCount: '27',
                studentMyopiaInfos: null,
                studyYear: '2018',
                womanEffectiveStdCount: '19',
                womanHighMyopiaRate: 0.6842,
                womanHighMyopiaStdCount: '13',
                womanMyopiaRate: 0.6842,
                womanMyopiaStdCount: '13',
                womanStdCount: '19'
              },
              {
                classId: '1282974993612546',
                className: '5',
                effectiveStdCount: '35',
                gradeName: '五年级',
                highMyopiaRate: 0.6285,
                highMyopiaStdCount: '22',
                manEffectiveStdCount: '18',
                manHighMyopiaRate: 0.6111,
                manHighMyopiaStdCount: '11',
                manMyopiaRate: 0.8333,
                manMyopiaStdCount: '15',
                manStdCount: '18',
                myopiaRate: 0.7714,
                myopiaStdCount: '27',
                noMyopiaRate: 0.2285,
                noMyopiaStdCount: '8',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8333,
                    manMyopiaStdCount: '15',
                    myopiaRate: 0.7714,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7058,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.1111,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0571,
                    myopiaStdCount: '2',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.1111,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0857,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0588,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.6111,
                    manMyopiaStdCount: '11',
                    myopiaRate: 0.6285,
                    myopiaStdCount: '22',
                    myopiaType: 3,
                    womanMyopiaRate: 0.647,
                    womanMyopiaStdCount: '11'
                  },
                  {
                    manMyopiaRate: 0.1666,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.2285,
                    myopiaStdCount: '8',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2941,
                    womanMyopiaStdCount: '5'
                  }
                ],
                stdCount: '35',
                studentMyopiaInfos: null,
                studyYear: '2018',
                womanEffectiveStdCount: '17',
                womanHighMyopiaRate: 0.647,
                womanHighMyopiaStdCount: '11',
                womanMyopiaRate: 0.7058,
                womanMyopiaStdCount: '12',
                womanStdCount: '17'
              },
              {
                classId: null,
                className: '合计',
                effectiveStdCount: '160',
                gradeName: '五年级',
                highMyopiaRate: 0.6937,
                highMyopiaStdCount: '111',
                manEffectiveStdCount: '75',
                manHighMyopiaRate: 0.6533,
                manHighMyopiaStdCount: '49',
                manMyopiaRate: 0.8266,
                manMyopiaStdCount: '62',
                manStdCount: '75',
                myopiaRate: 0.8125,
                myopiaStdCount: '130',
                noMyopiaRate: null,
                noMyopiaStdCount: '30',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8266,
                    manMyopiaStdCount: '62',
                    myopiaRate: 0.8125,
                    myopiaStdCount: '130',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '68'
                  },
                  {
                    manMyopiaRate: 0.08,
                    manMyopiaStdCount: '6',
                    myopiaRate: 0.0625,
                    myopiaStdCount: '10',
                    myopiaType: 1,
                    womanMyopiaRate: 0.047,
                    womanMyopiaStdCount: '4'
                  },
                  {
                    manMyopiaRate: 0.0933,
                    manMyopiaStdCount: '7',
                    myopiaRate: 0.0562,
                    myopiaStdCount: '9',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0235,
                    womanMyopiaStdCount: '2'
                  },
                  {
                    manMyopiaRate: 0.6533,
                    manMyopiaStdCount: '49',
                    myopiaRate: 0.6937,
                    myopiaStdCount: '111',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7294,
                    womanMyopiaStdCount: '62'
                  },
                  {
                    manMyopiaRate: 0.1733,
                    manMyopiaStdCount: '13',
                    myopiaRate: 0.1875,
                    myopiaStdCount: '30',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2,
                    womanMyopiaStdCount: '17'
                  }
                ],
                stdCount: '160',
                studentMyopiaInfos: null,
                studyYear: '2018',
                womanEffectiveStdCount: '85',
                womanHighMyopiaRate: 0.7294,
                womanHighMyopiaStdCount: '62',
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '68',
                womanStdCount: '85'
              }
            ],
            effectiveStdCount: '160',
            gradeId: '921830381248275',
            gradeName: '五年级',
            highMyopiaRate: 0.6937,
            highMyopiaStdCount: '111',
            manEffectiveStdCount: '75',
            manHighMyopiaRate: 0.6533,
            manHighMyopiaStdCount: '49',
            manMyopiaRate: 0.8266,
            manMyopiaStdCount: '62',
            manStdCount: '75',
            maxClass: {
              classId: '1282974993612544',
              className: '3',
              effectiveStdCount: '35',
              gradeName: '五年级',
              highMyopiaRate: 0.7714,
              highMyopiaStdCount: '27',
              manEffectiveStdCount: '19',
              manHighMyopiaRate: 0.7894,
              manHighMyopiaStdCount: '15',
              manMyopiaRate: 0.8947,
              manMyopiaStdCount: '17',
              manStdCount: '19',
              myopiaRate: 0.9142,
              myopiaStdCount: '32',
              noMyopiaRate: 0.0857,
              noMyopiaStdCount: '3',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8947,
                  manMyopiaStdCount: '17',
                  myopiaRate: 0.9142,
                  myopiaStdCount: '32',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9375,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 1,
                  womanMyopiaRate: 0.1875,
                  womanMyopiaStdCount: '3'
                },
                {
                  manMyopiaRate: 0.1052,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0571,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.7894,
                  manMyopiaStdCount: '15',
                  myopiaRate: 0.7714,
                  myopiaStdCount: '27',
                  myopiaType: 3,
                  womanMyopiaRate: 0.75,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1052,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '35',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '16',
              womanHighMyopiaRate: 0.75,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.9375,
              womanMyopiaStdCount: '15',
              womanStdCount: '16'
            },
            maxHighClass: {
              classId: '1282974993612544',
              className: '3',
              effectiveStdCount: '35',
              gradeName: '五年级',
              highMyopiaRate: 0.7714,
              highMyopiaStdCount: '27',
              manEffectiveStdCount: '19',
              manHighMyopiaRate: 0.7894,
              manHighMyopiaStdCount: '15',
              manMyopiaRate: 0.8947,
              manMyopiaStdCount: '17',
              manStdCount: '19',
              myopiaRate: 0.9142,
              myopiaStdCount: '32',
              noMyopiaRate: 0.0857,
              noMyopiaStdCount: '3',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8947,
                  manMyopiaStdCount: '17',
                  myopiaRate: 0.9142,
                  myopiaStdCount: '32',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9375,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 1,
                  womanMyopiaRate: 0.1875,
                  womanMyopiaStdCount: '3'
                },
                {
                  manMyopiaRate: 0.1052,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0571,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.7894,
                  manMyopiaStdCount: '15',
                  myopiaRate: 0.7714,
                  myopiaStdCount: '27',
                  myopiaType: 3,
                  womanMyopiaRate: 0.75,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1052,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '35',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '16',
              womanHighMyopiaRate: 0.75,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.9375,
              womanMyopiaStdCount: '15',
              womanStdCount: '16'
            },
            minClass: {
              classId: '1282974993612545',
              className: '4',
              effectiveStdCount: '27',
              gradeName: '五年级',
              highMyopiaRate: 0.7037,
              highMyopiaStdCount: '19',
              manEffectiveStdCount: '8',
              manHighMyopiaRate: 0.75,
              manHighMyopiaStdCount: '6',
              manMyopiaRate: 0.875,
              manMyopiaStdCount: '7',
              manStdCount: '8',
              myopiaRate: 0.7407,
              myopiaStdCount: '20',
              noMyopiaRate: 0.2592,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.875,
                  manMyopiaStdCount: '7',
                  myopiaRate: 0.7407,
                  myopiaStdCount: '20',
                  myopiaType: 0,
                  womanMyopiaRate: 0.6842,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.125,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.037,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.75,
                  manMyopiaStdCount: '6',
                  myopiaRate: 0.7037,
                  myopiaStdCount: '19',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6842,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.125,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.2592,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.3157,
                  womanMyopiaStdCount: '6'
                }
              ],
              stdCount: '27',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '19',
              womanHighMyopiaRate: 0.6842,
              womanHighMyopiaStdCount: '13',
              womanMyopiaRate: 0.6842,
              womanMyopiaStdCount: '13',
              womanStdCount: '19'
            },
            minHighClass: {
              classId: '1282974993612546',
              className: '5',
              effectiveStdCount: '35',
              gradeName: '五年级',
              highMyopiaRate: 0.6285,
              highMyopiaStdCount: '22',
              manEffectiveStdCount: '18',
              manHighMyopiaRate: 0.6111,
              manHighMyopiaStdCount: '11',
              manMyopiaRate: 0.8333,
              manMyopiaStdCount: '15',
              manStdCount: '18',
              myopiaRate: 0.7714,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2285,
              noMyopiaStdCount: '8',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8333,
                  manMyopiaStdCount: '15',
                  myopiaRate: 0.7714,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7058,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0571,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0588,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.6111,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.6285,
                  myopiaStdCount: '22',
                  myopiaType: 3,
                  womanMyopiaRate: 0.647,
                  womanMyopiaStdCount: '11'
                },
                {
                  manMyopiaRate: 0.1666,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2285,
                  myopiaStdCount: '8',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2941,
                  womanMyopiaStdCount: '5'
                }
              ],
              stdCount: '35',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '17',
              womanHighMyopiaRate: 0.647,
              womanHighMyopiaStdCount: '11',
              womanMyopiaRate: 0.7058,
              womanMyopiaStdCount: '12',
              womanStdCount: '17'
            },
            myopiaRate: 0.8125,
            myopiaStdCount: '130',
            noMyopiaStdCount: '30',
            noMyopiaStdRate: null,
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8266,
                manMyopiaStdCount: '62',
                myopiaRate: 0.8125,
                myopiaStdCount: '130',
                myopiaType: 0,
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '68'
              },
              {
                manMyopiaRate: 0.08,
                manMyopiaStdCount: '6',
                myopiaRate: 0.0625,
                myopiaStdCount: '10',
                myopiaType: 1,
                womanMyopiaRate: 0.047,
                womanMyopiaStdCount: '4'
              },
              {
                manMyopiaRate: 0.0933,
                manMyopiaStdCount: '7',
                myopiaRate: 0.0562,
                myopiaStdCount: '9',
                myopiaType: 2,
                womanMyopiaRate: 0.0235,
                womanMyopiaStdCount: '2'
              },
              {
                manMyopiaRate: 0.6533,
                manMyopiaStdCount: '49',
                myopiaRate: 0.6937,
                myopiaStdCount: '111',
                myopiaType: 3,
                womanMyopiaRate: 0.7294,
                womanMyopiaStdCount: '62'
              },
              {
                manMyopiaRate: 0.1733,
                manMyopiaStdCount: '13',
                myopiaRate: 0.1875,
                myopiaStdCount: '30',
                myopiaType: 4,
                womanMyopiaRate: 0.2,
                womanMyopiaStdCount: '17'
              }
            ],
            stdCount: '160',
            studyYear: '2018',
            womanEffectiveStdCount: '85',
            womanHighMyopiaRate: 0.7294,
            womanHighMyopiaStdCount: '62',
            womanMyopiaRate: 0.8,
            womanMyopiaStdCount: '68',
            womanStdCount: '85'
          },
          {
            classMyopiaInfoVOS: [
              {
                classId: '1282974993612547',
                className: '1',
                effectiveStdCount: '37',
                gradeName: '六年级',
                highMyopiaRate: 0.7297,
                highMyopiaStdCount: '27',
                manEffectiveStdCount: '16',
                manHighMyopiaRate: 0.5625,
                manHighMyopiaStdCount: '9',
                manMyopiaRate: 0.75,
                manMyopiaStdCount: '12',
                manStdCount: '16',
                myopiaRate: 0.8108,
                myopiaStdCount: '30',
                noMyopiaRate: 0.1891,
                noMyopiaStdCount: '7',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.75,
                    manMyopiaStdCount: '12',
                    myopiaRate: 0.8108,
                    myopiaStdCount: '30',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8571,
                    womanMyopiaStdCount: '18'
                  },
                  {
                    manMyopiaRate: 0.0625,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.027,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.125,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.054,
                    myopiaStdCount: '2',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.5625,
                    manMyopiaStdCount: '9',
                    myopiaRate: 0.7297,
                    myopiaStdCount: '27',
                    myopiaType: 3,
                    womanMyopiaRate: 0.8571,
                    womanMyopiaStdCount: '18'
                  },
                  {
                    manMyopiaRate: 0.25,
                    manMyopiaStdCount: '4',
                    myopiaRate: 0.1891,
                    myopiaStdCount: '7',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1428,
                    womanMyopiaStdCount: '3'
                  }
                ],
                stdCount: '37',
                studentMyopiaInfos: null,
                studyYear: '2017',
                womanEffectiveStdCount: '21',
                womanHighMyopiaRate: 0.8571,
                womanHighMyopiaStdCount: '18',
                womanMyopiaRate: 0.8571,
                womanMyopiaStdCount: '18',
                womanStdCount: '21'
              },
              {
                classId: '1282974993612548',
                className: '2',
                effectiveStdCount: '30',
                gradeName: '六年级',
                highMyopiaRate: 0.7,
                highMyopiaStdCount: '21',
                manEffectiveStdCount: '11',
                manHighMyopiaRate: 0.7272,
                manHighMyopiaStdCount: '8',
                manMyopiaRate: 0.8181,
                manMyopiaStdCount: '9',
                manStdCount: '11',
                myopiaRate: 0.8,
                myopiaStdCount: '24',
                noMyopiaRate: 0.2,
                noMyopiaStdCount: '6',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8181,
                    manMyopiaStdCount: '9',
                    myopiaRate: 0.8,
                    myopiaStdCount: '24',
                    myopiaType: 0,
                    womanMyopiaRate: 0.7894,
                    womanMyopiaStdCount: '15'
                  },
                  {
                    manMyopiaRate: 0.0909,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0333,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0666,
                    myopiaStdCount: '2',
                    myopiaType: 2,
                    womanMyopiaRate: 0.1052,
                    womanMyopiaStdCount: '2'
                  },
                  {
                    manMyopiaRate: 0.7272,
                    manMyopiaStdCount: '8',
                    myopiaRate: 0.7,
                    myopiaStdCount: '21',
                    myopiaType: 3,
                    womanMyopiaRate: 0.6842,
                    womanMyopiaStdCount: '13'
                  },
                  {
                    manMyopiaRate: 0.1818,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.2,
                    myopiaStdCount: '6',
                    myopiaType: 4,
                    womanMyopiaRate: 0.2105,
                    womanMyopiaStdCount: '4'
                  }
                ],
                stdCount: '30',
                studentMyopiaInfos: null,
                studyYear: '2017',
                womanEffectiveStdCount: '19',
                womanHighMyopiaRate: 0.6842,
                womanHighMyopiaStdCount: '13',
                womanMyopiaRate: 0.7894,
                womanMyopiaStdCount: '15',
                womanStdCount: '19'
              },
              {
                classId: '1282974993620736',
                className: '3',
                effectiveStdCount: '33',
                gradeName: '六年级',
                highMyopiaRate: 0.6969,
                highMyopiaStdCount: '23',
                manEffectiveStdCount: '14',
                manHighMyopiaRate: 0.5714,
                manHighMyopiaStdCount: '8',
                manMyopiaRate: 0.6428,
                manMyopiaStdCount: '9',
                manStdCount: '14',
                myopiaRate: 0.8181,
                myopiaStdCount: '27',
                noMyopiaRate: 0.1818,
                noMyopiaStdCount: '6',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.6428,
                    manMyopiaStdCount: '9',
                    myopiaRate: 0.8181,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.9473,
                    womanMyopiaStdCount: '18'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0303,
                    myopiaStdCount: '1',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0526,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.0714,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.0909,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.1052,
                    womanMyopiaStdCount: '2'
                  },
                  {
                    manMyopiaRate: 0.5714,
                    manMyopiaStdCount: '8',
                    myopiaRate: 0.6969,
                    myopiaStdCount: '23',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7894,
                    womanMyopiaStdCount: '15'
                  },
                  {
                    manMyopiaRate: 0.3571,
                    manMyopiaStdCount: '5',
                    myopiaRate: 0.1818,
                    myopiaStdCount: '6',
                    myopiaType: 4,
                    womanMyopiaRate: 0.0526,
                    womanMyopiaStdCount: '1'
                  }
                ],
                stdCount: '33',
                studentMyopiaInfos: null,
                studyYear: '2017',
                womanEffectiveStdCount: '19',
                womanHighMyopiaRate: 0.7894,
                womanHighMyopiaStdCount: '15',
                womanMyopiaRate: 0.9473,
                womanMyopiaStdCount: '18',
                womanStdCount: '19'
              },
              {
                classId: '1282974993620737',
                className: '4',
                effectiveStdCount: '27',
                gradeName: '六年级',
                highMyopiaRate: 0.7407,
                highMyopiaStdCount: '20',
                manEffectiveStdCount: '12',
                manHighMyopiaRate: 0.6666,
                manHighMyopiaStdCount: '8',
                manMyopiaRate: 0.75,
                manMyopiaStdCount: '9',
                manStdCount: '12',
                myopiaRate: 0.8518,
                myopiaStdCount: '23',
                noMyopiaRate: 0.1481,
                noMyopiaStdCount: '4',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.75,
                    manMyopiaStdCount: '9',
                    myopiaRate: 0.8518,
                    myopiaStdCount: '23',
                    myopiaType: 0,
                    womanMyopiaRate: 0.9333,
                    womanMyopiaStdCount: '14'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0,
                    myopiaStdCount: '0',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.0833,
                    manMyopiaStdCount: '1',
                    myopiaRate: 0.1111,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.1333,
                    womanMyopiaStdCount: '2'
                  },
                  {
                    manMyopiaRate: 0.6666,
                    manMyopiaStdCount: '8',
                    myopiaRate: 0.7407,
                    myopiaStdCount: '20',
                    myopiaType: 3,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.25,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.1481,
                    myopiaStdCount: '4',
                    myopiaType: 4,
                    womanMyopiaRate: 0.0666,
                    womanMyopiaStdCount: '1'
                  }
                ],
                stdCount: '27',
                studentMyopiaInfos: null,
                studyYear: '2017',
                womanEffectiveStdCount: '15',
                womanHighMyopiaRate: 0.8,
                womanHighMyopiaStdCount: '12',
                womanMyopiaRate: 0.9333,
                womanMyopiaStdCount: '14',
                womanStdCount: '15'
              },
              {
                classId: '1282974993620738',
                className: '5',
                effectiveStdCount: '32',
                gradeName: '六年级',
                highMyopiaRate: 0.75,
                highMyopiaStdCount: '24',
                manEffectiveStdCount: '17',
                manHighMyopiaRate: 0.7058,
                manHighMyopiaStdCount: '12',
                manMyopiaRate: 0.8235,
                manMyopiaStdCount: '14',
                manStdCount: '17',
                myopiaRate: 0.8437,
                myopiaStdCount: '27',
                noMyopiaRate: 0.1562,
                noMyopiaStdCount: '5',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.8235,
                    manMyopiaStdCount: '14',
                    myopiaRate: 0.8437,
                    myopiaStdCount: '27',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8666,
                    womanMyopiaStdCount: '13'
                  },
                  {
                    manMyopiaRate: 0.0,
                    manMyopiaStdCount: '0',
                    myopiaRate: 0.0,
                    myopiaStdCount: '0',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0,
                    womanMyopiaStdCount: '0'
                  },
                  {
                    manMyopiaRate: 0.1176,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0937,
                    myopiaStdCount: '3',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0666,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.7058,
                    manMyopiaStdCount: '12',
                    myopiaRate: 0.75,
                    myopiaStdCount: '24',
                    myopiaType: 3,
                    womanMyopiaRate: 0.8,
                    womanMyopiaStdCount: '12'
                  },
                  {
                    manMyopiaRate: 0.1764,
                    manMyopiaStdCount: '3',
                    myopiaRate: 0.1562,
                    myopiaStdCount: '5',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1333,
                    womanMyopiaStdCount: '2'
                  }
                ],
                stdCount: '32',
                studentMyopiaInfos: null,
                studyYear: '2017',
                womanEffectiveStdCount: '15',
                womanHighMyopiaRate: 0.8,
                womanHighMyopiaStdCount: '12',
                womanMyopiaRate: 0.8666,
                womanMyopiaStdCount: '13',
                womanStdCount: '15'
              },
              {
                classId: null,
                className: '合计',
                effectiveStdCount: '159',
                gradeName: '六年级',
                highMyopiaRate: 0.7232,
                highMyopiaStdCount: '115',
                manEffectiveStdCount: '70',
                manHighMyopiaRate: 0.6428,
                manHighMyopiaStdCount: '45',
                manMyopiaRate: 0.7571,
                manMyopiaStdCount: '53',
                manStdCount: '70',
                myopiaRate: 0.8238,
                myopiaStdCount: '131',
                noMyopiaRate: null,
                noMyopiaStdCount: '28',
                prefixName: '小学',
                schoolName: '西工大锦园实验小学',
                sexMyopiaTypeInfo: [
                  {
                    manMyopiaRate: 0.7571,
                    manMyopiaStdCount: '53',
                    myopiaRate: 0.8238,
                    myopiaStdCount: '131',
                    myopiaType: 0,
                    womanMyopiaRate: 0.8764,
                    womanMyopiaStdCount: '78'
                  },
                  {
                    manMyopiaRate: 0.0285,
                    manMyopiaStdCount: '2',
                    myopiaRate: 0.0188,
                    myopiaStdCount: '3',
                    myopiaType: 1,
                    womanMyopiaRate: 0.0112,
                    womanMyopiaStdCount: '1'
                  },
                  {
                    manMyopiaRate: 0.0857,
                    manMyopiaStdCount: '6',
                    myopiaRate: 0.0817,
                    myopiaStdCount: '13',
                    myopiaType: 2,
                    womanMyopiaRate: 0.0786,
                    womanMyopiaStdCount: '7'
                  },
                  {
                    manMyopiaRate: 0.6428,
                    manMyopiaStdCount: '45',
                    myopiaRate: 0.7232,
                    myopiaStdCount: '115',
                    myopiaType: 3,
                    womanMyopiaRate: 0.7865,
                    womanMyopiaStdCount: '70'
                  },
                  {
                    manMyopiaRate: 0.2428,
                    manMyopiaStdCount: '17',
                    myopiaRate: 0.1761,
                    myopiaStdCount: '28',
                    myopiaType: 4,
                    womanMyopiaRate: 0.1235,
                    womanMyopiaStdCount: '11'
                  }
                ],
                stdCount: '159',
                studentMyopiaInfos: null,
                studyYear: '2017',
                womanEffectiveStdCount: '89',
                womanHighMyopiaRate: 0.7865,
                womanHighMyopiaStdCount: '70',
                womanMyopiaRate: 0.8764,
                womanMyopiaStdCount: '78',
                womanStdCount: '89'
              }
            ],
            effectiveStdCount: '159',
            gradeId: '921830381248276',
            gradeName: '六年级',
            highMyopiaRate: 0.7232,
            highMyopiaStdCount: '115',
            manEffectiveStdCount: '70',
            manHighMyopiaRate: 0.6428,
            manHighMyopiaStdCount: '45',
            manMyopiaRate: 0.7571,
            manMyopiaStdCount: '53',
            manStdCount: '70',
            maxClass: {
              classId: '1282974993620737',
              className: '4',
              effectiveStdCount: '27',
              gradeName: '六年级',
              highMyopiaRate: 0.7407,
              highMyopiaStdCount: '20',
              manEffectiveStdCount: '12',
              manHighMyopiaRate: 0.6666,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.75,
              manMyopiaStdCount: '9',
              manStdCount: '12',
              myopiaRate: 0.8518,
              myopiaStdCount: '23',
              noMyopiaRate: 0.1481,
              noMyopiaStdCount: '4',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.75,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.8518,
                  myopiaStdCount: '23',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9333,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0833,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.1111,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.1333,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.6666,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.7407,
                  myopiaStdCount: '20',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.25,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.1481,
                  myopiaStdCount: '4',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0666,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '27',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.8,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.9333,
              womanMyopiaStdCount: '14',
              womanStdCount: '15'
            },
            maxHighClass: {
              classId: '1282974993620738',
              className: '5',
              effectiveStdCount: '32',
              gradeName: '六年级',
              highMyopiaRate: 0.75,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.7058,
              manHighMyopiaStdCount: '12',
              manMyopiaRate: 0.8235,
              manMyopiaStdCount: '14',
              manStdCount: '17',
              myopiaRate: 0.8437,
              myopiaStdCount: '27',
              noMyopiaRate: 0.1562,
              noMyopiaStdCount: '5',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8235,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.8437,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8666,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1176,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0937,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0666,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7058,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.75,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1764,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.1562,
                  myopiaStdCount: '5',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1333,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '32',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.8,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.8666,
              womanMyopiaStdCount: '13',
              womanStdCount: '15'
            },
            minClass: {
              classId: '1282974993612548',
              className: '2',
              effectiveStdCount: '30',
              gradeName: '六年级',
              highMyopiaRate: 0.7,
              highMyopiaStdCount: '21',
              manEffectiveStdCount: '11',
              manHighMyopiaRate: 0.7272,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.8181,
              manMyopiaStdCount: '9',
              manStdCount: '11',
              myopiaRate: 0.8,
              myopiaStdCount: '24',
              noMyopiaRate: 0.2,
              noMyopiaStdCount: '6',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8181,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.8,
                  myopiaStdCount: '24',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7894,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.0909,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0333,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0666,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.1052,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.7272,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.7,
                  myopiaStdCount: '21',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6842,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.1818,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.2,
                  myopiaStdCount: '6',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2105,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '30',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '19',
              womanHighMyopiaRate: 0.6842,
              womanHighMyopiaStdCount: '13',
              womanMyopiaRate: 0.7894,
              womanMyopiaStdCount: '15',
              womanStdCount: '19'
            },
            minHighClass: {
              classId: '1282974993620736',
              className: '3',
              effectiveStdCount: '33',
              gradeName: '六年级',
              highMyopiaRate: 0.6969,
              highMyopiaStdCount: '23',
              manEffectiveStdCount: '14',
              manHighMyopiaRate: 0.5714,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.6428,
              manMyopiaStdCount: '9',
              manStdCount: '14',
              myopiaRate: 0.8181,
              myopiaStdCount: '27',
              noMyopiaRate: 0.1818,
              noMyopiaStdCount: '6',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.6428,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.8181,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9473,
                  womanMyopiaStdCount: '18'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0303,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0526,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.0714,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0909,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.1052,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.5714,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.6969,
                  myopiaStdCount: '23',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7894,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.3571,
                  manMyopiaStdCount: '5',
                  myopiaRate: 0.1818,
                  myopiaStdCount: '6',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0526,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '19',
              womanHighMyopiaRate: 0.7894,
              womanHighMyopiaStdCount: '15',
              womanMyopiaRate: 0.9473,
              womanMyopiaStdCount: '18',
              womanStdCount: '19'
            },
            myopiaRate: 0.8238,
            myopiaStdCount: '131',
            noMyopiaStdCount: '28',
            noMyopiaStdRate: null,
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7571,
                manMyopiaStdCount: '53',
                myopiaRate: 0.8238,
                myopiaStdCount: '131',
                myopiaType: 0,
                womanMyopiaRate: 0.8764,
                womanMyopiaStdCount: '78'
              },
              {
                manMyopiaRate: 0.0285,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0188,
                myopiaStdCount: '3',
                myopiaType: 1,
                womanMyopiaRate: 0.0112,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.0857,
                manMyopiaStdCount: '6',
                myopiaRate: 0.0817,
                myopiaStdCount: '13',
                myopiaType: 2,
                womanMyopiaRate: 0.0786,
                womanMyopiaStdCount: '7'
              },
              {
                manMyopiaRate: 0.6428,
                manMyopiaStdCount: '45',
                myopiaRate: 0.7232,
                myopiaStdCount: '115',
                myopiaType: 3,
                womanMyopiaRate: 0.7865,
                womanMyopiaStdCount: '70'
              },
              {
                manMyopiaRate: 0.2428,
                manMyopiaStdCount: '17',
                myopiaRate: 0.1761,
                myopiaStdCount: '28',
                myopiaType: 4,
                womanMyopiaRate: 0.1235,
                womanMyopiaStdCount: '11'
              }
            ],
            stdCount: '159',
            studyYear: '2017',
            womanEffectiveStdCount: '89',
            womanHighMyopiaRate: 0.7865,
            womanHighMyopiaStdCount: '70',
            womanMyopiaRate: 0.8764,
            womanMyopiaStdCount: '78',
            womanStdCount: '89'
          },
          {
            classMyopiaInfoVOS: null,
            effectiveStdCount: '987',
            gradeId: null,
            gradeName: '合计',
            highMyopiaRate: 0.6828,
            highMyopiaStdCount: '674',
            manEffectiveStdCount: '482',
            manHighMyopiaRate: 0.6493,
            manHighMyopiaStdCount: '313',
            manMyopiaRate: 0.7863,
            manMyopiaStdCount: '379',
            manStdCount: '482',
            maxClass: null,
            maxHighClass: null,
            minClass: null,
            minHighClass: null,
            myopiaRate: 0.7983,
            myopiaStdCount: '788',
            noMyopiaStdCount: '199',
            noMyopiaStdRate: null,
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7863,
                manMyopiaStdCount: '379',
                myopiaRate: 0.7983,
                myopiaStdCount: '788',
                myopiaType: 0,
                womanMyopiaRate: 0.8099,
                womanMyopiaStdCount: '409'
              },
              {
                manMyopiaRate: 0.0539,
                manMyopiaStdCount: '26',
                myopiaRate: 0.0476,
                myopiaStdCount: '47',
                myopiaType: 1,
                womanMyopiaRate: 0.0415,
                womanMyopiaStdCount: '21'
              },
              {
                manMyopiaRate: 0.0829,
                manMyopiaStdCount: '40',
                myopiaRate: 0.0678,
                myopiaStdCount: '67',
                myopiaType: 2,
                womanMyopiaRate: 0.0534,
                womanMyopiaStdCount: '27'
              },
              {
                manMyopiaRate: 0.6493,
                manMyopiaStdCount: '313',
                myopiaRate: 0.6828,
                myopiaStdCount: '674',
                myopiaType: 3,
                womanMyopiaRate: 0.7148,
                womanMyopiaStdCount: '361'
              },
              {
                manMyopiaRate: 0.2136,
                manMyopiaStdCount: '103',
                myopiaRate: 0.2016,
                myopiaStdCount: '199',
                myopiaType: 4,
                womanMyopiaRate: 0.19,
                womanMyopiaStdCount: '96'
              }
            ],
            stdCount: '987',
            studyYear: null,
            womanEffectiveStdCount: '505',
            womanHighMyopiaRate: 0.7148,
            womanHighMyopiaStdCount: '361',
            womanMyopiaRate: 0.8099,
            womanMyopiaStdCount: '409',
            womanStdCount: '505'
          }
        ],
        highMyopiaRate: 0.6828,
        highMyopiaStdCount: '674',
        manHighMyopiaRate: 0.6493,
        manHighMyopiaStdCount: '313',
        manMyopiaRate: 0.7863,
        manMyopiaStdCount: '379',
        myopiaRate: 0.7983,
        myopiaStdCount: '788',
        noMyopiaStdCount: '199',
        noMyopiaStdRate: null,
        prefixName: '小学',
        schoolName: '西工大锦园实验小学',
        sexMyopiaTypeInfo: [
          {
            manMyopiaRate: 0.7863,
            manMyopiaStdCount: '379',
            myopiaRate: 0.7983,
            myopiaStdCount: '788',
            myopiaType: 0,
            womanMyopiaRate: 0.8099,
            womanMyopiaStdCount: '409'
          },
          {
            manMyopiaRate: 0.0539,
            manMyopiaStdCount: '26',
            myopiaRate: 0.0476,
            myopiaStdCount: '47',
            myopiaType: 1,
            womanMyopiaRate: 0.0415,
            womanMyopiaStdCount: '21'
          },
          {
            manMyopiaRate: 0.0829,
            manMyopiaStdCount: '40',
            myopiaRate: 0.0678,
            myopiaStdCount: '67',
            myopiaType: 2,
            womanMyopiaRate: 0.0534,
            womanMyopiaStdCount: '27'
          },
          {
            manMyopiaRate: 0.6493,
            manMyopiaStdCount: '313',
            myopiaRate: 0.6828,
            myopiaStdCount: '674',
            myopiaType: 3,
            womanMyopiaRate: 0.7148,
            womanMyopiaStdCount: '361'
          },
          {
            manMyopiaRate: 0.2136,
            manMyopiaStdCount: '103',
            myopiaRate: 0.2016,
            myopiaStdCount: '199',
            myopiaType: 4,
            womanMyopiaRate: 0.19,
            womanMyopiaStdCount: '96'
          }
        ],
        stdCount: '987',
        studyYear: null,
        womanHighMyopiaRate: 0.7148,
        womanHighMyopiaStdCount: '361',
        womanMyopiaRate: 0.8099,
        womanMyopiaStdCount: '409'
      })
  },
  {
    url: '/basic-api/eyesight/report/school/getMyopiaCorrectInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        contactLensStdCount: '266',
        correctMyopiaRate: 0.0508,
        correctMyopiaStdCount: '61',
        frameGlassesStdCount: '298',
        gradeMyopiaCorrectInfos: [
          {
            classMyopiaCorrectInfos: [
              {
                classId: '1282974993579777',
                className: '5',
                contactLensStdCount: '6',
                correctMyopiaRate: 0.027,
                correctMyopiaStdCount: '1',
                frameGlassesStdCount: '9',
                gradeId: '921830381248271',
                gradeName: '一年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '11',
                manUdMyopiaRate: 0.5454,
                manUdMyopiaStdCount: '6',
                manUnMyopiaRate: 0.4545,
                manUnMyopiaStdCount: '5',
                myopiaStdCount: '37',
                okLensStdCount: '8',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2022',
                udMyopiaRate: 0.5945,
                udMyopiaStdCount: '22',
                unMyopiaRate: 0.3783,
                unMyopiaStdCount: '14',
                womanCorrectMyopiaRate: 0.0625,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '16',
                womanUdMyopiaRate: 0.625,
                womanUdMyopiaStdCount: '10',
                womanUnMyopiaRate: 0.3125,
                womanUnMyopiaStdCount: '5'
              },
              {
                classId: '1282974993571584',
                className: '1',
                contactLensStdCount: '10',
                correctMyopiaRate: 0.1,
                correctMyopiaStdCount: '4',
                frameGlassesStdCount: '10',
                gradeId: '921830381248271',
                gradeName: '一年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '6',
                manUdMyopiaRate: 1.0,
                manUdMyopiaStdCount: '6',
                manUnMyopiaRate: 0.0,
                manUnMyopiaStdCount: '0',
                myopiaStdCount: '40',
                okLensStdCount: '12',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2022',
                udMyopiaRate: 0.7,
                udMyopiaStdCount: '28',
                unMyopiaRate: 0.2,
                unMyopiaStdCount: '8',
                womanCorrectMyopiaRate: 0.0625,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '16',
                womanUdMyopiaRate: 0.75,
                womanUdMyopiaStdCount: '12',
                womanUnMyopiaRate: 0.1875,
                womanUnMyopiaStdCount: '3'
              },
              {
                classId: '1282974993571585',
                className: '2',
                contactLensStdCount: '8',
                correctMyopiaRate: 0.0731,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '14',
                gradeId: '921830381248271',
                gradeName: '一年级',
                manCorrectMyopiaRate: 0.0666,
                manCorrectMyopiaStdCount: '1',
                manMyopiaStdCount: '15',
                manUdMyopiaRate: 0.6,
                manUdMyopiaStdCount: '9',
                manUnMyopiaRate: 0.3333,
                manUnMyopiaStdCount: '5',
                myopiaStdCount: '41',
                okLensStdCount: '9',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2022',
                udMyopiaRate: 0.6829,
                udMyopiaStdCount: '28',
                unMyopiaRate: 0.2439,
                unMyopiaStdCount: '10',
                womanCorrectMyopiaRate: 0.1111,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '9',
                womanUdMyopiaRate: 0.6666,
                womanUdMyopiaStdCount: '6',
                womanUnMyopiaRate: 0.2222,
                womanUnMyopiaStdCount: '2'
              },
              {
                classId: '1282974993571586',
                className: '3',
                contactLensStdCount: '8',
                correctMyopiaRate: 0.093,
                correctMyopiaStdCount: '4',
                frameGlassesStdCount: '10',
                gradeId: '921830381248271',
                gradeName: '一年级',
                manCorrectMyopiaRate: 0.1176,
                manCorrectMyopiaStdCount: '2',
                manMyopiaStdCount: '17',
                manUdMyopiaRate: 0.5882,
                manUdMyopiaStdCount: '10',
                manUnMyopiaRate: 0.2941,
                manUnMyopiaStdCount: '5',
                myopiaStdCount: '43',
                okLensStdCount: '11',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2022',
                udMyopiaRate: 0.5813,
                udMyopiaStdCount: '25',
                unMyopiaRate: 0.3255,
                unMyopiaStdCount: '14',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '12',
                womanUdMyopiaRate: 0.5833,
                womanUdMyopiaStdCount: '7',
                womanUnMyopiaRate: 0.4166,
                womanUnMyopiaStdCount: '5'
              },
              {
                classId: '1282974993579776',
                className: '4',
                contactLensStdCount: '6',
                correctMyopiaRate: 0.0238,
                correctMyopiaStdCount: '1',
                frameGlassesStdCount: '7',
                gradeId: '921830381248271',
                gradeName: '一年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '16',
                manUdMyopiaRate: 0.5,
                manUdMyopiaStdCount: '8',
                manUnMyopiaRate: 0.5,
                manUnMyopiaStdCount: '8',
                myopiaStdCount: '42',
                okLensStdCount: '14',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2022',
                udMyopiaRate: 0.619,
                udMyopiaStdCount: '26',
                unMyopiaRate: 0.3571,
                unMyopiaStdCount: '15',
                womanCorrectMyopiaRate: 0.0909,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '11',
                womanUdMyopiaRate: 0.6363,
                womanUdMyopiaStdCount: '7',
                womanUnMyopiaRate: 0.2727,
                womanUnMyopiaStdCount: '3'
              },
              {
                classId: null,
                className: '合计',
                contactLensStdCount: '38',
                correctMyopiaRate: 0.064,
                correctMyopiaStdCount: '13',
                frameGlassesStdCount: '50',
                gradeId: '921830381248271',
                gradeName: '一年级',
                manCorrectMyopiaRate: 0.0461,
                manCorrectMyopiaStdCount: '3',
                manMyopiaStdCount: '65',
                manUdMyopiaRate: 0.6,
                manUdMyopiaStdCount: '39',
                manUnMyopiaRate: 0.3538,
                manUnMyopiaStdCount: '23',
                myopiaStdCount: '203',
                okLensStdCount: '54',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2022',
                udMyopiaRate: 0.6354,
                udMyopiaStdCount: '129',
                unMyopiaRate: 0.3004,
                unMyopiaStdCount: '61',
                womanCorrectMyopiaRate: 0.0625,
                womanCorrectMyopiaStdCount: '4',
                womanMyopiaStdCount: '64',
                womanUdMyopiaRate: 0.6562,
                womanUdMyopiaStdCount: '42',
                womanUnMyopiaRate: 0.2812,
                womanUnMyopiaStdCount: '18'
              }
            ],
            contactLensStdCount: '38',
            correctMyopiaRate: 0.064,
            correctMyopiaStdCount: '13',
            frameGlassesStdCount: '50',
            gradeId: '921830381248271',
            gradeName: '一年级',
            manCorrectMyopiaRate: 0.0461,
            manCorrectMyopiaStdCount: '3',
            manMyopiaStdCount: '65',
            manUdMyopiaRate: 0.6,
            manUdMyopiaStdCount: '39',
            manUnMyopiaRate: 0.3538,
            manUnMyopiaStdCount: '23',
            myopiaStdCount: '203',
            okLensStdCount: '54',
            otherRate: 0.0,
            prefix: 2,
            prefixName: '小学',
            schoolId: '1280811255480064',
            schoolName: '西工大锦园实验小学',
            studyYear: '2022',
            udMyopiaRate: 0.6354,
            udMyopiaStdCount: '129',
            unMyopiaRate: 0.3004,
            unMyopiaStdCount: '61',
            womanCorrectMyopiaRate: 0.0625,
            womanCorrectMyopiaStdCount: '4',
            womanMyopiaStdCount: '64',
            womanUdMyopiaRate: 0.6562,
            womanUdMyopiaStdCount: '42',
            womanUnMyopiaRate: 0.2812,
            womanUnMyopiaStdCount: '18'
          },
          {
            classMyopiaCorrectInfos: [
              {
                classId: '1282974993587968',
                className: '4',
                contactLensStdCount: '10',
                correctMyopiaRate: 0.0243,
                correctMyopiaStdCount: '1',
                frameGlassesStdCount: '12',
                gradeId: '921830381248272',
                gradeName: '二年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '10',
                manUdMyopiaRate: 0.5,
                manUdMyopiaStdCount: '5',
                manUnMyopiaRate: 0.5,
                manUnMyopiaStdCount: '5',
                myopiaStdCount: '41',
                okLensStdCount: '7',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2021',
                udMyopiaRate: 0.6829,
                udMyopiaStdCount: '28',
                unMyopiaRate: 0.2926,
                unMyopiaStdCount: '12',
                womanCorrectMyopiaRate: 0.0625,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '16',
                womanUdMyopiaRate: 0.6875,
                womanUdMyopiaStdCount: '11',
                womanUnMyopiaRate: 0.25,
                womanUnMyopiaStdCount: '4'
              },
              {
                classId: '1282974993579779',
                className: '2',
                contactLensStdCount: '10',
                correctMyopiaRate: 0.0697,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '14',
                gradeId: '921830381248272',
                gradeName: '二年级',
                manCorrectMyopiaRate: 0.0769,
                manCorrectMyopiaStdCount: '1',
                manMyopiaStdCount: '13',
                manUdMyopiaRate: 0.6923,
                manUdMyopiaStdCount: '9',
                manUnMyopiaRate: 0.2307,
                manUnMyopiaStdCount: '3',
                myopiaStdCount: '43',
                okLensStdCount: '12',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2021',
                udMyopiaRate: 0.7674,
                udMyopiaStdCount: '33',
                unMyopiaRate: 0.1627,
                unMyopiaStdCount: '7',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '17',
                womanUdMyopiaRate: 0.8823,
                womanUdMyopiaStdCount: '15',
                womanUnMyopiaRate: 0.1176,
                womanUnMyopiaStdCount: '2'
              },
              {
                classId: '1282974993579780',
                className: '3',
                contactLensStdCount: '7',
                correctMyopiaRate: 0.0731,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '14',
                gradeId: '921830381248272',
                gradeName: '二年级',
                manCorrectMyopiaRate: 0.125,
                manCorrectMyopiaStdCount: '2',
                manMyopiaStdCount: '16',
                manUdMyopiaRate: 0.5,
                manUdMyopiaStdCount: '8',
                manUnMyopiaRate: 0.375,
                manUnMyopiaStdCount: '6',
                myopiaStdCount: '41',
                okLensStdCount: '9',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2021',
                udMyopiaRate: 0.6585,
                udMyopiaStdCount: '27',
                unMyopiaRate: 0.2682,
                unMyopiaStdCount: '11',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '9',
                womanUdMyopiaRate: 0.7777,
                womanUdMyopiaStdCount: '7',
                womanUnMyopiaRate: 0.2222,
                womanUnMyopiaStdCount: '2'
              },
              {
                classId: '1282974993579778',
                className: '1',
                contactLensStdCount: '5',
                correctMyopiaRate: 0.027,
                correctMyopiaStdCount: '1',
                frameGlassesStdCount: '11',
                gradeId: '921830381248272',
                gradeName: '二年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '11',
                manUdMyopiaRate: 0.8181,
                manUdMyopiaStdCount: '9',
                manUnMyopiaRate: 0.1818,
                manUnMyopiaStdCount: '2',
                myopiaStdCount: '37',
                okLensStdCount: '12',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2021',
                udMyopiaRate: 0.7297,
                udMyopiaStdCount: '27',
                unMyopiaRate: 0.2432,
                unMyopiaStdCount: '9',
                womanCorrectMyopiaRate: 0.0666,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '15',
                womanUdMyopiaRate: 0.6666,
                womanUdMyopiaStdCount: '10',
                womanUnMyopiaRate: 0.2666,
                womanUnMyopiaStdCount: '4'
              },
              {
                classId: '1282974993587969',
                className: '5',
                contactLensStdCount: '14',
                correctMyopiaRate: 0.05,
                correctMyopiaStdCount: '2',
                frameGlassesStdCount: '10',
                gradeId: '921830381248272',
                gradeName: '二年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '12',
                manUdMyopiaRate: 1.0,
                manUdMyopiaStdCount: '12',
                manUnMyopiaRate: 0.0,
                manUnMyopiaStdCount: '0',
                myopiaStdCount: '40',
                okLensStdCount: '10',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2021',
                udMyopiaRate: 0.8,
                udMyopiaStdCount: '32',
                unMyopiaRate: 0.15,
                unMyopiaStdCount: '6',
                womanCorrectMyopiaRate: 0.125,
                womanCorrectMyopiaStdCount: '2',
                womanMyopiaStdCount: '16',
                womanUdMyopiaRate: 0.6875,
                womanUdMyopiaStdCount: '11',
                womanUnMyopiaRate: 0.1875,
                womanUnMyopiaStdCount: '3'
              },
              {
                classId: null,
                className: '合计',
                contactLensStdCount: '46',
                correctMyopiaRate: 0.0495,
                correctMyopiaStdCount: '10',
                frameGlassesStdCount: '61',
                gradeId: '921830381248272',
                gradeName: '二年级',
                manCorrectMyopiaRate: 0.0483,
                manCorrectMyopiaStdCount: '3',
                manMyopiaStdCount: '62',
                manUdMyopiaRate: 0.6935,
                manUdMyopiaStdCount: '43',
                manUnMyopiaRate: 0.258,
                manUnMyopiaStdCount: '16',
                myopiaStdCount: '202',
                okLensStdCount: '50',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2021',
                udMyopiaRate: 0.7277,
                udMyopiaStdCount: '147',
                unMyopiaRate: 0.2227,
                unMyopiaStdCount: '45',
                womanCorrectMyopiaRate: 0.0547,
                womanCorrectMyopiaStdCount: '4',
                womanMyopiaStdCount: '73',
                womanUdMyopiaRate: 0.7397,
                womanUdMyopiaStdCount: '54',
                womanUnMyopiaRate: 0.2054,
                womanUnMyopiaStdCount: '15'
              }
            ],
            contactLensStdCount: '46',
            correctMyopiaRate: 0.0495,
            correctMyopiaStdCount: '10',
            frameGlassesStdCount: '61',
            gradeId: '921830381248272',
            gradeName: '二年级',
            manCorrectMyopiaRate: 0.0483,
            manCorrectMyopiaStdCount: '3',
            manMyopiaStdCount: '62',
            manUdMyopiaRate: 0.6935,
            manUdMyopiaStdCount: '43',
            manUnMyopiaRate: 0.258,
            manUnMyopiaStdCount: '16',
            myopiaStdCount: '202',
            okLensStdCount: '50',
            otherRate: 0.0,
            prefix: 2,
            prefixName: '小学',
            schoolId: '1280811255480064',
            schoolName: '西工大锦园实验小学',
            studyYear: '2021',
            udMyopiaRate: 0.7277,
            udMyopiaStdCount: '147',
            unMyopiaRate: 0.2227,
            unMyopiaStdCount: '45',
            womanCorrectMyopiaRate: 0.0547,
            womanCorrectMyopiaStdCount: '4',
            womanMyopiaStdCount: '73',
            womanUdMyopiaRate: 0.7397,
            womanUdMyopiaStdCount: '54',
            womanUnMyopiaRate: 0.2054,
            womanUnMyopiaStdCount: '15'
          },
          {
            classMyopiaCorrectInfos: [
              {
                classId: '1282974993596160',
                className: '4',
                contactLensStdCount: '7',
                correctMyopiaRate: 0.0512,
                correctMyopiaStdCount: '2',
                frameGlassesStdCount: '7',
                gradeId: '921830381248273',
                gradeName: '三年级',
                manCorrectMyopiaRate: 0.0714,
                manCorrectMyopiaStdCount: '1',
                manMyopiaStdCount: '14',
                manUdMyopiaRate: 0.5714,
                manUdMyopiaStdCount: '8',
                manUnMyopiaRate: 0.3571,
                manUnMyopiaStdCount: '5',
                myopiaStdCount: '39',
                okLensStdCount: '14',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2020',
                udMyopiaRate: 0.6666,
                udMyopiaStdCount: '26',
                unMyopiaRate: 0.282,
                unMyopiaStdCount: '11',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '13',
                womanUdMyopiaRate: 0.6153,
                womanUdMyopiaStdCount: '8',
                womanUnMyopiaRate: 0.3846,
                womanUnMyopiaStdCount: '5'
              },
              {
                classId: '1282974993587972',
                className: '3',
                contactLensStdCount: '10',
                correctMyopiaRate: 0.0,
                correctMyopiaStdCount: '0',
                frameGlassesStdCount: '9',
                gradeId: '921830381248273',
                gradeName: '三年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '16',
                manUdMyopiaRate: 0.8125,
                manUdMyopiaStdCount: '13',
                manUnMyopiaRate: 0.1875,
                manUnMyopiaStdCount: '3',
                myopiaStdCount: '37',
                okLensStdCount: '10',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2020',
                udMyopiaRate: 0.7837,
                udMyopiaStdCount: '29',
                unMyopiaRate: 0.2162,
                unMyopiaStdCount: '8',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '14',
                womanUdMyopiaRate: 0.7857,
                womanUdMyopiaStdCount: '11',
                womanUnMyopiaRate: 0.2142,
                womanUnMyopiaStdCount: '3'
              },
              {
                classId: '1282974993587970',
                className: '1',
                contactLensStdCount: '7',
                correctMyopiaRate: 0.0714,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '17',
                gradeId: '921830381248273',
                gradeName: '三年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '13',
                manUdMyopiaRate: 0.8461,
                manUdMyopiaStdCount: '11',
                manUnMyopiaRate: 0.1538,
                manUnMyopiaStdCount: '2',
                myopiaStdCount: '42',
                okLensStdCount: '9',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2020',
                udMyopiaRate: 0.7142,
                udMyopiaStdCount: '30',
                unMyopiaRate: 0.2142,
                unMyopiaStdCount: '9',
                womanCorrectMyopiaRate: 0.2142,
                womanCorrectMyopiaStdCount: '3',
                womanMyopiaStdCount: '14',
                womanUdMyopiaRate: 0.4285,
                womanUdMyopiaStdCount: '6',
                womanUnMyopiaRate: 0.3571,
                womanUnMyopiaStdCount: '5'
              },
              {
                classId: '1282974993596161',
                className: '5',
                contactLensStdCount: '7',
                correctMyopiaRate: 0.027,
                correctMyopiaStdCount: '1',
                frameGlassesStdCount: '5',
                gradeId: '921830381248273',
                gradeName: '三年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '16',
                manUdMyopiaRate: 0.4375,
                manUdMyopiaStdCount: '7',
                manUnMyopiaRate: 0.5625,
                manUnMyopiaStdCount: '9',
                myopiaStdCount: '37',
                okLensStdCount: '12',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2020',
                udMyopiaRate: 0.6216,
                udMyopiaStdCount: '23',
                unMyopiaRate: 0.3513,
                unMyopiaStdCount: '13',
                womanCorrectMyopiaRate: 0.0833,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '12',
                womanUdMyopiaRate: 0.75,
                womanUdMyopiaStdCount: '9',
                womanUnMyopiaRate: 0.1666,
                womanUnMyopiaStdCount: '2'
              },
              {
                classId: '1282974993587971',
                className: '2',
                contactLensStdCount: '6',
                correctMyopiaRate: 0.0,
                correctMyopiaStdCount: '0',
                frameGlassesStdCount: '7',
                gradeId: '921830381248273',
                gradeName: '三年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '13',
                manUdMyopiaRate: 0.7692,
                manUdMyopiaStdCount: '10',
                manUnMyopiaRate: 0.2307,
                manUnMyopiaStdCount: '3',
                myopiaStdCount: '38',
                okLensStdCount: '18',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2020',
                udMyopiaRate: 0.8157,
                udMyopiaStdCount: '31',
                unMyopiaRate: 0.1842,
                unMyopiaStdCount: '7',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '11',
                womanUdMyopiaRate: 0.909,
                womanUdMyopiaStdCount: '10',
                womanUnMyopiaRate: 0.0909,
                womanUnMyopiaStdCount: '1'
              },
              {
                classId: null,
                className: '合计',
                contactLensStdCount: '37',
                correctMyopiaRate: 0.031,
                correctMyopiaStdCount: '6',
                frameGlassesStdCount: '45',
                gradeId: '921830381248273',
                gradeName: '三年级',
                manCorrectMyopiaRate: 0.0138,
                manCorrectMyopiaStdCount: '1',
                manMyopiaStdCount: '72',
                manUdMyopiaRate: 0.6805,
                manUdMyopiaStdCount: '49',
                manUnMyopiaRate: 0.3055,
                manUnMyopiaStdCount: '22',
                myopiaStdCount: '193',
                okLensStdCount: '63',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2020',
                udMyopiaRate: 0.7202,
                udMyopiaStdCount: '139',
                unMyopiaRate: 0.2487,
                unMyopiaStdCount: '48',
                womanCorrectMyopiaRate: 0.0625,
                womanCorrectMyopiaStdCount: '4',
                womanMyopiaStdCount: '64',
                womanUdMyopiaRate: 0.6875,
                womanUdMyopiaStdCount: '44',
                womanUnMyopiaRate: 0.25,
                womanUnMyopiaStdCount: '16'
              }
            ],
            contactLensStdCount: '37',
            correctMyopiaRate: 0.031,
            correctMyopiaStdCount: '6',
            frameGlassesStdCount: '45',
            gradeId: '921830381248273',
            gradeName: '三年级',
            manCorrectMyopiaRate: 0.0138,
            manCorrectMyopiaStdCount: '1',
            manMyopiaStdCount: '72',
            manUdMyopiaRate: 0.6805,
            manUdMyopiaStdCount: '49',
            manUnMyopiaRate: 0.3055,
            manUnMyopiaStdCount: '22',
            myopiaStdCount: '193',
            okLensStdCount: '63',
            otherRate: 0.0,
            prefix: 2,
            prefixName: '小学',
            schoolId: '1280811255480064',
            schoolName: '西工大锦园实验小学',
            studyYear: '2020',
            udMyopiaRate: 0.7202,
            udMyopiaStdCount: '139',
            unMyopiaRate: 0.2487,
            unMyopiaStdCount: '48',
            womanCorrectMyopiaRate: 0.0625,
            womanCorrectMyopiaStdCount: '4',
            womanMyopiaStdCount: '64',
            womanUdMyopiaRate: 0.6875,
            womanUdMyopiaStdCount: '44',
            womanUnMyopiaRate: 0.25,
            womanUnMyopiaStdCount: '16'
          },
          {
            classMyopiaCorrectInfos: [
              {
                classId: '1282974993596163',
                className: '2',
                contactLensStdCount: '11',
                correctMyopiaRate: 0.081,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '9',
                gradeId: '921830381248274',
                gradeName: '四年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '10',
                manUdMyopiaRate: 0.8,
                manUdMyopiaStdCount: '8',
                manUnMyopiaRate: 0.2,
                manUnMyopiaStdCount: '2',
                myopiaStdCount: '37',
                okLensStdCount: '8',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2019',
                udMyopiaRate: 0.6756,
                udMyopiaStdCount: '25',
                unMyopiaRate: 0.2432,
                unMyopiaStdCount: '9',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '10',
                womanUdMyopiaRate: 0.7,
                womanUdMyopiaStdCount: '7',
                womanUnMyopiaRate: 0.3,
                womanUnMyopiaStdCount: '3'
              },
              {
                classId: '1282974993596162',
                className: '1',
                contactLensStdCount: '12',
                correctMyopiaRate: 0.0277,
                correctMyopiaStdCount: '1',
                frameGlassesStdCount: '6',
                gradeId: '921830381248274',
                gradeName: '四年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '18',
                manUdMyopiaRate: 0.8888,
                manUdMyopiaStdCount: '16',
                manUnMyopiaRate: 0.1111,
                manUnMyopiaStdCount: '2',
                myopiaStdCount: '36',
                okLensStdCount: '11',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2019',
                udMyopiaRate: 0.7777,
                udMyopiaStdCount: '28',
                unMyopiaRate: 0.1944,
                unMyopiaStdCount: '7',
                womanCorrectMyopiaRate: 0.1111,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '9',
                womanUdMyopiaRate: 0.6666,
                womanUdMyopiaStdCount: '6',
                womanUnMyopiaRate: 0.2222,
                womanUnMyopiaStdCount: '2'
              },
              {
                classId: '1282974993604352',
                className: '4',
                contactLensStdCount: '9',
                correctMyopiaRate: 0.0731,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '13',
                gradeId: '921830381248274',
                gradeName: '四年级',
                manCorrectMyopiaRate: 0.2,
                manCorrectMyopiaStdCount: '3',
                manMyopiaStdCount: '15',
                manUdMyopiaRate: 0.7333,
                manUdMyopiaStdCount: '11',
                manUnMyopiaRate: 0.0666,
                manUnMyopiaStdCount: '1',
                myopiaStdCount: '41',
                okLensStdCount: '14',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2019',
                udMyopiaRate: 0.8048,
                udMyopiaStdCount: '33',
                unMyopiaRate: 0.1219,
                unMyopiaStdCount: '5',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '12',
                womanUdMyopiaRate: 0.6666,
                womanUdMyopiaStdCount: '8',
                womanUnMyopiaRate: 0.3333,
                womanUnMyopiaStdCount: '4'
              },
              {
                classId: '1282974993596164',
                className: '3',
                contactLensStdCount: '11',
                correctMyopiaRate: 0.0454,
                correctMyopiaStdCount: '2',
                frameGlassesStdCount: '13',
                gradeId: '921830381248274',
                gradeName: '四年级',
                manCorrectMyopiaRate: 0.0714,
                manCorrectMyopiaStdCount: '1',
                manMyopiaStdCount: '14',
                manUdMyopiaRate: 0.7857,
                manUdMyopiaStdCount: '11',
                manUnMyopiaRate: 0.1428,
                manUnMyopiaStdCount: '2',
                myopiaStdCount: '44',
                okLensStdCount: '11',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2019',
                udMyopiaRate: 0.75,
                udMyopiaStdCount: '33',
                unMyopiaRate: 0.2045,
                unMyopiaStdCount: '9',
                womanCorrectMyopiaRate: 0.0833,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '12',
                womanUdMyopiaRate: 0.6666,
                womanUdMyopiaStdCount: '8',
                womanUnMyopiaRate: 0.25,
                womanUnMyopiaStdCount: '3'
              },
              {
                classId: '1282974993604353',
                className: '5',
                contactLensStdCount: '5',
                correctMyopiaRate: 0.0238,
                correctMyopiaStdCount: '1',
                frameGlassesStdCount: '12',
                gradeId: '921830381248274',
                gradeName: '四年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '8',
                manUdMyopiaRate: 0.75,
                manUdMyopiaStdCount: '6',
                manUnMyopiaRate: 0.25,
                manUnMyopiaStdCount: '2',
                myopiaStdCount: '42',
                okLensStdCount: '15',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2019',
                udMyopiaRate: 0.738,
                udMyopiaStdCount: '31',
                unMyopiaRate: 0.238,
                unMyopiaStdCount: '10',
                womanCorrectMyopiaRate: 0.0526,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '19',
                womanUdMyopiaRate: 0.7368,
                womanUdMyopiaStdCount: '14',
                womanUnMyopiaRate: 0.2105,
                womanUnMyopiaStdCount: '4'
              },
              {
                classId: null,
                className: '合计',
                contactLensStdCount: '48',
                correctMyopiaRate: 0.05,
                correctMyopiaStdCount: '10',
                frameGlassesStdCount: '53',
                gradeId: '921830381248274',
                gradeName: '四年级',
                manCorrectMyopiaRate: 0.0615,
                manCorrectMyopiaStdCount: '4',
                manMyopiaStdCount: '65',
                manUdMyopiaRate: 0.8,
                manUdMyopiaStdCount: '52',
                manUnMyopiaRate: 0.1384,
                manUnMyopiaStdCount: '9',
                myopiaStdCount: '200',
                okLensStdCount: '59',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2019',
                udMyopiaRate: 0.75,
                udMyopiaStdCount: '150',
                unMyopiaRate: 0.2,
                unMyopiaStdCount: '40',
                womanCorrectMyopiaRate: 0.0483,
                womanCorrectMyopiaStdCount: '3',
                womanMyopiaStdCount: '62',
                womanUdMyopiaRate: 0.6935,
                womanUdMyopiaStdCount: '43',
                womanUnMyopiaRate: 0.258,
                womanUnMyopiaStdCount: '16'
              }
            ],
            contactLensStdCount: '48',
            correctMyopiaRate: 0.05,
            correctMyopiaStdCount: '10',
            frameGlassesStdCount: '53',
            gradeId: '921830381248274',
            gradeName: '四年级',
            manCorrectMyopiaRate: 0.0615,
            manCorrectMyopiaStdCount: '4',
            manMyopiaStdCount: '65',
            manUdMyopiaRate: 0.8,
            manUdMyopiaStdCount: '52',
            manUnMyopiaRate: 0.1384,
            manUnMyopiaStdCount: '9',
            myopiaStdCount: '200',
            okLensStdCount: '59',
            otherRate: 0.0,
            prefix: 2,
            prefixName: '小学',
            schoolId: '1280811255480064',
            schoolName: '西工大锦园实验小学',
            studyYear: '2019',
            udMyopiaRate: 0.75,
            udMyopiaStdCount: '150',
            unMyopiaRate: 0.2,
            unMyopiaStdCount: '40',
            womanCorrectMyopiaRate: 0.0483,
            womanCorrectMyopiaStdCount: '3',
            womanMyopiaStdCount: '62',
            womanUdMyopiaRate: 0.6935,
            womanUdMyopiaStdCount: '43',
            womanUnMyopiaRate: 0.258,
            womanUnMyopiaStdCount: '16'
          },
          {
            classMyopiaCorrectInfos: [
              {
                classId: '1282974993604354',
                className: '1',
                contactLensStdCount: '9',
                correctMyopiaRate: 0.0,
                correctMyopiaStdCount: '0',
                frameGlassesStdCount: '8',
                gradeId: '921830381248275',
                gradeName: '五年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '11',
                manUdMyopiaRate: 0.8181,
                manUdMyopiaStdCount: '9',
                manUnMyopiaRate: 0.1818,
                manUnMyopiaStdCount: '2',
                myopiaStdCount: '39',
                okLensStdCount: '9',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2018',
                udMyopiaRate: 0.6666,
                udMyopiaStdCount: '26',
                unMyopiaRate: 0.3333,
                unMyopiaStdCount: '13',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '15',
                womanUdMyopiaRate: 0.4666,
                womanUdMyopiaStdCount: '7',
                womanUnMyopiaRate: 0.5333,
                womanUnMyopiaStdCount: '8'
              },
              {
                classId: '1282974993612545',
                className: '4',
                contactLensStdCount: '7',
                correctMyopiaRate: 0.0731,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '12',
                gradeId: '921830381248275',
                gradeName: '五年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '7',
                manUdMyopiaRate: 0.8571,
                manUdMyopiaStdCount: '6',
                manUnMyopiaRate: 0.1428,
                manUnMyopiaStdCount: '1',
                myopiaStdCount: '41',
                okLensStdCount: '14',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2018',
                udMyopiaRate: 0.7317,
                udMyopiaStdCount: '30',
                unMyopiaRate: 0.1951,
                unMyopiaStdCount: '8',
                womanCorrectMyopiaRate: 0.1538,
                womanCorrectMyopiaStdCount: '2',
                womanMyopiaStdCount: '13',
                womanUdMyopiaRate: 0.7692,
                womanUdMyopiaStdCount: '10',
                womanUnMyopiaRate: 0.0769,
                womanUnMyopiaStdCount: '1'
              },
              {
                classId: '1282974993604355',
                className: '2',
                contactLensStdCount: '10',
                correctMyopiaRate: 0.081,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '7',
                gradeId: '921830381248275',
                gradeName: '五年级',
                manCorrectMyopiaRate: 0.0833,
                manCorrectMyopiaStdCount: '1',
                manMyopiaStdCount: '12',
                manUdMyopiaRate: 0.6666,
                manUdMyopiaStdCount: '8',
                manUnMyopiaRate: 0.25,
                manUnMyopiaStdCount: '3',
                myopiaStdCount: '37',
                okLensStdCount: '13',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2018',
                udMyopiaRate: 0.7297,
                udMyopiaStdCount: '27',
                unMyopiaRate: 0.1891,
                unMyopiaStdCount: '7',
                womanCorrectMyopiaRate: 0.0769,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '13',
                womanUdMyopiaRate: 0.6923,
                womanUdMyopiaStdCount: '9',
                womanUnMyopiaRate: 0.2307,
                womanUnMyopiaStdCount: '3'
              },
              {
                classId: '1282974993612546',
                className: '5',
                contactLensStdCount: '8',
                correctMyopiaRate: 0.05,
                correctMyopiaStdCount: '2',
                frameGlassesStdCount: '8',
                gradeId: '921830381248275',
                gradeName: '五年级',
                manCorrectMyopiaRate: 0.0666,
                manCorrectMyopiaStdCount: '1',
                manMyopiaStdCount: '15',
                manUdMyopiaRate: 0.9333,
                manUdMyopiaStdCount: '14',
                manUnMyopiaRate: 0.0,
                manUnMyopiaStdCount: '0',
                myopiaStdCount: '40',
                okLensStdCount: '17',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2018',
                udMyopiaRate: 0.775,
                udMyopiaStdCount: '31',
                unMyopiaRate: 0.175,
                unMyopiaStdCount: '7',
                womanCorrectMyopiaRate: 0.0833,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '12',
                womanUdMyopiaRate: 0.6666,
                womanUdMyopiaStdCount: '8',
                womanUnMyopiaRate: 0.25,
                womanUnMyopiaStdCount: '3'
              },
              {
                classId: '1282974993612544',
                className: '3',
                contactLensStdCount: '14',
                correctMyopiaRate: 0.0888,
                correctMyopiaStdCount: '4',
                frameGlassesStdCount: '8',
                gradeId: '921830381248275',
                gradeName: '五年级',
                manCorrectMyopiaRate: 0.1176,
                manCorrectMyopiaStdCount: '2',
                manMyopiaStdCount: '17',
                manUdMyopiaRate: 0.647,
                manUdMyopiaStdCount: '11',
                manUnMyopiaRate: 0.2352,
                manUnMyopiaStdCount: '4',
                myopiaStdCount: '45',
                okLensStdCount: '10',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2018',
                udMyopiaRate: 0.6222,
                udMyopiaStdCount: '28',
                unMyopiaRate: 0.2888,
                unMyopiaStdCount: '13',
                womanCorrectMyopiaRate: 0.0666,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '15',
                womanUdMyopiaRate: 0.6,
                womanUdMyopiaStdCount: '9',
                womanUnMyopiaRate: 0.3333,
                womanUnMyopiaStdCount: '5'
              },
              {
                classId: null,
                className: '合计',
                contactLensStdCount: '48',
                correctMyopiaRate: 0.0594,
                correctMyopiaStdCount: '12',
                frameGlassesStdCount: '43',
                gradeId: '921830381248275',
                gradeName: '五年级',
                manCorrectMyopiaRate: 0.0645,
                manCorrectMyopiaStdCount: '4',
                manMyopiaStdCount: '62',
                manUdMyopiaRate: 0.7741,
                manUdMyopiaStdCount: '48',
                manUnMyopiaRate: 0.1612,
                manUnMyopiaStdCount: '10',
                myopiaStdCount: '202',
                okLensStdCount: '63',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2018',
                udMyopiaRate: 0.7029,
                udMyopiaStdCount: '142',
                unMyopiaRate: 0.2376,
                unMyopiaStdCount: '48',
                womanCorrectMyopiaRate: 0.0735,
                womanCorrectMyopiaStdCount: '5',
                womanMyopiaStdCount: '68',
                womanUdMyopiaRate: 0.6323,
                womanUdMyopiaStdCount: '43',
                womanUnMyopiaRate: 0.2941,
                womanUnMyopiaStdCount: '20'
              }
            ],
            contactLensStdCount: '48',
            correctMyopiaRate: 0.0594,
            correctMyopiaStdCount: '12',
            frameGlassesStdCount: '43',
            gradeId: '921830381248275',
            gradeName: '五年级',
            manCorrectMyopiaRate: 0.0645,
            manCorrectMyopiaStdCount: '4',
            manMyopiaStdCount: '62',
            manUdMyopiaRate: 0.7741,
            manUdMyopiaStdCount: '48',
            manUnMyopiaRate: 0.1612,
            manUnMyopiaStdCount: '10',
            myopiaStdCount: '202',
            okLensStdCount: '63',
            otherRate: 0.0,
            prefix: 2,
            prefixName: '小学',
            schoolId: '1280811255480064',
            schoolName: '西工大锦园实验小学',
            studyYear: '2018',
            udMyopiaRate: 0.7029,
            udMyopiaStdCount: '142',
            unMyopiaRate: 0.2376,
            unMyopiaStdCount: '48',
            womanCorrectMyopiaRate: 0.0735,
            womanCorrectMyopiaStdCount: '5',
            womanMyopiaStdCount: '68',
            womanUdMyopiaRate: 0.6323,
            womanUdMyopiaStdCount: '43',
            womanUnMyopiaRate: 0.2941,
            womanUnMyopiaStdCount: '20'
          },
          {
            classMyopiaCorrectInfos: [
              {
                classId: '1282974993612548',
                className: '2',
                contactLensStdCount: '10',
                correctMyopiaRate: 0.0769,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '9',
                gradeId: '921830381248276',
                gradeName: '六年级',
                manCorrectMyopiaRate: 0.1111,
                manCorrectMyopiaStdCount: '1',
                manMyopiaStdCount: '9',
                manUdMyopiaRate: 0.8888,
                manUdMyopiaStdCount: '8',
                manUnMyopiaRate: 0.0,
                manUnMyopiaStdCount: '0',
                myopiaStdCount: '39',
                okLensStdCount: '11',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2017',
                udMyopiaRate: 0.6923,
                udMyopiaStdCount: '27',
                unMyopiaRate: 0.2307,
                unMyopiaStdCount: '9',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '15',
                womanUdMyopiaRate: 0.6,
                womanUdMyopiaStdCount: '9',
                womanUnMyopiaRate: 0.4,
                womanUnMyopiaStdCount: '6'
              },
              {
                classId: '1282974993620738',
                className: '5',
                contactLensStdCount: '8',
                correctMyopiaRate: 0.025,
                correctMyopiaStdCount: '1',
                frameGlassesStdCount: '11',
                gradeId: '921830381248276',
                gradeName: '六年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '14',
                manUdMyopiaRate: 0.7857,
                manUdMyopiaStdCount: '11',
                manUnMyopiaRate: 0.2142,
                manUnMyopiaStdCount: '3',
                myopiaStdCount: '40',
                okLensStdCount: '16',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2017',
                udMyopiaRate: 0.85,
                udMyopiaStdCount: '34',
                unMyopiaRate: 0.125,
                unMyopiaStdCount: '5',
                womanCorrectMyopiaRate: 0.0769,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '13',
                womanUdMyopiaRate: 0.8461,
                womanUdMyopiaStdCount: '11',
                womanUnMyopiaRate: 0.0769,
                womanUnMyopiaStdCount: '1'
              },
              {
                classId: '1282974993620737',
                className: '4',
                contactLensStdCount: '7',
                correctMyopiaRate: 0.0487,
                correctMyopiaStdCount: '2',
                frameGlassesStdCount: '15',
                gradeId: '921830381248276',
                gradeName: '六年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '9',
                manUdMyopiaRate: 0.5555,
                manUdMyopiaStdCount: '5',
                manUnMyopiaRate: 0.4444,
                manUnMyopiaStdCount: '4',
                myopiaStdCount: '41',
                okLensStdCount: '6',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2017',
                udMyopiaRate: 0.6341,
                udMyopiaStdCount: '26',
                unMyopiaRate: 0.317,
                unMyopiaStdCount: '13',
                womanCorrectMyopiaRate: 0.0714,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '14',
                womanUdMyopiaRate: 0.5714,
                womanUdMyopiaStdCount: '8',
                womanUnMyopiaRate: 0.3571,
                womanUnMyopiaStdCount: '5'
              },
              {
                classId: '1282974993620736',
                className: '3',
                contactLensStdCount: '13',
                correctMyopiaRate: 0.027,
                correctMyopiaStdCount: '1',
                frameGlassesStdCount: '4',
                gradeId: '921830381248276',
                gradeName: '六年级',
                manCorrectMyopiaRate: 0.0,
                manCorrectMyopiaStdCount: '0',
                manMyopiaStdCount: '9',
                manUdMyopiaRate: 0.7777,
                manUdMyopiaStdCount: '7',
                manUnMyopiaRate: 0.2222,
                manUnMyopiaStdCount: '2',
                myopiaStdCount: '37',
                okLensStdCount: '13',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2017',
                udMyopiaRate: 0.7837,
                udMyopiaStdCount: '29',
                unMyopiaRate: 0.1891,
                unMyopiaStdCount: '7',
                womanCorrectMyopiaRate: 0.0555,
                womanCorrectMyopiaStdCount: '1',
                womanMyopiaStdCount: '18',
                womanUdMyopiaRate: 0.7777,
                womanUdMyopiaStdCount: '14',
                womanUnMyopiaRate: 0.1666,
                womanUnMyopiaStdCount: '3'
              },
              {
                classId: '1282974993612547',
                className: '1',
                contactLensStdCount: '11',
                correctMyopiaRate: 0.0714,
                correctMyopiaStdCount: '3',
                frameGlassesStdCount: '7',
                gradeId: '921830381248276',
                gradeName: '六年级',
                manCorrectMyopiaRate: 0.1666,
                manCorrectMyopiaStdCount: '2',
                manMyopiaStdCount: '12',
                manUdMyopiaRate: 0.5833,
                manUdMyopiaStdCount: '7',
                manUnMyopiaRate: 0.25,
                manUnMyopiaStdCount: '3',
                myopiaStdCount: '42',
                okLensStdCount: '15',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2017',
                udMyopiaRate: 0.7142,
                udMyopiaStdCount: '30',
                unMyopiaRate: 0.2142,
                unMyopiaStdCount: '9',
                womanCorrectMyopiaRate: 0.0,
                womanCorrectMyopiaStdCount: '0',
                womanMyopiaStdCount: '18',
                womanUdMyopiaRate: 0.8888,
                womanUdMyopiaStdCount: '16',
                womanUnMyopiaRate: 0.1111,
                womanUnMyopiaStdCount: '2'
              },
              {
                classId: null,
                className: '合计',
                contactLensStdCount: '49',
                correctMyopiaRate: 0.0502,
                correctMyopiaStdCount: '10',
                frameGlassesStdCount: '46',
                gradeId: '921830381248276',
                gradeName: '六年级',
                manCorrectMyopiaRate: 0.0566,
                manCorrectMyopiaStdCount: '3',
                manMyopiaStdCount: '53',
                manUdMyopiaRate: 0.7169,
                manUdMyopiaStdCount: '38',
                manUnMyopiaRate: 0.2264,
                manUnMyopiaStdCount: '12',
                myopiaStdCount: '199',
                okLensStdCount: '61',
                otherRate: 0.0,
                prefix: 2,
                prefixName: '小学',
                schoolId: '1280811255480064',
                schoolName: '西工大锦园实验小学',
                studentMyopiaCorrectInfos: null,
                studyYear: '2017',
                udMyopiaRate: 0.7336,
                udMyopiaStdCount: '146',
                unMyopiaRate: 0.216,
                unMyopiaStdCount: '43',
                womanCorrectMyopiaRate: 0.0384,
                womanCorrectMyopiaStdCount: '3',
                womanMyopiaStdCount: '78',
                womanUdMyopiaRate: 0.7435,
                womanUdMyopiaStdCount: '58',
                womanUnMyopiaRate: 0.2179,
                womanUnMyopiaStdCount: '17'
              }
            ],
            contactLensStdCount: '49',
            correctMyopiaRate: 0.0502,
            correctMyopiaStdCount: '10',
            frameGlassesStdCount: '46',
            gradeId: '921830381248276',
            gradeName: '六年级',
            manCorrectMyopiaRate: 0.0566,
            manCorrectMyopiaStdCount: '3',
            manMyopiaStdCount: '53',
            manUdMyopiaRate: 0.7169,
            manUdMyopiaStdCount: '38',
            manUnMyopiaRate: 0.2264,
            manUnMyopiaStdCount: '12',
            myopiaStdCount: '199',
            okLensStdCount: '61',
            otherRate: 0.0,
            prefix: 2,
            prefixName: '小学',
            schoolId: '1280811255480064',
            schoolName: '西工大锦园实验小学',
            studyYear: '2017',
            udMyopiaRate: 0.7336,
            udMyopiaStdCount: '146',
            unMyopiaRate: 0.216,
            unMyopiaStdCount: '43',
            womanCorrectMyopiaRate: 0.0384,
            womanCorrectMyopiaStdCount: '3',
            womanMyopiaStdCount: '78',
            womanUdMyopiaRate: 0.7435,
            womanUdMyopiaStdCount: '58',
            womanUnMyopiaRate: 0.2179,
            womanUnMyopiaStdCount: '17'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '266',
            correctMyopiaRate: 0.0508,
            correctMyopiaStdCount: '61',
            frameGlassesStdCount: '298',
            gradeId: null,
            gradeName: '合计',
            manCorrectMyopiaRate: 0.0474,
            manCorrectMyopiaStdCount: '18',
            manMyopiaStdCount: '379',
            manUdMyopiaRate: 0.7097,
            manUdMyopiaStdCount: '269',
            manUnMyopiaRate: 0.2427,
            manUnMyopiaStdCount: '92',
            myopiaStdCount: '1199',
            okLensStdCount: '350',
            otherRate: 0.0,
            prefix: 2,
            prefixName: '小学',
            schoolId: '1280811255480064',
            schoolName: '西工大锦园实验小学',
            studyYear: null,
            udMyopiaRate: 0.7114,
            udMyopiaStdCount: '853',
            unMyopiaRate: 0.2376,
            unMyopiaStdCount: '285',
            womanCorrectMyopiaRate: 0.0562,
            womanCorrectMyopiaStdCount: '23',
            womanMyopiaStdCount: '409',
            womanUdMyopiaRate: 0.6943,
            womanUdMyopiaStdCount: '284',
            womanUnMyopiaRate: 0.2493,
            womanUnMyopiaStdCount: '102'
          }
        ],
        manCorrectMyopiaRate: 0.0474,
        manCorrectMyopiaStdCount: '18',
        manMyopiaStdCount: '379',
        manUdMyopiaRate: 0.7097,
        manUdMyopiaStdCount: '269',
        manUnMyopiaRate: 0.2427,
        manUnMyopiaStdCount: '92',
        myopiaStdCount: '1199',
        okLensStdCount: '350',
        otherRate: 0.0,
        prefix: 2,
        prefixName: '小学',
        schoolId: '1280811255480064',
        schoolName: '西工大锦园实验小学',
        studyYear: null,
        udMyopiaRate: 0.7114,
        udMyopiaStdCount: '853',
        unMyopiaRate: 0.2376,
        unMyopiaStdCount: '285',
        womanCorrectMyopiaRate: 0.0562,
        womanCorrectMyopiaStdCount: '23',
        womanMyopiaStdCount: '409',
        womanUdMyopiaRate: 0.6943,
        womanUdMyopiaStdCount: '284',
        womanUnMyopiaRate: 0.2493,
        womanUnMyopiaStdCount: '102'
      })
  },
  {
    url: '/basic-api/eyesight/report/school/getVisionDistribute',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        dataList: [
          {
            rate: 0.0526,
            vision: '5.3',
            visionNum: 121
          },
          {
            rate: 0.047,
            vision: '5.2',
            visionNum: 108
          },
          {
            rate: 0.0443,
            vision: '5.1',
            visionNum: 102
          },
          {
            rate: 0.0526,
            vision: '5.0',
            visionNum: 121
          },
          {
            rate: 0.0457,
            vision: '4.9',
            visionNum: 105
          },
          {
            rate: 0.0435,
            vision: '4.8',
            visionNum: 100
          },
          {
            rate: 0.0383,
            vision: '4.7',
            visionNum: 88
          },
          {
            rate: 0.05,
            vision: '4.6',
            visionNum: 115
          },
          {
            rate: 0.0478,
            vision: '4.5',
            visionNum: 110
          },
          {
            rate: 0.0483,
            vision: '4.4',
            visionNum: 111
          },
          {
            rate: 0.0578,
            vision: '4.3',
            visionNum: 133
          },
          {
            rate: 0.0439,
            vision: '4.2',
            visionNum: 101
          },
          {
            rate: 0.05,
            vision: '4.1',
            visionNum: 115
          },
          {
            rate: 0.0487,
            vision: '4.0',
            visionNum: 112
          },
          {
            rate: 0.0474,
            vision: '3.9',
            visionNum: 109
          },
          {
            rate: 0.0587,
            vision: '3.8',
            visionNum: 135
          },
          {
            rate: 0.0461,
            vision: '3.7',
            visionNum: 106
          },
          {
            rate: 0.0426,
            vision: '3.6',
            visionNum: 98
          },
          {
            rate: 0.047,
            vision: '3.5',
            visionNum: 108
          },
          {
            rate: 0.0443,
            vision: '3.4',
            visionNum: 102
          },
          {
            rate: 0.0174,
            vision: '3.3',
            visionNum: 40
          }
        ],
        name: null
      })
  },
  {
    url: '/basic-api/eyesight/report/school/getDiopterSituation',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        dataList: [
          {
            className: null,
            classYear: '2022',
            dpSphAverageValue: -0.24,
            dpSphStandardDeviation: 11.79,
            eqDpSphAverageValue: -5.04,
            eqDpSphStandardDeviation: 12.03,
            gradeName: '一年级',
            name: '(小学2022)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2021',
            dpSphAverageValue: -0.53,
            dpSphStandardDeviation: 11.45,
            eqDpSphAverageValue: -5.44,
            eqDpSphStandardDeviation: 11.76,
            gradeName: '二年级',
            name: '(小学2021)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2020',
            dpSphAverageValue: 0.41,
            dpSphStandardDeviation: 11.44,
            eqDpSphAverageValue: -4.26,
            eqDpSphStandardDeviation: 11.97,
            gradeName: '三年级',
            name: '(小学2020)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2019',
            dpSphAverageValue: -0.88,
            dpSphStandardDeviation: 11.48,
            eqDpSphAverageValue: -6.01,
            eqDpSphStandardDeviation: 12.08,
            gradeName: '四年级',
            name: '(小学2019)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2018',
            dpSphAverageValue: 0.11,
            dpSphStandardDeviation: 11.67,
            eqDpSphAverageValue: -4.75,
            eqDpSphStandardDeviation: 11.87,
            gradeName: '五年级',
            name: '(小学2018)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2017',
            dpSphAverageValue: -0.1,
            dpSphStandardDeviation: 11.82,
            eqDpSphAverageValue: -5.14,
            eqDpSphStandardDeviation: 12.1,
            gradeName: '六年级',
            name: '(小学2017)',
            prefix: 2
          }
        ],
        dpSphList: [
          {
            count: '24',
            data: -19.75
          },
          {
            count: '20',
            data: -19.5
          },
          {
            count: '28',
            data: -19.25
          },
          {
            count: '23',
            data: -19.0
          },
          {
            count: '22',
            data: -18.75
          },
          {
            count: '10',
            data: -18.5
          },
          {
            count: '22',
            data: -18.25
          },
          {
            count: '15',
            data: -18.0
          },
          {
            count: '23',
            data: -17.75
          },
          {
            count: '23',
            data: -17.5
          },
          {
            count: '20',
            data: -17.25
          },
          {
            count: '18',
            data: -17.0
          },
          {
            count: '20',
            data: -16.75
          },
          {
            count: '29',
            data: -16.5
          },
          {
            count: '17',
            data: -16.25
          },
          {
            count: '24',
            data: -16.0
          },
          {
            count: '21',
            data: -15.75
          },
          {
            count: '23',
            data: -15.5
          },
          {
            count: '28',
            data: -15.25
          },
          {
            count: '16',
            data: -15.0
          },
          {
            count: '19',
            data: -14.75
          },
          {
            count: '25',
            data: -14.5
          },
          {
            count: '18',
            data: -14.25
          },
          {
            count: '15',
            data: -14.0
          },
          {
            count: '19',
            data: -13.75
          },
          {
            count: '23',
            data: -13.5
          },
          {
            count: '26',
            data: -13.25
          },
          {
            count: '21',
            data: -13.0
          },
          {
            count: '14',
            data: -12.75
          },
          {
            count: '21',
            data: -12.5
          },
          {
            count: '17',
            data: -12.25
          },
          {
            count: '16',
            data: -12.0
          },
          {
            count: '14',
            data: -11.75
          },
          {
            count: '17',
            data: -11.5
          },
          {
            count: '15',
            data: -11.25
          },
          {
            count: '9',
            data: -11.0
          },
          {
            count: '23',
            data: -10.75
          },
          {
            count: '16',
            data: -10.5
          },
          {
            count: '17',
            data: -10.25
          },
          {
            count: '13',
            data: -10.0
          },
          {
            count: '18',
            data: -9.75
          },
          {
            count: '18',
            data: -9.5
          },
          {
            count: '16',
            data: -9.25
          },
          {
            count: '14',
            data: -9.0
          },
          {
            count: '17',
            data: -8.75
          },
          {
            count: '17',
            data: -8.5
          },
          {
            count: '18',
            data: -8.25
          },
          {
            count: '20',
            data: -8.0
          },
          {
            count: '18',
            data: -7.75
          },
          {
            count: '14',
            data: -7.5
          },
          {
            count: '8',
            data: -7.25
          },
          {
            count: '18',
            data: -7.0
          },
          {
            count: '21',
            data: -6.75
          },
          {
            count: '16',
            data: -6.5
          },
          {
            count: '23',
            data: -6.25
          },
          {
            count: '21',
            data: -6.0
          },
          {
            count: '19',
            data: -5.75
          },
          {
            count: '18',
            data: -5.5
          },
          {
            count: '16',
            data: -5.25
          },
          {
            count: '19',
            data: -5.0
          },
          {
            count: '28',
            data: -4.75
          },
          {
            count: '21',
            data: -4.5
          },
          {
            count: '22',
            data: -4.25
          },
          {
            count: '16',
            data: -4.0
          },
          {
            count: '8',
            data: -3.75
          },
          {
            count: '17',
            data: -3.5
          },
          {
            count: '23',
            data: -3.25
          },
          {
            count: '12',
            data: -3.0
          },
          {
            count: '29',
            data: -2.75
          },
          {
            count: '22',
            data: -2.5
          },
          {
            count: '10',
            data: -2.25
          },
          {
            count: '18',
            data: -2.0
          },
          {
            count: '23',
            data: -1.75
          },
          {
            count: '22',
            data: -1.5
          },
          {
            count: '20',
            data: -1.25
          },
          {
            count: '15',
            data: -1.0
          },
          {
            count: '21',
            data: -0.75
          },
          {
            count: '20',
            data: -0.5
          },
          {
            count: '20',
            data: -0.25
          },
          {
            count: '37',
            data: 0.0
          },
          {
            count: '19',
            data: 0.25
          },
          {
            count: '25',
            data: 0.5
          },
          {
            count: '16',
            data: 0.75
          },
          {
            count: '20',
            data: 1.0
          },
          {
            count: '13',
            data: 1.25
          },
          {
            count: '19',
            data: 1.5
          },
          {
            count: '18',
            data: 1.75
          },
          {
            count: '16',
            data: 2.0
          },
          {
            count: '15',
            data: 2.25
          },
          {
            count: '15',
            data: 2.5
          },
          {
            count: '18',
            data: 2.75
          },
          {
            count: '17',
            data: 3.0
          },
          {
            count: '24',
            data: 3.25
          },
          {
            count: '16',
            data: 3.5
          },
          {
            count: '26',
            data: 3.75
          },
          {
            count: '12',
            data: 4.0
          },
          {
            count: '16',
            data: 4.25
          },
          {
            count: '24',
            data: 4.5
          },
          {
            count: '27',
            data: 4.75
          },
          {
            count: '19',
            data: 5.0
          },
          {
            count: '15',
            data: 5.25
          },
          {
            count: '22',
            data: 5.5
          },
          {
            count: '13',
            data: 5.75
          },
          {
            count: '16',
            data: 6.0
          },
          {
            count: '12',
            data: 6.25
          },
          {
            count: '29',
            data: 6.5
          },
          {
            count: '17',
            data: 6.75
          },
          {
            count: '12',
            data: 7.0
          },
          {
            count: '21',
            data: 7.25
          },
          {
            count: '12',
            data: 7.5
          },
          {
            count: '19',
            data: 7.75
          },
          {
            count: '18',
            data: 8.0
          },
          {
            count: '27',
            data: 8.25
          },
          {
            count: '20',
            data: 8.5
          },
          {
            count: '14',
            data: 8.75
          },
          {
            count: '11',
            data: 9.0
          },
          {
            count: '13',
            data: 9.25
          },
          {
            count: '12',
            data: 9.5
          },
          {
            count: '23',
            data: 9.75
          },
          {
            count: '22',
            data: 10.0
          },
          {
            count: '17',
            data: 10.25
          },
          {
            count: '14',
            data: 10.5
          },
          {
            count: '22',
            data: 10.75
          },
          {
            count: '19',
            data: 11.0
          },
          {
            count: '17',
            data: 11.25
          },
          {
            count: '20',
            data: 11.5
          },
          {
            count: '22',
            data: 11.75
          },
          {
            count: '23',
            data: 12.0
          },
          {
            count: '18',
            data: 12.25
          },
          {
            count: '16',
            data: 12.5
          },
          {
            count: '21',
            data: 12.75
          },
          {
            count: '15',
            data: 13.0
          },
          {
            count: '17',
            data: 13.25
          },
          {
            count: '24',
            data: 13.5
          },
          {
            count: '17',
            data: 13.75
          },
          {
            count: '18',
            data: 14.0
          },
          {
            count: '26',
            data: 14.25
          },
          {
            count: '19',
            data: 14.5
          },
          {
            count: '17',
            data: 14.75
          },
          {
            count: '22',
            data: 15.0
          },
          {
            count: '10',
            data: 15.25
          },
          {
            count: '11',
            data: 15.5
          },
          {
            count: '26',
            data: 15.75
          },
          {
            count: '24',
            data: 16.0
          },
          {
            count: '26',
            data: 16.25
          },
          {
            count: '20',
            data: 16.5
          },
          {
            count: '17',
            data: 16.75
          },
          {
            count: '18',
            data: 17.0
          },
          {
            count: '15',
            data: 17.25
          },
          {
            count: '29',
            data: 17.5
          },
          {
            count: '23',
            data: 17.75
          },
          {
            count: '20',
            data: 18.0
          },
          {
            count: '18',
            data: 18.25
          },
          {
            count: '14',
            data: 18.5
          },
          {
            count: '17',
            data: 18.75
          },
          {
            count: '22',
            data: 19.0
          },
          {
            count: '17',
            data: 19.25
          },
          {
            count: '14',
            data: 19.5
          },
          {
            count: '15',
            data: 19.75
          }
        ],
        eqDpSphList: [
          {
            count: '2',
            data: -29.38
          },
          {
            count: '2',
            data: -29.13
          },
          {
            count: '2',
            data: -29.0
          },
          {
            count: '4',
            data: -28.75
          },
          {
            count: '2',
            data: -28.5
          },
          {
            count: '2',
            data: -28.38
          },
          {
            count: '2',
            data: -28.25
          },
          {
            count: '1',
            data: -28.0
          },
          {
            count: '1',
            data: -27.63
          },
          {
            count: '1',
            data: -27.5
          },
          {
            count: '3',
            data: -27.38
          },
          {
            count: '3',
            data: -27.25
          },
          {
            count: '5',
            data: -27.13
          },
          {
            count: '2',
            data: -27.0
          },
          {
            count: '1',
            data: -26.88
          },
          {
            count: '2',
            data: -26.75
          },
          {
            count: '5',
            data: -26.63
          },
          {
            count: '5',
            data: -26.5
          },
          {
            count: '5',
            data: -26.38
          },
          {
            count: '3',
            data: -26.25
          },
          {
            count: '1',
            data: -26.13
          },
          {
            count: '3',
            data: -26.0
          },
          {
            count: '4',
            data: -25.88
          },
          {
            count: '6',
            data: -25.75
          },
          {
            count: '2',
            data: -25.63
          },
          {
            count: '5',
            data: -25.5
          },
          {
            count: '5',
            data: -25.38
          },
          {
            count: '3',
            data: -25.25
          },
          {
            count: '10',
            data: -25.13
          },
          {
            count: '3',
            data: -25.0
          },
          {
            count: '9',
            data: -24.88
          },
          {
            count: '5',
            data: -24.75
          },
          {
            count: '4',
            data: -24.63
          },
          {
            count: '6',
            data: -24.5
          },
          {
            count: '2',
            data: -24.38
          },
          {
            count: '7',
            data: -24.25
          },
          {
            count: '7',
            data: -24.13
          },
          {
            count: '14',
            data: -24.0
          },
          {
            count: '6',
            data: -23.88
          },
          {
            count: '9',
            data: -23.75
          },
          {
            count: '3',
            data: -23.63
          },
          {
            count: '7',
            data: -23.5
          },
          {
            count: '9',
            data: -23.38
          },
          {
            count: '6',
            data: -23.25
          },
          {
            count: '6',
            data: -23.13
          },
          {
            count: '6',
            data: -23.0
          },
          {
            count: '5',
            data: -22.88
          },
          {
            count: '8',
            data: -22.75
          },
          {
            count: '6',
            data: -22.63
          },
          {
            count: '5',
            data: -22.5
          },
          {
            count: '5',
            data: -22.38
          },
          {
            count: '11',
            data: -22.25
          },
          {
            count: '13',
            data: -22.13
          },
          {
            count: '12',
            data: -22.0
          },
          {
            count: '10',
            data: -21.88
          },
          {
            count: '8',
            data: -21.75
          },
          {
            count: '7',
            data: -21.63
          },
          {
            count: '6',
            data: -21.5
          },
          {
            count: '10',
            data: -21.38
          },
          {
            count: '11',
            data: -21.25
          },
          {
            count: '8',
            data: -21.13
          },
          {
            count: '9',
            data: -21.0
          },
          {
            count: '16',
            data: -20.88
          },
          {
            count: '7',
            data: -20.75
          },
          {
            count: '7',
            data: -20.63
          },
          {
            count: '9',
            data: -20.5
          },
          {
            count: '12',
            data: -20.38
          },
          {
            count: '9',
            data: -20.25
          },
          {
            count: '6',
            data: -20.13
          },
          {
            count: '5',
            data: -20.0
          },
          {
            count: '10',
            data: -19.88
          },
          {
            count: '8',
            data: -19.75
          },
          {
            count: '15',
            data: -19.63
          },
          {
            count: '8',
            data: -19.5
          },
          {
            count: '3',
            data: -19.38
          },
          {
            count: '11',
            data: -19.25
          },
          {
            count: '12',
            data: -19.13
          },
          {
            count: '8',
            data: -19.0
          },
          {
            count: '7',
            data: -18.88
          },
          {
            count: '12',
            data: -18.75
          },
          {
            count: '6',
            data: -18.63
          },
          {
            count: '7',
            data: -18.5
          },
          {
            count: '9',
            data: -18.38
          },
          {
            count: '11',
            data: -18.25
          },
          {
            count: '13',
            data: -18.13
          },
          {
            count: '4',
            data: -18.0
          },
          {
            count: '9',
            data: -17.88
          },
          {
            count: '14',
            data: -17.75
          },
          {
            count: '14',
            data: -17.63
          },
          {
            count: '7',
            data: -17.5
          },
          {
            count: '4',
            data: -17.38
          },
          {
            count: '9',
            data: -17.25
          },
          {
            count: '7',
            data: -17.13
          },
          {
            count: '3',
            data: -17.0
          },
          {
            count: '9',
            data: -16.88
          },
          {
            count: '9',
            data: -16.75
          },
          {
            count: '10',
            data: -16.63
          },
          {
            count: '13',
            data: -16.5
          },
          {
            count: '11',
            data: -16.38
          },
          {
            count: '11',
            data: -16.25
          },
          {
            count: '12',
            data: -16.13
          },
          {
            count: '12',
            data: -16.0
          },
          {
            count: '4',
            data: -15.88
          },
          {
            count: '9',
            data: -15.75
          },
          {
            count: '10',
            data: -15.63
          },
          {
            count: '7',
            data: -15.5
          },
          {
            count: '13',
            data: -15.38
          },
          {
            count: '8',
            data: -15.25
          },
          {
            count: '9',
            data: -15.13
          },
          {
            count: '10',
            data: -15.0
          },
          {
            count: '11',
            data: -14.88
          },
          {
            count: '8',
            data: -14.75
          },
          {
            count: '8',
            data: -14.63
          },
          {
            count: '10',
            data: -14.5
          },
          {
            count: '6',
            data: -14.38
          },
          {
            count: '3',
            data: -14.25
          },
          {
            count: '8',
            data: -14.13
          },
          {
            count: '10',
            data: -14.0
          },
          {
            count: '10',
            data: -13.88
          },
          {
            count: '12',
            data: -13.75
          },
          {
            count: '8',
            data: -13.63
          },
          {
            count: '10',
            data: -13.5
          },
          {
            count: '13',
            data: -13.38
          },
          {
            count: '9',
            data: -13.25
          },
          {
            count: '9',
            data: -13.13
          },
          {
            count: '7',
            data: -13.0
          },
          {
            count: '7',
            data: -12.88
          },
          {
            count: '13',
            data: -12.75
          },
          {
            count: '8',
            data: -12.63
          },
          {
            count: '11',
            data: -12.5
          },
          {
            count: '7',
            data: -12.38
          },
          {
            count: '6',
            data: -12.25
          },
          {
            count: '9',
            data: -12.13
          },
          {
            count: '15',
            data: -12.0
          },
          {
            count: '9',
            data: -11.88
          },
          {
            count: '14',
            data: -11.75
          },
          {
            count: '6',
            data: -11.63
          },
          {
            count: '9',
            data: -11.5
          },
          {
            count: '6',
            data: -11.38
          },
          {
            count: '9',
            data: -11.25
          },
          {
            count: '5',
            data: -11.13
          },
          {
            count: '5',
            data: -11.0
          },
          {
            count: '7',
            data: -10.88
          },
          {
            count: '15',
            data: -10.75
          },
          {
            count: '10',
            data: -10.63
          },
          {
            count: '8',
            data: -10.5
          },
          {
            count: '12',
            data: -10.38
          },
          {
            count: '7',
            data: -10.25
          },
          {
            count: '12',
            data: -10.13
          },
          {
            count: '7',
            data: -10.0
          },
          {
            count: '11',
            data: -9.88
          },
          {
            count: '7',
            data: -9.75
          },
          {
            count: '9',
            data: -9.63
          },
          {
            count: '9',
            data: -9.5
          },
          {
            count: '8',
            data: -9.38
          },
          {
            count: '13',
            data: -9.25
          },
          {
            count: '8',
            data: -9.13
          },
          {
            count: '15',
            data: -9.0
          },
          {
            count: '10',
            data: -8.88
          },
          {
            count: '10',
            data: -8.75
          },
          {
            count: '14',
            data: -8.63
          },
          {
            count: '13',
            data: -8.5
          },
          {
            count: '9',
            data: -8.38
          },
          {
            count: '12',
            data: -8.25
          },
          {
            count: '8',
            data: -8.13
          },
          {
            count: '9',
            data: -8.0
          },
          {
            count: '7',
            data: -7.88
          },
          {
            count: '8',
            data: -7.75
          },
          {
            count: '10',
            data: -7.63
          },
          {
            count: '6',
            data: -7.5
          },
          {
            count: '13',
            data: -7.38
          },
          {
            count: '9',
            data: -7.25
          },
          {
            count: '5',
            data: -7.13
          },
          {
            count: '8',
            data: -7.0
          },
          {
            count: '13',
            data: -6.88
          },
          {
            count: '8',
            data: -6.75
          },
          {
            count: '11',
            data: -6.63
          },
          {
            count: '16',
            data: -6.5
          },
          {
            count: '4',
            data: -6.38
          },
          {
            count: '7',
            data: -6.25
          },
          {
            count: '7',
            data: -6.13
          },
          {
            count: '11',
            data: -6.0
          },
          {
            count: '11',
            data: -5.88
          },
          {
            count: '7',
            data: -5.75
          },
          {
            count: '8',
            data: -5.63
          },
          {
            count: '10',
            data: -5.5
          },
          {
            count: '7',
            data: -5.38
          },
          {
            count: '12',
            data: -5.25
          },
          {
            count: '10',
            data: -5.13
          },
          {
            count: '7',
            data: -5.0
          },
          {
            count: '6',
            data: -4.88
          },
          {
            count: '10',
            data: -4.75
          },
          {
            count: '9',
            data: -4.63
          },
          {
            count: '6',
            data: -4.5
          },
          {
            count: '13',
            data: -4.38
          },
          {
            count: '9',
            data: -4.25
          },
          {
            count: '7',
            data: -4.13
          },
          {
            count: '9',
            data: -4.0
          },
          {
            count: '9',
            data: -3.88
          },
          {
            count: '7',
            data: -3.75
          },
          {
            count: '15',
            data: -3.63
          },
          {
            count: '7',
            data: -3.5
          },
          {
            count: '7',
            data: -3.38
          },
          {
            count: '10',
            data: -3.25
          },
          {
            count: '10',
            data: -3.13
          },
          {
            count: '9',
            data: -3.0
          },
          {
            count: '5',
            data: -2.88
          },
          {
            count: '14',
            data: -2.75
          },
          {
            count: '10',
            data: -2.63
          },
          {
            count: '7',
            data: -2.5
          },
          {
            count: '6',
            data: -2.38
          },
          {
            count: '4',
            data: -2.25
          },
          {
            count: '8',
            data: -2.13
          },
          {
            count: '4',
            data: -2.0
          },
          {
            count: '13',
            data: -1.88
          },
          {
            count: '9',
            data: -1.75
          },
          {
            count: '17',
            data: -1.63
          },
          {
            count: '11',
            data: -1.5
          },
          {
            count: '12',
            data: -1.38
          },
          {
            count: '11',
            data: -1.25
          },
          {
            count: '11',
            data: -1.13
          },
          {
            count: '11',
            data: -1.0
          },
          {
            count: '15',
            data: -0.88
          },
          {
            count: '7',
            data: -0.75
          },
          {
            count: '6',
            data: -0.63
          },
          {
            count: '11',
            data: -0.5
          },
          {
            count: '8',
            data: -0.38
          },
          {
            count: '8',
            data: -0.25
          },
          {
            count: '14',
            data: -0.13
          },
          {
            count: '5',
            data: 0.0
          },
          {
            count: '6',
            data: 0.13
          },
          {
            count: '8',
            data: 0.25
          },
          {
            count: '10',
            data: 0.38
          },
          {
            count: '13',
            data: 0.5
          },
          {
            count: '3',
            data: 0.63
          },
          {
            count: '11',
            data: 0.75
          },
          {
            count: '8',
            data: 0.88
          },
          {
            count: '9',
            data: 1.0
          },
          {
            count: '6',
            data: 1.13
          },
          {
            count: '12',
            data: 1.25
          },
          {
            count: '13',
            data: 1.38
          },
          {
            count: '18',
            data: 1.5
          },
          {
            count: '8',
            data: 1.63
          },
          {
            count: '11',
            data: 1.75
          },
          {
            count: '6',
            data: 1.88
          },
          {
            count: '11',
            data: 2.0
          },
          {
            count: '5',
            data: 2.13
          },
          {
            count: '11',
            data: 2.25
          },
          {
            count: '11',
            data: 2.38
          },
          {
            count: '13',
            data: 2.5
          },
          {
            count: '10',
            data: 2.63
          },
          {
            count: '10',
            data: 2.75
          },
          {
            count: '9',
            data: 2.88
          },
          {
            count: '14',
            data: 3.0
          },
          {
            count: '12',
            data: 3.13
          },
          {
            count: '6',
            data: 3.25
          },
          {
            count: '6',
            data: 3.38
          },
          {
            count: '12',
            data: 3.5
          },
          {
            count: '9',
            data: 3.63
          },
          {
            count: '9',
            data: 3.75
          },
          {
            count: '9',
            data: 3.88
          },
          {
            count: '2',
            data: 4.0
          },
          {
            count: '11',
            data: 4.13
          },
          {
            count: '11',
            data: 4.25
          },
          {
            count: '8',
            data: 4.38
          },
          {
            count: '9',
            data: 4.5
          },
          {
            count: '9',
            data: 4.63
          },
          {
            count: '7',
            data: 4.75
          },
          {
            count: '6',
            data: 4.88
          },
          {
            count: '7',
            data: 5.0
          },
          {
            count: '5',
            data: 5.13
          },
          {
            count: '11',
            data: 5.25
          },
          {
            count: '7',
            data: 5.38
          },
          {
            count: '12',
            data: 5.5
          },
          {
            count: '10',
            data: 5.63
          },
          {
            count: '10',
            data: 5.75
          },
          {
            count: '10',
            data: 5.88
          },
          {
            count: '9',
            data: 6.0
          },
          {
            count: '7',
            data: 6.13
          },
          {
            count: '12',
            data: 6.25
          },
          {
            count: '10',
            data: 6.38
          },
          {
            count: '6',
            data: 6.5
          },
          {
            count: '11',
            data: 6.63
          },
          {
            count: '8',
            data: 6.75
          },
          {
            count: '12',
            data: 6.88
          },
          {
            count: '4',
            data: 7.0
          },
          {
            count: '16',
            data: 7.13
          },
          {
            count: '9',
            data: 7.25
          },
          {
            count: '7',
            data: 7.38
          },
          {
            count: '10',
            data: 7.5
          },
          {
            count: '9',
            data: 7.63
          },
          {
            count: '9',
            data: 7.75
          },
          {
            count: '9',
            data: 7.88
          },
          {
            count: '13',
            data: 8.0
          },
          {
            count: '8',
            data: 8.13
          },
          {
            count: '8',
            data: 8.25
          },
          {
            count: '6',
            data: 8.38
          },
          {
            count: '7',
            data: 8.5
          },
          {
            count: '13',
            data: 8.63
          },
          {
            count: '16',
            data: 8.75
          },
          {
            count: '11',
            data: 8.88
          },
          {
            count: '9',
            data: 9.0
          },
          {
            count: '8',
            data: 9.13
          },
          {
            count: '12',
            data: 9.25
          },
          {
            count: '11',
            data: 9.38
          },
          {
            count: '10',
            data: 9.5
          },
          {
            count: '4',
            data: 9.63
          },
          {
            count: '15',
            data: 9.75
          },
          {
            count: '10',
            data: 9.88
          },
          {
            count: '10',
            data: 10.0
          },
          {
            count: '10',
            data: 10.13
          },
          {
            count: '10',
            data: 10.25
          },
          {
            count: '5',
            data: 10.38
          },
          {
            count: '8',
            data: 10.5
          },
          {
            count: '11',
            data: 10.63
          },
          {
            count: '9',
            data: 10.75
          },
          {
            count: '14',
            data: 10.88
          },
          {
            count: '11',
            data: 11.0
          },
          {
            count: '10',
            data: 11.13
          },
          {
            count: '12',
            data: 11.25
          },
          {
            count: '5',
            data: 11.38
          },
          {
            count: '7',
            data: 11.5
          },
          {
            count: '10',
            data: 11.63
          },
          {
            count: '5',
            data: 11.75
          },
          {
            count: '4',
            data: 11.88
          },
          {
            count: '6',
            data: 12.0
          },
          {
            count: '7',
            data: 12.13
          },
          {
            count: '6',
            data: 12.38
          },
          {
            count: '6',
            data: 12.5
          },
          {
            count: '3',
            data: 12.63
          },
          {
            count: '9',
            data: 12.75
          },
          {
            count: '6',
            data: 12.88
          },
          {
            count: '5',
            data: 13.0
          },
          {
            count: '3',
            data: 13.13
          },
          {
            count: '8',
            data: 13.25
          },
          {
            count: '9',
            data: 13.38
          },
          {
            count: '3',
            data: 13.5
          },
          {
            count: '6',
            data: 13.63
          },
          {
            count: '8',
            data: 13.75
          },
          {
            count: '8',
            data: 13.88
          },
          {
            count: '7',
            data: 14.0
          },
          {
            count: '1',
            data: 14.13
          },
          {
            count: '6',
            data: 14.25
          },
          {
            count: '5',
            data: 14.38
          },
          {
            count: '4',
            data: 14.5
          },
          {
            count: '5',
            data: 14.63
          },
          {
            count: '4',
            data: 14.75
          },
          {
            count: '8',
            data: 14.88
          },
          {
            count: '4',
            data: 15.0
          },
          {
            count: '8',
            data: 15.13
          },
          {
            count: '5',
            data: 15.25
          },
          {
            count: '5',
            data: 15.38
          },
          {
            count: '6',
            data: 15.5
          },
          {
            count: '4',
            data: 15.63
          },
          {
            count: '1',
            data: 15.75
          },
          {
            count: '4',
            data: 15.88
          },
          {
            count: '6',
            data: 16.0
          },
          {
            count: '6',
            data: 16.13
          },
          {
            count: '3',
            data: 16.25
          },
          {
            count: '6',
            data: 16.38
          },
          {
            count: '1',
            data: 16.5
          },
          {
            count: '5',
            data: 16.63
          },
          {
            count: '3',
            data: 16.75
          },
          {
            count: '1',
            data: 16.88
          },
          {
            count: '3',
            data: 17.0
          },
          {
            count: '2',
            data: 17.13
          },
          {
            count: '4',
            data: 17.25
          },
          {
            count: '4',
            data: 17.38
          },
          {
            count: '1',
            data: 17.5
          },
          {
            count: '2',
            data: 17.63
          },
          {
            count: '2',
            data: 17.75
          },
          {
            count: '2',
            data: 18.38
          },
          {
            count: '2',
            data: 18.5
          },
          {
            count: '1',
            data: 18.63
          },
          {
            count: '3',
            data: 18.75
          },
          {
            count: '1',
            data: 19.0
          },
          {
            count: '1',
            data: 19.13
          },
          {
            count: '1',
            data: 19.25
          },
          {
            count: '2',
            data: 19.38
          },
          {
            count: '1',
            data: 19.5
          }
        ],
        name: null
      })
  },
  {
    url: '/basic-api/eyesight/report/school/getSchoolMyopiaTypeInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          astigmatismRate: 0.0,
          astigmatismStdCount: '0',
          classMyopiaTypeInfos: [
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993587970',
              className: '1',
              gradeId: '921830381248273',
              gradeName: '三年级',
              hyperopiaRate: 0.24,
              hyperopiaStdCount: '12',
              myopiaRate: 0.84,
              myopiaStdCount: '42',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2020',
              totalRate: 0.98,
              totalStdCount: '49'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993587971',
              className: '2',
              gradeId: '921830381248273',
              gradeName: '三年级',
              hyperopiaRate: 0.22,
              hyperopiaStdCount: '11',
              myopiaRate: 0.76,
              myopiaStdCount: '38',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2020',
              totalRate: 0.9,
              totalStdCount: '45'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993587972',
              className: '3',
              gradeId: '921830381248273',
              gradeName: '三年级',
              hyperopiaRate: 0.32,
              hyperopiaStdCount: '16',
              myopiaRate: 0.74,
              myopiaStdCount: '37',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2020',
              totalRate: 0.94,
              totalStdCount: '47'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993596160',
              className: '4',
              gradeId: '921830381248273',
              gradeName: '三年级',
              hyperopiaRate: 0.38,
              hyperopiaStdCount: '19',
              myopiaRate: 0.78,
              myopiaStdCount: '39',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2020',
              totalRate: 0.94,
              totalStdCount: '47'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993596161',
              className: '5',
              gradeId: '921830381248273',
              gradeName: '三年级',
              hyperopiaRate: 0.22,
              hyperopiaStdCount: '11',
              myopiaRate: 0.74,
              myopiaStdCount: '37',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2020',
              totalRate: 0.84,
              totalStdCount: '42'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: null,
              className: '合计',
              gradeId: '921830381248273',
              gradeName: '三年级',
              hyperopiaRate: 0.276,
              hyperopiaStdCount: '69',
              myopiaRate: 0.772,
              myopiaStdCount: '193',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2020',
              totalRate: 0.92,
              totalStdCount: '230'
            }
          ],
          gradeId: '921830381248273',
          gradeName: '三年级',
          hyperopiaRate: 0.276,
          hyperopiaStdCount: '69',
          myopiaRate: 0.772,
          myopiaStdCount: '193',
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2020',
          totalRate: 0.92,
          totalStdCount: '230'
        },
        {
          astigmatismRate: 0.0,
          astigmatismStdCount: '0',
          classMyopiaTypeInfos: [
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993571584',
              className: '1',
              gradeId: '921830381248271',
              gradeName: '一年级',
              hyperopiaRate: 0.28,
              hyperopiaStdCount: '14',
              myopiaRate: 0.8,
              myopiaStdCount: '40',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2022',
              totalRate: 0.92,
              totalStdCount: '46'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993571585',
              className: '2',
              gradeId: '921830381248271',
              gradeName: '一年级',
              hyperopiaRate: 0.32,
              hyperopiaStdCount: '16',
              myopiaRate: 0.82,
              myopiaStdCount: '41',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2022',
              totalRate: 0.92,
              totalStdCount: '46'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993571586',
              className: '3',
              gradeId: '921830381248271',
              gradeName: '一年级',
              hyperopiaRate: 0.3,
              hyperopiaStdCount: '15',
              myopiaRate: 0.86,
              myopiaStdCount: '43',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2022',
              totalRate: 0.98,
              totalStdCount: '49'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993579776',
              className: '4',
              gradeId: '921830381248271',
              gradeName: '一年级',
              hyperopiaRate: 0.28,
              hyperopiaStdCount: '14',
              myopiaRate: 0.84,
              myopiaStdCount: '42',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2022',
              totalRate: 0.94,
              totalStdCount: '47'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993579777',
              className: '5',
              gradeId: '921830381248271',
              gradeName: '一年级',
              hyperopiaRate: 0.48,
              hyperopiaStdCount: '24',
              myopiaRate: 0.74,
              myopiaStdCount: '37',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2022',
              totalRate: 0.98,
              totalStdCount: '49'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: null,
              className: '合计',
              gradeId: '921830381248271',
              gradeName: '一年级',
              hyperopiaRate: 0.332,
              hyperopiaStdCount: '83',
              myopiaRate: 0.812,
              myopiaStdCount: '203',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2022',
              totalRate: 0.948,
              totalStdCount: '237'
            }
          ],
          gradeId: '921830381248271',
          gradeName: '一年级',
          hyperopiaRate: 0.332,
          hyperopiaStdCount: '83',
          myopiaRate: 0.812,
          myopiaStdCount: '203',
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2022',
          totalRate: 0.948,
          totalStdCount: '237'
        },
        {
          astigmatismRate: 0.0,
          astigmatismStdCount: '0',
          classMyopiaTypeInfos: [
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993612547',
              className: '1',
              gradeId: '921830381248276',
              gradeName: '六年级',
              hyperopiaRate: 0.34,
              hyperopiaStdCount: '17',
              myopiaRate: 0.84,
              myopiaStdCount: '42',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2017',
              totalRate: 0.96,
              totalStdCount: '48'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993612548',
              className: '2',
              gradeId: '921830381248276',
              gradeName: '六年级',
              hyperopiaRate: 0.42,
              hyperopiaStdCount: '21',
              myopiaRate: 0.78,
              myopiaStdCount: '39',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2017',
              totalRate: 0.92,
              totalStdCount: '46'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993620736',
              className: '3',
              gradeId: '921830381248276',
              gradeName: '六年级',
              hyperopiaRate: 0.28,
              hyperopiaStdCount: '14',
              myopiaRate: 0.74,
              myopiaStdCount: '37',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2017',
              totalRate: 0.92,
              totalStdCount: '46'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993620737',
              className: '4',
              gradeId: '921830381248276',
              gradeName: '六年级',
              hyperopiaRate: 0.3,
              hyperopiaStdCount: '15',
              myopiaRate: 0.82,
              myopiaStdCount: '41',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2017',
              totalRate: 0.98,
              totalStdCount: '49'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993620738',
              className: '5',
              gradeId: '921830381248276',
              gradeName: '六年级',
              hyperopiaRate: 0.24,
              hyperopiaStdCount: '12',
              myopiaRate: 0.8,
              myopiaStdCount: '40',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2017',
              totalRate: 0.92,
              totalStdCount: '46'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: null,
              className: '合计',
              gradeId: '921830381248276',
              gradeName: '六年级',
              hyperopiaRate: 0.316,
              hyperopiaStdCount: '79',
              myopiaRate: 0.796,
              myopiaStdCount: '199',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2017',
              totalRate: 0.94,
              totalStdCount: '235'
            }
          ],
          gradeId: '921830381248276',
          gradeName: '六年级',
          hyperopiaRate: 0.316,
          hyperopiaStdCount: '79',
          myopiaRate: 0.796,
          myopiaStdCount: '199',
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2017',
          totalRate: 0.94,
          totalStdCount: '235'
        },
        {
          astigmatismRate: 0.0,
          astigmatismStdCount: '0',
          classMyopiaTypeInfos: [
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993579778',
              className: '1',
              gradeId: '921830381248272',
              gradeName: '二年级',
              hyperopiaRate: 0.28,
              hyperopiaStdCount: '14',
              myopiaRate: 0.74,
              myopiaStdCount: '37',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2021',
              totalRate: 0.9,
              totalStdCount: '45'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993579779',
              className: '2',
              gradeId: '921830381248272',
              gradeName: '二年级',
              hyperopiaRate: 0.2,
              hyperopiaStdCount: '10',
              myopiaRate: 0.86,
              myopiaStdCount: '43',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2021',
              totalRate: 0.92,
              totalStdCount: '46'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993579780',
              className: '3',
              gradeId: '921830381248272',
              gradeName: '二年级',
              hyperopiaRate: 0.36,
              hyperopiaStdCount: '18',
              myopiaRate: 0.82,
              myopiaStdCount: '41',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2021',
              totalRate: 0.94,
              totalStdCount: '47'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993587968',
              className: '4',
              gradeId: '921830381248272',
              gradeName: '二年级',
              hyperopiaRate: 0.28,
              hyperopiaStdCount: '14',
              myopiaRate: 0.82,
              myopiaStdCount: '41',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2021',
              totalRate: 0.9,
              totalStdCount: '45'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993587969',
              className: '5',
              gradeId: '921830381248272',
              gradeName: '二年级',
              hyperopiaRate: 0.26,
              hyperopiaStdCount: '13',
              myopiaRate: 0.8,
              myopiaStdCount: '40',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2021',
              totalRate: 0.9,
              totalStdCount: '45'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: null,
              className: '合计',
              gradeId: '921830381248272',
              gradeName: '二年级',
              hyperopiaRate: 0.276,
              hyperopiaStdCount: '69',
              myopiaRate: 0.808,
              myopiaStdCount: '202',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2021',
              totalRate: 0.912,
              totalStdCount: '228'
            }
          ],
          gradeId: '921830381248272',
          gradeName: '二年级',
          hyperopiaRate: 0.276,
          hyperopiaStdCount: '69',
          myopiaRate: 0.808,
          myopiaStdCount: '202',
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2021',
          totalRate: 0.912,
          totalStdCount: '228'
        },
        {
          astigmatismRate: 0.0,
          astigmatismStdCount: '0',
          classMyopiaTypeInfos: [
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993596162',
              className: '1',
              gradeId: '921830381248274',
              gradeName: '四年级',
              hyperopiaRate: 0.24,
              hyperopiaStdCount: '12',
              myopiaRate: 0.72,
              myopiaStdCount: '36',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2019',
              totalRate: 0.84,
              totalStdCount: '42'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993596163',
              className: '2',
              gradeId: '921830381248274',
              gradeName: '四年级',
              hyperopiaRate: 0.34,
              hyperopiaStdCount: '17',
              myopiaRate: 0.74,
              myopiaStdCount: '37',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2019',
              totalRate: 0.88,
              totalStdCount: '44'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993596164',
              className: '3',
              gradeId: '921830381248274',
              gradeName: '四年级',
              hyperopiaRate: 0.24,
              hyperopiaStdCount: '12',
              myopiaRate: 0.88,
              myopiaStdCount: '44',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2019',
              totalRate: 0.94,
              totalStdCount: '47'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993604352',
              className: '4',
              gradeId: '921830381248274',
              gradeName: '四年级',
              hyperopiaRate: 0.28,
              hyperopiaStdCount: '14',
              myopiaRate: 0.82,
              myopiaStdCount: '41',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2019',
              totalRate: 0.96,
              totalStdCount: '48'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993604353',
              className: '5',
              gradeId: '921830381248274',
              gradeName: '四年级',
              hyperopiaRate: 0.16,
              hyperopiaStdCount: '8',
              myopiaRate: 0.84,
              myopiaStdCount: '42',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2019',
              totalRate: 0.94,
              totalStdCount: '47'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: null,
              className: '合计',
              gradeId: '921830381248274',
              gradeName: '四年级',
              hyperopiaRate: 0.252,
              hyperopiaStdCount: '63',
              myopiaRate: 0.8,
              myopiaStdCount: '200',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2019',
              totalRate: 0.912,
              totalStdCount: '228'
            }
          ],
          gradeId: '921830381248274',
          gradeName: '四年级',
          hyperopiaRate: 0.252,
          hyperopiaStdCount: '63',
          myopiaRate: 0.8,
          myopiaStdCount: '200',
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2019',
          totalRate: 0.912,
          totalStdCount: '228'
        },
        {
          astigmatismRate: 0.0,
          astigmatismStdCount: '0',
          classMyopiaTypeInfos: [
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993604354',
              className: '1',
              gradeId: '921830381248275',
              gradeName: '五年级',
              hyperopiaRate: 0.34,
              hyperopiaStdCount: '17',
              myopiaRate: 0.78,
              myopiaStdCount: '39',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2018',
              totalRate: 0.94,
              totalStdCount: '47'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993604355',
              className: '2',
              gradeId: '921830381248275',
              gradeName: '五年级',
              hyperopiaRate: 0.32,
              hyperopiaStdCount: '16',
              myopiaRate: 0.74,
              myopiaStdCount: '37',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2018',
              totalRate: 0.96,
              totalStdCount: '48'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993612544',
              className: '3',
              gradeId: '921830381248275',
              gradeName: '五年级',
              hyperopiaRate: 0.28,
              hyperopiaStdCount: '14',
              myopiaRate: 0.9,
              myopiaStdCount: '45',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2018',
              totalRate: 1.0,
              totalStdCount: '50'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993612545',
              className: '4',
              gradeId: '921830381248275',
              gradeName: '五年级',
              hyperopiaRate: 0.32,
              hyperopiaStdCount: '16',
              myopiaRate: 0.82,
              myopiaStdCount: '41',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2018',
              totalRate: 0.98,
              totalStdCount: '49'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: '1282974993612546',
              className: '5',
              gradeId: '921830381248275',
              gradeName: '五年级',
              hyperopiaRate: 0.34,
              hyperopiaStdCount: '17',
              myopiaRate: 0.8,
              myopiaStdCount: '40',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2018',
              totalRate: 0.9,
              totalStdCount: '45'
            },
            {
              astigmatismRate: 0.0,
              astigmatismStdCount: '0',
              classId: null,
              className: '合计',
              gradeId: '921830381248275',
              gradeName: '五年级',
              hyperopiaRate: 0.32,
              hyperopiaStdCount: '80',
              myopiaRate: 0.808,
              myopiaStdCount: '202',
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studyYear: '2018',
              totalRate: 0.956,
              totalStdCount: '239'
            }
          ],
          gradeId: '921830381248275',
          gradeName: '五年级',
          hyperopiaRate: 0.32,
          hyperopiaStdCount: '80',
          myopiaRate: 0.808,
          myopiaStdCount: '202',
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2018',
          totalRate: 0.956,
          totalStdCount: '239'
        }
      ])
  },
  {
    url: '/basic-api/eyesight/report/school/getSchoolHyperopiaReserve',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
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
          gradeName: '三年级',
          hyperopiaReservesEnough: '0',
          hyperopiaReservesEnoughNum: '0',
          hyperopiaReservesNotEnough: '0',
          hyperopiaReservesNotEnoughNum: '0'
        },
        {
          gradeId: '921830381248274',
          gradeName: '四年级',
          hyperopiaReservesEnough: '0',
          hyperopiaReservesEnoughNum: '0',
          hyperopiaReservesNotEnough: '0',
          hyperopiaReservesNotEnoughNum: '0'
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
          gradeId: '921830381248276',
          gradeName: '六年级',
          hyperopiaReservesEnough: '0',
          hyperopiaReservesEnoughNum: '0',
          hyperopiaReservesNotEnough: '0',
          hyperopiaReservesNotEnoughNum: '0'
        },
        {
          gradeId: null,
          gradeName: '总计',
          hyperopiaReservesEnough: '0',
          hyperopiaReservesEnoughNum: '0',
          hyperopiaReservesNotEnough: '0',
          hyperopiaReservesNotEnoughNum: '0'
        }
      ])
  },
  {
    url: '/basic-api/eyesight/report/school/getClassMyopiaCorrectInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          classMyopiaCorrectInfos: [
            {
              classId: '1282974993579777',
              className: '5',
              contactLensStdCount: '6',
              correctMyopiaRate: 0.027,
              correctMyopiaStdCount: '1',
              frameGlassesStdCount: '9',
              gradeId: '921830381248271',
              gradeName: '一年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '11',
              manUdMyopiaRate: 0.5454,
              manUdMyopiaStdCount: '6',
              manUnMyopiaRate: 0.4545,
              manUnMyopiaStdCount: '5',
              myopiaStdCount: '37',
              okLensStdCount: '8',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2022',
              udMyopiaRate: 0.5945,
              udMyopiaStdCount: '22',
              unMyopiaRate: 0.3783,
              unMyopiaStdCount: '14',
              womanCorrectMyopiaRate: 0.0625,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '16',
              womanUdMyopiaRate: 0.625,
              womanUdMyopiaStdCount: '10',
              womanUnMyopiaRate: 0.3125,
              womanUnMyopiaStdCount: '5'
            },
            {
              classId: '1282974993571584',
              className: '1',
              contactLensStdCount: '10',
              correctMyopiaRate: 0.1,
              correctMyopiaStdCount: '4',
              frameGlassesStdCount: '10',
              gradeId: '921830381248271',
              gradeName: '一年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '6',
              manUdMyopiaRate: 1.0,
              manUdMyopiaStdCount: '6',
              manUnMyopiaRate: 0.0,
              manUnMyopiaStdCount: '0',
              myopiaStdCount: '40',
              okLensStdCount: '12',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2022',
              udMyopiaRate: 0.7,
              udMyopiaStdCount: '28',
              unMyopiaRate: 0.2,
              unMyopiaStdCount: '8',
              womanCorrectMyopiaRate: 0.0625,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '16',
              womanUdMyopiaRate: 0.75,
              womanUdMyopiaStdCount: '12',
              womanUnMyopiaRate: 0.1875,
              womanUnMyopiaStdCount: '3'
            },
            {
              classId: '1282974993571585',
              className: '2',
              contactLensStdCount: '8',
              correctMyopiaRate: 0.0731,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '14',
              gradeId: '921830381248271',
              gradeName: '一年级',
              manCorrectMyopiaRate: 0.0666,
              manCorrectMyopiaStdCount: '1',
              manMyopiaStdCount: '15',
              manUdMyopiaRate: 0.6,
              manUdMyopiaStdCount: '9',
              manUnMyopiaRate: 0.3333,
              manUnMyopiaStdCount: '5',
              myopiaStdCount: '41',
              okLensStdCount: '9',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2022',
              udMyopiaRate: 0.6829,
              udMyopiaStdCount: '28',
              unMyopiaRate: 0.2439,
              unMyopiaStdCount: '10',
              womanCorrectMyopiaRate: 0.1111,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '9',
              womanUdMyopiaRate: 0.6666,
              womanUdMyopiaStdCount: '6',
              womanUnMyopiaRate: 0.2222,
              womanUnMyopiaStdCount: '2'
            },
            {
              classId: '1282974993571586',
              className: '3',
              contactLensStdCount: '8',
              correctMyopiaRate: 0.093,
              correctMyopiaStdCount: '4',
              frameGlassesStdCount: '10',
              gradeId: '921830381248271',
              gradeName: '一年级',
              manCorrectMyopiaRate: 0.1176,
              manCorrectMyopiaStdCount: '2',
              manMyopiaStdCount: '17',
              manUdMyopiaRate: 0.5882,
              manUdMyopiaStdCount: '10',
              manUnMyopiaRate: 0.2941,
              manUnMyopiaStdCount: '5',
              myopiaStdCount: '43',
              okLensStdCount: '11',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2022',
              udMyopiaRate: 0.5813,
              udMyopiaStdCount: '25',
              unMyopiaRate: 0.3255,
              unMyopiaStdCount: '14',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '12',
              womanUdMyopiaRate: 0.5833,
              womanUdMyopiaStdCount: '7',
              womanUnMyopiaRate: 0.4166,
              womanUnMyopiaStdCount: '5'
            },
            {
              classId: '1282974993579776',
              className: '4',
              contactLensStdCount: '6',
              correctMyopiaRate: 0.0238,
              correctMyopiaStdCount: '1',
              frameGlassesStdCount: '7',
              gradeId: '921830381248271',
              gradeName: '一年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '16',
              manUdMyopiaRate: 0.5,
              manUdMyopiaStdCount: '8',
              manUnMyopiaRate: 0.5,
              manUnMyopiaStdCount: '8',
              myopiaStdCount: '42',
              okLensStdCount: '14',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2022',
              udMyopiaRate: 0.619,
              udMyopiaStdCount: '26',
              unMyopiaRate: 0.3571,
              unMyopiaStdCount: '15',
              womanCorrectMyopiaRate: 0.0909,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '11',
              womanUdMyopiaRate: 0.6363,
              womanUdMyopiaStdCount: '7',
              womanUnMyopiaRate: 0.2727,
              womanUnMyopiaStdCount: '3'
            },
            {
              classId: null,
              className: '合计',
              contactLensStdCount: '38',
              correctMyopiaRate: 0.064,
              correctMyopiaStdCount: '13',
              frameGlassesStdCount: '50',
              gradeId: '921830381248271',
              gradeName: '一年级',
              manCorrectMyopiaRate: 0.0461,
              manCorrectMyopiaStdCount: '3',
              manMyopiaStdCount: '65',
              manUdMyopiaRate: 0.6,
              manUdMyopiaStdCount: '39',
              manUnMyopiaRate: 0.3538,
              manUnMyopiaStdCount: '23',
              myopiaStdCount: '203',
              okLensStdCount: '54',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2022',
              udMyopiaRate: 0.6354,
              udMyopiaStdCount: '129',
              unMyopiaRate: 0.3004,
              unMyopiaStdCount: '61',
              womanCorrectMyopiaRate: 0.0625,
              womanCorrectMyopiaStdCount: '4',
              womanMyopiaStdCount: '64',
              womanUdMyopiaRate: 0.6562,
              womanUdMyopiaStdCount: '42',
              womanUnMyopiaRate: 0.2812,
              womanUnMyopiaStdCount: '18'
            }
          ],
          contactLensStdCount: '38',
          correctMyopiaRate: 0.064,
          correctMyopiaStdCount: '13',
          frameGlassesStdCount: '50',
          gradeId: '921830381248271',
          gradeName: '一年级',
          manCorrectMyopiaRate: 0.0461,
          manCorrectMyopiaStdCount: '3',
          manMyopiaStdCount: '65',
          manUdMyopiaRate: 0.6,
          manUdMyopiaStdCount: '39',
          manUnMyopiaRate: 0.3538,
          manUnMyopiaStdCount: '23',
          myopiaStdCount: '203',
          okLensStdCount: '54',
          otherRate: 0.0,
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2022',
          udMyopiaRate: 0.6354,
          udMyopiaStdCount: '129',
          unMyopiaRate: 0.3004,
          unMyopiaStdCount: '61',
          womanCorrectMyopiaRate: 0.0625,
          womanCorrectMyopiaStdCount: '4',
          womanMyopiaStdCount: '64',
          womanUdMyopiaRate: 0.6562,
          womanUdMyopiaStdCount: '42',
          womanUnMyopiaRate: 0.2812,
          womanUnMyopiaStdCount: '18'
        },
        {
          classMyopiaCorrectInfos: [
            {
              classId: '1282974993587968',
              className: '4',
              contactLensStdCount: '10',
              correctMyopiaRate: 0.0243,
              correctMyopiaStdCount: '1',
              frameGlassesStdCount: '12',
              gradeId: '921830381248272',
              gradeName: '二年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '10',
              manUdMyopiaRate: 0.5,
              manUdMyopiaStdCount: '5',
              manUnMyopiaRate: 0.5,
              manUnMyopiaStdCount: '5',
              myopiaStdCount: '41',
              okLensStdCount: '7',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2021',
              udMyopiaRate: 0.6829,
              udMyopiaStdCount: '28',
              unMyopiaRate: 0.2926,
              unMyopiaStdCount: '12',
              womanCorrectMyopiaRate: 0.0625,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '16',
              womanUdMyopiaRate: 0.6875,
              womanUdMyopiaStdCount: '11',
              womanUnMyopiaRate: 0.25,
              womanUnMyopiaStdCount: '4'
            },
            {
              classId: '1282974993579779',
              className: '2',
              contactLensStdCount: '10',
              correctMyopiaRate: 0.0697,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '14',
              gradeId: '921830381248272',
              gradeName: '二年级',
              manCorrectMyopiaRate: 0.0769,
              manCorrectMyopiaStdCount: '1',
              manMyopiaStdCount: '13',
              manUdMyopiaRate: 0.6923,
              manUdMyopiaStdCount: '9',
              manUnMyopiaRate: 0.2307,
              manUnMyopiaStdCount: '3',
              myopiaStdCount: '43',
              okLensStdCount: '12',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2021',
              udMyopiaRate: 0.7674,
              udMyopiaStdCount: '33',
              unMyopiaRate: 0.1627,
              unMyopiaStdCount: '7',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '17',
              womanUdMyopiaRate: 0.8823,
              womanUdMyopiaStdCount: '15',
              womanUnMyopiaRate: 0.1176,
              womanUnMyopiaStdCount: '2'
            },
            {
              classId: '1282974993579780',
              className: '3',
              contactLensStdCount: '7',
              correctMyopiaRate: 0.0731,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '14',
              gradeId: '921830381248272',
              gradeName: '二年级',
              manCorrectMyopiaRate: 0.125,
              manCorrectMyopiaStdCount: '2',
              manMyopiaStdCount: '16',
              manUdMyopiaRate: 0.5,
              manUdMyopiaStdCount: '8',
              manUnMyopiaRate: 0.375,
              manUnMyopiaStdCount: '6',
              myopiaStdCount: '41',
              okLensStdCount: '9',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2021',
              udMyopiaRate: 0.6585,
              udMyopiaStdCount: '27',
              unMyopiaRate: 0.2682,
              unMyopiaStdCount: '11',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '9',
              womanUdMyopiaRate: 0.7777,
              womanUdMyopiaStdCount: '7',
              womanUnMyopiaRate: 0.2222,
              womanUnMyopiaStdCount: '2'
            },
            {
              classId: '1282974993579778',
              className: '1',
              contactLensStdCount: '5',
              correctMyopiaRate: 0.027,
              correctMyopiaStdCount: '1',
              frameGlassesStdCount: '11',
              gradeId: '921830381248272',
              gradeName: '二年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '11',
              manUdMyopiaRate: 0.8181,
              manUdMyopiaStdCount: '9',
              manUnMyopiaRate: 0.1818,
              manUnMyopiaStdCount: '2',
              myopiaStdCount: '37',
              okLensStdCount: '12',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2021',
              udMyopiaRate: 0.7297,
              udMyopiaStdCount: '27',
              unMyopiaRate: 0.2432,
              unMyopiaStdCount: '9',
              womanCorrectMyopiaRate: 0.0666,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '15',
              womanUdMyopiaRate: 0.6666,
              womanUdMyopiaStdCount: '10',
              womanUnMyopiaRate: 0.2666,
              womanUnMyopiaStdCount: '4'
            },
            {
              classId: '1282974993587969',
              className: '5',
              contactLensStdCount: '14',
              correctMyopiaRate: 0.05,
              correctMyopiaStdCount: '2',
              frameGlassesStdCount: '10',
              gradeId: '921830381248272',
              gradeName: '二年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '12',
              manUdMyopiaRate: 1.0,
              manUdMyopiaStdCount: '12',
              manUnMyopiaRate: 0.0,
              manUnMyopiaStdCount: '0',
              myopiaStdCount: '40',
              okLensStdCount: '10',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2021',
              udMyopiaRate: 0.8,
              udMyopiaStdCount: '32',
              unMyopiaRate: 0.15,
              unMyopiaStdCount: '6',
              womanCorrectMyopiaRate: 0.125,
              womanCorrectMyopiaStdCount: '2',
              womanMyopiaStdCount: '16',
              womanUdMyopiaRate: 0.6875,
              womanUdMyopiaStdCount: '11',
              womanUnMyopiaRate: 0.1875,
              womanUnMyopiaStdCount: '3'
            },
            {
              classId: null,
              className: '合计',
              contactLensStdCount: '46',
              correctMyopiaRate: 0.0495,
              correctMyopiaStdCount: '10',
              frameGlassesStdCount: '61',
              gradeId: '921830381248272',
              gradeName: '二年级',
              manCorrectMyopiaRate: 0.0483,
              manCorrectMyopiaStdCount: '3',
              manMyopiaStdCount: '62',
              manUdMyopiaRate: 0.6935,
              manUdMyopiaStdCount: '43',
              manUnMyopiaRate: 0.258,
              manUnMyopiaStdCount: '16',
              myopiaStdCount: '202',
              okLensStdCount: '50',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2021',
              udMyopiaRate: 0.7277,
              udMyopiaStdCount: '147',
              unMyopiaRate: 0.2227,
              unMyopiaStdCount: '45',
              womanCorrectMyopiaRate: 0.0547,
              womanCorrectMyopiaStdCount: '4',
              womanMyopiaStdCount: '73',
              womanUdMyopiaRate: 0.7397,
              womanUdMyopiaStdCount: '54',
              womanUnMyopiaRate: 0.2054,
              womanUnMyopiaStdCount: '15'
            }
          ],
          contactLensStdCount: '46',
          correctMyopiaRate: 0.0495,
          correctMyopiaStdCount: '10',
          frameGlassesStdCount: '61',
          gradeId: '921830381248272',
          gradeName: '二年级',
          manCorrectMyopiaRate: 0.0483,
          manCorrectMyopiaStdCount: '3',
          manMyopiaStdCount: '62',
          manUdMyopiaRate: 0.6935,
          manUdMyopiaStdCount: '43',
          manUnMyopiaRate: 0.258,
          manUnMyopiaStdCount: '16',
          myopiaStdCount: '202',
          okLensStdCount: '50',
          otherRate: 0.0,
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2021',
          udMyopiaRate: 0.7277,
          udMyopiaStdCount: '147',
          unMyopiaRate: 0.2227,
          unMyopiaStdCount: '45',
          womanCorrectMyopiaRate: 0.0547,
          womanCorrectMyopiaStdCount: '4',
          womanMyopiaStdCount: '73',
          womanUdMyopiaRate: 0.7397,
          womanUdMyopiaStdCount: '54',
          womanUnMyopiaRate: 0.2054,
          womanUnMyopiaStdCount: '15'
        },
        {
          classMyopiaCorrectInfos: [
            {
              classId: '1282974993596160',
              className: '4',
              contactLensStdCount: '7',
              correctMyopiaRate: 0.0512,
              correctMyopiaStdCount: '2',
              frameGlassesStdCount: '7',
              gradeId: '921830381248273',
              gradeName: '三年级',
              manCorrectMyopiaRate: 0.0714,
              manCorrectMyopiaStdCount: '1',
              manMyopiaStdCount: '14',
              manUdMyopiaRate: 0.5714,
              manUdMyopiaStdCount: '8',
              manUnMyopiaRate: 0.3571,
              manUnMyopiaStdCount: '5',
              myopiaStdCount: '39',
              okLensStdCount: '14',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2020',
              udMyopiaRate: 0.6666,
              udMyopiaStdCount: '26',
              unMyopiaRate: 0.282,
              unMyopiaStdCount: '11',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '13',
              womanUdMyopiaRate: 0.6153,
              womanUdMyopiaStdCount: '8',
              womanUnMyopiaRate: 0.3846,
              womanUnMyopiaStdCount: '5'
            },
            {
              classId: '1282974993587972',
              className: '3',
              contactLensStdCount: '10',
              correctMyopiaRate: 0.0,
              correctMyopiaStdCount: '0',
              frameGlassesStdCount: '9',
              gradeId: '921830381248273',
              gradeName: '三年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '16',
              manUdMyopiaRate: 0.8125,
              manUdMyopiaStdCount: '13',
              manUnMyopiaRate: 0.1875,
              manUnMyopiaStdCount: '3',
              myopiaStdCount: '37',
              okLensStdCount: '10',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2020',
              udMyopiaRate: 0.7837,
              udMyopiaStdCount: '29',
              unMyopiaRate: 0.2162,
              unMyopiaStdCount: '8',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '14',
              womanUdMyopiaRate: 0.7857,
              womanUdMyopiaStdCount: '11',
              womanUnMyopiaRate: 0.2142,
              womanUnMyopiaStdCount: '3'
            },
            {
              classId: '1282974993587970',
              className: '1',
              contactLensStdCount: '7',
              correctMyopiaRate: 0.0714,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '17',
              gradeId: '921830381248273',
              gradeName: '三年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '13',
              manUdMyopiaRate: 0.8461,
              manUdMyopiaStdCount: '11',
              manUnMyopiaRate: 0.1538,
              manUnMyopiaStdCount: '2',
              myopiaStdCount: '42',
              okLensStdCount: '9',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2020',
              udMyopiaRate: 0.7142,
              udMyopiaStdCount: '30',
              unMyopiaRate: 0.2142,
              unMyopiaStdCount: '9',
              womanCorrectMyopiaRate: 0.2142,
              womanCorrectMyopiaStdCount: '3',
              womanMyopiaStdCount: '14',
              womanUdMyopiaRate: 0.4285,
              womanUdMyopiaStdCount: '6',
              womanUnMyopiaRate: 0.3571,
              womanUnMyopiaStdCount: '5'
            },
            {
              classId: '1282974993596161',
              className: '5',
              contactLensStdCount: '7',
              correctMyopiaRate: 0.027,
              correctMyopiaStdCount: '1',
              frameGlassesStdCount: '5',
              gradeId: '921830381248273',
              gradeName: '三年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '16',
              manUdMyopiaRate: 0.4375,
              manUdMyopiaStdCount: '7',
              manUnMyopiaRate: 0.5625,
              manUnMyopiaStdCount: '9',
              myopiaStdCount: '37',
              okLensStdCount: '12',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2020',
              udMyopiaRate: 0.6216,
              udMyopiaStdCount: '23',
              unMyopiaRate: 0.3513,
              unMyopiaStdCount: '13',
              womanCorrectMyopiaRate: 0.0833,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '12',
              womanUdMyopiaRate: 0.75,
              womanUdMyopiaStdCount: '9',
              womanUnMyopiaRate: 0.1666,
              womanUnMyopiaStdCount: '2'
            },
            {
              classId: '1282974993587971',
              className: '2',
              contactLensStdCount: '6',
              correctMyopiaRate: 0.0,
              correctMyopiaStdCount: '0',
              frameGlassesStdCount: '7',
              gradeId: '921830381248273',
              gradeName: '三年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '13',
              manUdMyopiaRate: 0.7692,
              manUdMyopiaStdCount: '10',
              manUnMyopiaRate: 0.2307,
              manUnMyopiaStdCount: '3',
              myopiaStdCount: '38',
              okLensStdCount: '18',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2020',
              udMyopiaRate: 0.8157,
              udMyopiaStdCount: '31',
              unMyopiaRate: 0.1842,
              unMyopiaStdCount: '7',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '11',
              womanUdMyopiaRate: 0.909,
              womanUdMyopiaStdCount: '10',
              womanUnMyopiaRate: 0.0909,
              womanUnMyopiaStdCount: '1'
            },
            {
              classId: null,
              className: '合计',
              contactLensStdCount: '37',
              correctMyopiaRate: 0.031,
              correctMyopiaStdCount: '6',
              frameGlassesStdCount: '45',
              gradeId: '921830381248273',
              gradeName: '三年级',
              manCorrectMyopiaRate: 0.0138,
              manCorrectMyopiaStdCount: '1',
              manMyopiaStdCount: '72',
              manUdMyopiaRate: 0.6805,
              manUdMyopiaStdCount: '49',
              manUnMyopiaRate: 0.3055,
              manUnMyopiaStdCount: '22',
              myopiaStdCount: '193',
              okLensStdCount: '63',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2020',
              udMyopiaRate: 0.7202,
              udMyopiaStdCount: '139',
              unMyopiaRate: 0.2487,
              unMyopiaStdCount: '48',
              womanCorrectMyopiaRate: 0.0625,
              womanCorrectMyopiaStdCount: '4',
              womanMyopiaStdCount: '64',
              womanUdMyopiaRate: 0.6875,
              womanUdMyopiaStdCount: '44',
              womanUnMyopiaRate: 0.25,
              womanUnMyopiaStdCount: '16'
            }
          ],
          contactLensStdCount: '37',
          correctMyopiaRate: 0.031,
          correctMyopiaStdCount: '6',
          frameGlassesStdCount: '45',
          gradeId: '921830381248273',
          gradeName: '三年级',
          manCorrectMyopiaRate: 0.0138,
          manCorrectMyopiaStdCount: '1',
          manMyopiaStdCount: '72',
          manUdMyopiaRate: 0.6805,
          manUdMyopiaStdCount: '49',
          manUnMyopiaRate: 0.3055,
          manUnMyopiaStdCount: '22',
          myopiaStdCount: '193',
          okLensStdCount: '63',
          otherRate: 0.0,
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2020',
          udMyopiaRate: 0.7202,
          udMyopiaStdCount: '139',
          unMyopiaRate: 0.2487,
          unMyopiaStdCount: '48',
          womanCorrectMyopiaRate: 0.0625,
          womanCorrectMyopiaStdCount: '4',
          womanMyopiaStdCount: '64',
          womanUdMyopiaRate: 0.6875,
          womanUdMyopiaStdCount: '44',
          womanUnMyopiaRate: 0.25,
          womanUnMyopiaStdCount: '16'
        },
        {
          classMyopiaCorrectInfos: [
            {
              classId: '1282974993596163',
              className: '2',
              contactLensStdCount: '11',
              correctMyopiaRate: 0.081,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '9',
              gradeId: '921830381248274',
              gradeName: '四年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '10',
              manUdMyopiaRate: 0.8,
              manUdMyopiaStdCount: '8',
              manUnMyopiaRate: 0.2,
              manUnMyopiaStdCount: '2',
              myopiaStdCount: '37',
              okLensStdCount: '8',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2019',
              udMyopiaRate: 0.6756,
              udMyopiaStdCount: '25',
              unMyopiaRate: 0.2432,
              unMyopiaStdCount: '9',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '10',
              womanUdMyopiaRate: 0.7,
              womanUdMyopiaStdCount: '7',
              womanUnMyopiaRate: 0.3,
              womanUnMyopiaStdCount: '3'
            },
            {
              classId: '1282974993596162',
              className: '1',
              contactLensStdCount: '12',
              correctMyopiaRate: 0.0277,
              correctMyopiaStdCount: '1',
              frameGlassesStdCount: '6',
              gradeId: '921830381248274',
              gradeName: '四年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '18',
              manUdMyopiaRate: 0.8888,
              manUdMyopiaStdCount: '16',
              manUnMyopiaRate: 0.1111,
              manUnMyopiaStdCount: '2',
              myopiaStdCount: '36',
              okLensStdCount: '11',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2019',
              udMyopiaRate: 0.7777,
              udMyopiaStdCount: '28',
              unMyopiaRate: 0.1944,
              unMyopiaStdCount: '7',
              womanCorrectMyopiaRate: 0.1111,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '9',
              womanUdMyopiaRate: 0.6666,
              womanUdMyopiaStdCount: '6',
              womanUnMyopiaRate: 0.2222,
              womanUnMyopiaStdCount: '2'
            },
            {
              classId: '1282974993604352',
              className: '4',
              contactLensStdCount: '9',
              correctMyopiaRate: 0.0731,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '13',
              gradeId: '921830381248274',
              gradeName: '四年级',
              manCorrectMyopiaRate: 0.2,
              manCorrectMyopiaStdCount: '3',
              manMyopiaStdCount: '15',
              manUdMyopiaRate: 0.7333,
              manUdMyopiaStdCount: '11',
              manUnMyopiaRate: 0.0666,
              manUnMyopiaStdCount: '1',
              myopiaStdCount: '41',
              okLensStdCount: '14',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2019',
              udMyopiaRate: 0.8048,
              udMyopiaStdCount: '33',
              unMyopiaRate: 0.1219,
              unMyopiaStdCount: '5',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '12',
              womanUdMyopiaRate: 0.6666,
              womanUdMyopiaStdCount: '8',
              womanUnMyopiaRate: 0.3333,
              womanUnMyopiaStdCount: '4'
            },
            {
              classId: '1282974993596164',
              className: '3',
              contactLensStdCount: '11',
              correctMyopiaRate: 0.0454,
              correctMyopiaStdCount: '2',
              frameGlassesStdCount: '13',
              gradeId: '921830381248274',
              gradeName: '四年级',
              manCorrectMyopiaRate: 0.0714,
              manCorrectMyopiaStdCount: '1',
              manMyopiaStdCount: '14',
              manUdMyopiaRate: 0.7857,
              manUdMyopiaStdCount: '11',
              manUnMyopiaRate: 0.1428,
              manUnMyopiaStdCount: '2',
              myopiaStdCount: '44',
              okLensStdCount: '11',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2019',
              udMyopiaRate: 0.75,
              udMyopiaStdCount: '33',
              unMyopiaRate: 0.2045,
              unMyopiaStdCount: '9',
              womanCorrectMyopiaRate: 0.0833,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '12',
              womanUdMyopiaRate: 0.6666,
              womanUdMyopiaStdCount: '8',
              womanUnMyopiaRate: 0.25,
              womanUnMyopiaStdCount: '3'
            },
            {
              classId: '1282974993604353',
              className: '5',
              contactLensStdCount: '5',
              correctMyopiaRate: 0.0238,
              correctMyopiaStdCount: '1',
              frameGlassesStdCount: '12',
              gradeId: '921830381248274',
              gradeName: '四年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '8',
              manUdMyopiaRate: 0.75,
              manUdMyopiaStdCount: '6',
              manUnMyopiaRate: 0.25,
              manUnMyopiaStdCount: '2',
              myopiaStdCount: '42',
              okLensStdCount: '15',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2019',
              udMyopiaRate: 0.738,
              udMyopiaStdCount: '31',
              unMyopiaRate: 0.238,
              unMyopiaStdCount: '10',
              womanCorrectMyopiaRate: 0.0526,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '19',
              womanUdMyopiaRate: 0.7368,
              womanUdMyopiaStdCount: '14',
              womanUnMyopiaRate: 0.2105,
              womanUnMyopiaStdCount: '4'
            },
            {
              classId: null,
              className: '合计',
              contactLensStdCount: '48',
              correctMyopiaRate: 0.05,
              correctMyopiaStdCount: '10',
              frameGlassesStdCount: '53',
              gradeId: '921830381248274',
              gradeName: '四年级',
              manCorrectMyopiaRate: 0.0615,
              manCorrectMyopiaStdCount: '4',
              manMyopiaStdCount: '65',
              manUdMyopiaRate: 0.8,
              manUdMyopiaStdCount: '52',
              manUnMyopiaRate: 0.1384,
              manUnMyopiaStdCount: '9',
              myopiaStdCount: '200',
              okLensStdCount: '59',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2019',
              udMyopiaRate: 0.75,
              udMyopiaStdCount: '150',
              unMyopiaRate: 0.2,
              unMyopiaStdCount: '40',
              womanCorrectMyopiaRate: 0.0483,
              womanCorrectMyopiaStdCount: '3',
              womanMyopiaStdCount: '62',
              womanUdMyopiaRate: 0.6935,
              womanUdMyopiaStdCount: '43',
              womanUnMyopiaRate: 0.258,
              womanUnMyopiaStdCount: '16'
            }
          ],
          contactLensStdCount: '48',
          correctMyopiaRate: 0.05,
          correctMyopiaStdCount: '10',
          frameGlassesStdCount: '53',
          gradeId: '921830381248274',
          gradeName: '四年级',
          manCorrectMyopiaRate: 0.0615,
          manCorrectMyopiaStdCount: '4',
          manMyopiaStdCount: '65',
          manUdMyopiaRate: 0.8,
          manUdMyopiaStdCount: '52',
          manUnMyopiaRate: 0.1384,
          manUnMyopiaStdCount: '9',
          myopiaStdCount: '200',
          okLensStdCount: '59',
          otherRate: 0.0,
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2019',
          udMyopiaRate: 0.75,
          udMyopiaStdCount: '150',
          unMyopiaRate: 0.2,
          unMyopiaStdCount: '40',
          womanCorrectMyopiaRate: 0.0483,
          womanCorrectMyopiaStdCount: '3',
          womanMyopiaStdCount: '62',
          womanUdMyopiaRate: 0.6935,
          womanUdMyopiaStdCount: '43',
          womanUnMyopiaRate: 0.258,
          womanUnMyopiaStdCount: '16'
        },
        {
          classMyopiaCorrectInfos: [
            {
              classId: '1282974993604354',
              className: '1',
              contactLensStdCount: '9',
              correctMyopiaRate: 0.0,
              correctMyopiaStdCount: '0',
              frameGlassesStdCount: '8',
              gradeId: '921830381248275',
              gradeName: '五年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '11',
              manUdMyopiaRate: 0.8181,
              manUdMyopiaStdCount: '9',
              manUnMyopiaRate: 0.1818,
              manUnMyopiaStdCount: '2',
              myopiaStdCount: '39',
              okLensStdCount: '9',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2018',
              udMyopiaRate: 0.6666,
              udMyopiaStdCount: '26',
              unMyopiaRate: 0.3333,
              unMyopiaStdCount: '13',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '15',
              womanUdMyopiaRate: 0.4666,
              womanUdMyopiaStdCount: '7',
              womanUnMyopiaRate: 0.5333,
              womanUnMyopiaStdCount: '8'
            },
            {
              classId: '1282974993612545',
              className: '4',
              contactLensStdCount: '7',
              correctMyopiaRate: 0.0731,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '12',
              gradeId: '921830381248275',
              gradeName: '五年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '7',
              manUdMyopiaRate: 0.8571,
              manUdMyopiaStdCount: '6',
              manUnMyopiaRate: 0.1428,
              manUnMyopiaStdCount: '1',
              myopiaStdCount: '41',
              okLensStdCount: '14',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2018',
              udMyopiaRate: 0.7317,
              udMyopiaStdCount: '30',
              unMyopiaRate: 0.1951,
              unMyopiaStdCount: '8',
              womanCorrectMyopiaRate: 0.1538,
              womanCorrectMyopiaStdCount: '2',
              womanMyopiaStdCount: '13',
              womanUdMyopiaRate: 0.7692,
              womanUdMyopiaStdCount: '10',
              womanUnMyopiaRate: 0.0769,
              womanUnMyopiaStdCount: '1'
            },
            {
              classId: '1282974993604355',
              className: '2',
              contactLensStdCount: '10',
              correctMyopiaRate: 0.081,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '7',
              gradeId: '921830381248275',
              gradeName: '五年级',
              manCorrectMyopiaRate: 0.0833,
              manCorrectMyopiaStdCount: '1',
              manMyopiaStdCount: '12',
              manUdMyopiaRate: 0.6666,
              manUdMyopiaStdCount: '8',
              manUnMyopiaRate: 0.25,
              manUnMyopiaStdCount: '3',
              myopiaStdCount: '37',
              okLensStdCount: '13',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2018',
              udMyopiaRate: 0.7297,
              udMyopiaStdCount: '27',
              unMyopiaRate: 0.1891,
              unMyopiaStdCount: '7',
              womanCorrectMyopiaRate: 0.0769,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '13',
              womanUdMyopiaRate: 0.6923,
              womanUdMyopiaStdCount: '9',
              womanUnMyopiaRate: 0.2307,
              womanUnMyopiaStdCount: '3'
            },
            {
              classId: '1282974993612546',
              className: '5',
              contactLensStdCount: '8',
              correctMyopiaRate: 0.05,
              correctMyopiaStdCount: '2',
              frameGlassesStdCount: '8',
              gradeId: '921830381248275',
              gradeName: '五年级',
              manCorrectMyopiaRate: 0.0666,
              manCorrectMyopiaStdCount: '1',
              manMyopiaStdCount: '15',
              manUdMyopiaRate: 0.9333,
              manUdMyopiaStdCount: '14',
              manUnMyopiaRate: 0.0,
              manUnMyopiaStdCount: '0',
              myopiaStdCount: '40',
              okLensStdCount: '17',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2018',
              udMyopiaRate: 0.775,
              udMyopiaStdCount: '31',
              unMyopiaRate: 0.175,
              unMyopiaStdCount: '7',
              womanCorrectMyopiaRate: 0.0833,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '12',
              womanUdMyopiaRate: 0.6666,
              womanUdMyopiaStdCount: '8',
              womanUnMyopiaRate: 0.25,
              womanUnMyopiaStdCount: '3'
            },
            {
              classId: '1282974993612544',
              className: '3',
              contactLensStdCount: '14',
              correctMyopiaRate: 0.0888,
              correctMyopiaStdCount: '4',
              frameGlassesStdCount: '8',
              gradeId: '921830381248275',
              gradeName: '五年级',
              manCorrectMyopiaRate: 0.1176,
              manCorrectMyopiaStdCount: '2',
              manMyopiaStdCount: '17',
              manUdMyopiaRate: 0.647,
              manUdMyopiaStdCount: '11',
              manUnMyopiaRate: 0.2352,
              manUnMyopiaStdCount: '4',
              myopiaStdCount: '45',
              okLensStdCount: '10',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2018',
              udMyopiaRate: 0.6222,
              udMyopiaStdCount: '28',
              unMyopiaRate: 0.2888,
              unMyopiaStdCount: '13',
              womanCorrectMyopiaRate: 0.0666,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '15',
              womanUdMyopiaRate: 0.6,
              womanUdMyopiaStdCount: '9',
              womanUnMyopiaRate: 0.3333,
              womanUnMyopiaStdCount: '5'
            },
            {
              classId: null,
              className: '合计',
              contactLensStdCount: '48',
              correctMyopiaRate: 0.0594,
              correctMyopiaStdCount: '12',
              frameGlassesStdCount: '43',
              gradeId: '921830381248275',
              gradeName: '五年级',
              manCorrectMyopiaRate: 0.0645,
              manCorrectMyopiaStdCount: '4',
              manMyopiaStdCount: '62',
              manUdMyopiaRate: 0.7741,
              manUdMyopiaStdCount: '48',
              manUnMyopiaRate: 0.1612,
              manUnMyopiaStdCount: '10',
              myopiaStdCount: '202',
              okLensStdCount: '63',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2018',
              udMyopiaRate: 0.7029,
              udMyopiaStdCount: '142',
              unMyopiaRate: 0.2376,
              unMyopiaStdCount: '48',
              womanCorrectMyopiaRate: 0.0735,
              womanCorrectMyopiaStdCount: '5',
              womanMyopiaStdCount: '68',
              womanUdMyopiaRate: 0.6323,
              womanUdMyopiaStdCount: '43',
              womanUnMyopiaRate: 0.2941,
              womanUnMyopiaStdCount: '20'
            }
          ],
          contactLensStdCount: '48',
          correctMyopiaRate: 0.0594,
          correctMyopiaStdCount: '12',
          frameGlassesStdCount: '43',
          gradeId: '921830381248275',
          gradeName: '五年级',
          manCorrectMyopiaRate: 0.0645,
          manCorrectMyopiaStdCount: '4',
          manMyopiaStdCount: '62',
          manUdMyopiaRate: 0.7741,
          manUdMyopiaStdCount: '48',
          manUnMyopiaRate: 0.1612,
          manUnMyopiaStdCount: '10',
          myopiaStdCount: '202',
          okLensStdCount: '63',
          otherRate: 0.0,
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2018',
          udMyopiaRate: 0.7029,
          udMyopiaStdCount: '142',
          unMyopiaRate: 0.2376,
          unMyopiaStdCount: '48',
          womanCorrectMyopiaRate: 0.0735,
          womanCorrectMyopiaStdCount: '5',
          womanMyopiaStdCount: '68',
          womanUdMyopiaRate: 0.6323,
          womanUdMyopiaStdCount: '43',
          womanUnMyopiaRate: 0.2941,
          womanUnMyopiaStdCount: '20'
        },
        {
          classMyopiaCorrectInfos: [
            {
              classId: '1282974993612548',
              className: '2',
              contactLensStdCount: '10',
              correctMyopiaRate: 0.0769,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '9',
              gradeId: '921830381248276',
              gradeName: '六年级',
              manCorrectMyopiaRate: 0.1111,
              manCorrectMyopiaStdCount: '1',
              manMyopiaStdCount: '9',
              manUdMyopiaRate: 0.8888,
              manUdMyopiaStdCount: '8',
              manUnMyopiaRate: 0.0,
              manUnMyopiaStdCount: '0',
              myopiaStdCount: '39',
              okLensStdCount: '11',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2017',
              udMyopiaRate: 0.6923,
              udMyopiaStdCount: '27',
              unMyopiaRate: 0.2307,
              unMyopiaStdCount: '9',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '15',
              womanUdMyopiaRate: 0.6,
              womanUdMyopiaStdCount: '9',
              womanUnMyopiaRate: 0.4,
              womanUnMyopiaStdCount: '6'
            },
            {
              classId: '1282974993620738',
              className: '5',
              contactLensStdCount: '8',
              correctMyopiaRate: 0.025,
              correctMyopiaStdCount: '1',
              frameGlassesStdCount: '11',
              gradeId: '921830381248276',
              gradeName: '六年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '14',
              manUdMyopiaRate: 0.7857,
              manUdMyopiaStdCount: '11',
              manUnMyopiaRate: 0.2142,
              manUnMyopiaStdCount: '3',
              myopiaStdCount: '40',
              okLensStdCount: '16',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2017',
              udMyopiaRate: 0.85,
              udMyopiaStdCount: '34',
              unMyopiaRate: 0.125,
              unMyopiaStdCount: '5',
              womanCorrectMyopiaRate: 0.0769,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '13',
              womanUdMyopiaRate: 0.8461,
              womanUdMyopiaStdCount: '11',
              womanUnMyopiaRate: 0.0769,
              womanUnMyopiaStdCount: '1'
            },
            {
              classId: '1282974993620737',
              className: '4',
              contactLensStdCount: '7',
              correctMyopiaRate: 0.0487,
              correctMyopiaStdCount: '2',
              frameGlassesStdCount: '15',
              gradeId: '921830381248276',
              gradeName: '六年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '9',
              manUdMyopiaRate: 0.5555,
              manUdMyopiaStdCount: '5',
              manUnMyopiaRate: 0.4444,
              manUnMyopiaStdCount: '4',
              myopiaStdCount: '41',
              okLensStdCount: '6',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2017',
              udMyopiaRate: 0.6341,
              udMyopiaStdCount: '26',
              unMyopiaRate: 0.317,
              unMyopiaStdCount: '13',
              womanCorrectMyopiaRate: 0.0714,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '14',
              womanUdMyopiaRate: 0.5714,
              womanUdMyopiaStdCount: '8',
              womanUnMyopiaRate: 0.3571,
              womanUnMyopiaStdCount: '5'
            },
            {
              classId: '1282974993620736',
              className: '3',
              contactLensStdCount: '13',
              correctMyopiaRate: 0.027,
              correctMyopiaStdCount: '1',
              frameGlassesStdCount: '4',
              gradeId: '921830381248276',
              gradeName: '六年级',
              manCorrectMyopiaRate: 0.0,
              manCorrectMyopiaStdCount: '0',
              manMyopiaStdCount: '9',
              manUdMyopiaRate: 0.7777,
              manUdMyopiaStdCount: '7',
              manUnMyopiaRate: 0.2222,
              manUnMyopiaStdCount: '2',
              myopiaStdCount: '37',
              okLensStdCount: '13',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2017',
              udMyopiaRate: 0.7837,
              udMyopiaStdCount: '29',
              unMyopiaRate: 0.1891,
              unMyopiaStdCount: '7',
              womanCorrectMyopiaRate: 0.0555,
              womanCorrectMyopiaStdCount: '1',
              womanMyopiaStdCount: '18',
              womanUdMyopiaRate: 0.7777,
              womanUdMyopiaStdCount: '14',
              womanUnMyopiaRate: 0.1666,
              womanUnMyopiaStdCount: '3'
            },
            {
              classId: '1282974993612547',
              className: '1',
              contactLensStdCount: '11',
              correctMyopiaRate: 0.0714,
              correctMyopiaStdCount: '3',
              frameGlassesStdCount: '7',
              gradeId: '921830381248276',
              gradeName: '六年级',
              manCorrectMyopiaRate: 0.1666,
              manCorrectMyopiaStdCount: '2',
              manMyopiaStdCount: '12',
              manUdMyopiaRate: 0.5833,
              manUdMyopiaStdCount: '7',
              manUnMyopiaRate: 0.25,
              manUnMyopiaStdCount: '3',
              myopiaStdCount: '42',
              okLensStdCount: '15',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2017',
              udMyopiaRate: 0.7142,
              udMyopiaStdCount: '30',
              unMyopiaRate: 0.2142,
              unMyopiaStdCount: '9',
              womanCorrectMyopiaRate: 0.0,
              womanCorrectMyopiaStdCount: '0',
              womanMyopiaStdCount: '18',
              womanUdMyopiaRate: 0.8888,
              womanUdMyopiaStdCount: '16',
              womanUnMyopiaRate: 0.1111,
              womanUnMyopiaStdCount: '2'
            },
            {
              classId: null,
              className: '合计',
              contactLensStdCount: '49',
              correctMyopiaRate: 0.0502,
              correctMyopiaStdCount: '10',
              frameGlassesStdCount: '46',
              gradeId: '921830381248276',
              gradeName: '六年级',
              manCorrectMyopiaRate: 0.0566,
              manCorrectMyopiaStdCount: '3',
              manMyopiaStdCount: '53',
              manUdMyopiaRate: 0.7169,
              manUdMyopiaStdCount: '38',
              manUnMyopiaRate: 0.2264,
              manUnMyopiaStdCount: '12',
              myopiaStdCount: '199',
              okLensStdCount: '61',
              otherRate: 0.0,
              prefix: 2,
              prefixName: '小学',
              schoolId: '1280811255480064',
              schoolName: '西工大锦园实验小学',
              studentMyopiaCorrectInfos: null,
              studyYear: '2017',
              udMyopiaRate: 0.7336,
              udMyopiaStdCount: '146',
              unMyopiaRate: 0.216,
              unMyopiaStdCount: '43',
              womanCorrectMyopiaRate: 0.0384,
              womanCorrectMyopiaStdCount: '3',
              womanMyopiaStdCount: '78',
              womanUdMyopiaRate: 0.7435,
              womanUdMyopiaStdCount: '58',
              womanUnMyopiaRate: 0.2179,
              womanUnMyopiaStdCount: '17'
            }
          ],
          contactLensStdCount: '49',
          correctMyopiaRate: 0.0502,
          correctMyopiaStdCount: '10',
          frameGlassesStdCount: '46',
          gradeId: '921830381248276',
          gradeName: '六年级',
          manCorrectMyopiaRate: 0.0566,
          manCorrectMyopiaStdCount: '3',
          manMyopiaStdCount: '53',
          manUdMyopiaRate: 0.7169,
          manUdMyopiaStdCount: '38',
          manUnMyopiaRate: 0.2264,
          manUnMyopiaStdCount: '12',
          myopiaStdCount: '199',
          okLensStdCount: '61',
          otherRate: 0.0,
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280811255480064',
          schoolName: '西工大锦园实验小学',
          studyYear: '2017',
          udMyopiaRate: 0.7336,
          udMyopiaStdCount: '146',
          unMyopiaRate: 0.216,
          unMyopiaStdCount: '43',
          womanCorrectMyopiaRate: 0.0384,
          womanCorrectMyopiaStdCount: '3',
          womanMyopiaStdCount: '78',
          womanUdMyopiaRate: 0.7435,
          womanUdMyopiaStdCount: '58',
          womanUnMyopiaRate: 0.2179,
          womanUnMyopiaStdCount: '17'
        }
      ])
  },
  {
    url: '/basic-api/eyesight/report/school/getClassMyopiaInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          classMyopiaInfoVOS: [
            {
              classId: '1282974993571584',
              className: '1',
              effectiveStdCount: '29',
              gradeName: '一年级',
              highMyopiaRate: 0.6206,
              highMyopiaStdCount: '18',
              manEffectiveStdCount: '11',
              manHighMyopiaRate: 0.3636,
              manHighMyopiaStdCount: '4',
              manMyopiaRate: 0.5454,
              manMyopiaStdCount: '6',
              manStdCount: '11',
              myopiaRate: 0.7586,
              myopiaStdCount: '22',
              noMyopiaRate: 0.2413,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.5454,
                  manMyopiaStdCount: '6',
                  myopiaRate: 0.7586,
                  myopiaStdCount: '22',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8888,
                  womanMyopiaStdCount: '16'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0344,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.1818,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1034,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.3636,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.6206,
                  myopiaStdCount: '18',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7777,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.4545,
                  manMyopiaStdCount: '5',
                  myopiaRate: 0.2413,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1111,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '29',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '18',
              womanHighMyopiaRate: 0.7777,
              womanHighMyopiaStdCount: '14',
              womanMyopiaRate: 0.8888,
              womanMyopiaStdCount: '16',
              womanStdCount: '18'
            },
            {
              classId: '1282974993571585',
              className: '2',
              effectiveStdCount: '29',
              gradeName: '一年级',
              highMyopiaRate: 0.7241,
              highMyopiaStdCount: '21',
              manEffectiveStdCount: '18',
              manHighMyopiaRate: 0.7777,
              manHighMyopiaStdCount: '14',
              manMyopiaRate: 0.8333,
              manMyopiaStdCount: '15',
              manStdCount: '18',
              myopiaRate: 0.8275,
              myopiaStdCount: '24',
              noMyopiaRate: 0.1724,
              noMyopiaStdCount: '5',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8333,
                  manMyopiaStdCount: '15',
                  myopiaRate: 0.8275,
                  myopiaStdCount: '24',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8181,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.0555,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.1034,
                  myopiaStdCount: '3',
                  myopiaType: 1,
                  womanMyopiaRate: 0.1818,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.7777,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.7241,
                  myopiaStdCount: '21',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6363,
                  womanMyopiaStdCount: '7'
                },
                {
                  manMyopiaRate: 0.1666,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.1724,
                  myopiaStdCount: '5',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1818,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '29',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '11',
              womanHighMyopiaRate: 0.6363,
              womanHighMyopiaStdCount: '7',
              womanMyopiaRate: 0.8181,
              womanMyopiaStdCount: '9',
              womanStdCount: '11'
            },
            {
              classId: '1282974993571586',
              className: '3',
              effectiveStdCount: '33',
              gradeName: '一年级',
              highMyopiaRate: 0.7272,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '18',
              manHighMyopiaRate: 0.7222,
              manHighMyopiaStdCount: '13',
              manMyopiaRate: 0.9444,
              manMyopiaStdCount: '17',
              manStdCount: '18',
              myopiaRate: 0.8787,
              myopiaStdCount: '29',
              noMyopiaRate: 0.1212,
              noMyopiaStdCount: '4',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.9444,
                  manMyopiaStdCount: '17',
                  myopiaRate: 0.8787,
                  myopiaStdCount: '29',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0606,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0909,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0666,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7222,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.7272,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7333,
                  womanMyopiaStdCount: '11'
                },
                {
                  manMyopiaRate: 0.0555,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.1212,
                  myopiaStdCount: '4',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2,
                  womanMyopiaStdCount: '3'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.7333,
              womanHighMyopiaStdCount: '11',
              womanMyopiaRate: 0.8,
              womanMyopiaStdCount: '12',
              womanStdCount: '15'
            },
            {
              classId: '1282974993579776',
              className: '4',
              effectiveStdCount: '33',
              gradeName: '一年级',
              highMyopiaRate: 0.6969,
              highMyopiaStdCount: '23',
              manEffectiveStdCount: '18',
              manHighMyopiaRate: 0.7777,
              manHighMyopiaStdCount: '14',
              manMyopiaRate: 0.8888,
              manMyopiaStdCount: '16',
              manStdCount: '18',
              myopiaRate: 0.8181,
              myopiaStdCount: '27',
              noMyopiaRate: 0.1818,
              noMyopiaStdCount: '6',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8888,
                  manMyopiaStdCount: '16',
                  myopiaRate: 0.8181,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7333,
                  womanMyopiaStdCount: '11'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0303,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0666,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0909,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0666,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7777,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.6969,
                  myopiaStdCount: '23',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1818,
                  myopiaStdCount: '6',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2666,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.6,
              womanHighMyopiaStdCount: '9',
              womanMyopiaRate: 0.7333,
              womanMyopiaStdCount: '11',
              womanStdCount: '15'
            },
            {
              classId: '1282974993579777',
              className: '5',
              effectiveStdCount: '36',
              gradeName: '一年级',
              highMyopiaRate: 0.6388,
              highMyopiaStdCount: '23',
              manEffectiveStdCount: '18',
              manHighMyopiaRate: 0.4444,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.6111,
              manMyopiaStdCount: '11',
              manStdCount: '18',
              myopiaRate: 0.75,
              myopiaStdCount: '27',
              noMyopiaRate: 0.25,
              noMyopiaStdCount: '9',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.6111,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.75,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8888,
                  womanMyopiaStdCount: '16'
                },
                {
                  manMyopiaRate: 0.0555,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0277,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0833,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.4444,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.6388,
                  myopiaStdCount: '23',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8333,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.3888,
                  manMyopiaStdCount: '7',
                  myopiaRate: 0.25,
                  myopiaStdCount: '9',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1111,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '36',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '18',
              womanHighMyopiaRate: 0.8333,
              womanHighMyopiaStdCount: '15',
              womanMyopiaRate: 0.8888,
              womanMyopiaStdCount: '16',
              womanStdCount: '18'
            },
            {
              classId: null,
              className: '合计',
              effectiveStdCount: '160',
              gradeName: '一年级',
              highMyopiaRate: 0.6812,
              highMyopiaStdCount: '109',
              manEffectiveStdCount: '83',
              manHighMyopiaRate: 0.6385,
              manHighMyopiaStdCount: '53',
              manMyopiaRate: 0.7831,
              manMyopiaStdCount: '65',
              manStdCount: '83',
              myopiaRate: 0.8062,
              myopiaStdCount: '129',
              noMyopiaRate: null,
              noMyopiaStdCount: '31',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7831,
                  manMyopiaStdCount: '65',
                  myopiaRate: 0.8062,
                  myopiaStdCount: '129',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8311,
                  womanMyopiaStdCount: '64'
                },
                {
                  manMyopiaRate: 0.0481,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.05,
                  myopiaStdCount: '8',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0519,
                  womanMyopiaStdCount: '4'
                },
                {
                  manMyopiaRate: 0.0963,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.075,
                  myopiaStdCount: '12',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0519,
                  womanMyopiaStdCount: '4'
                },
                {
                  manMyopiaRate: 0.6385,
                  manMyopiaStdCount: '53',
                  myopiaRate: 0.6812,
                  myopiaStdCount: '109',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7272,
                  womanMyopiaStdCount: '56'
                },
                {
                  manMyopiaRate: 0.2168,
                  manMyopiaStdCount: '18',
                  myopiaRate: 0.1937,
                  myopiaStdCount: '31',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1688,
                  womanMyopiaStdCount: '13'
                }
              ],
              stdCount: '160',
              studentMyopiaInfos: null,
              studyYear: '2022',
              womanEffectiveStdCount: '77',
              womanHighMyopiaRate: 0.7272,
              womanHighMyopiaStdCount: '56',
              womanMyopiaRate: 0.8311,
              womanMyopiaStdCount: '64',
              womanStdCount: '77'
            }
          ],
          effectiveStdCount: '160',
          gradeId: '921830381248271',
          gradeName: '一年级',
          highMyopiaRate: 0.6812,
          highMyopiaStdCount: '109',
          manEffectiveStdCount: '83',
          manHighMyopiaRate: 0.6385,
          manHighMyopiaStdCount: '53',
          manMyopiaRate: 0.7831,
          manMyopiaStdCount: '65',
          manStdCount: '83',
          maxClass: {
            classId: '1282974993571586',
            className: '3',
            effectiveStdCount: '33',
            gradeName: '一年级',
            highMyopiaRate: 0.7272,
            highMyopiaStdCount: '24',
            manEffectiveStdCount: '18',
            manHighMyopiaRate: 0.7222,
            manHighMyopiaStdCount: '13',
            manMyopiaRate: 0.9444,
            manMyopiaStdCount: '17',
            manStdCount: '18',
            myopiaRate: 0.8787,
            myopiaStdCount: '29',
            noMyopiaRate: 0.1212,
            noMyopiaStdCount: '4',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.9444,
                manMyopiaStdCount: '17',
                myopiaRate: 0.8787,
                myopiaStdCount: '29',
                myopiaType: 0,
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1111,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0606,
                myopiaStdCount: '2',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.1111,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0909,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.0666,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.7222,
                manMyopiaStdCount: '13',
                myopiaRate: 0.7272,
                myopiaStdCount: '24',
                myopiaType: 3,
                womanMyopiaRate: 0.7333,
                womanMyopiaStdCount: '11'
              },
              {
                manMyopiaRate: 0.0555,
                manMyopiaStdCount: '1',
                myopiaRate: 0.1212,
                myopiaStdCount: '4',
                myopiaType: 4,
                womanMyopiaRate: 0.2,
                womanMyopiaStdCount: '3'
              }
            ],
            stdCount: '33',
            studentMyopiaInfos: null,
            studyYear: '2022',
            womanEffectiveStdCount: '15',
            womanHighMyopiaRate: 0.7333,
            womanHighMyopiaStdCount: '11',
            womanMyopiaRate: 0.8,
            womanMyopiaStdCount: '12',
            womanStdCount: '15'
          },
          maxHighClass: {
            classId: '1282974993571586',
            className: '3',
            effectiveStdCount: '33',
            gradeName: '一年级',
            highMyopiaRate: 0.7272,
            highMyopiaStdCount: '24',
            manEffectiveStdCount: '18',
            manHighMyopiaRate: 0.7222,
            manHighMyopiaStdCount: '13',
            manMyopiaRate: 0.9444,
            manMyopiaStdCount: '17',
            manStdCount: '18',
            myopiaRate: 0.8787,
            myopiaStdCount: '29',
            noMyopiaRate: 0.1212,
            noMyopiaStdCount: '4',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.9444,
                manMyopiaStdCount: '17',
                myopiaRate: 0.8787,
                myopiaStdCount: '29',
                myopiaType: 0,
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1111,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0606,
                myopiaStdCount: '2',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.1111,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0909,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.0666,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.7222,
                manMyopiaStdCount: '13',
                myopiaRate: 0.7272,
                myopiaStdCount: '24',
                myopiaType: 3,
                womanMyopiaRate: 0.7333,
                womanMyopiaStdCount: '11'
              },
              {
                manMyopiaRate: 0.0555,
                manMyopiaStdCount: '1',
                myopiaRate: 0.1212,
                myopiaStdCount: '4',
                myopiaType: 4,
                womanMyopiaRate: 0.2,
                womanMyopiaStdCount: '3'
              }
            ],
            stdCount: '33',
            studentMyopiaInfos: null,
            studyYear: '2022',
            womanEffectiveStdCount: '15',
            womanHighMyopiaRate: 0.7333,
            womanHighMyopiaStdCount: '11',
            womanMyopiaRate: 0.8,
            womanMyopiaStdCount: '12',
            womanStdCount: '15'
          },
          minClass: {
            classId: '1282974993579777',
            className: '5',
            effectiveStdCount: '36',
            gradeName: '一年级',
            highMyopiaRate: 0.6388,
            highMyopiaStdCount: '23',
            manEffectiveStdCount: '18',
            manHighMyopiaRate: 0.4444,
            manHighMyopiaStdCount: '8',
            manMyopiaRate: 0.6111,
            manMyopiaStdCount: '11',
            manStdCount: '18',
            myopiaRate: 0.75,
            myopiaStdCount: '27',
            noMyopiaRate: 0.25,
            noMyopiaStdCount: '9',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.6111,
                manMyopiaStdCount: '11',
                myopiaRate: 0.75,
                myopiaStdCount: '27',
                myopiaType: 0,
                womanMyopiaRate: 0.8888,
                womanMyopiaStdCount: '16'
              },
              {
                manMyopiaRate: 0.0555,
                manMyopiaStdCount: '1',
                myopiaRate: 0.0277,
                myopiaStdCount: '1',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.1111,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0833,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.0555,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.4444,
                manMyopiaStdCount: '8',
                myopiaRate: 0.6388,
                myopiaStdCount: '23',
                myopiaType: 3,
                womanMyopiaRate: 0.8333,
                womanMyopiaStdCount: '15'
              },
              {
                manMyopiaRate: 0.3888,
                manMyopiaStdCount: '7',
                myopiaRate: 0.25,
                myopiaStdCount: '9',
                myopiaType: 4,
                womanMyopiaRate: 0.1111,
                womanMyopiaStdCount: '2'
              }
            ],
            stdCount: '36',
            studentMyopiaInfos: null,
            studyYear: '2022',
            womanEffectiveStdCount: '18',
            womanHighMyopiaRate: 0.8333,
            womanHighMyopiaStdCount: '15',
            womanMyopiaRate: 0.8888,
            womanMyopiaStdCount: '16',
            womanStdCount: '18'
          },
          minHighClass: {
            classId: '1282974993571584',
            className: '1',
            effectiveStdCount: '29',
            gradeName: '一年级',
            highMyopiaRate: 0.6206,
            highMyopiaStdCount: '18',
            manEffectiveStdCount: '11',
            manHighMyopiaRate: 0.3636,
            manHighMyopiaStdCount: '4',
            manMyopiaRate: 0.5454,
            manMyopiaStdCount: '6',
            manStdCount: '11',
            myopiaRate: 0.7586,
            myopiaStdCount: '22',
            noMyopiaRate: 0.2413,
            noMyopiaStdCount: '7',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.5454,
                manMyopiaStdCount: '6',
                myopiaRate: 0.7586,
                myopiaStdCount: '22',
                myopiaType: 0,
                womanMyopiaRate: 0.8888,
                womanMyopiaStdCount: '16'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0344,
                myopiaStdCount: '1',
                myopiaType: 1,
                womanMyopiaRate: 0.0555,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.1818,
                manMyopiaStdCount: '2',
                myopiaRate: 0.1034,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.0555,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.3636,
                manMyopiaStdCount: '4',
                myopiaRate: 0.6206,
                myopiaStdCount: '18',
                myopiaType: 3,
                womanMyopiaRate: 0.7777,
                womanMyopiaStdCount: '14'
              },
              {
                manMyopiaRate: 0.4545,
                manMyopiaStdCount: '5',
                myopiaRate: 0.2413,
                myopiaStdCount: '7',
                myopiaType: 4,
                womanMyopiaRate: 0.1111,
                womanMyopiaStdCount: '2'
              }
            ],
            stdCount: '29',
            studentMyopiaInfos: null,
            studyYear: '2022',
            womanEffectiveStdCount: '18',
            womanHighMyopiaRate: 0.7777,
            womanHighMyopiaStdCount: '14',
            womanMyopiaRate: 0.8888,
            womanMyopiaStdCount: '16',
            womanStdCount: '18'
          },
          myopiaRate: 0.8062,
          myopiaStdCount: '129',
          noMyopiaStdCount: '31',
          noMyopiaStdRate: null,
          prefixName: '小学',
          schoolName: '西工大锦园实验小学',
          sexMyopiaTypeInfo: [
            {
              manMyopiaRate: 0.7831,
              manMyopiaStdCount: '65',
              myopiaRate: 0.8062,
              myopiaStdCount: '129',
              myopiaType: 0,
              womanMyopiaRate: 0.8311,
              womanMyopiaStdCount: '64'
            },
            {
              manMyopiaRate: 0.0481,
              manMyopiaStdCount: '4',
              myopiaRate: 0.05,
              myopiaStdCount: '8',
              myopiaType: 1,
              womanMyopiaRate: 0.0519,
              womanMyopiaStdCount: '4'
            },
            {
              manMyopiaRate: 0.0963,
              manMyopiaStdCount: '8',
              myopiaRate: 0.075,
              myopiaStdCount: '12',
              myopiaType: 2,
              womanMyopiaRate: 0.0519,
              womanMyopiaStdCount: '4'
            },
            {
              manMyopiaRate: 0.6385,
              manMyopiaStdCount: '53',
              myopiaRate: 0.6812,
              myopiaStdCount: '109',
              myopiaType: 3,
              womanMyopiaRate: 0.7272,
              womanMyopiaStdCount: '56'
            },
            {
              manMyopiaRate: 0.2168,
              manMyopiaStdCount: '18',
              myopiaRate: 0.1937,
              myopiaStdCount: '31',
              myopiaType: 4,
              womanMyopiaRate: 0.1688,
              womanMyopiaStdCount: '13'
            }
          ],
          stdCount: '160',
          studyYear: '2022',
          womanEffectiveStdCount: '77',
          womanHighMyopiaRate: 0.7272,
          womanHighMyopiaStdCount: '56',
          womanMyopiaRate: 0.8311,
          womanMyopiaStdCount: '64',
          womanStdCount: '77'
        },
        {
          classMyopiaInfoVOS: [
            {
              classId: '1282974993579778',
              className: '1',
              effectiveStdCount: '34',
              gradeName: '二年级',
              highMyopiaRate: 0.6176,
              highMyopiaStdCount: '21',
              manEffectiveStdCount: '13',
              manHighMyopiaRate: 0.6923,
              manHighMyopiaStdCount: '9',
              manMyopiaRate: 0.8461,
              manMyopiaStdCount: '11',
              manStdCount: '13',
              myopiaRate: 0.7647,
              myopiaStdCount: '26',
              noMyopiaRate: 0.2352,
              noMyopiaStdCount: '8',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8461,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.7647,
                  myopiaStdCount: '26',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7142,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.1538,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1176,
                  myopiaStdCount: '4',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0952,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0294,
                  myopiaStdCount: '1',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0476,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.6923,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.6176,
                  myopiaStdCount: '21',
                  myopiaType: 3,
                  womanMyopiaRate: 0.5714,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1538,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.2352,
                  myopiaStdCount: '8',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2857,
                  womanMyopiaStdCount: '6'
                }
              ],
              stdCount: '34',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '21',
              womanHighMyopiaRate: 0.5714,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.7142,
              womanMyopiaStdCount: '15',
              womanStdCount: '21'
            },
            {
              classId: '1282974993579779',
              className: '2',
              effectiveStdCount: '35',
              gradeName: '二年级',
              highMyopiaRate: 0.7142,
              highMyopiaStdCount: '25',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.647,
              manHighMyopiaStdCount: '11',
              manMyopiaRate: 0.7647,
              manMyopiaStdCount: '13',
              manStdCount: '17',
              myopiaRate: 0.8571,
              myopiaStdCount: '30',
              noMyopiaRate: 0.1428,
              noMyopiaStdCount: '5',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7647,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.8571,
                  myopiaStdCount: '30',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9444,
                  womanMyopiaStdCount: '17'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 1,
                  womanMyopiaRate: 0.1111,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0571,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.647,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.7142,
                  myopiaStdCount: '25',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7777,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.2352,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.1428,
                  myopiaStdCount: '5',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '35',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '18',
              womanHighMyopiaRate: 0.7777,
              womanHighMyopiaStdCount: '14',
              womanMyopiaRate: 0.9444,
              womanMyopiaStdCount: '17',
              womanStdCount: '18'
            },
            {
              classId: '1282974993579780',
              className: '3',
              effectiveStdCount: '33',
              gradeName: '二年级',
              highMyopiaRate: 0.6666,
              highMyopiaStdCount: '22',
              manEffectiveStdCount: '20',
              manHighMyopiaRate: 0.65,
              manHighMyopiaStdCount: '13',
              manMyopiaRate: 0.8,
              manMyopiaStdCount: '16',
              manStdCount: '20',
              myopiaRate: 0.7575,
              myopiaStdCount: '25',
              noMyopiaRate: 0.2424,
              noMyopiaStdCount: '8',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8,
                  manMyopiaStdCount: '16',
                  myopiaRate: 0.7575,
                  myopiaStdCount: '25',
                  myopiaType: 0,
                  womanMyopiaRate: 0.6923,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.1,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0606,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.05,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0303,
                  myopiaStdCount: '1',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.65,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.6666,
                  myopiaStdCount: '22',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6923,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.2,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2424,
                  myopiaStdCount: '8',
                  myopiaType: 4,
                  womanMyopiaRate: 0.3076,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '13',
              womanHighMyopiaRate: 0.6923,
              womanHighMyopiaStdCount: '9',
              womanMyopiaRate: 0.6923,
              womanMyopiaStdCount: '9',
              womanStdCount: '13'
            },
            {
              classId: '1282974993587968',
              className: '4',
              effectiveStdCount: '33',
              gradeName: '二年级',
              highMyopiaRate: 0.6969,
              highMyopiaStdCount: '23',
              manEffectiveStdCount: '13',
              manHighMyopiaRate: 0.6923,
              manHighMyopiaStdCount: '9',
              manMyopiaRate: 0.7692,
              manMyopiaStdCount: '10',
              manStdCount: '13',
              myopiaRate: 0.7878,
              myopiaStdCount: '26',
              noMyopiaRate: 0.2121,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7692,
                  manMyopiaStdCount: '10',
                  myopiaRate: 0.7878,
                  myopiaStdCount: '26',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '16'
                },
                {
                  manMyopiaRate: 0.0769,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0606,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.05,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0303,
                  myopiaStdCount: '1',
                  myopiaType: 2,
                  womanMyopiaRate: 0.05,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.6923,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.6969,
                  myopiaStdCount: '23',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.2307,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2121,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '20',
              womanHighMyopiaRate: 0.7,
              womanHighMyopiaStdCount: '14',
              womanMyopiaRate: 0.8,
              womanMyopiaStdCount: '16',
              womanStdCount: '20'
            },
            {
              classId: '1282974993587969',
              className: '5',
              effectiveStdCount: '37',
              gradeName: '二年级',
              highMyopiaRate: 0.6216,
              highMyopiaStdCount: '23',
              manEffectiveStdCount: '15',
              manHighMyopiaRate: 0.6666,
              manHighMyopiaStdCount: '10',
              manMyopiaRate: 0.8,
              manMyopiaStdCount: '12',
              manStdCount: '15',
              myopiaRate: 0.7567,
              myopiaStdCount: '28',
              noMyopiaRate: 0.2432,
              noMyopiaStdCount: '9',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.7567,
                  myopiaStdCount: '28',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7272,
                  womanMyopiaStdCount: '16'
                },
                {
                  manMyopiaRate: 0.0666,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.027,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0666,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.1081,
                  myopiaStdCount: '4',
                  myopiaType: 2,
                  womanMyopiaRate: 0.1363,
                  womanMyopiaStdCount: '3'
                },
                {
                  manMyopiaRate: 0.6666,
                  manMyopiaStdCount: '10',
                  myopiaRate: 0.6216,
                  myopiaStdCount: '23',
                  myopiaType: 3,
                  womanMyopiaRate: 0.5909,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.2,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2432,
                  myopiaStdCount: '9',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2727,
                  womanMyopiaStdCount: '6'
                }
              ],
              stdCount: '37',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '22',
              womanHighMyopiaRate: 0.5909,
              womanHighMyopiaStdCount: '13',
              womanMyopiaRate: 0.7272,
              womanMyopiaStdCount: '16',
              womanStdCount: '22'
            },
            {
              classId: null,
              className: '合计',
              effectiveStdCount: '172',
              gradeName: '二年级',
              highMyopiaRate: 0.6627,
              highMyopiaStdCount: '114',
              manEffectiveStdCount: '78',
              manHighMyopiaRate: 0.6666,
              manHighMyopiaStdCount: '52',
              manMyopiaRate: 0.7948,
              manMyopiaStdCount: '62',
              manStdCount: '78',
              myopiaRate: 0.7848,
              myopiaStdCount: '135',
              noMyopiaRate: null,
              noMyopiaStdCount: '37',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7948,
                  manMyopiaStdCount: '62',
                  myopiaRate: 0.7848,
                  myopiaStdCount: '135',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7765,
                  womanMyopiaStdCount: '73'
                },
                {
                  manMyopiaRate: 0.0897,
                  manMyopiaStdCount: '7',
                  myopiaRate: 0.0697,
                  myopiaStdCount: '12',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0531,
                  womanMyopiaStdCount: '5'
                },
                {
                  manMyopiaRate: 0.0384,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.0523,
                  myopiaStdCount: '9',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0638,
                  womanMyopiaStdCount: '6'
                },
                {
                  manMyopiaRate: 0.6666,
                  manMyopiaStdCount: '52',
                  myopiaRate: 0.6627,
                  myopiaStdCount: '114',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6595,
                  womanMyopiaStdCount: '62'
                },
                {
                  manMyopiaRate: 0.2051,
                  manMyopiaStdCount: '16',
                  myopiaRate: 0.2151,
                  myopiaStdCount: '37',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2234,
                  womanMyopiaStdCount: '21'
                }
              ],
              stdCount: '172',
              studentMyopiaInfos: null,
              studyYear: '2021',
              womanEffectiveStdCount: '94',
              womanHighMyopiaRate: 0.6595,
              womanHighMyopiaStdCount: '62',
              womanMyopiaRate: 0.7765,
              womanMyopiaStdCount: '73',
              womanStdCount: '94'
            }
          ],
          effectiveStdCount: '172',
          gradeId: '921830381248272',
          gradeName: '二年级',
          highMyopiaRate: 0.6627,
          highMyopiaStdCount: '114',
          manEffectiveStdCount: '78',
          manHighMyopiaRate: 0.6666,
          manHighMyopiaStdCount: '52',
          manMyopiaRate: 0.7948,
          manMyopiaStdCount: '62',
          manStdCount: '78',
          maxClass: {
            classId: '1282974993579779',
            className: '2',
            effectiveStdCount: '35',
            gradeName: '二年级',
            highMyopiaRate: 0.7142,
            highMyopiaStdCount: '25',
            manEffectiveStdCount: '17',
            manHighMyopiaRate: 0.647,
            manHighMyopiaStdCount: '11',
            manMyopiaRate: 0.7647,
            manMyopiaStdCount: '13',
            manStdCount: '17',
            myopiaRate: 0.8571,
            myopiaStdCount: '30',
            noMyopiaRate: 0.1428,
            noMyopiaStdCount: '5',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7647,
                manMyopiaStdCount: '13',
                myopiaRate: 0.8571,
                myopiaStdCount: '30',
                myopiaType: 0,
                womanMyopiaRate: 0.9444,
                womanMyopiaStdCount: '17'
              },
              {
                manMyopiaRate: 0.0588,
                manMyopiaStdCount: '1',
                myopiaRate: 0.0857,
                myopiaStdCount: '3',
                myopiaType: 1,
                womanMyopiaRate: 0.1111,
                womanMyopiaStdCount: '2'
              },
              {
                manMyopiaRate: 0.0588,
                manMyopiaStdCount: '1',
                myopiaRate: 0.0571,
                myopiaStdCount: '2',
                myopiaType: 2,
                womanMyopiaRate: 0.0555,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.647,
                manMyopiaStdCount: '11',
                myopiaRate: 0.7142,
                myopiaStdCount: '25',
                myopiaType: 3,
                womanMyopiaRate: 0.7777,
                womanMyopiaStdCount: '14'
              },
              {
                manMyopiaRate: 0.2352,
                manMyopiaStdCount: '4',
                myopiaRate: 0.1428,
                myopiaStdCount: '5',
                myopiaType: 4,
                womanMyopiaRate: 0.0555,
                womanMyopiaStdCount: '1'
              }
            ],
            stdCount: '35',
            studentMyopiaInfos: null,
            studyYear: '2021',
            womanEffectiveStdCount: '18',
            womanHighMyopiaRate: 0.7777,
            womanHighMyopiaStdCount: '14',
            womanMyopiaRate: 0.9444,
            womanMyopiaStdCount: '17',
            womanStdCount: '18'
          },
          maxHighClass: {
            classId: '1282974993579779',
            className: '2',
            effectiveStdCount: '35',
            gradeName: '二年级',
            highMyopiaRate: 0.7142,
            highMyopiaStdCount: '25',
            manEffectiveStdCount: '17',
            manHighMyopiaRate: 0.647,
            manHighMyopiaStdCount: '11',
            manMyopiaRate: 0.7647,
            manMyopiaStdCount: '13',
            manStdCount: '17',
            myopiaRate: 0.8571,
            myopiaStdCount: '30',
            noMyopiaRate: 0.1428,
            noMyopiaStdCount: '5',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7647,
                manMyopiaStdCount: '13',
                myopiaRate: 0.8571,
                myopiaStdCount: '30',
                myopiaType: 0,
                womanMyopiaRate: 0.9444,
                womanMyopiaStdCount: '17'
              },
              {
                manMyopiaRate: 0.0588,
                manMyopiaStdCount: '1',
                myopiaRate: 0.0857,
                myopiaStdCount: '3',
                myopiaType: 1,
                womanMyopiaRate: 0.1111,
                womanMyopiaStdCount: '2'
              },
              {
                manMyopiaRate: 0.0588,
                manMyopiaStdCount: '1',
                myopiaRate: 0.0571,
                myopiaStdCount: '2',
                myopiaType: 2,
                womanMyopiaRate: 0.0555,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.647,
                manMyopiaStdCount: '11',
                myopiaRate: 0.7142,
                myopiaStdCount: '25',
                myopiaType: 3,
                womanMyopiaRate: 0.7777,
                womanMyopiaStdCount: '14'
              },
              {
                manMyopiaRate: 0.2352,
                manMyopiaStdCount: '4',
                myopiaRate: 0.1428,
                myopiaStdCount: '5',
                myopiaType: 4,
                womanMyopiaRate: 0.0555,
                womanMyopiaStdCount: '1'
              }
            ],
            stdCount: '35',
            studentMyopiaInfos: null,
            studyYear: '2021',
            womanEffectiveStdCount: '18',
            womanHighMyopiaRate: 0.7777,
            womanHighMyopiaStdCount: '14',
            womanMyopiaRate: 0.9444,
            womanMyopiaStdCount: '17',
            womanStdCount: '18'
          },
          minClass: {
            classId: '1282974993587969',
            className: '5',
            effectiveStdCount: '37',
            gradeName: '二年级',
            highMyopiaRate: 0.6216,
            highMyopiaStdCount: '23',
            manEffectiveStdCount: '15',
            manHighMyopiaRate: 0.6666,
            manHighMyopiaStdCount: '10',
            manMyopiaRate: 0.8,
            manMyopiaStdCount: '12',
            manStdCount: '15',
            myopiaRate: 0.7567,
            myopiaStdCount: '28',
            noMyopiaRate: 0.2432,
            noMyopiaStdCount: '9',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8,
                manMyopiaStdCount: '12',
                myopiaRate: 0.7567,
                myopiaStdCount: '28',
                myopiaType: 0,
                womanMyopiaRate: 0.7272,
                womanMyopiaStdCount: '16'
              },
              {
                manMyopiaRate: 0.0666,
                manMyopiaStdCount: '1',
                myopiaRate: 0.027,
                myopiaStdCount: '1',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.0666,
                manMyopiaStdCount: '1',
                myopiaRate: 0.1081,
                myopiaStdCount: '4',
                myopiaType: 2,
                womanMyopiaRate: 0.1363,
                womanMyopiaStdCount: '3'
              },
              {
                manMyopiaRate: 0.6666,
                manMyopiaStdCount: '10',
                myopiaRate: 0.6216,
                myopiaStdCount: '23',
                myopiaType: 3,
                womanMyopiaRate: 0.5909,
                womanMyopiaStdCount: '13'
              },
              {
                manMyopiaRate: 0.2,
                manMyopiaStdCount: '3',
                myopiaRate: 0.2432,
                myopiaStdCount: '9',
                myopiaType: 4,
                womanMyopiaRate: 0.2727,
                womanMyopiaStdCount: '6'
              }
            ],
            stdCount: '37',
            studentMyopiaInfos: null,
            studyYear: '2021',
            womanEffectiveStdCount: '22',
            womanHighMyopiaRate: 0.5909,
            womanHighMyopiaStdCount: '13',
            womanMyopiaRate: 0.7272,
            womanMyopiaStdCount: '16',
            womanStdCount: '22'
          },
          minHighClass: {
            classId: '1282974993579778',
            className: '1',
            effectiveStdCount: '34',
            gradeName: '二年级',
            highMyopiaRate: 0.6176,
            highMyopiaStdCount: '21',
            manEffectiveStdCount: '13',
            manHighMyopiaRate: 0.6923,
            manHighMyopiaStdCount: '9',
            manMyopiaRate: 0.8461,
            manMyopiaStdCount: '11',
            manStdCount: '13',
            myopiaRate: 0.7647,
            myopiaStdCount: '26',
            noMyopiaRate: 0.2352,
            noMyopiaStdCount: '8',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8461,
                manMyopiaStdCount: '11',
                myopiaRate: 0.7647,
                myopiaStdCount: '26',
                myopiaType: 0,
                womanMyopiaRate: 0.7142,
                womanMyopiaStdCount: '15'
              },
              {
                manMyopiaRate: 0.1538,
                manMyopiaStdCount: '2',
                myopiaRate: 0.1176,
                myopiaStdCount: '4',
                myopiaType: 1,
                womanMyopiaRate: 0.0952,
                womanMyopiaStdCount: '2'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0294,
                myopiaStdCount: '1',
                myopiaType: 2,
                womanMyopiaRate: 0.0476,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.6923,
                manMyopiaStdCount: '9',
                myopiaRate: 0.6176,
                myopiaStdCount: '21',
                myopiaType: 3,
                womanMyopiaRate: 0.5714,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1538,
                manMyopiaStdCount: '2',
                myopiaRate: 0.2352,
                myopiaStdCount: '8',
                myopiaType: 4,
                womanMyopiaRate: 0.2857,
                womanMyopiaStdCount: '6'
              }
            ],
            stdCount: '34',
            studentMyopiaInfos: null,
            studyYear: '2021',
            womanEffectiveStdCount: '21',
            womanHighMyopiaRate: 0.5714,
            womanHighMyopiaStdCount: '12',
            womanMyopiaRate: 0.7142,
            womanMyopiaStdCount: '15',
            womanStdCount: '21'
          },
          myopiaRate: 0.7848,
          myopiaStdCount: '135',
          noMyopiaStdCount: '37',
          noMyopiaStdRate: null,
          prefixName: '小学',
          schoolName: '西工大锦园实验小学',
          sexMyopiaTypeInfo: [
            {
              manMyopiaRate: 0.7948,
              manMyopiaStdCount: '62',
              myopiaRate: 0.7848,
              myopiaStdCount: '135',
              myopiaType: 0,
              womanMyopiaRate: 0.7765,
              womanMyopiaStdCount: '73'
            },
            {
              manMyopiaRate: 0.0897,
              manMyopiaStdCount: '7',
              myopiaRate: 0.0697,
              myopiaStdCount: '12',
              myopiaType: 1,
              womanMyopiaRate: 0.0531,
              womanMyopiaStdCount: '5'
            },
            {
              manMyopiaRate: 0.0384,
              manMyopiaStdCount: '3',
              myopiaRate: 0.0523,
              myopiaStdCount: '9',
              myopiaType: 2,
              womanMyopiaRate: 0.0638,
              womanMyopiaStdCount: '6'
            },
            {
              manMyopiaRate: 0.6666,
              manMyopiaStdCount: '52',
              myopiaRate: 0.6627,
              myopiaStdCount: '114',
              myopiaType: 3,
              womanMyopiaRate: 0.6595,
              womanMyopiaStdCount: '62'
            },
            {
              manMyopiaRate: 0.2051,
              manMyopiaStdCount: '16',
              myopiaRate: 0.2151,
              myopiaStdCount: '37',
              myopiaType: 4,
              womanMyopiaRate: 0.2234,
              womanMyopiaStdCount: '21'
            }
          ],
          stdCount: '172',
          studyYear: '2021',
          womanEffectiveStdCount: '94',
          womanHighMyopiaRate: 0.6595,
          womanHighMyopiaStdCount: '62',
          womanMyopiaRate: 0.7765,
          womanMyopiaStdCount: '73',
          womanStdCount: '94'
        },
        {
          classMyopiaInfoVOS: [
            {
              classId: '1282974993587970',
              className: '1',
              effectiveStdCount: '35',
              gradeName: '三年级',
              highMyopiaRate: 0.6857,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.7058,
              manHighMyopiaStdCount: '12',
              manMyopiaRate: 0.7647,
              manMyopiaStdCount: '13',
              manStdCount: '17',
              myopiaRate: 0.7714,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2285,
              noMyopiaStdCount: '8',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7647,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.7714,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7777,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0285,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0571,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7058,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.6857,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6666,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.2352,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2285,
                  myopiaStdCount: '8',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2222,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '35',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '18',
              womanHighMyopiaRate: 0.6666,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.7777,
              womanMyopiaStdCount: '14',
              womanStdCount: '18'
            },
            {
              classId: '1282974993587971',
              className: '2',
              effectiveStdCount: '33',
              gradeName: '三年级',
              highMyopiaRate: 0.5454,
              highMyopiaStdCount: '18',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.5294,
              manHighMyopiaStdCount: '9',
              manMyopiaRate: 0.7647,
              manMyopiaStdCount: '13',
              manStdCount: '17',
              myopiaRate: 0.7272,
              myopiaStdCount: '24',
              noMyopiaRate: 0.2727,
              noMyopiaStdCount: '9',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7647,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.7272,
                  myopiaStdCount: '24',
                  myopiaType: 0,
                  womanMyopiaRate: 0.6875,
                  womanMyopiaStdCount: '11'
                },
                {
                  manMyopiaRate: 0.0588,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0606,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.1764,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.1212,
                  myopiaStdCount: '4',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.5294,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.5454,
                  myopiaStdCount: '18',
                  myopiaType: 3,
                  womanMyopiaRate: 0.5625,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.2352,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2727,
                  myopiaStdCount: '9',
                  myopiaType: 4,
                  womanMyopiaRate: 0.3125,
                  womanMyopiaStdCount: '5'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '16',
              womanHighMyopiaRate: 0.5625,
              womanHighMyopiaStdCount: '9',
              womanMyopiaRate: 0.6875,
              womanMyopiaStdCount: '11',
              womanStdCount: '16'
            },
            {
              classId: '1282974993587972',
              className: '3',
              effectiveStdCount: '39',
              gradeName: '三年级',
              highMyopiaRate: 0.6153,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '21',
              manHighMyopiaRate: 0.5714,
              manHighMyopiaStdCount: '12',
              manMyopiaRate: 0.7619,
              manMyopiaStdCount: '16',
              manStdCount: '21',
              myopiaRate: 0.7692,
              myopiaStdCount: '30',
              noMyopiaRate: 0.2307,
              noMyopiaStdCount: '9',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7619,
                  manMyopiaStdCount: '16',
                  myopiaRate: 0.7692,
                  myopiaStdCount: '30',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7777,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.0952,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0769,
                  myopiaStdCount: '3',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.0952,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0769,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0555,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.5714,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.6153,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6666,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.238,
                  manMyopiaStdCount: '5',
                  myopiaRate: 0.2307,
                  myopiaStdCount: '9',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2222,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '39',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '18',
              womanHighMyopiaRate: 0.6666,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.7777,
              womanMyopiaStdCount: '14',
              womanStdCount: '18'
            },
            {
              classId: '1282974993596160',
              className: '4',
              effectiveStdCount: '34',
              gradeName: '三年级',
              highMyopiaRate: 0.7058,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.7058,
              manHighMyopiaStdCount: '12',
              manMyopiaRate: 0.8235,
              manMyopiaStdCount: '14',
              manStdCount: '17',
              myopiaRate: 0.7941,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2058,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8235,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.7941,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7647,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1176,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0882,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0588,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7058,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.7058,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7058,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1764,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2058,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2352,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '34',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '17',
              womanHighMyopiaRate: 0.7058,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.7647,
              womanMyopiaStdCount: '13',
              womanStdCount: '17'
            },
            {
              classId: '1282974993596161',
              className: '5',
              effectiveStdCount: '38',
              gradeName: '三年级',
              highMyopiaRate: 0.6842,
              highMyopiaStdCount: '26',
              manEffectiveStdCount: '23',
              manHighMyopiaRate: 0.6086,
              manHighMyopiaStdCount: '14',
              manMyopiaRate: 0.6956,
              manMyopiaStdCount: '16',
              manStdCount: '23',
              myopiaRate: 0.7368,
              myopiaStdCount: '28',
              noMyopiaRate: 0.2631,
              noMyopiaStdCount: '10',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.6956,
                  manMyopiaStdCount: '16',
                  myopiaRate: 0.7368,
                  myopiaStdCount: '28',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0869,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0526,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.6086,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.6842,
                  myopiaStdCount: '26',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.3043,
                  manMyopiaStdCount: '7',
                  myopiaRate: 0.2631,
                  myopiaStdCount: '10',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2,
                  womanMyopiaStdCount: '3'
                }
              ],
              stdCount: '38',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.8,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.8,
              womanMyopiaStdCount: '12',
              womanStdCount: '15'
            },
            {
              classId: null,
              className: '合计',
              effectiveStdCount: '179',
              gradeName: '三年级',
              highMyopiaRate: 0.648,
              highMyopiaStdCount: '116',
              manEffectiveStdCount: '95',
              manHighMyopiaRate: 0.621,
              manHighMyopiaStdCount: '59',
              manMyopiaRate: 0.7578,
              manMyopiaStdCount: '72',
              manStdCount: '95',
              myopiaRate: 0.7597,
              myopiaStdCount: '136',
              noMyopiaRate: null,
              noMyopiaStdCount: '43',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7578,
                  manMyopiaStdCount: '72',
                  myopiaRate: 0.7597,
                  myopiaStdCount: '136',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7619,
                  womanMyopiaStdCount: '64'
                },
                {
                  manMyopiaRate: 0.0315,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.0335,
                  myopiaStdCount: '6',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0357,
                  womanMyopiaStdCount: '3'
                },
                {
                  manMyopiaRate: 0.1052,
                  manMyopiaStdCount: '10',
                  myopiaRate: 0.0782,
                  myopiaStdCount: '14',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0476,
                  womanMyopiaStdCount: '4'
                },
                {
                  manMyopiaRate: 0.621,
                  manMyopiaStdCount: '59',
                  myopiaRate: 0.648,
                  myopiaStdCount: '116',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6785,
                  womanMyopiaStdCount: '57'
                },
                {
                  manMyopiaRate: 0.2421,
                  manMyopiaStdCount: '23',
                  myopiaRate: 0.2402,
                  myopiaStdCount: '43',
                  myopiaType: 4,
                  womanMyopiaRate: 0.238,
                  womanMyopiaStdCount: '20'
                }
              ],
              stdCount: '179',
              studentMyopiaInfos: null,
              studyYear: '2020',
              womanEffectiveStdCount: '84',
              womanHighMyopiaRate: 0.6785,
              womanHighMyopiaStdCount: '57',
              womanMyopiaRate: 0.7619,
              womanMyopiaStdCount: '64',
              womanStdCount: '84'
            }
          ],
          effectiveStdCount: '179',
          gradeId: '921830381248273',
          gradeName: '三年级',
          highMyopiaRate: 0.648,
          highMyopiaStdCount: '116',
          manEffectiveStdCount: '95',
          manHighMyopiaRate: 0.621,
          manHighMyopiaStdCount: '59',
          manMyopiaRate: 0.7578,
          manMyopiaStdCount: '72',
          manStdCount: '95',
          maxClass: {
            classId: '1282974993596160',
            className: '4',
            effectiveStdCount: '34',
            gradeName: '三年级',
            highMyopiaRate: 0.7058,
            highMyopiaStdCount: '24',
            manEffectiveStdCount: '17',
            manHighMyopiaRate: 0.7058,
            manHighMyopiaStdCount: '12',
            manMyopiaRate: 0.8235,
            manMyopiaStdCount: '14',
            manStdCount: '17',
            myopiaRate: 0.7941,
            myopiaStdCount: '27',
            noMyopiaRate: 0.2058,
            noMyopiaStdCount: '7',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8235,
                manMyopiaStdCount: '14',
                myopiaRate: 0.7941,
                myopiaStdCount: '27',
                myopiaType: 0,
                womanMyopiaRate: 0.7647,
                womanMyopiaStdCount: '13'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0,
                myopiaStdCount: '0',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.1176,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0882,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.0588,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.7058,
                manMyopiaStdCount: '12',
                myopiaRate: 0.7058,
                myopiaStdCount: '24',
                myopiaType: 3,
                womanMyopiaRate: 0.7058,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1764,
                manMyopiaStdCount: '3',
                myopiaRate: 0.2058,
                myopiaStdCount: '7',
                myopiaType: 4,
                womanMyopiaRate: 0.2352,
                womanMyopiaStdCount: '4'
              }
            ],
            stdCount: '34',
            studentMyopiaInfos: null,
            studyYear: '2020',
            womanEffectiveStdCount: '17',
            womanHighMyopiaRate: 0.7058,
            womanHighMyopiaStdCount: '12',
            womanMyopiaRate: 0.7647,
            womanMyopiaStdCount: '13',
            womanStdCount: '17'
          },
          maxHighClass: {
            classId: '1282974993596160',
            className: '4',
            effectiveStdCount: '34',
            gradeName: '三年级',
            highMyopiaRate: 0.7058,
            highMyopiaStdCount: '24',
            manEffectiveStdCount: '17',
            manHighMyopiaRate: 0.7058,
            manHighMyopiaStdCount: '12',
            manMyopiaRate: 0.8235,
            manMyopiaStdCount: '14',
            manStdCount: '17',
            myopiaRate: 0.7941,
            myopiaStdCount: '27',
            noMyopiaRate: 0.2058,
            noMyopiaStdCount: '7',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8235,
                manMyopiaStdCount: '14',
                myopiaRate: 0.7941,
                myopiaStdCount: '27',
                myopiaType: 0,
                womanMyopiaRate: 0.7647,
                womanMyopiaStdCount: '13'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0,
                myopiaStdCount: '0',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.1176,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0882,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.0588,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.7058,
                manMyopiaStdCount: '12',
                myopiaRate: 0.7058,
                myopiaStdCount: '24',
                myopiaType: 3,
                womanMyopiaRate: 0.7058,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1764,
                manMyopiaStdCount: '3',
                myopiaRate: 0.2058,
                myopiaStdCount: '7',
                myopiaType: 4,
                womanMyopiaRate: 0.2352,
                womanMyopiaStdCount: '4'
              }
            ],
            stdCount: '34',
            studentMyopiaInfos: null,
            studyYear: '2020',
            womanEffectiveStdCount: '17',
            womanHighMyopiaRate: 0.7058,
            womanHighMyopiaStdCount: '12',
            womanMyopiaRate: 0.7647,
            womanMyopiaStdCount: '13',
            womanStdCount: '17'
          },
          minClass: {
            classId: '1282974993587971',
            className: '2',
            effectiveStdCount: '33',
            gradeName: '三年级',
            highMyopiaRate: 0.5454,
            highMyopiaStdCount: '18',
            manEffectiveStdCount: '17',
            manHighMyopiaRate: 0.5294,
            manHighMyopiaStdCount: '9',
            manMyopiaRate: 0.7647,
            manMyopiaStdCount: '13',
            manStdCount: '17',
            myopiaRate: 0.7272,
            myopiaStdCount: '24',
            noMyopiaRate: 0.2727,
            noMyopiaStdCount: '9',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7647,
                manMyopiaStdCount: '13',
                myopiaRate: 0.7272,
                myopiaStdCount: '24',
                myopiaType: 0,
                womanMyopiaRate: 0.6875,
                womanMyopiaStdCount: '11'
              },
              {
                manMyopiaRate: 0.0588,
                manMyopiaStdCount: '1',
                myopiaRate: 0.0606,
                myopiaStdCount: '2',
                myopiaType: 1,
                womanMyopiaRate: 0.0625,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.1764,
                manMyopiaStdCount: '3',
                myopiaRate: 0.1212,
                myopiaStdCount: '4',
                myopiaType: 2,
                womanMyopiaRate: 0.0625,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.5294,
                manMyopiaStdCount: '9',
                myopiaRate: 0.5454,
                myopiaStdCount: '18',
                myopiaType: 3,
                womanMyopiaRate: 0.5625,
                womanMyopiaStdCount: '9'
              },
              {
                manMyopiaRate: 0.2352,
                manMyopiaStdCount: '4',
                myopiaRate: 0.2727,
                myopiaStdCount: '9',
                myopiaType: 4,
                womanMyopiaRate: 0.3125,
                womanMyopiaStdCount: '5'
              }
            ],
            stdCount: '33',
            studentMyopiaInfos: null,
            studyYear: '2020',
            womanEffectiveStdCount: '16',
            womanHighMyopiaRate: 0.5625,
            womanHighMyopiaStdCount: '9',
            womanMyopiaRate: 0.6875,
            womanMyopiaStdCount: '11',
            womanStdCount: '16'
          },
          minHighClass: {
            classId: '1282974993587971',
            className: '2',
            effectiveStdCount: '33',
            gradeName: '三年级',
            highMyopiaRate: 0.5454,
            highMyopiaStdCount: '18',
            manEffectiveStdCount: '17',
            manHighMyopiaRate: 0.5294,
            manHighMyopiaStdCount: '9',
            manMyopiaRate: 0.7647,
            manMyopiaStdCount: '13',
            manStdCount: '17',
            myopiaRate: 0.7272,
            myopiaStdCount: '24',
            noMyopiaRate: 0.2727,
            noMyopiaStdCount: '9',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7647,
                manMyopiaStdCount: '13',
                myopiaRate: 0.7272,
                myopiaStdCount: '24',
                myopiaType: 0,
                womanMyopiaRate: 0.6875,
                womanMyopiaStdCount: '11'
              },
              {
                manMyopiaRate: 0.0588,
                manMyopiaStdCount: '1',
                myopiaRate: 0.0606,
                myopiaStdCount: '2',
                myopiaType: 1,
                womanMyopiaRate: 0.0625,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.1764,
                manMyopiaStdCount: '3',
                myopiaRate: 0.1212,
                myopiaStdCount: '4',
                myopiaType: 2,
                womanMyopiaRate: 0.0625,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.5294,
                manMyopiaStdCount: '9',
                myopiaRate: 0.5454,
                myopiaStdCount: '18',
                myopiaType: 3,
                womanMyopiaRate: 0.5625,
                womanMyopiaStdCount: '9'
              },
              {
                manMyopiaRate: 0.2352,
                manMyopiaStdCount: '4',
                myopiaRate: 0.2727,
                myopiaStdCount: '9',
                myopiaType: 4,
                womanMyopiaRate: 0.3125,
                womanMyopiaStdCount: '5'
              }
            ],
            stdCount: '33',
            studentMyopiaInfos: null,
            studyYear: '2020',
            womanEffectiveStdCount: '16',
            womanHighMyopiaRate: 0.5625,
            womanHighMyopiaStdCount: '9',
            womanMyopiaRate: 0.6875,
            womanMyopiaStdCount: '11',
            womanStdCount: '16'
          },
          myopiaRate: 0.7597,
          myopiaStdCount: '136',
          noMyopiaStdCount: '43',
          noMyopiaStdRate: null,
          prefixName: '小学',
          schoolName: '西工大锦园实验小学',
          sexMyopiaTypeInfo: [
            {
              manMyopiaRate: 0.7578,
              manMyopiaStdCount: '72',
              myopiaRate: 0.7597,
              myopiaStdCount: '136',
              myopiaType: 0,
              womanMyopiaRate: 0.7619,
              womanMyopiaStdCount: '64'
            },
            {
              manMyopiaRate: 0.0315,
              manMyopiaStdCount: '3',
              myopiaRate: 0.0335,
              myopiaStdCount: '6',
              myopiaType: 1,
              womanMyopiaRate: 0.0357,
              womanMyopiaStdCount: '3'
            },
            {
              manMyopiaRate: 0.1052,
              manMyopiaStdCount: '10',
              myopiaRate: 0.0782,
              myopiaStdCount: '14',
              myopiaType: 2,
              womanMyopiaRate: 0.0476,
              womanMyopiaStdCount: '4'
            },
            {
              manMyopiaRate: 0.621,
              manMyopiaStdCount: '59',
              myopiaRate: 0.648,
              myopiaStdCount: '116',
              myopiaType: 3,
              womanMyopiaRate: 0.6785,
              womanMyopiaStdCount: '57'
            },
            {
              manMyopiaRate: 0.2421,
              manMyopiaStdCount: '23',
              myopiaRate: 0.2402,
              myopiaStdCount: '43',
              myopiaType: 4,
              womanMyopiaRate: 0.238,
              womanMyopiaStdCount: '20'
            }
          ],
          stdCount: '179',
          studyYear: '2020',
          womanEffectiveStdCount: '84',
          womanHighMyopiaRate: 0.6785,
          womanHighMyopiaStdCount: '57',
          womanMyopiaRate: 0.7619,
          womanMyopiaStdCount: '64',
          womanStdCount: '84'
        },
        {
          classMyopiaInfoVOS: [
            {
              classId: '1282974993596162',
              className: '1',
              effectiveStdCount: '37',
              gradeName: '四年级',
              highMyopiaRate: 0.7027,
              highMyopiaStdCount: '26',
              manEffectiveStdCount: '22',
              manHighMyopiaRate: 0.7727,
              manHighMyopiaStdCount: '17',
              manMyopiaRate: 0.8181,
              manMyopiaStdCount: '18',
              manStdCount: '22',
              myopiaRate: 0.7297,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2702,
              noMyopiaStdCount: '10',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8181,
                  manMyopiaStdCount: '18',
                  myopiaRate: 0.7297,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.6,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0454,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.027,
                  myopiaStdCount: '1',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.7727,
                  manMyopiaStdCount: '17',
                  myopiaRate: 0.7027,
                  myopiaStdCount: '26',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.1818,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2702,
                  myopiaStdCount: '10',
                  myopiaType: 4,
                  womanMyopiaRate: 0.4,
                  womanMyopiaStdCount: '6'
                }
              ],
              stdCount: '37',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.6,
              womanHighMyopiaStdCount: '9',
              womanMyopiaRate: 0.6,
              womanMyopiaStdCount: '9',
              womanStdCount: '15'
            },
            {
              classId: '1282974993596163',
              className: '2',
              effectiveStdCount: '26',
              gradeName: '四年级',
              highMyopiaRate: 0.6538,
              highMyopiaStdCount: '17',
              manEffectiveStdCount: '14',
              manHighMyopiaRate: 0.5714,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.7142,
              manMyopiaStdCount: '10',
              manStdCount: '14',
              myopiaRate: 0.7692,
              myopiaStdCount: '20',
              noMyopiaRate: 0.2307,
              noMyopiaStdCount: '6',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7142,
                  manMyopiaStdCount: '10',
                  myopiaRate: 0.7692,
                  myopiaStdCount: '20',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8333,
                  womanMyopiaStdCount: '10'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0384,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0833,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.1428,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0769,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.5714,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.6538,
                  myopiaStdCount: '17',
                  myopiaType: 3,
                  womanMyopiaRate: 0.75,
                  womanMyopiaStdCount: '9'
                },
                {
                  manMyopiaRate: 0.2857,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2307,
                  myopiaStdCount: '6',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1666,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '26',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '12',
              womanHighMyopiaRate: 0.75,
              womanHighMyopiaStdCount: '9',
              womanMyopiaRate: 0.8333,
              womanMyopiaStdCount: '10',
              womanStdCount: '12'
            },
            {
              classId: '1282974993596164',
              className: '3',
              effectiveStdCount: '30',
              gradeName: '四年级',
              highMyopiaRate: 0.6333,
              highMyopiaStdCount: '19',
              manEffectiveStdCount: '16',
              manHighMyopiaRate: 0.6875,
              manHighMyopiaStdCount: '11',
              manMyopiaRate: 0.875,
              manMyopiaStdCount: '14',
              manStdCount: '16',
              myopiaRate: 0.8666,
              myopiaStdCount: '26',
              noMyopiaRate: 0.1333,
              noMyopiaStdCount: '4',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.875,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.8666,
                  myopiaStdCount: '26',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8571,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0333,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0714,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.1875,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2,
                  myopiaStdCount: '6',
                  myopiaType: 2,
                  womanMyopiaRate: 0.2142,
                  womanMyopiaStdCount: '3'
                },
                {
                  manMyopiaRate: 0.6875,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.6333,
                  myopiaStdCount: '19',
                  myopiaType: 3,
                  womanMyopiaRate: 0.5714,
                  womanMyopiaStdCount: '8'
                },
                {
                  manMyopiaRate: 0.125,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1333,
                  myopiaStdCount: '4',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1428,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '30',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '14',
              womanHighMyopiaRate: 0.5714,
              womanHighMyopiaStdCount: '8',
              womanMyopiaRate: 0.8571,
              womanMyopiaStdCount: '12',
              womanStdCount: '14'
            },
            {
              classId: '1282974993604352',
              className: '4',
              effectiveStdCount: '34',
              gradeName: '四年级',
              highMyopiaRate: 0.7352,
              highMyopiaStdCount: '25',
              manEffectiveStdCount: '19',
              manHighMyopiaRate: 0.6842,
              manHighMyopiaStdCount: '13',
              manMyopiaRate: 0.7894,
              manMyopiaStdCount: '15',
              manStdCount: '19',
              myopiaRate: 0.7941,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2058,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7894,
                  manMyopiaStdCount: '15',
                  myopiaRate: 0.7941,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1052,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0588,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.6842,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.7352,
                  myopiaStdCount: '25',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.2105,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.2058,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2,
                  womanMyopiaStdCount: '3'
                }
              ],
              stdCount: '34',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.8,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.8,
              womanMyopiaStdCount: '12',
              womanStdCount: '15'
            },
            {
              classId: '1282974993604353',
              className: '5',
              effectiveStdCount: '30',
              gradeName: '四年级',
              highMyopiaRate: 0.7333,
              highMyopiaStdCount: '22',
              manEffectiveStdCount: '10',
              manHighMyopiaRate: 0.6,
              manHighMyopiaStdCount: '6',
              manMyopiaRate: 0.8,
              manMyopiaStdCount: '8',
              manStdCount: '10',
              myopiaRate: 0.9,
              myopiaStdCount: '27',
              noMyopiaRate: 0.1,
              noMyopiaStdCount: '3',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.9,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.95,
                  womanMyopiaStdCount: '19'
                },
                {
                  manMyopiaRate: 0.2,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1333,
                  myopiaStdCount: '4',
                  myopiaType: 1,
                  womanMyopiaRate: 0.1,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0333,
                  myopiaStdCount: '1',
                  myopiaType: 2,
                  womanMyopiaRate: 0.05,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.6,
                  manMyopiaStdCount: '6',
                  myopiaRate: 0.7333,
                  myopiaStdCount: '22',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '16'
                },
                {
                  manMyopiaRate: 0.2,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1,
                  myopiaStdCount: '3',
                  myopiaType: 4,
                  womanMyopiaRate: 0.05,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '30',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '20',
              womanHighMyopiaRate: 0.8,
              womanHighMyopiaStdCount: '16',
              womanMyopiaRate: 0.95,
              womanMyopiaStdCount: '19',
              womanStdCount: '20'
            },
            {
              classId: null,
              className: '合计',
              effectiveStdCount: '157',
              gradeName: '四年级',
              highMyopiaRate: 0.6942,
              highMyopiaStdCount: '109',
              manEffectiveStdCount: '81',
              manHighMyopiaRate: 0.679,
              manHighMyopiaStdCount: '55',
              manMyopiaRate: 0.8024,
              manMyopiaStdCount: '65',
              manStdCount: '81',
              myopiaRate: 0.8089,
              myopiaStdCount: '127',
              noMyopiaRate: null,
              noMyopiaStdCount: '30',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8024,
                  manMyopiaStdCount: '65',
                  myopiaRate: 0.8089,
                  myopiaStdCount: '127',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8157,
                  womanMyopiaStdCount: '62'
                },
                {
                  manMyopiaRate: 0.0493,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.0509,
                  myopiaStdCount: '8',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0526,
                  womanMyopiaStdCount: '4'
                },
                {
                  manMyopiaRate: 0.074,
                  manMyopiaStdCount: '6',
                  myopiaRate: 0.0636,
                  myopiaStdCount: '10',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0526,
                  womanMyopiaStdCount: '4'
                },
                {
                  manMyopiaRate: 0.679,
                  manMyopiaStdCount: '55',
                  myopiaRate: 0.6942,
                  myopiaStdCount: '109',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7105,
                  womanMyopiaStdCount: '54'
                },
                {
                  manMyopiaRate: 0.1975,
                  manMyopiaStdCount: '16',
                  myopiaRate: 0.191,
                  myopiaStdCount: '30',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1842,
                  womanMyopiaStdCount: '14'
                }
              ],
              stdCount: '157',
              studentMyopiaInfos: null,
              studyYear: '2019',
              womanEffectiveStdCount: '76',
              womanHighMyopiaRate: 0.7105,
              womanHighMyopiaStdCount: '54',
              womanMyopiaRate: 0.8157,
              womanMyopiaStdCount: '62',
              womanStdCount: '76'
            }
          ],
          effectiveStdCount: '157',
          gradeId: '921830381248274',
          gradeName: '四年级',
          highMyopiaRate: 0.6942,
          highMyopiaStdCount: '109',
          manEffectiveStdCount: '81',
          manHighMyopiaRate: 0.679,
          manHighMyopiaStdCount: '55',
          manMyopiaRate: 0.8024,
          manMyopiaStdCount: '65',
          manStdCount: '81',
          maxClass: {
            classId: '1282974993604353',
            className: '5',
            effectiveStdCount: '30',
            gradeName: '四年级',
            highMyopiaRate: 0.7333,
            highMyopiaStdCount: '22',
            manEffectiveStdCount: '10',
            manHighMyopiaRate: 0.6,
            manHighMyopiaStdCount: '6',
            manMyopiaRate: 0.8,
            manMyopiaStdCount: '8',
            manStdCount: '10',
            myopiaRate: 0.9,
            myopiaStdCount: '27',
            noMyopiaRate: 0.1,
            noMyopiaStdCount: '3',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8,
                manMyopiaStdCount: '8',
                myopiaRate: 0.9,
                myopiaStdCount: '27',
                myopiaType: 0,
                womanMyopiaRate: 0.95,
                womanMyopiaStdCount: '19'
              },
              {
                manMyopiaRate: 0.2,
                manMyopiaStdCount: '2',
                myopiaRate: 0.1333,
                myopiaStdCount: '4',
                myopiaType: 1,
                womanMyopiaRate: 0.1,
                womanMyopiaStdCount: '2'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0333,
                myopiaStdCount: '1',
                myopiaType: 2,
                womanMyopiaRate: 0.05,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.6,
                manMyopiaStdCount: '6',
                myopiaRate: 0.7333,
                myopiaStdCount: '22',
                myopiaType: 3,
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '16'
              },
              {
                manMyopiaRate: 0.2,
                manMyopiaStdCount: '2',
                myopiaRate: 0.1,
                myopiaStdCount: '3',
                myopiaType: 4,
                womanMyopiaRate: 0.05,
                womanMyopiaStdCount: '1'
              }
            ],
            stdCount: '30',
            studentMyopiaInfos: null,
            studyYear: '2019',
            womanEffectiveStdCount: '20',
            womanHighMyopiaRate: 0.8,
            womanHighMyopiaStdCount: '16',
            womanMyopiaRate: 0.95,
            womanMyopiaStdCount: '19',
            womanStdCount: '20'
          },
          maxHighClass: {
            classId: '1282974993604352',
            className: '4',
            effectiveStdCount: '34',
            gradeName: '四年级',
            highMyopiaRate: 0.7352,
            highMyopiaStdCount: '25',
            manEffectiveStdCount: '19',
            manHighMyopiaRate: 0.6842,
            manHighMyopiaStdCount: '13',
            manMyopiaRate: 0.7894,
            manMyopiaStdCount: '15',
            manStdCount: '19',
            myopiaRate: 0.7941,
            myopiaStdCount: '27',
            noMyopiaRate: 0.2058,
            noMyopiaStdCount: '7',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.7894,
                manMyopiaStdCount: '15',
                myopiaRate: 0.7941,
                myopiaStdCount: '27',
                myopiaType: 0,
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1052,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0588,
                myopiaStdCount: '2',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0,
                myopiaStdCount: '0',
                myopiaType: 2,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.6842,
                manMyopiaStdCount: '13',
                myopiaRate: 0.7352,
                myopiaStdCount: '25',
                myopiaType: 3,
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.2105,
                manMyopiaStdCount: '4',
                myopiaRate: 0.2058,
                myopiaStdCount: '7',
                myopiaType: 4,
                womanMyopiaRate: 0.2,
                womanMyopiaStdCount: '3'
              }
            ],
            stdCount: '34',
            studentMyopiaInfos: null,
            studyYear: '2019',
            womanEffectiveStdCount: '15',
            womanHighMyopiaRate: 0.8,
            womanHighMyopiaStdCount: '12',
            womanMyopiaRate: 0.8,
            womanMyopiaStdCount: '12',
            womanStdCount: '15'
          },
          minClass: {
            classId: '1282974993596162',
            className: '1',
            effectiveStdCount: '37',
            gradeName: '四年级',
            highMyopiaRate: 0.7027,
            highMyopiaStdCount: '26',
            manEffectiveStdCount: '22',
            manHighMyopiaRate: 0.7727,
            manHighMyopiaStdCount: '17',
            manMyopiaRate: 0.8181,
            manMyopiaStdCount: '18',
            manStdCount: '22',
            myopiaRate: 0.7297,
            myopiaStdCount: '27',
            noMyopiaRate: 0.2702,
            noMyopiaStdCount: '10',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8181,
                manMyopiaStdCount: '18',
                myopiaRate: 0.7297,
                myopiaStdCount: '27',
                myopiaType: 0,
                womanMyopiaRate: 0.6,
                womanMyopiaStdCount: '9'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0,
                myopiaStdCount: '0',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.0454,
                manMyopiaStdCount: '1',
                myopiaRate: 0.027,
                myopiaStdCount: '1',
                myopiaType: 2,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.7727,
                manMyopiaStdCount: '17',
                myopiaRate: 0.7027,
                myopiaStdCount: '26',
                myopiaType: 3,
                womanMyopiaRate: 0.6,
                womanMyopiaStdCount: '9'
              },
              {
                manMyopiaRate: 0.1818,
                manMyopiaStdCount: '4',
                myopiaRate: 0.2702,
                myopiaStdCount: '10',
                myopiaType: 4,
                womanMyopiaRate: 0.4,
                womanMyopiaStdCount: '6'
              }
            ],
            stdCount: '37',
            studentMyopiaInfos: null,
            studyYear: '2019',
            womanEffectiveStdCount: '15',
            womanHighMyopiaRate: 0.6,
            womanHighMyopiaStdCount: '9',
            womanMyopiaRate: 0.6,
            womanMyopiaStdCount: '9',
            womanStdCount: '15'
          },
          minHighClass: {
            classId: '1282974993596164',
            className: '3',
            effectiveStdCount: '30',
            gradeName: '四年级',
            highMyopiaRate: 0.6333,
            highMyopiaStdCount: '19',
            manEffectiveStdCount: '16',
            manHighMyopiaRate: 0.6875,
            manHighMyopiaStdCount: '11',
            manMyopiaRate: 0.875,
            manMyopiaStdCount: '14',
            manStdCount: '16',
            myopiaRate: 0.8666,
            myopiaStdCount: '26',
            noMyopiaRate: 0.1333,
            noMyopiaStdCount: '4',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.875,
                manMyopiaStdCount: '14',
                myopiaRate: 0.8666,
                myopiaStdCount: '26',
                myopiaType: 0,
                womanMyopiaRate: 0.8571,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0333,
                myopiaStdCount: '1',
                myopiaType: 1,
                womanMyopiaRate: 0.0714,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.1875,
                manMyopiaStdCount: '3',
                myopiaRate: 0.2,
                myopiaStdCount: '6',
                myopiaType: 2,
                womanMyopiaRate: 0.2142,
                womanMyopiaStdCount: '3'
              },
              {
                manMyopiaRate: 0.6875,
                manMyopiaStdCount: '11',
                myopiaRate: 0.6333,
                myopiaStdCount: '19',
                myopiaType: 3,
                womanMyopiaRate: 0.5714,
                womanMyopiaStdCount: '8'
              },
              {
                manMyopiaRate: 0.125,
                manMyopiaStdCount: '2',
                myopiaRate: 0.1333,
                myopiaStdCount: '4',
                myopiaType: 4,
                womanMyopiaRate: 0.1428,
                womanMyopiaStdCount: '2'
              }
            ],
            stdCount: '30',
            studentMyopiaInfos: null,
            studyYear: '2019',
            womanEffectiveStdCount: '14',
            womanHighMyopiaRate: 0.5714,
            womanHighMyopiaStdCount: '8',
            womanMyopiaRate: 0.8571,
            womanMyopiaStdCount: '12',
            womanStdCount: '14'
          },
          myopiaRate: 0.8089,
          myopiaStdCount: '127',
          noMyopiaStdCount: '30',
          noMyopiaStdRate: null,
          prefixName: '小学',
          schoolName: '西工大锦园实验小学',
          sexMyopiaTypeInfo: [
            {
              manMyopiaRate: 0.8024,
              manMyopiaStdCount: '65',
              myopiaRate: 0.8089,
              myopiaStdCount: '127',
              myopiaType: 0,
              womanMyopiaRate: 0.8157,
              womanMyopiaStdCount: '62'
            },
            {
              manMyopiaRate: 0.0493,
              manMyopiaStdCount: '4',
              myopiaRate: 0.0509,
              myopiaStdCount: '8',
              myopiaType: 1,
              womanMyopiaRate: 0.0526,
              womanMyopiaStdCount: '4'
            },
            {
              manMyopiaRate: 0.074,
              manMyopiaStdCount: '6',
              myopiaRate: 0.0636,
              myopiaStdCount: '10',
              myopiaType: 2,
              womanMyopiaRate: 0.0526,
              womanMyopiaStdCount: '4'
            },
            {
              manMyopiaRate: 0.679,
              manMyopiaStdCount: '55',
              myopiaRate: 0.6942,
              myopiaStdCount: '109',
              myopiaType: 3,
              womanMyopiaRate: 0.7105,
              womanMyopiaStdCount: '54'
            },
            {
              manMyopiaRate: 0.1975,
              manMyopiaStdCount: '16',
              myopiaRate: 0.191,
              myopiaStdCount: '30',
              myopiaType: 4,
              womanMyopiaRate: 0.1842,
              womanMyopiaStdCount: '14'
            }
          ],
          stdCount: '157',
          studyYear: '2019',
          womanEffectiveStdCount: '76',
          womanHighMyopiaRate: 0.7105,
          womanHighMyopiaStdCount: '54',
          womanMyopiaRate: 0.8157,
          womanMyopiaStdCount: '62',
          womanStdCount: '76'
        },
        {
          classMyopiaInfoVOS: [
            {
              classId: '1282974993604354',
              className: '1',
              effectiveStdCount: '32',
              gradeName: '五年级',
              highMyopiaRate: 0.6875,
              highMyopiaStdCount: '22',
              manEffectiveStdCount: '16',
              manHighMyopiaRate: 0.5625,
              manHighMyopiaStdCount: '9',
              manMyopiaRate: 0.6875,
              manMyopiaStdCount: '11',
              manStdCount: '16',
              myopiaRate: 0.8125,
              myopiaStdCount: '26',
              noMyopiaRate: 0.1875,
              noMyopiaStdCount: '6',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.6875,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.8125,
                  myopiaStdCount: '26',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9375,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.0625,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0625,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.0625,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0625,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.5625,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.6875,
                  myopiaStdCount: '22',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8125,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.3125,
                  manMyopiaStdCount: '5',
                  myopiaRate: 0.1875,
                  myopiaStdCount: '6',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '32',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '16',
              womanHighMyopiaRate: 0.8125,
              womanHighMyopiaStdCount: '13',
              womanMyopiaRate: 0.9375,
              womanMyopiaStdCount: '15',
              womanStdCount: '16'
            },
            {
              classId: '1282974993604355',
              className: '2',
              effectiveStdCount: '31',
              gradeName: '五年级',
              highMyopiaRate: 0.6774,
              highMyopiaStdCount: '21',
              manEffectiveStdCount: '14',
              manHighMyopiaRate: 0.5714,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.8571,
              manMyopiaStdCount: '12',
              manStdCount: '14',
              myopiaRate: 0.8064,
              myopiaStdCount: '25',
              noMyopiaRate: 0.1935,
              noMyopiaStdCount: '6',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8571,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.8064,
                  myopiaStdCount: '25',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7647,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.1428,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0645,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1428,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0645,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.5714,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.6774,
                  myopiaStdCount: '21',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7647,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.1428,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.1935,
                  myopiaStdCount: '6',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2352,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '31',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '17',
              womanHighMyopiaRate: 0.7647,
              womanHighMyopiaStdCount: '13',
              womanMyopiaRate: 0.7647,
              womanMyopiaStdCount: '13',
              womanStdCount: '17'
            },
            {
              classId: '1282974993612544',
              className: '3',
              effectiveStdCount: '35',
              gradeName: '五年级',
              highMyopiaRate: 0.7714,
              highMyopiaStdCount: '27',
              manEffectiveStdCount: '19',
              manHighMyopiaRate: 0.7894,
              manHighMyopiaStdCount: '15',
              manMyopiaRate: 0.8947,
              manMyopiaStdCount: '17',
              manStdCount: '19',
              myopiaRate: 0.9142,
              myopiaStdCount: '32',
              noMyopiaRate: 0.0857,
              noMyopiaStdCount: '3',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8947,
                  manMyopiaStdCount: '17',
                  myopiaRate: 0.9142,
                  myopiaStdCount: '32',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9375,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 1,
                  womanMyopiaRate: 0.1875,
                  womanMyopiaStdCount: '3'
                },
                {
                  manMyopiaRate: 0.1052,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0571,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.7894,
                  manMyopiaStdCount: '15',
                  myopiaRate: 0.7714,
                  myopiaStdCount: '27',
                  myopiaType: 3,
                  womanMyopiaRate: 0.75,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1052,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0625,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '35',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '16',
              womanHighMyopiaRate: 0.75,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.9375,
              womanMyopiaStdCount: '15',
              womanStdCount: '16'
            },
            {
              classId: '1282974993612545',
              className: '4',
              effectiveStdCount: '27',
              gradeName: '五年级',
              highMyopiaRate: 0.7037,
              highMyopiaStdCount: '19',
              manEffectiveStdCount: '8',
              manHighMyopiaRate: 0.75,
              manHighMyopiaStdCount: '6',
              manMyopiaRate: 0.875,
              manMyopiaStdCount: '7',
              manStdCount: '8',
              myopiaRate: 0.7407,
              myopiaStdCount: '20',
              noMyopiaRate: 0.2592,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.875,
                  manMyopiaStdCount: '7',
                  myopiaRate: 0.7407,
                  myopiaStdCount: '20',
                  myopiaType: 0,
                  womanMyopiaRate: 0.6842,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.125,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.037,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.75,
                  manMyopiaStdCount: '6',
                  myopiaRate: 0.7037,
                  myopiaStdCount: '19',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6842,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.125,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.2592,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.3157,
                  womanMyopiaStdCount: '6'
                }
              ],
              stdCount: '27',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '19',
              womanHighMyopiaRate: 0.6842,
              womanHighMyopiaStdCount: '13',
              womanMyopiaRate: 0.6842,
              womanMyopiaStdCount: '13',
              womanStdCount: '19'
            },
            {
              classId: '1282974993612546',
              className: '5',
              effectiveStdCount: '35',
              gradeName: '五年级',
              highMyopiaRate: 0.6285,
              highMyopiaStdCount: '22',
              manEffectiveStdCount: '18',
              manHighMyopiaRate: 0.6111,
              manHighMyopiaStdCount: '11',
              manMyopiaRate: 0.8333,
              manMyopiaStdCount: '15',
              manStdCount: '18',
              myopiaRate: 0.7714,
              myopiaStdCount: '27',
              noMyopiaRate: 0.2285,
              noMyopiaStdCount: '8',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8333,
                  manMyopiaStdCount: '15',
                  myopiaRate: 0.7714,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7058,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0571,
                  myopiaStdCount: '2',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1111,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0857,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0588,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.6111,
                  manMyopiaStdCount: '11',
                  myopiaRate: 0.6285,
                  myopiaStdCount: '22',
                  myopiaType: 3,
                  womanMyopiaRate: 0.647,
                  womanMyopiaStdCount: '11'
                },
                {
                  manMyopiaRate: 0.1666,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.2285,
                  myopiaStdCount: '8',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2941,
                  womanMyopiaStdCount: '5'
                }
              ],
              stdCount: '35',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '17',
              womanHighMyopiaRate: 0.647,
              womanHighMyopiaStdCount: '11',
              womanMyopiaRate: 0.7058,
              womanMyopiaStdCount: '12',
              womanStdCount: '17'
            },
            {
              classId: null,
              className: '合计',
              effectiveStdCount: '160',
              gradeName: '五年级',
              highMyopiaRate: 0.6937,
              highMyopiaStdCount: '111',
              manEffectiveStdCount: '75',
              manHighMyopiaRate: 0.6533,
              manHighMyopiaStdCount: '49',
              manMyopiaRate: 0.8266,
              manMyopiaStdCount: '62',
              manStdCount: '75',
              myopiaRate: 0.8125,
              myopiaStdCount: '130',
              noMyopiaRate: null,
              noMyopiaStdCount: '30',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8266,
                  manMyopiaStdCount: '62',
                  myopiaRate: 0.8125,
                  myopiaStdCount: '130',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '68'
                },
                {
                  manMyopiaRate: 0.08,
                  manMyopiaStdCount: '6',
                  myopiaRate: 0.0625,
                  myopiaStdCount: '10',
                  myopiaType: 1,
                  womanMyopiaRate: 0.047,
                  womanMyopiaStdCount: '4'
                },
                {
                  manMyopiaRate: 0.0933,
                  manMyopiaStdCount: '7',
                  myopiaRate: 0.0562,
                  myopiaStdCount: '9',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0235,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.6533,
                  manMyopiaStdCount: '49',
                  myopiaRate: 0.6937,
                  myopiaStdCount: '111',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7294,
                  womanMyopiaStdCount: '62'
                },
                {
                  manMyopiaRate: 0.1733,
                  manMyopiaStdCount: '13',
                  myopiaRate: 0.1875,
                  myopiaStdCount: '30',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2,
                  womanMyopiaStdCount: '17'
                }
              ],
              stdCount: '160',
              studentMyopiaInfos: null,
              studyYear: '2018',
              womanEffectiveStdCount: '85',
              womanHighMyopiaRate: 0.7294,
              womanHighMyopiaStdCount: '62',
              womanMyopiaRate: 0.8,
              womanMyopiaStdCount: '68',
              womanStdCount: '85'
            }
          ],
          effectiveStdCount: '160',
          gradeId: '921830381248275',
          gradeName: '五年级',
          highMyopiaRate: 0.6937,
          highMyopiaStdCount: '111',
          manEffectiveStdCount: '75',
          manHighMyopiaRate: 0.6533,
          manHighMyopiaStdCount: '49',
          manMyopiaRate: 0.8266,
          manMyopiaStdCount: '62',
          manStdCount: '75',
          maxClass: {
            classId: '1282974993612544',
            className: '3',
            effectiveStdCount: '35',
            gradeName: '五年级',
            highMyopiaRate: 0.7714,
            highMyopiaStdCount: '27',
            manEffectiveStdCount: '19',
            manHighMyopiaRate: 0.7894,
            manHighMyopiaStdCount: '15',
            manMyopiaRate: 0.8947,
            manMyopiaStdCount: '17',
            manStdCount: '19',
            myopiaRate: 0.9142,
            myopiaStdCount: '32',
            noMyopiaRate: 0.0857,
            noMyopiaStdCount: '3',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8947,
                manMyopiaStdCount: '17',
                myopiaRate: 0.9142,
                myopiaStdCount: '32',
                myopiaType: 0,
                womanMyopiaRate: 0.9375,
                womanMyopiaStdCount: '15'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0857,
                myopiaStdCount: '3',
                myopiaType: 1,
                womanMyopiaRate: 0.1875,
                womanMyopiaStdCount: '3'
              },
              {
                manMyopiaRate: 0.1052,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0571,
                myopiaStdCount: '2',
                myopiaType: 2,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.7894,
                manMyopiaStdCount: '15',
                myopiaRate: 0.7714,
                myopiaStdCount: '27',
                myopiaType: 3,
                womanMyopiaRate: 0.75,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1052,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0857,
                myopiaStdCount: '3',
                myopiaType: 4,
                womanMyopiaRate: 0.0625,
                womanMyopiaStdCount: '1'
              }
            ],
            stdCount: '35',
            studentMyopiaInfos: null,
            studyYear: '2018',
            womanEffectiveStdCount: '16',
            womanHighMyopiaRate: 0.75,
            womanHighMyopiaStdCount: '12',
            womanMyopiaRate: 0.9375,
            womanMyopiaStdCount: '15',
            womanStdCount: '16'
          },
          maxHighClass: {
            classId: '1282974993612544',
            className: '3',
            effectiveStdCount: '35',
            gradeName: '五年级',
            highMyopiaRate: 0.7714,
            highMyopiaStdCount: '27',
            manEffectiveStdCount: '19',
            manHighMyopiaRate: 0.7894,
            manHighMyopiaStdCount: '15',
            manMyopiaRate: 0.8947,
            manMyopiaStdCount: '17',
            manStdCount: '19',
            myopiaRate: 0.9142,
            myopiaStdCount: '32',
            noMyopiaRate: 0.0857,
            noMyopiaStdCount: '3',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8947,
                manMyopiaStdCount: '17',
                myopiaRate: 0.9142,
                myopiaStdCount: '32',
                myopiaType: 0,
                womanMyopiaRate: 0.9375,
                womanMyopiaStdCount: '15'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0857,
                myopiaStdCount: '3',
                myopiaType: 1,
                womanMyopiaRate: 0.1875,
                womanMyopiaStdCount: '3'
              },
              {
                manMyopiaRate: 0.1052,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0571,
                myopiaStdCount: '2',
                myopiaType: 2,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.7894,
                manMyopiaStdCount: '15',
                myopiaRate: 0.7714,
                myopiaStdCount: '27',
                myopiaType: 3,
                womanMyopiaRate: 0.75,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1052,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0857,
                myopiaStdCount: '3',
                myopiaType: 4,
                womanMyopiaRate: 0.0625,
                womanMyopiaStdCount: '1'
              }
            ],
            stdCount: '35',
            studentMyopiaInfos: null,
            studyYear: '2018',
            womanEffectiveStdCount: '16',
            womanHighMyopiaRate: 0.75,
            womanHighMyopiaStdCount: '12',
            womanMyopiaRate: 0.9375,
            womanMyopiaStdCount: '15',
            womanStdCount: '16'
          },
          minClass: {
            classId: '1282974993612545',
            className: '4',
            effectiveStdCount: '27',
            gradeName: '五年级',
            highMyopiaRate: 0.7037,
            highMyopiaStdCount: '19',
            manEffectiveStdCount: '8',
            manHighMyopiaRate: 0.75,
            manHighMyopiaStdCount: '6',
            manMyopiaRate: 0.875,
            manMyopiaStdCount: '7',
            manStdCount: '8',
            myopiaRate: 0.7407,
            myopiaStdCount: '20',
            noMyopiaRate: 0.2592,
            noMyopiaStdCount: '7',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.875,
                manMyopiaStdCount: '7',
                myopiaRate: 0.7407,
                myopiaStdCount: '20',
                myopiaType: 0,
                womanMyopiaRate: 0.6842,
                womanMyopiaStdCount: '13'
              },
              {
                manMyopiaRate: 0.125,
                manMyopiaStdCount: '1',
                myopiaRate: 0.037,
                myopiaStdCount: '1',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0,
                myopiaStdCount: '0',
                myopiaType: 2,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.75,
                manMyopiaStdCount: '6',
                myopiaRate: 0.7037,
                myopiaStdCount: '19',
                myopiaType: 3,
                womanMyopiaRate: 0.6842,
                womanMyopiaStdCount: '13'
              },
              {
                manMyopiaRate: 0.125,
                manMyopiaStdCount: '1',
                myopiaRate: 0.2592,
                myopiaStdCount: '7',
                myopiaType: 4,
                womanMyopiaRate: 0.3157,
                womanMyopiaStdCount: '6'
              }
            ],
            stdCount: '27',
            studentMyopiaInfos: null,
            studyYear: '2018',
            womanEffectiveStdCount: '19',
            womanHighMyopiaRate: 0.6842,
            womanHighMyopiaStdCount: '13',
            womanMyopiaRate: 0.6842,
            womanMyopiaStdCount: '13',
            womanStdCount: '19'
          },
          minHighClass: {
            classId: '1282974993612546',
            className: '5',
            effectiveStdCount: '35',
            gradeName: '五年级',
            highMyopiaRate: 0.6285,
            highMyopiaStdCount: '22',
            manEffectiveStdCount: '18',
            manHighMyopiaRate: 0.6111,
            manHighMyopiaStdCount: '11',
            manMyopiaRate: 0.8333,
            manMyopiaStdCount: '15',
            manStdCount: '18',
            myopiaRate: 0.7714,
            myopiaStdCount: '27',
            noMyopiaRate: 0.2285,
            noMyopiaStdCount: '8',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8333,
                manMyopiaStdCount: '15',
                myopiaRate: 0.7714,
                myopiaStdCount: '27',
                myopiaType: 0,
                womanMyopiaRate: 0.7058,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1111,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0571,
                myopiaStdCount: '2',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.1111,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0857,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.0588,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.6111,
                manMyopiaStdCount: '11',
                myopiaRate: 0.6285,
                myopiaStdCount: '22',
                myopiaType: 3,
                womanMyopiaRate: 0.647,
                womanMyopiaStdCount: '11'
              },
              {
                manMyopiaRate: 0.1666,
                manMyopiaStdCount: '3',
                myopiaRate: 0.2285,
                myopiaStdCount: '8',
                myopiaType: 4,
                womanMyopiaRate: 0.2941,
                womanMyopiaStdCount: '5'
              }
            ],
            stdCount: '35',
            studentMyopiaInfos: null,
            studyYear: '2018',
            womanEffectiveStdCount: '17',
            womanHighMyopiaRate: 0.647,
            womanHighMyopiaStdCount: '11',
            womanMyopiaRate: 0.7058,
            womanMyopiaStdCount: '12',
            womanStdCount: '17'
          },
          myopiaRate: 0.8125,
          myopiaStdCount: '130',
          noMyopiaStdCount: '30',
          noMyopiaStdRate: null,
          prefixName: '小学',
          schoolName: '西工大锦园实验小学',
          sexMyopiaTypeInfo: [
            {
              manMyopiaRate: 0.8266,
              manMyopiaStdCount: '62',
              myopiaRate: 0.8125,
              myopiaStdCount: '130',
              myopiaType: 0,
              womanMyopiaRate: 0.8,
              womanMyopiaStdCount: '68'
            },
            {
              manMyopiaRate: 0.08,
              manMyopiaStdCount: '6',
              myopiaRate: 0.0625,
              myopiaStdCount: '10',
              myopiaType: 1,
              womanMyopiaRate: 0.047,
              womanMyopiaStdCount: '4'
            },
            {
              manMyopiaRate: 0.0933,
              manMyopiaStdCount: '7',
              myopiaRate: 0.0562,
              myopiaStdCount: '9',
              myopiaType: 2,
              womanMyopiaRate: 0.0235,
              womanMyopiaStdCount: '2'
            },
            {
              manMyopiaRate: 0.6533,
              manMyopiaStdCount: '49',
              myopiaRate: 0.6937,
              myopiaStdCount: '111',
              myopiaType: 3,
              womanMyopiaRate: 0.7294,
              womanMyopiaStdCount: '62'
            },
            {
              manMyopiaRate: 0.1733,
              manMyopiaStdCount: '13',
              myopiaRate: 0.1875,
              myopiaStdCount: '30',
              myopiaType: 4,
              womanMyopiaRate: 0.2,
              womanMyopiaStdCount: '17'
            }
          ],
          stdCount: '160',
          studyYear: '2018',
          womanEffectiveStdCount: '85',
          womanHighMyopiaRate: 0.7294,
          womanHighMyopiaStdCount: '62',
          womanMyopiaRate: 0.8,
          womanMyopiaStdCount: '68',
          womanStdCount: '85'
        },
        {
          classMyopiaInfoVOS: [
            {
              classId: '1282974993612547',
              className: '1',
              effectiveStdCount: '37',
              gradeName: '六年级',
              highMyopiaRate: 0.7297,
              highMyopiaStdCount: '27',
              manEffectiveStdCount: '16',
              manHighMyopiaRate: 0.5625,
              manHighMyopiaStdCount: '9',
              manMyopiaRate: 0.75,
              manMyopiaStdCount: '12',
              manStdCount: '16',
              myopiaRate: 0.8108,
              myopiaStdCount: '30',
              noMyopiaRate: 0.1891,
              noMyopiaStdCount: '7',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.75,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.8108,
                  myopiaStdCount: '30',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8571,
                  womanMyopiaStdCount: '18'
                },
                {
                  manMyopiaRate: 0.0625,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.027,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.125,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.054,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.5625,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.7297,
                  myopiaStdCount: '27',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8571,
                  womanMyopiaStdCount: '18'
                },
                {
                  manMyopiaRate: 0.25,
                  manMyopiaStdCount: '4',
                  myopiaRate: 0.1891,
                  myopiaStdCount: '7',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1428,
                  womanMyopiaStdCount: '3'
                }
              ],
              stdCount: '37',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '21',
              womanHighMyopiaRate: 0.8571,
              womanHighMyopiaStdCount: '18',
              womanMyopiaRate: 0.8571,
              womanMyopiaStdCount: '18',
              womanStdCount: '21'
            },
            {
              classId: '1282974993612548',
              className: '2',
              effectiveStdCount: '30',
              gradeName: '六年级',
              highMyopiaRate: 0.7,
              highMyopiaStdCount: '21',
              manEffectiveStdCount: '11',
              manHighMyopiaRate: 0.7272,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.8181,
              manMyopiaStdCount: '9',
              manStdCount: '11',
              myopiaRate: 0.8,
              myopiaStdCount: '24',
              noMyopiaRate: 0.2,
              noMyopiaStdCount: '6',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8181,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.8,
                  myopiaStdCount: '24',
                  myopiaType: 0,
                  womanMyopiaRate: 0.7894,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.0909,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0333,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0666,
                  myopiaStdCount: '2',
                  myopiaType: 2,
                  womanMyopiaRate: 0.1052,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.7272,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.7,
                  myopiaStdCount: '21',
                  myopiaType: 3,
                  womanMyopiaRate: 0.6842,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.1818,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.2,
                  myopiaStdCount: '6',
                  myopiaType: 4,
                  womanMyopiaRate: 0.2105,
                  womanMyopiaStdCount: '4'
                }
              ],
              stdCount: '30',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '19',
              womanHighMyopiaRate: 0.6842,
              womanHighMyopiaStdCount: '13',
              womanMyopiaRate: 0.7894,
              womanMyopiaStdCount: '15',
              womanStdCount: '19'
            },
            {
              classId: '1282974993620736',
              className: '3',
              effectiveStdCount: '33',
              gradeName: '六年级',
              highMyopiaRate: 0.6969,
              highMyopiaStdCount: '23',
              manEffectiveStdCount: '14',
              manHighMyopiaRate: 0.5714,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.6428,
              manMyopiaStdCount: '9',
              manStdCount: '14',
              myopiaRate: 0.8181,
              myopiaStdCount: '27',
              noMyopiaRate: 0.1818,
              noMyopiaStdCount: '6',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.6428,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.8181,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9473,
                  womanMyopiaStdCount: '18'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0303,
                  myopiaStdCount: '1',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0526,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.0714,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.0909,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.1052,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.5714,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.6969,
                  myopiaStdCount: '23',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7894,
                  womanMyopiaStdCount: '15'
                },
                {
                  manMyopiaRate: 0.3571,
                  manMyopiaStdCount: '5',
                  myopiaRate: 0.1818,
                  myopiaStdCount: '6',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0526,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '33',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '19',
              womanHighMyopiaRate: 0.7894,
              womanHighMyopiaStdCount: '15',
              womanMyopiaRate: 0.9473,
              womanMyopiaStdCount: '18',
              womanStdCount: '19'
            },
            {
              classId: '1282974993620737',
              className: '4',
              effectiveStdCount: '27',
              gradeName: '六年级',
              highMyopiaRate: 0.7407,
              highMyopiaStdCount: '20',
              manEffectiveStdCount: '12',
              manHighMyopiaRate: 0.6666,
              manHighMyopiaStdCount: '8',
              manMyopiaRate: 0.75,
              manMyopiaStdCount: '9',
              manStdCount: '12',
              myopiaRate: 0.8518,
              myopiaStdCount: '23',
              noMyopiaRate: 0.1481,
              noMyopiaStdCount: '4',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.75,
                  manMyopiaStdCount: '9',
                  myopiaRate: 0.8518,
                  myopiaStdCount: '23',
                  myopiaType: 0,
                  womanMyopiaRate: 0.9333,
                  womanMyopiaStdCount: '14'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.0833,
                  manMyopiaStdCount: '1',
                  myopiaRate: 0.1111,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.1333,
                  womanMyopiaStdCount: '2'
                },
                {
                  manMyopiaRate: 0.6666,
                  manMyopiaStdCount: '8',
                  myopiaRate: 0.7407,
                  myopiaStdCount: '20',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.25,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.1481,
                  myopiaStdCount: '4',
                  myopiaType: 4,
                  womanMyopiaRate: 0.0666,
                  womanMyopiaStdCount: '1'
                }
              ],
              stdCount: '27',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.8,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.9333,
              womanMyopiaStdCount: '14',
              womanStdCount: '15'
            },
            {
              classId: '1282974993620738',
              className: '5',
              effectiveStdCount: '32',
              gradeName: '六年级',
              highMyopiaRate: 0.75,
              highMyopiaStdCount: '24',
              manEffectiveStdCount: '17',
              manHighMyopiaRate: 0.7058,
              manHighMyopiaStdCount: '12',
              manMyopiaRate: 0.8235,
              manMyopiaStdCount: '14',
              manStdCount: '17',
              myopiaRate: 0.8437,
              myopiaStdCount: '27',
              noMyopiaRate: 0.1562,
              noMyopiaStdCount: '5',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.8235,
                  manMyopiaStdCount: '14',
                  myopiaRate: 0.8437,
                  myopiaStdCount: '27',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8666,
                  womanMyopiaStdCount: '13'
                },
                {
                  manMyopiaRate: 0.0,
                  manMyopiaStdCount: '0',
                  myopiaRate: 0.0,
                  myopiaStdCount: '0',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0,
                  womanMyopiaStdCount: '0'
                },
                {
                  manMyopiaRate: 0.1176,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0937,
                  myopiaStdCount: '3',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0666,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.7058,
                  manMyopiaStdCount: '12',
                  myopiaRate: 0.75,
                  myopiaStdCount: '24',
                  myopiaType: 3,
                  womanMyopiaRate: 0.8,
                  womanMyopiaStdCount: '12'
                },
                {
                  manMyopiaRate: 0.1764,
                  manMyopiaStdCount: '3',
                  myopiaRate: 0.1562,
                  myopiaStdCount: '5',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1333,
                  womanMyopiaStdCount: '2'
                }
              ],
              stdCount: '32',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '15',
              womanHighMyopiaRate: 0.8,
              womanHighMyopiaStdCount: '12',
              womanMyopiaRate: 0.8666,
              womanMyopiaStdCount: '13',
              womanStdCount: '15'
            },
            {
              classId: null,
              className: '合计',
              effectiveStdCount: '159',
              gradeName: '六年级',
              highMyopiaRate: 0.7232,
              highMyopiaStdCount: '115',
              manEffectiveStdCount: '70',
              manHighMyopiaRate: 0.6428,
              manHighMyopiaStdCount: '45',
              manMyopiaRate: 0.7571,
              manMyopiaStdCount: '53',
              manStdCount: '70',
              myopiaRate: 0.8238,
              myopiaStdCount: '131',
              noMyopiaRate: null,
              noMyopiaStdCount: '28',
              prefixName: '小学',
              schoolName: '西工大锦园实验小学',
              sexMyopiaTypeInfo: [
                {
                  manMyopiaRate: 0.7571,
                  manMyopiaStdCount: '53',
                  myopiaRate: 0.8238,
                  myopiaStdCount: '131',
                  myopiaType: 0,
                  womanMyopiaRate: 0.8764,
                  womanMyopiaStdCount: '78'
                },
                {
                  manMyopiaRate: 0.0285,
                  manMyopiaStdCount: '2',
                  myopiaRate: 0.0188,
                  myopiaStdCount: '3',
                  myopiaType: 1,
                  womanMyopiaRate: 0.0112,
                  womanMyopiaStdCount: '1'
                },
                {
                  manMyopiaRate: 0.0857,
                  manMyopiaStdCount: '6',
                  myopiaRate: 0.0817,
                  myopiaStdCount: '13',
                  myopiaType: 2,
                  womanMyopiaRate: 0.0786,
                  womanMyopiaStdCount: '7'
                },
                {
                  manMyopiaRate: 0.6428,
                  manMyopiaStdCount: '45',
                  myopiaRate: 0.7232,
                  myopiaStdCount: '115',
                  myopiaType: 3,
                  womanMyopiaRate: 0.7865,
                  womanMyopiaStdCount: '70'
                },
                {
                  manMyopiaRate: 0.2428,
                  manMyopiaStdCount: '17',
                  myopiaRate: 0.1761,
                  myopiaStdCount: '28',
                  myopiaType: 4,
                  womanMyopiaRate: 0.1235,
                  womanMyopiaStdCount: '11'
                }
              ],
              stdCount: '159',
              studentMyopiaInfos: null,
              studyYear: '2017',
              womanEffectiveStdCount: '89',
              womanHighMyopiaRate: 0.7865,
              womanHighMyopiaStdCount: '70',
              womanMyopiaRate: 0.8764,
              womanMyopiaStdCount: '78',
              womanStdCount: '89'
            }
          ],
          effectiveStdCount: '159',
          gradeId: '921830381248276',
          gradeName: '六年级',
          highMyopiaRate: 0.7232,
          highMyopiaStdCount: '115',
          manEffectiveStdCount: '70',
          manHighMyopiaRate: 0.6428,
          manHighMyopiaStdCount: '45',
          manMyopiaRate: 0.7571,
          manMyopiaStdCount: '53',
          manStdCount: '70',
          maxClass: {
            classId: '1282974993620737',
            className: '4',
            effectiveStdCount: '27',
            gradeName: '六年级',
            highMyopiaRate: 0.7407,
            highMyopiaStdCount: '20',
            manEffectiveStdCount: '12',
            manHighMyopiaRate: 0.6666,
            manHighMyopiaStdCount: '8',
            manMyopiaRate: 0.75,
            manMyopiaStdCount: '9',
            manStdCount: '12',
            myopiaRate: 0.8518,
            myopiaStdCount: '23',
            noMyopiaRate: 0.1481,
            noMyopiaStdCount: '4',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.75,
                manMyopiaStdCount: '9',
                myopiaRate: 0.8518,
                myopiaStdCount: '23',
                myopiaType: 0,
                womanMyopiaRate: 0.9333,
                womanMyopiaStdCount: '14'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0,
                myopiaStdCount: '0',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.0833,
                manMyopiaStdCount: '1',
                myopiaRate: 0.1111,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.1333,
                womanMyopiaStdCount: '2'
              },
              {
                manMyopiaRate: 0.6666,
                manMyopiaStdCount: '8',
                myopiaRate: 0.7407,
                myopiaStdCount: '20',
                myopiaType: 3,
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.25,
                manMyopiaStdCount: '3',
                myopiaRate: 0.1481,
                myopiaStdCount: '4',
                myopiaType: 4,
                womanMyopiaRate: 0.0666,
                womanMyopiaStdCount: '1'
              }
            ],
            stdCount: '27',
            studentMyopiaInfos: null,
            studyYear: '2017',
            womanEffectiveStdCount: '15',
            womanHighMyopiaRate: 0.8,
            womanHighMyopiaStdCount: '12',
            womanMyopiaRate: 0.9333,
            womanMyopiaStdCount: '14',
            womanStdCount: '15'
          },
          maxHighClass: {
            classId: '1282974993620738',
            className: '5',
            effectiveStdCount: '32',
            gradeName: '六年级',
            highMyopiaRate: 0.75,
            highMyopiaStdCount: '24',
            manEffectiveStdCount: '17',
            manHighMyopiaRate: 0.7058,
            manHighMyopiaStdCount: '12',
            manMyopiaRate: 0.8235,
            manMyopiaStdCount: '14',
            manStdCount: '17',
            myopiaRate: 0.8437,
            myopiaStdCount: '27',
            noMyopiaRate: 0.1562,
            noMyopiaStdCount: '5',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8235,
                manMyopiaStdCount: '14',
                myopiaRate: 0.8437,
                myopiaStdCount: '27',
                myopiaType: 0,
                womanMyopiaRate: 0.8666,
                womanMyopiaStdCount: '13'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0,
                myopiaStdCount: '0',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.1176,
                manMyopiaStdCount: '2',
                myopiaRate: 0.0937,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.0666,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.7058,
                manMyopiaStdCount: '12',
                myopiaRate: 0.75,
                myopiaStdCount: '24',
                myopiaType: 3,
                womanMyopiaRate: 0.8,
                womanMyopiaStdCount: '12'
              },
              {
                manMyopiaRate: 0.1764,
                manMyopiaStdCount: '3',
                myopiaRate: 0.1562,
                myopiaStdCount: '5',
                myopiaType: 4,
                womanMyopiaRate: 0.1333,
                womanMyopiaStdCount: '2'
              }
            ],
            stdCount: '32',
            studentMyopiaInfos: null,
            studyYear: '2017',
            womanEffectiveStdCount: '15',
            womanHighMyopiaRate: 0.8,
            womanHighMyopiaStdCount: '12',
            womanMyopiaRate: 0.8666,
            womanMyopiaStdCount: '13',
            womanStdCount: '15'
          },
          minClass: {
            classId: '1282974993612548',
            className: '2',
            effectiveStdCount: '30',
            gradeName: '六年级',
            highMyopiaRate: 0.7,
            highMyopiaStdCount: '21',
            manEffectiveStdCount: '11',
            manHighMyopiaRate: 0.7272,
            manHighMyopiaStdCount: '8',
            manMyopiaRate: 0.8181,
            manMyopiaStdCount: '9',
            manStdCount: '11',
            myopiaRate: 0.8,
            myopiaStdCount: '24',
            noMyopiaRate: 0.2,
            noMyopiaStdCount: '6',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.8181,
                manMyopiaStdCount: '9',
                myopiaRate: 0.8,
                myopiaStdCount: '24',
                myopiaType: 0,
                womanMyopiaRate: 0.7894,
                womanMyopiaStdCount: '15'
              },
              {
                manMyopiaRate: 0.0909,
                manMyopiaStdCount: '1',
                myopiaRate: 0.0333,
                myopiaStdCount: '1',
                myopiaType: 1,
                womanMyopiaRate: 0.0,
                womanMyopiaStdCount: '0'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0666,
                myopiaStdCount: '2',
                myopiaType: 2,
                womanMyopiaRate: 0.1052,
                womanMyopiaStdCount: '2'
              },
              {
                manMyopiaRate: 0.7272,
                manMyopiaStdCount: '8',
                myopiaRate: 0.7,
                myopiaStdCount: '21',
                myopiaType: 3,
                womanMyopiaRate: 0.6842,
                womanMyopiaStdCount: '13'
              },
              {
                manMyopiaRate: 0.1818,
                manMyopiaStdCount: '2',
                myopiaRate: 0.2,
                myopiaStdCount: '6',
                myopiaType: 4,
                womanMyopiaRate: 0.2105,
                womanMyopiaStdCount: '4'
              }
            ],
            stdCount: '30',
            studentMyopiaInfos: null,
            studyYear: '2017',
            womanEffectiveStdCount: '19',
            womanHighMyopiaRate: 0.6842,
            womanHighMyopiaStdCount: '13',
            womanMyopiaRate: 0.7894,
            womanMyopiaStdCount: '15',
            womanStdCount: '19'
          },
          minHighClass: {
            classId: '1282974993620736',
            className: '3',
            effectiveStdCount: '33',
            gradeName: '六年级',
            highMyopiaRate: 0.6969,
            highMyopiaStdCount: '23',
            manEffectiveStdCount: '14',
            manHighMyopiaRate: 0.5714,
            manHighMyopiaStdCount: '8',
            manMyopiaRate: 0.6428,
            manMyopiaStdCount: '9',
            manStdCount: '14',
            myopiaRate: 0.8181,
            myopiaStdCount: '27',
            noMyopiaRate: 0.1818,
            noMyopiaStdCount: '6',
            prefixName: '小学',
            schoolName: '西工大锦园实验小学',
            sexMyopiaTypeInfo: [
              {
                manMyopiaRate: 0.6428,
                manMyopiaStdCount: '9',
                myopiaRate: 0.8181,
                myopiaStdCount: '27',
                myopiaType: 0,
                womanMyopiaRate: 0.9473,
                womanMyopiaStdCount: '18'
              },
              {
                manMyopiaRate: 0.0,
                manMyopiaStdCount: '0',
                myopiaRate: 0.0303,
                myopiaStdCount: '1',
                myopiaType: 1,
                womanMyopiaRate: 0.0526,
                womanMyopiaStdCount: '1'
              },
              {
                manMyopiaRate: 0.0714,
                manMyopiaStdCount: '1',
                myopiaRate: 0.0909,
                myopiaStdCount: '3',
                myopiaType: 2,
                womanMyopiaRate: 0.1052,
                womanMyopiaStdCount: '2'
              },
              {
                manMyopiaRate: 0.5714,
                manMyopiaStdCount: '8',
                myopiaRate: 0.6969,
                myopiaStdCount: '23',
                myopiaType: 3,
                womanMyopiaRate: 0.7894,
                womanMyopiaStdCount: '15'
              },
              {
                manMyopiaRate: 0.3571,
                manMyopiaStdCount: '5',
                myopiaRate: 0.1818,
                myopiaStdCount: '6',
                myopiaType: 4,
                womanMyopiaRate: 0.0526,
                womanMyopiaStdCount: '1'
              }
            ],
            stdCount: '33',
            studentMyopiaInfos: null,
            studyYear: '2017',
            womanEffectiveStdCount: '19',
            womanHighMyopiaRate: 0.7894,
            womanHighMyopiaStdCount: '15',
            womanMyopiaRate: 0.9473,
            womanMyopiaStdCount: '18',
            womanStdCount: '19'
          },
          myopiaRate: 0.8238,
          myopiaStdCount: '131',
          noMyopiaStdCount: '28',
          noMyopiaStdRate: null,
          prefixName: '小学',
          schoolName: '西工大锦园实验小学',
          sexMyopiaTypeInfo: [
            {
              manMyopiaRate: 0.7571,
              manMyopiaStdCount: '53',
              myopiaRate: 0.8238,
              myopiaStdCount: '131',
              myopiaType: 0,
              womanMyopiaRate: 0.8764,
              womanMyopiaStdCount: '78'
            },
            {
              manMyopiaRate: 0.0285,
              manMyopiaStdCount: '2',
              myopiaRate: 0.0188,
              myopiaStdCount: '3',
              myopiaType: 1,
              womanMyopiaRate: 0.0112,
              womanMyopiaStdCount: '1'
            },
            {
              manMyopiaRate: 0.0857,
              manMyopiaStdCount: '6',
              myopiaRate: 0.0817,
              myopiaStdCount: '13',
              myopiaType: 2,
              womanMyopiaRate: 0.0786,
              womanMyopiaStdCount: '7'
            },
            {
              manMyopiaRate: 0.6428,
              manMyopiaStdCount: '45',
              myopiaRate: 0.7232,
              myopiaStdCount: '115',
              myopiaType: 3,
              womanMyopiaRate: 0.7865,
              womanMyopiaStdCount: '70'
            },
            {
              manMyopiaRate: 0.2428,
              manMyopiaStdCount: '17',
              myopiaRate: 0.1761,
              myopiaStdCount: '28',
              myopiaType: 4,
              womanMyopiaRate: 0.1235,
              womanMyopiaStdCount: '11'
            }
          ],
          stdCount: '159',
          studyYear: '2017',
          womanEffectiveStdCount: '89',
          womanHighMyopiaRate: 0.7865,
          womanHighMyopiaStdCount: '70',
          womanMyopiaRate: 0.8764,
          womanMyopiaStdCount: '78',
          womanStdCount: '89'
        }
      ])
  },
  {
    url: '/basic-api/eyesight/report/school/getMyopiaTrend',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        className: null,
        gradeName: null,
        planTrends: [
          {
            highMyopiaRate: 0.6828,
            lowMyopiaRate: 0.0476,
            manHighMyopiaRate: 0.6493,
            manLowMyopiaRate: 0.0539,
            manMediumMyopiaRate: 0.0829,
            manMyopiaRate: 0.7863,
            mediumMyopiaRate: 0.0678,
            myopiaRate: 0.7983,
            planId: '1283048021704448',
            planName: '陕西省视力筛查计划',
            womanHighMyopiaRate: 0.7148,
            womanLowMyopiaRate: 0.0415,
            womanMediumMyopiaRate: 0.0534,
            womanMyopiaRate: 0.8099
          }
        ],
        prefixName: '小学',
        schoolName: '西工大锦园实验小学',
        studyYear: null
      })
  }
  // {
  //   url: '/basic-api/',
  //   timeout: 100,
  //   method: 'get',
  //   response: () => resultSuccess({})
  // }
];
