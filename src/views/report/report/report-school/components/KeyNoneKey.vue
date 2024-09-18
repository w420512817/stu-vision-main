<template>
  <div class="w-full">
    <div id="KeyNoneKey" class="text-base font-bold m-b-1">重点非重点近视情况</div>
    <BarChartReport :extend="myExtend" :label-map="labelMap" :chart-data="chartData" height="250px" />
    <p class="text-center m-b-10">{{ areaName }}重点非重点近视情况</p>
    <BarChartReport :extend="myExtend" :label-map="labelMap2" :chart-data="chartData2" height="250px" />
    <p class="text-center m-b-10">{{ areaName }}重点非重点高度近视情况</p>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}重点非重点近视情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>学段</th>
          <th>学校等级</th>
          <th>近视人数</th>
          <th>近视率</th>
          <th>高度近视人数</th>
          <th>高度近视率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail" :key="item.prefixName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.prefixName }}</td>
          <td>{{ item.schoolLevelName }}</td>
          <td>{{ item.myopiaStdCount }}</td>
          <td>{{ floatToPercent(item.myopiaRate) }}</td>
          <td>{{ item.highMyopiaStdCount }}</td>
          <td>{{ floatToPercent(item.highMyopiaRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

import { getKeySchoolMyopiaSituation } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaLevel, areaName } = userStore.getAreaData;
let state = reactive({
  decStr1: '',
  decStr2: '',
  detail: {}
});
let labelMap = {
  myopiaRate: '近视率'
};
let chartData = reactive({
  columns: ['name', 'myopiaRate'],
  rows: [{ name: '1', myopiaRate: 0 }]
});
let labelMap2 = {
  highMyopiaRate: '高度近视率'
};
let chartData2 = reactive({
  columns: ['name', 'highMyopiaRate'],
  rows: [{ name: '1', highMyopiaRate: 0 }]
});
let myExtend = {
  color: [],
  legend: {
    show: true
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
};
getKeySchoolMyopiaSituation({
  reportLevel: areaLevel,
  planId,
  id: areaId
}).then(d => {
  console.log(planId, areaId);
  state.detail = d;
  chartData.rows = d;
  chartData2.rows = JSON.parse(JSON.stringify(d));
});
</script>

<style scoped lang="less"></style>
