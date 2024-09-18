<template>
  <div class="w-full">
    <div id="VisionBad" class="text-base font-bold m-b-1">视力不良情况</div>
    <div class="m-b-5 text-sm leading-6">
      {{ state.decStr }}
    </div>
    <BarChartReport :extend="myExtend" :label-map="labelMap" :chart-data="chartData" height="250px" />
    <p class="text-center m-b-10">
      {{ areaName }}{{ areaLevel == 4 ? '各年级' : areaLevel == 5 ? '各班级' : '' }}视力不良情况
    </p>
    <p class="text-center m-t-5 m-b-3 font-bold">
      {{ areaName }}{{ areaLevel == 4 ? '各年级' : areaLevel == 5 ? '各班级' : '' }}视力不良情况
    </p>
    <n-table v-if="areaLevel == 6" :single-line="false" class="text-center w-full">
      <thead>
        <tr>
          <th>序号</th>
          <th>学生姓名</th>
          <th>近视</th>
          <th>远视</th>
          <th>散光</th>
          <th>视力不良</th>
        </tr>
      </thead>
      <tbody v-if="state.detail">
        <tr v-for="(item, index) in state.detail.studentPoorVisionInfoList" :key="item.studentName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.studentName }}</td>
          <td :style="{ background: item.myopiaStatus == '1' ? '#d9001b' : '' }">
            {{ item.myopiaStatus == '1' ? '√' : '×' }}
          </td>
          <td :style="{ background: item.hyperopiaStatus == '1' ? '#d9001b' : '' }">
            {{ item.hyperopiaStatus == '1' ? '√' : '×' }}
          </td>
          <td :style="{ background: item.astigmiaStatus == '1' ? '#d9001b' : '' }">
            {{ item.astigmiaStatus == '1' ? '√' : '×' }}
          </td>
          <td :style="{ background: item.poorVisionStatus == '1' ? '#d9001b' : '' }">
            {{ item.poorVisionStatus == '1' ? '√' : '×' }}
          </td>
        </tr>
      </tbody>
    </n-table>
    <n-table v-else :single-line="false" class="text-center w-full">
      <thead>
        <tr>
          <th>序号</th>
          <th>{{ areaLevel == 4 ? '年级' : '班级' }}</th>
          <th>
            <div>近视人数/</div>
            <div>近视率</div>
          </th>
          <th>
            <div>远视人数/</div>
            <div>远视率</div>
          </th>
          <th>
            <div>散光人数/</div>
            <div>散光率</div>
          </th>
          <th>
            <div>视力不良人数/</div>
            <div>视力不良率</div>
          </th>
        </tr>
      </thead>
      <tbody v-if="state.detail && areaLevel == 4">
        <tr v-for="(item, index) in state.detail.classYearPoorVisionInfoList" :key="item.gradeId">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.myopiaStdCount }} / {{ floatToPercent(item.myopiaRate) }}</td>
          <td>{{ item.hyperopiaStdCount }} / {{ floatToPercent(item.hyperopiaStdRate) }}</td>
          <td>{{ item.astigmiaStdCount }} / {{ floatToPercent(item.astigmiaStdRate) }}</td>
          <td>{{ item.poorVisionCount }} / {{ floatToPercent(item.poorVisionRate) }}</td>
        </tr>
      </tbody>
      <tbody v-if="state.detail && areaLevel == 5">
        <tr v-for="(item, index) in state.detail.classPoorVisionInfoList" :key="item.gradeId">
          <td>{{ index + 1 }}</td>
          <td>{{ item.className }}</td>
          <td>{{ item.myopiaStdCount }} / {{ floatToPercent(item.myopiaRate) }}</td>
          <td>{{ item.hyperopiaStdCount }} / {{ floatToPercent(item.hyperopiaStdRate) }}</td>
          <td>{{ item.astigmiaStdCount }} / {{ floatToPercent(item.astigmiaStdRate) }}</td>
          <td>{{ item.poorVisionCount }} / {{ floatToPercent(item.poorVisionRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <div v-if="areaLevel == 2" class="w-full m-t-10">
      <BarChartReport :extend="myExtend" :label-map="labelMap2" :chart-data="chartData2" height="250px" />
      <p class="text-center m-t-3">{{ areaName }}各县(市、区)视力不良情况</p>
    </div>
    <p v-if="areaLevel == 2" class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}各县(市、区)视力不良情况</p>
    <n-table v-if="areaLevel == 2" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>县(市、区)</th>
          <th>视力已筛查人数</th>
          <th>
            <div>轻度视力不良人数/</div>
            <div>百分比</div>
          </th>
          <th>
            <div>中度视力不良人数/</div>
            <div>百分比</div>
          </th>
          <th>
            <div>重度视力不良人数/</div>
            <div>百分比</div>
          </th>
          <!-- <th>
            <div>其他视力不良人数/</div>
            <div>百分比</div>
          </th> -->
          <th>
            <div>总视力不良人数/</div>
            <div>百分比</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.areaPoorVisionInfoList" :key="item.unifyPrefxName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.eyeSightCheckCount }}</td>
          <td>{{ item.lowPoorVisionCount }} / {{ floatToPercent(item.lowPoorVisionRate) }}</td>
          <td>{{ item.midPoorVisionCount }} / {{ floatToPercent(item.midPoorVisionRate) }}</td>
          <td>{{ item.highPoorVisionCount }} / {{ floatToPercent(item.highPoorVisionRate) }}</td>
          <!-- <td>{{ item.otherPoorVisionCount }} / {{ floatToPercent(item.otherPoorVisionRate) }}</td> -->
          <td>{{ item.poorVisionCount }} / {{ floatToPercent(item.poorVisionRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <div v-if="areaLevel == 4" class="w-full m-t-10">
      <LineChartReport :extend="myExtend4" :label-map="labelMap4" :chart-data="chartData4" height="250px" />
      <p class="text-center m-t-3">{{ areaName }}视力不良趋势</p>
    </div>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { bar_num, line_per } from '@common/settings/chartSetting';

import { getSchoolPoorVision_s, getSchoolPoorVision_g, getSchoolPoorVision_c } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaName, areaLevel, schoolId, gradeId, classId, schoolType } = userStore.getAreaData;
const state = reactive({
  decStr: '',
  detail: {},
  loading: false
});
let labelMap = {
  myopiaStdCount: '近视',
  hyperopiaStdCount: '远视',
  astigmiaStdCount: '散光',
  poorVisionCount: '视力不良'
};
let chartData = reactive({
  columns: ['gradeName', 'myopiaStdCount', 'hyperopiaStdCount', 'astigmiaStdCount', 'poorVisionCount'],
  rows: []
});
let labelMap4 = {
  poorVisionRate: '视力不良'
};
let chartData4 = reactive({
  columns: ['planName', 'poorVisionRate'],
  rows: []
});
let myExtend4 = { ...line_per };
let myExtend = { ...bar_num };
let labelMap2 = {
  highPoorVisionCount: '重度视力不良',
  midPoorVisionCount: '中度视力不良',
  lowPoorVisionCount: '轻度视力不良'
};
let chartData2 = reactive({
  columns: ['region', 'highPoorVisionCount', 'midPoorVisionCount', 'lowPoorVisionCount'],
  rows: [{ region: '市本级', highPoorVisionCount: 0, midPoorVisionCount: 0, lowPoorVisionCount: 0 }]
});
if (areaLevel == 4) {
  getSchoolPoorVision_s({
    planId,
    id: schoolId,
    prefix: schoolType
  }).then(d => {
    state.detail = d;
    state.decStr = `本次筛查除发现近视学生${d.schoolPoorVisionInfo.myopiaStdCount}人外，还发现远视学生${
      d.schoolPoorVisionInfo.hyperopiaStdCount
    }人（远视率为${floatToPercent(d.schoolPoorVisionInfo.hyperopiaStdRate)}），散光学生${
      d.schoolPoorVisionInfo.astigmiaStdCount
    }人（散光率为${floatToPercent(d.schoolPoorVisionInfo.astigmiaStdRate)}），累计视力不良学生数${
      d.schoolPoorVisionInfo.poorVisionCount
    }人，视力不良率为${floatToPercent(d.schoolPoorVisionInfo.poorVisionRate)}。`;
    chartData.rows = d.classYearPoorVisionInfoList.filter(v => v.gradeName != '总计');
    chartData4.rows = d.plansPoorVisionInfoList;
  });
} else if (areaLevel == 5) {
  getSchoolPoorVision_g({
    planId,
    id: gradeId,
    orgId: schoolId,
    prefix: schoolType
  }).then(d => {
    state.detail = d;
    state.decStr = `本次筛查除发现近视学生${d.classYearPoorVisionInfo.myopiaStdCount}人外，还发现远视学生${
      d.classYearPoorVisionInfo.hyperopiaStdCount
    }人（远视率为${floatToPercent(d.classYearPoorVisionInfo.hyperopiaStdRate)}），散光学生${
      d.classYearPoorVisionInfo.astigmiaStdCount
    }人（散光率为${floatToPercent(d.classYearPoorVisionInfo.astigmiaStdRate)}），累计视力不良学生数${
      d.classYearPoorVisionInfo.poorVisionCount
    }人，视力不良率为${floatToPercent(d.classYearPoorVisionInfo.poorVisionRate)}。`;
    chartData.columns = ['className', 'myopiaStdCount', 'hyperopiaStdCount', 'astigmiaStdCount', 'poorVisionCount'];
    chartData.rows = d.classPoorVisionInfoList.filter(v => v.className != '总计');
  });
} else if (areaLevel == 6) {
  getSchoolPoorVision_c({
    planId,
    id: classId,
    prefix: schoolType
  }).then(d => {
    state.detail = d;
    state.decStr = `本次筛查除发现近视学生${d.myopiaStdCount}人外，还发现远视学生${
      d.hyperopiaStdCount
    }人（远视率为${floatToPercent(d.hyperopiaStdRate)}），散光学生${d.astigmiaStdCount}人（散光率为${floatToPercent(
      d.astigmiaStdRate
    )}），累计视力不良学生数${d.poorVisionCount}人，视力不良率为${floatToPercent(d.poorVisionRate)}。`;

    chartData.columns = ['className', 'myopiaStdCount', 'hyperopiaStdCount', 'astigmiaStdCount', 'poorVisionCount'];
    chartData.rows = [d];
  });
}
</script>

<style scoped lang="less"></style>
