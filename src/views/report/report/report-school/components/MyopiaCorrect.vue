<template>
  <div ref="MyopiaCorrect" class="w-full">
    <div id="MyopiaCorrect" class="text-base font-bold m-b-1">近视矫正情况</div>
    <div class="m-b-5 text-sm leading-6">
      本次筛查发现{{ state.detail.myopiaStdCount }}名近视学生中，有{{
        state.detail.frameGlassesStdCount * 1 + state.detail.contactLensStdCount * 1 + state.detail.okLensStdCount * 1
      }}人采取矫正措施，{{ state.detail.frameGlassesStdCount }}人佩戴框架眼镜，{{
        state.detail.contactLensStdCount
      }}人佩戴隐形眼镜，{{ state.detail.okLensStdCount }}人佩戴OK镜，另外，{{
        state.detail.unMyopiaStdCount
      }}人未采取矫正措施。足矫人数{{ state.detail.correctMyopiaStdCount }}人，足矫率为{{
        floatToPercent(state.detail.correctMyopiaRate)
      }}；其中，男生足矫人数{{ state.detail.manCorrectMyopiaStdCount }}人，足矫率为{{
        floatToPercent(state.detail.manCorrectMyopiaRate)
      }}；女生足矫人数{{ state.detail.womanCorrectMyopiaStdCount }}人，足矫率为{{
        floatToPercent(state.detail.womanCorrectMyopiaRate)
      }}。欠矫人数{{ state.detail.udMyopiaStdCount }}人，欠矫率为{{
        floatToPercent(state.detail.udMyopiaRate)
      }}；其中，男生欠矫人数{{ state.detail.manUdMyopiaStdCount }}人，欠矫率为{{
        floatToPercent(state.detail.manUdMyopiaRate)
      }}；女生欠矫人数{{ state.detail.womanUdMyopiaStdCount }}人，欠矫率为{{
        floatToPercent(state.detail.womanUdMyopiaRate)
      }}。未矫人数{{ state.detail.unMyopiaStdCount }}人，未矫率为{{
        floatToPercent(state.detail.unMyopiaRate)
      }}；其中，男生未矫人数{{ state.detail.manUnMyopiaStdCount }}人，未矫率为{{
        floatToPercent(state.detail.manUnMyopiaRate)
      }}；女生未矫人数{{ state.detail.womanUnMyopiaStdCount }}人，未矫率为{{
        floatToPercent(state.detail.womanUnMyopiaRate)
      }}。
    </div>
    <div class="w-full">
      <div class="flex-center">
        <PieChartReport :extend="extend" width="210mm" height="80mm" />
      </div>
      <pie-table>
        <pie-table-item>
          <template #left>足矫人数（男/女）</template>
          <template #right>
            {{ state.detail.correctMyopiaStdCount }} 人 ({{ state.detail.manCorrectMyopiaStdCount }}人 /
            {{ state.detail.womanCorrectMyopiaStdCount }}人)
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>足矫率（男/女）</template>
          <template #right>
            {{ floatToPercent(state.detail.correctMyopiaRate) }} ({{
              floatToPercent(state.detail.manCorrectMyopiaRate)
            }}
            / {{ floatToPercent(state.detail.womanCorrectMyopiaRate) }})
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>欠矫人数（男/女）</template>
          <template #right>
            {{ state.detail.udMyopiaStdCount }} 人 ({{ state.detail.manUdMyopiaStdCount }}人 /
            {{ state.detail.womanUdMyopiaStdCount }}人)
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>欠矫率（男/女）</template>
          <template #right>
            {{ floatToPercent(state.detail.udMyopiaRate) }} ({{ floatToPercent(state.detail.manUdMyopiaRate) }} /
            {{ floatToPercent(state.detail.womanUdMyopiaRate) }})
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>未矫人数（男/女）</template>
          <template #right>
            {{ state.detail.unMyopiaStdCount }} 人 ({{ state.detail.manUnMyopiaStdCount }}人 /
            {{ state.detail.womanUnMyopiaStdCount }}人)
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>未矫率（男/女）</template>
          <template #right>
            {{ floatToPercent(state.detail.unMyopiaRate) }} ({{ floatToPercent(state.detail.manUnMyopiaRate) }} /
            {{ floatToPercent(state.detail.womanUnMyopiaRate) }})
          </template>
        </pie-table-item>
      </pie-table>
    </div>
    <div>注：部分学生未采集戴镜视力，无法判断近视矫正情况，归入其他</div>
    <n-table v-if="areaLevel == 6" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>学生姓名</th>
          <th>足矫</th>
          <th>欠矫</th>
          <th>未矫</th>
        </tr>
      </thead>
      <tbody v-if="state.detail">
        <tr v-for="(item, index) in state.detail.studentMyopiaCorrectInfos" :key="item.studentName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.studentName }}</td>
          <td :style="{ background: item.isCorrectMyopia ? '#caf982' : '' }">{{ item.isCorrectMyopia ? '√' : '×' }}</td>
          <td :style="{ background: item.isUdMyopiaS ? '#f59a23' : '' }">{{ item.isUdMyopiaS ? '√' : '×' }}</td>
          <td :style="{ background: item.isUnMyopia ? '#ec808d' : '' }">{{ item.isUnMyopia ? '√' : '×' }}</td>
        </tr>
      </tbody>
    </n-table>
    <div v-if="areaLevel != 6">
      <p class="text-center m-b-10">{{ areaName }}近视矫正情况</p>
      <BarChartReport :extend="myExtend" height="250px" />
      <p class="text-center m-b-10">{{ areaName }}各{{ areaLevel == 4 ? '年级' : '班级' }}近视矫正情况</p>
      <p class="text-center m-b-3 font-bold">{{ areaName }}各{{ areaLevel == 4 ? '年级' : '班级' }}近视矫正情况</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>
              {{ areaLevel == 4 ? '年级' : '班级' }}
            </th>
            <th>
              足矫人数
              <div>(男/女)</div>
            </th>
            <th>
              足矫率
              <div>(男/女)</div>
            </th>
            <th>
              欠矫人数
              <div>(男/女)</div>
            </th>
            <th>
              欠矫率
              <div>(男/女)</div>
            </th>
            <th>
              未矫人数
              <div>(男/女)</div>
            </th>
            <th>
              未矫率
              <div>(男/女)</div>
            </th>
          </tr>
        </thead>
        <tbody v-if="areaLevel == 4">
          <tr v-for="(item, index) in state.detail.gradeMyopiaCorrectInfos" :key="item.gradeName">
            <td>{{ index + 1 }}</td>
            <td>{{ item.gradeName }}</td>
            <td>
              {{ item.correctMyopiaStdCount }}
              <div>({{ item.manCorrectMyopiaStdCount }}/{{ item.womanCorrectMyopiaStdCount }})</div>
            </td>
            <td>
              {{ floatToPercent(item.correctMyopiaRate) }}
              <div>
                ({{ floatToPercent(item.manCorrectMyopiaRate) }}/{{ floatToPercent(item.womanCorrectMyopiaRate) }})
              </div>
            </td>
            <td>
              {{ item.udMyopiaStdCount }}
              <div>({{ item.manUdMyopiaStdCount }}/{{ item.womanUdMyopiaStdCount }})</div>
            </td>
            <td>
              {{ floatToPercent(item.udMyopiaRate) }}
              <div>({{ floatToPercent(item.manUdMyopiaRate) }}/{{ floatToPercent(item.womanUdMyopiaStdCount) }})</div>
            </td>
            <td>
              {{ item.unMyopiaStdCount }}
              <div>({{ item.manUnMyopiaStdCount }}/{{ item.womanUnMyopiaStdCount }})</div>
            </td>
            <td>
              {{ floatToPercent(item.unMyopiaRate) }}
              <div>({{ floatToPercent(item.manUnMyopiaRate) }}/{{ floatToPercent(item.womanUnMyopiaRate) }})</div>
            </td>
          </tr>
        </tbody>
        <tbody v-if="areaLevel == 5">
          <tr v-for="(item, index) in state.detail.classMyopiaCorrectInfos" :key="item.className">
            <td>{{ index + 1 }}</td>
            <td>{{ item.className }}</td>
            <td>
              {{ item.correctMyopiaStdCount }}
              <div>({{ item.manCorrectMyopiaStdCount }}/{{ item.womanCorrectMyopiaStdCount }})</div>
            </td>
            <td>
              {{ floatToPercent(item.correctMyopiaRate) }}
              <div>
                ({{ floatToPercent(item.manCorrectMyopiaRate) }}/{{ floatToPercent(item.womanCorrectMyopiaRate) }})
              </div>
            </td>
            <td>
              {{ item.udMyopiaStdCount }}
              <div>({{ item.manUdMyopiaStdCount }}/{{ item.womanUdMyopiaStdCount }})</div>
            </td>
            <td>
              {{ floatToPercent(item.udMyopiaRate) }}
              <div>({{ floatToPercent(item.manUdMyopiaRate) }}/{{ floatToPercent(item.womanUdMyopiaStdCount) }})</div>
            </td>
            <td>
              {{ item.unMyopiaStdCount }}
              <div>({{ item.manUnMyopiaStdCount }}/{{ item.womanUnMyopiaStdCount }})</div>
            </td>
            <td>
              {{ floatToPercent(item.unMyopiaRate) }}
              <div>({{ floatToPercent(item.manUnMyopiaRate) }}/{{ floatToPercent(item.womanUnMyopiaRate) }})</div>
            </td>
          </tr>
        </tbody>
      </n-table>
    </div>

    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

