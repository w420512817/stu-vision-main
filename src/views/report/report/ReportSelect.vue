<template>
  <n-card title="数据报告" h-full shadow-sm flex>
    <div border p-5 w-full shadow-sm b-gray-200>
      <n-form ref="formRef" inline :model="formValue" :rules="rules" label-placement="left">
        <n-grid :x-gap="12" :y-gap="8" cols="4 s:4 m:4 l:5 xl:6 2xl:6">
          <n-form-item-gi label="地区" path="areaRange">
            <n-cascader
              v-model:value="formValue.areaRange"
              clearable
              placeholder="请选择"
              max-tag-count="responsive"
              expand-trigger="click"
              value-field="regionId"
              label-field="regionName"
              :options="state.areaList"
              check-strategy="parent"
              @update:value="areaRangeChange"
            />
          </n-form-item-gi>
          <n-form-item-gi label="筛查模式" path="planMode" show-require-mark style="width: 300px">
            <n-select
              v-model:value="formValue.planMode"
              placeholder="请选择"
              :options="planModeList"
              @update:value="changePlanMode"
            />
          </n-form-item-gi>
          <n-form-item-gi label="学校">
            <n-select
              v-model:value="formValue.schoolId"
              placeholder="搜索学校"
              :loading="state.loading"
              :options="state.schoolList"
              label-field="orgName"
              value-field="orgId"
              filterable
              clearable
              remote
              @search="handleSearch"
              @update:value="schoolIdChange"
            />
          </n-form-item-gi>
          <n-form-item-gi :label="planName" path="planId">
            <n-select
              v-model:value="formValue.planId"
              filterable
              label-field="planName"
              value-field="planId"
              :placeholder="`搜索${planName}`"
              :options="state.planList"
              :loading="state.loading"
              clearable
              remote
            />
          </n-form-item-gi>
          <n-form-item-gi label="学段">
            <n-select
              v-model:value="formValue.schoolType"
              :options="state.perfixs"
              label-field="lable"
              value-field="value"
            />
          </n-form-item-gi>
          <n-form-item-gi>
            <n-button type="primary" @click="goReport()">查看报告</n-button>
          </n-form-item-gi>
        </n-grid>
      </n-form>
    </div>
    <Notice />
  </n-card>
</template>

<script setup>
import { reactive, nextTick, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getReportArea, getReportSchools, getReportPlans } from '@/api/report/index';
import { useApplicationStore } from '@/store';
import { usePermission } from '@common/hooks/business/usePermission';
import { planModeList } from './data';
const { hasPermission } = usePermission();
const { push } = useRouter();
const rules = {
  areaRange: [{ required: true, message: '请选择地区', trigger: ['blur', 'change'] }],
  planId: [{ required: true, message: '请选择计划', trigger: ['blur', 'change'] }]
};
const { appType } = useApplicationStore();
const formRef = ref(null);
const formValue = reactive({
  areaLevel: null,
  schoolType: null,
  planName: null,
  schoolId: null,
  schoolName: null,
  planId: null,
  areaRange: null,
  areaName: null,
  areaLabel: null,
  screeningType: appType,
  planMode: 1
});
let state = reactive({
  provinceId: '',
  cityId: '',
  regionId: '',
  perfixs: [],
  planList: [],
  schoolList: [],
  loading: false,
  areaList: []
});
const planName = computed(() => {
  return formValue.planMode == 1 ? '计划' : '任务';
});

