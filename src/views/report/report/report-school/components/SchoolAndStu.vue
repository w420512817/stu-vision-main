<template>
  <div ref="SchoolAndStu" class="w-full">
    <div id="SchoolAndStu" class="text-base font-bold m-b-1">学校和学生情况</div>
    <div v-if="state.detail.prefixSchoolCountInfoVO" class="m-b-5 text-sm leading-6">
      本次筛查涉及的{{ state.detail.prefixSchoolCountInfoVO.schoolCount }}所学校中包括
      {{
        state.detail.prefixSchoolCountInfoVO.kindergartenCount * 1
          ? `幼儿园${state.detail.prefixSchoolCountInfoVO.kindergartenCount}所`
          : ''
      }}
      {{
        state.detail.prefixSchoolCountInfoVO.primarySchoolCount * 1
          ? `、小学${state.detail.prefixSchoolCountInfoVO.primarySchoolCount}所`
          : ''
      }}
      {{
        state.detail.prefixSchoolCountInfoVO.middleSchoolCount * 1
          ? `、初中${state.detail.prefixSchoolCountInfoVO.middleSchoolCount}所`
          : ''
      }}
      {{
        state.detail.prefixSchoolCountInfoVO.highSchoolCount * 1
          ? `、高中${state.detail.prefixSchoolCountInfoVO.highSchoolCount}所`
          : ''
      }}
      {{
        state.detail.prefixSchoolCountInfoVO.collegeCount * 1
          ? `、大学${state.detail.prefixSchoolCountInfoVO.collegeCount}所`
          : ''
      }}。
      <span v-if="areaLevel == 2">
        各辖县(市、区)中，
        {{ state.detail.maxSchoolRegion }}学校最多为{{ state.detail.maxSchoolRegionCount }}所，
        {{ state.detail.minSchoolRegion }}学校最少为{{ state.detail.minSchoolRegionCount }}所 。
      </span>
      <span v-if="areaLevel == 3">
        全区
        {{ state.detail.prefixSchoolCountInfoVO.kindergartenStdCount * 1 ? '幼儿园' : '' }}
        {{ state.detail.prefixSchoolCountInfoVO.primarySchoolStdCount * 1 ? '、小学' : '' }}
        {{ state.detail.prefixSchoolCountInfoVO.middleSchoolStdCount * 1 ? '、初中' : '' }}
        {{ state.detail.prefixSchoolCountInfoVO.highSchoolStdCount * 1 ? '、高中' : '' }}
        {{ state.detail.prefixSchoolCountInfoVO.collegeStdCount * 1 ? '、大学' : '' }}
        学生比约为{{ state.detail.prefixPeopleRatio }}， {{ state.detail.maxPeoplePrefix }}人数比例偏大，{{
          state.detail.minPeoplePrefix
        }}人数比例偏小。
      </span>
    </div>
    <div v-if="areaLevel == 2" class="w-full">
      <div class="w-full flex items-center justify-center">
        <PieChartReport :extend="extend" width="120mm" height="80mm" />
      </div>
      <p class="text-center m-b-10">{{ state.detail.city }}各学段占比</p>
    </div>
    <div v-if="areaLevel == 3" class="w-full">
      <div class="w-full flex items-center justify-center">
        <PieChartReport :extend="extend" width="100mm" height="80mm" />
        <PieChartReport :extend="extend2" width="100mm" height="80mm" />
      </div>
      <div class="w-full flex items-center justify-center">
        <p class="w-1/2 text-center m-b-10">{{ state.detail.region }}各学段占比</p>
        <p class="w-1/2 text-center m-b-10">{{ state.detail.region }}各学段人数占比</p>
      </div>
    </div>

    <p v-if="areaLevel == 2" class="text-center m-b-3 font-bold">{{ state.detail.city }}各县（市、区）学段数量</p>
    <n-table v-if="areaLevel == 2" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>县(市、区)</th>
          <th>幼儿园</th>
          <th>小学</th>
          <th>初中</th>
          <th>
            <div>高中</div>
            <div>(普高/职高)</div>
          </th>
          <th>总数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail.regionPrefixSchoolCounts" :key="item.region">
          <td>{{ index + 1 }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.prefixSchoolCountInfoVO.kindergartenCount }}</td>
          <td>{{ item.prefixSchoolCountInfoVO.primarySchoolCount }}</td>
          <td>{{ item.prefixSchoolCountInfoVO.middleSchoolCount }}</td>
          <td>
            <div>{{ item.prefixSchoolCountInfoVO.highSchoolCount }}</div>
            <div>
              ({{ item.prefixSchoolCountInfoVO.normalHighSchoolCount }}/({{
                item.prefixSchoolCountInfoVO.professionalSchoolCount
              }})
            </div>
          </td>
          <td>{{ item.prefixSchoolCountInfoVO.schoolCount }}</td>
        </tr>
      </tbody>
    </n-table>
    <p v-if="areaLevel == 3" class="text-center m-b-3 font-bold">{{ state.detail.region }}各学情况</p>
    <n-table v-if="areaLevel == 3" :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>学段</th>
          <th>学校数量</th>
          <th>男生人数</th>
          <th>女生人数</th>
          <th>总人数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.gradeNum" :key="item.gradeName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.schoolNum }}</td>
          <td>{{ item.manCount }}</td>
          <td>{{ item.womenCount }}</td>
          <td>{{ item.count }}</td>
        </tr>
      </tbody>
    </n-table>
    <div v-if="state.detail.prefixSchoolCountInfoVO && areaLevel == 2" class="m-b-5 text-sm leading-6">
      其中，
      {{ state.detail.prefixSchoolCountInfoVO.kindergartenStdCount * 1 ? '幼儿园' : '' }}
      {{ state.detail.prefixSchoolCountInfoVO.primarySchoolStdCount * 1 ? '、小学' : '' }}
      {{ state.detail.prefixSchoolCountInfoVO.middleSchoolStdCount * 1 ? '、初中' : '' }}
      {{ state.detail.prefixSchoolCountInfoVO.highSchoolStdCount * 1 ? '、高中' : '' }}
      {{ state.detail.prefixSchoolCountInfoVO.collegeStdCount * 1 ? '、大学' : '' }}
      人数分别为
      {{
        state.detail.prefixSchoolCountInfoVO.kindergartenStdCount * 1
          ? `${state.detail.prefixSchoolCountInfoVO.kindergartenStdCount}人`
          : ''
      }}
      {{
        state.detail.prefixSchoolCountInfoVO.primarySchoolStdCount * 1
          ? `、${state.detail.prefixSchoolCountInfoVO.primarySchoolStdCount}人`
          : ''
      }}
      {{
        state.detail.prefixSchoolCountInfoVO.middleSchoolStdCount * 1
          ? `、${state.detail.prefixSchoolCountInfoVO.middleSchoolStdCount}人`
          : ''
      }}
      {{
        state.detail.prefixSchoolCountInfoVO.highSchoolStdCount * 1
          ? `、${state.detail.prefixSchoolCountInfoVO.highSchoolStdCount}人`
          : ''
      }}
      {{
        state.detail.prefixSchoolCountInfoVO.collegeStdCount * 1
          ? `、${state.detail.prefixSchoolCountInfoVO.collegeStdCount}人`
          : ''
      }}， {{ areaLevel == 1 ? '全省' : '全市' }}
      {{ state.detail.prefixSchoolCountInfoVO.kindergartenStdCount * 1 ? '幼儿园' : '' }}
      {{ state.detail.prefixSchoolCountInfoVO.primarySchoolStdCount * 1 ? '、小学' : '' }}
      {{ state.detail.prefixSchoolCountInfoVO.middleSchoolStdCount * 1 ? '、初中' : '' }}
      {{ state.detail.prefixSchoolCountInfoVO.highSchoolStdCount * 1 ? '、高中' : '' }}
      {{ state.detail.prefixSchoolCountInfoVO.collegeStdCount * 1 ? '、大学' : '' }}
      学生比约为{{ state.detail.prefixPeopleRatio }}， {{ state.detail.maxPeoplePrefix }}人数比例偏大，{{
        state.detail.minPeoplePrefix
      }}人数比例偏小。
    </div>
    <div v-if="areaLevel == 2" class="w-full">
      <div class="w-full flex items-center justify-center">
        <PieChartReport :extend="extend" width="120mm" height="80mm" />
      </div>
      <p class="text-center m-t-5 m-b-10">{{ state.detail.city }}各学段人数占比</p>

      <p class="text-center m-b-3 font-bold">{{ state.detail.city }}各县（市、区）学生数量</p>
      <n-table :single-line="false" class="text-center">
        <thead>
          <tr>
            <th>序号</th>
            <th>县(市、区)</th>
            <th>幼儿园人数</th>
            <th>小学人数</th>
            <th>初中人数</th>
            <th>
              <div>高中人数</div>
              <div>(普高/职高)</div>
            </th>
            <th>总人数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in state.detail.regionPrefixSchoolCounts" :key="item.region">
            <td>{{ index + 1 }}</td>
            <td>{{ item.region }}</td>
            <td>{{ item.prefixSchoolCountInfoVO.kindergartenStdCount }}</td>
            <td>{{ item.prefixSchoolCountInfoVO.primarySchoolStdCount }}</td>
            <td>{{ item.prefixSchoolCountInfoVO.middleSchoolStdCount }}</td>
            <td>
              <div>{{ item.prefixSchoolCountInfoVO.highSchoolStdCount }}</div>
              <div>
                ({{ item.prefixSchoolCountInfoVO.normalHighSchoolStdCount }}/{{
                  item.prefixSchoolCountInfoVO.professionalSchoolStdCount
                }})
              </div>
            </td>
            <td>{{ item.prefixSchoolCountInfoVO.stdCount }}</td>
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
import { percentToFloat } from '../data.js';

