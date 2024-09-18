<template>
  <div class="w-full">
    <div id="MyopiaState" class="text-base font-bold m-b-1">{{ areaLevel == 4 ? '' : '总体' }}近视情况</div>
    <div v-if="state.detail.effectiveStdCount" class="m-b-5 text-sm leading-6">
      {{ areaName }}本次筛查发现有效筛查{{ state.detail.effectiveStdCount }}人，其中近视人数{{
        state.detail.myopiaStdCount
      }}人，近视率为{{ floatToPercent(state.detail.myopiaRate) }};
      <span v-if="areaLevel == 1 || areaLevel == 2">
        各地区近视率最高是{{ state.detail.maxHighRegion.region }}为{{
          floatToPercent(state.detail.maxHighRegion.myopiaRate)
        }}，近视率最低是{{ state.detail.minRegion.region }}为{{ floatToPercent(state.detail.minRegion.myopiaRate) }}。{{
          areaLevel == 1 ? '全省' : '全市'
        }}高度近视人数{{ state.detail.highMyopiaStdCount }}人，高度近视率为{{
          floatToPercent(state.detail.highMyopiaRate)
        }}，各地区高度近视率最高是{{ state.detail.maxHighRegion.region }}为{{
          floatToPercent(state.detail.maxHighRegion.highMyopiaRate)
        }}，高度近视率最低是{{ state.detail.minHighRegion.region }}为{{
          floatToPercent(state.detail.minHighRegion.highMyopiaRate)
        }}。
      </span>
      <span v-if="areaLevel == 3 || areaLevel == 4">
        男生近视人数{{ state.detail.sexMyopiaTypeInfo[0].manMyopiaStdCount }}人，近视率为{{
          floatToPercent(state.detail.sexMyopiaTypeInfo[0].manMyopiaRate)
        }}；女生近视人数{{ state.detail.sexMyopiaTypeInfo[0].womanMyopiaStdCount }}人，近视率为{{
          floatToPercent(state.detail.sexMyopiaTypeInfo[0].womanMyopiaRate)
        }}。高度近视人数{{ state.detail.highMyopiaStdCount }}人，高度近视率为{{
          floatToPercent(state.detail.highMyopiaRate)
        }}；男生高度近视人数{{ state.detail.manHighMyopiaStdCount }}人，高度近视率为{{
          floatToPercent(state.detail.manHighMyopiaRate)
        }}；女生高度近视人数{{ state.detail.womanHighMyopiaStdCount }}人，高度近视率为{{
          floatToPercent(state.detail.womanHighMyopiaRate)
        }}。
      </span>
    </div>
    <div v-if="state.detail.myopiaStdCount" class="w-full">
      <div class="flex-center">
        <PieChartReport :extend="extend" width="210mm" height="80mm" />
      </div>
      <pie-table>
        <pie-table-item>
          <template #left>近视人数(男/女)</template>
          <template #right>
            {{ state.detail.myopiaStdCount }}人 ({{ state.detail.sexMyopiaTypeInfo[0].manMyopiaStdCount }}人 /
            {{ state.detail.sexMyopiaTypeInfo[0].womanMyopiaStdCount }}人)
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>近视率(男/女)</template>
          <template #right>
            {{ floatToPercent(state.detail.myopiaRate) }}({{
              floatToPercent(state.detail.sexMyopiaTypeInfo[0].manMyopiaRate)
            }}
            / {{ floatToPercent(state.detail.sexMyopiaTypeInfo[0].womanMyopiaRate) }})
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>低度近视人数(男/女)</template>
          <template #right>
            {{ state.detail.sexMyopiaTypeInfo[1].myopiaStdCount }} 人 ({{
              state.detail.sexMyopiaTypeInfo[1].manMyopiaStdCount
            }}人 / {{ state.detail.sexMyopiaTypeInfo[1].womanMyopiaStdCount }}人)
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>低度近视率(男/女)</template>
          <template #right>
            {{ floatToPercent(state.detail.sexMyopiaTypeInfo[1].myopiaRate) }} ({{
              floatToPercent(state.detail.sexMyopiaTypeInfo[1].manMyopiaRate)
            }}
            / {{ floatToPercent(state.detail.sexMyopiaTypeInfo[1].womanMyopiaRate) }})
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>中度近视人数(男/女)</template>
          <template #right>
            {{ state.detail.sexMyopiaTypeInfo[2].myopiaStdCount }} 人 ({{
              state.detail.sexMyopiaTypeInfo[2].manMyopiaStdCount
            }}人 / {{ state.detail.sexMyopiaTypeInfo[2].womanMyopiaStdCount }}人)
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>中度近视率(男/女)</template>
          <template #right>
            {{ floatToPercent(state.detail.sexMyopiaTypeInfo[2].myopiaRate) }} ({{
              floatToPercent(state.detail.sexMyopiaTypeInfo[2].manMyopiaRate)
            }}
            / {{ floatToPercent(state.detail.sexMyopiaTypeInfo[2].womanMyopiaRate) }})
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>高度近视人数(男/女)</template>
          <template #right>
            {{ state.detail.sexMyopiaTypeInfo[3].myopiaStdCount }}人({{
              state.detail.sexMyopiaTypeInfo[3].manMyopiaStdCount
            }}人 / {{ state.detail.sexMyopiaTypeInfo[3].womanMyopiaStdCount }}人)
          </template>
        </pie-table-item>
        <pie-table-item>
          <template #left>高度近视率(男/女)</template>
          <template #right>
            {{ floatToPercent(state.detail.sexMyopiaTypeInfo[3].myopiaRate) }} ({{
              floatToPercent(state.detail.sexMyopiaTypeInfo[3].manMyopiaRate)
            }}
            / {{ floatToPercent(state.detail.sexMyopiaTypeInfo[3].womanMyopiaRate) }})
          </template>
        </pie-table-item>
      </pie-table>
    </div>
    <div class="m-b-5 text-sm leading-6">注：戴OK镜学生不计入低度、中度、高度近视情况统计。</div>
    <div v-if="areaLevel == 4" class="w-full">
      {{ state.schoolStr }}
      <BarChartReport :extend="myExtend_s" :label-map="labelMap_s" :chart-data="chartData_s" height="250px" />
      <p class="text-center m-b-10">{{ areaName }}各年级男、女生近视情况</p>
      <p class="text-center m-b-3 font-bold">{{ areaName }}各年级男、女生近视情况</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>年级</th>
            <th>
              <div>应筛查人数</div>
              (男/女)
            </th>
            <th>
              <div>有效筛查人数</div>
              (男/女)
            </th>
            <th>
              <div>近视人数</div>
              (男/女)
            </th>
            <th>
              <div>近视率</div>
              (男/女)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in state.detail.gradeMyopiaInfos" :key="item.gradeName">
            <td>{{ index + 1 }}</td>
            <td>{{ item.gradeName }}</td>
            <td>
              <div>{{ item.stdCount }}</div>
              ({{ item.manStdCount }}/{{ item.womanStdCount }})
            </td>
            <td>
              <div>{{ item.effectiveStdCount }}</div>
              ({{ item.manEffectiveStdCount }}/{{ item.womanEffectiveStdCount }})
            </td>
            <td>
              <div>{{ item.myopiaStdCount }}</div>
              ({{ item.manMyopiaStdCount }}/{{ item.womanMyopiaStdCount }})
            </td>
            <td>
              <div>{{ floatToPercent(item.myopiaRate) }}</div>
              ({{ floatToPercent(item.manMyopiaRate) }}/{{ floatToPercent(item.womanMyopiaRate) }})
            </td>
          </tr>
        </tbody>
      </n-table>
      <BarChartReport :extend="myExtend_s" :label-map="labelMap_s2" :chart-data="chartData_s2" height="250px" />
      <p class="text-center m-b-10">{{ areaName }}各年级近视程度分布情况</p>
      <p class="text-center m-b-3 font-bold">{{ areaName }}各年级近视程度分布情况</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>年级</th>
            <th>
              <div>低度近视人数</div>
              (男/女)
            </th>
            <th>
              <div>低度近视率</div>
              (男/女)
            </th>
            <th>
              <div>中度近视人数</div>
              (男/女)
            </th>
            <th>
              <div>中度近视率</div>
              (男/女)
            </th>
            <th>
              <div>高度近视人数</div>
              (男/女)
            </th>
            <th>
              <div>高度近视率</div>
              (男/女)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in state.m_degree" :key="item.gradeName">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>
              <div>{{ item.low }}</div>
              ({{ item.low_m }}/{{ item.low_w }})
            </td>
            <td>
              <div>{{ floatToPercent(item.p_low) }}</div>
              ({{ floatToPercent(item.p_low_m) }}/{{ floatToPercent(p_low_w) }})
            </td>
            <td>
              <div>{{ item.mid }}</div>
              ({{ item.mid_m }}/{{ item.mid_w }})
            </td>
            <td>
              <div>{{ floatToPercent(item.p_mid) }}</div>
              ({{ floatToPercent(item.p_mid_m) }}/{{ floatToPercent(p_mid_w) }})
            </td>
            <td>
              <div>{{ item.hig }}</div>
              ({{ item.hig_m }}/{{ item.hig_w }})
            </td>
            <td>
              <div>{{ floatToPercent(item.p_hig) }}</div>
              ({{ floatToPercent(item.p_hig_m) }}/{{ floatToPercent(p_hig_w) }})
            </td>
          </tr>
        </tbody>
      </n-table>
      <div class="w-full flex m-t-10 items-center justify-between">
        <div class="flex flex-col items-center w-1/2">
          <LineChartReport
            height="250px"
            width="90%"
            :extend="myExtend2"
            :label-map="labelMap2"
            :chart-data="chartData2"
          />
          <div>{{ areaName }}各年级近视率变化趋势</div>
        </div>
        <div class="flex flex-col items-center w-1/2">
          <LineChartReport
            height="250px"
            width="90%"
            :extend="myExtend2"
            :label-map="labelMap3"
            :chart-data="chartData3"
          />
          <div>{{ areaName }}各年级高度近视率变化趋势</div>
        </div>
      </div>
    </div>
    <div v-if="areaLevel == 1 || areaLevel == 2" class="w-full">
      <p class="text-center m-t-3 font-bold">{{ state.detail.city }}近视情况</p>
      <BarChartReport :extend="myExtend" :label-map="labelMap" :chart-data="chartData" height="250px" />
      <p class="text-center m-t-10 font-bold">{{ state.detail.city }}高度近视情况</p>
      <BarChartReport :extend="myExtend_h" :label-map="labelMap_h" :chart-data="chartData_h" height="250px" />
      <p class="text-center m-t-10 font-bold">{{ state.detail.city }}各县（市、区）近视率</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>县(市、区)</th>
            <th>应筛查人数</th>
            <th>有效筛查人数</th>
            <th>近视人数</th>
            <th>近视率</th>
            <th>高度近视人数</th>
            <th>高度近视率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in state.detail.regions" :key="item.region">
            <td>{{ index + 1 }}</td>
            <td>{{ item.region }}</td>
            <td>{{ item.stdCount }}</td>
            <td>{{ item.effectiveStdCount }}</td>
            <td>{{ item.myopiaStdCount }}</td>
            <td>{{ floatToPercent(item.myopiaRate) }}</td>
            <td>{{ item.highMyopiaStdCount }}</td>
            <td>{{ floatToPercent(item.highMyopiaRate) }}</td>
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
import { bar_per, bar_num, line_per } from '@common/settings/chartSetting';
import { getOverallMyopiaInfo, getOverallMyopiaInfo_r, getOverallMyopiaInfo_s } from '@/api/report/index';
import { getOverallMyopiaInfoPro } from '@/api/report/index_province';
import { useReportStore } from '@/store/modules/report';

