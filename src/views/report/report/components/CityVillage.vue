<template>
  <div class="w-full">
    <div id="CityVillage" class="text-base font-bold m-b-1">城市、乡镇近视情况</div>
    <div v-if="state.detail.message" class="m-b-5 text-sm leading-6">
      {{ areaName }}在有属地信息标注的{{ state.detail.message.count }}所学校中，{{
        state.detail.message.cityCount
      }}所划分为城市学校（{{ state.detail.message.cityStudentCount }}人）、{{
        state.detail.message.townCount
      }}所划分为乡镇学校（{{
        state.detail.message.townStudentCount ? state.detail.message.townStudentCount : 0
      }}人）。城市学校近视率为{{ floatToPercent(state.detail.message.cityMyopiaRate) }}，乡镇学校近视率为{{
        floatToPercent(state.detail.message.townMyopiaRate)
      }}，城市、乡镇学校近视率相差{{ floatToPercent(state.detail.message.differMyopiaRate) }}。高度近视率分别为{{
        floatToPercent(state.detail.message.cityHighMyopiaRate)
      }}和{{ floatToPercent(state.detail.message.townHighMyopiaRate) }}，相差{{
        floatToPercent(state.detail.message.highDifferMyopiaRate)
      }}。
    </div>
    <BarChart
      :extend="areaLevel == 3 ? myExtend2 : myExtend"
      :label-map="labelMap"
      :chart-data="chartData"
      height="250px"
    />
    <p class="text-center m-b-10">
      {{ areaName }}{{ areaLevel == 2 || areaLevel == 1 ? '各县（市、区）' : '' }}城市、乡镇近视率
    </p>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}各县（市、区）城市、乡镇近视情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>县(市、区)</th>
          <th>城市近视人数</th>
          <th>城市近视率</th>
          <th>乡镇近视人数</th>
          <th>乡镇近视率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.dataList" :key="item.name">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.cityCount }}</td>
          <td>{{ floatToPercent(item.cityMyopiaRate) }}</td>
          <td>{{ item.townCount }}</td>
          <td>{{ floatToPercent(item.townMyopiaRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <div class="text-center m-t-5 m-b-10"></div>
    <BarChart
      :extend="areaLevel == 3 ? myExtend2 : myExtend"
      :label-map="labelMap2"
      :chart-data="chartData2"
      height="250px"
    />
    <p class="text-center m-b-10">{{ areaName }}各县（市、区）城市、乡镇高度近视率</p>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}各县（市、区）城市、乡镇高度近视情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>县(市、区)</th>
          <th>城市高度近视人数</th>
          <th>城市高度近视率</th>
          <th>乡镇高度近视人数</th>
          <th>乡镇高度近视率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.dataList" :key="item.name">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.cityHighCount }}</td>
          <td>{{ floatToPercent(item.cityHighMyopiaRate) }}</td>
          <td>{{ item.townHighCount }}</td>
          <td>{{ floatToPercent(item.townHighMyopiaRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <n-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { bar_per } from '@common/settings/chartSetting';
import { getMyopiaInfoByAreaType, getMyopiaInfoByAreaType_r } from '@/api/report/index';
import { getMyopiaInfoByAreaTypePro } from '@/api/report/index_province';
import { useReportStore } from '@/store/modules/report';
import BarChart from '@common/components/charts/BarChart.vue';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaLevel, areaName } = userStore.getAreaData;
let state = reactive({
  detail: {}
});
let labelMap = {
  cityMyopiaRate: '城市近视率',
  townMyopiaRate: '乡镇近视率'
};
let chartData = reactive({
  columns: ['name', 'cityMyopiaRate', 'townMyopiaRate'],
  rows: [{ name: '市本级', cityMyopiaRate: 0, townMyopiaRate: 0 }]
});
let labelMap2 = {
  cityHighMyopiaRate: '城市高度近视率',
  townHighMyopiaRate: '乡镇高度近视率'
};
let chartData2 = reactive({
  columns: ['name', 'cityHighMyopiaRate', 'townHighMyopiaRate'],
  rows: [{ name: '市本级', cityHighMyopiaRate: 0, townHighMyopiaRate: 0 }]
});
let myExtend = bar_per;
let myExtend2 = {
  ...bar_per,
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.1], // 坐标轴两边留白策略
    splitLine: {
      show: true
    },
    axisLabel: {
      formatter: value => (value * 100).toFixed(0) + '%'
    },
    axisLine: {
      // 设置轴线的属性
      show: false
    }
  },
  yAxis: {
    type: 'category',
    show: true,
    splitLine: {
      show: false
    }
  }
};
if (areaLevel == 1) {
  getMyopiaInfoByAreaTypePro({
    planId,
    provinceId: areaId
  }).then(d => {
    state.detail = d;
    chartData.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
  });
} else if (areaLevel == 2) {
  getMyopiaInfoByAreaType({
    planId,
    areaId
  }).then(d => {
    state.detail = d;
    chartData.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
  });
} else if (areaLevel == 3) {
  getMyopiaInfoByAreaType_r({
    planId,
    areaId
  }).then(d => {
    state.detail = d;
    chartData.rows = JSON.parse(JSON.stringify(d.dataList));
    chartData2.rows = JSON.parse(JSON.stringify(d.dataList));
  });
}
</script>

<style scoped lang="less"></style>
