<template>
  <div class="w-full">
    <div id="DiffAge" class="text-base font-bold m-b-1">不同年龄近视情况</div>
    <div class="m-b-5 text-sm leading-6">近视率随年龄的增长持续升高，高度近视率随年龄增长呈指数增长趋势。</div>
    <LineChartReport height="250px" width="95%" :extend="myExtend2" :label-map="labelMap2" :chart-data="chartData2" />
    <p class="text-center m-b-10">{{ areaName }}不同年龄近视率</p>
    <LineChartReport height="250px" width="95%" :extend="myExtend2" :label-map="labelMap" :chart-data="chartData" />
    <p class="text-center m-b-10">{{ areaName }}不同年龄高度近视率</p>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}不同年龄近视率</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年龄</th>
          <th>近视人数</th>
          <th>近视率</th>
          <th>高度近视人数</th>
          <th>高度近视率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.dataList" :key="item.name">
          <td>{{ index + 1 }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.myopiaCount }}</td>
          <td>{{ floatToPercent(item.myopiaMyopiaRate) }}</td>
          <td>{{ item.highMyopiaCount }}</td>
          <td>{{ floatToPercent(item.highMyopiaMyopiaRate) }}</td>
        </tr>
      </tbody>
    </n-table>

    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { line_per } from '@common/settings/chartSetting';
import { getMyopiaInfoByAge, getMyopiaInfoByAge_r } from '@/api/report/index';
import { getMyopiaInfoByAgePro } from '@/api/report/index_province';
import { reactive } from 'vue';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaLevel, areaName } = userStore.getAreaData;
let state = reactive({
  detail: {}
});
let labelMap2 = {
  myopiaMyopiaRate: '近视率'
};
let chartData2 = reactive({
  columns: ['age', 'myopiaMyopiaRate'],
  rows: [{ age: '0', myopiaMyopiaRate: 0 }]
});
let labelMap = {
  highMyopiaMyopiaRate: '高度近视率'
};
let chartData = reactive({
  columns: ['age', 'highMyopiaMyopiaRate'],
  rows: [{ age: '0', highMyopiaMyopiaRate: 0 }]
});
let myExtend2 = line_per;

if (areaLevel == 1) {
  getMyopiaInfoByAgePro({
    planId,
    provinceId: areaId
  }).then(d => {
    state.detail = d;
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData.rows = JSON.parse(JSON.stringify(d.dataList));
  });
} else if (areaLevel == 2) {
  getMyopiaInfoByAge({
    planId,
    areaId
  }).then(d => {
    state.detail = d;
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData.rows = JSON.parse(JSON.stringify(d.dataList));
  });
} else if (areaLevel == 3) {
  getMyopiaInfoByAge_r({
    planId,
    areaId
  }).then(d => {
    state.detail = d;
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData.rows = JSON.parse(JSON.stringify(d.dataList));
  });
}
</script>

<style scoped lang="less"></style>
