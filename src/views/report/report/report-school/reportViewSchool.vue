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
          <n-button v-auth="[9040, 9043, 9046]" type="primary" @click="goPrint()">打印报告</n-button>
          <n-button @click="goBack()">返回</n-button>
        </n-space>
      </div>
      <div class="w-full flex-center">
        <div ref="reportDom" style="width: 210mm">
          <OutLine :detail="state.outLineDetail" :plan-detail="state.planDetail" />
          <component
            :is="item.component"
            v-for="item in state.reportIndexs"
            v-show="item.checked"
            :ref="item.key"
            :key="item.key"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { reportIndexs } from './data.js';
import OutLine from './components/OutLine.vue';
import Print from '../print.js';
import { useRouter, useRoute } from 'vue-router';
import { useReportStore } from '@/store/modules/report';
import { getEyesightReport } from '@/api/report/index';
import { planInfo } from '@common/api/examine/plan';
import QPage from '@common/qd-components/QPage/index.vue';

const { replace } = useRouter();
const { query } = useRoute();
let { planId, orgId, orgName, reportType, gradeId, gradeName, className, classId, perfixId } = query;

const reportDom = ref(null);
const userStore = useReportStore();
userStore.setAreaData({
  planId,
  areaLevel: reportType * 1 + 1,
  areaName: `${orgName}${reportType * 1 >= 4 ? gradeName : ''}${reportType * 1 >= 5 ? className : ''}`,
  gradeId,
  classId,
  schoolId: orgId,
  schoolType: perfixId
});
let state = reactive({
  reportIndexs: [],
  planDetail: {},
  outLineDetail: {}
});
function getReportIndexs() {
  // TODO: 临时注释获取详情接口，写死orgId
  planInfo({
    planId,
    schoolId: orgId
  }).then(d => {
    state.planDetail = d;
  });
  getEyesightReport({
    planId,
    orgId,
    gradeId,
    classId,
    type: reportType == '3' ? '25' : reportType == '4' ? '30' : reportType == '5' ? '35' : ''
  })
    .then(d => {
      state.outLineDetail = d;
      state.outLineDetail.planModeName ||= '计划';
      state.outLineDetail.planModeName = state.outLineDetail.planModeName.replace('模式', '');
      let arr = d?.reportContentType?.split(',') ?? [];
      let comps = [];
      arr.forEach(v => {
        reportIndexs.forEach(vv => {
          if (vv.type.indexOf(v) != -1) {
            vv.checked = true;
            comps.push(vv);
          }
        });
      });
      state.reportIndexs = comps;
    })
    .finally(() => {});
}
getReportIndexs();
function intoView(key) {
  document.getElementById(key).scrollIntoView({ block: 'center', behavior: 'smooth' });
}
function goBack() {
  replace('/report/report-select');
}
function goPrint() {
  Print(reportDom.value);
}
</script>

<style scoped lang="less"></style>
