<template>
  <div class="w-full">
    <div id="SubClassCorrect" class="text-base font-bold m-b-1">附：班级近视矫正情况</div>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th>年级</th>
          <th>班级名称</th>
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
      <tbody>
        <tr v-for="(item, index) in state.detail" :key="item.prefix">
          <td>{{ index + 1 }}</td>
          <td>{{ item.gradeName }}</td>
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
            <div>({{ floatToPercent(item.manUdMyopiaRate) }}/{{ floatToPercent(item.womanUdMyopiaRate) }})</div>
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
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { getClassMyopiaCorrectInfo_s } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, schoolId, schoolType } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});
getClassMyopiaCorrectInfo_s({
  planId,
  schoolId,
  schoolType
}).then(d => {
  let arr = [];
  d.forEach(v => {
    v.classMyopiaCorrectInfos.forEach(vv => {
      arr.push(vv);
    });
  });
  state.detail = arr;
});
</script>

<style scoped lang="less"></style>
