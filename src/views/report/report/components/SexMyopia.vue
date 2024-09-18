<template>
  <div class="w-full">
    <div id="SexMyopia" class="text-base font-bold m-b-1">分男、女近视情况</div>
    <div class="m-b-5 text-sm leading-6">
      {{ areaName }}男生近视率为{{ floatToPercent(state.detail.manMyopiaRate) }}，女生近视率为{{
        floatToPercent(state.detail.womanMyopiaRate)
      }}{{ areaLevel == 1 ? '全省' : '全市'
      }}{{
        state.detail.manMyopiaRate >= state.detail.womanMyopiaRate
          ? '男生近视率高于女生近视率'
          : '女生近视率高于男生近视率'
      }}{{ floatToPercent(Math.abs(state.detail.manMyopiaRate - state.detail.womanMyopiaRate)) }}，{{
        state.detail.maxMyopiaRateDiffArea
      }}{{ state.detail.myopiaDiffRate > 0 ? '女生近视率高于男生近视率' : '男生近视率高于女生近视率'
      }}{{ floatToPercent(Math.abs(state.detail.myopiaDiffRate)) }}差异最大。
    </div>
    <BarChartReport :extend="myExtend" :label-map="labelMap" :chart-data="chartData" height="250px" />
    <p class="text-center m-b-10">{{ areaName }}各县（市、区）男、女近视率</p>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}各县（市、区）男、女生近视情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>县(市、区)</th>
          <th>男-近视人数</th>
          <th>男-近视率</th>
          <th>女-近视人数</th>
          <th>女-近视率</th>
          <th>总-近视人数</th>
          <th>总-近视率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.areaMyopiaInfoList" :key="item.areaName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.areaName }}</td>
          <td>{{ item.manMyopiaStdCount }}</td>
          <td>{{ floatToPercent(item.manMyopiaRate) }}</td>
          <td>{{ item.womanMyopiaStdCount }}</td>
          <td>{{ floatToPercent(item.womanMyopiaRate) }}</td>
          <td>{{ item.myopiaStdCount }}</td>
          <td>{{ floatToPercent(item.myopiaRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <div class="w-full m-t-10">
      <div class="m-b-5 text-sm leading-6">
        {{ areaName }}男生高度近视率为{{ floatToPercent(state.detail.manHighMyopiaRate) }}，女生高度近视率为{{
          floatToPercent(state.detail.womanHighMyopiaRate)
        }}，{{ areaLevel == 1 ? '全省' : '全市'
        }}{{
          state.detail.manHighMyopiaRate >= state.detail.womanHighMyopiaRate
            ? '男生高度近视率高于女生高度近视率'
            : '女生高度近视率高于男生高度近视率'
        }}{{ floatToPercent(Math.abs(state.detail.manHighMyopiaRate - state.detail.womanHighMyopiaRate)) }}，{{
          state.detail.maxHighMyopiaRateDiffArea
        }}{{
          state.detail.highMyopiaDiffRate > 0 ? '女生高度近视率高于男生高度近视率' : '男生高度近视率高于女生高度近视率'
        }}{{ floatToPercent(Math.abs(state.detail.highMyopiaDiffRate)) }}差异最大。
      </div>
      <BarChartReport :extend="myExtend" :label-map="labelMap_1" :chart-data="chartData_1" height="250px" />
      <p class="text-center m-b-10">{{ areaName }}各县(市、区)男、女高度近视率</p>
      <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}各县（市、区）男、女生高度近视情况</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>县(市、区)</th>
            <th>男-高度近视人数</th>
            <th>男-高度近视率</th>
            <th>女-高度高度近视人数</th>
            <th>女-近视率</th>
            <th>总-高度近视人数</th>
            <th>总-高度近视率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in state.detail.areaMyopiaInfoList" :key="item.areaName + item.areaId">
            <td>{{ index + 1 }}</td>
            <td>{{ item.areaName }}</td>
            <td>{{ item.manHighMyopiaStdCount }}</td>
            <td>{{ floatToPercent(item.manHighMyopiaRate) }}</td>
            <td>{{ item.womanHighMyopiaStdCount }}</td>
            <td>{{ floatToPercent(item.womanHighMyopiaRate) }}</td>
            <td>{{ item.highMyopiaStdCount }}</td>
            <td>{{ floatToPercent(item.highMyopiaRate) }}</td>
          </tr>
        </tbody>
      </n-table>
    </div>
    <div class="w-full m-t-10">
      <div v-if="state.decStr1" class="m-b-5 text-sm leading-6">
        {{ areaLevel == 1 ? '全省' : '全市' }}{{ state.decStr1 }}。
      </div>
      <LineChartReport height="250px" width="95%" :extend="myExtend2" :label-map="labelMap2" :chart-data="chartData2" />
      <p class="text-center m-t-3">{{ areaName }}分年级男、女生近视率</p>
      <div class="m-b-5 text-sm leading-6">
        注：高一包含普高一年级和职高一年级，高二包含普高二年级和职高二年级，高三包含普高三年级和职高三年级；大一包含大学本科一年级和大学专科一年级，大二包含大学本科二年级和大学专科二年级，大三包含大学本科三年级和大学专科三年级。
      </div>
    </div>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}分年级男、女生近视情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
          <th>男-近视人数</th>
          <th>男-近视率</th>
          <th>女-近视人数</th>
          <th>女-近视率</th>
          <th>总-近视人数</th>
          <th>总-近视率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.gradeMyopiaInfoList" :key="item.gradeName + item.gradeId">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.manMyopiaStdCount }}</td>
          <td>{{ floatToPercent(item.manMyopiaRate) }}</td>
          <td>{{ item.womanMyopiaStdCount }}</td>
          <td>{{ floatToPercent(item.womanMyopiaRate) }}</td>
          <td>{{ item.myopiaStdCount }}</td>
          <td>{{ floatToPercent(item.myopiaRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <div class="w-full m-t-10">
      <div v-if="state.decStr2" class="m-b-5 text-sm leading-6">
        {{ areaLevel == 1 ? '全省' : '全市' }}{{ state.decStr2 }}。
      </div>
      <LineChartReport
        height="250px"
        width="95%"
        :extend="myExtend2"
        :label-map="labelMap2_1"
        :chart-data="chartData2_1"
      />
      <p class="text-center m-t-3">{{ areaName }}分年级男、女生高度近视率</p>
      <div class="m-b-5 text-sm leading-6">
        注：高一包含普高一年级和职高一年级，高二包含普高二年级和职高二年级，高三包含普高三年级和职高三年级；大一包含大学本科一年级和大学专科一年级，大二包含大学本科二年级和大学专科二年级，大三包含大学本科三年级和大学专科三年级。
      </div>
    </div>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}分年级男、女生高度近视情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
          <th>男-高度近视人数</th>
          <th>男-高度近视率</th>
          <th>女-高度近视人数</th>
          <th>女-高度近视率</th>
          <th>总-高度近视人数</th>
          <th>总-高度近视率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.gradeMyopiaInfoList" :key="item.gradeName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.manHighMyopiaStdCount }}</td>
          <td>{{ floatToPercent(item.manHighMyopiaRate) }}</td>
          <td>{{ item.womanHighMyopiaStdCount }}</td>
          <td>{{ floatToPercent(item.womanHighMyopiaRate) }}</td>
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
import { bar_per, line_per } from '@common/settings/chartSetting';

import { getCityShortSightedBySex } from '@/api/report/index';
import { getCityShortSightedBySexPro } from '@/api/report/index_province';
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
  manMyopiaRate: '男生',
  womanMyopiaRate: '女生',
  myopiaRate: '总计'
};
let chartData = reactive({
  columns: ['areaName', 'manMyopiaRate', 'womanMyopiaRate', 'myopiaRate'],
  rows: [{ areaName: '市本级', manMyopiaRate: 0, womanMyopiaRate: 0, myopiaRate: 0 }]
});
let labelMap_1 = {
  manHighMyopiaRate: '男生',
  womanHighMyopiaRate: '女生',
  highMyopiaRate: '总计'
};
let chartData_1 = reactive({
  columns: ['areaName', 'manHighMyopiaRate', 'womanHighMyopiaRate', 'highMyopiaRate'],
  rows: [{ areaName: '市本级', manHighMyopiaRate: 0, womanHighMyopiaRate: 0, highMyopiaRate: 0 }]
});
let myExtend = bar_per;
let labelMap2 = {
  manMyopiaRate: '男生近视率',
  womanMyopiaRate: '女生近视率',
  myopiaRate: '近视率'
};
let chartData2 = reactive({
  columns: ['gradeName', 'manMyopiaRate', 'womanMyopiaRate', 'myopiaRate'],
  rows: [{ gradeName: '1', manMyopiaRate: 0, womanMyopiaRate: 0, myopiaRate: 0 }]
});
let labelMap2_1 = {
  manHighMyopiaRate: '男生高度近视率',
  womanHighMyopiaRate: '女生高度近视率',
  highMyopiaRate: '高度近视率'
};
let chartData2_1 = reactive({
  columns: ['gradeName', 'manHighMyopiaRate', 'womanHighMyopiaRate', 'highMyopiaRate'],
  rows: [{ gradeName: '1', manHighMyopiaRate: 0, womanHighMyopiaRate: 0, highMyopiaRate: 0 }]
});
let myExtend2 = {
  ...line_per,
  xAxis: {
    axisLabel: {
      interval: 0,
      rotate: 45 // 主要是这个 设置角度即可 - 90 ~ 90 旋转方向也不同
    },
    show: true,
    boundaryGap: '3%', // 坐标轴两边留白策略
    splitLine: {
      show: false
    }
  }
};

