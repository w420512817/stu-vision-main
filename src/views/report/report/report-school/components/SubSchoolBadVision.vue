<template>
  <div class="w-full">
    <div id="SubSchoolBadVision" class="text-base font-bold m-b-1">附：学校视力不良情况</div>
    <p class="text-center m-b-3 font-bold">{{ areaName }}学校视力不良情况</p>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th><div class="w-60px">学校名称</div></th>
          <th><div class="w-50px">学段</div></th>
          <th>视力已筛查</th>
          <th>
            <div>轻度视力不良人数</div>
            百分比
          </th>
          <th>
            <div>中度视力不良人数</div>
            百分比
          </th>
          <th>
            <div>重度视力不良人数</div>
            百分比
          </th>
          <!-- <th>
            <div>其他视力不良人数</div>
            百分比
          </th> -->
          <th>
            <div>总视力不良人数</div>
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
            <div class="w-50px text-left">{{ item.prefixName }}</div>
          </td>
          <td>{{ item.eyeSightCheckCount }}</td>
          <td>
            <div>{{ item.lowPoorVisionCount }}</div>
            {{ floatToPercent(item.lowPoorVisionRate) }}
          </td>
          <td>
            <div>{{ item.midPoorVisionCount }}</div>
            {{ floatToPercent(item.midPoorVisionRate) }}
          </td>
          <td>
            <div>{{ item.highPoorVisionCount }}</div>
            {{ floatToPercent(item.highPoorVisionRate) }}
          </td>
          <!-- <td>
            <div>{{ item.otherPoorVisionCount }}</div>
            {{ floatToPercent(item.otherPoorVisionRate) }}
          </td> -->
          <td>
            <div>{{ item.poorVisionCount }}</div>
            {{ floatToPercent(item.poorVisionRate) }}
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
import { getRegionSchoolPoorVision_r } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaName } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});
getRegionSchoolPoorVision_r({
  planId,
  id: areaId
}).then(d => {
  state.detail = d;
});
</script>

<style scoped lang="less"></style>
