<template>
  <div class="w-full">
    <div id="SubThreeType" class="text-base font-bold m-b-1">附：学校近视、远视、散光情况</div>
    <p class="text-center m-b-3 font-bold">{{ areaName }}学校近视、远视、散光情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th><div class="w-60px">学校名称</div></th>
          <th><div class="w-50px">学段</div></th>
          <th>
            <div>近视人数</div>
            近视率
          </th>
          <th>
            <div>远视人数</div>
            远视率
          </th>
          <th>
            <div>散光人数</div>
            散光率
          </th>
          <th>
            <div>合计(去重)</div>
            百分比
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail" :key="item.prefix">
          <td>{{ index + 1 }}</td>
          <td>
            <div class="w-60px text-left">{{ item.schoolName }}</div>
          </td>
          <td>
            <div class="w-50px text-left">{{ item.schoolPrefix }}</div>
          </td>
          <td>
            <div>{{ item.myopiaStdCount }}</div>
            {{ floatToPercent(item.myopiaRate) }}
          </td>
          <td>
            <div>{{ item.hyperopiaStdCount }}</div>
            {{ floatToPercent(item.hyperopiaRate) }}
          </td>
          <td>
            <div>{{ item.astigmatismStdCount }}</div>
            {{ floatToPercent(item.astigmatismRate) }}
          </td>
          <td>
            <div>{{ item.totalStdCount }}</div>
            {{ floatToPercent(item.totalRate) }}
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
import { getSchoolMyopiaTypeInfo_r } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaName } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});
getSchoolMyopiaTypeInfo_r({
  planId,
  regionId: areaId
}).then(d => {
  state.detail = d;
});
</script>

<style scoped lang="less"></style>