let api = areaLevel == 1 ? getCityShortSightedBySexPro : getCityShortSightedBySex;
api({
  level: areaLevel,
  planId: planId,
  id: areaId
}).then(d => {
  console.log(planId, areaId, areaLevel);
  state.detail = d;
  chartData.rows = d.areaMyopiaInfoList;
  chartData_1.rows = JSON.parse(JSON.stringify(d.areaMyopiaInfoList));
  let obj = {};
  d.schoolTypeMyopiaRateGrowthList.forEach(v => {
    if (!obj[v.prefixName]) {
      obj[v.prefixName] = ['', '', '', ''];
    }
    if (v.rateType == 3) {
      obj[v.prefixName][0] = v.growthRate;
    } else if (v.rateType == 4) {
      obj[v.prefixName][1] = v.growthRate;
    }
    if (v.rateType == 5) {
      obj[v.prefixName][2] = v.growthRate;
    } else if (v.rateType == 6) {
      obj[v.prefixName][3] = v.growthRate;
    }
  });
  let str = '';
  let str2 = '';
  console.log('```````````````````', obj);
  Object.keys(obj).forEach(key => {
    if (obj[key][0] !== '' || obj[key][1] !== '') {
      str += `${str ? '，' : ''}${key}各年级男、女平均近视增长率为${floatToPercent(obj[key][0])}、${floatToPercent(
        obj[key][1]
      )}`;
    } else if (obj[key][2] !== '' || obj[key][3] !== '') {
      str2 += `${str ? '，' : ''}${key}各年级男、女平均高度近视增长率为${floatToPercent(obj[key][0])}、${floatToPercent(
        obj[key][1]
      )}`;
    }
  });
  state.decStr1 = str;
  state.decStr2 = str2;
  chartData2.rows = d.gradeMyopiaInfoList;
  chartData2_1.rows = JSON.parse(JSON.stringify(d.gradeMyopiaInfoList));
});
</script>

<style scoped lang="less"></style>
