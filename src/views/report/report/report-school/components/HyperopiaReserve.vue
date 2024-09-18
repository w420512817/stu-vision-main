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
    <p class="text-center">
      {{ areaName }}{{ areaLevel == 4 ? '各年级' : areaLevel == 5 ? '各班级' : '' }}远视储备情况人数统计
    </p>
    <p class="text-center m-b-10 text-gray-400">注：只要有一只眼睛远视储备不足则判断该学生远视储备不足</p>
    <BarChartReport
      :loading="state.loading"
      :extend="myExtend"
      :label-map="labelMap2"
      :stack="true"
      :chart-data="chartData2"
      height="250px"
    />
    <p class="text-center m-t-5 m-b-10">
      {{ areaName }}{{ areaLevel == 4 ? '各年级' : areaLevel == 5 ? '各班级' : '' }}远视储备情况眼睛数量统计
    </p>
    <p class="text-center m-t-5 m-b-3 font-bold">
      {{ areaName }}{{ areaLevel == 4 ? '各年级' : areaLevel == 5 ? '各班级' : '' }}远视储备情况
    </p>
    <n-table v-if="areaLevel == 6" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>学生姓名</th>
          <th>远视储备情况</th>
        </tr>
      </thead>
      <tbody v-if="state.detail">
        <tr v-for="(item, index) in state.detail.studentHyperopiaReserveInfos" :key="item.studentName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.studentName }}</td>
          <td
            :style="{
              background: !item.hyperopiaReservesStatus ? '#2e4453' : '',
              color: !item.hyperopiaReservesStatus ? '#fff' : ''
            }"
          >
            {{ item.hyperopiaReservesStatus ? '足够' : '不足' }}
          </td>
        </tr>
      </tbody>
    </n-table>
    <n-table v-if="areaLevel != 6" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>{{ areaLevel == 4 ? '年级' : '班级' }}</th>
          <th>远视储备足够(人数)</th>
          <th>远视储备不足(人数)</th>
          <th>远视储备足够(眼数)</th>
          <th>远视储备不足(眼数)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail" :key="item.gradeId">
          <td>{{ index + 1 }}</td>
          <td>{{ areaLevel == 4 ? item.gradeName : item.className }}</td>
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

import {
  getSchoolHyperopiaReserve_s,
  getSchoolHyperopiaReserve_g,
  getSchoolHyperopiaReserve_c
} from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
const userStore = useReportStore();
let { planId, areaName, schoolId, areaLevel, gradeId, classId } = userStore.getAreaData;
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
  rows: []
});
let labelMap2 = {
  hyperopiaReservesEnoughNum: '远视储备足够',
  hyperopiaReservesNotEnoughNum: '远视储备不足'
};
let chartData2 = reactive({
  columns: ['gradeName', 'hyperopiaReservesEnoughNum', 'hyperopiaReservesNotEnoughNum'],
  rows: []
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
if (areaLevel == 4) {
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
    chartData.rows = copyData.filter(v => v.gradeName != '总计');
    chartData2.rows = JSON.parse(JSON.stringify(copyData)).filter(v => v.gradeName != '总计');
  });
} else if (areaLevel == 5) {
  getSchoolHyperopiaReserve_g({
    planId,
    id: gradeId,
    orgId: schoolId
  }).then(d => {
    chartData.columns = ['className', 'hyperopiaReservesEnough', 'hyperopiaReservesNotEnough'];
    chartData2.columns = ['className', 'hyperopiaReservesEnoughNum', 'hyperopiaReservesNotEnoughNum'];
    state.detail = d;
    let copyData = JSON.parse(JSON.stringify(d));
    copyData.forEach(v => {
      v.hyperopiaReservesEnough = v.hyperopiaReservesEnough * -1;
      v.hyperopiaReservesEnoughNum = v.hyperopiaReservesEnoughNum * -1;
    });
    chartData.rows = copyData.filter(v => v.className != '总计');
    chartData2.rows = JSON.parse(JSON.stringify(copyData)).filter(v => v.className != '总计');
  });
} else if (areaLevel == 6) {
  getSchoolHyperopiaReserve_c({
    planId,
    id: classId
  }).then(d => {
    chartData.columns = ['className', 'hyperopiaReservesEnough', 'hyperopiaReservesNotEnough'];
    chartData2.columns = ['className', 'hyperopiaReservesEnoughNum', 'hyperopiaReservesNotEnoughNum'];
    state.detail = d;
    let copyData = JSON.parse(JSON.stringify([d]));
    copyData.forEach(v => {
      v.hyperopiaReservesEnough = v.hyperopiaReservesEnough * -1;
      v.hyperopiaReservesEnoughNum = v.hyperopiaReservesEnoughNum * -1;
    });
    chartData.rows = copyData.filter(v => v.className != '总计');
    chartData2.rows = JSON.parse(JSON.stringify(copyData)).filter(v => v.className != '总计');
  });
}
</script>

<style scoped lang="less"></style>
