<template>
  <div class="w-full">
    <div id="ThreeTypes" class="text-base font-bold m-b-1">近视、远视、散光情况</div>
    <div v-if="state.detail" class="m-b-5 text-sm leading-6">
      {{ areaName }}本次筛查除发现近视学生{{ state.detail.myopiaStdCount }}人外，还发现远视学生{{
        state.detail.hyperopiaStdCount
      }}人（远视率为{{ floatToPercent(state.detail.hyperopiaRate) }}），散光学生{{
        state.detail.astigmatismStdCount
      }}人（散光率为{{ floatToPercent(state.detail.astigmatismRate) }}），累计学生数{{
        floatToPercent(state.detail.totalStdCount)
      }}人，占比为{{ floatToPercent(state.detail.totalRate) }}。
    </div>
    <BarChartReport :extend="myExtend" :label-map="labelMap" :chart-data="chartData" height="250px" />
    <p class="text-center m-b-10">{{ areaName }}各学段近视、远视、散光情况</p>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}各学段视近视、远视、散光情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
          <th>近视人数 / 近视率</th>
          <th>远视人数 / 远视率</th>
          <th>散光人数 / 散光率</th>
          <th>合计(去重) / 百分比</th>
        </tr>
      </thead>
      <tbody v-if="state.detail">
        <tr v-for="(item, index) in state.detail.schoolPrefixMyopiaInfoTypes" :key="item.prefix">
          <td>{{ index + 1 }}</td>
          <td>{{ item.prefixName }}</td>
          <td>{{ item.myopiaStdCount }} / {{ floatToPercent(item.myopiaRate) }}</td>
          <td>{{ item.hyperopiaStdCount }} / {{ floatToPercent(item.hyperopiaRate) }}</td>
          <td>{{ item.astigmatismStdCount }} / {{ floatToPercent(item.astigmatismRate) }}</td>
          <td>{{ item.totalStdCount }} / {{ floatToPercent(item.totalRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <div v-if="areaLevel == 2" class="w-full m-t-10">
      <BarChartReport :extend="myExtend" :label-map="labelMap2" :chart-data="chartData2" height="250px" />
      <p class="text-center m-t-3">{{ areaName }}各县(市、区)近视、远视、散光情况</p>
    </div>
    <p v-if="areaLevel == 2" class="text-center m-t-5 m-b-3 font-bold">
      {{ areaName }}各县(市、区)近视、远视、散光情况
    </p>
    <n-table v-if="areaLevel == 2" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>县(市、区)</th>
          <th>近视人数 / 近视率</th>
          <th>远视人数 / 远视率</th>
          <th>散光人数 / 散光率</th>
          <th>合计(去重) / 百分比</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.regionMyopiaInfoTypes" :key="item.region">
          <td>{{ index + 1 }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.myopiaStdCount }} / {{ floatToPercent(item.myopiaRate) }}</td>
          <td>{{ item.hyperopiaStdCount }} / {{ floatToPercent(item.hyperopiaRate) }}</td>
          <td>{{ item.astigmatismStdCount }} / {{ floatToPercent(item.astigmatismRate) }}</td>
          <td>{{ item.totalStdCount }} / {{ floatToPercent(item.totalRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { getMyopiaTypeInfo, getMyopiaTypeInfo_r } from '@/api/report/index';

import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaLevel, areaName } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});
let labelMap = {
  myopiaStdCount: '近视',
  hyperopiaStdCount: '远视',
  astigmatismStdCount: '散光',
  totalStdCount: '合计(去重)'
};
let chartData = reactive({
  columns: ['prefixName', 'myopiaStdCount', 'hyperopiaStdCount', 'astigmatismStdCount', 'totalStdCount'],
  rows: [{ prefixName: '小学', myopiaStdCount: 0, hyperopiaStdCount: 0, astigmatismStdCount: 0, totalStdCount: 0 }]
});
let myExtend = {
  color: [],
  legend: {
    show: true
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
    }
  }
};
let labelMap2 = {
  myopiaStdCount: '近视',
  hyperopiaStdCount: '远视',
  astigmatismStdCount: '散光',
  totalStdCount: '合计(去重)'
};
let chartData2 = reactive({
  columns: ['region', 'myopiaStdCount', 'hyperopiaStdCount', 'astigmatismStdCount', 'totalStdCount'],
  rows: [{ region: '小学', myopiaStdCount: 0, hyperopiaStdCount: 0, astigmatismStdCount: 0, totalStdCount: 0 }]
});
if (areaLevel == 2) {
  getMyopiaTypeInfo({
    planId,
    cityId: areaId
  }).then(d => {
    if (d) {
      state.detail = d;
      chartData.rows = d.schoolPrefixMyopiaInfoTypes;
      chartData2.rows = d.regionMyopiaInfoTypes;
    }
  });
} else if (areaLevel == 3) {
  getMyopiaTypeInfo_r({
    planId,
    regionId: areaId
  }).then(d => {
    if (d) {
      state.detail = d;
      // chartData={
      //   columns: ['prefixName', 'myopiaStdCount', 'hyperopiaStdCount', 'astigmatismStdCount', 'totalStdCount'],
      //   rows: [{ prefixName: '小学', myopiaStdCount: 0, hyperopiaStdCount: 0, astigmatismStdCount: 0, totalStdCount: 0 }]
      // }
      chartData.rows = d.schoolPrefixMyopiaInfoTypes;
      // chartData2.rows = d.regionMyopiaInfoTypes;
    }
  });
}
</script>

<style scoped lang="less"></style>