import { getMyopiaCorrectInfo_s, getMyopiaCorrectInfo_g, getMyopiaCorrectInfo_c } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';

const userStore = useReportStore();
let { planId, areaLevel, areaName, schoolId, schoolType, gradeId, classId } = userStore.getAreaData;
let state = reactive({
  decStr: '',
  detail: {}
});
const extend = reactive({
  title: {},
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return `${params.name}:${(params.value * 100).toFixed(2)}%`;
    }
  },
  label: {
    formatter: function (params) {
      return `${params.name}:${(params.value * 100).toFixed(2)}%`;
    }
  },
  legend: {
    show: false
  },
  series: [
    {
      name: '近视矫正情况',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 0, name: '足矫' },
        { value: 0, name: '欠矫' },
        { value: 0, name: '未矫' }
      ]
    }
  ]
});
let myExtend = reactive({
  tooltip: {
    confine: true,
    formatter: function (params) {
      let str = params[0].axisValue + '<br>';
      params.forEach((v, i) => {
        if (i <= 2) {
          str =
            str +
            `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background:${
              v.color.colorStops
                ? `linear-gradient(0deg, ${v.color.colorStops[0].color}, ${v.color.colorStops[1].color})`
                : v.color
            }"></span>${v.seriesName}：${(v.data * 100).toFixed(2) + '%'}<br>`;
        }
      });
      return str;
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['市本级']
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: value => (value * 100).toFixed(0) + '%'
      }
    }
  ],
  series: [
    {
      name: '足矫率',
      type: 'bar',
      barMaxWidth: 15,
      emphasis: {
        focus: 'series'
      },
      data: [0]
    },
    {
      name: '欠矫率',
      type: 'bar',
      barMaxWidth: 15,
      emphasis: {
        focus: 'series'
      },
      data: [0]
    },
    {
      name: '未矫率',
      type: 'bar',
      barMaxWidth: 15,
      emphasis: {
        focus: 'series'
      },
      data: [0]
    }
  ]
});
let myExtend2 = reactive({
  tooltip: {
    confine: true,
    formatter: function (params) {
      let str = params[0].axisValue + '<br>';
      params.forEach((v, i) => {
        if (i <= 2) {
          str =
            str +
            `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background:${
              v.color.colorStops
                ? `linear-gradient(0deg, ${v.color.colorStops[0].color}, ${v.color.colorStops[1].color})`
                : v.color
            }"></span>${v.seriesName}：${(v.data * 100).toFixed(2) + '%'}<br>`;
        }
      });
      return str;
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['年级']
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: value => (value * 100).toFixed(0) + '%'
      }
    }
  ],
  series: [
    {
      name: '足矫率',
      type: 'bar',
      barMaxWidth: 15,
      emphasis: {
        focus: 'series'
      },
      data: [0]
    },
    {
      name: '欠矫率',
      type: 'bar',
      barMaxWidth: 15,
      emphasis: {
        focus: 'series'
      },
      data: [0]
    },
    {
      name: '未矫率',
      type: 'bar',
      barMaxWidth: 15,
      emphasis: {
        focus: 'series'
      },
      data: [0]
    }
  ]
});
if (areaLevel == 4) {
  getMyopiaCorrectInfo_s({
    planId,
    schoolId,
    schoolType
  }).then(d => {
    state.detail = d;
    extend.series[0].data = [
      { value: d?.correctMyopiaRate, name: '足矫' },
      { value: d?.udMyopiaRate, name: '欠矫' },
      { value: d?.unMyopiaRate, name: '未矫' },
      { value: d?.otherRate, name: '其他' }
    ];
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    d.gradeMyopiaCorrectInfos.forEach(v => {
      arr.push(v.gradeName);
      arr1.push(v.correctMyopiaRate);
      arr2.push(v.unMyopiaRate);
      arr3.push(v.udMyopiaRate);
    });
    myExtend.xAxis[0].data = arr;
    myExtend.series[0].data = arr1;
    myExtend.series[1].data = arr2;
    myExtend.series[2].data = arr3;
    let arr_1 = [];
    let arr1_1 = [];
    let arr2_1 = [];
    let arr3_1 = [];
    d.gradeMyopiaCorrectInfos.forEach(v => {
      arr_1.push(v.gradeName);
      arr1_1.push(v.correctMyopiaRate);
      arr2_1.push(v.unMyopiaRate);
      arr3_1.push(v.udMyopiaRate);
    });
    myExtend2.xAxis[0].data = arr_1;
    myExtend2.series[0].data = arr1_1;
    myExtend2.series[1].data = arr2_1;
    myExtend2.series[2].data = arr3_1;
  });
} else if (areaLevel == 5) {
  getMyopiaCorrectInfo_g({
    planId,
    schoolId,
    schoolType,
    gradeId
  }).then(d => {
    state.detail = d;
    extend.series[0].data = [
      { value: d?.correctMyopiaRate, name: '足矫' },
      { value: d?.udMyopiaRate, name: '欠矫' },
      { value: d?.unMyopiaRate, name: '未矫' },
      { value: d?.otherRate, name: '其他' }
    ];
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    d.classMyopiaCorrectInfos.forEach(v => {
      arr.push(v.className);
      arr1.push(v.correctMyopiaRate);
      arr2.push(v.unMyopiaRate);
      arr3.push(v.udMyopiaRate);
    });
    myExtend.xAxis[0].data = arr;
    myExtend.series[0].data = arr1;
    myExtend.series[1].data = arr2;
    myExtend.series[2].data = arr3;
    let arr_1 = [];
    let arr1_1 = [];
    let arr2_1 = [];
    let arr3_1 = [];
    d.classMyopiaCorrectInfos.forEach(v => {
      arr_1.push(v.className);
      arr1_1.push(v.correctMyopiaRate);
      arr2_1.push(v.unMyopiaRate);
      arr3_1.push(v.udMyopiaRate);
    });
    myExtend2.xAxis[0].data = arr_1;
    myExtend2.series[0].data = arr1_1;
    myExtend2.series[1].data = arr2_1;
    myExtend2.series[2].data = arr3_1;
  });
} else if (areaLevel == 6) {
  getMyopiaCorrectInfo_c({
    planId,
    schoolId,
    classId
  }).then(d => {
    state.detail = d;
    extend.series[0].data = [
      { value: d?.correctMyopiaRate, name: '足矫' },
      { value: d?.udMyopiaRate, name: '欠矫' },
      { value: d?.unMyopiaRate, name: '未矫' },
      { value: d?.otherRate, name: '其他' }
    ];
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    d.classMyopiaCorrectInfos.forEach(v => {
      arr.push(v.className);
      arr1.push(v.correctMyopiaRate);
      arr2.push(v.unMyopiaRate);
      arr3.push(v.udMyopiaRate);
    });
    myExtend.xAxis[0].data = arr;
    myExtend.series[0].data = arr1;
    myExtend.series[1].data = arr2;
    myExtend.series[2].data = arr3;
    let arr_1 = [];
    let arr1_1 = [];
    let arr2_1 = [];
    let arr3_1 = [];
    d.classMyopiaCorrectInfos.forEach(v => {
      arr_1.push(v.className);
      arr1_1.push(v.correctMyopiaRate);
      arr2_1.push(v.unMyopiaRate);
      arr3_1.push(v.udMyopiaRate);
    });
    myExtend2.xAxis[0].data = arr_1;
    myExtend2.series[0].data = arr1_1;
    myExtend2.series[1].data = arr2_1;
    myExtend2.series[2].data = arr3_1;
  });
}
</script>

<style scoped lang="less"></style>
