<template>
  <div class="w-full">
    <div id="ScreenState" class="text-base font-bold m-b-1">筛查情况</div>
    <div class="m-b-5 text-sm leading-6">
      本次筛查总筛查率为98.12%，视力筛查率为98.12%，屈光筛查率为98.23%。其中，总筛查率为96%-100%的学校有xx所，总筛查率90%-95%的学校有xx所，总筛查率低于90%的学校有xx所。
    </div>
    <div class="m-b-5 text-sm leading-6">
      经统计，本次筛查xx学校（小学部）总筛查率为99.77%，视力和屈光都已筛查人数2521人；其中，视力筛查率为99.77%，视力已筛查人数1254人；屈光筛查率为99.77%，屈光已筛查人数2541人。视力未筛查人数222人，屈光未筛查人数121人，一年级视力未筛查人数最多为25人，六年级屈光未筛查人数最多为131人。（班级筛查情况见附表）
    </div>
    <div class="w-full flex justify-around">
      <div class="w-1/3 flex flex-col items-center">
        <PieChartReport :loading="state.loading" :extend="extend" width="50mm" height="50mm">
          <div class="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 text-center">
            <p class="text-base font-bold">总筛查率</p>
            <p class="text-base font-bold">99.82%</p>
          </div>
        </PieChartReport>
        <p class="text-center">应筛查：5555人</p>
        <p class="text-center">已筛查：5354人</p>
        <p class="text-center">未筛查：34人</p>
      </div>
      <div class="w-1/3 flex flex-col items-center">
        <PieChartReport :loading="state.loading" :extend="extend" width="50mm" height="50mm">
          <div class="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 text-center">
            <p class="text-base font-bold">视力筛查率</p>
            <p class="text-base font-bold">99.82%</p>
          </div>
        </PieChartReport>
        <p class="text-center">应筛查：5555人</p>
        <p class="text-center">已筛查：5354人</p>
        <p class="text-center">未筛查：34人</p>
      </div>
      <div class="w-1/3 flex flex-col items-center">
        <PieChartReport :loading="state.loading" :extend="extend" width="50mm" height="50mm">
          <div class="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 text-center">
            <p class="text-base font-bold">屈光筛查率</p>
            <p class="text-base font-bold">99.82%</p>
          </div>
        </PieChartReport>
        <p class="text-center">应筛查：5555人</p>
        <p class="text-center">已筛查：5354人</p>
        <p class="text-center">未筛查：34人</p>
      </div>
    </div>
    <p class="text-center m-t-5 m-b-10">xx学校（小学部）筛查率</p>
    <BarChartReport
      :loading="state.loading"
      :extend="myExtend"
      :label-map="labelMap"
      :chart-data="chartData"
      height="250px"
    />
    <p class="text-center m-t-5 m-b-10">xx学校（小学部）各年级已筛查人数</p>
    <p class="text-center m-b-3 font-bold">xx学校（小学部）各年级筛查情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
          <th>班级数量</th>
          <th>
            <div>应筛查人数/人</div>
            <div>(男/女)</div>
          </th>
          <th>
            <div>视力筛查率/</div>
            <div>已筛查人数</div>
          </th>
          <th>
            <div>屈光筛查率/</div>
            <div>已筛查人数</div>
          </th>
          <th>
            <div>总筛查率/</div>
            <div>已筛查人数</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <div>一年级</div>
            <div>(小学2019)</div>
          </td>
          <td>5</td>
          <td>
            <div>555</div>
            <div>(225/235)</div>
          </td>
          <td>98% / 251</td>
          <td>98% / 251</td>
          <td>98% / 251</td>
        </tr>
      </tbody>
    </n-table>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({ loading: false });
const extend = reactive({
  tooltip: {
    show: false
  },
  legend: {
    show: false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['70%', '90%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 90, name: 'Search Engine' },
        { value: 10, name: 'Direct' }
      ]
    }
  ]
});
state.loading = true;
setTimeout(() => {
  extend.series[0].data = [
    { value: 60, name: 'Search Engine' },
    { value: 40, name: 'Direct' }
  ];
  state.loading = false;
}, 5000);

let labelMap = {
  data1: '屈光已筛查',
  data2: '视力已筛查',
  data3: '视力和屈光已筛查'
};
let chartData = {
  columns: ['name', 'data1', 'data2', 'data3'],
  rows: [
    { name: '一年级(小学2020)', data1: 555, data2: 666, data3: 777 },
    { name: '一年级(小学2021)', data1: 555, data2: 666, data3: 777 },
    { name: '一年级(小学2022)', data1: 555, data2: 666, data3: 777 },
    { name: '一年级(小学2023)', data1: 555, data2: 666, data3: 777 }
  ]
};
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
</script>

<style scoped lang="less"></style>
