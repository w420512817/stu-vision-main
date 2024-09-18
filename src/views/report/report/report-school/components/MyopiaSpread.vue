<template>
  <div class="w-full">
    <div id="MyopiaSpread" class="text-base font-bold m-b-1">视力分布情况</div>
    <BarChartReport
      :loading="state.loading"
      :extend="myExtend"
      :label-map="labelMap"
      :chart-data="chartData"
      height="250px"
    />
    <p class="text-center m-b-10">{{ areaName }}视力分布情况</p>
    <p class="text-center m-b-3 font-bold">{{ areaName }}视力分布情况</p>
    <n-table v-if="areaLevel != 6" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>视力</th>
          <th>眼数</th>
          <th>百分比</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.dataList" :key="item.vision">
          <td>{{ index + 1 }}</td>
          <td>{{ item.vision }}</td>
          <td>{{ item.visionNum }}</td>
          <td>{{ floatToPercent(item.rate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <n-table v-if="areaLevel == 6" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>学生姓名</th>
          <th>右眼视力</th>
          <th>左眼视力</th>
        </tr>
      </thead>
      <tbody v-if="state.detail">
        <tr v-for="(item, index) in state.detail.tableList" :key="item.vision">
          <td>{{ index + 1 }}</td>
          <td>{{ item.studentName }}</td>
          <td>{{ item.odVision }}</td>
          <td>{{ item.osVision }}</td>
        </tr>
      </tbody>
    </n-table>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { bar_num } from '@common/settings/chartSetting';
import { getVisionDistribute_s, getVisionDistribute_g, getVisionDistribute_c } from '@/api/report/index';

import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, schoolId, schoolType, areaLevel, gradeId, areaName, classId } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});
let labelMap = {
  visionNum: '眼数'
};
let chartData = reactive({
  columns: ['vision', 'visionNum'],
  rows: [{ vision: '5.1', visionNum: 0 }]
});
let myExtend = { ...bar_num };
if (areaLevel == 4) {
  getVisionDistribute_s({
    planId,
    schoolId,
    schoolType
  }).then(d => {
    state.detail = d;
    chartData.rows = d.dataList;
  });
} else if (areaLevel == 5) {
  getVisionDistribute_g({
    planId,
    schoolId,
    schoolType,
    gradeId
  }).then(d => {
    state.detail = d;
    chartData.rows = d.dataList;
  });
} else if (areaLevel == 6) {
  getVisionDistribute_c({
    planId,
    schoolId,
    classId
  }).then(d => {
    state.detail = d;
    chartData.rows = d.dataList;
  });
}
</script>

<style scoped lang="less"></style>
