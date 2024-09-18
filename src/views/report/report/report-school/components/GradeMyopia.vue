<template>
  <div class="w-full">
    <div id="GradeMyopia" class="text-base font-bold m-b-1">分年级近视情况</div>
    <div class="m-b-5 text-sm leading-6">{{ areaName }}{{ state.decStr1 }}。</div>
    <LineChartReport height="250px" width="95%" :extend="myExtend" :label-map="labelMap2" :chart-data="chartData2" />
    <p class="text-center m-b-3">{{ areaName }}分年级{{ areaLevel == 2 ? '' : '男、女生' }}近视率</p>
    <div class="m-b-5 text-sm leading-6">
      注：高一包含普高一年级和职高一年级，高二包含普高二年级和职高二年级，高三包含普高三年级和职高三年级；大一包含大学本科一年级和大学专科一年级，大二包含大学本科二年级和大学专科二年级，大三包含大学本科三年级和大学专科三年级。
    </div>

    <p v-if="areaLevel == 3" class="text-center m-b-3 font-bold">{{ areaName }}分年级男、女生近视情况</p>
    <n-table v-if="areaLevel == 3" :single-line="false" class="text-center">
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
        <tr v-for="(item, index) in state.detail.gradeMyopiaInfoList" :key="item.gradeName">
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

    <div class="m-b-5 text-sm leading-6">{{ areaName }}{{ state.decStr2 }}。</div>
    <LineChartReport height="250px" width="95%" :extend="myExtend" :label-map="labelMap" :chart-data="chartData" />
    <p class="text-center m-b-3">{{ areaName }}分年级高度近视率</p>
    <div class="m-b-5 text-sm leading-6">
      注：高一包含普高一年级和职高一年级，高二包含普高二年级和职高二年级，高三包含普高三年级和职高三年级；大一包含大学本科一年级和大学专科一年级，大二包含大学本科二年级和大学专科二年级，大三包含大学本科三年级和大学专科三年级。
    </div>
    <p v-if="areaLevel == 3" class="text-center m-b-3 font-bold">{{ areaName }}分年级男、女生高度近视情况</p>
    <n-table v-if="areaLevel == 3" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
          <th>
            <div>男-</div>
            <div>高度近视人数</div>
          </th>
          <th>
            <div>男-</div>
            <div>高度近视率</div>
          </th>
          <th>
            <div>女-</div>
            <div>高度近视人数</div>
          </th>
          <th>
            <div>女-</div>
            <div>高度近视率</div>
          </th>
          <th>
            <div>总-</div>
            <div>高度近视人数</div>
          </th>
          <th>
            <div>总-</div>
            <div>高度近视率</div>
          </th>
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

import { getClassYearMyopiaInfo } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaLevel, areaName } = userStore.getAreaData;
let state = reactive({
  decStr1: '',
  decStr2: '',
  detail: {}
});
let labelMap2 = reactive({
  myopiaRate: '近视率'
});
let chartData2 = reactive({
  columns: ['gradeName', 'myopiaRate'],
  rows: [{ gradeName: '高一(普高)', myopiaRate: 0 }]
});
let labelMap = reactive({
  highMyopiaRate: '高度近视率'
});
let chartData = reactive({
  columns: ['gradeName', 'highMyopiaRate'],
  rows: [{ gradeName: '高一(普高)', highMyopiaRate: 0 }]
});
let myExtend = reactive({
  color: [],
  legend: {
    show: false
  },
  tooltip: {
    confine: true,
    formatter: function (params) {
      let str = params[0].axisValue + '<br>';
      params.forEach(v => {
        str =
          str +
          `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background:${
            v.color.colorStops
              ? `linear-gradient(0deg, ${v.color.colorStops[0].color}, ${v.color.colorStops[1].color})`
              : v.color
          }"></span>${v.seriesName}：${(v.value[v.seriesName] * 100).toFixed(2) + '%'}<br>`;
      });
      return str;
    }
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
    },
    axisLabel: {
      formatter: value => (value * 100).toFixed(0) + '%'
    }
  }
});
getClassYearMyopiaInfo({
  reportLevel: areaLevel,
  planId: planId,
  id: areaId
}).then(d => {
  state.detail = d;
  let str1 = '';
  let str2 = '';
  if (areaLevel == 2) {
    d.schoolTypeMyopiaRateGrowthList.forEach(v => {
      if (v.rateType == 1) {
        str1 += `${!str1 ? '' : '，'}${v.prefixName}各年级平均近视增长率为${floatToPercent(v.growthRate)}`;
      }
      if (v.rateType == 2) {
        str2 += `${!str2 ? '' : '，'}${v.prefixName}各年级平均高度近视增长率为${floatToPercent(v.growthRate)}`;
      }
    });
    state.decStr1 = str1;
    state.decStr2 = str2;
  } else if (areaLevel == 3) {
    let arr = [];
    let arr2 = [];
    d.schoolTypeMyopiaRateGrowthList.forEach(val => {
      if (val.rateType == 3 || val.rateType == 4) {
        let ii = arr.findIndex(v => v.prefixName == val.prefixName);
        if (ii == -1) {
          arr.push({
            prefixName: val.prefixName,
            man: val.rateType == 3 ? val.growthRate : '',
            woman: val.rateType == 4 ? val.growthRate : ''
          });
        } else {
          if (val.rateType == 3) {
            arr[ii]['man'] = val.growthRate;
          } else if (val.rateType == 4) {
            arr[ii]['woman'] = val.growthRate;
          }
        }
      }
      if (val.rateType == 5 || val.rateType == 6) {
        let ii = arr2.findIndex(v => v.prefixName == val.prefixName);
        if (ii == -1) {
          arr2.push({
            prefixName: val.prefixName,
            man: val.rateType == 5 ? val.growthRate : '',
            woman: val.rateType == 6 ? val.growthRate : ''
          });
        } else {
          if (val.rateType == 5) {
            arr2[ii]['man'] = val.growthRate;
          } else if (val.rateType == 6) {
            arr2[ii]['woman'] = val.growthRate;
          }
        }
      }
    });
    arr.forEach(v => {
      str1 += `${!str1 ? '' : '，'}${v.prefixName}各年级男、女平均近视增长率为${floatToPercent(
        v.man
      )}、${floatToPercent(v.woman)}`;
    });
    arr2.forEach(v => {
      str2 += `${!str2 ? '' : '，'}${v.prefixName}各年级男、女平均高度近视增长率为${floatToPercent(
        v.man
      )}、${floatToPercent(v.woman)}`;
    });
    state.decStr1 = str1;
    state.decStr2 = str2;
    myExtend.legend.show = true;
    labelMap2 = {
      manMyopiaRate: '男生近视率',
      womanMyopiaRate: '女生近视率',
      myopiaRate: '总近视率'
    };
    chartData2 = {
      columns: ['gradeName', 'manMyopiaRate', 'womanMyopiaRate', 'myopiaRate'],
      rows: []
    };
    labelMap = {
      manHighMyopiaRate: '男生高度近视率',
      womanHighMyopiaRate: '女生高度近视率',
      highMyopiaRate: '总高度近视率'
    };
    chartData = {
      columns: ['gradeName', 'manHighMyopiaRate', 'womanHighMyopiaRate', 'highMyopiaRate'],
      rows: []
    };
  }

  chartData2.rows = JSON.parse(JSON.stringify(d.gradeMyopiaInfoList));
  chartData.rows = JSON.parse(JSON.stringify(d.gradeMyopiaInfoList));
});
</script>

<style scoped lang="less"></style>
