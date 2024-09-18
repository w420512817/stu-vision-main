<template>
  <div class="w-full">
    <div id="SubClassThreeType" class="text-base font-bold m-b-1">附：班级近视、远视、散光情况</div>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
          <th>班级名称</th>
          <th>近视人数/近视率</th>
          <th>远视人数/远视率</th>
          <th>散光人数/散光率</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail" :key="item.prefix">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
          <td>{{ item.className }}</td>
          <td>{{ item.myopiaStdCount }}/{{ floatToPercent(item.myopiaRate) }}</td>
          <td>{{ item.hyperopiaStdCount }}/{{ floatToPercent(item.hyperopiaRate) }}</td>
          <td>{{ item.astigmatismStdCount }}/{{ floatToPercent(item.astigmatismRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { getSchoolMyopiaTypeInfo_s } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, schoolId, schoolType } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});
getSchoolMyopiaTypeInfo_s({
  planId,
  schoolId,
  schoolType
}).then(d => {
  let arr = [];
  d.forEach(v => {
    v.classMyopiaTypeInfos.forEach(vv => {
      arr.push(vv);
    });
  });
  state.detail = arr;
});
</script>

<style scoped lang="less"></style>
