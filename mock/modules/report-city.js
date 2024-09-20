import { resultSuccess } from '../utils';

export default [
  {
    url: '/basic-api/eyesight/report/city/getOverallMyopiaInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess({
        city: '陕西省',
        effectiveStdCount: '50077',
        highMyopiaRate: 0.6799,
        highMyopiaStdCount: '34049',
        maxHighRegion: {
          effectiveStdCount: '4449',
          highMyopiaRate: 0.6893,
          highMyopiaStdCount: '3067',
          manHighMyopiaRate: 0.6863,
          manHighMyopiaStdCount: '1501',
          myopiaRate: 0.8028,
          myopiaStdCount: '3572',
          region: '渭南市',
          sexMyopiaTypeInfo: null,
          stdCount: '4449',
          womanHighMyopiaRate: 0.6923,
          womanHighMyopiaStdCount: '1566'
        },
        maxRegion: {
          effectiveStdCount: '2978',
          highMyopiaRate: 0.6793,
          highMyopiaStdCount: '2023',
          manHighMyopiaRate: 0.6834,
          manHighMyopiaStdCount: '1002',
          myopiaRate: 0.8032,
          myopiaStdCount: '2392',
          region: '宝鸡市',
          sexMyopiaTypeInfo: null,
          stdCount: '2978',
          womanHighMyopiaRate: 0.6752,
          womanHighMyopiaStdCount: '1021'
        },
        minHighRegion: {
          effectiveStdCount: '3471',
          highMyopiaRate: 0.6689,
          highMyopiaStdCount: '2322',
          manHighMyopiaRate: 0.6612,
          manHighMyopiaStdCount: '1150',
          myopiaRate: 0.7796,
          myopiaStdCount: '2706',
          region: '延安市',
          sexMyopiaTypeInfo: null,
          stdCount: '3471',
          womanHighMyopiaRate: 0.6766,
          womanHighMyopiaStdCount: '1172'
        },
        minRegion: {
          effectiveStdCount: '3471',
          highMyopiaRate: 0.6689,
          highMyopiaStdCount: '2322',
          manHighMyopiaRate: 0.6612,
          manHighMyopiaStdCount: '1150',
          myopiaRate: 0.7796,
          myopiaStdCount: '2706',
          region: '延安市',
          sexMyopiaTypeInfo: null,
          stdCount: '3471',
          womanHighMyopiaRate: 0.6766,
          womanHighMyopiaStdCount: '1172'
        },
        myopiaRate: 0.7964,
        myopiaStdCount: '39883',
        noMyopiaRate: 0.2035,
        noMyopiaStdCount: '10195',
        regions: [
          {
            effectiveStdCount: '3471',
            highMyopiaRate: 0.6689,
            highMyopiaStdCount: '2322',
            manHighMyopiaRate: 0.6612,
            manHighMyopiaStdCount: '1150',
            myopiaRate: 0.7796,
            myopiaStdCount: '2706',
            region: '延安市',
            sexMyopiaTypeInfo: null,
            stdCount: '3471',
            womanHighMyopiaRate: 0.6766,
            womanHighMyopiaStdCount: '1172'
          },
          {
            effectiveStdCount: '3863',
            highMyopiaRate: 0.6735,
            highMyopiaStdCount: '2602',
            manHighMyopiaRate: 0.6703,
            manHighMyopiaStdCount: '1322',
            myopiaRate: 0.7975,
            myopiaStdCount: '3081',
            region: '咸阳市',
            sexMyopiaTypeInfo: null,
            stdCount: '3863',
            womanHighMyopiaRate: 0.6768,
            womanHighMyopiaStdCount: '1280'
          },
          {
            effectiveStdCount: '3510',
            highMyopiaRate: 0.6743,
            highMyopiaStdCount: '2367',
            manHighMyopiaRate: 0.6632,
            manHighMyopiaStdCount: '1152',
            myopiaRate: 0.7911,
            myopiaStdCount: '2777',
            region: '榆林市',
            sexMyopiaTypeInfo: null,
            stdCount: '3510',
            womanHighMyopiaRate: 0.6852,
            womanHighMyopiaStdCount: '1215'
          },
          {
            effectiveStdCount: '9114',
            highMyopiaRate: 0.677,
            highMyopiaStdCount: '6171',
            manHighMyopiaRate: 0.6727,
            manHighMyopiaStdCount: '3002',
            myopiaRate: 0.8001,
            myopiaStdCount: '7293',
            region: '西安市',
            sexMyopiaTypeInfo: null,
            stdCount: '9114',
            womanHighMyopiaRate: 0.6812,
            womanHighMyopiaStdCount: '3169'
          },
          {
            effectiveStdCount: '3016',
            highMyopiaRate: 0.6783,
            highMyopiaStdCount: '2046',
            manHighMyopiaRate: 0.6686,
            manHighMyopiaStdCount: '995',
            myopiaRate: 0.7897,
            myopiaStdCount: '2382',
            region: '安康市',
            sexMyopiaTypeInfo: null,
            stdCount: '3016',
            womanHighMyopiaRate: 0.6878,
            womanHighMyopiaStdCount: '1051'
          },
          {
            effectiveStdCount: '2993',
            highMyopiaRate: 0.6789,
            highMyopiaStdCount: '2032',
            manHighMyopiaRate: 0.6896,
            manHighMyopiaStdCount: '1051',
            myopiaRate: 0.7975,
            myopiaStdCount: '2387',
            region: '汉中市',
            sexMyopiaTypeInfo: null,
            stdCount: '2993',
            womanHighMyopiaRate: 0.6678,
            womanHighMyopiaStdCount: '981'
          },
          {
            effectiveStdCount: '2978',
            highMyopiaRate: 0.6793,
            highMyopiaStdCount: '2023',
            manHighMyopiaRate: 0.6834,
            manHighMyopiaStdCount: '1002',
            myopiaRate: 0.8032,
            myopiaStdCount: '2392',
            region: '宝鸡市',
            sexMyopiaTypeInfo: null,
            stdCount: '2978',
            womanHighMyopiaRate: 0.6752,
            womanHighMyopiaStdCount: '1021'
          },
          {
            effectiveStdCount: '13676',
            highMyopiaRate: 0.6836,
            highMyopiaStdCount: '9349',
            manHighMyopiaRate: 0.6821,
            manHighMyopiaStdCount: '4776',
            myopiaRate: 0.7967,
            myopiaStdCount: '10897',
            region: '商洛市',
            sexMyopiaTypeInfo: null,
            stdCount: '13677',
            womanHighMyopiaRate: 0.685,
            womanHighMyopiaStdCount: '4573'
          },
          {
            effectiveStdCount: '3007',
            highMyopiaRate: 0.6883,
            highMyopiaStdCount: '2070',
            manHighMyopiaRate: 0.6943,
            manHighMyopiaStdCount: '1045',
            myopiaRate: 0.7968,
            myopiaStdCount: '2396',
            region: '铜川市',
            sexMyopiaTypeInfo: null,
            stdCount: '3007',
            womanHighMyopiaRate: 0.6824,
            womanHighMyopiaStdCount: '1025'
          },
          {
            effectiveStdCount: '4449',
            highMyopiaRate: 0.6893,
            highMyopiaStdCount: '3067',
            manHighMyopiaRate: 0.6863,
            manHighMyopiaStdCount: '1501',
            myopiaRate: 0.8028,
            myopiaStdCount: '3572',
            region: '渭南市',
            sexMyopiaTypeInfo: null,
            stdCount: '4449',
            womanHighMyopiaRate: 0.6923,
            womanHighMyopiaStdCount: '1566'
          }
        ],
        sexMyopiaTypeInfo: [
          {
            manMyopiaRate: 0.7968,
            manMyopiaStdCount: '19985',
            myopiaRate: 0.7964,
            myopiaStdCount: '39883',
            myopiaType: 0,
            womanMyopiaRate: 0.796,
            womanMyopiaStdCount: '19898'
          },
          {
            manMyopiaRate: 0.0463,
            manMyopiaStdCount: '1163',
            myopiaRate: 0.0453,
            myopiaStdCount: '2270',
            myopiaType: 1,
            womanMyopiaRate: 0.0442,
            womanMyopiaStdCount: '1107'
          },
          {
            manMyopiaRate: 0.0727,
            manMyopiaStdCount: '1824',
            myopiaRate: 0.0711,
            myopiaStdCount: '3562',
            myopiaType: 2,
            womanMyopiaRate: 0.0695,
            womanMyopiaStdCount: '1738'
          },
          {
            manMyopiaRate: 0.6776,
            manMyopiaStdCount: '16996',
            myopiaRate: 0.6799,
            myopiaStdCount: '34049',
            myopiaType: 3,
            womanMyopiaRate: 0.6822,
            womanMyopiaStdCount: '17053'
          },
          {
            manMyopiaRate: 0.2033,
            manMyopiaStdCount: '5099',
            myopiaRate: 0.2036,
            myopiaStdCount: '10197',
            myopiaType: 4,
            womanMyopiaRate: 0.2039,
            womanMyopiaStdCount: '5098'
          }
        ],
        stdCount: '50078'
      });
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getMyopiaInfoByPrefx',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess({
        dataList: [
          {
            collegeHighMyopiaCount: '0',
            collegeHighMyopiaRate: 0,
            collegeMyopiaCount: '0',
            collegeMyopiaRate: 0,
            highMyopiaCount: '337',
            highMyopiaRate: 0.6962,
            highSchoolHighMyopiaCount: '0',
            highSchoolHighMyopiaRate: 0,
            highSchoolMyopiaCount: '0',
            highSchoolMyopiaRate: 0,
            kindergartenHighMyopiaCount: '0',
            kindergartenHighMyopiaRate: null,
            kindergartenMyopiaCount: '0',
            kindergartenMyopiaRate: null,
            middleSchoolHighMyopiaCount: '337',
            middleSchoolHighMyopiaRate: 0.6962,
            middleSchoolMyopiaCount: '406',
            middleSchoolMyopiaRate: 0.8388,
            myopiaCount: '406',
            myopiaRate: 0.8388,
            normalHighSchoolHighMyopiaCount: '0',
            normalHighSchoolHighMyopiaRate: null,
            normalHighSchoolMyopiaCount: '0',
            normalHighSchoolMyopiaRate: null,
            primarySchoolHighMyopiaCount: '0',
            primarySchoolHighMyopiaRate: null,
            primarySchoolMyopiaCount: '0',
            primarySchoolMyopiaRate: null,
            professionalSchoolHighMyopiaCount: '0',
            professionalSchoolHighMyopiaRate: null,
            professionalSchoolMyopiaCount: '0',
            professionalSchoolMyopiaRate: null,
            regionName: '临潼区',
            undergraduateHighMyopiaCount: '0',
            undergraduateHighMyopiaRate: null,
            undergraduateMyopiaCount: '0',
            undergraduateMyopiaRate: null,
            universityHighMyopiaCount: '0',
            universityHighMyopiaRate: null,
            universityMyopiaCount: '0',
            universityMyopiaRate: null
          },
          {
            collegeHighMyopiaCount: '0',
            collegeHighMyopiaRate: 0,
            collegeMyopiaCount: '0',
            collegeMyopiaRate: 0,
            highMyopiaCount: '3406',
            highMyopiaRate: 0.6732,
            highSchoolHighMyopiaCount: '0',
            highSchoolHighMyopiaRate: 0,
            highSchoolMyopiaCount: '0',
            highSchoolMyopiaRate: 0,
            kindergartenHighMyopiaCount: '0',
            kindergartenHighMyopiaRate: null,
            kindergartenMyopiaCount: '0',
            kindergartenMyopiaRate: null,
            middleSchoolHighMyopiaCount: '0',
            middleSchoolHighMyopiaRate: null,
            middleSchoolMyopiaCount: '0',
            middleSchoolMyopiaRate: null,
            myopiaCount: '4032',
            myopiaRate: 0.7969,
            normalHighSchoolHighMyopiaCount: '0',
            normalHighSchoolHighMyopiaRate: null,
            normalHighSchoolMyopiaCount: '0',
            normalHighSchoolMyopiaRate: null,
            primarySchoolHighMyopiaCount: '3406',
            primarySchoolHighMyopiaRate: 0.6732,
            primarySchoolMyopiaCount: '4032',
            primarySchoolMyopiaRate: 0.7969,
            professionalSchoolHighMyopiaCount: '0',
            professionalSchoolHighMyopiaRate: null,
            professionalSchoolMyopiaCount: '0',
            professionalSchoolMyopiaRate: null,
            regionName: '新城区',
            undergraduateHighMyopiaCount: '0',
            undergraduateHighMyopiaRate: null,
            undergraduateMyopiaCount: '0',
            undergraduateMyopiaRate: null,
            universityHighMyopiaCount: '0',
            universityHighMyopiaRate: null,
            universityMyopiaCount: '0',
            universityMyopiaRate: null
          },
          {
            collegeHighMyopiaCount: '0',
            collegeHighMyopiaRate: 0,
            collegeMyopiaCount: '0',
            collegeMyopiaRate: 0,
            highMyopiaCount: '1018',
            highMyopiaRate: 0.6818,
            highSchoolHighMyopiaCount: '0',
            highSchoolHighMyopiaRate: 0,
            highSchoolMyopiaCount: '0',
            highSchoolMyopiaRate: 0,
            kindergartenHighMyopiaCount: '0',
            kindergartenHighMyopiaRate: null,
            kindergartenMyopiaCount: '0',
            kindergartenMyopiaRate: null,
            middleSchoolHighMyopiaCount: '334',
            middleSchoolHighMyopiaRate: 0.6788,
            middleSchoolMyopiaCount: '405',
            middleSchoolMyopiaRate: 0.8231,
            myopiaCount: '1205',
            myopiaRate: 0.807,
            normalHighSchoolHighMyopiaCount: '0',
            normalHighSchoolHighMyopiaRate: null,
            normalHighSchoolMyopiaCount: '0',
            normalHighSchoolMyopiaRate: null,
            primarySchoolHighMyopiaCount: '684',
            primarySchoolHighMyopiaRate: 0.6833,
            primarySchoolMyopiaCount: '800',
            primarySchoolMyopiaRate: 0.7992,
            professionalSchoolHighMyopiaCount: '0',
            professionalSchoolHighMyopiaRate: null,
            professionalSchoolMyopiaCount: '0',
            professionalSchoolMyopiaRate: null,
            regionName: '雁塔区',
            undergraduateHighMyopiaCount: '0',
            undergraduateHighMyopiaRate: null,
            undergraduateMyopiaCount: '0',
            undergraduateMyopiaRate: null,
            universityHighMyopiaCount: '0',
            universityHighMyopiaRate: null,
            universityMyopiaCount: '0',
            universityMyopiaRate: null
          },
          {
            collegeHighMyopiaCount: '0',
            collegeHighMyopiaRate: 0,
            collegeMyopiaCount: '0',
            collegeMyopiaRate: 0,
            highMyopiaCount: '654',
            highMyopiaRate: 0.6721,
            highSchoolHighMyopiaCount: '0',
            highSchoolHighMyopiaRate: 0,
            highSchoolMyopiaCount: '0',
            highSchoolMyopiaRate: 0,
            kindergartenHighMyopiaCount: '0',
            kindergartenHighMyopiaRate: null,
            kindergartenMyopiaCount: '0',
            kindergartenMyopiaRate: null,
            middleSchoolHighMyopiaCount: '0',
            middleSchoolHighMyopiaRate: null,
            middleSchoolMyopiaCount: '0',
            middleSchoolMyopiaRate: null,
            myopiaCount: '771',
            myopiaRate: 0.7923,
            normalHighSchoolHighMyopiaCount: '0',
            normalHighSchoolHighMyopiaRate: null,
            normalHighSchoolMyopiaCount: '0',
            normalHighSchoolMyopiaRate: null,
            primarySchoolHighMyopiaCount: '654',
            primarySchoolHighMyopiaRate: 0.6721,
            primarySchoolMyopiaCount: '771',
            primarySchoolMyopiaRate: 0.7923,
            professionalSchoolHighMyopiaCount: '0',
            professionalSchoolHighMyopiaRate: null,
            professionalSchoolMyopiaCount: '0',
            professionalSchoolMyopiaRate: null,
            regionName: '未央区',
            undergraduateHighMyopiaCount: '0',
            undergraduateHighMyopiaRate: null,
            undergraduateMyopiaCount: '0',
            undergraduateMyopiaRate: null,
            universityHighMyopiaCount: '0',
            universityHighMyopiaRate: null,
            universityMyopiaCount: '0',
            universityMyopiaRate: null
          },
          {
            collegeHighMyopiaCount: '0',
            collegeHighMyopiaRate: 0,
            collegeMyopiaCount: '0',
            collegeMyopiaRate: 0,
            highMyopiaCount: '674',
            highMyopiaRate: 0.6828,
            highSchoolHighMyopiaCount: '0',
            highSchoolHighMyopiaRate: 0,
            highSchoolMyopiaCount: '0',
            highSchoolMyopiaRate: 0,
            kindergartenHighMyopiaCount: '0',
            kindergartenHighMyopiaRate: null,
            kindergartenMyopiaCount: '0',
            kindergartenMyopiaRate: null,
            middleSchoolHighMyopiaCount: '0',
            middleSchoolHighMyopiaRate: null,
            middleSchoolMyopiaCount: '0',
            middleSchoolMyopiaRate: null,
            myopiaCount: '788',
            myopiaRate: 0.7983,
            normalHighSchoolHighMyopiaCount: '0',
            normalHighSchoolHighMyopiaRate: null,
            normalHighSchoolMyopiaCount: '0',
            normalHighSchoolMyopiaRate: null,
            primarySchoolHighMyopiaCount: '674',
            primarySchoolHighMyopiaRate: 0.6828,
            primarySchoolMyopiaCount: '788',
            primarySchoolMyopiaRate: 0.7983,
            professionalSchoolHighMyopiaCount: '0',
            professionalSchoolHighMyopiaRate: null,
            professionalSchoolMyopiaCount: '0',
            professionalSchoolMyopiaRate: null,
            regionName: '莲湖区',
            undergraduateHighMyopiaCount: '0',
            undergraduateHighMyopiaRate: null,
            undergraduateMyopiaCount: '0',
            undergraduateMyopiaRate: null,
            universityHighMyopiaCount: '0',
            universityHighMyopiaRate: null,
            universityMyopiaCount: '0',
            universityMyopiaRate: null
          },
          {
            collegeHighMyopiaCount: '0',
            collegeHighMyopiaRate: 0,
            collegeMyopiaCount: '0',
            collegeMyopiaRate: 0,
            highMyopiaCount: '82',
            highMyopiaRate: 0.6949,
            highSchoolHighMyopiaCount: '0',
            highSchoolHighMyopiaRate: 0,
            highSchoolMyopiaCount: '0',
            highSchoolMyopiaRate: 0,
            kindergartenHighMyopiaCount: '0',
            kindergartenHighMyopiaRate: null,
            kindergartenMyopiaCount: '0',
            kindergartenMyopiaRate: null,
            middleSchoolHighMyopiaCount: '0',
            middleSchoolHighMyopiaRate: null,
            middleSchoolMyopiaCount: '0',
            middleSchoolMyopiaRate: null,
            myopiaCount: '91',
            myopiaRate: 0.7711,
            normalHighSchoolHighMyopiaCount: '0',
            normalHighSchoolHighMyopiaRate: null,
            normalHighSchoolMyopiaCount: '0',
            normalHighSchoolMyopiaRate: null,
            primarySchoolHighMyopiaCount: '82',
            primarySchoolHighMyopiaRate: 0.6949,
            primarySchoolMyopiaCount: '91',
            primarySchoolMyopiaRate: 0.7711,
            professionalSchoolHighMyopiaCount: '0',
            professionalSchoolHighMyopiaRate: null,
            professionalSchoolMyopiaCount: '0',
            professionalSchoolMyopiaRate: null,
            regionName: '长安区',
            undergraduateHighMyopiaCount: '0',
            undergraduateHighMyopiaRate: null,
            undergraduateMyopiaCount: '0',
            undergraduateMyopiaRate: null,
            universityHighMyopiaCount: '0',
            universityHighMyopiaRate: null,
            universityMyopiaCount: '0',
            universityMyopiaRate: null
          },
          {
            collegeHighMyopiaCount: '0',
            collegeHighMyopiaRate: 0,
            collegeMyopiaCount: '0',
            collegeMyopiaRate: 0,
            highMyopiaCount: '6171',
            highMyopiaRate: 0.677,
            highSchoolHighMyopiaCount: '0',
            highSchoolHighMyopiaRate: 0,
            highSchoolMyopiaCount: '0',
            highSchoolMyopiaRate: 0,
            kindergartenHighMyopiaCount: '0',
            kindergartenHighMyopiaRate: null,
            kindergartenMyopiaCount: '0',
            kindergartenMyopiaRate: null,
            middleSchoolHighMyopiaCount: '671',
            middleSchoolHighMyopiaRate: 0.6875,
            middleSchoolMyopiaCount: '811',
            middleSchoolMyopiaRate: 0.8309,
            myopiaCount: '7293',
            myopiaRate: 0.8001,
            normalHighSchoolHighMyopiaCount: '0',
            normalHighSchoolHighMyopiaRate: null,
            normalHighSchoolMyopiaCount: '0',
            normalHighSchoolMyopiaRate: null,
            primarySchoolHighMyopiaCount: '5500',
            primarySchoolHighMyopiaRate: 0.6758,
            primarySchoolMyopiaCount: '6482',
            primarySchoolMyopiaRate: 0.7965,
            professionalSchoolHighMyopiaCount: '0',
            professionalSchoolHighMyopiaRate: null,
            professionalSchoolMyopiaCount: '0',
            professionalSchoolMyopiaRate: null,
            regionName: '合计',
            undergraduateHighMyopiaCount: '0',
            undergraduateHighMyopiaRate: null,
            undergraduateMyopiaCount: '0',
            undergraduateMyopiaRate: null,
            universityHighMyopiaCount: '0',
            universityHighMyopiaRate: null,
            universityMyopiaCount: '0',
            universityMyopiaRate: null
          }
        ],
        messageList: [
          {
            highMaxRegionMyopiaRate: 0.6949,
            highMaxRegionName: '长安区',
            highMinRegionMyopiaRate: 0.6721,
            highMinRegionName: '未央区',
            highMyopiaRate: '0.6758',
            highMyopiaStdCount: 5500,
            maxRegionMyopiaRate: 0.7992,
            maxRegionName: '雁塔区',
            minRegionMyopiaRate: 0.7711,
            minRegionName: '长安区',
            myopiaRate: '0.7965',
            myopiaStdCount: 6482,
            prefxName: '小学'
          },
          {
            highMaxRegionMyopiaRate: 0.6962,
            highMaxRegionName: '临潼区',
            highMinRegionMyopiaRate: 0.6788,
            highMinRegionName: '雁塔区',
            highMyopiaRate: '0.6875',
            highMyopiaStdCount: 671,
            maxRegionMyopiaRate: 0.8388,
            maxRegionName: '临潼区',
            minRegionMyopiaRate: 0.8231,
            minRegionName: '雁塔区',
            myopiaRate: '0.8309',
            myopiaStdCount: 811,
            prefxName: '初中'
          }
        ],
        name: '西安市'
      });
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getClassYearMyopiaInfo',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      console.log(query, '9999');

      let data = {
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
        schoolTypeMyopiaRateGrowthList: [
          {
            growthRate: 0.0013,
            prefix: 2,
            prefixName: '小学',
            rateType: 1
          },
          {
            growthRate: 0.0013,
            prefix: 2,
            prefixName: '小学',
            rateType: 1
          },
          {
            growthRate: 0.0013,
            prefix: 2,
            prefixName: '小学',
            rateType: 1
          },
          {
            growthRate: 0.0013,
            prefix: 2,
            prefixName: '小学',
            rateType: 1
          },
          {
            growthRate: 0.0013,
            prefix: 2,
            prefixName: '小学',
            rateType: 1
          },
          {
            growthRate: 0.0013,
            prefix: 2,
            prefixName: '小学',
            rateType: 1
          },
          {
            growthRate: 0.005,
            prefix: 2,
            prefixName: '小学',
            rateType: 2
          },
          {
            growthRate: 0.005,
            prefix: 2,
            prefixName: '小学',
            rateType: 2
          },
          {
            growthRate: 0.005,
            prefix: 2,
            prefixName: '小学',
            rateType: 2
          },
          {
            growthRate: 0.005,
            prefix: 2,
            prefixName: '小学',
            rateType: 2
          },
          {
            growthRate: 0.005,
            prefix: 2,
            prefixName: '小学',
            rateType: 2
          },
          {
            growthRate: 0.005,
            prefix: 2,
            prefixName: '小学',
            rateType: 2
          },
          {
            growthRate: -0.0111,
            prefix: 3,
            prefixName: '初中',
            rateType: 1
          },
          {
            growthRate: -0.0111,
            prefix: 3,
            prefixName: '初中',
            rateType: 1
          },
          {
            growthRate: -0.0111,
            prefix: 3,
            prefixName: '初中',
            rateType: 1
          },
          {
            growthRate: -0.0269,
            prefix: 3,
            prefixName: '初中',
            rateType: 2
          },
          {
            growthRate: -0.0269,
            prefix: 3,
            prefixName: '初中',
            rateType: 2
          },
          {
            growthRate: -0.0269,
            prefix: 3,
            prefixName: '初中',
            rateType: 2
          }
        ]
      };
      if (query.reportLevel == 3) {
        data = {
          gradeMyopiaInfoList: [
            {
              gradeId: '921830381248271',
              gradeName: '一年级',
              highMyopiaRate: 0.6674,
              highMyopiaStdCount: '596',
              manHighMyopiaRate: 0.6568,
              manHighMyopiaStdCount: '291',
              manMyopiaRate: 0.799,
              manMyopiaStdCount: '354',
              manStdCount: '443',
              myopiaRate: 0.7984,
              myopiaStdCount: '713',
              stdCount: '893',
              womanHighMyopiaRate: 0.6777,
              womanHighMyopiaStdCount: '305',
              womanMyopiaRate: 0.7977,
              womanMyopiaStdCount: '359',
              womanStdCount: '450'
            },
            {
              gradeId: '921830381248272',
              gradeName: '二年级',
              highMyopiaRate: 0.6373,
              highMyopiaStdCount: '529',
              manHighMyopiaRate: 0.6535,
              manHighMyopiaStdCount: '283',
              manMyopiaRate: 0.8083,
              manMyopiaStdCount: '350',
              manStdCount: '433',
              myopiaRate: 0.7855,
              myopiaStdCount: '652',
              stdCount: '830',
              womanHighMyopiaRate: 0.6196,
              womanHighMyopiaStdCount: '246',
              womanMyopiaRate: 0.7607,
              womanMyopiaStdCount: '302',
              womanStdCount: '397'
            },
            {
              gradeId: '921830381248273',
              gradeName: '三年级',
              highMyopiaRate: 0.6974,
              highMyopiaStdCount: '567',
              manHighMyopiaRate: 0.687,
              manHighMyopiaStdCount: '270',
              manMyopiaRate: 0.8117,
              manMyopiaStdCount: '319',
              manStdCount: '393',
              myopiaRate: 0.8154,
              myopiaStdCount: '663',
              stdCount: '813',
              womanHighMyopiaRate: 0.7071,
              womanHighMyopiaStdCount: '297',
              womanMyopiaRate: 0.819,
              womanMyopiaStdCount: '344',
              womanStdCount: '420'
            },
            {
              gradeId: '921830381248274',
              gradeName: '四年级',
              highMyopiaRate: 0.6573,
              highMyopiaStdCount: '543',
              manHighMyopiaRate: 0.6407,
              manHighMyopiaStdCount: '264',
              manMyopiaRate: 0.7669,
              manMyopiaStdCount: '316',
              manStdCount: '412',
              myopiaRate: 0.7736,
              myopiaStdCount: '639',
              stdCount: '826',
              womanHighMyopiaRate: 0.6739,
              womanHighMyopiaStdCount: '279',
              womanMyopiaRate: 0.7801,
              womanMyopiaStdCount: '323',
              womanStdCount: '414'
            },
            {
              gradeId: '921830381248275',
              gradeName: '五年级',
              highMyopiaRate: 0.669,
              highMyopiaStdCount: '566',
              manHighMyopiaRate: 0.6815,
              manHighMyopiaStdCount: '274',
              manMyopiaRate: 0.8009,
              manMyopiaStdCount: '322',
              manStdCount: '402',
              myopiaRate: 0.7872,
              myopiaStdCount: '666',
              stdCount: '846',
              womanHighMyopiaRate: 0.6576,
              womanHighMyopiaStdCount: '292',
              womanMyopiaRate: 0.7747,
              womanMyopiaStdCount: '344',
              womanStdCount: '444'
            },
            {
              gradeId: '921830381248276',
              gradeName: '六年级',
              highMyopiaRate: 0.7109,
              highMyopiaStdCount: '605',
              manHighMyopiaRate: 0.7061,
              manHighMyopiaStdCount: '286',
              manMyopiaRate: 0.8172,
              manMyopiaStdCount: '331',
              manStdCount: '405',
              myopiaRate: 0.8213,
              myopiaStdCount: '699',
              stdCount: '851',
              womanHighMyopiaRate: 0.7152,
              womanHighMyopiaStdCount: '319',
              womanMyopiaRate: 0.8251,
              womanMyopiaStdCount: '368',
              womanStdCount: '446'
            }
          ],
          schoolTypeMyopiaRateGrowthList: [
            {
              growthRate: 0.0036,
              prefix: 2,
              prefixName: '小学',
              rateType: 3
            },
            {
              growthRate: 0.0036,
              prefix: 2,
              prefixName: '小学',
              rateType: 3
            },
            {
              growthRate: 0.0036,
              prefix: 2,
              prefixName: '小学',
              rateType: 3
            },
            {
              growthRate: 0.0036,
              prefix: 2,
              prefixName: '小学',
              rateType: 3
            },
            {
              growthRate: 0.0036,
              prefix: 2,
              prefixName: '小学',
              rateType: 3
            },
            {
              growthRate: 0.0036,
              prefix: 2,
              prefixName: '小学',
              rateType: 3
            },
            {
              growthRate: 0.0055,
              prefix: 2,
              prefixName: '小学',
              rateType: 4
            },
            {
              growthRate: 0.0055,
              prefix: 2,
              prefixName: '小学',
              rateType: 4
            },
            {
              growthRate: 0.0055,
              prefix: 2,
              prefixName: '小学',
              rateType: 4
            },
            {
              growthRate: 0.0055,
              prefix: 2,
              prefixName: '小学',
              rateType: 4
            },
            {
              growthRate: 0.0055,
              prefix: 2,
              prefixName: '小学',
              rateType: 4
            },
            {
              growthRate: 0.0055,
              prefix: 2,
              prefixName: '小学',
              rateType: 4
            },
            {
              growthRate: 0.0099,
              prefix: 2,
              prefixName: '小学',
              rateType: 5
            },
            {
              growthRate: 0.0099,
              prefix: 2,
              prefixName: '小学',
              rateType: 5
            },
            {
              growthRate: 0.0099,
              prefix: 2,
              prefixName: '小学',
              rateType: 5
            },
            {
              growthRate: 0.0099,
              prefix: 2,
              prefixName: '小学',
              rateType: 5
            },
            {
              growthRate: 0.0099,
              prefix: 2,
              prefixName: '小学',
              rateType: 5
            },
            {
              growthRate: 0.0099,
              prefix: 2,
              prefixName: '小学',
              rateType: 5
            },
            {
              growthRate: 0.0075,
              prefix: 2,
              prefixName: '小学',
              rateType: 6
            },
            {
              growthRate: 0.0075,
              prefix: 2,
              prefixName: '小学',
              rateType: 6
            },
            {
              growthRate: 0.0075,
              prefix: 2,
              prefixName: '小学',
              rateType: 6
            },
            {
              growthRate: 0.0075,
              prefix: 2,
              prefixName: '小学',
              rateType: 6
            },
            {
              growthRate: 0.0075,
              prefix: 2,
              prefixName: '小学',
              rateType: 6
            },
            {
              growthRate: 0.0075,
              prefix: 2,
              prefixName: '小学',
              rateType: 6
            }
          ]
        };
      }

      return resultSuccess(data);
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
            areaName: '莲湖区',
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
            areaName: '长安区',
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
            areaName: '临潼区',
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
            areaName: '未央区',
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
            areaName: '雁塔区',
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
            areaName: '新城区',
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
        areaName: '西安市',
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
        maxHighMyopiaRateDiffArea: '莲湖区',
        maxMyopiaRateDiffArea: '临潼区',
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
    url: '/basic-api/eyesight/report/city/getMyopiaInfoByAreaType',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            cityCount: '406',
            cityHighCount: '337',
            cityHighMyopiaRate: 0.6962,
            cityMyopiaRate: 0.8388,
            name: '临潼区',
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
            name: '新城区',
            townCount: '0',
            townHighCount: '0',
            townHighMyopiaRate: 0,
            townMyopiaRate: 0
          },
          {
            cityCount: '1205',
            cityHighCount: '1018',
            cityHighMyopiaRate: 0.6818,
            cityMyopiaRate: 0.807,
            name: '雁塔区',
            townCount: '0',
            townHighCount: '0',
            townHighMyopiaRate: 0,
            townMyopiaRate: 0
          },
          {
            cityCount: '771',
            cityHighCount: '654',
            cityHighMyopiaRate: 0.6721,
            cityMyopiaRate: 0.7923,
            name: '未央区',
            townCount: '0',
            townHighCount: '0',
            townHighMyopiaRate: 0,
            townMyopiaRate: 0
          },
          {
            cityCount: '788',
            cityHighCount: '674',
            cityHighMyopiaRate: 0.6828,
            cityMyopiaRate: 0.7983,
            name: '莲湖区',
            townCount: '0',
            townHighCount: '0',
            townHighMyopiaRate: 0,
            townMyopiaRate: 0
          },
          {
            cityCount: '0',
            cityHighCount: '0',
            cityHighMyopiaRate: 0,
            cityMyopiaRate: 0,
            name: '长安区',
            townCount: '91',
            townHighCount: '82',
            townHighMyopiaRate: 0.6949,
            townMyopiaRate: 0.7711
          },
          {
            cityCount: '7202',
            cityHighCount: '6089',
            cityHighMyopiaRate: 0.6768,
            cityMyopiaRate: 0.8005,
            name: '合计',
            townCount: '91',
            townHighCount: '82',
            townHighMyopiaRate: 0.6949,
            townMyopiaRate: 0.7711
          }
        ],
        message: {
          cityCount: '7',
          cityHighMyopiaRate: 0.6768,
          cityMyopiaRate: 0.8005,
          cityStudentCount: '8996',
          count: 8,
          differMyopiaRate: 0.0294,
          highDifferMyopiaRate: -0.0181,
          townCount: '1',
          townHighMyopiaRate: 0.6949,
          townMyopiaRate: 0.7711,
          townStudentCount: '118'
        },
        name: '西安市'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getMyopiaInfoBySchoolType',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            highMyopiaCount: '671',
            highMyopiaRate: 0.6875,
            myopiaCount: '811',
            myopiaRate: 0.8309,
            name: '初中-常规',
            prefixName: '初中',
            schoolType: 10,
            schoolTypeName: '常规'
          },
          {
            highMyopiaCount: '5500',
            highMyopiaRate: 0.6758,
            myopiaCount: '6482',
            myopiaRate: 0.7965,
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
                prefxSchoolTypeCount: 6,
                schoolType: 10
              },
              {
                prefix: 3,
                prefixName: '初中',
                prefxSchoolTypeCount: 2,
                schoolType: 10
              }
            ],
            schoolType: 10,
            schoolTypeCount: 8,
            schoolTypeName: '常规'
          }
        ],
        name: '西安市'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getKeySchoolMyopiaSituation',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
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
      if (query.reportLevel == 3) {
        data = [
          {
            highMyopiaRate: 0.6732,
            highMyopiaStdCount: '3406',
            myopiaRate: 0.7969,
            myopiaStdCount: '4032',
            name: '小学-常规',
            prefix: 2,
            prefixName: '小学',
            schoolLevel: 10,
            schoolLevelName: '常规',
            stdCount: '5059'
          }
        ];
      }
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getMyopiaCorrectInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        city: '西安市',
        contactLensStdCount: '2577',
        correctMyopiaRate: 0.0534,
        correctMyopiaStdCount: '582',
        frameGlassesStdCount: '2467',
        gradeMyopiaCorrectInfos: [
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '379',
            correctMyopiaRate: 0.0577,
            correctMyopiaStdCount: '93',
            frameGlassesStdCount: '380',
            gradeId: '921830381248271',
            gradeName: '一年级',
            manCorrectMyopiaRate: 0.0642,
            manCorrectMyopiaStdCount: '35',
            manMyopiaStdCount: '545',
            manUdMyopiaRate: 0.699,
            manUdMyopiaStdCount: '381',
            manUnMyopiaRate: 0.2366,
            manUnMyopiaStdCount: '129',
            myopiaStdCount: '1610',
            okLensStdCount: '489',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2022',
            udMyopiaRate: 0.7173,
            udMyopiaStdCount: '1155',
            unMyopiaRate: 0.2248,
            unMyopiaStdCount: '362',
            womanCorrectMyopiaRate: 0.046,
            womanCorrectMyopiaStdCount: '26',
            womanMyopiaStdCount: '565',
            womanUdMyopiaRate: 0.7221,
            womanUdMyopiaStdCount: '408',
            womanUnMyopiaRate: 0.2318,
            womanUnMyopiaStdCount: '131'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '380',
            correctMyopiaRate: 0.0525,
            correctMyopiaStdCount: '84',
            frameGlassesStdCount: '364',
            gradeId: '921830381248272',
            gradeName: '二年级',
            manCorrectMyopiaRate: 0.0632,
            manCorrectMyopiaStdCount: '33',
            manMyopiaStdCount: '522',
            manUdMyopiaRate: 0.7088,
            manUdMyopiaStdCount: '370',
            manUnMyopiaRate: 0.2279,
            manUnMyopiaStdCount: '119',
            myopiaStdCount: '1598',
            okLensStdCount: '511',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2021',
            udMyopiaRate: 0.7327,
            udMyopiaStdCount: '1171',
            unMyopiaRate: 0.2146,
            unMyopiaStdCount: '343',
            womanCorrectMyopiaRate: 0.048,
            womanCorrectMyopiaStdCount: '25',
            womanMyopiaStdCount: '520',
            womanUdMyopiaRate: 0.7461,
            womanUdMyopiaStdCount: '388',
            womanUnMyopiaRate: 0.2057,
            womanUnMyopiaStdCount: '107'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '389',
            correctMyopiaRate: 0.0553,
            correctMyopiaStdCount: '90',
            frameGlassesStdCount: '362',
            gradeId: '921830381248273',
            gradeName: '三年级',
            manCorrectMyopiaRate: 0.0567,
            manCorrectMyopiaStdCount: '30',
            manMyopiaStdCount: '529',
            manUdMyopiaRate: 0.688,
            manUdMyopiaStdCount: '364',
            manUnMyopiaRate: 0.2551,
            manUnMyopiaStdCount: '135',
            myopiaStdCount: '1626',
            okLensStdCount: '495',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2020',
            udMyopiaRate: 0.7109,
            udMyopiaStdCount: '1156',
            unMyopiaRate: 0.2337,
            unMyopiaStdCount: '380',
            womanCorrectMyopiaRate: 0.0554,
            womanCorrectMyopiaStdCount: '31',
            womanMyopiaStdCount: '559',
            womanUdMyopiaRate: 0.6994,
            womanUdMyopiaStdCount: '391',
            womanUnMyopiaRate: 0.245,
            womanUnMyopiaStdCount: '137'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '388',
            correctMyopiaRate: 0.0524,
            correctMyopiaStdCount: '84',
            frameGlassesStdCount: '365',
            gradeId: '921830381248274',
            gradeName: '四年级',
            manCorrectMyopiaRate: 0.0616,
            manCorrectMyopiaStdCount: '32',
            manMyopiaStdCount: '519',
            manUdMyopiaRate: 0.7321,
            manUdMyopiaStdCount: '380',
            manUnMyopiaRate: 0.2061,
            manUnMyopiaStdCount: '107',
            myopiaStdCount: '1601',
            okLensStdCount: '489',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2019',
            udMyopiaRate: 0.7232,
            udMyopiaStdCount: '1158',
            unMyopiaRate: 0.2242,
            unMyopiaStdCount: '359',
            womanCorrectMyopiaRate: 0.0438,
            womanCorrectMyopiaStdCount: '23',
            womanMyopiaStdCount: '524',
            womanUdMyopiaRate: 0.7251,
            womanUdMyopiaStdCount: '380',
            womanUnMyopiaRate: 0.2309,
            womanUnMyopiaStdCount: '121'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '399',
            correctMyopiaRate: 0.0521,
            correctMyopiaStdCount: '84',
            frameGlassesStdCount: '341',
            gradeId: '921830381248275',
            gradeName: '五年级',
            manCorrectMyopiaRate: 0.0426,
            manCorrectMyopiaStdCount: '23',
            manMyopiaStdCount: '539',
            manUdMyopiaRate: 0.7291,
            manUdMyopiaStdCount: '393',
            manUnMyopiaRate: 0.2282,
            manUnMyopiaStdCount: '123',
            myopiaStdCount: '1612',
            okLensStdCount: '501',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2018',
            udMyopiaRate: 0.7177,
            udMyopiaStdCount: '1157',
            unMyopiaRate: 0.2301,
            unMyopiaStdCount: '371',
            womanCorrectMyopiaRate: 0.05,
            womanCorrectMyopiaStdCount: '28',
            womanMyopiaStdCount: '559',
            womanUdMyopiaRate: 0.7084,
            womanUdMyopiaStdCount: '396',
            womanUnMyopiaRate: 0.2415,
            womanUnMyopiaStdCount: '135'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '379',
            correctMyopiaRate: 0.0536,
            correctMyopiaStdCount: '87',
            frameGlassesStdCount: '365',
            gradeId: '921830381248276',
            gradeName: '六年级',
            manCorrectMyopiaRate: 0.0606,
            manCorrectMyopiaStdCount: '32',
            manMyopiaStdCount: '528',
            manUdMyopiaRate: 0.7007,
            manUdMyopiaStdCount: '370',
            manUnMyopiaRate: 0.2386,
            manUnMyopiaStdCount: '126',
            myopiaStdCount: '1621',
            okLensStdCount: '477',
            otherRate: 0,
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: '2017',
            udMyopiaRate: 0.6995,
            udMyopiaStdCount: '1134',
            unMyopiaRate: 0.2467,
            unMyopiaStdCount: '400',
            womanCorrectMyopiaRate: 0.0471,
            womanCorrectMyopiaStdCount: '27',
            womanMyopiaStdCount: '573',
            womanUdMyopiaRate: 0.6963,
            womanUdMyopiaStdCount: '399',
            womanUnMyopiaRate: 0.2565,
            womanUnMyopiaStdCount: '147'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '80',
            correctMyopiaRate: 0.0442,
            correctMyopiaStdCount: '18',
            frameGlassesStdCount: '104',
            gradeId: '921830381248277',
            gradeName: '初一',
            manCorrectMyopiaRate: 0.0521,
            manCorrectMyopiaStdCount: '6',
            manMyopiaStdCount: '115',
            manUdMyopiaRate: 0.7478,
            manUdMyopiaStdCount: '86',
            manUnMyopiaRate: 0.2,
            manUnMyopiaStdCount: '23',
            myopiaStdCount: '407',
            okLensStdCount: '133',
            otherRate: 0,
            prefix: 3,
            prefixName: '初中',
            schoolId: null,
            schoolName: null,
            studyYear: '2022',
            udMyopiaRate: 0.7346,
            udMyopiaStdCount: '299',
            unMyopiaRate: 0.2211,
            unMyopiaStdCount: '90',
            womanCorrectMyopiaRate: 0.0516,
            womanCorrectMyopiaStdCount: '8',
            womanMyopiaStdCount: '155',
            womanUdMyopiaRate: 0.6967,
            womanUdMyopiaStdCount: '108',
            womanUnMyopiaRate: 0.2516,
            womanUnMyopiaStdCount: '39'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '108',
            correctMyopiaRate: 0.0526,
            correctMyopiaStdCount: '22',
            frameGlassesStdCount: '88',
            gradeId: '921830381248278',
            gradeName: '初二',
            manCorrectMyopiaRate: 0.0612,
            manCorrectMyopiaStdCount: '9',
            manMyopiaStdCount: '147',
            manUdMyopiaRate: 0.721,
            manUdMyopiaStdCount: '106',
            manUnMyopiaRate: 0.2176,
            manUnMyopiaStdCount: '32',
            myopiaStdCount: '418',
            okLensStdCount: '129',
            otherRate: 0,
            prefix: 3,
            prefixName: '初中',
            schoolId: null,
            schoolName: null,
            studyYear: '2021',
            udMyopiaRate: 0.7248,
            udMyopiaStdCount: '303',
            unMyopiaRate: 0.2224,
            unMyopiaStdCount: '93',
            womanCorrectMyopiaRate: 0.0312,
            womanCorrectMyopiaStdCount: '4',
            womanMyopiaStdCount: '128',
            womanUdMyopiaRate: 0.7265,
            womanUdMyopiaStdCount: '93',
            womanUnMyopiaRate: 0.2421,
            womanUnMyopiaStdCount: '31'
          },
          {
            classMyopiaCorrectInfos: null,
            contactLensStdCount: '75',
            correctMyopiaRate: 0.0498,
            correctMyopiaStdCount: '20',
            frameGlassesStdCount: '98',
            gradeId: '921830381248279',
            gradeName: '初三',
            manCorrectMyopiaRate: 0.0387,
            manCorrectMyopiaStdCount: '5',
            manMyopiaStdCount: '129',
            manUdMyopiaRate: 0.7209,
            manUdMyopiaStdCount: '93',
            manUnMyopiaRate: 0.2403,
            manUnMyopiaStdCount: '31',
            myopiaStdCount: '401',
            okLensStdCount: '143',
            otherRate: 0,
            prefix: 3,
            prefixName: '初中',
            schoolId: null,
            schoolName: null,
            studyYear: '2020',
            udMyopiaRate: 0.7381,
            udMyopiaStdCount: '296',
            unMyopiaRate: 0.2119,
            unMyopiaStdCount: '85',
            womanCorrectMyopiaRate: 0.051,
            womanCorrectMyopiaStdCount: '7',
            womanMyopiaStdCount: '137',
            womanUdMyopiaRate: 0.7226,
            womanUdMyopiaStdCount: '99',
            womanUnMyopiaRate: 0.2262,
            womanUnMyopiaStdCount: '31'
          }
        ],
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
        regionMyopiaCorrectInfos: [
          {
            contactLensStdCount: '438',
            correctMyopiaRate: 0.0532,
            correctMyopiaStdCount: '96',
            frameGlassesStdCount: '373',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0585,
            manCorrectMyopiaStdCount: '33',
            manMyopiaStdCount: '564',
            manUdMyopiaRate: 0.7446,
            manUdMyopiaStdCount: '420',
            manUnMyopiaRate: 0.1968,
            manUnMyopiaStdCount: '111',
            myopiaStdCount: '1804',
            okLensStdCount: '602',
            otherRate: 0,
            region: '雁塔区',
            regionId: '610113',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.73,
            udMyopiaStdCount: '1317',
            unMyopiaRate: 0.2167,
            unMyopiaStdCount: '391',
            womanCorrectMyopiaRate: 0.0452,
            womanCorrectMyopiaStdCount: '29',
            womanMyopiaStdCount: '641',
            womanUdMyopiaRate: 0.6973,
            womanUdMyopiaStdCount: '447',
            womanUnMyopiaRate: 0.2574,
            womanUnMyopiaStdCount: '165'
          },
          {
            contactLensStdCount: '266',
            correctMyopiaRate: 0.0508,
            correctMyopiaStdCount: '61',
            frameGlassesStdCount: '298',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0474,
            manCorrectMyopiaStdCount: '18',
            manMyopiaStdCount: '379',
            manUdMyopiaRate: 0.7097,
            manUdMyopiaStdCount: '269',
            manUnMyopiaRate: 0.2427,
            manUnMyopiaStdCount: '92',
            myopiaStdCount: '1199',
            okLensStdCount: '350',
            otherRate: 0,
            region: '莲湖区',
            regionId: '610104',
            schoolMyopiaCorrectInfos: null,
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
          },
          {
            contactLensStdCount: '18',
            correctMyopiaRate: 0.0329,
            correctMyopiaStdCount: '3',
            frameGlassesStdCount: '23',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0232,
            manCorrectMyopiaStdCount: '1',
            manMyopiaStdCount: '43',
            manUdMyopiaRate: 0.7209,
            manUdMyopiaStdCount: '31',
            manUnMyopiaRate: 0.2558,
            manUnMyopiaStdCount: '11',
            myopiaStdCount: '91',
            okLensStdCount: '25',
            otherRate: 0,
            region: '长安区',
            regionId: '610116',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.6923,
            udMyopiaStdCount: '63',
            unMyopiaRate: 0.2747,
            unMyopiaStdCount: '25',
            womanCorrectMyopiaRate: 0.0416,
            womanCorrectMyopiaStdCount: '2',
            womanMyopiaStdCount: '48',
            womanUdMyopiaRate: 0.6666,
            womanUdMyopiaStdCount: '32',
            womanUnMyopiaRate: 0.2916,
            womanUnMyopiaStdCount: '14'
          },
          {
            contactLensStdCount: '127',
            correctMyopiaRate: 0.0578,
            correctMyopiaStdCount: '36',
            frameGlassesStdCount: '154',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0539,
            manCorrectMyopiaStdCount: '11',
            manMyopiaStdCount: '204',
            manUdMyopiaRate: 0.7107,
            manUdMyopiaStdCount: '145',
            manUnMyopiaRate: 0.2352,
            manUnMyopiaStdCount: '48',
            myopiaStdCount: '622',
            okLensStdCount: '203',
            otherRate: 0,
            region: '临潼区',
            regionId: '610115',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.7202,
            udMyopiaStdCount: '448',
            unMyopiaRate: 0.2218,
            unMyopiaStdCount: '138',
            womanCorrectMyopiaRate: 0.0396,
            womanCorrectMyopiaStdCount: '8',
            womanMyopiaStdCount: '202',
            womanUdMyopiaRate: 0.7277,
            womanUdMyopiaStdCount: '147',
            womanUnMyopiaRate: 0.2326,
            womanUnMyopiaStdCount: '47'
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
            region: '新城区',
            regionId: '610102',
            schoolMyopiaCorrectInfos: null,
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
            contactLensStdCount: '303',
            correctMyopiaRate: 0.0604,
            correctMyopiaStdCount: '73',
            frameGlassesStdCount: '269',
            gradeMyopiaCorrectInfos: null,
            manCorrectMyopiaRate: 0.0562,
            manCorrectMyopiaStdCount: '22',
            manMyopiaStdCount: '391',
            manUdMyopiaRate: 0.7237,
            manUdMyopiaStdCount: '283',
            manUnMyopiaRate: 0.2199,
            manUnMyopiaStdCount: '86',
            myopiaStdCount: '1208',
            okLensStdCount: '344',
            otherRate: 0,
            region: '未央区',
            regionId: '610112',
            schoolMyopiaCorrectInfos: null,
            udMyopiaRate: 0.6978,
            udMyopiaStdCount: '843',
            unMyopiaRate: 0.2417,
            unMyopiaStdCount: '292',
            womanCorrectMyopiaRate: 0.0657,
            womanCorrectMyopiaStdCount: '25',
            womanMyopiaStdCount: '380',
            womanUdMyopiaRate: 0.6789,
            womanUdMyopiaStdCount: '258',
            womanUnMyopiaRate: 0.2552,
            womanUnMyopiaStdCount: '97'
          }
        ],
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
            region: '未央区',
            regionId: '610112'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '新城区',
            regionId: '610102'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '2',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '长安区',
            regionId: '610116'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '雁塔区',
            regionId: '610113'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '莲湖区',
            regionId: '610104'
          },
          {
            hyperopiaReservesEnough: '0',
            hyperopiaReservesEnoughNum: '0',
            hyperopiaReservesNotEnough: '0',
            hyperopiaReservesNotEnoughNum: '0',
            region: '临潼区',
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
    url: '/basic-api/eyesight/report/city/getMyopiaInfoByAge',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            age: '9岁',
            highMyopiaCount: '11',
            highMyopiaMyopiaRate: 0.8461,
            myopiaCount: '12',
            myopiaMyopiaRate: 0.923
          },
          {
            age: '10岁',
            highMyopiaCount: '21',
            highMyopiaMyopiaRate: 0.6176,
            myopiaCount: '25',
            myopiaMyopiaRate: 0.7352
          },
          {
            age: '11岁',
            highMyopiaCount: '25',
            highMyopiaMyopiaRate: 0.6756,
            myopiaCount: '25',
            myopiaMyopiaRate: 0.6756
          },
          {
            age: '12岁',
            highMyopiaCount: '20',
            highMyopiaMyopiaRate: 0.8333,
            myopiaCount: '21',
            myopiaMyopiaRate: 0.875
          },
          {
            age: '13岁',
            highMyopiaCount: '5',
            highMyopiaMyopiaRate: 0.5,
            myopiaCount: '8',
            myopiaMyopiaRate: 0.8
          },
          {
            age: '14岁',
            highMyopiaCount: '693',
            highMyopiaMyopiaRate: 0.665,
            myopiaCount: '822',
            myopiaMyopiaRate: 0.7888
          },
          {
            age: '15岁',
            highMyopiaCount: '643',
            highMyopiaMyopiaRate: 0.6442,
            myopiaCount: '801',
            myopiaMyopiaRate: 0.8026
          },
          {
            age: '16岁',
            highMyopiaCount: '654',
            highMyopiaMyopiaRate: 0.6424,
            myopiaCount: '778',
            myopiaMyopiaRate: 0.7642
          },
          {
            age: '17岁',
            highMyopiaCount: '679',
            highMyopiaMyopiaRate: 0.681,
            myopiaCount: '820',
            myopiaMyopiaRate: 0.8224
          }
        ],
        name: '西安市'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getVisionDistribute',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            rate: 0.0498,
            vision: '5.3',
            visionNum: 1022
          },
          {
            rate: 0.0468,
            vision: '5.2',
            visionNum: 959
          },
          {
            rate: 0.0466,
            vision: '5.1',
            visionNum: 956
          },
          {
            rate: 0.0461,
            vision: '5.0',
            visionNum: 945
          },
          {
            rate: 0.0482,
            vision: '4.9',
            visionNum: 989
          },
          {
            rate: 0.0472,
            vision: '4.8',
            visionNum: 967
          },
          {
            rate: 0.0468,
            vision: '4.7',
            visionNum: 959
          },
          {
            rate: 0.0473,
            vision: '4.6',
            visionNum: 969
          },
          {
            rate: 0.0462,
            vision: '4.5',
            visionNum: 948
          },
          {
            rate: 0.0486,
            vision: '4.4',
            visionNum: 996
          },
          {
            rate: 0.0508,
            vision: '4.3',
            visionNum: 1042
          },
          {
            rate: 0.047,
            vision: '4.2',
            visionNum: 963
          },
          {
            rate: 0.0467,
            vision: '4.1',
            visionNum: 957
          },
          {
            rate: 0.0492,
            vision: '4.0',
            visionNum: 1009
          },
          {
            rate: 0.046,
            vision: '3.9',
            visionNum: 944
          },
          {
            rate: 0.0525,
            vision: '3.8',
            visionNum: 1076
          },
          {
            rate: 0.0466,
            vision: '3.7',
            visionNum: 955
          },
          {
            rate: 0.047,
            vision: '3.6',
            visionNum: 963
          },
          {
            rate: 0.0481,
            vision: '3.5',
            visionNum: 986
          },
          {
            rate: 0.0464,
            vision: '3.4',
            visionNum: 952
          },
          {
            rate: 0.0227,
            vision: '3.3',
            visionNum: 465
          }
        ],
        name: '西安市'
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
            region: '未央区',
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
            region: '新城区',
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
            region: '长安区',
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
            region: '雁塔区',
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
            region: '莲湖区',
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
            region: '临潼区',
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
    url: '/basic-api/eyesight/report/city/getDiopterSituation',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        dataList: [
          {
            className: null,
            classYear: '2022',
            dpSphAverageValue: 0.07,
            dpSphStandardDeviation: 11.54,
            eqDpSphAverageValue: -4.87,
            eqDpSphStandardDeviation: 11.86,
            gradeName: '一年级',
            name: '(小学2022)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2021',
            dpSphAverageValue: 0.21,
            dpSphStandardDeviation: 11.4,
            eqDpSphAverageValue: -4.69,
            eqDpSphStandardDeviation: 11.76,
            gradeName: '二年级',
            name: '(小学2021)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2020',
            dpSphAverageValue: 0.01,
            dpSphStandardDeviation: 11.52,
            eqDpSphAverageValue: -4.88,
            eqDpSphStandardDeviation: 11.93,
            gradeName: '三年级',
            name: '(小学2020)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2019',
            dpSphAverageValue: -0.05,
            dpSphStandardDeviation: 11.45,
            eqDpSphAverageValue: -5.1,
            eqDpSphStandardDeviation: 11.94,
            gradeName: '四年级',
            name: '(小学2019)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2018',
            dpSphAverageValue: 0.2,
            dpSphStandardDeviation: 11.36,
            eqDpSphAverageValue: -4.72,
            eqDpSphStandardDeviation: 11.64,
            gradeName: '五年级',
            name: '(小学2018)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2017',
            dpSphAverageValue: -0.19,
            dpSphStandardDeviation: 11.47,
            eqDpSphAverageValue: -5.11,
            eqDpSphStandardDeviation: 11.82,
            gradeName: '六年级',
            name: '(小学2017)',
            prefix: 2
          },
          {
            className: null,
            classYear: '2022',
            dpSphAverageValue: 0.68,
            dpSphStandardDeviation: 11.6,
            eqDpSphAverageValue: -4.29,
            eqDpSphStandardDeviation: 12,
            gradeName: '初一',
            name: '(初中2022)',
            prefix: 3
          },
          {
            className: null,
            classYear: '2021',
            dpSphAverageValue: -0.96,
            dpSphStandardDeviation: 11.43,
            eqDpSphAverageValue: -5.84,
            eqDpSphStandardDeviation: 11.78,
            gradeName: '初二',
            name: '(初中2021)',
            prefix: 3
          },
          {
            className: null,
            classYear: '2020',
            dpSphAverageValue: 0.48,
            dpSphStandardDeviation: 11.38,
            eqDpSphAverageValue: -4.3,
            eqDpSphStandardDeviation: 11.83,
            gradeName: '初三',
            name: '(初中2020)',
            prefix: 3
          }
        ],
        dpSphList: [
          {
            count: '7',
            data: -20
          },
          {
            count: '157',
            data: -19.75
          },
          {
            count: '170',
            data: -19.5
          },
          {
            count: '195',
            data: -19.25
          },
          {
            count: '174',
            data: -19
          },
          {
            count: '184',
            data: -18.75
          },
          {
            count: '152',
            data: -18.5
          },
          {
            count: '181',
            data: -18.25
          },
          {
            count: '169',
            data: -18
          },
          {
            count: '178',
            data: -17.75
          },
          {
            count: '172',
            data: -17.5
          },
          {
            count: '182',
            data: -17.25
          },
          {
            count: '164',
            data: -17
          },
          {
            count: '175',
            data: -16.75
          },
          {
            count: '175',
            data: -16.5
          },
          {
            count: '173',
            data: -16.25
          },
          {
            count: '175',
            data: -16
          },
          {
            count: '167',
            data: -15.75
          },
          {
            count: '177',
            data: -15.5
          },
          {
            count: '173',
            data: -15.25
          },
          {
            count: '170',
            data: -15
          },
          {
            count: '170',
            data: -14.75
          },
          {
            count: '203',
            data: -14.5
          },
          {
            count: '130',
            data: -14.25
          },
          {
            count: '138',
            data: -14
          },
          {
            count: '157',
            data: -13.75
          },
          {
            count: '157',
            data: -13.5
          },
          {
            count: '156',
            data: -13.25
          },
          {
            count: '177',
            data: -13
          },
          {
            count: '157',
            data: -12.75
          },
          {
            count: '155',
            data: -12.5
          },
          {
            count: '164',
            data: -12.25
          },
          {
            count: '179',
            data: -12
          },
          {
            count: '189',
            data: -11.75
          },
          {
            count: '190',
            data: -11.5
          },
          {
            count: '174',
            data: -11.25
          },
          {
            count: '155',
            data: -11
          },
          {
            count: '196',
            data: -10.75
          },
          {
            count: '173',
            data: -10.5
          },
          {
            count: '162',
            data: -10.25
          },
          {
            count: '167',
            data: -10
          },
          {
            count: '174',
            data: -9.75
          },
          {
            count: '171',
            data: -9.5
          },
          {
            count: '160',
            data: -9.25
          },
          {
            count: '150',
            data: -9
          },
          {
            count: '183',
            data: -8.75
          },
          {
            count: '141',
            data: -8.5
          },
          {
            count: '148',
            data: -8.25
          },
          {
            count: '169',
            data: -8
          },
          {
            count: '171',
            data: -7.75
          },
          {
            count: '156',
            data: -7.5
          },
          {
            count: '175',
            data: -7.25
          },
          {
            count: '150',
            data: -7
          },
          {
            count: '185',
            data: -6.75
          },
          {
            count: '160',
            data: -6.5
          },
          {
            count: '170',
            data: -6.25
          },
          {
            count: '168',
            data: -6
          },
          {
            count: '164',
            data: -5.75
          },
          {
            count: '157',
            data: -5.5
          },
          {
            count: '173',
            data: -5.25
          },
          {
            count: '168',
            data: -5
          },
          {
            count: '178',
            data: -4.75
          },
          {
            count: '164',
            data: -4.5
          },
          {
            count: '197',
            data: -4.25
          },
          {
            count: '173',
            data: -4
          },
          {
            count: '160',
            data: -3.75
          },
          {
            count: '174',
            data: -3.5
          },
          {
            count: '169',
            data: -3.25
          },
          {
            count: '185',
            data: -3
          },
          {
            count: '159',
            data: -2.75
          },
          {
            count: '186',
            data: -2.5
          },
          {
            count: '172',
            data: -2.25
          },
          {
            count: '151',
            data: -2
          },
          {
            count: '167',
            data: -1.75
          },
          {
            count: '168',
            data: -1.5
          },
          {
            count: '170',
            data: -1.25
          },
          {
            count: '167',
            data: -1
          },
          {
            count: '160',
            data: -0.75
          },
          {
            count: '156',
            data: -0.5
          },
          {
            count: '191',
            data: -0.25
          },
          {
            count: '344',
            data: 0
          },
          {
            count: '171',
            data: 0.25
          },
          {
            count: '186',
            data: 0.5
          },
          {
            count: '177',
            data: 0.75
          },
          {
            count: '174',
            data: 1
          },
          {
            count: '190',
            data: 1.25
          },
          {
            count: '161',
            data: 1.5
          },
          {
            count: '171',
            data: 1.75
          },
          {
            count: '155',
            data: 2
          },
          {
            count: '173',
            data: 2.25
          },
          {
            count: '169',
            data: 2.5
          },
          {
            count: '155',
            data: 2.75
          },
          {
            count: '177',
            data: 3
          },
          {
            count: '198',
            data: 3.25
          },
          {
            count: '153',
            data: 3.5
          },
          {
            count: '174',
            data: 3.75
          },
          {
            count: '184',
            data: 4
          },
          {
            count: '176',
            data: 4.25
          },
          {
            count: '162',
            data: 4.5
          },
          {
            count: '159',
            data: 4.75
          },
          {
            count: '182',
            data: 5
          },
          {
            count: '166',
            data: 5.25
          },
          {
            count: '186',
            data: 5.5
          },
          {
            count: '159',
            data: 5.75
          },
          {
            count: '153',
            data: 6
          },
          {
            count: '181',
            data: 6.25
          },
          {
            count: '181',
            data: 6.5
          },
          {
            count: '157',
            data: 6.75
          },
          {
            count: '184',
            data: 7
          },
          {
            count: '184',
            data: 7.25
          },
          {
            count: '146',
            data: 7.5
          },
          {
            count: '147',
            data: 7.75
          },
          {
            count: '166',
            data: 8
          },
          {
            count: '185',
            data: 8.25
          },
          {
            count: '160',
            data: 8.5
          },
          {
            count: '191',
            data: 8.75
          },
          {
            count: '173',
            data: 9
          },
          {
            count: '162',
            data: 9.25
          },
          {
            count: '163',
            data: 9.5
          },
          {
            count: '168',
            data: 9.75
          },
          {
            count: '170',
            data: 10
          },
          {
            count: '176',
            data: 10.25
          },
          {
            count: '187',
            data: 10.5
          },
          {
            count: '176',
            data: 10.75
          },
          {
            count: '174',
            data: 11
          },
          {
            count: '164',
            data: 11.25
          },
          {
            count: '169',
            data: 11.5
          },
          {
            count: '179',
            data: 11.75
          },
          {
            count: '170',
            data: 12
          },
          {
            count: '188',
            data: 12.25
          },
          {
            count: '157',
            data: 12.5
          },
          {
            count: '163',
            data: 12.75
          },
          {
            count: '165',
            data: 13
          },
          {
            count: '168',
            data: 13.25
          },
          {
            count: '169',
            data: 13.5
          },
          {
            count: '191',
            data: 13.75
          },
          {
            count: '159',
            data: 14
          },
          {
            count: '164',
            data: 14.25
          },
          {
            count: '195',
            data: 14.5
          },
          {
            count: '178',
            data: 14.75
          },
          {
            count: '153',
            data: 15
          },
          {
            count: '155',
            data: 15.25
          },
          {
            count: '176',
            data: 15.5
          },
          {
            count: '198',
            data: 15.75
          },
          {
            count: '173',
            data: 16
          },
          {
            count: '166',
            data: 16.25
          },
          {
            count: '167',
            data: 16.5
          },
          {
            count: '178',
            data: 16.75
          },
          {
            count: '175',
            data: 17
          },
          {
            count: '167',
            data: 17.25
          },
          {
            count: '177',
            data: 17.5
          },
          {
            count: '168',
            data: 17.75
          },
          {
            count: '162',
            data: 18
          },
          {
            count: '168',
            data: 18.25
          },
          {
            count: '155',
            data: 18.5
          },
          {
            count: '164',
            data: 18.75
          },
          {
            count: '180',
            data: 19
          },
          {
            count: '167',
            data: 19.25
          },
          {
            count: '191',
            data: 19.5
          },
          {
            count: '168',
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
            data: -29.63
          },
          {
            count: '4',
            data: -29.38
          },
          {
            count: '7',
            data: -29.25
          },
          {
            count: '14',
            data: -29.13
          },
          {
            count: '7',
            data: -29
          },
          {
            count: '4',
            data: -28.88
          },
          {
            count: '13',
            data: -28.75
          },
          {
            count: '12',
            data: -28.63
          },
          {
            count: '16',
            data: -28.5
          },
          {
            count: '11',
            data: -28.38
          },
          {
            count: '8',
            data: -28.25
          },
          {
            count: '19',
            data: -28.13
          },
          {
            count: '14',
            data: -28
          },
          {
            count: '16',
            data: -27.88
          },
          {
            count: '13',
            data: -27.75
          },
          {
            count: '16',
            data: -27.63
          },
          {
            count: '20',
            data: -27.5
          },
          {
            count: '15',
            data: -27.38
          },
          {
            count: '25',
            data: -27.25
          },
          {
            count: '25',
            data: -27.13
          },
          {
            count: '24',
            data: -27
          },
          {
            count: '22',
            data: -26.88
          },
          {
            count: '17',
            data: -26.75
          },
          {
            count: '34',
            data: -26.63
          },
          {
            count: '25',
            data: -26.5
          },
          {
            count: '23',
            data: -26.38
          },
          {
            count: '26',
            data: -26.25
          },
          {
            count: '31',
            data: -26.13
          },
          {
            count: '37',
            data: -26
          },
          {
            count: '47',
            data: -25.88
          },
          {
            count: '37',
            data: -25.75
          },
          {
            count: '39',
            data: -25.63
          },
          {
            count: '39',
            data: -25.5
          },
          {
            count: '47',
            data: -25.38
          },
          {
            count: '32',
            data: -25.25
          },
          {
            count: '50',
            data: -25.13
          },
          {
            count: '36',
            data: -25
          },
          {
            count: '46',
            data: -24.88
          },
          {
            count: '41',
            data: -24.75
          },
          {
            count: '48',
            data: -24.63
          },
          {
            count: '47',
            data: -24.5
          },
          {
            count: '51',
            data: -24.38
          },
          {
            count: '45',
            data: -24.25
          },
          {
            count: '46',
            data: -24.13
          },
          {
            count: '57',
            data: -24
          },
          {
            count: '46',
            data: -23.88
          },
          {
            count: '65',
            data: -23.75
          },
          {
            count: '51',
            data: -23.63
          },
          {
            count: '57',
            data: -23.5
          },
          {
            count: '64',
            data: -23.38
          },
          {
            count: '48',
            data: -23.25
          },
          {
            count: '35',
            data: -23.13
          },
          {
            count: '59',
            data: -23
          },
          {
            count: '66',
            data: -22.88
          },
          {
            count: '63',
            data: -22.75
          },
          {
            count: '65',
            data: -22.63
          },
          {
            count: '52',
            data: -22.5
          },
          {
            count: '54',
            data: -22.38
          },
          {
            count: '59',
            data: -22.25
          },
          {
            count: '80',
            data: -22.13
          },
          {
            count: '78',
            data: -22
          },
          {
            count: '62',
            data: -21.88
          },
          {
            count: '76',
            data: -21.75
          },
          {
            count: '67',
            data: -21.63
          },
          {
            count: '79',
            data: -21.5
          },
          {
            count: '64',
            data: -21.38
          },
          {
            count: '78',
            data: -21.25
          },
          {
            count: '83',
            data: -21.13
          },
          {
            count: '75',
            data: -21
          },
          {
            count: '78',
            data: -20.88
          },
          {
            count: '83',
            data: -20.75
          },
          {
            count: '74',
            data: -20.63
          },
          {
            count: '72',
            data: -20.5
          },
          {
            count: '97',
            data: -20.38
          },
          {
            count: '79',
            data: -20.25
          },
          {
            count: '76',
            data: -20.13
          },
          {
            count: '83',
            data: -20
          },
          {
            count: '101',
            data: -19.88
          },
          {
            count: '71',
            data: -19.75
          },
          {
            count: '104',
            data: -19.63
          },
          {
            count: '82',
            data: -19.5
          },
          {
            count: '86',
            data: -19.38
          },
          {
            count: '93',
            data: -19.25
          },
          {
            count: '89',
            data: -19.13
          },
          {
            count: '71',
            data: -19
          },
          {
            count: '92',
            data: -18.88
          },
          {
            count: '76',
            data: -18.75
          },
          {
            count: '93',
            data: -18.63
          },
          {
            count: '79',
            data: -18.5
          },
          {
            count: '100',
            data: -18.38
          },
          {
            count: '93',
            data: -18.25
          },
          {
            count: '80',
            data: -18.13
          },
          {
            count: '78',
            data: -18
          },
          {
            count: '85',
            data: -17.88
          },
          {
            count: '86',
            data: -17.75
          },
          {
            count: '83',
            data: -17.63
          },
          {
            count: '88',
            data: -17.5
          },
          {
            count: '76',
            data: -17.38
          },
          {
            count: '81',
            data: -17.25
          },
          {
            count: '80',
            data: -17.13
          },
          {
            count: '72',
            data: -17
          },
          {
            count: '76',
            data: -16.88
          },
          {
            count: '86',
            data: -16.75
          },
          {
            count: '72',
            data: -16.63
          },
          {
            count: '78',
            data: -16.5
          },
          {
            count: '78',
            data: -16.38
          },
          {
            count: '71',
            data: -16.25
          },
          {
            count: '83',
            data: -16.13
          },
          {
            count: '89',
            data: -16
          },
          {
            count: '85',
            data: -15.88
          },
          {
            count: '88',
            data: -15.75
          },
          {
            count: '74',
            data: -15.63
          },
          {
            count: '74',
            data: -15.5
          },
          {
            count: '93',
            data: -15.38
          },
          {
            count: '80',
            data: -15.25
          },
          {
            count: '81',
            data: -15.13
          },
          {
            count: '88',
            data: -15
          },
          {
            count: '83',
            data: -14.88
          },
          {
            count: '82',
            data: -14.75
          },
          {
            count: '79',
            data: -14.63
          },
          {
            count: '86',
            data: -14.5
          },
          {
            count: '85',
            data: -14.38
          },
          {
            count: '68',
            data: -14.25
          },
          {
            count: '73',
            data: -14.13
          },
          {
            count: '83',
            data: -14
          },
          {
            count: '87',
            data: -13.88
          },
          {
            count: '89',
            data: -13.75
          },
          {
            count: '101',
            data: -13.63
          },
          {
            count: '78',
            data: -13.5
          },
          {
            count: '83',
            data: -13.38
          },
          {
            count: '92',
            data: -13.25
          },
          {
            count: '77',
            data: -13.13
          },
          {
            count: '85',
            data: -13
          },
          {
            count: '86',
            data: -12.88
          },
          {
            count: '85',
            data: -12.75
          },
          {
            count: '85',
            data: -12.63
          },
          {
            count: '82',
            data: -12.5
          },
          {
            count: '73',
            data: -12.38
          },
          {
            count: '68',
            data: -12.25
          },
          {
            count: '88',
            data: -12.13
          },
          {
            count: '91',
            data: -12
          },
          {
            count: '88',
            data: -11.88
          },
          {
            count: '96',
            data: -11.75
          },
          {
            count: '83',
            data: -11.63
          },
          {
            count: '76',
            data: -11.5
          },
          {
            count: '79',
            data: -11.38
          },
          {
            count: '88',
            data: -11.25
          },
          {
            count: '86',
            data: -11.13
          },
          {
            count: '85',
            data: -11
          },
          {
            count: '66',
            data: -10.88
          },
          {
            count: '92',
            data: -10.75
          },
          {
            count: '90',
            data: -10.63
          },
          {
            count: '84',
            data: -10.5
          },
          {
            count: '78',
            data: -10.38
          },
          {
            count: '71',
            data: -10.25
          },
          {
            count: '98',
            data: -10.13
          },
          {
            count: '75',
            data: -10
          },
          {
            count: '88',
            data: -9.88
          },
          {
            count: '89',
            data: -9.75
          },
          {
            count: '88',
            data: -9.63
          },
          {
            count: '94',
            data: -9.5
          },
          {
            count: '82',
            data: -9.38
          },
          {
            count: '87',
            data: -9.25
          },
          {
            count: '91',
            data: -9.13
          },
          {
            count: '81',
            data: -9
          },
          {
            count: '89',
            data: -8.88
          },
          {
            count: '85',
            data: -8.75
          },
          {
            count: '105',
            data: -8.63
          },
          {
            count: '99',
            data: -8.5
          },
          {
            count: '96',
            data: -8.38
          },
          {
            count: '70',
            data: -8.25
          },
          {
            count: '81',
            data: -8.13
          },
          {
            count: '93',
            data: -8
          },
          {
            count: '94',
            data: -7.88
          },
          {
            count: '89',
            data: -7.75
          },
          {
            count: '83',
            data: -7.63
          },
          {
            count: '75',
            data: -7.5
          },
          {
            count: '77',
            data: -7.38
          },
          {
            count: '94',
            data: -7.25
          },
          {
            count: '83',
            data: -7.13
          },
          {
            count: '77',
            data: -7
          },
          {
            count: '94',
            data: -6.88
          },
          {
            count: '100',
            data: -6.75
          },
          {
            count: '81',
            data: -6.63
          },
          {
            count: '92',
            data: -6.5
          },
          {
            count: '86',
            data: -6.38
          },
          {
            count: '87',
            data: -6.25
          },
          {
            count: '87',
            data: -6.13
          },
          {
            count: '81',
            data: -6
          },
          {
            count: '93',
            data: -5.88
          },
          {
            count: '77',
            data: -5.75
          },
          {
            count: '85',
            data: -5.63
          },
          {
            count: '80',
            data: -5.5
          },
          {
            count: '92',
            data: -5.38
          },
          {
            count: '89',
            data: -5.25
          },
          {
            count: '87',
            data: -5.13
          },
          {
            count: '87',
            data: -5
          },
          {
            count: '65',
            data: -4.88
          },
          {
            count: '80',
            data: -4.75
          },
          {
            count: '93',
            data: -4.63
          },
          {
            count: '93',
            data: -4.5
          },
          {
            count: '89',
            data: -4.38
          },
          {
            count: '99',
            data: -4.25
          },
          {
            count: '89',
            data: -4.13
          },
          {
            count: '90',
            data: -4
          },
          {
            count: '92',
            data: -3.88
          },
          {
            count: '77',
            data: -3.75
          },
          {
            count: '94',
            data: -3.63
          },
          {
            count: '78',
            data: -3.5
          },
          {
            count: '88',
            data: -3.38
          },
          {
            count: '81',
            data: -3.25
          },
          {
            count: '96',
            data: -3.13
          },
          {
            count: '86',
            data: -3
          },
          {
            count: '66',
            data: -2.88
          },
          {
            count: '89',
            data: -2.75
          },
          {
            count: '84',
            data: -2.63
          },
          {
            count: '102',
            data: -2.5
          },
          {
            count: '88',
            data: -2.38
          },
          {
            count: '75',
            data: -2.25
          },
          {
            count: '79',
            data: -2.13
          },
          {
            count: '82',
            data: -2
          },
          {
            count: '96',
            data: -1.88
          },
          {
            count: '85',
            data: -1.75
          },
          {
            count: '105',
            data: -1.63
          },
          {
            count: '99',
            data: -1.5
          },
          {
            count: '95',
            data: -1.38
          },
          {
            count: '105',
            data: -1.25
          },
          {
            count: '105',
            data: -1.13
          },
          {
            count: '74',
            data: -1
          },
          {
            count: '97',
            data: -0.88
          },
          {
            count: '81',
            data: -0.75
          },
          {
            count: '76',
            data: -0.63
          },
          {
            count: '96',
            data: -0.5
          },
          {
            count: '95',
            data: -0.38
          },
          {
            count: '86',
            data: -0.25
          },
          {
            count: '99',
            data: -0.13
          },
          {
            count: '81',
            data: 0
          },
          {
            count: '89',
            data: 0.13
          },
          {
            count: '79',
            data: 0.25
          },
          {
            count: '84',
            data: 0.38
          },
          {
            count: '74',
            data: 0.5
          },
          {
            count: '76',
            data: 0.63
          },
          {
            count: '93',
            data: 0.75
          },
          {
            count: '78',
            data: 0.88
          },
          {
            count: '91',
            data: 1
          },
          {
            count: '81',
            data: 1.13
          },
          {
            count: '88',
            data: 1.25
          },
          {
            count: '81',
            data: 1.38
          },
          {
            count: '88',
            data: 1.5
          },
          {
            count: '71',
            data: 1.63
          },
          {
            count: '85',
            data: 1.75
          },
          {
            count: '86',
            data: 1.88
          },
          {
            count: '82',
            data: 2
          },
          {
            count: '70',
            data: 2.13
          },
          {
            count: '61',
            data: 2.25
          },
          {
            count: '72',
            data: 2.38
          },
          {
            count: '78',
            data: 2.5
          },
          {
            count: '101',
            data: 2.63
          },
          {
            count: '90',
            data: 2.75
          },
          {
            count: '107',
            data: 2.88
          },
          {
            count: '101',
            data: 3
          },
          {
            count: '92',
            data: 3.13
          },
          {
            count: '80',
            data: 3.25
          },
          {
            count: '83',
            data: 3.38
          },
          {
            count: '81',
            data: 3.5
          },
          {
            count: '90',
            data: 3.63
          },
          {
            count: '86',
            data: 3.75
          },
          {
            count: '80',
            data: 3.88
          },
          {
            count: '76',
            data: 4
          },
          {
            count: '83',
            data: 4.13
          },
          {
            count: '86',
            data: 4.25
          },
          {
            count: '87',
            data: 4.38
          },
          {
            count: '89',
            data: 4.5
          },
          {
            count: '79',
            data: 4.63
          },
          {
            count: '87',
            data: 4.75
          },
          {
            count: '90',
            data: 4.88
          },
          {
            count: '82',
            data: 5
          },
          {
            count: '98',
            data: 5.13
          },
          {
            count: '86',
            data: 5.25
          },
          {
            count: '83',
            data: 5.38
          },
          {
            count: '102',
            data: 5.5
          },
          {
            count: '81',
            data: 5.63
          },
          {
            count: '80',
            data: 5.75
          },
          {
            count: '85',
            data: 5.88
          },
          {
            count: '94',
            data: 6
          },
          {
            count: '83',
            data: 6.13
          },
          {
            count: '71',
            data: 6.25
          },
          {
            count: '81',
            data: 6.38
          },
          {
            count: '80',
            data: 6.5
          },
          {
            count: '85',
            data: 6.63
          },
          {
            count: '87',
            data: 6.75
          },
          {
            count: '88',
            data: 6.88
          },
          {
            count: '93',
            data: 7
          },
          {
            count: '100',
            data: 7.13
          },
          {
            count: '89',
            data: 7.25
          },
          {
            count: '95',
            data: 7.38
          },
          {
            count: '81',
            data: 7.5
          },
          {
            count: '87',
            data: 7.63
          },
          {
            count: '79',
            data: 7.75
          },
          {
            count: '79',
            data: 7.88
          },
          {
            count: '85',
            data: 8
          },
          {
            count: '78',
            data: 8.13
          },
          {
            count: '94',
            data: 8.25
          },
          {
            count: '86',
            data: 8.38
          },
          {
            count: '81',
            data: 8.5
          },
          {
            count: '86',
            data: 8.63
          },
          {
            count: '100',
            data: 8.75
          },
          {
            count: '95',
            data: 8.88
          },
          {
            count: '90',
            data: 9
          },
          {
            count: '95',
            data: 9.13
          },
          {
            count: '91',
            data: 9.25
          },
          {
            count: '84',
            data: 9.38
          },
          {
            count: '92',
            data: 9.5
          },
          {
            count: '77',
            data: 9.63
          },
          {
            count: '111',
            data: 9.75
          },
          {
            count: '88',
            data: 9.88
          },
          {
            count: '70',
            data: 10
          },
          {
            count: '84',
            data: 10.13
          },
          {
            count: '93',
            data: 10.25
          },
          {
            count: '68',
            data: 10.38
          },
          {
            count: '92',
            data: 10.5
          },
          {
            count: '68',
            data: 10.63
          },
          {
            count: '82',
            data: 10.75
          },
          {
            count: '96',
            data: 10.88
          },
          {
            count: '71',
            data: 11
          },
          {
            count: '83',
            data: 11.13
          },
          {
            count: '91',
            data: 11.25
          },
          {
            count: '67',
            data: 11.38
          },
          {
            count: '68',
            data: 11.5
          },
          {
            count: '78',
            data: 11.63
          },
          {
            count: '61',
            data: 11.75
          },
          {
            count: '60',
            data: 11.88
          },
          {
            count: '84',
            data: 12
          },
          {
            count: '64',
            data: 12.13
          },
          {
            count: '66',
            data: 12.25
          },
          {
            count: '62',
            data: 12.38
          },
          {
            count: '69',
            data: 12.5
          },
          {
            count: '65',
            data: 12.63
          },
          {
            count: '49',
            data: 12.75
          },
          {
            count: '67',
            data: 12.88
          },
          {
            count: '56',
            data: 13
          },
          {
            count: '47',
            data: 13.13
          },
          {
            count: '60',
            data: 13.25
          },
          {
            count: '66',
            data: 13.38
          },
          {
            count: '60',
            data: 13.5
          },
          {
            count: '55',
            data: 13.63
          },
          {
            count: '57',
            data: 13.75
          },
          {
            count: '38',
            data: 13.88
          },
          {
            count: '49',
            data: 14
          },
          {
            count: '40',
            data: 14.13
          },
          {
            count: '58',
            data: 14.25
          },
          {
            count: '49',
            data: 14.38
          },
          {
            count: '46',
            data: 14.5
          },
          {
            count: '39',
            data: 14.63
          },
          {
            count: '47',
            data: 14.75
          },
          {
            count: '46',
            data: 14.88
          },
          {
            count: '42',
            data: 15
          },
          {
            count: '43',
            data: 15.13
          },
          {
            count: '40',
            data: 15.25
          },
          {
            count: '38',
            data: 15.38
          },
          {
            count: '42',
            data: 15.5
          },
          {
            count: '39',
            data: 15.63
          },
          {
            count: '33',
            data: 15.75
          },
          {
            count: '23',
            data: 15.88
          },
          {
            count: '34',
            data: 16
          },
          {
            count: '33',
            data: 16.13
          },
          {
            count: '31',
            data: 16.25
          },
          {
            count: '37',
            data: 16.38
          },
          {
            count: '28',
            data: 16.5
          },
          {
            count: '27',
            data: 16.63
          },
          {
            count: '23',
            data: 16.75
          },
          {
            count: '22',
            data: 16.88
          },
          {
            count: '32',
            data: 17
          },
          {
            count: '15',
            data: 17.13
          },
          {
            count: '27',
            data: 17.25
          },
          {
            count: '23',
            data: 17.38
          },
          {
            count: '22',
            data: 17.5
          },
          {
            count: '18',
            data: 17.63
          },
          {
            count: '14',
            data: 17.75
          },
          {
            count: '17',
            data: 17.88
          },
          {
            count: '22',
            data: 18
          },
          {
            count: '16',
            data: 18.13
          },
          {
            count: '10',
            data: 18.25
          },
          {
            count: '13',
            data: 18.38
          },
          {
            count: '12',
            data: 18.5
          },
          {
            count: '11',
            data: 18.63
          },
          {
            count: '5',
            data: 18.75
          },
          {
            count: '8',
            data: 18.88
          },
          {
            count: '9',
            data: 19
          },
          {
            count: '3',
            data: 19.13
          },
          {
            count: '9',
            data: 19.25
          },
          {
            count: '8',
            data: 19.38
          },
          {
            count: '4',
            data: 19.5
          },
          {
            count: '2',
            data: 19.75
          }
        ],
        name: '西安市'
      };
      return resultSuccess(data);
    }
  },
  {
    url: '/basic-api/eyesight/report/city/getMyopiaTypeInfo',
    timeout: 100,
    method: 'get',
    response: () => {
      let data = {
        astigmatismRate: 0,
        astigmatismStdCount: '0',
        city: '西安市',
        cityId: '610100',
        hyperopiaRate: 0.2948,
        hyperopiaStdCount: '4015',
        myopiaRate: 0.7999,
        myopiaStdCount: '10894',
        regionMyopiaInfoTypes: [
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2906,
            hyperopiaStdCount: '654',
            myopiaRate: 0.8017,
            myopiaStdCount: '1804',
            region: '雁塔区',
            regionId: '610113',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9351,
            totalStdCount: '2104'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2953,
            hyperopiaStdCount: '443',
            myopiaRate: 0.7993,
            myopiaStdCount: '1199',
            region: '莲湖区',
            regionId: '610104',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9313,
            totalStdCount: '1397'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.3474,
            hyperopiaStdCount: '41',
            myopiaRate: 0.7711,
            myopiaStdCount: '91',
            region: '长安区',
            regionId: '610116',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.8983,
            totalStdCount: '106'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2653,
            hyperopiaStdCount: '199',
            myopiaRate: 0.8293,
            myopiaStdCount: '622',
            region: '临潼区',
            regionId: '610115',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.94,
            totalStdCount: '705'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2981,
            hyperopiaStdCount: '2236',
            myopiaRate: 0.796,
            myopiaStdCount: '5970',
            region: '新城区',
            regionId: '610102',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9316,
            totalStdCount: '6987'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2946,
            hyperopiaStdCount: '442',
            myopiaRate: 0.8053,
            myopiaStdCount: '1208',
            region: '未央区',
            regionId: '610112',
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9406,
            totalStdCount: '1411'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2948,
            hyperopiaStdCount: '4015',
            myopiaRate: 0.7999,
            myopiaStdCount: '10894',
            region: '合计',
            regionId: null,
            schoolPrefixMyopiaInfoTypes: null,
            totalRate: 0.9333,
            totalStdCount: '12710'
          }
        ],
        schoolPrefixMyopiaInfoTypes: [
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2968,
            hyperopiaStdCount: '3597',
            myopiaRate: 0.7978,
            myopiaStdCount: '9668',
            prefix: 2,
            prefixName: '小学',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            totalRate: 0.9326,
            totalStdCount: '11302'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2786,
            hyperopiaStdCount: '418',
            myopiaRate: 0.8173,
            myopiaStdCount: '1226',
            prefix: 3,
            prefixName: '初中',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            totalRate: 0.9386,
            totalStdCount: '1408'
          },
          {
            astigmatismRate: 0,
            astigmatismStdCount: '0',
            hyperopiaRate: 0.2948,
            hyperopiaStdCount: '4015',
            myopiaRate: 0.7999,
            myopiaStdCount: '10894',
            prefix: null,
            prefixName: '合计',
            schoolId: null,
            schoolName: null,
            studyYear: null,
            totalRate: 0.9333,
            totalStdCount: '12710'
          }
        ],
        totalRate: 0.9333,
        totalStdCount: '12710'
      };
      return resultSuccess(data);
    }
  }
];
