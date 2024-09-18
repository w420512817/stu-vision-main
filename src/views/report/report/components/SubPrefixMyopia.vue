<template>
  <div class="w-full">
    <div id="SubPrefixMyopia" class="text-base font-bold m-b-1">附：学段近视率</div>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>学段</th>
          <th>学校数量</th>
          <th>有效筛查人数</th>
          <th>近视人数</th>
          <th>近视率(%)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in state.detail" :key="item.prefix">
          <td>{{ item.prefixName }}</td>
          <td>{{ item.schoolCount }}</td>
          <td>{{ item.effectiveStdCount }}</td>
          <td>{{ item.myopiaStdCount }}</td>
          <td>{{ floatToPercent(item.myopiaRate) }}</td>
        </tr>
      </tbody>
    </n-table>
    <div class="m-b-5 text-sm leading-6">注：近视率=近视人数/有效筛查人数</div>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { getPrefixMyopiaRate, getPrefixMyopiaRate_r } from '@/api/report/index';
import { getPrefixMyopiaRatePro } from '@/api/report/index_province';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId, areaLevel } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});

if (areaLevel == 1) {
  getPrefixMyopiaRatePro({
    planId,
    provinceId: areaId
  }).then(d => {
    state.detail = d;
  });
} else if (areaLevel == 2) {
  getPrefixMyopiaRate({
    planId,
    cityId: areaId
  }).then(d => {
    state.detail = d;
  });
} else if (areaLevel == 3) {
  getPrefixMyopiaRate_r({
    planId,
    regionId: areaId
  }).then(d => {
    state.detail = d;
  });
}
</script>

<style scoped lang="less"></style>
