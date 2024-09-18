<template>
  <div class="w-full">
    <div id="OutLine" class="text-2xl text-center m-t-5">{{ props.detail.title }}</div>
    <div class="text-xl text-center m-y-5">分析时间：{{ props.detail.analysisTime }}</div>
    <div class="text-base font-bold m-b-1">注释</div>
    <div class="m-b-5 text-sm leading-6">
      {{ props.detail.noteContent }}
    </div>
    <div class="text-base font-bold m-b-1">概述</div>
    <div class="m-b-5 text-sm leading-6">
      {{ props.detail.outline }}
    </div>
    <div class="text-base font-bold m-b-1">筛查信息</div>
    <div class="m-b-5 text-sm leading-6">
      <!-- <p>学校名称：{{ planDetail.planName }}</p> -->
      <p>{{ detail.planModeName }}名称：{{ planDetail.planName }}</p>
      <p>年份：{{ planDetail.planYear }}</p>
      <p>{{ detail.planModeName }}类型：{{ planDetail.planTypeLaber }}</p>
      <p>{{ detail.planModeName }}范围：{{ planDetail.planRangeLaber }}</p>
      <p>筛查日期：{{ planDetail.startTime }} ~ {{ planDetail.endTime }}</p>
      <p v-if="planDetail.screeningOptions">筛查项目：{{ getScreenList(planDetail.screeningOptions || []) }}</p>
      <p v-if="props.detail && props.detail.worker">筛查人员：{{ props.detail.worker }}</p>
      <p>筛查设备：{{ props.detail.equipment }}</p>
    </div>
    <div class="text-base font-bold m-b-1">名词释义</div>
    <div
      v-if="props.detail && props.detail.nounDefinition"
      class="m-b-5 text-sm leading-6"
      v-html="props.detail.nounDefinition"
    ></div>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useReportStore } from '@/store/modules/report';
import { object } from 'vue-types';
let props = defineProps({
  detail: object().def({}),
  planDetail: object().def({})
});
const userStore = useReportStore();
// console.log(userStore.getAreaData);
let state = reactive({
  planId: '',
  areaId: '',
  areaLevel: ''
});
let { planId, areaId, areaLevel } = userStore.getAreaData;
state.planId = planId;
state.areaId = areaId;
state.areaLevel = areaLevel;
const getScreenList = list => {
  console.log(props.planDetail);
  if (!list.length) return '/';
  let arr = [];
  list.forEach(d => {
    d.itemList.forEach(m => {
      arr.push(m.screeningItemName);
    });
  });
  return arr.join(',');
};
</script>

<style scoped lang="less"></style>
