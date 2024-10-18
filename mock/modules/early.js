/*
 * @Author: wangjq wjq4416@163.com
 * @Date: 2024-10-12 10:30:17
 * @LastEditors: wangjq
 * @LastEditTime: 2024-10-12 10:38:49
 */
import { resultPageSuccess } from '../utils';

const pageList = (() => {
  const result = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      'planYear|1': ['2021', '2022', '2023', '2024'],
      planName: '@cword(3,5)',
      orgName: '@cword(10,20)' + '学校',
      endTime: '@datetime',
      visionDeviationNum: '@integer(1,100)',
      myopiaNum: '@integer(1,100)',
      myopiaRiskNum: '@integer(1,100)',
      astigmatismNum: '@integer(1,100)',
      visionFallNum: '@integer(1,100)'
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/eyesight/warn/orgWarningInfoPageList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, pageList);
    }
  }
];
