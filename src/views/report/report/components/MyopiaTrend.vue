<template>
  <div class="w-full">
    <div id="MyopiaTrend" class="text-base font-bold m-b-1">近视率趋势</div>
    <LineChartReport height="250px" width="95%" :extend="myExtend2" :label-map="labelMap2" :chart-data="chartData2" />
    <p class="text-center m-t-5 m-b-10">{{ areaName }}近视率趋势</p>
    <LineChartReport height="250px" width="95%" :extend="myExtend2" :label-map="labelMap3" :chart-data="chartData3" />
    <p class="text-center m-t-5 m-b-10">{{ areaName }}低度近视率趋势</p>
    <LineChartReport height="250px" width="95%" :extend="myExtend2" :label-map="labelMap4" :chart-data="chartData4" />
    <p class="text-center m-t-5 m-b-10">{{ areaName }}中度近视率趋势</p>
    <LineChartReport height="250px" width="95%" :extend="myExtend2" :label-map="labelMap5" :chart-data="chartData5" />
    <p class="text-center m-t-5 m-b-10">{{ areaName }}高度近视率趋势</p>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { getMyopiaTrend_s } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { line_per } from '@common/settings/chartSetting';

const userStore = useReportStore();
let { planId, areaLevel, areaName, schoolId, schoolType } = userStore.getAreaData;
let labelMap2 = {
  myopiaRate: '近视率',
  manMyopiaRate: '男生近视率',
  womanMyopiaRate: '女生近视率'
};
let chartData2 = reactive({
  columns: ['planName', 'myopiaRate', 'manMyopiaRate', 'womanMyopiaRate'],
  rows: []
});
let labelMap3 = {
  lowMyopiaRate: '低度近视率',
  manLowMyopiaRate: '男生低度近视率',
  womanLowMyopiaRate: '女生低度近视率'
};
let chartData3 = reactive({
  columns: ['planName', 'lowMyopiaRate', 'manLowMyopiaRate', 'womanLowMyopiaRate'],
  rows: []
});
let labelMap4 = {
  mediumMyopiaRate: '中度近视率',
  manMediumMyopiaRate: '男生中度近视率',
  womanMediumMyopiaRate: '女生中度近视率'
};
let chartData4 = reactive({
  columns: ['planName', 'mediumMyopiaRate', 'manMediumMyopiaRate', 'womanMediumMyopiaRate'],
  rows: []
});
let labelMap5 = {
  highMyopiaRate: '高度近视率',
  manHighMyopiaRate: '男生高度近视率',
  womanHighMyopiaRate: '女生高度近视率'
};
let chartData5 = reactive({
  columns: ['planName', 'highMyopiaRate', 'manHighMyopiaRate', 'womanHighMyopiaRate'],
  rows: []
});
let myExtend2 = {
  ...line_per,
  xAxis: {
    axisLabel: {
      show: true,
      textStyle: {
        fontSize: 12 // 更改坐标轴文字大小
      },
      formatter: function (val) {
        let strs = val.split(''); // 字符串数组
        let str = '';
        for (let i = 0, s; (s = strs[i++]); ) {
          // 遍历字符串数组
          str += s;
          if (!(i % 5)) str += '\n'; // 按需要求余
        }
        if (str.substr(-1, 2) == '\n') {
          str = str.slice(0, -1);
        }
        return str;
      }
    }
  }
};
if (areaLevel == 4) {
  getMyopiaTrend_s({
    planId,
    schoolId,
    schoolType
  }).then(d => {
    chartData2.rows = JSON.parse(JSON.stringify(d.planTrends));
    chartData3.rows = JSON.parse(JSON.stringify(d.planTrends));
    chartData4.rows = JSON.parse(JSON.stringify(d.planTrends));
    chartData5.rows = JSON.parse(JSON.stringify(d.planTrends));
  });
}
</script>

<style scoped lang="less"></style>
