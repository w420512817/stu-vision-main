<template>
  <div class="w-full">
    <div id="HyperopiaReserve" class="text-base font-bold m-b-1">远视储备情况</div>
    <div class="m-b-5 text-sm leading-6">
      10岁及以下儿童生理情况下眼屈光为远视状态，并随年龄增长向正视化转变。6岁及以下儿童，眼屈光在100-300度之间（等效球镜为1.00D-3.00D）；7-10岁儿童，眼屈光在25-300度之间（等效球镜为0.25D-3.00D）。
    </div>
    <BarChartReport
      :loading="state.loading"
      :extend="myExtend"
      :label-map="labelMap"
      :stack="true"
      :chart-data="chartData"
      height="250px"
    />
    <p class="text-center">{{ areaName }}各年级远视储备情况人数统计</p>
    <p class="text-center m-b-10 text-gray-400">注：只要有一只眼睛远视储备不足则判断该学生远视储备不足</p>
    <BarChartReport
      :loading="state.loading"
      :extend="myExtend"
      :label-map="labelMap2"
      :stack="true"
      :chart-data="chartData2"
      height="250px"
    />
    <p class="text-center m-t-5 m-b-10">{{ areaName }}各年级远视储备情况眼睛数量统计</p>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}各年级远视储备情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
          <th>远视储备足够(人数)</th>
          <th>远视储备不足(人数)</th>
          <th>远视储备足够(眼数)</th>
          <th>远视储备不足(眼数)</th>
        </tr>
      </thead>
      <tbody v-if="areaLevel == 2 || areaLevel == 1">
        <tr v-for="(item, index) in state.detail.gradeHyperopiaReserveInfos" :key="item.gradeId">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.hyperopiaReservesEnough }}</td>
          <td>{{ item.hyperopiaReservesNotEnough }}</td>
          <td>{{ item.hyperopiaReservesEnoughNum }}</td>
          <td>{{ item.hyperopiaReservesNotEnoughNum }}</td>
        </tr>
      </tbody>
      <tbody v-if="areaLevel == 4">
        <tr v-for="(item, index) in state.detail" :key="item.gradeId">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.hyperopiaReservesEnough }}</td>
          <td>{{ item.hyperopiaReservesNotEnough }}</td>
          <td>{{ item.hyperopiaReservesEnoughNum }}</td>
          <td>{{ item.hyperopiaReservesNotEnoughNum }}</td>
        </tr>
      </tbody>
      <tbody v-if="areaLevel == 3">
        <tr v-for="(item, index) in state.detail" :key="item.gradeId">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.hyperopiaReservesEnough }}</td>
          <td>{{ item.hyperopiaReservesNotEnough }}</td>
          <td>{{ item.hyperopiaReservesEnoughNum }}</td>
          <td>{{ item.hyperopiaReservesNotEnoughNum }}</td>
        </tr>
      </tbody>
    </n-table>
    <p v-if="areaLevel == 2 || areaLevel == 1" class="text-center m-t-5 m-b-3 font-bold">
      {{ areaName }}各县（市、区）远视储备情况
    </p>
    <n-table v-if="areaLevel == 2 || areaLevel == 1" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>县(市、区)</th>
          <th>远视储备足够(人数)</th>
          <th>远视储备不足(人数)</th>
          <th>远视储备足够(眼数)</th>
          <th>远视储备不足(眼数)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.areaHyperopiaReserveInfos" :key="item.regionId">
          <td>{{ index + 1 }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.hyperopiaReservesEnough }}</td>
          <td>{{ item.hyperopiaReservesNotEnough }}</td>
          <td>{{ item.hyperopiaReservesEnoughNum }}</td>
          <td>{{ item.hyperopiaReservesNotEnoughNum }}</td>
        </tr>
      </tbody>
    </n-table>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

