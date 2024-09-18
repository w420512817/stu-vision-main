<template>
  <div class="w-full">
    <div id="DiffSchoolType" class="text-base font-bold m-b-1">不同学校类型近视情况</div>
    <div v-if="state.detail" class="m-b-5 text-sm leading-6">{{ areaName }}{{ state.decStr }}。</div>
    <BarChartReport :extend="myExtend" :label-map="labelMap" :chart-data="chartData" height="250px" />
    <p class="text-center m-b-10">{{ areaName }}不同学校类型近视率</p>
    <BarChartReport :extend="myExtend" :label-map="labelMap2" :chart-data="chartData2" height="250px" />
    <p class="text-center m-b-10">{{ areaName }}不同学校类型高度近视率</p>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}不同学校类型近视率</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>学段</th>
          <th>学校类型</th>
          <th>近视人数</th>
          <th>近视率</th>
          <th>高度近视人数</th>
          <th>高度近视率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.dataList" :key="item.name">
          <td>{{ index + 1 }}</td>
          <td>{{ item.prefixName }}</td>
          <td>{{ item.schoolTypeName }}</td>
          <td>{{ item.myopiaCount }}</td>
          <td>{{ floatToPercent(item.myopiaRate) }}</td>
          <td>{{ item.highMyopiaCount }}</td>
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
import { bar_per } from '@common/settings/chartSetting';
import { getMyopiaInfoBySchoolType, getMyopiaInfoBySchoolType_r } from '@/api/report/index';
import { getMyopiaInfoBySchoolTypePro } from '@/api/report/index_province';
import { useReportStore } from '@/store/modules/report';

import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaLevel, areaName } = userStore.getAreaData;
let state = reactive({
  decStr: '',
  detail: {}
});
let labelMap = {
  myopiaRate: '近视率'
};
let chartData = reactive({
  columns: ['name', 'myopiaRate'],
  rows: [{ name: '市本级', myopiaRate: 0 }]
});
let labelMap2 = {
  highMyopiaRate: '高度近视率'
};
let chartData2 = reactive({
  columns: ['name', 'highMyopiaRate'],
  rows: [{ name: '市本级', highMyopiaRate: 0 }]
});
let myExtend = bar_per;

if (areaLevel == 1) {
  getMyopiaInfoBySchoolTypePro({
    planId,
    provinceId: areaId
  }).then(d => {
    state.detail = d;
    let str = '共有';
    d.messageList.forEach((v, i) => {
      str += `${i == 0 ? '' : ','}${v.schoolTypeName}学校${v.schoolTypeCount}所`;
      v.prefxSchoolTypeVOS.forEach((vv, ii) => {
        str += `${ii == 0 ? '(' : '、'}${vv.prefixName}${vv.prefxSchoolTypeCount}所${
          ii == v.prefxSchoolTypeVOS.length - 1 ? ')' : ''
        }`;
      });
    });
    state.decStr = str;
    chartData.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
  });
} else if (areaLevel == 2) {
  getMyopiaInfoBySchoolType({
    planId,
    areaId
  }).then(d => {
    state.detail = d;
    let str = '共有';
    d.messageList.forEach((v, i) => {
      str += `${i == 0 ? '' : ','}${v.schoolTypeName}学校${v.schoolTypeCount}所`;
      v.prefxSchoolTypeVOS.forEach((vv, ii) => {
        str += `${ii == 0 ? '(' : '、'}${vv.prefixName}${vv.prefxSchoolTypeCount}所${
          ii == v.prefxSchoolTypeVOS.length - 1 ? ')' : ''
        }`;
      });
    });
    state.decStr = str;
    chartData.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
  });
} else if (areaLevel == 3) {
  getMyopiaInfoBySchoolType_r({
    planId,
    areaId
  }).then(d => {
    state.detail = d;
    let str = '共有';
    d.messageList.forEach((v, i) => {
      str += `${i == 0 ? '' : ','}${v.schoolTypeName}学校${v.schoolTypeCount}所`;
      v.prefxSchoolTypeVOS.forEach((vv, ii) => {
        str += `${ii == 0 ? '(' : '、'}${vv.prefixName}${vv.prefxSchoolTypeCount}所${
          ii == v.prefxSchoolTypeVOS.length - 1 ? ')' : ''
        }`;
      });
    });
    state.decStr = str;
    chartData.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
  });
}
</script>

<style scoped lang="less"></style>