const getAreaList = async () => {
  let d = await getReportArea();
  state.areaList = [d];
};
getAreaList();
async function areaRangeChange(val, option) {
  await nextTick();
  formValue.areaLabel = option.regionName || null;
  formValue.schoolType = null;
  state.perfixs = [];
  state.schoolList = [];
  formValue.schoolName = null;
  formValue.schoolId = null;
  formValue.planId = null;
  state.planList = [];
  if (formValue.areaRange) {
    state.provinceId = formValue.areaRange.substring(0, 2) + '0000';
    state.cityId = formValue.areaRange.substring(2, 4) == '00' ? '' : formValue.areaRange.substring(0, 4) + '00';
    state.regionId = formValue.areaRange.substring(4, 6) == '00' ? '' : formValue.areaRange;
    formValue.areaLevel = formValue.areaRange.substring(4, 6) != '00' ? '3' : '2';
    if (!state.cityId && !state.regionId) {
      formValue.areaLevel = 1;
    }
    let strName = '';
    state.areaList.forEach(v => {
      if (state.provinceId && v.regionId == state.provinceId) {
        strName += v.regionName;
        v.children.forEach(vv => {
          if (state.cityId && vv.regionId == state.cityId) {
            strName += vv.regionName;
            vv.children.forEach(vvv => {
              if (state.regionId && vvv.regionId == state.regionId) {
                strName += vvv.regionName;
              }
            });
          }
        });
      }
    });
    formValue.areaName = strName == '浙江省' ? strName : strName.replace('浙江省', '');
    initSchools();
    initPlans();
  }
}
function initSchools() {
  getReportSchools({
    current: 1,
    size: 50,
    planRange: formValue.areaRange
  }).then(d => {
    state.schoolList = d.records;
  });
}
function initPlans() {
  getReportPlans({
    type: formValue.areaLevel * 1 - 1,
    areaId: formValue.areaRange,
    screeningType: formValue.screeningType,
    planMode: formValue.planMode
  }).then(d => {
    state.planList = d;
  });
}
async function schoolIdChange(e) {
  formValue.schoolType = null;
  state.perfixs = [];
  if (formValue.schoolId) {
    formValue.areaLevel = 4;
    formValue.schoolName = state.schoolList.find(d => d.orgId == e).orgName;
    let perfix = state.schoolList.find(d => d.orgId == e);
    let perfixs = perfix.prefx.split(',');
    let maps = perfixs.map(v => {
      return {
        value: v,
        lable:
          v == 1
            ? '幼儿园'
            : v == 2
            ? '小学'
            : v == 3
            ? '初中'
            : v == 4
            ? '普高'
            : v == 5
            ? '职高'
            : v == 6
            ? '大专'
            : v == 7
            ? '本科'
            : '未定义学段'
      };
    });
    state.perfixs = maps;
    formValue.schoolType = maps[0].value;
  } else {
    formValue.areaLevel = formValue.areaRange.substring(4, 6) != '00' ? '3' : '2';
    if (!state.cityId && !state.regionId) {
      formValue.areaLevel = 1;
    }
  }
  formValue.planId = null;
  initPlans();
}
function handleSearch(d) {
  getReportSchools({
    current: 1,
    size: 50,
    name: d,
    planRange: formValue.areaRange
  }).then(d => {
    state.schoolList = d.records;
  });
}

function changePlanMode() {
  resetInfo();
  schoolIdChange();
  if (formValue.areaRange) {
    initPlans();
    initSchools();
  }
}

function resetInfo() {
  Object.assign(formValue, {
    schoolType: null,
    schoolName: null,
    schoolId: null,
    planId: null
  });
  Object.assign(state, {
    planList: [],
    perfixs: [],
    schoolList: []
  });
}

defineOptions({ name: 'ReportSelect' });

function goReport() {
  // 市级报告9032	查看报告9033	打印报告9034
  // 区级报告9035	查看报告9036	打印报告9037
  // 学校报告9038	查看报告9039	打印报告9040
  formRef.value.validate(async errors => {
    if (!errors) {
      console.log('formValue', formValue);
      let { areaLevel } = formValue;
      // if (areaLevel == 2 && (!hasPermission(9032) || !hasPermission(9033))) {
      //   window.$message.error('无查看市报告的权限');
      //   return false;
      // }
      // if (areaLevel == 3 && (!hasPermission(9035) || !hasPermission(9036))) {
      //   window.$message.error('无查看区报告的权限');
      //   return false;
      // }
      // if (areaLevel == 4 && (!hasPermission(9038) || !hasPermission(9039))) {
      //   window.$message.error('无查看学校报告的权限');
      //   return false;
      // }

      push({ path: '/report/report-view', query: formValue });
    }
  });
}
</script>

<style scoped lang="less"></style>
