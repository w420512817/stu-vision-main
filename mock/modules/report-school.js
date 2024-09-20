import { resultSuccess } from '../utils';

export default [
  {
    url: '/basic-api/org/schoolUser/schoolTypesGradeClassTree',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess([
        {
          children: [
            {
              children: [
                {
                  id: '1282974992858880',
                  name: '一班'
                },
                {
                  id: '1282974992867072',
                  name: '二班'
                },
                {
                  id: '1282974992875264',
                  name: '三班'
                },
                {
                  id: '1282974992875265',
                  name: '四班'
                },
                {
                  id: '1282974992883456',
                  name: '五班'
                }
              ],
              id: '921830381248271',
              name: '一年级'
            },
            {
              children: [
                {
                  id: '1282974992883457',
                  name: '一班'
                },
                {
                  id: '1282974992891648',
                  name: '二班'
                },
                {
                  id: '1282974992899840',
                  name: '三班'
                },
                {
                  id: '1282974992899841',
                  name: '四班'
                },
                {
                  id: '1282974992899842',
                  name: '五班'
                }
              ],
              id: '921830381248272',
              name: '二年级'
            },
            {
              children: [
                {
                  id: '1282974992908032',
                  name: '一班'
                },
                {
                  id: '1282974992908033',
                  name: '二班'
                },
                {
                  id: '1282974992916224',
                  name: '三班'
                },
                {
                  id: '1282974992916225',
                  name: '四班'
                },
                {
                  id: '1282974992924416',
                  name: '五班'
                }
              ],
              id: '921830381248273',
              name: '三年级'
            },
            {
              children: [
                {
                  id: '1282974992932608',
                  name: '一班'
                },
                {
                  id: '1282974992932609',
                  name: '二班'
                },
                {
                  id: '1282974992940800',
                  name: '三班'
                },
                {
                  id: '1282974992940801',
                  name: '四班'
                },
                {
                  id: '1282974992948992',
                  name: '五班'
                }
              ],
              id: '921830381248274',
              name: '四年级'
            },
            {
              children: [
                {
                  id: '1282974992948993',
                  name: '一班'
                },
                {
                  id: '1282974992957184',
                  name: '二班'
                },
                {
                  id: '1282974992957185',
                  name: '三班'
                },
                {
                  id: '1282974992957186',
                  name: '四班'
                },
                {
                  id: '1282974992965376',
                  name: '五班'
                }
              ],
              id: '921830381248275',
              name: '五年级'
            },
            {
              children: [
                {
                  id: '1282974992973568',
                  name: '一班'
                },
                {
                  id: '1282974992973569',
                  name: '二班'
                },
                {
                  id: '1282974992973570',
                  name: '三班'
                },
                {
                  id: '1282974992981760',
                  name: '四班'
                },
                {
                  id: '1282974992981761',
                  name: '五班'
                }
              ],
              id: '921830381248276',
              name: '六年级'
            }
          ],
          id: '2',
          name: '小学'
        }
      ])
  },
  {
    url: '/basic-api/base-screen/plan/school/getPlanList',
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
          planName: '陕西省视力筛查计划',
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
    url: '/basic-api/eyesight/report/class/getClassPoorVision',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        astigmiaStdCount: '0',
        astigmiaStdRate: 0,
        classId: '1282974992858880',
        className: '1',
        gradeId: '921830381248271',
        gradeName: '一年级',
        hyperopiaStdCount: '44',
        hyperopiaStdRate: 0.2933,
        myopiaRate: 0.7866,
        myopiaStdCount: '118',
        poorVisionCount: '119',
        poorVisionRate: 0.9754,
        schoolId: '1280739653607168',
        schoolName: '西安实验小学',
        studentPoorVisionInfoList: [
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿48'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿17'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿34'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿34'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿17'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿27'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿42'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿19'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿11'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿37'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿46'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿32'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿46'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿41'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿41'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿16'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿20'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿0'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿8'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿15'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿13'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿13'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿15'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿35'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿49'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿42'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿44'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿40'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿32'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿33'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '0',
            studentName: '1阿27'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿45'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿36'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿49'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿18'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿26'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿5'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿18'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿25'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿2'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿10'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '0',
            studentName: '1阿10'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿39'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿0'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿43'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿7'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿22'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿9'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿35'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿3'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿14'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿6'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿12'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿29'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿4'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿48'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿1'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿8'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿19'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿27'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿37'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿31'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿45'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿32'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿45'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿31'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿41'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿16'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿19'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿20'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿28'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿35'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿42'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿48'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿20'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿28'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿38'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿40'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿44'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿6'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿30'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿4'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿12'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿33'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿46'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿47'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿40'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿36'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿47'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿38'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿13'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿7'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿26'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿18'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿6'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿23'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿3'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿21'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿1'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿4'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿9'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿25'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿24'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿36'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿1'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿39'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿24'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿8'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿11'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿22'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿21'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿12'
          },
          {
            astigmiaStatus: null,
            hyperopiaStatus: null,
            myopiaStatus: '1',
            poorVisionStatus: null,
            studentName: '1阿5'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿29'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '0',
            poorVisionStatus: '0',
            studentName: '1阿38'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '0',
            myopiaStatus: '1',
            poorVisionStatus: '1',
            studentName: '1阿2'
          },
          {
            astigmiaStatus: '0',
            hyperopiaStatus: '1',
            myopiaStatus: '0',
            poorVisionStatus: '1',
            studentName: '1阿22'
          }
        ]
      })
  },
  {
    url: '/basic-api/eyesight/report/class/getOverallMyopiaInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        classId: '1282974992858880',
        className: '1',
        effectiveStdCount: '102',
        gradeName: '一年级',
        highMyopiaRate: 0.598,
        highMyopiaStdCount: '61',
        manEffectiveStdCount: '63',
        manHighMyopiaRate: 0.5396,
        manHighMyopiaStdCount: '34',
        manMyopiaRate: 0.746,
        manMyopiaStdCount: '47',
        manStdCount: '63',
        myopiaRate: 0.7745,
        myopiaStdCount: '79',
        noMyopiaRate: 0.2254,
        noMyopiaStdCount: '23',
        prefixName: '小学',
        schoolName: '西安实验小学',
        sexMyopiaTypeInfo: [
          {
            manMyopiaRate: 0.746,
            manMyopiaStdCount: '47',
            myopiaRate: 0.7745,
            myopiaStdCount: '79',
            myopiaType: 0,
            womanMyopiaRate: 0.8205,
            womanMyopiaStdCount: '32'
          },
          {
            manMyopiaRate: 0.1111,
            manMyopiaStdCount: '7',
            myopiaRate: 0.0882,
            myopiaStdCount: '9',
            myopiaType: 1,
            womanMyopiaRate: 0.0512,
            womanMyopiaStdCount: '2'
          },
          {
            manMyopiaRate: 0.0952,
            manMyopiaStdCount: '6',
            myopiaRate: 0.0882,
            myopiaStdCount: '9',
            myopiaType: 2,
            womanMyopiaRate: 0.0769,
            womanMyopiaStdCount: '3'
          },
          {
            manMyopiaRate: 0.5396,
            manMyopiaStdCount: '34',
            myopiaRate: 0.598,
            myopiaStdCount: '61',
            myopiaType: 3,
            womanMyopiaRate: 0.6923,
            womanMyopiaStdCount: '27'
          },
          {
            manMyopiaRate: 0.2539,
            manMyopiaStdCount: '16',
            myopiaRate: 0.2254,
            myopiaStdCount: '23',
            myopiaType: 4,
            womanMyopiaRate: 0.1794,
            womanMyopiaStdCount: '7'
          }
        ],
        stdCount: '102',
        studentMyopiaInfos: [
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿24'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿8'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿21'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿44'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿0'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿21'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿24'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿44'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿1'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿2'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿39'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿2'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿30'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿36'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿25'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿5'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿3'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿46'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿46'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿14'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿7'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿18'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿4'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿33'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿12'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿26'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿31'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿31'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿34'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿34'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿10'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿10'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿35'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿9'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿4'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿37'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿45'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿47'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿27'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿9'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿13'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿13'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿28'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿28'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿43'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿49'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿43'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿49'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿20'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿15'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿15'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿48'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿29'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿29'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿19'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿16'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿32'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿41'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿38'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿40'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿38'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿40'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿17'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿17'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿42'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿8'
          },
          {
            isHighMyopia: false,
            isLowMyopia: true,
            isMediumMyopia: false,
            studentName: '1阿23'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿23'
          },
          {
            isHighMyopia: false,
            isLowMyopia: false,
            isMediumMyopia: true,
            studentName: '1阿0'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿6'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿22'
          },
          {
            isHighMyopia: true,
            isLowMyopia: false,
            isMediumMyopia: false,
            studentName: '1阿11'
          }
        ],
        studyYear: '2022',
        womanEffectiveStdCount: '39',
        womanHighMyopiaRate: 0.6923,
        womanHighMyopiaStdCount: '27',
        womanMyopiaRate: 0.8205,
        womanMyopiaStdCount: '32',
        womanStdCount: '39'
      })
  },
  {
    url: '/basic-api/eyesight/report/class/getMyopiaCorrectInfo',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        classId: '1282974992858880',
        className: '1',
        contactLensStdCount: '33',
        correctMyopiaRate: 0.0593,
        correctMyopiaStdCount: '7',
        frameGlassesStdCount: '28',
        gradeId: '921830381248271',
        gradeName: '一年级',
        manCorrectMyopiaRate: 0.0638,
        manCorrectMyopiaStdCount: '3',
        manMyopiaStdCount: '47',
        manUdMyopiaRate: 0.6382,
        manUdMyopiaStdCount: '30',
        manUnMyopiaRate: 0.2978,
        manUnMyopiaStdCount: '14',
        myopiaStdCount: '118',
        okLensStdCount: '28',
        otherRate: 0,
        prefix: 2,
        prefixName: '小学',
        schoolId: '1280739653607168',
        schoolName: '西安实验小学',
        studentMyopiaCorrectInfos: [
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿8'
          },
          {
            isCorrectMyopia: true,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿9'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿2'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿10'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿33'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿41'
          },
          {
            isCorrectMyopia: true,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿31'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿16'
          },
          {
            isCorrectMyopia: true,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿5'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿49'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿33'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿41'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿3'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿10'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿10'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿29'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿16'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿38'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿23'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿32'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿35'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿9'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿20'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿27'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿29'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿39'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿12'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿4'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿6'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿28'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿22'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿46'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿22'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿21'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿5'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿30'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿0'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿35'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿20'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿27'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿29'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿39'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿12'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿1'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿21'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿18'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿15'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿19'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿26'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿8'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿31'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿7'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿36'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿19'
          },
          {
            isCorrectMyopia: true,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿6'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿32'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿2'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿49'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿34'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿0'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿44'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿13'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿15'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿44'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿32'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿26'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿44'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿14'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿34'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿19'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿36'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿18'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿26'
          },
          {
            isCorrectMyopia: true,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿28'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿25'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿4'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿4'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿42'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿11'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿14'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿47'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿17'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿48'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿38'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿37'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿30'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿13'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿40'
          },
          {
            isCorrectMyopia: true,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿0'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿24'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿39'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿40'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿37'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿3'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿43'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿1'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿38'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: true,
            isUnMyopia: false,
            studentName: '1阿17'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿25'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: true,
            studentName: '1阿45'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿48'
          },
          {
            isCorrectMyopia: false,
            isUdMyopiaS: false,
            isUnMyopia: false,
            studentName: '1阿42'
          }
        ],
        studyYear: '2022',
        udMyopiaRate: 0.6949,
        udMyopiaStdCount: '82',
        unMyopiaRate: 0.2457,
        unMyopiaStdCount: '29',
        womanCorrectMyopiaRate: 0.0312,
        womanCorrectMyopiaStdCount: '1',
        womanMyopiaStdCount: '32',
        womanUdMyopiaRate: 0.8437,
        womanUdMyopiaStdCount: '27',
        womanUnMyopiaRate: 0.125,
        womanUnMyopiaStdCount: '4'
      })
  },
  {
    url: '/basic-api/eyesight/report/class/getVisionDistribute',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        dataList: [
          {
            rate: 0.0369,
            vision: '5.3',
            visionNum: 9
          },
          {
            rate: 0.0451,
            vision: '5.2',
            visionNum: 11
          },
          {
            rate: 0.0779,
            vision: '5.1',
            visionNum: 19
          },
          {
            rate: 0.0369,
            vision: '5.0',
            visionNum: 9
          },
          {
            rate: 0.0779,
            vision: '4.9',
            visionNum: 19
          },
          {
            rate: 0.0533,
            vision: '4.8',
            visionNum: 13
          },
          {
            rate: 0.0369,
            vision: '4.7',
            visionNum: 9
          },
          {
            rate: 0.0246,
            vision: '4.6',
            visionNum: 6
          },
          {
            rate: 0.0656,
            vision: '4.5',
            visionNum: 16
          },
          {
            rate: 0.041,
            vision: '4.4',
            visionNum: 10
          },
          {
            rate: 0.0369,
            vision: '4.3',
            visionNum: 9
          },
          {
            rate: 0.0369,
            vision: '4.2',
            visionNum: 9
          },
          {
            rate: 0.0328,
            vision: '4.1',
            visionNum: 8
          },
          {
            rate: 0.041,
            vision: '4.0',
            visionNum: 10
          },
          {
            rate: 0.0574,
            vision: '3.9',
            visionNum: 14
          },
          {
            rate: 0.0492,
            vision: '3.8',
            visionNum: 12
          },
          {
            rate: 0.0492,
            vision: '3.7',
            visionNum: 12
          },
          {
            rate: 0.0328,
            vision: '3.6',
            visionNum: 8
          },
          {
            rate: 0.0615,
            vision: '3.5',
            visionNum: 15
          },
          {
            rate: 0.0369,
            vision: '3.4',
            visionNum: 9
          },
          {
            rate: 0.0369,
            vision: '3.3',
            visionNum: 9
          }
        ],
        name: null,
        tableList: [
          {
            odVision: '3.5',
            osVision: '4.1',
            studentName: '1阿0'
          },
          {
            odVision: '4.9',
            osVision: '4.9',
            studentName: '1阿1'
          },
          {
            odVision: '3.4',
            osVision: '3.3',
            studentName: '1阿2'
          },
          {
            odVision: '4.1',
            osVision: '3.8',
            studentName: '1阿3'
          },
          {
            odVision: '4.0',
            osVision: '4.0',
            studentName: '1阿4'
          },
          {
            odVision: '4.0',
            osVision: '3.3',
            studentName: '1阿5'
          },
          {
            odVision: '5.0',
            osVision: '4.3',
            studentName: '1阿6'
          },
          {
            odVision: '3.4',
            osVision: '3.5',
            studentName: '1阿7'
          },
          {
            odVision: '4.9',
            osVision: '3.5',
            studentName: '1阿8'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿9'
          },
          {
            odVision: '4.4',
            osVision: '4.8',
            studentName: '1阿10'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿11'
          },
          {
            odVision: '4.4',
            osVision: '4.6',
            studentName: '1阿12'
          },
          {
            odVision: '4.7',
            osVision: '3.4',
            studentName: '1阿13'
          },
          {
            odVision: '3.9',
            osVision: '3.9',
            studentName: '1阿14'
          },
          {
            odVision: '5.4',
            osVision: '4.3',
            studentName: '1阿15'
          },
          {
            odVision: '3.4',
            osVision: '4.5',
            studentName: '1阿16'
          },
          {
            odVision: '4.8',
            osVision: '3.8',
            studentName: '1阿17'
          },
          {
            odVision: '5.2',
            osVision: '3.7',
            studentName: '1阿18'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿19'
          },
          {
            odVision: '4.9',
            osVision: '3.5',
            studentName: '1阿20'
          },
          {
            odVision: '4.9',
            osVision: '3.3',
            studentName: '1阿21'
          },
          {
            odVision: '3.7',
            osVision: '5.0',
            studentName: '1阿22'
          },
          {
            odVision: '5.1',
            osVision: '3.5',
            studentName: '1阿23'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿24'
          },
          {
            odVision: '5.4',
            osVision: '3.5',
            studentName: '1阿25'
          },
          {
            odVision: '5.4',
            osVision: '3.8',
            studentName: '1阿26'
          },
          {
            odVision: '4.2',
            osVision: '5.2',
            studentName: '1阿27'
          },
          {
            odVision: '4.8',
            osVision: '3.9',
            studentName: '1阿28'
          },
          {
            odVision: '5.3',
            osVision: '4.5',
            studentName: '1阿29'
          },
          {
            odVision: '5.4',
            osVision: '3.9',
            studentName: '1阿30'
          },
          {
            odVision: '4.7',
            osVision: '4.1',
            studentName: '1阿31'
          },
          {
            odVision: '5.3',
            osVision: '3.6',
            studentName: '1阿32'
          },
          {
            odVision: '4.3',
            osVision: '4.3',
            studentName: '1阿33'
          },
          {
            odVision: '4.7',
            osVision: '4.3',
            studentName: '1阿34'
          },
          {
            odVision: '3.9',
            osVision: '4.8',
            studentName: '1阿35'
          },
          {
            odVision: '4.2',
            osVision: '4.4',
            studentName: '1阿36'
          },
          {
            odVision: '4.8',
            osVision: '5.1',
            studentName: '1阿37'
          },
          {
            odVision: '4.3',
            osVision: '4.5',
            studentName: '1阿38'
          },
          {
            odVision: '5.0',
            osVision: '4.5',
            studentName: '1阿39'
          },
          {
            odVision: '3.3',
            osVision: '4.2',
            studentName: '1阿40'
          },
          {
            odVision: '3.6',
            osVision: '5.2',
            studentName: '1阿41'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿42'
          },
          {
            odVision: '5.4',
            osVision: '3.5',
            studentName: '1阿43'
          },
          {
            odVision: '3.6',
            osVision: '4.5',
            studentName: '1阿44'
          },
          {
            odVision: '5.1',
            osVision: '3.9',
            studentName: '1阿45'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿46'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿47'
          },
          {
            odVision: '5.4',
            osVision: '4.7',
            studentName: '1阿48'
          },
          {
            odVision: '3.6',
            osVision: '5.1',
            studentName: '1阿49'
          },
          {
            odVision: '3.4',
            osVision: '3.5',
            studentName: '1阿0'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿1'
          },
          {
            odVision: '5.1',
            osVision: '4.7',
            studentName: '1阿2'
          },
          {
            odVision: '4.1',
            osVision: '3.7',
            studentName: '1阿3'
          },
          {
            odVision: '4.1',
            osVision: '3.9',
            studentName: '1阿4'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿5'
          },
          {
            odVision: '5.1',
            osVision: '4.5',
            studentName: '1阿6'
          },
          {
            odVision: '4.8',
            osVision: '5.3',
            studentName: '1阿7'
          },
          {
            odVision: '3.8',
            osVision: '4.4',
            studentName: '1阿8'
          },
          {
            odVision: '4.9',
            osVision: '5.1',
            studentName: '1阿9'
          },
          {
            odVision: '3.3',
            osVision: '4.1',
            studentName: '1阿10'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿11'
          },
          {
            odVision: '3.7',
            osVision: '4.8',
            studentName: '1阿12'
          },
          {
            odVision: '3.7',
            osVision: '4.7',
            studentName: '1阿13'
          },
          {
            odVision: '5.1',
            osVision: '4.9',
            studentName: '1阿14'
          },
          {
            odVision: '4.0',
            osVision: '3.7',
            studentName: '1阿15'
          },
          {
            odVision: '4.2',
            osVision: '5.0',
            studentName: '1阿16'
          },
          {
            odVision: '4.9',
            osVision: '4.2',
            studentName: '1阿17'
          },
          {
            odVision: '4.8',
            osVision: '3.8',
            studentName: '1阿18'
          },
          {
            odVision: '4.5',
            osVision: '4.8',
            studentName: '1阿19'
          },
          {
            odVision: '4.5',
            osVision: '3.8',
            studentName: '1阿20'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿21'
          },
          {
            odVision: '5.1',
            osVision: '4.3',
            studentName: '1阿22'
          },
          {
            odVision: '5.2',
            osVision: '4.2',
            studentName: '1阿23'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿24'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿25'
          },
          {
            odVision: '3.9',
            osVision: '4.9',
            studentName: '1阿26'
          },
          {
            odVision: '5.1',
            osVision: '3.4',
            studentName: '1阿27'
          },
          {
            odVision: '3.8',
            osVision: '4.8',
            studentName: '1阿28'
          },
          {
            odVision: '4.9',
            osVision: '3.5',
            studentName: '1阿29'
          },
          {
            odVision: '3.7',
            osVision: '5.0',
            studentName: '1阿30'
          },
          {
            odVision: '4.9',
            osVision: '5.1',
            studentName: '1阿31'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿32'
          },
          {
            odVision: '4.6',
            osVision: '5.2',
            studentName: '1阿33'
          },
          {
            odVision: '4.9',
            osVision: '5.3',
            studentName: '1阿34'
          },
          {
            odVision: '4.8',
            osVision: '4.9',
            studentName: '1阿35'
          },
          {
            odVision: '4.7',
            osVision: '4.3',
            studentName: '1阿36'
          },
          {
            odVision: '3.7',
            osVision: '4.9',
            studentName: '1阿37'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿38'
          },
          {
            odVision: '4.2',
            osVision: '3.7',
            studentName: '1阿39'
          },
          {
            odVision: '4.9',
            osVision: '3.9',
            studentName: '1阿40'
          },
          {
            odVision: '5.1',
            osVision: '4.2',
            studentName: '1阿41'
          },
          {
            odVision: '4.7',
            osVision: '3.3',
            studentName: '1阿42'
          },
          {
            odVision: '4.3',
            osVision: '4.1',
            studentName: '1阿43'
          },
          {
            odVision: '4.4',
            osVision: '4.9',
            studentName: '1阿44'
          },
          {
            odVision: '4.0',
            osVision: '4.5',
            studentName: '1阿45'
          },
          {
            odVision: '3.7',
            osVision: '4.0',
            studentName: '1阿46'
          },
          {
            odVision: '3.6',
            osVision: '4.4',
            studentName: '1阿47'
          },
          {
            odVision: '3.8',
            osVision: '4.5',
            studentName: '1阿48'
          },
          {
            odVision: '4.9',
            osVision: '3.5',
            studentName: '1阿49'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿0'
          },
          {
            odVision: '3.4',
            osVision: '3.8',
            studentName: '1阿1'
          },
          {
            odVision: '3.9',
            osVision: '4.4',
            studentName: '1阿2'
          },
          {
            odVision: '3.9',
            osVision: '5.3',
            studentName: '1阿3'
          },
          {
            odVision: '5.1',
            osVision: '3.6',
            studentName: '1阿4'
          },
          {
            odVision: '5.3',
            osVision: '4.0',
            studentName: '1阿5'
          },
          {
            odVision: '3.8',
            osVision: '4.0',
            studentName: '1阿6'
          },
          {
            odVision: '4.5',
            osVision: '4.5',
            studentName: '1阿7'
          },
          {
            odVision: '3.8',
            osVision: '3.4',
            studentName: '1阿8'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿9'
          },
          {
            odVision: '5.1',
            osVision: '5.0',
            studentName: '1阿10'
          },
          {
            odVision: '4.9',
            osVision: '3.7',
            studentName: '1阿11'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿12'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿13'
          },
          {
            odVision: '4.6',
            osVision: '3.3',
            studentName: '1阿14'
          },
          {
            odVision: '3.3',
            osVision: '4.6',
            studentName: '1阿15'
          },
          {
            odVision: '4.6',
            osVision: '5.2',
            studentName: '1阿16'
          },
          {
            odVision: '5.3',
            osVision: '3.6',
            studentName: '1阿17'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿18'
          },
          {
            odVision: '3.8',
            osVision: '4.4',
            studentName: '1阿19'
          },
          {
            odVision: '5.4',
            osVision: '3.9',
            studentName: '1阿20'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿21'
          },
          {
            odVision: '4.0',
            osVision: '4.5',
            studentName: '1阿22'
          },
          {
            odVision: '5.1',
            osVision: '3.5',
            studentName: '1阿23'
          },
          {
            odVision: '3.7',
            osVision: '4.4',
            studentName: '1阿24'
          },
          {
            odVision: '5.3',
            osVision: '3.4',
            studentName: '1阿25'
          },
          {
            odVision: '3.9',
            osVision: '4.8',
            studentName: '1阿26'
          },
          {
            odVision: '5.2',
            osVision: '5.0',
            studentName: '1阿27'
          },
          {
            odVision: '5.0',
            osVision: '3.9',
            studentName: '1阿28'
          },
          {
            odVision: '4.5',
            osVision: '5.2',
            studentName: '1阿29'
          },
          {
            odVision: '4.6',
            osVision: '5.2',
            studentName: '1阿30'
          },
          {
            odVision: '3.6',
            osVision: '5.3',
            studentName: '1阿31'
          },
          {
            odVision: '4.0',
            osVision: '5.2',
            studentName: '1阿32'
          },
          {
            odVision: '5.0',
            osVision: '4.8',
            studentName: '1阿33'
          },
          {
            odVision: '4.1',
            osVision: '4.7',
            studentName: '1阿34'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿35'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿36'
          },
          {
            odVision: '4.5',
            osVision: '5.1',
            studentName: '1阿37'
          },
          {
            odVision: '5.2',
            osVision: '5.1',
            studentName: '1阿38'
          },
          {
            odVision: '5.1',
            osVision: '3.5',
            studentName: '1阿39'
          },
          {
            odVision: '4.2',
            osVision: '4.4',
            studentName: '1阿40'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿41'
          },
          {
            odVision: '5.4',
            osVision: '3.5',
            studentName: '1阿42'
          },
          {
            odVision: '4.5',
            osVision: '3.5',
            studentName: '1阿43'
          },
          {
            odVision: '3.5',
            osVision: '5.1',
            studentName: '1阿44'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿45'
          },
          {
            odVision: '4.9',
            osVision: '3.3',
            studentName: '1阿46'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿47'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿48'
          },
          {
            odVision: null,
            osVision: null,
            studentName: '1阿49'
          }
        ]
      })
  },
  {
    url: '/basic-api/eyesight/report/class/getDiopterSituation',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        dataList: [
          {
            dpOdSph: '-9.25',
            dpOsSph: '-15.0',
            odEqSph: '-18',
            osEqSph: '-20.13',
            studentName: '1阿0'
          },
          {
            dpOdSph: '-10.75',
            dpOsSph: '19.75',
            odEqSph: '-20.63',
            osEqSph: '18.25',
            studentName: '1阿1'
          },
          {
            dpOdSph: '0.75',
            dpOsSph: '13.25',
            odEqSph: '-1.5',
            osEqSph: '6.13',
            studentName: '1阿2'
          },
          {
            dpOdSph: '-5.75',
            dpOsSph: '19.75',
            odEqSph: '-6.25',
            osEqSph: '10.13',
            studentName: '1阿3'
          },
          {
            dpOdSph: '-7.0',
            dpOsSph: '-9.75',
            odEqSph: '-8.88',
            osEqSph: '-19',
            studentName: '1阿4'
          },
          {
            dpOdSph: '-12.75',
            dpOsSph: '4.25',
            odEqSph: '-20.38',
            osEqSph: '-4.75',
            studentName: '1阿5'
          },
          {
            dpOdSph: '-5.0',
            dpOsSph: '14.75',
            odEqSph: '-10.75',
            osEqSph: '14.75',
            studentName: '1阿6'
          },
          {
            dpOdSph: '-16.0',
            dpOsSph: '17.25',
            odEqSph: '-25.13',
            osEqSph: '9.13',
            studentName: '1阿7'
          },
          {
            dpOdSph: '13.0',
            dpOsSph: '6.5',
            odEqSph: '4.75',
            osEqSph: '-0.88',
            studentName: '1阿8'
          },
          {
            dpOdSph: '10.5',
            dpOsSph: '-11.75',
            odEqSph: '7.25',
            osEqSph: '-17.88',
            studentName: '1阿9'
          },
          {
            dpOdSph: '0.5',
            dpOsSph: '19.75',
            odEqSph: '-4.25',
            osEqSph: '13',
            studentName: '1阿10'
          },
          {
            dpOdSph: '19.0',
            dpOsSph: '-10.0',
            odEqSph: '18.38',
            osEqSph: '-10.13',
            studentName: '1阿11'
          },
          {
            dpOdSph: '-19.0',
            dpOsSph: '-5.0',
            odEqSph: '-21.13',
            osEqSph: '-7.5',
            studentName: '1阿12'
          },
          {
            dpOdSph: '4.5',
            dpOsSph: '10.25',
            odEqSph: '-1.25',
            osEqSph: '5.5',
            studentName: '1阿13'
          },
          {
            dpOdSph: '3.0',
            dpOsSph: '-15.75',
            odEqSph: '-4',
            osEqSph: '-20.63',
            studentName: '1阿14'
          },
          {
            dpOdSph: '-12.5',
            dpOsSph: '-2.0',
            odEqSph: '-13',
            osEqSph: '-6',
            studentName: '1阿15'
          },
          {
            dpOdSph: '7.0',
            dpOsSph: '-6.25',
            odEqSph: '2.5',
            osEqSph: '-16',
            studentName: '1阿16'
          },
          {
            dpOdSph: '-1.25',
            dpOsSph: '7.25',
            odEqSph: '-7.38',
            osEqSph: '5.38',
            studentName: '1阿17'
          },
          {
            dpOdSph: '0.5',
            dpOsSph: '1.25',
            odEqSph: '-3.25',
            osEqSph: '-0.13',
            studentName: '1阿18'
          },
          {
            dpOdSph: '-11.25',
            dpOsSph: '3.0',
            odEqSph: '-16.38',
            osEqSph: '2.63',
            studentName: '1阿19'
          },
          {
            dpOdSph: '-6.25',
            dpOsSph: '-6.5',
            odEqSph: '-10.88',
            osEqSph: '-7.88',
            studentName: '1阿20'
          },
          {
            dpOdSph: '-1.25',
            dpOsSph: '19.5',
            odEqSph: '-3',
            osEqSph: '16.88',
            studentName: '1阿21'
          },
          {
            dpOdSph: '3.25',
            dpOsSph: '-6.25',
            odEqSph: '1.38',
            osEqSph: '-6.88',
            studentName: '1阿22'
          },
          {
            dpOdSph: '-14.5',
            dpOsSph: '6.75',
            odEqSph: '-23.25',
            osEqSph: '-2.25',
            studentName: '1阿23'
          },
          {
            dpOdSph: '-1.75',
            dpOsSph: '-14.0',
            odEqSph: '-6.88',
            osEqSph: '-19.63',
            studentName: '1阿24'
          },
          {
            dpOdSph: '11.0',
            dpOsSph: '6.25',
            odEqSph: '6.38',
            osEqSph: '5.25',
            studentName: '1阿25'
          },
          {
            dpOdSph: '19.25',
            dpOsSph: '8.25',
            odEqSph: '15.88',
            osEqSph: '4.13',
            studentName: '1阿26'
          },
          {
            dpOdSph: '12.0',
            dpOsSph: '-19.5',
            odEqSph: '5.5',
            osEqSph: '-23.5',
            studentName: '1阿27'
          },
          {
            dpOdSph: '-11.75',
            dpOsSph: '-9.0',
            odEqSph: '-20.5',
            osEqSph: '-13',
            studentName: '1阿28'
          },
          {
            dpOdSph: '0.0',
            dpOsSph: '13.0',
            odEqSph: '-8.38',
            osEqSph: '9.63',
            studentName: '1阿29'
          },
          {
            dpOdSph: '-4.25',
            dpOsSph: '-12.75',
            odEqSph: '-5.88',
            osEqSph: '-18',
            studentName: '1阿30'
          },
          {
            dpOdSph: '-4.5',
            dpOsSph: '18.25',
            odEqSph: '-11',
            osEqSph: '9.38',
            studentName: '1阿31'
          },
          {
            dpOdSph: '-11.25',
            dpOsSph: '-12.0',
            odEqSph: '-13.63',
            osEqSph: '-12.63',
            studentName: '1阿32'
          },
          {
            dpOdSph: '3.0',
            dpOsSph: '11.75',
            odEqSph: '-0.63',
            osEqSph: '2.88',
            studentName: '1阿33'
          },
          {
            dpOdSph: '1.5',
            dpOsSph: '14.0',
            odEqSph: '-7.38',
            osEqSph: '12.75',
            studentName: '1阿34'
          },
          {
            dpOdSph: '-0.25',
            dpOsSph: '7.0',
            odEqSph: '-7',
            osEqSph: '0.25',
            studentName: '1阿35'
          },
          {
            dpOdSph: '-8.75',
            dpOsSph: '1.75',
            odEqSph: '-9',
            osEqSph: '-0.63',
            studentName: '1阿36'
          },
          {
            dpOdSph: '1.0',
            dpOsSph: '-9.75',
            odEqSph: '-7.25',
            osEqSph: '-13.63',
            studentName: '1阿37'
          },
          {
            dpOdSph: '-1.75',
            dpOsSph: '4.0',
            odEqSph: '-2.25',
            osEqSph: '1.38',
            studentName: '1阿38'
          },
          {
            dpOdSph: '-17.0',
            dpOsSph: '18.5',
            odEqSph: '-22',
            osEqSph: '11.63',
            studentName: '1阿39'
          },
          {
            dpOdSph: '7.0',
            dpOsSph: '3.25',
            odEqSph: '-2.25',
            osEqSph: '0.13',
            studentName: '1阿40'
          },
          {
            dpOdSph: '-11.5',
            dpOsSph: '5.5',
            odEqSph: '-15',
            osEqSph: '-3.13',
            studentName: '1阿41'
          },
          {
            dpOdSph: '6.5',
            dpOsSph: '12.25',
            odEqSph: '4.75',
            osEqSph: '7.25',
            studentName: '1阿42'
          },
          {
            dpOdSph: '-9.5',
            dpOsSph: '-18.0',
            odEqSph: '-17.5',
            osEqSph: '-26.5',
            studentName: '1阿43'
          },
          {
            dpOdSph: '16.25',
            dpOsSph: '9.0',
            odEqSph: '10.75',
            osEqSph: '7',
            studentName: '1阿44'
          },
          {
            dpOdSph: '5.75',
            dpOsSph: '-13.5',
            odEqSph: '0.38',
            osEqSph: '-16.25',
            studentName: '1阿45'
          },
          {
            dpOdSph: '10.25',
            dpOsSph: '-11.25',
            odEqSph: '1',
            osEqSph: '-20.63',
            studentName: '1阿46'
          },
          {
            dpOdSph: '-11.75',
            dpOsSph: '11.0',
            odEqSph: '-16.38',
            osEqSph: '3.75',
            studentName: '1阿47'
          },
          {
            dpOdSph: '5.5',
            dpOsSph: '17.25',
            odEqSph: '-4',
            osEqSph: '9.88',
            studentName: '1阿48'
          },
          {
            dpOdSph: '-4.5',
            dpOsSph: '-0.25',
            odEqSph: '-12.63',
            osEqSph: '-4.63',
            studentName: '1阿49'
          },
          {
            dpOdSph: '1.0',
            dpOsSph: '-5.25',
            odEqSph: '-4.25',
            osEqSph: '-10.38',
            studentName: '1阿0'
          },
          {
            dpOdSph: '17.5',
            dpOsSph: '-11.5',
            odEqSph: '16',
            osEqSph: '-17.25',
            studentName: '1阿1'
          },
          {
            dpOdSph: '19.25',
            dpOsSph: '-9.0',
            odEqSph: '16.25',
            osEqSph: '-16',
            studentName: '1阿2'
          },
          {
            dpOdSph: '-19.75',
            dpOsSph: '0.25',
            odEqSph: '-28.13',
            osEqSph: '-8.38',
            studentName: '1阿3'
          },
          {
            dpOdSph: '3.5',
            dpOsSph: '7.25',
            odEqSph: '-3.25',
            osEqSph: '5.25',
            studentName: '1阿4'
          },
          {
            dpOdSph: '-8.75',
            dpOsSph: '-10.25',
            odEqSph: '-16.25',
            osEqSph: '-13',
            studentName: '1阿5'
          },
          {
            dpOdSph: '-12.0',
            dpOsSph: '7.0',
            odEqSph: '-18.13',
            osEqSph: '0.88',
            studentName: '1阿6'
          },
          {
            dpOdSph: '-12.25',
            dpOsSph: '11.0',
            odEqSph: '-14.88',
            osEqSph: '1.88',
            studentName: '1阿7'
          },
          {
            dpOdSph: '11.25',
            dpOsSph: '10.25',
            odEqSph: '10.13',
            osEqSph: '8.13',
            studentName: '1阿8'
          },
          {
            dpOdSph: '2.5',
            dpOsSph: '0.5',
            odEqSph: '-1.63',
            osEqSph: '-4.13',
            studentName: '1阿9'
          },
          {
            dpOdSph: '19.0',
            dpOsSph: '-10.5',
            odEqSph: '9.63',
            osEqSph: '-13.75',
            studentName: '1阿10'
          },
          {
            dpOdSph: '9.5',
            dpOsSph: '18.0',
            odEqSph: '1.75',
            osEqSph: '16.63',
            studentName: '1阿11'
          },
          {
            dpOdSph: '11.5',
            dpOsSph: '7.0',
            odEqSph: '3.5',
            osEqSph: '2.25',
            studentName: '1阿12'
          },
          {
            dpOdSph: '-19.0',
            dpOsSph: '-14.0',
            odEqSph: '-19.5',
            osEqSph: '-17.63',
            studentName: '1阿13'
          },
          {
            dpOdSph: '9.25',
            dpOsSph: '-1.5',
            odEqSph: '5.25',
            osEqSph: '-10.13',
            studentName: '1阿14'
          },
          {
            dpOdSph: '-10.25',
            dpOsSph: '-13.0',
            odEqSph: '-10.38',
            osEqSph: '-16.63',
            studentName: '1阿15'
          },
          {
            dpOdSph: '13.5',
            dpOsSph: '9.5',
            odEqSph: '9.38',
            osEqSph: '5.25',
            studentName: '1阿16'
          },
          {
            dpOdSph: '2.75',
            dpOsSph: '-7.5',
            odEqSph: '-1.63',
            osEqSph: '-12.75',
            studentName: '1阿17'
          },
          {
            dpOdSph: '-9.5',
            dpOsSph: '-15.5',
            odEqSph: '-14.63',
            osEqSph: '-24',
            studentName: '1阿18'
          },
          {
            dpOdSph: '11.0',
            dpOsSph: '12.5',
            odEqSph: '9.38',
            osEqSph: '6.63',
            studentName: '1阿19'
          },
          {
            dpOdSph: '9.75',
            dpOsSph: '12.0',
            odEqSph: '5.13',
            osEqSph: '8.63',
            studentName: '1阿20'
          },
          {
            dpOdSph: '-17.25',
            dpOsSph: '15.0',
            odEqSph: '-24.13',
            osEqSph: '8.75',
            studentName: '1阿21'
          },
          {
            dpOdSph: '-0.25',
            dpOsSph: '8.5',
            odEqSph: '-9',
            osEqSph: '3.75',
            studentName: '1阿22'
          },
          {
            dpOdSph: '-3.25',
            dpOsSph: '-13.75',
            odEqSph: '-4.25',
            osEqSph: '-14.88',
            studentName: '1阿23'
          },
          {
            dpOdSph: '13.5',
            dpOsSph: '13.5',
            odEqSph: '4.63',
            osEqSph: '9.13',
            studentName: '1阿24'
          },
          {
            dpOdSph: '6.5',
            dpOsSph: '-4.75',
            odEqSph: '4.38',
            osEqSph: '-7.13',
            studentName: '1阿25'
          },
          {
            dpOdSph: '-11.5',
            dpOsSph: '-13.75',
            odEqSph: '-12.88',
            osEqSph: '-18.63',
            studentName: '1阿26'
          },
          {
            dpOdSph: '14.25',
            dpOsSph: '-14.25',
            odEqSph: '5.25',
            osEqSph: '-21.13',
            studentName: '1阿27'
          },
          {
            dpOdSph: '7.75',
            dpOsSph: '8.25',
            odEqSph: '-0.88',
            osEqSph: '6.63',
            studentName: '1阿28'
          },
          {
            dpOdSph: '13.75',
            dpOsSph: '-12.25',
            odEqSph: '11.88',
            osEqSph: '-20.25',
            studentName: '1阿29'
          },
          {
            dpOdSph: '-13.25',
            dpOsSph: '16.5',
            odEqSph: '-20.75',
            osEqSph: '7.25',
            studentName: '1阿30'
          },
          {
            dpOdSph: '0.0',
            dpOsSph: '17.0',
            odEqSph: '-6',
            osEqSph: '16.75',
            studentName: '1阿31'
          },
          {
            dpOdSph: '4.25',
            dpOsSph: '12.5',
            odEqSph: '1.25',
            osEqSph: '7.88',
            studentName: '1阿32'
          },
          {
            dpOdSph: '5.75',
            dpOsSph: '-19.5',
            odEqSph: '-1',
            osEqSph: '-25.88',
            studentName: '1阿33'
          },
          {
            dpOdSph: '3.0',
            dpOsSph: '-4.0',
            odEqSph: '-2.25',
            osEqSph: '-12.38',
            studentName: '1阿34'
          },
          {
            dpOdSph: '7.75',
            dpOsSph: '16.0',
            odEqSph: '1.38',
            osEqSph: '15.75',
            studentName: '1阿35'
          },
          {
            dpOdSph: '12.75',
            dpOsSph: '1.0',
            odEqSph: '10.25',
            osEqSph: '-0.5',
            studentName: '1阿36'
          },
          {
            dpOdSph: '9.5',
            dpOsSph: '-19.5',
            odEqSph: '1.5',
            osEqSph: '-20',
            studentName: '1阿37'
          },
          {
            dpOdSph: '-14.0',
            dpOsSph: '-16.0',
            odEqSph: '-18.88',
            osEqSph: '-21.13',
            studentName: '1阿38'
          },
          {
            dpOdSph: '4.5',
            dpOsSph: '-12.75',
            odEqSph: '-4',
            osEqSph: '-18.63',
            studentName: '1阿39'
          },
          {
            dpOdSph: '14.75',
            dpOsSph: '7.25',
            odEqSph: '14',
            osEqSph: '3.13',
            studentName: '1阿40'
          },
          {
            dpOdSph: '1.25',
            dpOsSph: '16.75',
            odEqSph: '-2.38',
            osEqSph: '16.25',
            studentName: '1阿41'
          },
          {
            dpOdSph: '-10.5',
            dpOsSph: '14.5',
            odEqSph: '-10.63',
            osEqSph: '13.88',
            studentName: '1阿42'
          },
          {
            dpOdSph: '-10.0',
            dpOsSph: '5.75',
            odEqSph: '-11.75',
            osEqSph: '0',
            studentName: '1阿43'
          },
          {
            dpOdSph: '-9.75',
            dpOsSph: '3.0',
            odEqSph: '-13.25',
            osEqSph: '-6.75',
            studentName: '1阿44'
          },
          {
            dpOdSph: '-9.25',
            dpOsSph: '18.75',
            odEqSph: '-13.25',
            osEqSph: '11.25',
            studentName: '1阿45'
          },
          {
            dpOdSph: '13.0',
            dpOsSph: '-8.5',
            odEqSph: '11.75',
            osEqSph: '-12',
            studentName: '1阿46'
          },
          {
            dpOdSph: '-10.75',
            dpOsSph: '19.75',
            odEqSph: '-19.25',
            osEqSph: '15.25',
            studentName: '1阿47'
          },
          {
            dpOdSph: '-6.5',
            dpOsSph: '3.75',
            odEqSph: '-11.38',
            osEqSph: '-4.25',
            studentName: '1阿48'
          },
          {
            dpOdSph: '3.0',
            dpOsSph: '-12.5',
            odEqSph: '2',
            osEqSph: '-22',
            studentName: '1阿49'
          },
          {
            dpOdSph: '17.5',
            dpOsSph: '10.0',
            odEqSph: '9.13',
            osEqSph: '1.25',
            studentName: '1阿0'
          },
          {
            dpOdSph: '13.0',
            dpOsSph: '15.75',
            odEqSph: '6.38',
            osEqSph: '11.63',
            studentName: '1阿1'
          },
          {
            dpOdSph: '-1.25',
            dpOsSph: '2.0',
            odEqSph: '-2.5',
            osEqSph: '-0.63',
            studentName: '1阿2'
          },
          {
            dpOdSph: '-8.0',
            dpOsSph: '-9.0',
            odEqSph: '-8.63',
            osEqSph: '-12.13',
            studentName: '1阿3'
          },
          {
            dpOdSph: '-1.25',
            dpOsSph: '-0.25',
            odEqSph: '-11',
            osEqSph: '-0.38',
            studentName: '1阿4'
          },
          {
            dpOdSph: '7.5',
            dpOsSph: '-12.5',
            odEqSph: '-0.25',
            osEqSph: '-21.13',
            studentName: '1阿5'
          },
          {
            dpOdSph: '-16.25',
            dpOsSph: '-1.5',
            odEqSph: '-17.13',
            osEqSph: '-11.38',
            studentName: '1阿6'
          },
          {
            dpOdSph: '9.5',
            dpOsSph: '-1.5',
            odEqSph: '8.75',
            osEqSph: '-10.13',
            studentName: '1阿7'
          },
          {
            dpOdSph: '-3.5',
            dpOsSph: '17.0',
            odEqSph: '-4.88',
            osEqSph: '12.25',
            studentName: '1阿8'
          },
          {
            dpOdSph: '16.0',
            dpOsSph: '-12.75',
            odEqSph: '6.13',
            osEqSph: '-19.5',
            studentName: '1阿9'
          },
          {
            dpOdSph: '-0.5',
            dpOsSph: '-15.75',
            odEqSph: '-1.38',
            osEqSph: '-20.25',
            studentName: '1阿10'
          },
          {
            dpOdSph: '-11.5',
            dpOsSph: '0.0',
            odEqSph: '-14.38',
            osEqSph: '-7.75',
            studentName: '1阿11'
          },
          {
            dpOdSph: '-9.0',
            dpOsSph: '14.25',
            odEqSph: '-14.38',
            osEqSph: '11.88',
            studentName: '1阿12'
          },
          {
            dpOdSph: '0.25',
            dpOsSph: '19.75',
            odEqSph: '-5',
            osEqSph: '17.5',
            studentName: '1阿13'
          },
          {
            dpOdSph: '1.5',
            dpOsSph: '6.5',
            odEqSph: '-8',
            osEqSph: '0.13',
            studentName: '1阿14'
          },
          {
            dpOdSph: '12.25',
            dpOsSph: '-12.0',
            odEqSph: '11.38',
            osEqSph: '-21.5',
            studentName: '1阿15'
          },
          {
            dpOdSph: '2.0',
            dpOsSph: '-18.25',
            odEqSph: '-7.75',
            osEqSph: '-25.88',
            studentName: '1阿16'
          },
          {
            dpOdSph: '-10.75',
            dpOsSph: '3.0',
            odEqSph: '-11.88',
            osEqSph: '-4.63',
            studentName: '1阿17'
          },
          {
            dpOdSph: '-11.25',
            dpOsSph: '13.75',
            odEqSph: '-16.38',
            osEqSph: '8.38',
            studentName: '1阿18'
          },
          {
            dpOdSph: '1.25',
            dpOsSph: '-13.0',
            odEqSph: '-1.88',
            osEqSph: '-15.38',
            studentName: '1阿19'
          },
          {
            dpOdSph: '15.5',
            dpOsSph: '1.0',
            odEqSph: '9.63',
            osEqSph: '0.75',
            studentName: '1阿20'
          },
          {
            dpOdSph: '8.75',
            dpOsSph: '14.5',
            odEqSph: '5.75',
            osEqSph: '7.38',
            studentName: '1阿21'
          },
          {
            dpOdSph: '-19.5',
            dpOsSph: '16.5',
            odEqSph: '-21.13',
            osEqSph: '9.63',
            studentName: '1阿22'
          },
          {
            dpOdSph: '1.5',
            dpOsSph: '-4.25',
            odEqSph: '-5.25',
            osEqSph: '-8.63',
            studentName: '1阿23'
          },
          {
            dpOdSph: '0.0',
            dpOsSph: '5.25',
            odEqSph: '-5.88',
            osEqSph: '4.5',
            studentName: '1阿24'
          },
          {
            dpOdSph: '-15.5',
            dpOsSph: '12.25',
            odEqSph: '-22.88',
            osEqSph: '3.13',
            studentName: '1阿25'
          },
          {
            dpOdSph: '-5.25',
            dpOsSph: '-9.75',
            odEqSph: '-7.25',
            osEqSph: '-19.13',
            studentName: '1阿26'
          },
          {
            dpOdSph: '12.75',
            dpOsSph: '-19.0',
            odEqSph: '5.5',
            osEqSph: '-24.25',
            studentName: '1阿27'
          },
          {
            dpOdSph: '-2.0',
            dpOsSph: '-15.0',
            odEqSph: '-5',
            osEqSph: '-23',
            studentName: '1阿28'
          },
          {
            dpOdSph: '-1.5',
            dpOsSph: '-10.25',
            odEqSph: '-3.13',
            osEqSph: '-19.88',
            studentName: '1阿29'
          },
          {
            dpOdSph: '-14.0',
            dpOsSph: '-7.0',
            odEqSph: '-18.5',
            osEqSph: '-11.75',
            studentName: '1阿30'
          },
          {
            dpOdSph: '-17.75',
            dpOsSph: '5.0',
            odEqSph: '-23.5',
            osEqSph: '1',
            studentName: '1阿31'
          },
          {
            dpOdSph: '-0.25',
            dpOsSph: '-0.5',
            odEqSph: '-0.38',
            osEqSph: '-9.63',
            studentName: '1阿32'
          },
          {
            dpOdSph: '-19.0',
            dpOsSph: '7.0',
            odEqSph: '-21.5',
            osEqSph: '4.13',
            studentName: '1阿33'
          },
          {
            dpOdSph: '-10.25',
            dpOsSph: '-8.0',
            odEqSph: '-19.63',
            osEqSph: '-13.5',
            studentName: '1阿34'
          },
          {
            dpOdSph: '16.0',
            dpOsSph: '-16.75',
            odEqSph: '7.38',
            osEqSph: '-22.63',
            studentName: '1阿35'
          },
          {
            dpOdSph: '3.5',
            dpOsSph: '-2.75',
            odEqSph: '2.63',
            osEqSph: '-7.63',
            studentName: '1阿36'
          },
          {
            dpOdSph: '6.5',
            dpOsSph: '-4.25',
            odEqSph: '6.38',
            osEqSph: '-7.38',
            studentName: '1阿37'
          },
          {
            dpOdSph: '19.0',
            dpOsSph: '6.75',
            odEqSph: '13.13',
            osEqSph: '4.5',
            studentName: '1阿38'
          },
          {
            dpOdSph: '17.25',
            dpOsSph: '-8.75',
            odEqSph: '14.88',
            osEqSph: '-16.5',
            studentName: '1阿39'
          },
          {
            dpOdSph: '19.0',
            dpOsSph: '0.0',
            odEqSph: '9.13',
            osEqSph: '-7.75',
            studentName: '1阿40'
          },
          {
            dpOdSph: '-17.0',
            dpOsSph: '-2.5',
            odEqSph: '-22.88',
            osEqSph: '-3.38',
            studentName: '1阿41'
          },
          {
            dpOdSph: '19.5',
            dpOsSph: '18.25',
            odEqSph: '12.5',
            osEqSph: '11.13',
            studentName: '1阿42'
          },
          {
            dpOdSph: '4.0',
            dpOsSph: '1.25',
            odEqSph: '-4',
            osEqSph: '-2.25',
            studentName: '1阿43'
          },
          {
            dpOdSph: '0.5',
            dpOsSph: '-0.75',
            odEqSph: '-2.75',
            osEqSph: '-10',
            studentName: '1阿44'
          },
          {
            dpOdSph: '4.0',
            dpOsSph: '-4.75',
            odEqSph: '-1.25',
            osEqSph: '-5.13',
            studentName: '1阿45'
          },
          {
            dpOdSph: '-15.25',
            dpOsSph: '-4.75',
            odEqSph: '-23',
            osEqSph: '-10.5',
            studentName: '1阿46'
          },
          {
            dpOdSph: '5.0',
            dpOsSph: '5.75',
            odEqSph: '-4.38',
            osEqSph: '5',
            studentName: '1阿47'
          },
          {
            dpOdSph: '-6.25',
            dpOsSph: '13.75',
            odEqSph: '-7.38',
            osEqSph: '9.63',
            studentName: '1阿48'
          },
          {
            dpOdSph: '-19.25',
            dpOsSph: '-12.0',
            odEqSph: '-27.88',
            osEqSph: '-20.75',
            studentName: '1阿49'
          }
        ],
        dpSphList: [
          {
            count: '1',
            data: -19.75
          },
          {
            count: '4',
            data: -19.5
          },
          {
            count: '1',
            data: -19.25
          },
          {
            count: '4',
            data: -19
          },
          {
            count: '1',
            data: -18.25
          },
          {
            count: '1',
            data: -18
          },
          {
            count: '1',
            data: -17.75
          },
          {
            count: '1',
            data: -17.25
          },
          {
            count: '2',
            data: -17
          },
          {
            count: '1',
            data: -16.75
          },
          {
            count: '1',
            data: -16.25
          },
          {
            count: '2',
            data: -16
          },
          {
            count: '2',
            data: -15.75
          },
          {
            count: '2',
            data: -15.5
          },
          {
            count: '1',
            data: -15.25
          },
          {
            count: '2',
            data: -15
          },
          {
            count: '1',
            data: -14.5
          },
          {
            count: '1',
            data: -14.25
          },
          {
            count: '4',
            data: -14
          },
          {
            count: '2',
            data: -13.75
          },
          {
            count: '1',
            data: -13.5
          },
          {
            count: '1',
            data: -13.25
          },
          {
            count: '2',
            data: -13
          },
          {
            count: '4',
            data: -12.75
          },
          {
            count: '3',
            data: -12.5
          },
          {
            count: '2',
            data: -12.25
          },
          {
            count: '4',
            data: -12
          },
          {
            count: '3',
            data: -11.75
          },
          {
            count: '4',
            data: -11.5
          },
          {
            count: '4',
            data: -11.25
          },
          {
            count: '3',
            data: -10.75
          },
          {
            count: '2',
            data: -10.5
          },
          {
            count: '4',
            data: -10.25
          },
          {
            count: '2',
            data: -10
          },
          {
            count: '4',
            data: -9.75
          },
          {
            count: '2',
            data: -9.5
          },
          {
            count: '2',
            data: -9.25
          },
          {
            count: '4',
            data: -9
          },
          {
            count: '3',
            data: -8.75
          },
          {
            count: '1',
            data: -8.5
          },
          {
            count: '2',
            data: -8
          },
          {
            count: '1',
            data: -7.5
          },
          {
            count: '2',
            data: -7
          },
          {
            count: '2',
            data: -6.5
          },
          {
            count: '4',
            data: -6.25
          },
          {
            count: '1',
            data: -5.75
          },
          {
            count: '2',
            data: -5.25
          },
          {
            count: '2',
            data: -5
          },
          {
            count: '3',
            data: -4.75
          },
          {
            count: '2',
            data: -4.5
          },
          {
            count: '3',
            data: -4.25
          },
          {
            count: '1',
            data: -4
          },
          {
            count: '1',
            data: -3.5
          },
          {
            count: '1',
            data: -3.25
          },
          {
            count: '1',
            data: -2.75
          },
          {
            count: '1',
            data: -2.5
          },
          {
            count: '2',
            data: -2
          },
          {
            count: '2',
            data: -1.75
          },
          {
            count: '4',
            data: -1.5
          },
          {
            count: '4',
            data: -1.25
          },
          {
            count: '1',
            data: -0.75
          },
          {
            count: '2',
            data: -0.5
          },
          {
            count: '5',
            data: -0.25
          },
          {
            count: '5',
            data: 0
          },
          {
            count: '2',
            data: 0.25
          },
          {
            count: '4',
            data: 0.5
          },
          {
            count: '1',
            data: 0.75
          },
          {
            count: '4',
            data: 1
          },
          {
            count: '4',
            data: 1.25
          },
          {
            count: '3',
            data: 1.5
          },
          {
            count: '1',
            data: 1.75
          },
          {
            count: '2',
            data: 2
          },
          {
            count: '1',
            data: 2.5
          },
          {
            count: '1',
            data: 2.75
          },
          {
            count: '7',
            data: 3
          },
          {
            count: '2',
            data: 3.25
          },
          {
            count: '2',
            data: 3.5
          },
          {
            count: '1',
            data: 3.75
          },
          {
            count: '3',
            data: 4
          },
          {
            count: '2',
            data: 4.25
          },
          {
            count: '2',
            data: 4.5
          },
          {
            count: '2',
            data: 5
          },
          {
            count: '1',
            data: 5.25
          },
          {
            count: '2',
            data: 5.5
          },
          {
            count: '4',
            data: 5.75
          },
          {
            count: '1',
            data: 6.25
          },
          {
            count: '5',
            data: 6.5
          },
          {
            count: '2',
            data: 6.75
          },
          {
            count: '6',
            data: 7
          },
          {
            count: '3',
            data: 7.25
          },
          {
            count: '1',
            data: 7.5
          },
          {
            count: '2',
            data: 7.75
          },
          {
            count: '2',
            data: 8.25
          },
          {
            count: '1',
            data: 8.5
          },
          {
            count: '1',
            data: 8.75
          },
          {
            count: '1',
            data: 9
          },
          {
            count: '1',
            data: 9.25
          },
          {
            count: '4',
            data: 9.5
          },
          {
            count: '1',
            data: 9.75
          },
          {
            count: '1',
            data: 10
          },
          {
            count: '3',
            data: 10.25
          },
          {
            count: '1',
            data: 10.5
          },
          {
            count: '4',
            data: 11
          },
          {
            count: '1',
            data: 11.25
          },
          {
            count: '1',
            data: 11.5
          },
          {
            count: '1',
            data: 11.75
          },
          {
            count: '2',
            data: 12
          },
          {
            count: '3',
            data: 12.25
          },
          {
            count: '2',
            data: 12.5
          },
          {
            count: '2',
            data: 12.75
          },
          {
            count: '4',
            data: 13
          },
          {
            count: '1',
            data: 13.25
          },
          {
            count: '3',
            data: 13.5
          },
          {
            count: '3',
            data: 13.75
          },
          {
            count: '1',
            data: 14
          },
          {
            count: '2',
            data: 14.25
          },
          {
            count: '2',
            data: 14.5
          },
          {
            count: '2',
            data: 14.75
          },
          {
            count: '1',
            data: 15
          },
          {
            count: '1',
            data: 15.5
          },
          {
            count: '1',
            data: 15.75
          },
          {
            count: '3',
            data: 16
          },
          {
            count: '1',
            data: 16.25
          },
          {
            count: '2',
            data: 16.5
          },
          {
            count: '1',
            data: 16.75
          },
          {
            count: '2',
            data: 17
          },
          {
            count: '3',
            data: 17.25
          },
          {
            count: '2',
            data: 17.5
          },
          {
            count: '1',
            data: 18
          },
          {
            count: '2',
            data: 18.25
          },
          {
            count: '1',
            data: 18.5
          },
          {
            count: '1',
            data: 18.75
          },
          {
            count: '4',
            data: 19
          },
          {
            count: '2',
            data: 19.25
          },
          {
            count: '2',
            data: 19.5
          },
          {
            count: '5',
            data: 19.75
          }
        ],
        eqDpSphList: [
          {
            count: '1',
            data: -28.13
          },
          {
            count: '1',
            data: -27.88
          },
          {
            count: '1',
            data: -26.5
          },
          {
            count: '2',
            data: -25.88
          },
          {
            count: '1',
            data: -25.13
          },
          {
            count: '1',
            data: -24.25
          },
          {
            count: '1',
            data: -24.13
          },
          {
            count: '1',
            data: -24
          },
          {
            count: '2',
            data: -23.5
          },
          {
            count: '1',
            data: -23.25
          },
          {
            count: '2',
            data: -23
          },
          {
            count: '2',
            data: -22.88
          },
          {
            count: '1',
            data: -22.63
          },
          {
            count: '2',
            data: -22
          },
          {
            count: '2',
            data: -21.5
          },
          {
            count: '5',
            data: -21.13
          },
          {
            count: '2',
            data: -20.75
          },
          {
            count: '3',
            data: -20.63
          },
          {
            count: '1',
            data: -20.5
          },
          {
            count: '1',
            data: -20.38
          },
          {
            count: '2',
            data: -20.25
          },
          {
            count: '1',
            data: -20.13
          },
          {
            count: '1',
            data: -20
          },
          {
            count: '1',
            data: -19.88
          },
          {
            count: '2',
            data: -19.63
          },
          {
            count: '2',
            data: -19.5
          },
          {
            count: '1',
            data: -19.25
          },
          {
            count: '1',
            data: -19.13
          },
          {
            count: '1',
            data: -19
          },
          {
            count: '1',
            data: -18.88
          },
          {
            count: '2',
            data: -18.63
          },
          {
            count: '1',
            data: -18.5
          },
          {
            count: '1',
            data: -18.13
          },
          {
            count: '2',
            data: -18
          },
          {
            count: '1',
            data: -17.88
          },
          {
            count: '1',
            data: -17.63
          },
          {
            count: '1',
            data: -17.5
          },
          {
            count: '1',
            data: -17.25
          },
          {
            count: '1',
            data: -17.13
          },
          {
            count: '1',
            data: -16.63
          },
          {
            count: '1',
            data: -16.5
          },
          {
            count: '3',
            data: -16.38
          },
          {
            count: '2',
            data: -16.25
          },
          {
            count: '2',
            data: -16
          },
          {
            count: '1',
            data: -15.38
          },
          {
            count: '1',
            data: -15
          },
          {
            count: '2',
            data: -14.88
          },
          {
            count: '1',
            data: -14.63
          },
          {
            count: '2',
            data: -14.38
          },
          {
            count: '1',
            data: -13.75
          },
          {
            count: '2',
            data: -13.63
          },
          {
            count: '1',
            data: -13.5
          },
          {
            count: '2',
            data: -13.25
          },
          {
            count: '3',
            data: -13
          },
          {
            count: '1',
            data: -12.88
          },
          {
            count: '1',
            data: -12.75
          },
          {
            count: '2',
            data: -12.63
          },
          {
            count: '1',
            data: -12.38
          },
          {
            count: '1',
            data: -12.13
          },
          {
            count: '1',
            data: -12
          },
          {
            count: '1',
            data: -11.88
          },
          {
            count: '2',
            data: -11.75
          },
          {
            count: '2',
            data: -11.38
          },
          {
            count: '2',
            data: -11
          },
          {
            count: '1',
            data: -10.88
          },
          {
            count: '1',
            data: -10.75
          },
          {
            count: '1',
            data: -10.63
          },
          {
            count: '1',
            data: -10.5
          },
          {
            count: '2',
            data: -10.38
          },
          {
            count: '3',
            data: -10.13
          },
          {
            count: '1',
            data: -10
          },
          {
            count: '1',
            data: -9.63
          },
          {
            count: '2',
            data: -9
          },
          {
            count: '1',
            data: -8.88
          },
          {
            count: '2',
            data: -8.63
          },
          {
            count: '2',
            data: -8.38
          },
          {
            count: '1',
            data: -8
          },
          {
            count: '1',
            data: -7.88
          },
          {
            count: '3',
            data: -7.75
          },
          {
            count: '1',
            data: -7.63
          },
          {
            count: '1',
            data: -7.5
          },
          {
            count: '4',
            data: -7.38
          },
          {
            count: '2',
            data: -7.25
          },
          {
            count: '1',
            data: -7.13
          },
          {
            count: '1',
            data: -7
          },
          {
            count: '2',
            data: -6.88
          },
          {
            count: '1',
            data: -6.75
          },
          {
            count: '1',
            data: -6.25
          },
          {
            count: '2',
            data: -6
          },
          {
            count: '2',
            data: -5.88
          },
          {
            count: '1',
            data: -5.25
          },
          {
            count: '1',
            data: -5.13
          },
          {
            count: '2',
            data: -5
          },
          {
            count: '1',
            data: -4.88
          },
          {
            count: '1',
            data: -4.75
          },
          {
            count: '2',
            data: -4.63
          },
          {
            count: '1',
            data: -4.38
          },
          {
            count: '4',
            data: -4.25
          },
          {
            count: '1',
            data: -4.13
          },
          {
            count: '4',
            data: -4
          },
          {
            count: '1',
            data: -3.38
          },
          {
            count: '2',
            data: -3.25
          },
          {
            count: '2',
            data: -3.13
          },
          {
            count: '1',
            data: -3
          },
          {
            count: '1',
            data: -2.75
          },
          {
            count: '1',
            data: -2.5
          },
          {
            count: '1',
            data: -2.38
          },
          {
            count: '5',
            data: -2.25
          },
          {
            count: '1',
            data: -1.88
          },
          {
            count: '2',
            data: -1.63
          },
          {
            count: '1',
            data: -1.5
          },
          {
            count: '1',
            data: -1.38
          },
          {
            count: '2',
            data: -1.25
          },
          {
            count: '1',
            data: -1
          },
          {
            count: '2',
            data: -0.88
          },
          {
            count: '3',
            data: -0.63
          },
          {
            count: '1',
            data: -0.5
          },
          {
            count: '2',
            data: -0.38
          },
          {
            count: '1',
            data: -0.25
          },
          {
            count: '1',
            data: -0.13
          },
          {
            count: '1',
            data: 0
          },
          {
            count: '2',
            data: 0.13
          },
          {
            count: '1',
            data: 0.25
          },
          {
            count: '1',
            data: 0.38
          },
          {
            count: '1',
            data: 0.75
          },
          {
            count: '1',
            data: 0.88
          },
          {
            count: '2',
            data: 1
          },
          {
            count: '2',
            data: 1.25
          },
          {
            count: '3',
            data: 1.38
          },
          {
            count: '1',
            data: 1.5
          },
          {
            count: '1',
            data: 1.75
          },
          {
            count: '1',
            data: 1.88
          },
          {
            count: '1',
            data: 2
          },
          {
            count: '1',
            data: 2.25
          },
          {
            count: '1',
            data: 2.5
          },
          {
            count: '2',
            data: 2.63
          },
          {
            count: '1',
            data: 2.88
          },
          {
            count: '2',
            data: 3.13
          },
          {
            count: '1',
            data: 3.5
          },
          {
            count: '2',
            data: 3.75
          },
          {
            count: '2',
            data: 4.13
          },
          {
            count: '1',
            data: 4.38
          },
          {
            count: '2',
            data: 4.5
          },
          {
            count: '1',
            data: 4.63
          },
          {
            count: '2',
            data: 4.75
          },
          {
            count: '1',
            data: 5
          },
          {
            count: '1',
            data: 5.13
          },
          {
            count: '5',
            data: 5.25
          },
          {
            count: '1',
            data: 5.38
          },
          {
            count: '3',
            data: 5.5
          },
          {
            count: '1',
            data: 5.75
          },
          {
            count: '2',
            data: 6.13
          },
          {
            count: '3',
            data: 6.38
          },
          {
            count: '2',
            data: 6.63
          },
          {
            count: '1',
            data: 7
          },
          {
            count: '3',
            data: 7.25
          },
          {
            count: '2',
            data: 7.38
          },
          {
            count: '1',
            data: 7.88
          },
          {
            count: '1',
            data: 8.13
          },
          {
            count: '1',
            data: 8.38
          },
          {
            count: '1',
            data: 8.63
          },
          {
            count: '2',
            data: 8.75
          },
          {
            count: '4',
            data: 9.13
          },
          {
            count: '3',
            data: 9.38
          },
          {
            count: '5',
            data: 9.63
          },
          {
            count: '1',
            data: 9.88
          },
          {
            count: '2',
            data: 10.13
          },
          {
            count: '1',
            data: 10.25
          },
          {
            count: '1',
            data: 10.75
          },
          {
            count: '1',
            data: 11.13
          },
          {
            count: '1',
            data: 11.25
          },
          {
            count: '1',
            data: 11.38
          },
          {
            count: '2',
            data: 11.63
          },
          {
            count: '1',
            data: 11.75
          },
          {
            count: '2',
            data: 11.88
          },
          {
            count: '1',
            data: 12.25
          },
          {
            count: '1',
            data: 12.5
          },
          {
            count: '1',
            data: 12.75
          },
          {
            count: '1',
            data: 13
          },
          {
            count: '1',
            data: 13.13
          },
          {
            count: '1',
            data: 13.88
          },
          {
            count: '1',
            data: 14
          },
          {
            count: '1',
            data: 14.75
          },
          {
            count: '1',
            data: 14.88
          },
          {
            count: '1',
            data: 15.25
          },
          {
            count: '1',
            data: 15.75
          },
          {
            count: '1',
            data: 15.88
          },
          {
            count: '1',
            data: 16
          },
          {
            count: '2',
            data: 16.25
          },
          {
            count: '1',
            data: 16.63
          },
          {
            count: '1',
            data: 16.75
          },
          {
            count: '1',
            data: 16.88
          },
          {
            count: '1',
            data: 17.5
          },
          {
            count: '1',
            data: 18.25
          },
          {
            count: '1',
            data: 18.38
          }
        ],
        name: null
      })
  },
  {
    url: '/basic-api/eyesight/report/class/getClassHyperopiaReserve',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        classId: '1282974992858880',
        className: '1',
        gradeId: '921830381248271',
        gradeName: '一年级',
        hyperopiaReservesEnough: '0',
        hyperopiaReservesEnoughNum: '0',
        hyperopiaReservesNotEnough: '0',
        hyperopiaReservesNotEnoughNum: '0',
        schoolId: '1280739653607168',
        schoolName: '西安实验小学',
        studentHyperopiaReserveInfos: [
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿40'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿2'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿1'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿13'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿26'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿13'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿33'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿40'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿6'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿8'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿7'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿9'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿38'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿27'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿12'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿3'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿37'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿22'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿28'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿28'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿25'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿27'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿44'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿24'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿32'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿43'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿18'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿15'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿39'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿10'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿15'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿49'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿42'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿19'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿36'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿47'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿16'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿35'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿4'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿30'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿12'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿46'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿48'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿6'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿19'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿36'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿20'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿42'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿1'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿47'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿10'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿49'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿0'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿41'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿5'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿32'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿29'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿3'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿24'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿40'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿26'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿33'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿14'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿4'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿27'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿23'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿18'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿12'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿22'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿31'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿17'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿37'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿2'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿34'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿34'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿17'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿31'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿6'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿22'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿8'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿21'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿44'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿7'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿32'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿18'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿38'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿45'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿39'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿11'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿45'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿0'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿48'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿35'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿25'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿36'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿46'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿8'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿41'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿46'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿16'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿42'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿20'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿9'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿5'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿19'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿48'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿11'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿21'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿45'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿20'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿35'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿1'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿38'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿41'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿13'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿29'
          },
          {
            hyperopiaReservesStatus: null,
            studentName: '1阿4'
          }
        ]
      })
  },
  {
    url: '/basic-api/eyesight/report/class/getMyopiaTrend',
    timeout: 100,
    method: 'get',
    response: () =>
      resultSuccess({
        className: '1',
        gradeName: '一年级',
        planTrends: [
          {
            highMyopiaRate: 0.598,
            lowMyopiaRate: 0.0882,
            manHighMyopiaRate: 0.5396,
            manLowMyopiaRate: 0.1111,
            manMediumMyopiaRate: 0.0952,
            manMyopiaRate: 0.746,
            mediumMyopiaRate: 0.0882,
            myopiaRate: 0.7745,
            planId: '1283048021704448',
            planName: '陕西省视力筛查计划',
            womanHighMyopiaRate: 0.6923,
            womanLowMyopiaRate: 0.0512,
            womanMediumMyopiaRate: 0.0769,
            womanMyopiaRate: 0.8205
          }
        ],
        prefixName: '小学',
        schoolName: '西安实验小学',
        studyYear: '2022'
      })
  }
];

({
  url: '/basic-api/eyesight/report/class/',
  timeout: 100,
  method: 'get',
  response: () => resultSuccess()
});