import { floatToPercent } from '../data';

const userStore = useReportStore();
let { planId, areaId, areaLevel, schoolId, schoolType, areaName } = userStore.getAreaData;
let state = reactive({
  m_degree: [],
  schoolStr: '',
  detail: {}
});
const extend = reactive({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    show: false
  },
  series: [
    {
      name: '近视程度',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      label: {
        // position: 'inner',
        // fontSize: 14,
        show: false
      },
      labelLine: {
        show: false
      },
      data: [{ value: 1548, name: '低度' }]
    },
    {
      name: '近视比例',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 30
      },
      label: {
        formatter: ' {b|{b}：}{c}\n{hr|}\n 占比  {per|{d}%}  ',
        rich: {
          a: {
            color: '#6E7079',
            width: '100%',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            lineHeight: 33
          },
          per: {
            color: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
        { value: 0, name: '近视人群' },
        { value: 0, name: '非近视人群' }
      ]
    }
  ]
});
let labelMap2 = {
  myopiaRate: '近视率'
};
let chartData2 = reactive({
  columns: ['gradeName', 'myopiaRate'],
  rows: []
});
let labelMap3 = {
  highMyopiaRate: '高度近视率'
};
let chartData3 = reactive({
  columns: ['gradeName', 'highMyopiaRate'],
  rows: []
});
let myExtend2 = { ...line_per };
let labelMap = reactive({
  myopiaRate: '近视率'
});
let chartData = reactive({
  columns: ['region', 'myopiaRate'],
  rows: [{ region: '市本级', myopiaRate: 0 }]
});
let labelMap_h = reactive({
  highMyopiaRate: '高度近视率'
});
let chartData_h = reactive({
  columns: ['region', 'highMyopiaRate'],
  rows: [{ region: '市本级', highMyopiaRate: 0 }]
});
let labelMap_s = reactive({
  myopiaStdCount: '近视',
  manMyopiaStdCount: '男生近视',
  womanMyopiaStdCount: '女生近视'
});
let chartData_s = reactive({
  columns: ['gradeName', 'myopiaStdCount', 'manMyopiaStdCount', 'womanMyopiaStdCount'],
  rows: []
});
let labelMap_s2 = reactive({
  low: '低度近视',
  mid: '中度近视',
  hig: '高度近视'
});
let chartData_s2 = reactive({
  columns: ['name', 'low', 'mid', 'hig'],
  rows: []
});
let myExtend_s = {
  ...bar_num,
  yAxis: {
    name: '人数',
    splitLine: {
      show: true
    },
    axisLine: {
      // 设置轴线的属性
      show: false
    }
  }
};
let myExtend = bar_per;
let myExtend_h = bar_per;
if (areaLevel == 1) {
  getOverallMyopiaInfoPro({
    planId: planId,
    provinceId: areaId
  }).then(d => {
    state.detail = d;
    extend.series[0].data = [
      { value: d.sexMyopiaTypeInfo[1].myopiaStdCount * 1, name: '低度' },
      { value: d.sexMyopiaTypeInfo[2].myopiaStdCount * 1, name: '中度' },
      { value: d.sexMyopiaTypeInfo[3].myopiaStdCount * 1, name: '高度' }
    ];
    extend.series[1].data = [
      { value: d.myopiaStdCount * 1, name: '近视人群' },
      { value: d.noMyopiaStdCount * 1, name: '非近视人群' }
    ];
    chartData.rows = JSON.parse(JSON.stringify(d.regions));
    chartData_h.rows = JSON.parse(JSON.stringify(d.regions));
  });
} else if (areaLevel == 2) {
  getOverallMyopiaInfo({
    planId: planId,
    cityId: areaId
  }).then(d => {
    state.detail = d;
    extend.series[0].data = [
      { value: d.sexMyopiaTypeInfo[1].myopiaStdCount * 1, name: '低度' },
      { value: d.sexMyopiaTypeInfo[2].myopiaStdCount * 1, name: '中度' },
      { value: d.sexMyopiaTypeInfo[3].myopiaStdCount * 1, name: '高度' }
    ];
    extend.series[1].data = [
      { value: d.myopiaStdCount * 1, name: '近视人群' },
      { value: d.noMyopiaStdCount * 1, name: '非近视人群' }
    ];
    chartData.rows = JSON.parse(JSON.stringify(d.regions));
    chartData_h.rows = JSON.parse(JSON.stringify(d.regions));
  });
} else if (areaLevel == 3) {
  getOverallMyopiaInfo_r({
    planId: planId,
    regionId: areaId
  }).then(d => {
    state.detail = d;
    extend.series[0].data = [
      { value: d.sexMyopiaTypeInfo[1].myopiaStdCount * 1, name: '低度' },
      { value: d.sexMyopiaTypeInfo[2].myopiaStdCount * 1, name: '中度' },
      { value: d.sexMyopiaTypeInfo[3].myopiaStdCount * 1, name: '高度' }
    ];
    extend.series[1].data = [
      { value: d.myopiaStdCount * 1, name: '近视人群' },
      { value: d.effectiveStdCount - d.myopiaStdCount, name: '非近视人群' }
    ];
  });
} else if (areaLevel == 4) {
  getOverallMyopiaInfo_s({
    planId,
    schoolId,
    schoolType
  }).then(d => {
    state.detail = d;
    extend.series[0].data = [
      { value: d.sexMyopiaTypeInfo[1].myopiaStdCount * 1, name: '低度' },
      { value: d.sexMyopiaTypeInfo[2].myopiaStdCount * 1, name: '中度' },
      { value: d.sexMyopiaTypeInfo[3].myopiaStdCount * 1, name: '高度' }
    ];
    extend.series[1].data = [
      { value: d.myopiaStdCount * 1, name: '近视人群' },
      { value: d.noMyopiaStdCount * 1, name: '非近视人群' }
    ];
    let str = '';
    let arr = [];
    d.gradeMyopiaInfos.forEach(v => {
      if (v.gradeName != '合计') {
        arr.push(v.gradeName);
        // str += v.gradeName;
        // str += '，';
      }
    });
    if (arr[0]) {
      str += `${arr[0]}至${arr[arr.length - 1]}，`;
    }
    str += '近视率分别为：';
    d.gradeMyopiaInfos.forEach(v => {
      if (v.gradeName != '合计') {
        str += '，';
        str += floatToPercent(v.myopiaRate);
      }
    });
    str += '。';
    d.gradeMyopiaInfos.forEach(v => {
      if (v.gradeName != '合计') {
        str += v.gradeName;
        str += '中，';
        str +=
          v.maxClass.className +
          '近视率最高为：' +
          floatToPercent(v.maxClass.myopiaRate) +
          '；' +
          v.minClass.className +
          '近视率最低为：' +
          floatToPercent(v.minClass.myopiaRate) +
          '。';
      }
    });
    state.schoolStr = str.replace('分别为：，', '分别为：');
    chartData_s.rows = d.gradeMyopiaInfos.filter(v => v.gradeName != '合计');
    chartData2.rows = JSON.parse(JSON.stringify(d.gradeMyopiaInfos));
    chartData3.rows = JSON.parse(JSON.stringify(d.gradeMyopiaInfos));
    chartData_h.rows = d.regions;
    let arr2 = [];
    d.gradeMyopiaInfos.forEach(v => {
      let obj = {
        name: '',
        low: '',
        low_m: '',
        low_w: '',
        p_low: '',
        p_low_m: '',
        p_low_w: '',
        mid: '',
        mid_m: '',
        mid_w: '',
        p_mid: '',
        p_mid_m: '',
        p_mid_w: '',
        hig: '',
        hig_m: '',
        hig_w: '',
        p_hig: '',
        p_hig_m: '',
        p_hig_w: ''
      };
      obj.name = v.gradeName;
      v.sexMyopiaTypeInfo.forEach(vv => {
        console.log('vv', vv);
        if (vv.myopiaType == 1) {
          obj.low = vv.myopiaStdCount;
          obj.low_m = vv.manMyopiaStdCount;
          obj.low_w = vv.womanMyopiaStdCount;
          obj.p_low = vv.myopiaRate;
          obj.p_low_m = vv.manMyopiaRate;
          obj.p_low_w = vv.womanMyopiaRate;
        }
        if (vv.myopiaType == 2) {
          obj.mid = vv.myopiaStdCount;
          obj.mid_m = vv.manMyopiaStdCount;
          obj.mid_w = vv.womanMyopiaStdCount;
          obj.p_mid = vv.myopiaRate;
          obj.p_mid_m = vv.manMyopiaRate;
          obj.p_mid_w = vv.womanMyopiaRate;
        }
        if (vv.myopiaType == 3) {
          obj.hig = vv.myopiaStdCount;
          obj.hig_m = vv.manMyopiaStdCount;
          obj.hig_w = vv.womanMyopiaStdCount;
          obj.p_hig = vv.myopiaRate;
          obj.p_hig_m = vv.manMyopiaRate;
          obj.p_hig_w = vv.womanMyopiaRate;
        }
      });
      arr2.push(obj);
    });
    state.m_degree = arr2;
    chartData_s2.rows = arr2.filter(v => v.name != '合计');
    console.log('arr2arr2', arr2);
  });
}
</script>

<style scoped lang="less"></style>
