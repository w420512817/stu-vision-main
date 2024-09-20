<template>
  <div class="w-full">
    <div id="DiopterSpread" class="text-base font-bold m-b-1">屈光度分布情况</div>
    <div class="m-b-5 text-sm leading-6">
      等效球镜为衡量屈光水平的参数，计算公式为：等效球镜=球镜+1/2柱镜。等效球镜为0表示正视水平，正值表示远视水平，负值
      表示近视水平。
    </div>
    <BarChartReport
      :loading="state.loading"
      :extend="myExtend"
      :label-map="labelMap"
      :chart-data="chartData"
      height="250px"
    />
    <p class="text-center m-b-10">{{ areaName }}屈光度分布情况</p>
    <p class="text-center m-b-3 font-bold">{{ areaName }}屈光度分布情况</p>
    <n-table v-if="areaLevel != 6" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>{{ areaLevel == 4 ? '年级' : '班级' }}</th>
          <th>球镜</th>
          <th>等效球镜</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.dataList" :key="item.name">
          <td>{{ index + 1 }}</td>
          <td>
            <div>{{ areaLevel == 4 ? item.gradeName : item.className }}</div>
            <div>{{ item.name }}</div>
          </td>
          <td>{{ item.dpSphAverageValue }}±{{ item.dpSphStandardDeviation }}</td>
          <td>{{ item.eqDpSphAverageValue }}±{{ item.eqDpSphStandardDeviation }}</td>
        </tr>
      </tbody>
    </n-table>
    <n-table v-if="areaLevel == 6" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>学生姓名</th>
          <th>右眼球镜</th>
          <th>左眼球镜</th>
          <th>右眼等效球镜</th>
          <th>左眼等效球镜</th>
        </tr>
      </thead>
      <tbody v-if="state.detail">
        <tr v-for="(item, index) in state.detail.dataList" :key="item.name">
          <td>{{ index + 1 }}</td>
          <td>{{ item.studentName }}</td>
          <td>{{ item.dpOdSph }}</td>
          <td>{{ item.dpOsSph }}</td>
          <td>{{ item.odEqSph }}</td>
          <td>{{ item.osEqSph }}</td>
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

import { getDiopterSituation_s, getDiopterSituation_g, getDiopterSituation_c } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
const userStore = useReportStore();
let { planId, schoolId, schoolType, areaLevel, gradeId, classId, areaName } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});
let labelMap = {
  dpSph: '球镜',
  eqDpSph: '等效球镜'
};
let chartData = reactive({
  columns: ['data', 'dpSph', 'eqDpSph'],
  rows: []
});
let myExtend = {
  ...bar_num,
  xAxis: {
    show: true,
    boundaryGap: '3%', // 坐标轴两边留白策略
    splitLine: {
      show: false
    },
    axisLabel: { interval: 'auto' }
  }
};
if (areaLevel == 4) {
  getDiopterSituation_s({
    planId,
    schoolId,
    schoolType
  }).then(d => {
    state.detail = d;
    let arr = [];
    d?.dpSphList?.forEach(v => {
      arr.push({ data: v.data, dpSph: v.count, eqDpSph: '' });
    });
    d?.eqDpSphList?.forEach(v => {
      let flag = true;
      arr.forEach(vv => {
        if (vv.data == v.data) {
          flag = false;
          vv.eqDpSph = v.count;
        }
      });
      if (flag) {
        arr.push({ data: v.data, dpSph: '', eqDpSph: v.count });
      }
    });
    arr.sort(function (a, b) {
      return a.data - b.data;
    });
    chartData.rows = arr;
  });
} else if (areaLevel == 5) {
  getDiopterSituation_g({
    planId,
    schoolId,
    gradeId,
    schoolType
  }).then(d => {
    state.detail = d;
    let arr = [];
    d?.dpSphList?.forEach(v => {
      arr.push({ data: v.data, dpSph: v.count, eqDpSph: '' });
    });
    d?.eqDpSphList?.forEach(v => {
      let flag = true;
      arr.forEach(vv => {
        if (vv.data == v.data) {
          flag = false;
          vv.eqDpSph = v.count;
        }
      });
      if (flag) {
        arr.push({ data: v.data, dpSph: '', eqDpSph: v.count });
      }
    });
    arr.sort(function (a, b) {
      return a.data - b.data;
    });
    chartData.rows = arr;
  });
} else if (areaLevel == 6) {
  getDiopterSituation_c({
    planId,
    schoolId,
    classId
  }).then(d => {
    state.detail = d;
    let arr = [];
    d?.dpSphList?.forEach(v => {
      arr.push({ data: v.data, dpSph: v.count, eqDpSph: '' });
    });
    d?.eqDpSphList?.forEach(v => {
      let flag = true;
      arr.forEach(vv => {
        if (vv.data == v.data) {
          flag = false;
          vv.eqDpSph = v.count;
        }
      });
      if (flag) {
        arr.push({ data: v.data, dpSph: '', eqDpSph: v.count });
      }
    });
    arr.sort(function (a, b) {
      return a.data - b.data;
    });
    chartData.rows = arr;
  });
}
</script>

<style scoped lang="less"></style>
