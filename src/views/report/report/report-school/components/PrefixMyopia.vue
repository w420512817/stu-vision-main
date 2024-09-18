<template>
  <div class="w-full">
    <div id="PrefixMyopia" class="text-base font-bold m-b-1">分学段近视情况</div>
    <div class="m-b-5 text-sm leading-6">{{ state.decStr }}。</div>
    <div v-if="areaLevel == 2">
      <LineChartReport height="250px" width="95%" :extend="myExtend2" :label-map="labelMap2" :chart-data="chartData2" />
      <p class="text-center m-t-5 m-b-10">{{ state.detail.name }}各县(市、区)分学段高度近视率</p>
      <p class="text-center m-b-3 font-bold">{{ state.detail.name }}各县（市、区）分学段高度近视情况</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>县(市、区)</th>
            <th>幼儿园</th>
            <th>小学</th>
            <th>初中</th>
            <th>
              <div>高中</div>
              <div>(普高/职高)</div>
            </th>
            <th>总体近视率</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in state.detail.dataList" :key="item.regionName">
          <tr>
            <td rowspan="2">{{ index + 1 }}</td>
            <td rowspan="2">{{ item.regionName }}</td>
            <td>{{ floatToPercent(item.kindergartenMyopiaRate) }}</td>
            <td>{{ floatToPercent(item.primarySchoolMyopiaRate) }}</td>
            <td>{{ floatToPercent(item.middleSchoolMyopiaRate) }}</td>
            <td>
              <div>{{ floatToPercent(item.highSchoolMyopiaRate) }}</div>
              <div>
                ({{ floatToPercent(item.normalHighSchoolMyopiaRate) }}/{{
                  floatToPercent(item.professionalSchoolMyopiaRate)
                }})
              </div>
            </td>
            <td>{{ floatToPercent(item.myopiaRate) }}</td>
          </tr>
          <tr>
            <td>{{ item.kindergartenMyopiaCount }}</td>
            <td>{{ item.primarySchoolMyopiaCount }}</td>
            <td>{{ item.middleSchoolMyopiaCount }}</td>
            <td>
              <div>{{ item.highSchoolMyopiaCount }}</div>
              <div>({{ item.normalHighSchoolMyopiaCount }}/{{ item.professionalSchoolMyopiaCount }})</div>
            </td>
            <td>{{ item.myopiaCount }}</td>
          </tr>
        </tbody>
      </n-table>
      <div class="m-b-10">注: 单元格下方为近视人数</div>
      <div class="m-b-5 text-sm leading-6">{{ state.detail.name }}{{ state.decStr2 }}。</div>
      <LineChartReport height="250px" width="95%" :extend="myExtend2" :label-map="labelMap1" :chart-data="chartData1" />
      <p class="text-center m-t-5 m-b-10">{{ state.detail.name }}各县(市、区)分学段高度近视率</p>
      <p class="text-center m-b-3 font-bold">{{ state.detail.name }}各县（市、区）分学段高度近视情况</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>县(市、区)</th>
            <th>幼儿园</th>
            <th>小学</th>
            <th>初中</th>
            <th>
              <div>高中</div>
              <div>(普高/职高)</div>
            </th>
            <th>总体近视率</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in state.detail.dataList" :key="item.regionName">
          <tr>
            <td rowspan="2">{{ index + 1 }}</td>
            <td rowspan="2">{{ item.regionName }}</td>
            <td>{{ floatToPercent(item.kindergartenHighMyopiaRate) }}</td>
            <td>{{ floatToPercent(item.primarySchoolHighMyopiaRate) }}</td>
            <td>{{ floatToPercent(item.middleSchoolHighMyopiaRate) }}</td>
            <td>
              <div>{{ floatToPercent(item.highSchoolHighMyopiaRate) }}</div>
              <div>
                ({{ floatToPercent(item.normalHighSchoolHighMyopiaRate) }}/{{
                  floatToPercent(item.professionalSchoolHighMyopiaRate)
                }})
              </div>
            </td>
            <td>{{ floatToPercent(item.highMyopiaRate) }}</td>
          </tr>
          <tr>
            <td>{{ item.kindergartenHighMyopiaCount }}</td>
            <td>{{ item.primarySchoolHighMyopiaCount }}</td>
            <td>{{ item.middleSchoolHighMyopiaCount }}</td>
            <td>
              <div>{{ item.highSchoolHighMyopiaCount }}</div>
              <div>({{ item.normalHighSchoolHighMyopiaCount }}/{{ item.professionalSchoolHighMyopiaCount }})</div>
            </td>
            <td>{{ item.highMyopiaCount }}</td>
          </tr>
        </tbody>
      </n-table>
      <div class="m-b-10">注: 单元格下方为近视人数</div>
    </div>
    <div v-if="areaLevel == 3">
      <BarChartReport height="250px" width="95%" :extend="myExtend3" :label-map="labelMap3" :chart-data="chartData3" />
      <p class="text-center m-t-5 m-b-10">{{ state.detail.name }}各学段近视人数</p>
      <p class="text-center m-b-3 font-bold">{{ state.detail.name }}各学段视力情况-男生</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>学段</th>
            <th>应筛查人数</th>
            <th>有效筛查人数</th>
            <th>近视人数</th>
            <th>近视率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in state.detail.manList" :key="item.prefixName">
            <td>{{ index + 1 }}</td>
            <td>{{ item.prefixName }}</td>
            <td>{{ item.stdCount }}</td>
            <td>{{ item.effectiveStdCount }}</td>
            <td>{{ item.myopiaStdCount }}</td>
            <td>{{ floatToPercent(item.myopiaRate) }}</td>
          </tr>
        </tbody>
      </n-table>
      <p class="text-center m-b-3 m-t-10 font-bold">{{ state.detail.name }}各学段视力情况-女生</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>学段</th>
            <th>应筛查人数</th>
            <th>有效筛查人数</th>
            <th>近视人数</th>
            <th>近视率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in state.detail.womanList" :key="item.prefixName">
            <td>{{ index + 1 }}</td>
            <td>{{ item.prefixName }}</td>
            <td>{{ item.stdCount }}</td>
            <td>{{ item.effectiveStdCount }}</td>
            <td>{{ item.myopiaStdCount }}</td>
            <td>{{ floatToPercent(item.myopiaRate) }}</td>
          </tr>
        </tbody>
      </n-table>
      <p class="text-center m-b-3 m-t-10 font-bold">{{ state.detail.name }}各学段视力情况-总</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>学段</th>
            <th>应筛查人数</th>
            <th>有效筛查人数</th>
            <th>近视人数</th>
            <th>近视率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in state.detail.allList" :key="item.prefixName">
            <td>{{ index + 1 }}</td>
            <td>{{ item.prefixName }}</td>
            <td>{{ item.stdCount }}</td>
            <td>{{ item.effectiveStdCount }}</td>
            <td>{{ item.myopiaStdCount }}</td>
            <td>{{ floatToPercent(item.myopiaRate) }}</td>
          </tr>
        </tbody>
      </n-table>
      <div class="m-t-10"></div>
      <BarChartReport height="250px" width="95%" :extend="myExtend3" :label-map="labelMap4" :chart-data="chartData4" />
      <p class="text-center m-b-10">{{ state.detail.name }}各学段近视程度分布情况</p>
      <p class="text-center m-b-3 m-t-10 font-bold">{{ state.detail.name }}各学段近视程度分布情况</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>学段</th>
            <th>低度近视人数</th>
            <th>低度近视率</th>
            <th>中度近视人数</th>
            <th>中度近视率</th>
            <th>高度近视人数</th>
            <th>高度近视率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in state.detail.allList" :key="item.prefixName">
            <td>{{ index + 1 }}</td>
            <td>{{ item.prefixName }}</td>
            <td>{{ item.lowMyopiaStdCount }}</td>
            <td>{{ floatToPercent(item.lowMyopiaRate) }}</td>
            <td>{{ item.mediumMyopiaStdCount }}</td>
            <td>{{ floatToPercent(item.mediumMyopiaRate) }}</td>
            <td>{{ item.highMyopiaStdCount }}</td>
            <td>{{ floatToPercent(item.highMyopiaRate) }}</td>
          </tr>
        </tbody>
      </n-table>
    </div>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { getMyopiaInfoByPrefx, getMyopiaInfoByPrefx_r } from '@/api/report/index';