import { getSchoolStdInfo, getSchoolStdInfo_r } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
const userStore = useReportStore();
let state = reactive({
  gradeNum: [],
  schoolsDec: '',
  detail: {}
});
let { planId, areaId, areaLevel } = userStore.getAreaData;
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
      name: '学段占比',
      type: 'pie',
      radius: '60%',
      data: [{ value: 0, name: '幼儿园' }]
    }
  ]
});
const extend2 = reactive({
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
      name: '学段人数占比',
      type: 'pie',
      radius: '60%',
      data: [{ value: 0, name: '幼儿园' }]
    }
  ]
});
if (areaLevel == 2) {
  getSchoolStdInfo({
    planId: planId,
    cityId: areaId
  }).then(d => {
    state.detail = d;
    let arr = [];
    if (d?.prefixSchoolCountInfoVO?.kindergartenCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.kindergartenCountRate), name: '幼儿园' });
    }
    if (d?.prefixSchoolCountInfoVO?.primarySchoolCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.primarySchoolCountRate), name: '小学' });
    }
    if (d?.prefixSchoolCountInfoVO?.middleSchoolCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.middleSchoolCountRate), name: '初中' });
    }
    if (d?.prefixSchoolCountInfoVO?.highSchoolCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.highSchoolCountRate), name: '高中' });
    }
    if (d?.prefixSchoolCountInfoVO?.collegeCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.collegeCountRate), name: '大学' });
    }
    extend.series[0].data = arr;
  });
} else if (areaLevel == 3) {
  getSchoolStdInfo_r({
    planId: planId,
    regionId: areaId
  }).then(d => {
    state.detail = d;
    let arr = [];
    let arr2 = [];
    if (d?.prefixSchoolCountInfoVO?.kindergartenCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.kindergartenCountRate), name: '幼儿园' });
      arr2.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.kindergartenStdCountRate), name: '幼儿园' });
    }
    if (d?.prefixSchoolCountInfoVO?.primarySchoolCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.primarySchoolCountRate), name: '小学' });
      arr2.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.primarySchoolStdCountRate), name: '小学' });
    }
    if (d?.prefixSchoolCountInfoVO?.middleSchoolCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.middleSchoolCountRate), name: '初中' });
      arr2.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.middleSchoolStdCountRate), name: '初中' });
    }
    if (d?.prefixSchoolCountInfoVO?.highSchoolCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.highSchoolCountRate), name: '高中' });
      arr2.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.highSchoolStdCountRate), name: '高中' });
    }
    if (d?.prefixSchoolCountInfoVO?.collegeCount * 1) {
      arr.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.collegeCountRate), name: '大学' });
      arr2.push({ value: percentToFloat(d.prefixSchoolCountInfoVO.collegeStdCountRate), name: '大学' });
    }
    extend.series[0].data = arr;
    extend2.series[0].data = arr2;
    console.log('arrarrarr', arr, arr2);
    if (d?.prefixSchoolCountInfoVO?.kindergartenStdCount * 1) {
      state.gradeNum.push({
        gradeName: '幼儿园',
        schoolNum: d.prefixSchoolCountInfoVO.kindergartenCount,
        manCount: d.prefixSchoolCountInfoVO.kindergartenManStdCount,
        womenCount: d.prefixSchoolCountInfoVO.kindergartenWoManStdCount,
        count: d.prefixSchoolCountInfoVO.kindergartenStdCount
      });
    }
    if (d?.prefixSchoolCountInfoVO?.primarySchoolStdCount * 1) {
      state.gradeNum.push({
        gradeName: '小学',
        schoolNum: d.prefixSchoolCountInfoVO.primarySchoolCount,
        manCount: d.prefixSchoolCountInfoVO.primarySchoolManStdCount,
        womenCount: d.prefixSchoolCountInfoVO.primarySchoolWoManStdCount,
        count: d.prefixSchoolCountInfoVO.primarySchoolStdCount
      });
    }
    if (d?.prefixSchoolCountInfoVO?.middleSchoolStdCount * 1) {
      state.gradeNum.push({
        gradeName: '初中',
        schoolNum: d.prefixSchoolCountInfoVO.middleSchoolCount,
        manCount: d.prefixSchoolCountInfoVO.middleSchoolManStdCount,
        womenCount: d.prefixSchoolCountInfoVO.middleSchoolWoManStdCount,
        count: d.prefixSchoolCountInfoVO.middleSchoolStdCount
      });
    }
    if (d?.prefixSchoolCountInfoVO?.highSchoolStdCount * 1) {
      state.gradeNum.push({
        gradeName: '高中',
        schoolNum: d.prefixSchoolCountInfoVO.highSchoolCount,
        manCount: d.prefixSchoolCountInfoVO.highSchoolManStdCount,
        womenCount: d.prefixSchoolCountInfoVO.highSchoolWoManStdCount,
        count: d.prefixSchoolCountInfoVO.highSchoolStdCount
      });
    }
    if (d?.prefixSchoolCountInfoVO?.collegeStdCount * 1) {
      state.gradeNum.push({
        gradeName: '大学',
        schoolNum: d.prefixSchoolCountInfoVO.collegeCount,
        manCount: d.prefixSchoolCountInfoVO.collegeManStdCount,
        womenCount: d.prefixSchoolCountInfoVO.collegeWoManStdCount,
        count: d.prefixSchoolCountInfoVO.collegeStdCount
      });
    }
  });
}
</script>

<style scoped lang="less"></style>