import { getCityHyperopiaReserve, getRegionHyperopiaReserve_r, getSchoolHyperopiaReserve_s } from '@/api/report/index';
import { getCityHyperopiaReservePro } from '@/api/report/index_province';
import { useReportStore } from '@/store/modules/report';
const userStore = useReportStore();
let { planId, areaId, areaLevel, areaName, schoolId } = userStore.getAreaData;
const state = reactive({
  loading: false,
  detail: {}
});
let labelMap = {
  hyperopiaReservesEnough: '远视储备足够',
  hyperopiaReservesNotEnough: '远视储备不足'
};
let chartData = reactive({
  columns: ['gradeName', 'hyperopiaReservesEnough', 'hyperopiaReservesNotEnough'],
  rows: [{ gradeName: '一年级', hyperopiaReservesEnough: '', hyperopiaReservesNotEnough: '' }]
});
let labelMap2 = {
  hyperopiaReservesEnoughNum: '远视储备足够',
  hyperopiaReservesNotEnoughNum: '远视储备不足'
};
let chartData2 = reactive({
  columns: ['gradeName', 'hyperopiaReservesEnoughNum', 'hyperopiaReservesNotEnoughNum'],
  rows: [{ gradeName: '一年级', hyperopiaReservesEnoughNum: '', hyperopiaReservesNotEnoughNum: '' }]
});
let myExtend = {
  grid: {
    right: '5%'
  },
  tooltip: {
    confine: true,
    formatter: function (params) {
      console.log(params);
      let str = params[0].axisValue + '<br>';
      params.forEach(v => {
        str =
          str +
          `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background:${
            v.color.colorStops
              ? `linear-gradient(0deg, ${v.color.colorStops[0].color}, ${v.color.colorStops[1].color})`
              : v.color
          }"></span>${v.seriesName}：${Math.abs(v.data[v.seriesName])}<br>`;
      });
      return str;
    }
  },
  legend: {
    show: true
  },
  xAxis: {
    type: 'value',
    show: true,
    boundaryGap: '5%', // 坐标轴两边留白策略
    axisTick: {
      show: false
    },
    splitLine: {
      show: true
    },
    axisLabel: {
      formatter: value => Math.abs(value)
    }
  },
  yAxis: {
    type: 'category',
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      // 设置轴线的属性
      show: false
    }
  }
};

if (areaLevel == 1) {
  getCityHyperopiaReservePro({
    planId,
    id: areaId
  }).then(d => {
    state.detail = d;
    let copyData = JSON.parse(JSON.stringify(d.gradeHyperopiaReserveInfos));
    copyData.forEach(v => {
      v.hyperopiaReservesEnough = v.hyperopiaReservesEnough * -1;
      v.hyperopiaReservesEnoughNum = v.hyperopiaReservesEnoughNum * -1;
    });
    chartData.rows = JSON.parse(JSON.stringify(copyData));
    chartData2.rows = JSON.parse(JSON.stringify(copyData));
  });
} else if (areaLevel == 2) {
  getCityHyperopiaReserve({
    planId,
    id: areaId
  }).then(d => {
    state.detail = d;
    let copyData = JSON.parse(JSON.stringify(d.gradeHyperopiaReserveInfos));
    copyData.forEach(v => {
      v.hyperopiaReservesEnough = v.hyperopiaReservesEnough * -1;
      v.hyperopiaReservesEnoughNum = v.hyperopiaReservesEnoughNum * -1;
    });
    chartData.rows = JSON.parse(JSON.stringify(copyData));
    chartData2.rows = JSON.parse(JSON.stringify(copyData));
  });
} else if (areaLevel == 3) {
  getRegionHyperopiaReserve_r({
    planId,
    id: areaId
  }).then(d => {
    state.detail = d;
    let copyData = JSON.parse(JSON.stringify(d));
    copyData.forEach(v => {
      v.hyperopiaReservesEnough = v.hyperopiaReservesEnough * -1;
      v.hyperopiaReservesEnoughNum = v.hyperopiaReservesEnoughNum * -1;
    });
    chartData.rows = JSON.parse(JSON.stringify(copyData));
    chartData2.rows = JSON.parse(JSON.stringify(copyData));
  });
} else if (areaLevel == 4) {
  getSchoolHyperopiaReserve_s({
    planId,
    id: schoolId
  }).then(d => {
    state.detail = d;
    let copyData = JSON.parse(JSON.stringify(d));
    copyData.forEach(v => {
      v.hyperopiaReservesEnough = v.hyperopiaReservesEnough * -1;
      v.hyperopiaReservesEnoughNum = v.hyperopiaReservesEnoughNum * -1;
    });
    chartData.rows = JSON.parse(JSON.stringify(copyData)).filter(v => v.gradeName != '总计');
    chartData2.rows = JSON.parse(JSON.stringify(copyData)).filter(v => v.gradeName != '总计');
  });
}
</script>

<style scoped lang="less"></style>