import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaLevel } = userStore.getAreaData;
let state = reactive({
  wmCounts: [],
  decStr: '',
  decStr2: '',
  detail: {}
});
let labelMap1 = {
  kindergartenHighMyopiaRate: '幼儿园',
  primarySchoolHighMyopiaRate: '小学',
  middleSchoolHighMyopiaRate: '初中',
  highSchoolHighMyopiaRate: '高中'
};
let chartData1 = reactive({
  columns: [
    'regionName',
    'kindergartenHighMyopiaRate',
    'primarySchoolHighMyopiaRate',
    'middleSchoolHighMyopiaRate',
    'highSchoolHighMyopiaRate'
  ],
  rows: [
    {
      regionName: '市本级',
      kindergartenHighMyopiaRate: 0,
      primarySchoolHighMyopiaRate: 0,
      middleSchoolHighMyopiaRate: 0,
      highSchoolHighMyopiaRate: 0
    }
  ]
});

let labelMap2 = {
  kindergartenMyopiaRate: '幼儿园',
  primarySchoolMyopiaRate: '小学',
  middleSchoolMyopiaRate: '初中',
  highSchoolMyopiaRate: '高中'
};
let chartData2 = reactive({
  columns: [
    'regionName',
    'kindergartenMyopiaRate',
    'primarySchoolMyopiaRate',
    'middleSchoolMyopiaRate',
    'highSchoolMyopiaRate'
  ],
  rows: [
    {
      regionName: '市本级',
      kindergartenMyopiaRate: 0,
      primarySchoolMyopiaRate: 0,
      middleSchoolMyopiaRate: 0,
      highSchoolMyopiaRate: 0
    }
  ]
});
let myExtend2 = reactive({
  color: [],
  legend: {
    show: false
  },
  tooltip: {
    confine: true,
    formatter: function (params) {
      let str = params[0].axisValue + '<br>';
      params.forEach(v => {
        str =
          str +
          `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background:${
            v.color.colorStops
              ? `linear-gradient(0deg, ${v.color.colorStops[0].color}, ${v.color.colorStops[1].color})`
              : v.color
          }"></span>${v.seriesName}：${(v.value[v.seriesName] * 100).toFixed(2) + '%'}<br>`;
      });
      return str;
    }
  },
  xAxis: {
    show: true,
    boundaryGap: '3%', // 坐标轴两边留白策略
    splitLine: {
      show: false
    }
  },
  yAxis: {
    splitLine: {
      show: true
    },
    axisLine: {
      // 设置轴线的属性
      show: false
    },
    axisLabel: {
      formatter: value => (value * 100).toFixed(0) + '%'
    }
  }
});
let labelMap3 = {
  manCount: '男生',
  womanCount: '女生',
  count: '总人数'
};
let chartData3 = reactive({
  columns: ['prefixName', 'manCount', 'womanCount', 'count'],
  rows: []
});
let labelMap4 = {
  lowMyopiaStdCount: '低度近视',
  mediumMyopiaStdCount: '中度近视',
  highMyopiaStdCount: '高度近视'
};
let chartData4 = reactive({
  columns: ['prefixName', 'lowMyopiaStdCount', 'mediumMyopiaStdCount', 'highMyopiaStdCount'],
  rows: [
    {
      prefixName: '市本级',
      lowMyopiaStdCount: 0,
      mediumMyopiaStdCount: 0,
      highMyopiaStdCount: 0
    }
  ]
});
if (areaLevel == 2) {
  getMyopiaInfoByPrefx({
    planId,
    areaId
  }).then(d => {
    state.detail = d;
    let str = '';
    let str2 = '';
    d.messageList.forEach((v, i) => {
      // 小学近视人数233,614人，近视率为37.42%，泰顺县最高为41.58%，龙湾区最低为33.68%；
      let dec = `${i == 0 ? '' : '；'}${v.prefxName}近视人数${v.myopiaStdCount}人，近视率为${v.myopiaRateStr}，${
        v.maxRegionName
      }最高为${v.maxRegionMyopiaRate}，${v.minRegionName}最低为${v.minRegionMyopiaRate}`;
      str += dec;
      let dec2 = `${i == 0 ? '' : '；'}${v.prefxName}高度近视人数${v.highMyopiaStdCount}人，高度近视率为${
        v.highMyopiaRateStr
      }，${v.highMaxRegionName}最高为${v.highMaxRegionMyopiaRate}，${v.highMinRegionName}最低为${
        v.highMinRegionMyopiaRate
      }`;
      str2 += dec2;
    });
    state.decStr = str;
    state.decStr2 = str2;
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData1.rows = JSON.parse(JSON.stringify(d.dataList));
  });
} else if (areaLevel == 3) {
  getMyopiaInfoByPrefx_r({
    planId,
    areaId
  }).then(d => {
    state.detail = d;
    let str2 = '';
    let str = '';
    d.messageList.forEach((v, i) => {
      let dec = `${i == 0 ? '' : '、'}${v.prefxName}平均近视率是${floatToPercent(v.myopiaRate)}`;
      str2 += dec;
    });
    d.messageList.forEach((v, i) => {
      let dec = `${i == 0 ? '其中，' : '；'}${v.prefxName}近视率最高的学校是${
        v.maxRegionName
      }，近视率为${floatToPercent(v.maxRegionMyopiaRate)}，最低的学校是${v.minRegionName}，近视率为${floatToPercent(
        v.minRegionMyopiaRate
      )}`;
      str += dec;
    });
    state.decStr = str2 + '。' + str;
    state.wmCounts = [];
    d.manList.forEach((v, i) => {
      state.wmCounts.push({
        manCount: v.myopiaStdCount,
        womanCount: d.womanList[i].myopiaStdCount,
        count: v.myopiaStdCount * 1 + d.womanList[i].myopiaStdCount,
        prefixName: v.prefixName
      });
    });
    chartData3.rows = state.wmCounts;
    chartData4.rows = d.allList;
  });
}
</script>

<style scoped lang="less"></style>
