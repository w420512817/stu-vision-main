import { resultSuccess } from '../utils';

export default [
  {
    url: '/basic-api/eyesight/report/region/getSchoolStdInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess({
        maxPeoplePrefix: '小学',
        minPeoplePrefix: '小学',
        prefixPeopleRatio: '1',
        prefixSchoolCountInfoVO: {
          collegeCount: '0',
          collegeCountRate: '0%',
          collegeManStdCount: '0',
          collegeStdCount: '0',
          collegeStdCountRate: '0%',
          collegeWoManStdCount: '0',
          highSchoolCount: '0',
          highSchoolCountRate: '0%',
          highSchoolManStdCount: '0',
          highSchoolStdCount: '0',
          highSchoolStdCountRate: '0%',
          highSchoolWoManStdCount: '0',
          kindergartenCount: '0',
          kindergartenCountRate: '0%',
          kindergartenManStdCount: '0',
          kindergartenStdCount: '0',
          kindergartenStdCountRate: '0%',
          kindergartenWoManStdCount: '0',
          manStdCount: '2488',
          middleSchoolCount: '0',
          middleSchoolCountRate: '0%',
          middleSchoolManStdCount: '0',
          middleSchoolStdCount: '0',
          middleSchoolStdCountRate: '0%',
          middleSchoolWoManStdCount: '0',
          normalHighSchoolCount: '0',
          normalHighSchoolManStdCount: '0',
          normalHighSchoolStdCount: '0',
          normalHighSchoolWoManStdCount: '0',
          primarySchoolCount: '2',
          primarySchoolCountRate: '100%',
          primarySchoolManStdCount: '2488',
          primarySchoolStdCount: '7500',
          primarySchoolStdCountRate: '100%',
          primarySchoolWoManStdCount: '2571',
          professionalSchoolCount: '0',
          professionalSchoolManStdCount: '0',
          professionalSchoolStdCount: '0',
          professionalSchoolWoManStdCount: '0',
          schoolCount: '2',
          stdCount: '7500',
          undergraduateCount: '0',
          undergraduateManStdCount: '0',
          undergraduateStdCount: '0',
          undergraduateWoManStdCount: '0',
          universityCount: '0',
          universityManStdCount: '0',
          universityStdCount: '0',
          universityWoManStdCount: '0',
          woManStdCount: '2571'
        },
        region: '庐阳区'
      });
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getOverallMyopiaInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess({
        effectiveStdCount: '5059',
        highMyopiaRate: 0.6732,
        highMyopiaStdCount: '3406',
        manHighMyopiaRate: 0.6704,
        manHighMyopiaStdCount: '1668',
        myopiaRate: 0.7969,
        myopiaStdCount: '4032',
        region: '庐阳区',
        sexMyopiaTypeInfo: [
          {
            manMyopiaRate: 0.8006,
            manMyopiaStdCount: '1992',
            myopiaRate: 0.7969,
            myopiaStdCount: '4032',
            myopiaType: 0,
            womanMyopiaRate: 0.7934,
            womanMyopiaStdCount: '2040'
          },
          {
            manMyopiaRate: 0.0506,
            manMyopiaStdCount: '126',
            myopiaRate: 0.049,
            myopiaStdCount: '248',
            myopiaType: 1,
            womanMyopiaRate: 0.0474,
            womanMyopiaStdCount: '122'
          },
          {
            manMyopiaRate: 0.0795,
            manMyopiaStdCount: '198',
            myopiaRate: 0.0747,
            myopiaStdCount: '378',
            myopiaType: 2,
            womanMyopiaRate: 0.07,
            womanMyopiaStdCount: '180'
          },
          {
            manMyopiaRate: 0.6704,
            manMyopiaStdCount: '1668',
            myopiaRate: 0.6732,
            myopiaStdCount: '3406',
            myopiaType: 3,
            womanMyopiaRate: 0.676,
            womanMyopiaStdCount: '1738'
          },
          {
            manMyopiaRate: 0.1993,
            manMyopiaStdCount: '496',
            myopiaRate: 0.203,
            myopiaStdCount: '1027',
            myopiaType: 4,
            womanMyopiaRate: 0.2065,
            womanMyopiaStdCount: '531'
          }
        ],
        stdCount: '5059',
        womanHighMyopiaRate: 0.676,
        womanHighMyopiaStdCount: '1738'
      });
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getMyopiaInfoByPrefx',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess({
        allList: [
          {
            effectiveStdCount: '5059',
            highMyopiaRate: 0.6732,
            highMyopiaStdCount: '3406',
            lowMyopiaRate: 0.049,
            lowMyopiaStdCount: '248',
            mediumMyopiaRate: 0.0747,
            mediumMyopiaStdCount: '378',
            myopiaRate: 0.7969,
            myopiaStdCount: '4032',
            prefixName: '小学',
            stdCount: '5059'
          },
          {
            effectiveStdCount: '5059',
            highMyopiaRate: 0.6732,
            highMyopiaStdCount: '3406',
            lowMyopiaRate: 0.049,
            lowMyopiaStdCount: '248',
            mediumMyopiaRate: 0.0747,
            mediumMyopiaStdCount: '378',
            myopiaRate: 0.7969,
            myopiaStdCount: '4032',
            prefixName: '合计',
            stdCount: '5059'
          }
        ],
        manList: [
          {
            effectiveStdCount: '2488',
            highMyopiaRate: 0,
            highMyopiaStdCount: '0',
            lowMyopiaRate: 0,
            lowMyopiaStdCount: '0',
            mediumMyopiaRate: 0,
            mediumMyopiaStdCount: '0',
            myopiaRate: 0.8006,
            myopiaStdCount: '1992',
            prefixName: '小学',
            stdCount: '2488'
          },
          {
            effectiveStdCount: '2488',
            highMyopiaRate: 0,
            highMyopiaStdCount: '0',
            lowMyopiaRate: 0,
            lowMyopiaStdCount: '0',
            mediumMyopiaRate: 0,
            mediumMyopiaStdCount: '0',
            myopiaRate: 0.8006,
            myopiaStdCount: '1992',
            prefixName: '合计',
            stdCount: '2488'
          }
        ],
        messageList: [
          {
            highMaxRegionMyopiaRate: 0.6772,
            highMaxRegionName: '‌合肥市庐阳区黄河小学',
            highMinRegionMyopiaRate: 0.6706,
            highMinRegionName: '‌合肥实验小学',
            highMyopiaRate: '0.6732',
            highMyopiaStdCount: 3406,
            maxRegionMyopiaRate: 0.8029,
            maxRegionName: '‌合肥市庐阳区黄河小学',
            minRegionMyopiaRate: 0.793,
            minRegionName: '‌合肥实验小学',
            myopiaRate: '0.7969',
            myopiaStdCount: 4032,
            prefxName: '小学'
          }
        ],
        name: '庐阳区',
        womanList: [
          {
            effectiveStdCount: '2571',
            highMyopiaRate: 0,
            highMyopiaStdCount: '0',
            lowMyopiaRate: 0,
            lowMyopiaStdCount: '0',
            mediumMyopiaRate: 0,
            mediumMyopiaStdCount: '0',
            myopiaRate: 0.7934,
            myopiaStdCount: '2040',
            prefixName: '小学',
            stdCount: '2571'
          },
          {
            effectiveStdCount: '2571',
            highMyopiaRate: 0,
            highMyopiaStdCount: '0',
            lowMyopiaRate: 0,
            lowMyopiaStdCount: '0',
            mediumMyopiaRate: 0,
            mediumMyopiaStdCount: '0',
            myopiaRate: 0.7934,
            myopiaStdCount: '2040',
            prefixName: '合计',
            stdCount: '2571'
          }
        ]
      });
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getCityShortSightedBySex',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        areaId: null,
        areaMyopiaInfoList: [
          {
            areaId: '610104',
            areaName: '瑶海区',
            highMyopiaRate: 0.6828,
            highMyopiaStdCount: '674',
            manHighMyopiaRate: 0.6493,
            manHighMyopiaStdCount: '313',
            manMyopiaRate: 0.7863,
            manMyopiaStdCount: '379',
            manStdCount: '482',
            myopiaRate: 0.7983,
            myopiaStdCount: '788',
            stdCount: '987',
            womanHighMyopiaRate: 0.7148,
            womanHighMyopiaStdCount: '361',
            womanMyopiaRate: 0.8099,
            womanMyopiaStdCount: '409',
            womanStdCount: '505'
          },
          {
            areaId: '610116',
            areaName: '庐江区',
            highMyopiaRate: 0.6949,
            highMyopiaStdCount: '82',
            manHighMyopiaRate: 0.6785,
            manHighMyopiaStdCount: '38',
            manMyopiaRate: 0.7678,
            manMyopiaStdCount: '43',
            manStdCount: '56',
            myopiaRate: 0.7711,
            myopiaStdCount: '91',
            stdCount: '118',
            womanHighMyopiaRate: 0.7096,
            womanHighMyopiaStdCount: '44',
            womanMyopiaRate: 0.7741,
            womanMyopiaStdCount: '48',
            womanStdCount: '62'
          },
          {
            areaId: '610115',
            areaName: '长丰区',
            highMyopiaRate: 0.6962,
            highMyopiaStdCount: '337',
            manHighMyopiaRate: 0.7085,
            manHighMyopiaStdCount: '175',
            manMyopiaRate: 0.8259,
            manMyopiaStdCount: '204',
            manStdCount: '247',
            myopiaRate: 0.8388,
            myopiaStdCount: '406',
            stdCount: '484',
            womanHighMyopiaRate: 0.6835,
            womanHighMyopiaStdCount: '162',
            womanMyopiaRate: 0.8523,
            womanMyopiaStdCount: '202',
            womanStdCount: '237'
          },
          {
            areaId: '610112',
            areaName: '包河区',
            highMyopiaRate: 0.6721,
            highMyopiaStdCount: '654',
            manHighMyopiaRate: 0.6816,
            manHighMyopiaStdCount: '334',
            manMyopiaRate: 0.7979,
            manMyopiaStdCount: '391',
            manStdCount: '490',
            myopiaRate: 0.7923,
            myopiaStdCount: '771',
            stdCount: '973',
            womanHighMyopiaRate: 0.6625,
            womanHighMyopiaStdCount: '320',
            womanMyopiaRate: 0.7867,
            womanMyopiaStdCount: '380',
            womanStdCount: '483'
          },
          {
            areaId: '610113',
            areaName: '肥东区',
            highMyopiaRate: 0.6818,
            highMyopiaStdCount: '1018',
            manHighMyopiaRate: 0.6781,
            manHighMyopiaStdCount: '474',
            manMyopiaRate: 0.8068,
            manMyopiaStdCount: '564',
            manStdCount: '699',
            myopiaRate: 0.807,
            myopiaStdCount: '1205',
            stdCount: '1493',
            womanHighMyopiaRate: 0.6851,
            womanHighMyopiaStdCount: '544',
            womanMyopiaRate: 0.8073,
            womanMyopiaStdCount: '641',
            womanStdCount: '794'
          },
          {
            areaId: '610102',
            areaName: '庐阳区',
            highMyopiaRate: 0.6732,
            highMyopiaStdCount: '3406',
            manHighMyopiaRate: 0.6704,
            manHighMyopiaStdCount: '1668',
            manMyopiaRate: 0.8006,
            manMyopiaStdCount: '1992',
            manStdCount: '2488',
            myopiaRate: 0.7969,
            myopiaStdCount: '4032',
            stdCount: '5059',
            womanHighMyopiaRate: 0.676,
            womanHighMyopiaStdCount: '1738',
            womanMyopiaRate: 0.7934,
            womanMyopiaStdCount: '2040',
            womanStdCount: '2571'
          },
          {
            areaId: null,
            areaName: '总计',
            highMyopiaRate: 0.677,
            highMyopiaStdCount: '6171',
            manHighMyopiaRate: 0.6727,
            manHighMyopiaStdCount: '3002',
            manMyopiaRate: 0.8007,
            manMyopiaStdCount: '3573',
            manStdCount: '4462',
            myopiaRate: 0.8001,
            myopiaStdCount: '7293',
            stdCount: '9114',
            womanHighMyopiaRate: 0.6812,
            womanHighMyopiaStdCount: '3169',
            womanMyopiaRate: 0.7996,
            womanMyopiaStdCount: '3720',
            womanStdCount: '4652'
          }
        ],
        areaName: '‌合肥市',
        gradeMyopiaInfoList: [
          {
            gradeId: '921830381248271',
            gradeName: '一年级',
            highMyopiaRate: 0.6738,
            highMyopiaStdCount: '932',
            manHighMyopiaRate: 0.6612,
            manHighMyopiaStdCount: '451',
            manMyopiaRate: 0.7991,
            manMyopiaStdCount: '545',
            manStdCount: '682',
            myopiaRate: 0.8026,
            myopiaStdCount: '1110',
            stdCount: '1383',
            womanHighMyopiaRate: 0.6861,
            womanHighMyopiaStdCount: '481',
            womanMyopiaRate: 0.8059,
            womanMyopiaStdCount: '565',
            womanStdCount: '701'
          },
          {
            gradeId: '921830381248272',
            gradeName: '二年级',
            highMyopiaRate: 0.6399,
            highMyopiaStdCount: '853',
            manHighMyopiaRate: 0.64,
            manHighMyopiaStdCount: '425',
            manMyopiaRate: 0.7861,
            manMyopiaStdCount: '522',
            manStdCount: '664',
            myopiaRate: 0.7816,
            myopiaStdCount: '1042',
            stdCount: '1333',
            womanHighMyopiaRate: 0.6397,
            womanHighMyopiaStdCount: '428',
            womanMyopiaRate: 0.7772,
            womanMyopiaStdCount: '520',
            womanStdCount: '669'
          },
          {
            gradeId: '921830381248273',
            gradeName: '三年级',
            highMyopiaRate: 0.6924,
            highMyopiaStdCount: '930',
            manHighMyopiaRate: 0.685,
            manHighMyopiaStdCount: '446',
            manMyopiaRate: 0.8125,
            manMyopiaStdCount: '529',
            manStdCount: '651',
            myopiaRate: 0.8101,
            myopiaStdCount: '1088',
            stdCount: '1343',
            womanHighMyopiaRate: 0.6994,
            womanHighMyopiaStdCount: '484',
            womanMyopiaRate: 0.8078,
            womanMyopiaStdCount: '559',
            womanStdCount: '692'
          },
          {
            gradeId: '921830381248274',
            gradeName: '四年级',
            highMyopiaRate: 0.6674,
            highMyopiaStdCount: '893',
            manHighMyopiaRate: 0.6552,
            manHighMyopiaStdCount: '439',
            manMyopiaRate: 0.7746,
            manMyopiaStdCount: '519',
            manStdCount: '670',
            myopiaRate: 0.7795,
            myopiaStdCount: '1043',
            stdCount: '1338',
            womanHighMyopiaRate: 0.6796,
            womanHighMyopiaStdCount: '454',
            womanMyopiaRate: 0.7844,
            womanMyopiaStdCount: '524',
            womanStdCount: '668'
          },
          {
            gradeId: '921830381248275',
            gradeName: '五年级',
            highMyopiaRate: 0.6818,
            highMyopiaStdCount: '941',
            manHighMyopiaRate: 0.6936,
            manHighMyopiaStdCount: '462',
            manMyopiaRate: 0.8093,
            manMyopiaStdCount: '539',
            manStdCount: '666',
            myopiaRate: 0.7956,
            myopiaStdCount: '1098',
            stdCount: '1380',
            womanHighMyopiaRate: 0.6708,
            womanHighMyopiaStdCount: '479',
            womanMyopiaRate: 0.7829,
            womanMyopiaStdCount: '559',
            womanStdCount: '714'
          },
          {
            gradeId: '921830381248276',
            gradeName: '六年级',
            highMyopiaRate: 0.6987,
            highMyopiaStdCount: '951',
            manHighMyopiaRate: 0.6818,
            manHighMyopiaStdCount: '450',
            manMyopiaRate: 0.8,
            manMyopiaStdCount: '528',
            manStdCount: '660',
            myopiaRate: 0.8089,
            myopiaStdCount: '1101',
            stdCount: '1361',
            womanHighMyopiaRate: 0.7146,
            womanHighMyopiaStdCount: '501',
            womanMyopiaRate: 0.8174,
            womanMyopiaStdCount: '573',
            womanStdCount: '701'
          },
          {
            gradeId: '921830381248277',
            gradeName: '初一',
            highMyopiaRate: 0.6871,
            highMyopiaStdCount: '224',
            manHighMyopiaRate: 0.7226,
            manHighMyopiaStdCount: '99',
            manMyopiaRate: 0.8394,
            manMyopiaStdCount: '115',
            manStdCount: '137',
            myopiaRate: 0.8282,
            myopiaStdCount: '270',
            stdCount: '326',
            womanHighMyopiaRate: 0.6613,
            womanHighMyopiaStdCount: '125',
            womanMyopiaRate: 0.8201,
            womanMyopiaStdCount: '155',
            womanStdCount: '189'
          },
          {
            gradeId: '921830381248278',
            gradeName: '初二',
            highMyopiaRate: 0.7437,
            highMyopiaStdCount: '238',
            manHighMyopiaRate: 0.7398,
            manHighMyopiaStdCount: '128',
            manMyopiaRate: 0.8497,
            manMyopiaStdCount: '147',
            manStdCount: '173',
            myopiaRate: 0.8593,
            myopiaStdCount: '275',
            stdCount: '320',
            womanHighMyopiaRate: 0.7482,
            womanHighMyopiaStdCount: '110',
            womanMyopiaRate: 0.8707,
            womanMyopiaStdCount: '128',
            womanStdCount: '147'
          },
          {
            gradeId: '921830381248279',
            gradeName: '初三',
            highMyopiaRate: 0.6333,
            highMyopiaStdCount: '209',
            manHighMyopiaRate: 0.6415,
            manHighMyopiaStdCount: '102',
            manMyopiaRate: 0.8113,
            manMyopiaStdCount: '129',
            manStdCount: '159',
            myopiaRate: 0.806,
            myopiaStdCount: '266',
            stdCount: '330',
            womanHighMyopiaRate: 0.6257,
            womanHighMyopiaStdCount: '107',
            womanMyopiaRate: 0.8011,
            womanMyopiaStdCount: '137',
            womanStdCount: '171'
          }
        ],
        highMyopiaDiffRate: 0.0655,
        manHighMyopiaRate: 0.6727,
        manHighMyopiaStdCount: '3002',
        manMyopiaRate: 0.8007,
        manMyopiaStdCount: '3573',
        manStdCount: '4462',
        maxHighMyopiaRateDiffArea: '瑶海区',
        maxMyopiaRateDiffArea: '长丰区',
        myopiaDiffRate: 0.0264,
        schoolTypeMyopiaRateGrowthList: [
          {
            growthRate: 0.0023,
            prefix: 2,
            prefixName: '小学',
            rateType: 4
          },
          {
            growthRate: 0.0002,
            prefix: 2,
            prefixName: '小学',
            rateType: 3
          },
          {
            growthRate: 0.0023,
            prefix: 2,
            prefixName: '小学',
            rateType: 4
          },
          {
            growthRate: 0.0002,
            prefix: 2,
            prefixName: '小学',
            rateType: 3
          },
          {
            growthRate: 0.0023,
            prefix: 2,
            prefixName: '小学',
            rateType: 4
          },
          {
            growthRate: 0.0002,
            prefix: 2,
            prefixName: '小学',
            rateType: 3
          },
          {
            growthRate: 0.0002,
            prefix: 2,
            prefixName: '小学',
            rateType: 3
          },
          {
            growthRate: 0.0023,
            prefix: 2,
            prefixName: '小学',
            rateType: 4
          },
          {
            growthRate: 0.0002,
            prefix: 2,
            prefixName: '小学',
            rateType: 3
          },
          {
            growthRate: 0.0023,
            prefix: 2,
            prefixName: '小学',
            rateType: 4
          },
          {
            growthRate: 0.0023,
            prefix: 2,
            prefixName: '小学',
            rateType: 4
          },
          {
            growthRate: 0.0002,
            prefix: 2,
            prefixName: '小学',
            rateType: 3
          },
          {
            growthRate: -0.0141,
            prefix: 3,
            prefixName: '初中',
            rateType: 3
          },
          {
            growthRate: -0.0095,
            prefix: 3,
            prefixName: '初中',
            rateType: 4
          },
          {
            growthRate: -0.0095,
            prefix: 3,
            prefixName: '初中',
            rateType: 4
          },
          {
            growthRate: -0.0141,
            prefix: 3,
            prefixName: '初中',
            rateType: 3
          },
          {
            growthRate: -0.0141,
            prefix: 3,
            prefixName: '初中',
            rateType: 3
          },
          {
            growthRate: -0.0095,
            prefix: 3,
            prefixName: '初中',
            rateType: 4
          }
        ],
        womanHighMyopiaRate: 0.6812,
        womanHighMyopiaStdCount: '3169',
        womanMyopiaRate: 0.7996,
        womanMyopiaStdCount: '3720',
        womanStdCount: '4652'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getMyopiaInfoByAreaType',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            cityCount: '4032',
            cityHighCount: '3406',
            cityHighMyopiaRate: 0.6732,
            cityMyopiaRate: 0.7969,
            name: '小学',
            townCount: '0',
            townHighCount: '0',
            townHighMyopiaRate: 0,
            townMyopiaRate: 0
          },
          {
            cityCount: '4032',
            cityHighCount: '3406',
            cityHighMyopiaRate: 0.6732,
            cityMyopiaRate: 0.7969,
            name: '合计',
            townCount: '0',
            townHighCount: '0',
            townHighMyopiaRate: 0,
            townMyopiaRate: 0
          }
        ],
        message: {
          cityCount: '2',
          cityHighMyopiaRate: 0.6732,
          cityMyopiaRate: 0.7969,
          cityStudentCount: '5059',
          count: 2,
          differMyopiaRate: 0.7969,
          highDifferMyopiaRate: 0.6732,
          townCount: '0',
          townHighMyopiaRate: 0,
          townMyopiaRate: 0,
          townStudentCount: null
        },
        name: '庐阳区'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getMyopiaInfoBySchoolType',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            highMyopiaCount: '3406',
            highMyopiaRate: 0.6732,
            myopiaCount: '4032',
            myopiaRate: 0.7969,
            name: '小学-常规',
            prefixName: '小学',
            schoolType: 10,
            schoolTypeName: '常规'
          }
        ],
        messageList: [
          {
            prefxSchoolTypeVOS: [
              {
                prefix: 2,
                prefixName: '小学',
                prefxSchoolTypeCount: 2,
                schoolType: 10
              }
            ],
            schoolType: 10,
            schoolTypeCount: 2,
            schoolTypeName: '常规'
          }
        ],
        name: '庐阳区'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getKeySchoolMyopiaSituation',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = [
        {
          highMyopiaRate: 0.6758,
          highMyopiaStdCount: '5500',
          myopiaRate: 0.7965,
          myopiaStdCount: '6482',
          name: '小学-常规',
          prefix: 2,
          prefixName: '小学',
          schoolLevel: 10,
          schoolLevelName: '常规',
          stdCount: '8138'
        },
        {
          highMyopiaRate: 0.6875,
          highMyopiaStdCount: '671',
          myopiaRate: 0.8309,
          myopiaStdCount: '811',
          name: '初中-常规',
          prefix: 3,
          prefixName: '初中',
          schoolLevel: 10,
          schoolLevelName: '常规',
          stdCount: '976'
        }
      ];
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getMyopiaCorrectInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        contactLensStdCount: '1425',
        correctMyopiaRate: 0.0524,
        correctMyopiaStdCount: '313',
        frameGlassesStdCount: '1350',
        gradeMyopiaCorrectInfos: [
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '242',
            correctMyopiaRate: 0.0518,
            correctMyopiaStdCount: '52',
            frameGlassesStdCount: '239',
            gradeId: '921830381248271',
            gradeName: '一年级',
            manCorrectMyopiaRate: 0.0621,
            manCorrectMyopiaStdCount: '22',
            manMyopiaStdCount: '354',
            manUdMyopiaRate: 0.7203,
            manUdMyopiaStdCount: '255',
            manUnMyopiaRate: 0.2175,
            manUnMyopiaStdCount: '77',
            myopiaStdCount: '1003',
            okLensStdCount: '307',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2022',
            udMyopiaRate: 0.7337,
            udMyopiaStdCount: '736',
            unMyopiaRate: 0.2143,
            unMyopiaStdCount: '215',
            womanCorrectMyopiaRate: 0.0306,
            womanCorrectMyopiaStdCount: '11',
            womanMyopiaStdCount: '359',
            womanUdMyopiaRate: 0.7353,
            womanUdMyopiaStdCount: '264',
            womanUnMyopiaRate: 0.2339,
            womanUnMyopiaStdCount: '84'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '230',
            correctMyopiaRate: 0.0502,
            correctMyopiaStdCount: '50',
            frameGlassesStdCount: '206',
            gradeId: '921830381248272',
            gradeName: '二年级',
            manCorrectMyopiaRate: 0.0628,
            manCorrectMyopiaStdCount: '22',
            manMyopiaStdCount: '350',
            manUdMyopiaRate: 0.6914,
            manUdMyopiaStdCount: '242',
            manUnMyopiaRate: 0.2457,
            manUnMyopiaStdCount: '86',
            myopiaStdCount: '996',
            okLensStdCount: '339',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2021',
            udMyopiaRate: 0.7279,
            udMyopiaStdCount: '725',
            unMyopiaRate: 0.2218,
            unMyopiaStdCount: '221',
            womanCorrectMyopiaRate: 0.043,
            womanCorrectMyopiaStdCount: '13',
            womanMyopiaStdCount: '302',
            womanUdMyopiaRate: 0.7483,
            womanUdMyopiaStdCount: '226',
            womanUnMyopiaRate: 0.2086,
            womanUnMyopiaStdCount: '63'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '247',
            correctMyopiaRate: 0.0595,
            correctMyopiaStdCount: '60',
            frameGlassesStdCount: '236',
            gradeId: '921830381248273',
            gradeName: '三年级',
            manCorrectMyopiaRate: 0.0595,
            manCorrectMyopiaStdCount: '19',
            manMyopiaStdCount: '319',
            manUdMyopiaRate: 0.699,
            manUdMyopiaStdCount: '223',
            manUnMyopiaRate: 0.2413,
            manUnMyopiaStdCount: '77',
            myopiaStdCount: '1007',
            okLensStdCount: '305',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2020',
            udMyopiaRate: 0.7229,
            udMyopiaStdCount: '728',
            unMyopiaRate: 0.2174,
            unMyopiaStdCount: '219',
            womanCorrectMyopiaRate: 0.0639,
            womanCorrectMyopiaStdCount: '22',
            womanMyopiaStdCount: '344',
            womanUdMyopiaRate: 0.7238,
            womanUdMyopiaStdCount: '249',
            womanUnMyopiaRate: 0.2122,
            womanUnMyopiaStdCount: '73'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '233',
            correctMyopiaRate: 0.0462,
            correctMyopiaStdCount: '45',
            frameGlassesStdCount: '216',
            gradeId: '921830381248274',
            gradeName: '四年级',
            manCorrectMyopiaRate: 0.0569,
            manCorrectMyopiaStdCount: '18',
            manMyopiaStdCount: '316',
            manUdMyopiaRate: 0.7151,
            manUdMyopiaStdCount: '226',
            manUnMyopiaRate: 0.2278,
            manUnMyopiaStdCount: '72',
            myopiaStdCount: '972',
            okLensStdCount: '305',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2019',
            udMyopiaRate: 0.7294,
            udMyopiaStdCount: '709',
            unMyopiaRate: 0.2242,
            unMyopiaStdCount: '218',
            womanCorrectMyopiaRate: 0.0464,
            womanCorrectMyopiaStdCount: '15',
            womanMyopiaStdCount: '323',
            womanUdMyopiaRate: 0.7461,
            womanUdMyopiaStdCount: '241',
            womanUnMyopiaRate: 0.2074,
            womanUnMyopiaStdCount: '67'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '239',
            correctMyopiaRate: 0.0536,
            correctMyopiaStdCount: '53',
            frameGlassesStdCount: '223',
            gradeId: '921830381248275',
            gradeName: '五年级',
            manCorrectMyopiaRate: 0.0527,
            manCorrectMyopiaStdCount: '17',
            manMyopiaStdCount: '322',
            manUdMyopiaRate: 0.6956,
            manUdMyopiaStdCount: '224',
            manUnMyopiaRate: 0.2515,
            manUnMyopiaStdCount: '81',
            myopiaStdCount: '987',
            okLensStdCount: '297',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2018',
            udMyopiaRate: 0.7152,
            udMyopiaStdCount: '706',
            unMyopiaRate: 0.231,
            unMyopiaStdCount: '228',
            womanCorrectMyopiaRate: 0.0436,
            womanCorrectMyopiaStdCount: '15',
            womanMyopiaStdCount: '344',
            womanUdMyopiaRate: 0.7354,
            womanUdMyopiaStdCount: '253',
            womanUnMyopiaRate: 0.2209,
            womanUnMyopiaStdCount: '76'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '234',
            correctMyopiaRate: 0.0527,
            correctMyopiaStdCount: '53',
            frameGlassesStdCount: '230',
            gradeId: '921830381248276',
            gradeName: '六年级',
            manCorrectMyopiaRate: 0.0664,
            manCorrectMyopiaStdCount: '22',
            manMyopiaStdCount: '331',
            manUdMyopiaRate: 0.6797,
            manUdMyopiaStdCount: '225',
            manUnMyopiaRate: 0.2537,
            manUnMyopiaStdCount: '84',
            myopiaStdCount: '1005',
            okLensStdCount: '290',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2017',
            udMyopiaRate: 0.6975,
            udMyopiaStdCount: '701',
            unMyopiaRate: 0.2497,
            unMyopiaStdCount: '251',
            womanCorrectMyopiaRate: 0.0434,
            womanCorrectMyopiaStdCount: '16',
            womanMyopiaStdCount: '368',
            womanUdMyopiaRate: 0.7092,
            womanUdMyopiaStdCount: '261',
            womanUnMyopiaRate: 0.2472,
            womanUnMyopiaStdCount: '91'
          }
        ],
        manCorrectMyopiaRate: 0.0602,
        manCorrectMyopiaStdCount: '120',
        manMyopiaStdCount: '1992',
        manUdMyopiaRate: 0.7003,
        manUdMyopiaStdCount: '1395',
        manUnMyopiaRate: 0.2394,
        manUnMyopiaStdCount: '477',
        myopiaStdCount: '5970',
        okLensStdCount: '1843',
        otherRate: 0,
        region: '庐阳区',
        regionId: '610102',
        schoolMyopiaCorrectInfos: [
          {
            contactLensStdCount: '1425',
            correctMyopiaRate: 0.0524,
            correctMyopiaStdCount: '313',
            frameGlassesStdCount: '1350',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0602,
            manCorrectMyopiaStdCount: '120',
            manMyopiaStdCount: '1992',
            manUdMyopiaRate: 0.7003,
            manUdMyopiaStdCount: '1395',
            manUnMyopiaRate: 0.2394,
            manUnMyopiaStdCount: '477',
            myopiaStdCount: '5970',
            okLensStdCount: '1843',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            udMyopiaRate: 0.7211,
            udMyopiaStdCount: '4305',
            unMyopiaRate: 0.2264,
            unMyopiaStdCount: '1352',
            womanCorrectMyopiaRate: 0.045,
            womanCorrectMyopiaStdCount: '92',
            womanMyopiaStdCount: '2040',
            womanUdMyopiaRate: 0.7323,
            womanUdMyopiaStdCount: '1494',
            womanUnMyopiaRate: 0.2225,
            womanUnMyopiaStdCount: '454'
          },
          {
            contactLensStdCount: '1425',
            correctMyopiaRate: 0.0524,
            correctMyopiaStdCount: '313',
            frameGlassesStdCount: '1350',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0602,
            manCorrectMyopiaStdCount: '120',
            manMyopiaStdCount: '1992',
            manUdMyopiaRate: 0.7003,
            manUdMyopiaStdCount: '1395',
            manUnMyopiaRate: 0.2394,
            manUnMyopiaStdCount: '477',
            myopiaStdCount: '5970',
            okLensStdCount: '1843',
            otherRate: 0,
            prefix: null,
            prefixName: '合计',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            udMyopiaRate: 0.7211,
            udMyopiaStdCount: '4305',
            unMyopiaRate: 0.2264,
            unMyopiaStdCount: '1352',
            womanCorrectMyopiaRate: 0.045,
            womanCorrectMyopiaStdCount: '92',
            womanMyopiaStdCount: '2040',
            womanUdMyopiaRate: 0.7323,
            womanUdMyopiaStdCount: '1494',
            womanUnMyopiaRate: 0.2225,
            womanUnMyopiaStdCount: '454'
          }
        ],
        udMyopiaRate: 0.7211,
        udMyopiaStdCount: '4305',
        unMyopiaRate: 0.2264,
        unMyopiaStdCount: '1352',
        womanCorrectMyopiaRate: 0.045,
        womanCorrectMyopiaStdCount: '92',
        womanMyopiaStdCount: '2040',
        womanUdMyopiaRate: 0.7323,
        womanUdMyopiaStdCount: '1494',
        womanUnMyopiaRate: 0.2225,
        womanUnMyopiaStdCount: '454'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getCityHyperopiaReserve',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        areaHyperopiaReserveInfos: [
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '包河区',
            regionId: '610112'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '庐阳区',
            regionId: '610102'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '2',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '庐江区',
            regionId: '610116'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '肥东区',
            regionId: '610113'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '瑶海区',
            regionId: '610104'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '长丰区',
            regionId: '610115'
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
            gradeName: '三年级',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '1',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0'
          },
          {
            gradeId: '921830381248274',
            gradeName: '四年级',
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '1',
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
        hyperopiaReservesEnough: '0',
        hyperopiaReservesEnoughNum: '2',
        hyperopiaReservesNotEnough: '0',
        hyperopiaReservesNotEnoughNum: '0'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getMyopiaInfoByAge',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            age: '8岁',
            highMyopiaCount: '371',
            highMyopiaMyopiaRate: 0.644,
            myopiaCount: '442',
            myopiaMyopiaRate: 0.7673
          },
          {
            age: '9岁',
            highMyopiaCount: '371',
            highMyopiaMyopiaRate: 0.6463,
            myopiaCount: '463',
            myopiaMyopiaRate: 0.8066
          },
          {
            age: '10岁',
            highMyopiaCount: '378',
            highMyopiaMyopiaRate: 0.6417,
            myopiaCount: '446',
            myopiaMyopiaRate: 0.7572
          },
          {
            age: '11岁',
            highMyopiaCount: '368',
            highMyopiaMyopiaRate: 0.6917,
            myopiaCount: '440',
            myopiaMyopiaRate: 0.827
          },
          {
            age: '12岁',
            highMyopiaCount: '408',
            highMyopiaMyopiaRate: 0.6986,
            myopiaCount: '473',
            myopiaMyopiaRate: 0.8099
          },
          {
            age: '13岁',
            highMyopiaCount: '387',
            highMyopiaMyopiaRate: 0.6813,
            myopiaCount: '450',
            myopiaMyopiaRate: 0.7922
          },
          {
            age: '14岁',
            highMyopiaCount: '358',
            highMyopiaMyopiaRate: 0.6871,
            myopiaCount: '419',
            myopiaMyopiaRate: 0.8042
          },
          {
            age: '15岁',
            highMyopiaCount: '389',
            highMyopiaMyopiaRate: 0.68,
            myopiaCount: '461',
            myopiaMyopiaRate: 0.8059
          },
          {
            age: '16岁',
            highMyopiaCount: '376',
            highMyopiaMyopiaRate: 0.6924,
            myopiaCount: '438',
            myopiaMyopiaRate: 0.8066
          }
        ],
        name: '庐阳区'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getVisionDistribute',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            rate: 0.0486,
            vision: '5.3',
            visionNum: 550
          },
          {
            rate: 0.0467,
            vision: '5.2',
            visionNum: 528
          },
          {
            rate: 0.0488,
            vision: '5.1',
            visionNum: 552
          },
          {
            rate: 0.0453,
            vision: '5.0',
            visionNum: 512
          },
          {
            rate: 0.0482,
            vision: '4.9',
            visionNum: 545
          },
          {
            rate: 0.0478,
            vision: '4.8',
            visionNum: 541
          },
          {
            rate: 0.0473,
            vision: '4.7',
            visionNum: 535
          },
          {
            rate: 0.0459,
            vision: '4.6',
            visionNum: 519
          },
          {
            rate: 0.0468,
            vision: '4.5',
            visionNum: 530
          },
          {
            rate: 0.0478,
            vision: '4.4',
            visionNum: 541
          },
          {
            rate: 0.0503,
            vision: '4.3',
            visionNum: 569
          },
          {
            rate: 0.0474,
            vision: '4.2',
            visionNum: 536
          },
          {
            rate: 0.0476,
            vision: '4.1',
            visionNum: 539
          },
          {
            rate: 0.0489,
            vision: '4.0',
            visionNum: 553
          },
          {
            rate: 0.0459,
            vision: '3.9',
            visionNum: 519
          },
          {
            rate: 0.0496,
            vision: '3.8',
            visionNum: 561
          },
          {
            rate: 0.0467,
            vision: '3.7',
            visionNum: 528
          },
          {
            rate: 0.0472,
            vision: '3.6',
            visionNum: 534
          },
          {
            rate: 0.0494,
            vision: '3.5',
            visionNum: 559
          },
          {
            rate: 0.0474,
            vision: '3.4',
            visionNum: 536
          },
          {
            rate: 0.0238,
            vision: '3.3',
            visionNum: 269
          }
        ],
        name: '庐阳区'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getCityPoorVision',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        areaPoorVisionInfoList: [
          {
            eyeSightCheckCount: '1156',
            highPoorVisionCount: '980',
            highPoorVisionRate: 0.8477,
            lowPoorVisionCount: '24',
            lowPoorVisionRate: 0.0207,
            midPoorVisionCount: '109',
            midPoorVisionRate: 0.0942,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '1113',
            poorVisionRate: 0.9628,
            region: '包河区',
            regionId: '610112'
          },
          {
            eyeSightCheckCount: '5657',
            highPoorVisionCount: '4748',
            highPoorVisionRate: 0.8393,
            lowPoorVisionCount: '130',
            lowPoorVisionRate: 0.0229,
            midPoorVisionCount: '530',
            midPoorVisionRate: 0.0936,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '5408',
            poorVisionRate: 0.9559,
            region: '庐阳区',
            regionId: '610102'
          },
          {
            eyeSightCheckCount: '93',
            highPoorVisionCount: '76',
            highPoorVisionRate: 0.8172,
            lowPoorVisionCount: '0',
            lowPoorVisionRate: 0,
            midPoorVisionCount: '8',
            midPoorVisionRate: 0.086,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '84',
            poorVisionRate: 0.9032,
            region: '庐江区',
            regionId: '610116'
          },
          {
            eyeSightCheckCount: '1648',
            highPoorVisionCount: '1352',
            highPoorVisionRate: 0.8203,
            lowPoorVisionCount: '41',
            lowPoorVisionRate: 0.0248,
            midPoorVisionCount: '181',
            midPoorVisionRate: 0.1098,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '1574',
            poorVisionRate: 0.955,
            region: '肥东区',
            regionId: '610113'
          },
          {
            eyeSightCheckCount: '1150',
            highPoorVisionCount: '960',
            highPoorVisionRate: 0.8347,
            lowPoorVisionCount: '26',
            lowPoorVisionRate: 0.0226,
            midPoorVisionCount: '106',
            midPoorVisionRate: 0.0921,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '1092',
            poorVisionRate: 0.9495,
            region: '瑶海区',
            regionId: '610104'
          },
          {
            eyeSightCheckCount: '547',
            highPoorVisionCount: '458',
            highPoorVisionRate: 0.8372,
            lowPoorVisionCount: '14',
            lowPoorVisionRate: 0.0255,
            midPoorVisionCount: '51',
            midPoorVisionRate: 0.0932,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '523',
            poorVisionRate: 0.9561,
            region: '长丰区',
            regionId: '610115'
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
            region: '合计',
            regionId: null
          }
        ],
        gradePoorVisionInfoList: [
          {
            eyeSightCheckCount: '9156',
            highPoorVisionCount: '7660',
            highPoorVisionRate: 0.8366,
            lowPoorVisionCount: '206',
            lowPoorVisionRate: 0.0224,
            midPoorVisionCount: '879',
            midPoorVisionRate: 0.096,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '8745',
            poorVisionRate: 0.9551,
            unifyPrefx: 2,
            unifyPrefxName: '小学'
          },
          {
            eyeSightCheckCount: '1095',
            highPoorVisionCount: '914',
            highPoorVisionRate: 0.8347,
            lowPoorVisionCount: '29',
            lowPoorVisionRate: 0.0264,
            midPoorVisionCount: '106',
            midPoorVisionRate: 0.0968,
            otherPoorVisionCount: '0',
            otherPoorVisionRate: 0,
            poorVisionCount: '1049',
            poorVisionRate: 0.9579,
            unifyPrefx: 3,
            unifyPrefxName: '初中'
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
            unifyPrefx: null,
            unifyPrefxName: '合计'
          }
        ]
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getPrefixMyopiaRate',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = [
        {
          effectiveStdCount: '8138',
          myopiaRate: 0.7965,
          myopiaStdCount: '6482',
          prefix: 2,
          prefixName: '小学',
          schoolCount: '6'
        },
        {
          effectiveStdCount: '976',
          myopiaRate: 0.8309,
          myopiaStdCount: '811',
          prefix: 3,
          prefixName: '初中',
          schoolCount: '2'
        }
      ];
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getDiopterSituation',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            className: null,
            classYear: '2022',
            dpSphAverageValue: 0.08,
            dpSphStandardDeviation: 11.47,
            eqDpSphAverageValue: -4.88,
            eqDpSphStandardDeviation: 11.8,
            gradeName: '一年级',
            name: '(小学2022)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2021',
            dpSphAverageValue: 0.41,
            dpSphStandardDeviation: 11.41,
            eqDpSphAverageValue: -4.51,
            eqDpSphStandardDeviation: 11.76,
            gradeName: '二年级',
            name: '(小学2021)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2020',
            dpSphAverageValue: -0.1,
            dpSphStandardDeviation: 11.52,
            eqDpSphAverageValue: -5,
            eqDpSphStandardDeviation: 11.86,
            gradeName: '三年级',
            name: '(小学2020)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2019',
            dpSphAverageValue: 0.17,
            dpSphStandardDeviation: 11.45,
            eqDpSphAverageValue: -4.84,
            eqDpSphStandardDeviation: 11.93,
            gradeName: '四年级',
            name: '(小学2019)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2018',
            dpSphAverageValue: 0.48,
            dpSphStandardDeviation: 11.33,
            eqDpSphAverageValue: -4.48,
            eqDpSphStandardDeviation: 11.62,
            gradeName: '五年级',
            name: '(小学2018)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2017',
            dpSphAverageValue: -0.32,
            dpSphStandardDeviation: 11.44,
            eqDpSphAverageValue: -5.25,
            eqDpSphStandardDeviation: 11.79,
            gradeName: '六年级',
            name: '(小学2017)',
            prefix: 2
          }
        ],
        dpSphList: [
          {
            count: '2',
            data: -20
          },
          {
            count: '78',
            data: -19.75
          },
          {
            count: '104',
            data: -19.5
          },
          {
            count: '116',
            data: -19.25
          },
          {
            count: '95',
            data: -19
          },
          {
            count: '95',
            data: -18.75
          },
          {
            count: '82',
            data: -18.5
          },
          {
            count: '88',
            data: -18.25
          },
          {
            count: '99',
            data: -18
          },
          {
            count: '98',
            data: -17.75
          },
          {
            count: '95',
            data: -17.5
          },
          {
            count: '97',
            data: -17.25
          },
          {
            count: '89',
            data: -17
          },
          {
            count: '97',
            data: -16.75
          },
          {
            count: '96',
            data: -16.5
          },
          {
            count: '86',
            data: -16.25
          },
          {
            count: '93',
            data: -16
          },
          {
            count: '83',
            data: -15.75
          },
          {
            count: '99',
            data: -15.5
          },
          {
            count: '87',
            data: -15.25
          },
          {
            count: '94',
            data: -15
          },
          {
            count: '94',
            data: -14.75
          },
          {
            count: '102',
            data: -14.5
          },
          {
            count: '71',
            data: -14.25
          },
          {
            count: '74',
            data: -14
          },
          {
            count: '71',
            data: -13.75
          },
          {
            count: '72',
            data: -13.5
          },
          {
            count: '84',
            data: -13.25
          },
          {
            count: '89',
            data: -13
          },
          {
            count: '89',
            data: -12.75
          },
          {
            count: '80',
            data: -12.5
          },
          {
            count: '91',
            data: -12.25
          },
          {
            count: '96',
            data: -12
          },
          {
            count: '111',
            data: -11.75
          },
          {
            count: '102',
            data: -11.5
          },
          {
            count: '97',
            data: -11.25
          },
          {
            count: '86',
            data: -11
          },
          {
            count: '107',
            data: -10.75
          },
          {
            count: '92',
            data: -10.5
          },
          {
            count: '92',
            data: -10.25
          },
          {
            count: '111',
            data: -10
          },
          {
            count: '106',
            data: -9.75
          },
          {
            count: '98',
            data: -9.5
          },
          {
            count: '102',
            data: -9.25
          },
          {
            count: '86',
            data: -9
          },
          {
            count: '116',
            data: -8.75
          },
          {
            count: '75',
            data: -8.5
          },
          {
            count: '79',
            data: -8.25
          },
          {
            count: '87',
            data: -8
          },
          {
            count: '100',
            data: -7.75
          },
          {
            count: '91',
            data: -7.5
          },
          {
            count: '101',
            data: -7.25
          },
          {
            count: '77',
            data: -7
          },
          {
            count: '103',
            data: -6.75
          },
          {
            count: '97',
            data: -6.5
          },
          {
            count: '96',
            data: -6.25
          },
          {
            count: '93',
            data: -6
          },
          {
            count: '78',
            data: -5.75
          },
          {
            count: '83',
            data: -5.5
          },
          {
            count: '99',
            data: -5.25
          },
          {
            count: '91',
            data: -5
          },
          {
            count: '111',
            data: -4.75
          },
          {
            count: '97',
            data: -4.5
          },
          {
            count: '107',
            data: -4.25
          },
          {
            count: '98',
            data: -4
          },
          {
            count: '84',
            data: -3.75
          },
          {
            count: '93',
            data: -3.5
          },
          {
            count: '97',
            data: -3.25
          },
          {
            count: '102',
            data: -3
          },
          {
            count: '77',
            data: -2.75
          },
          {
            count: '106',
            data: -2.5
          },
          {
            count: '102',
            data: -2.25
          },
          {
            count: '81',
            data: -2
          },
          {
            count: '85',
            data: -1.75
          },
          {
            count: '87',
            data: -1.5
          },
          {
            count: '97',
            data: -1.25
          },
          {
            count: '100',
            data: -1
          },
          {
            count: '94',
            data: -0.75
          },
          {
            count: '76',
            data: -0.5
          },
          {
            count: '103',
            data: -0.25
          },
          {
            count: '196',
            data: 0
          },
          {
            count: '84',
            data: 0.25
          },
          {
            count: '86',
            data: 0.5
          },
          {
            count: '94',
            data: 0.75
          },
          {
            count: '95',
            data: 1
          },
          {
            count: '113',
            data: 1.25
          },
          {
            count: '88',
            data: 1.5
          },
          {
            count: '88',
            data: 1.75
          },
          {
            count: '87',
            data: 2
          },
          {
            count: '96',
            data: 2.25
          },
          {
            count: '94',
            data: 2.5
          },
          {
            count: '75',
            data: 2.75
          },
          {
            count: '101',
            data: 3
          },
          {
            count: '113',
            data: 3.25
          },
          {
            count: '85',
            data: 3.5
          },
          {
            count: '95',
            data: 3.75
          },
          {
            count: '100',
            data: 4
          },
          {
            count: '103',
            data: 4.25
          },
          {
            count: '80',
            data: 4.5
          },
          {
            count: '87',
            data: 4.75
          },
          {
            count: '102',
            data: 5
          },
          {
            count: '96',
            data: 5.25
          },
          {
            count: '101',
            data: 5.5
          },
          {
            count: '101',
            data: 5.75
          },
          {
            count: '88',
            data: 6
          },
          {
            count: '105',
            data: 6.25
          },
          {
            count: '88',
            data: 6.5
          },
          {
            count: '85',
            data: 6.75
          },
          {
            count: '108',
            data: 7
          },
          {
            count: '99',
            data: 7.25
          },
          {
            count: '82',
            data: 7.5
          },
          {
            count: '82',
            data: 7.75
          },
          {
            count: '97',
            data: 8
          },
          {
            count: '105',
            data: 8.25
          },
          {
            count: '87',
            data: 8.5
          },
          {
            count: '92',
            data: 8.75
          },
          {
            count: '99',
            data: 9
          },
          {
            count: '87',
            data: 9.25
          },
          {
            count: '94',
            data: 9.5
          },
          {
            count: '94',
            data: 9.75
          },
          {
            count: '95',
            data: 10
          },
          {
            count: '108',
            data: 10.25
          },
          {
            count: '95',
            data: 10.5
          },
          {
            count: '93',
            data: 10.75
          },
          {
            count: '97',
            data: 11
          },
          {
            count: '95',
            data: 11.25
          },
          {
            count: '81',
            data: 11.5
          },
          {
            count: '93',
            data: 11.75
          },
          {
            count: '92',
            data: 12
          },
          {
            count: '113',
            data: 12.25
          },
          {
            count: '89',
            data: 12.5
          },
          {
            count: '102',
            data: 12.75
          },
          {
            count: '95',
            data: 13
          },
          {
            count: '93',
            data: 13.25
          },
          {
            count: '83',
            data: 13.5
          },
          {
            count: '114',
            data: 13.75
          },
          {
            count: '90',
            data: 14
          },
          {
            count: '85',
            data: 14.25
          },
          {
            count: '109',
            data: 14.5
          },
          {
            count: '103',
            data: 14.75
          },
          {
            count: '77',
            data: 15
          },
          {
            count: '94',
            data: 15.25
          },
          {
            count: '101',
            data: 15.5
          },
          {
            count: '103',
            data: 15.75
          },
          {
            count: '98',
            data: 16
          },
          {
            count: '88',
            data: 16.25
          },
          {
            count: '90',
            data: 16.5
          },
          {
            count: '98',
            data: 16.75
          },
          {
            count: '92',
            data: 17
          },
          {
            count: '101',
            data: 17.25
          },
          {
            count: '88',
            data: 17.5
          },
          {
            count: '95',
            data: 17.75
          },
          {
            count: '83',
            data: 18
          },
          {
            count: '86',
            data: 18.25
          },
          {
            count: '84',
            data: 18.5
          },
          {
            count: '93',
            data: 18.75
          },
          {
            count: '103',
            data: 19
          },
          {
            count: '91',
            data: 19.25
          },
          {
            count: '114',
            data: 19.5
          },
          {
            count: '101',
            data: 19.75
          },
          {
            count: '4',
            data: 20
          }
        ],
        eqDpSphList: [
          {
            count: '2',
            data: -29.38
          },
          {
            count: '4',
            data: -29.25
          },
          {
            count: '9',
            data: -29.13
          },
          {
            count: '3',
            data: -29
          },
          {
            count: '4',
            data: -28.88
          },
          {
            count: '5',
            data: -28.75
          },
          {
            count: '7',
            data: -28.63
          },
          {
            count: '10',
            data: -28.5
          },
          {
            count: '4',
            data: -28.38
          },
          {
            count: '5',
            data: -28.25
          },
          {
            count: '13',
            data: -28.13
          },
          {
            count: '8',
            data: -28
          },
          {
            count: '10',
            data: -27.88
          },
          {
            count: '7',
            data: -27.75
          },
          {
            count: '9',
            data: -27.63
          },
          {
            count: '12',
            data: -27.5
          },
          {
            count: '5',
            data: -27.38
          },
          {
            count: '13',
            data: -27.25
          },
          {
            count: '10',
            data: -27.13
          },
          {
            count: '11',
            data: -27
          },
          {
            count: '11',
            data: -26.88
          },
          {
            count: '7',
            data: -26.75
          },
          {
            count: '16',
            data: -26.63
          },
          {
            count: '14',
            data: -26.5
          },
          {
            count: '9',
            data: -26.38
          },
          {
            count: '12',
            data: -26.25
          },
          {
            count: '18',
            data: -26.13
          },
          {
            count: '22',
            data: -26
          },
          {
            count: '28',
            data: -25.88
          },
          {
            count: '16',
            data: -25.75
          },
          {
            count: '26',
            data: -25.63
          },
          {
            count: '23',
            data: -25.5
          },
          {
            count: '27',
            data: -25.38
          },
          {
            count: '19',
            data: -25.25
          },
          {
            count: '29',
            data: -25.13
          },
          {
            count: '18',
            data: -25
          },
          {
            count: '29',
            data: -24.88
          },
          {
            count: '23',
            data: -24.75
          },
          {
            count: '26',
            data: -24.63
          },
          {
            count: '25',
            data: -24.5
          },
          {
            count: '36',
            data: -24.38
          },
          {
            count: '21',
            data: -24.25
          },
          {
            count: '20',
            data: -24.13
          },
          {
            count: '30',
            data: -24
          },
          {
            count: '26',
            data: -23.88
          },
          {
            count: '29',
            data: -23.75
          },
          {
            count: '30',
            data: -23.63
          },
          {
            count: '28',
            data: -23.5
          },
          {
            count: '32',
            data: -23.38
          },
          {
            count: '28',
            data: -23.25
          },
          {
            count: '16',
            data: -23.13
          },
          {
            count: '36',
            data: -23
          },
          {
            count: '34',
            data: -22.88
          },
          {
            count: '33',
            data: -22.75
          },
          {
            count: '46',
            data: -22.63
          },
          {
            count: '27',
            data: -22.5
          },
          {
            count: '28',
            data: -22.38
          },
          {
            count: '26',
            data: -22.25
          },
          {
            count: '41',
            data: -22.13
          },
          {
            count: '37',
            data: -22
          },
          {
            count: '32',
            data: -21.88
          },
          {
            count: '43',
            data: -21.75
          },
          {
            count: '35',
            data: -21.63
          },
          {
            count: '53',
            data: -21.5
          },
          {
            count: '37',
            data: -21.38
          },
          {
            count: '42',
            data: -21.25
          },
          {
            count: '42',
            data: -21.13
          },
          {
            count: '43',
            data: -21
          },
          {
            count: '29',
            data: -20.88
          },
          {
            count: '44',
            data: -20.75
          },
          {
            count: '42',
            data: -20.63
          },
          {
            count: '40',
            data: -20.5
          },
          {
            count: '56',
            data: -20.38
          },
          {
            count: '45',
            data: -20.25
          },
          {
            count: '39',
            data: -20.13
          },
          {
            count: '45',
            data: -20
          },
          {
            count: '56',
            data: -19.88
          },
          {
            count: '35',
            data: -19.75
          },
          {
            count: '55',
            data: -19.63
          },
          {
            count: '45',
            data: -19.5
          },
          {
            count: '61',
            data: -19.38
          },
          {
            count: '47',
            data: -19.25
          },
          {
            count: '51',
            data: -19.13
          },
          {
            count: '35',
            data: -19
          },
          {
            count: '55',
            data: -18.88
          },
          {
            count: '30',
            data: -18.75
          },
          {
            count: '55',
            data: -18.63
          },
          {
            count: '40',
            data: -18.5
          },
          {
            count: '52',
            data: -18.38
          },
          {
            count: '51',
            data: -18.25
          },
          {
            count: '39',
            data: -18.13
          },
          {
            count: '49',
            data: -18
          },
          {
            count: '40',
            data: -17.88
          },
          {
            count: '49',
            data: -17.75
          },
          {
            count: '41',
            data: -17.63
          },
          {
            count: '56',
            data: -17.5
          },
          {
            count: '45',
            data: -17.38
          },
          {
            count: '51',
            data: -17.25
          },
          {
            count: '45',
            data: -17.13
          },
          {
            count: '39',
            data: -17
          },
          {
            count: '36',
            data: -16.88
          },
          {
            count: '50',
            data: -16.75
          },
          {
            count: '42',
            data: -16.63
          },
          {
            count: '42',
            data: -16.5
          },
          {
            count: '39',
            data: -16.38
          },
          {
            count: '41',
            data: -16.25
          },
          {
            count: '48',
            data: -16.13
          },
          {
            count: '50',
            data: -16
          },
          {
            count: '49',
            data: -15.88
          },
          {
            count: '51',
            data: -15.75
          },
          {
            count: '33',
            data: -15.63
          },
          {
            count: '42',
            data: -15.5
          },
          {
            count: '47',
            data: -15.38
          },
          {
            count: '47',
            data: -15.25
          },
          {
            count: '50',
            data: -15.13
          },
          {
            count: '52',
            data: -15
          },
          {
            count: '45',
            data: -14.88
          },
          {
            count: '40',
            data: -14.75
          },
          {
            count: '42',
            data: -14.63
          },
          {
            count: '52',
            data: -14.5
          },
          {
            count: '52',
            data: -14.38
          },
          {
            count: '34',
            data: -14.25
          },
          {
            count: '43',
            data: -14.13
          },
          {
            count: '45',
            data: -14
          },
          {
            count: '46',
            data: -13.88
          },
          {
            count: '53',
            data: -13.75
          },
          {
            count: '61',
            data: -13.63
          },
          {
            count: '38',
            data: -13.5
          },
          {
            count: '44',
            data: -13.38
          },
          {
            count: '48',
            data: -13.25
          },
          {
            count: '45',
            data: -13.13
          },
          {
            count: '53',
            data: -13
          },
          {
            count: '47',
            data: -12.88
          },
          {
            count: '35',
            data: -12.75
          },
          {
            count: '51',
            data: -12.63
          },
          {
            count: '45',
            data: -12.5
          },
          {
            count: '38',
            data: -12.38
          },
          {
            count: '37',
            data: -12.25
          },
          {
            count: '54',
            data: -12.13
          },
          {
            count: '47',
            data: -12
          },
          {
            count: '44',
            data: -11.88
          },
          {
            count: '42',
            data: -11.75
          },
          {
            count: '54',
            data: -11.63
          },
          {
            count: '38',
            data: -11.5
          },
          {
            count: '48',
            data: -11.38
          },
          {
            count: '55',
            data: -11.25
          },
          {
            count: '55',
            data: -11.13
          },
          {
            count: '47',
            data: -11
          },
          {
            count: '45',
            data: -10.88
          },
          {
            count: '53',
            data: -10.75
          },
          {
            count: '47',
            data: -10.63
          },
          {
            count: '48',
            data: -10.5
          },
          {
            count: '38',
            data: -10.38
          },
          {
            count: '40',
            data: -10.25
          },
          {
            count: '57',
            data: -10.13
          },
          {
            count: '43',
            data: -10
          },
          {
            count: '43',
            data: -9.88
          },
          {
            count: '46',
            data: -9.75
          },
          {
            count: '52',
            data: -9.63
          },
          {
            count: '50',
            data: -9.5
          },
          {
            count: '46',
            data: -9.38
          },
          {
            count: '42',
            data: -9.25
          },
          {
            count: '49',
            data: -9.13
          },
          {
            count: '37',
            data: -9
          },
          {
            count: '46',
            data: -8.88
          },
          {
            count: '49',
            data: -8.75
          },
          {
            count: '56',
            data: -8.63
          },
          {
            count: '57',
            data: -8.5
          },
          {
            count: '58',
            data: -8.38
          },
          {
            count: '34',
            data: -8.25
          },
          {
            count: '48',
            data: -8.13
          },
          {
            count: '61',
            data: -8
          },
          {
            count: '55',
            data: -7.88
          },
          {
            count: '56',
            data: -7.75
          },
          {
            count: '44',
            data: -7.63
          },
          {
            count: '42',
            data: -7.5
          },
          {
            count: '35',
            data: -7.38
          },
          {
            count: '55',
            data: -7.25
          },
          {
            count: '40',
            data: -7.13
          },
          {
            count: '50',
            data: -7
          },
          {
            count: '53',
            data: -6.88
          },
          {
            count: '48',
            data: -6.75
          },
          {
            count: '41',
            data: -6.63
          },
          {
            count: '46',
            data: -6.5
          },
          {
            count: '46',
            data: -6.38
          },
          {
            count: '53',
            data: -6.25
          },
          {
            count: '38',
            data: -6.13
          },
          {
            count: '42',
            data: -6
          },
          {
            count: '54',
            data: -5.88
          },
          {
            count: '46',
            data: -5.75
          },
          {
            count: '52',
            data: -5.63
          },
          {
            count: '48',
            data: -5.5
          },
          {
            count: '54',
            data: -5.38
          },
          {
            count: '41',
            data: -5.25
          },
          {
            count: '50',
            data: -5.13
          },
          {
            count: '50',
            data: -5
          },
          {
            count: '34',
            data: -4.88
          },
          {
            count: '51',
            data: -4.75
          },
          {
            count: '56',
            data: -4.63
          },
          {
            count: '46',
            data: -4.5
          },
          {
            count: '45',
            data: -4.38
          },
          {
            count: '54',
            data: -4.25
          },
          {
            count: '49',
            data: -4.13
          },
          {
            count: '48',
            data: -4
          },
          {
            count: '53',
            data: -3.88
          },
          {
            count: '45',
            data: -3.75
          },
          {
            count: '47',
            data: -3.63
          },
          {
            count: '43',
            data: -3.5
          },
          {
            count: '52',
            data: -3.38
          },
          {
            count: '37',
            data: -3.25
          },
          {
            count: '48',
            data: -3.13
          },
          {
            count: '58',
            data: -3
          },
          {
            count: '34',
            data: -2.88
          },
          {
            count: '42',
            data: -2.75
          },
          {
            count: '45',
            data: -2.63
          },
          {
            count: '58',
            data: -2.5
          },
          {
            count: '53',
            data: -2.38
          },
          {
            count: '37',
            data: -2.25
          },
          {
            count: '51',
            data: -2.13
          },
          {
            count: '51',
            data: -2
          },
          {
            count: '53',
            data: -1.88
          },
          {
            count: '46',
            data: -1.75
          },
          {
            count: '52',
            data: -1.63
          },
          {
            count: '54',
            data: -1.5
          },
          {
            count: '48',
            data: -1.38
          },
          {
            count: '56',
            data: -1.25
          },
          {
            count: '47',
            data: -1.13
          },
          {
            count: '33',
            data: -1
          },
          {
            count: '53',
            data: -0.88
          },
          {
            count: '48',
            data: -0.75
          },
          {
            count: '40',
            data: -0.63
          },
          {
            count: '57',
            data: -0.5
          },
          {
            count: '56',
            data: -0.38
          },
          {
            count: '39',
            data: -0.25
          },
          {
            count: '47',
            data: -0.13
          },
          {
            count: '50',
            data: 0
          },
          {
            count: '53',
            data: 0.13
          },
          {
            count: '48',
            data: 0.25
          },
          {
            count: '48',
            data: 0.38
          },
          {
            count: '38',
            data: 0.5
          },
          {
            count: '44',
            data: 0.63
          },
          {
            count: '63',
            data: 0.75
          },
          {
            count: '49',
            data: 0.88
          },
          {
            count: '47',
            data: 1
          },
          {
            count: '56',
            data: 1.13
          },
          {
            count: '47',
            data: 1.25
          },
          {
            count: '44',
            data: 1.38
          },
          {
            count: '42',
            data: 1.5
          },
          {
            count: '37',
            data: 1.63
          },
          {
            count: '38',
            data: 1.75
          },
          {
            count: '44',
            data: 1.88
          },
          {
            count: '32',
            data: 2
          },
          {
            count: '41',
            data: 2.13
          },
          {
            count: '32',
            data: 2.25
          },
          {
            count: '34',
            data: 2.38
          },
          {
            count: '41',
            data: 2.5
          },
          {
            count: '56',
            data: 2.63
          },
          {
            count: '50',
            data: 2.75
          },
          {
            count: '66',
            data: 2.88
          },
          {
            count: '57',
            data: 3
          },
          {
            count: '48',
            data: 3.13
          },
          {
            count: '52',
            data: 3.25
          },
          {
            count: '47',
            data: 3.38
          },
          {
            count: '50',
            data: 3.5
          },
          {
            count: '54',
            data: 3.63
          },
          {
            count: '45',
            data: 3.75
          },
          {
            count: '45',
            data: 3.88
          },
          {
            count: '43',
            data: 4
          },
          {
            count: '50',
            data: 4.13
          },
          {
            count: '41',
            data: 4.25
          },
          {
            count: '53',
            data: 4.38
          },
          {
            count: '60',
            data: 4.5
          },
          {
            count: '47',
            data: 4.63
          },
          {
            count: '51',
            data: 4.75
          },
          {
            count: '55',
            data: 4.88
          },
          {
            count: '51',
            data: 5
          },
          {
            count: '55',
            data: 5.13
          },
          {
            count: '43',
            data: 5.25
          },
          {
            count: '46',
            data: 5.38
          },
          {
            count: '55',
            data: 5.5
          },
          {
            count: '42',
            data: 5.63
          },
          {
            count: '46',
            data: 5.75
          },
          {
            count: '46',
            data: 5.88
          },
          {
            count: '50',
            data: 6
          },
          {
            count: '48',
            data: 6.13
          },
          {
            count: '38',
            data: 6.25
          },
          {
            count: '50',
            data: 6.38
          },
          {
            count: '49',
            data: 6.5
          },
          {
            count: '47',
            data: 6.63
          },
          {
            count: '43',
            data: 6.75
          },
          {
            count: '51',
            data: 6.88
          },
          {
            count: '62',
            data: 7
          },
          {
            count: '47',
            data: 7.13
          },
          {
            count: '40',
            data: 7.25
          },
          {
            count: '60',
            data: 7.38
          },
          {
            count: '35',
            data: 7.5
          },
          {
            count: '52',
            data: 7.63
          },
          {
            count: '50',
            data: 7.75
          },
          {
            count: '49',
            data: 7.88
          },
          {
            count: '47',
            data: 8
          },
          {
            count: '45',
            data: 8.13
          },
          {
            count: '54',
            data: 8.25
          },
          {
            count: '45',
            data: 8.38
          },
          {
            count: '47',
            data: 8.5
          },
          {
            count: '42',
            data: 8.63
          },
          {
            count: '49',
            data: 8.75
          },
          {
            count: '53',
            data: 8.88
          },
          {
            count: '52',
            data: 9
          },
          {
            count: '52',
            data: 9.13
          },
          {
            count: '51',
            data: 9.25
          },
          {
            count: '46',
            data: 9.38
          },
          {
            count: '51',
            data: 9.5
          },
          {
            count: '40',
            data: 9.63
          },
          {
            count: '52',
            data: 9.75
          },
          {
            count: '49',
            data: 9.88
          },
          {
            count: '38',
            data: 10
          },
          {
            count: '47',
            data: 10.13
          },
          {
            count: '51',
            data: 10.25
          },
          {
            count: '40',
            data: 10.38
          },
          {
            count: '52',
            data: 10.5
          },
          {
            count: '32',
            data: 10.63
          },
          {
            count: '49',
            data: 10.75
          },
          {
            count: '54',
            data: 10.88
          },
          {
            count: '42',
            data: 11
          },
          {
            count: '40',
            data: 11.13
          },
          {
            count: '51',
            data: 11.25
          },
          {
            count: '36',
            data: 11.38
          },
          {
            count: '39',
            data: 11.5
          },
          {
            count: '44',
            data: 11.63
          },
          {
            count: '37',
            data: 11.75
          },
          {
            count: '37',
            data: 11.88
          },
          {
            count: '50',
            data: 12
          },
          {
            count: '39',
            data: 12.13
          },
          {
            count: '40',
            data: 12.25
          },
          {
            count: '35',
            data: 12.38
          },
          {
            count: '36',
            data: 12.5
          },
          {
            count: '40',
            data: 12.63
          },
          {
            count: '24',
            data: 12.75
          },
          {
            count: '37',
            data: 12.88
          },
          {
            count: '35',
            data: 13
          },
          {
            count: '22',
            data: 13.13
          },
          {
            count: '37',
            data: 13.25
          },
          {
            count: '39',
            data: 13.38
          },
          {
            count: '35',
            data: 13.5
          },
          {
            count: '27',
            data: 13.63
          },
          {
            count: '26',
            data: 13.75
          },
          {
            count: '21',
            data: 13.88
          },
          {
            count: '30',
            data: 14
          },
          {
            count: '23',
            data: 14.13
          },
          {
            count: '31',
            data: 14.25
          },
          {
            count: '26',
            data: 14.38
          },
          {
            count: '23',
            data: 14.5
          },
          {
            count: '25',
            data: 14.63
          },
          {
            count: '31',
            data: 14.75
          },
          {
            count: '23',
            data: 14.88
          },
          {
            count: '26',
            data: 15
          },
          {
            count: '18',
            data: 15.13
          },
          {
            count: '22',
            data: 15.25
          },
          {
            count: '16',
            data: 15.38
          },
          {
            count: '24',
            data: 15.5
          },
          {
            count: '25',
            data: 15.63
          },
          {
            count: '16',
            data: 15.75
          },
          {
            count: '12',
            data: 15.88
          },
          {
            count: '21',
            data: 16
          },
          {
            count: '18',
            data: 16.13
          },
          {
            count: '16',
            data: 16.25
          },
          {
            count: '15',
            data: 16.38
          },
          {
            count: '19',
            data: 16.5
          },
          {
            count: '13',
            data: 16.63
          },
          {
            count: '15',
            data: 16.75
          },
          {
            count: '13',
            data: 16.88
          },
          {
            count: '14',
            data: 17
          },
          {
            count: '6',
            data: 17.13
          },
          {
            count: '10',
            data: 17.25
          },
          {
            count: '11',
            data: 17.38
          },
          {
            count: '13',
            data: 17.5
          },
          {
            count: '9',
            data: 17.63
          },
          {
            count: '6',
            data: 17.75
          },
          {
            count: '7',
            data: 17.88
          },
          {
            count: '12',
            data: 18
          },
          {
            count: '12',
            data: 18.13
          },
          {
            count: '8',
            data: 18.25
          },
          {
            count: '9',
            data: 18.38
          },
          {
            count: '8',
            data: 18.5
          },
          {
            count: '5',
            data: 18.63
          },
          {
            count: '1',
            data: 18.75
          },
          {
            count: '4',
            data: 18.88
          },
          {
            count: '4',
            data: 19
          },
          {
            count: '2',
            data: 19.13
          },
          {
            count: '4',
            data: 19.25
          },
          {
            count: '3',
            data: 19.38
          },
          {
            count: '1',
            data: 19.5
          },
          {
            count: '1',
            data: 19.75
          }
        ],
        name: '庐阳区'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getMyopiaTypeInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        astigmatismRate: 0,
        astigmatismStdCount: '0',
        hyperopiaRate: 0.2981,
        hyperopiaStdCount: '2236',
        myopiaRate: 0.796,
        myopiaStdCount: '5970',
        region: '庐阳区',
        regionId: '610102',
        schoolPrefixMyopiaInfoTypes: [
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2981,
            hyperopiaStdCount: '2236',
            myopiaRate: 0.796,
            myopiaStdCount: '5970',
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            totalRate: 0.9316,
            totalStdCount: '6987'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2981,
            hyperopiaStdCount: '2236',
            myopiaRate: 0.796,
            myopiaStdCount: '5970',
            prefix: null,
            prefixName: '合计',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            totalRate: 0.9316,
            totalStdCount: '6987'
          }
        ],
        totalRate: 0.9316,
        totalStdCount: '6987'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getRegionHyperopiaReserve',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = [
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
        }
      ];
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getRegionPoorVision',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = [
        {
          eyeSightCheckCount: '5657',
          highPoorVisionCount: '4748',
          highPoorVisionRate: 0.8393,
          lowPoorVisionCount: '130',
          lowPoorVisionRate: 0.0229,
          midPoorVisionCount: '530',
          midPoorVisionRate: 0.0936,
          otherPoorVisionCount: '0',
          otherPoorVisionRate: 0,
          poorVisionCount: '5408',
          poorVisionRate: 0.9559,
          unifyPrefx: 2,
          unifyPrefxName: '小学'
        },
        {
          eyeSightCheckCount: '5657',
          highPoorVisionCount: '4748',
          highPoorVisionRate: 0.8393,
          lowPoorVisionCount: '130',
          lowPoorVisionRate: 0.0229,
          midPoorVisionCount: '530',
          midPoorVisionRate: 0.0936,
          otherPoorVisionCount: '0',
          otherPoorVisionRate: 0,
          poorVisionCount: '5408',
          poorVisionRate: 0.9559,
          unifyPrefx: null,
          unifyPrefxName: '合计'
        }
      ];
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getSchoolMyopiaInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = [
        {
          highMyopiaRate: 0.6706,
          highMyopiaStdCount: '2038',
          manHighMyopiaRate: 0.656,
          manHighMyopiaStdCount: '984',
          manMyopiaRate: 0.7833,
          manMyopiaStdCount: '1175',
          myopiaRate: 0.793,
          myopiaStdCount: '2410',
          schoolId: '1280739653607168',
          schoolName: '‌合肥实验小学',
          schoolPrefix: '小学',
          womanHighMyopiaRate: 0.6848,
          womanHighMyopiaStdCount: '1054',
          womanMyopiaRate: 0.8024,
          womanMyopiaStdCount: '1235'
        },
        {
          highMyopiaRate: 0.6772,
          highMyopiaStdCount: '1368',
          manHighMyopiaRate: 0.6923,
          manHighMyopiaStdCount: '684',
          manMyopiaRate: 0.8269,
          manMyopiaStdCount: '817',
          myopiaRate: 0.8029,
          myopiaStdCount: '1622',
          schoolId: '1280818111389440',
          schoolName: '‌合肥市庐阳区黄河小学',
          schoolPrefix: '小学',
          womanHighMyopiaRate: 0.6627,
          womanHighMyopiaStdCount: '684',
          womanMyopiaRate: 0.78,
          womanMyopiaStdCount: '805'
        }
      ];
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getSchoolMyopiaCorrectInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = [
        {
          correctMyopiaRate: 0.0524,
          correctMyopiaStdCount: '187',
          manCorrectMyopiaRate: 0.0578,
          manCorrectMyopiaStdCount: '68',
          manMyopiaStdCount: '1175',
          manUdMyopiaRate: 0.6944,
          manUdMyopiaStdCount: '816',
          manUnMyopiaRate: 0.2476,
          manUnMyopiaStdCount: '291',
          schoolId: '1280739653607168',
          schoolName: '‌合肥实验小学',
          schoolPrefix: '小学',
          udMyopiaRate: 0.7255,
          udMyopiaStdCount: '2586',
          unMyopiaRate: 0.2219,
          unMyopiaStdCount: '791',
          womanCorrectMyopiaRate: 0.0461,
          womanCorrectMyopiaStdCount: '57',
          womanMyopiaStdCount: '1235',
          womanUdMyopiaRate: 0.7465,
          womanUdMyopiaStdCount: '922',
          womanUnMyopiaRate: 0.2072,
          womanUnMyopiaStdCount: '256'
        },
        {
          correctMyopiaRate: 0.0523,
          correctMyopiaStdCount: '126',
          manCorrectMyopiaRate: 0.0636,
          manCorrectMyopiaStdCount: '52',
          manMyopiaStdCount: '817',
          manUdMyopiaRate: 0.7086,
          manUdMyopiaStdCount: '579',
          manUnMyopiaRate: 0.2276,
          manUnMyopiaStdCount: '186',
          schoolId: '1280818111389440',
          schoolName: '‌合肥市庐阳区黄河小学',
          schoolPrefix: '小学',
          udMyopiaRate: 0.7144,
          udMyopiaStdCount: '1719',
          unMyopiaRate: 0.2331,
          unMyopiaStdCount: '561',
          womanCorrectMyopiaRate: 0.0434,
          womanCorrectMyopiaStdCount: '35',
          womanMyopiaStdCount: '805',
          womanUdMyopiaRate: 0.7105,
          womanUdMyopiaStdCount: '572',
          womanUnMyopiaRate: 0.2459,
          womanUnMyopiaStdCount: '198'
        }
      ];
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getSchoolMyopiaTypeInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = [
        {
          astigmatismRate: 0,
          astigmatismStdCount: '0',
          hyperopiaRate: 0.3071,
          hyperopiaStdCount: '1382',
          myopiaRate: 0.792,
          myopiaStdCount: '3564',
          schoolId: '1280739653607168',
          schoolName: '‌合肥实验小学',
          schoolPrefix: '小学',
          totalRate: 0.9337,
          totalStdCount: '4202'
        },
        {
          astigmatismRate: 0,
          astigmatismStdCount: '0',
          hyperopiaRate: 0.2846,
          hyperopiaStdCount: '854',
          myopiaRate: 0.802,
          myopiaStdCount: '2406',
          schoolId: '1280818111389440',
          schoolName: '‌合肥市庐阳区黄河小学',
          schoolPrefix: '小学',
          totalRate: 0.9283,
          totalStdCount: '2785'
        }
      ];
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getRegionSchoolPoorVision',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = [
        {
          eyeSightCheckCount: '3376',
          highPoorVisionCount: '2847',
          highPoorVisionRate: 0.8433,
          lowPoorVisionCount: '85',
          lowPoorVisionRate: 0.0251,
          midPoorVisionCount: '301',
          midPoorVisionRate: 0.0891,
          otherPoorVisionCount: '0',
          otherPoorVisionRate: 0,
          poorVisionCount: '3233',
          poorVisionRate: 0.9576,
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280739653607168',
          schoolName: '‌合肥实验小学'
        },
        {
          eyeSightCheckCount: '2281',
          highPoorVisionCount: '1901',
          highPoorVisionRate: 0.8334,
          lowPoorVisionCount: '45',
          lowPoorVisionRate: 0.0197,
          midPoorVisionCount: '229',
          midPoorVisionRate: 0.1003,
          otherPoorVisionCount: '0',
          otherPoorVisionRate: 0,
          poorVisionCount: '2175',
          poorVisionRate: 0.9535,
          prefix: 2,
          prefixName: '小学',
          schoolId: '1280818111389440',
          schoolName: '‌合肥市庐阳区黄河小学'
        }
      ];
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/region/getPrefixMyopiaRate',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = [
        {
          effectiveStdCount: '5059',
          myopiaRate: 0.7969,
          myopiaStdCount: '4032',
          prefix: 2,
          prefixName: '小学',
          schoolCount: '2'
        }
      ];
      return resultSuccess(data);
    }
  }
];
