<template>
  <div class="w-full">
    <div id="VisionBad" class="text-base font-bold m-b-1">视力不良情况</div>
    <div v-if="areaLevel == 4" class="m-b-5 text-sm leading-6">
      {{ state.decStr }}
    </div>
    <div v-else class="m-b-5 text-sm leading-6">
      6岁及以上，裸眼视力≥5.0为视力正常，4.9为轻度视力不良，4.6-4.8为中度视力不良，≤4.5为重度视力不良；4-5岁，裸眼视力≥4.9为视力正常，4.8为轻度视力不良，4.5-4.7为中度视力不良，≤4.4为重度视力不良；3岁及以下，裸眼视力≥4.8为视力正常，4.7为轻度视力不良，4.4-4.6为中度视力不良，≤4.3为重度视力不良；（视力不良情况以视力已筛查学生作为计算底数）
    </div>
    <BarChartReport :extend="myExtend" :label-map="labelMap" :chart-data="chartData" height="250px" />
    <p class="text-center m-b-10">{{ areaName }}各年级视力不良情况1</p>
    <p class="text-center m-t-5 m-b-3 font-bold">{{ areaName }}各学段视力不良情况</p>
    <n-table v-if="areaLevel != 4" :single-line="false" class="text-center w-full">
      <thead>
        <tr>
          <th>序号</th>
          <th>学段</th>
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
      <tbody v-if="areaLevel == 1 || areaLevel == 2">
        <tr v-for="(item, index) in state.detail.gradePoorVisionInfoList" :key="item.unifyPrefxName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.unifyPrefxName }}</td>
          <td>{{ item.eyeSightCheckCount }}</td>
          <td>{{ item.lowPoorVisionCount }} / {{ floatToPercent(item.lowPoorVisionRate) }}</td>
          <td>{{ item.midPoorVisionCount }} / {{ floatToPercent(item.midPoorVisionRate) }}</td>
          <td>{{ item.highPoorVisionCount }} / {{ floatToPercent(item.highPoorVisionRate) }}</td>
          <!-- <td>{{ item.otherPoorVisionCount }} / {{ floatToPercent(item.otherPoorVisionRate) }}</td> -->
          <td>{{ item.poorVisionCount }} / {{ floatToPercent(item.poorVisionRate) }}</td>
        </tr>
      </tbody>
      <tbody v-if="areaLevel == 3">
        <tr v-for="(item, index) in state.detail" :key="item.unifyPrefxName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.unifyPrefxName }}</td>
          <td>{{ item.eyeSightCheckCount }}</td>
          <td>{{ item.lowPoorVisionCount }} / {{ floatToPercent(item.lowPoorVisionRate) }}</td>
          <td>{{ item.midPoorVisionCount }} / {{ floatToPercent(item.midPoorVisionRate) }}</td>
          <td>{{ item.highPoorVisionCount }} / {{ floatToPercent(item.highPoorVisionRate) }}</td>
          <!-- <td>{{ item.otherPoorVisionCount }} / {{ floatToPercent(item.otherPoorVisionRate) }}</td> -->
          <td>{{ item.poorVisionCount }} / {{ floatToPercent(item.poorVisionRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <n-table v-else :single-line="false" class="text-center w-full">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
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
      <tbody v-if="state.detail">
        <tr v-for="(item, index) in state.detail.classYearPoorVisionInfoList" :key="item.gradeId">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.myopiaStdCount }} / {{ floatToPercent(item.myopiaRate) }}</td>
          <td>{{ item.hyperopiaStdCount }} / {{ floatToPercent(item.hyperopiaStdRate) }}</td>
          <td>{{ item.astigmiaStdCount }} / {{ floatToPercent(item.astigmiaStdRate) }}</td>
          <td>{{ item.poorVisionCount }} / {{ floatToPercent(item.poorVisionRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <div v-if="areaLevel == 1 || areaLevel == 2" class="w-full m-t-10">
      <BarChartReport :extend="myExtend" :label-map="labelMap2" :chart-data="chartData2" height="250px" />
      <p class="text-center m-t-3">{{ areaName }}各县（市、区）视力不良情况</p>
    </div>
    <p v-if="areaLevel == 1 || areaLevel == 2" class="text-center m-t-5 m-b-3 font-bold">
      {{ areaName }}各县（市、区）视力不良情况
    </p>
    <n-table v-if="areaLevel == 1 || areaLevel == 2" :single-line="false" class="text-center">
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

import { getCityPoorVision, getRegionPoorVision_r, getSchoolPoorVision_s } from '@/api/report/index';
import { getCityPoorVisionPro } from '@/api/report/index_province';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaName, areaLevel, schoolId, schoolType } = userStore.getAreaData;
const state = reactive({
  decStr: '',
  detail: {},
  loading: false
});
let labelMap = reactive({
  highPoorVisionCount: '重度视力不良',
  midPoorVisionCount: '中度视力不良',
  lowPoorVisionCount: '轻度视力不良'
});
let chartData = reactive({
  columns: ['unifyPrefxName', 'highPoorVisionCount', 'midPoorVisionCount', 'lowPoorVisionCount'],
  rows: [
    {
      unifyPrefxName: '小学',
      highPoorVisionCount: 0,
      midPoorVisionCount: 0,
      lowPoorVisionCount: 0
    }
  ]
});
let labelMap4 = {
  poorVisionRate: '视力不良'
};
let chartData4 = reactive({
  columns: ['planName', 'poorVisionRate'],
  rows: []
});
let myExtend4 = line_per;
let myExtend = bar_num;
let labelMap2 = {
  highPoorVisionCount: '重度视力不良',
  midPoorVisionCount: '中度视力不良',
  lowPoorVisionCount: '轻度视力不良'
};
let chartData2 = reactive({
  columns: ['region', 'highPoorVisionCount', 'midPoorVisionCount', 'lowPoorVisionCount'],
  rows: [{ region: '市本级', highPoorVisionCount: 0, midPoorVisionCount: 0, lowPoorVisionCount: 0 }]
});

if (areaLevel == 1) {
  getCityPoorVisionPro({
    planId,
    id: areaId
  }).then(d => {
    state.detail = d;
    chartData.rows = d.gradePoorVisionInfoList.filter(v => v.unifyPrefxName != '合计');
    chartData2.rows = d.areaPoorVisionInfoList.filter(v => v.region != '合计');
  });
} else if (areaLevel == 2) {
  getCityPoorVision({
    planId,
    id: areaId
  }).then(d => {
    state.detail = d;
    chartData.rows = d.gradePoorVisionInfoList.filter(v => v.unifyPrefxName != '合计');
    chartData2.rows = d.areaPoorVisionInfoList.filter(v => v.region != '合计');
  });
} else if (areaLevel == 3) {
  getRegionPoorVision_r({
    planId,
    id: areaId
  }).then(d => {
    state.detail = d;
    chartData.rows = d.filter(v => v.unifyPrefxName != '合计');
  });
} else if (areaLevel == 4) {
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
    labelMap = {
      myopiaStdCount: '近视',
      hyperopiaStdCount: '远视',
      astigmiaStdCount: '散光',
      poorVisionCount: '视力不良'
    };
    chartData = {
      columns: ['gradeName', 'myopiaStdCount', 'hyperopiaStdCount', 'astigmiaStdCount', 'poorVisionCount'],
      rows: []
    };
    chartData.rows = d.classYearPoorVisionInfoList.filter(v => v.gradeName != '总计');
    chartData4.rows = d.plansPoorVisionInfoList;
  });
}
</script>

<style scoped lang="less"></style>
