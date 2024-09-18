<template>
  <q-page class="h-full shadow-sm bg-white flex" :loading="!Object.keys(state.outLineDetail).length">
    <div>
      <div class="sticky top-100px">
        <div
          style="height: calc(100vh - 110px)"
          class="w-50 divide-y-1 divide-gray-200 border-r-1 border-gray-200 overflow-y-auto"
        >
          <div class="leading-50px text-center text-2xl">目录</div>
          <div
            v-for="item in state.reportIndexs"
            :key="item.key"
            class="w-full h-10 flex-y-center p-3 box-border bg-blue-0 cursor-pointer hover:bg-blue-100"
            @click="intoView(item.key)"
          >
            <n-checkbox v-model:checked="item.checked" />
            <div class="pl-2 box-border">
              <span class="text-sm leading-4">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="w-full flex-y-center justify-between p-3 box-border sticky top-95px bg-white z-10 shadow">
        <div class="text-xl">报告详情</div>
        <n-space>
          <n-button v-if="showPrient" type="primary" @click="goPrint()">打印报告</n-button>
          <n-button @click="goBack()">返回</n-button>
        </n-space>
      </div>
      <div class="w-full flex-center">
        <div ref="reportDom" class="w-full flex flex-col items-center">
          <div style="width: 210mm">
            <OutLine :detail="state.outLineDetail" :plan-detail="state.planDetail" />
            <component
              :is="item.component"
              v-for="item in state.reportIndexs"
              v-show="item.checked"
              :ref="item.key"
              :key="item.key"
              plan-id="asdfsfsdfsfd"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { reportIndexs } from './data.js';
import OutLine from './components/OutLine.vue';
import Print from './print.js';
import { useRouter, useRoute } from 'vue-router';
import { getEyesightReport } from '@/api/report/index';
import { planInfo } from '@common/api/examine/plan';
import { useReportStore } from '@/store/modules/report';
import { usePermission } from '@common/hooks/business/usePermission';
import QPage from '@common/qd-components/QPage/index.vue';

const { hasPermission } = usePermission();
// 市级报告9032	查看报告9033	打印报告9034
// 区级报告9035	查看报告9036	打印报告9037
// 学校报告9038	查看报告9039	打印报告9040
const userStore = useReportStore();
const { replace } = useRouter();
const { query } = useRoute();
const reportDom = ref(null);
let { areaLevel, areaName, areaRange, planId, schoolId, schoolName, schoolType } = query;
let showPrient = computed(() => {
  return areaLevel == 2 && hasPermission(9034)
    ? true
    : areaLevel == 3 && hasPermission(9037)
    ? true
    : areaLevel == 4 && hasPermission(9040)
    ? true
    : false;
});
let state = reactive({
  planDetail: {},
  outLineDetail: {},
  planId: '',
  areaId: '',
  reportIndexs: []
});
if (areaLevel == 4) {
  userStore.setAreaData({
    planId,
    areaId: areaRange,
    areaLevel,
    areaName: schoolName,
    schoolId,
    schoolType
  });
} else {
  userStore.setAreaData({ planId, areaId: areaRange, areaLevel, areaName });
}
function intoView(key) {
  document.getElementById(key).scrollIntoView({ block: 'center', behavior: 'smooth' });
}
function goBack() {
  replace('/report/report-select');
}
function goPrint() {
  Print(reportDom.value);
}
function getReportIndexs() {
  planInfo({
    planId,
    schoolId
  }).then(d => {
    state.planDetail = d;
  });
  getEyesightReport({
    planId,
    orgId: areaLevel == '4' ? schoolId : '',
    type: areaLevel == '1' ? '10' : areaLevel == '2' ? '15' : areaLevel == '3' ? '20' : areaLevel == '4' ? '25' : '',
    areaId: areaLevel != '4' ? areaRange : ''
  })
    .then(d => {
      console.log('报告详情', d);

      state.outLineDetail = d;
      state.outLineDetail.planModeName ||= '计划';
      state.outLineDetail.planModeName = state.outLineDetail.planModeName.replace('模式', '');
      let arr = d?.reportContentType?.split(',') ?? [];
      let comps = [];
      arr.forEach(v => {
        reportIndexs.forEach(vv => {
          if (vv.type.indexOf(v) != -1) {
            if (v == '205' || v == '305' || v == '405') {
              vv.name = '近视情况';
            }
            comps.push(vv);
          }
        });
      });
      state.reportIndexs = comps;
    })
    .finally(() => {
      // userStore.setAreaData({ planId: '987163795291904', areaId: '110100', areaLevel: 2, areaName: '北京市' });
      // userStore.setAreaData({ planId: '987163795291904', areaId: '110101', areaLevel: 3, areaName: '东城区' });
      // userStore.setAreaData({
      //   planId: '987163795291904',
      //   areaId: '110101',
      //   areaLevel: 4,
      //   areaName: '蓝天学校',
      //   schoolId: '983452685385472',
      //   schoolType: '3'
      // });
      // state.reportIndexs = reportIndexs;
    });
}
getReportIndexs();
</script>

<style scoped lang="less"></style>
