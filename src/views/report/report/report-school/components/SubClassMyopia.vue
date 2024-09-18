<template>
  <div class="w-full">
    <div id="SubClassMyopia" class="text-base font-bold m-b-1">附：班级近视情况</div>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
          <th>班级名称</th>
          <th>
            有效筛查人数
            <div>(男/女)</div>
          </th>
          <th>
            近视人数
            <div>(男/女)</div>
          </th>
          <th>
            近视率
            <div>(男/女)</div>
          </th>
          <th>
            高度近视人数
            <div>(男/女)</div>
          </th>
          <th>
            高度近视率
            <div>(男/女)</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail" :key="item.prefix">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.className }}</td>
          <td>
            {{ item.effectiveStdCount }}
            <div>({{ item.manEffectiveStdCount }}/{{ item.womanEffectiveStdCount }})</div>
          </td>
          <td>
            {{ item.myopiaStdCount }}
            <div>({{ item.manMyopiaStdCount }}/{{ item.womanMyopiaStdCount }})</div>
          </td>
          <td>
            {{ floatToPercent(item.myopiaRate) }}
            <div>({{ floatToPercent(item.manMyopiaRate) }}/{{ floatToPercent(item.womanMyopiaRate) }})</div>
          </td>
          <td>
            {{ item.highMyopiaStdCount }}
            <div>({{ item.manHighMyopiaStdCount }}/{{ item.womanHighMyopiaStdCount }})</div>
          </td>
          <td>
            {{ floatToPercent(item.highMyopiaRate) }}
            <div>({{ floatToPercent(item.manHighMyopiaRate) }}/{{ floatToPercent(item.womanHighMyopiaRate) }})</div>
          </td>
        </tr>
      </tbody>
    </n-table>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { getClassMyopiaInfo_s } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, schoolId, schoolType } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});
getClassMyopiaInfo_s({
  planId,
  schoolId,
  schoolType
}).then(d => {
  let arr = [];
  d.forEach(v => {
    v.classMyopiaInfoVOS.forEach(vv => {
      arr.push(vv);
    });
  });
  state.detail = arr;
});
</script>

<style scoped lang="less"></style>
