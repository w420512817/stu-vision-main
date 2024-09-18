<template>
  <n-card title="自定义报表" h-full shadow-sm flex>
    <n-form ref="formRef" label-placement="left" label-width="auto" :rules="gData.rules" :model="formData" inline>
      <n-grid cols="3" x-gap="30" class="!w-90% mx-auto">
        <n-form-item-gi v-if="!isSchool && !isSocial" label="地区" path="areaId">
          <n-cascader
            v-model:value="formData.areaId"
            clearable
            check-strategy="child"
            placeholder="地区"
            value-field="regionId"
            label-field="regionName"
            :options="areaList"
            @update:value="changeArea"
          />
        </n-form-item-gi>
        <n-form-item-gi label="学校名称" path="orgId">
          <n-select
            v-if="!isSchool"
            v-model:value="formData.orgId"
            :options="schoolList"
            :loading="loading"
            :label-field="isSocial ? 'schoolName' : 'orgName'"
            :value-field="isSocial ? 'schoolId' : 'orgId'"
            placeholder="请输入学校名称选择"
            filterable
            clearable
            remote
            :consistent-menu-width="false"
            @search="getSchools"
            @update:value="getPlanList"
          />
          <span v-else>{{ userInfo.orgName }}</span>
        </n-form-item-gi>
        <n-form-item-gi label="计划" path="planId">
          <n-select
            v-model:value="formData.planId"
            label-field="planName"
            value-field="planId"
            placeholder="请选择计划"
            :options="planList"
            :loading="planLoading"
            clearable
          />
        </n-form-item-gi>

        <n-gi :span="3">
          <div mb-4>
            <span class="text-18px">{{ screenLevel ? '高级' : '基础' }}筛选</span>
            <n-button type="primary" text ml-4 @click="screenLevel = !screenLevel">
              切换{{ screenLevel ? '基础' : '高级' }}筛选
            </n-button>
          </div>
        </n-gi>

        <n-form-item-gi label="选择性别" path="sex">
          <n-select
            v-model:value="formData.sex"
            :options="[
              { label: '男', value: '1' },
              { label: '女', value: '2' }
            ]"
            clearable
            placeholder="全部"
          />
        </n-form-item-gi>
        <n-form-item-gi label="年龄范围" :show-feedback="false">
          <twoSelect
            v-model:v1="formData.beginAge"
            v-model:v2="formData.endAge"
            :placeholder="['年龄起始值', '年龄结束值']"
            :opt1="optObj.beginAge"
            :opt2="optObj.endAge"
          />
        </n-form-item-gi>
        <n-form-item-gi label="检查情况" path="checkStatus">
          <n-select
            v-model:value="formData.checkStatus"
            placeholder="请选择检查情况"
            :options="gData.checkStatusList"
            clearable
          />
        </n-form-item-gi>
        <n-form-item-gi label="视力情况" path="eyeSightStatus">
          <n-select
            v-model:value="formData.eyeSightStatus"
            clearable
            placeholder="全部"
            :options="gData.eyeSituation"
          />
        </n-form-item-gi>
        <n-form-item-gi v-if="screenLevel" path="stuType" label="学生类型">
          <n-select v-model:value="formData.stuType" clearable :options="gData.stuTypeList" placeholder="全部" />
        </n-form-item-gi>
        <n-form-item-gi v-if="screenLevel" path="wearGlassStatus" label="戴镜情况">
          <n-select
            v-model:value="formData.wearGlassStatus"
            clearable
            :options="gData.glassSituation"
            placeholder="全部"
          />
        </n-form-item-gi>
        <template v-if="screenLevel">
          <n-gi :span="3">
            <n-divider class="!mt-0" title-placement="left"> 右眼 </n-divider>
          </n-gi>
          <n-form-item-gi label="裸眼视力" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginOdVision"
              v-model:v2="formData.endOdVision"
              :placeholder="['裸眼起始值', '裸眼结束值']"
              :opt1="optObj.beginOdVision"
              :opt2="optObj.endOdVision"
            />
          </n-form-item-gi>
          <n-form-item-gi label="戴镜视力" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginOdEyesight"
              v-model:v2="formData.endOdEyesight"
              :placeholder="['戴镜起始值', '戴镜结束值']"
              :opt1="optObj.beginOdEyesight"
              :opt2="optObj.endOdEyesight"
            />
          </n-form-item-gi>
          <n-form-item-gi label="OK镜度数" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginOdOk"
              v-model:v2="formData.endOdOk"
              :placeholder="['OK镜起始值', 'OK镜结束值']"
              :opt1="optObj.beginOdOk"
              :opt2="optObj.endOdOk"
            />
          </n-form-item-gi>
          <n-form-item-gi label="S球镜" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginDpOdSph"
              v-model:v2="formData.endDpOdSph"
              :placeholder="['S球镜起始值', 'S球镜结束值']"
              :opt1="optObj.beginDpOdSph"
              :opt2="optObj.endDpOdSph"
            />
          </n-form-item-gi>
          <n-form-item-gi label="C柱镜" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginDpOdCyl"
              v-model:v2="formData.endDpOdCyl"
              :placeholder="['C柱镜起始值', 'C柱镜结束值']"
              :opt1="optObj.endDpOdCyl"
              :opt2="optObj.endDpOdCyl"
            />
          </n-form-item-gi>
          <n-form-item-gi label="A轴位" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginDpOdAxial"
              v-model:v2="formData.endDpOdAxial"
              :placeholder="['A轴位起始值', 'A轴位结束值']"
              :opt1="optObj.beginDpOdAxial"
              :opt2="optObj.endDpOdAxial"
            />
          </n-form-item-gi>
          <n-gi :span="3">
            <n-divider class="!mt-0" title-placement="left"> 左眼 </n-divider>
          </n-gi>
          <n-form-item-gi label="裸眼视力" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginOsVision"
              v-model:v2="formData.endOsVision"
              :placeholder="['裸眼起始值', '裸眼结束值']"
              :opt1="optObj.beginOsVision"
              :opt2="optObj.endOsVision"
            />
          </n-form-item-gi>
          <n-form-item-gi label="戴镜视力" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginOsEyesight"
              v-model:v2="formData.endOsEyesight"
              :placeholder="['戴镜起始值', '戴镜结束值']"
              :opt1="optObj.beginOsEyesight"
              :opt2="optObj.endOsEyesight"
            />
          </n-form-item-gi>
          <n-form-item-gi label="OK镜度数" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginOsOk"
              v-model:v2="formData.endOsOk"
              :placeholder="['OK镜起始值', 'OK镜结束值']"
              :opt1="optObj.beginOsOk"
              :opt2="optObj.endOsOk"
            />
          </n-form-item-gi>
          <n-form-item-gi label="S球镜" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginDpOsSph"
              v-model:v2="formData.endDpOsSph"
              :placeholder="['S球镜起始值', 'S球镜结束值']"
              :opt1="optObj.beginDpOsSph"
              :opt2="optObj.endDpOsSph"
            />
          </n-form-item-gi>
          <n-form-item-gi label="C柱镜" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginDpOsCyl"
              v-model:v2="formData.endDpOsCyl"
              :placeholder="['C柱镜起始值', 'C柱镜结束值']"
              :opt1="optObj.beginDpOsCyl"
              :opt2="optObj.endDpOsCyl"
            />
          </n-form-item-gi>
          <n-form-item-gi label="A轴位" :show-feedback="false">
            <twoSelect
              v-model:v1="formData.beginDpOsAxial"
              v-model:v2="formData.endDpOsAxial"
              :placeholder="['A轴位起始值', 'A轴位结束值']"
              :opt1="optObj.beginDpOsAxial"
              :opt2="optObj.endDpOsAxial"
            />
          </n-form-item-gi>
        </template>
        <n-gi :span="3">
          <n-button @click="reset">重置</n-button>
          <n-button type="primary" class="w-100px ml-4" @click="getData">筛选</n-button>
        </n-gi>
        <n-gi :span="3" pb-15>
          <n-divider title-placement="left"> 详细数据 </n-divider>
          <n-space class="mb-4">
            <n-button type="primary" @click="print">下载表格</n-button>
            <n-button type="primary" @click="exportRepData">下载筛查数据</n-button>
          </n-space>
          <div ref="printEl"><n-data-table :columns="columns" :data="tableData" :loading="tableLoading" remote /></div>
        </n-gi>
      </n-grid>
    </n-form>
  </n-card>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from 'vue';
import useApi from '@common/hooks/business/useApi';
import { useApplicationStore, useUserStore } from '@/store';
import {
  getReportArea,
  getReportSchools,
  getPlanListByOrg,
  customReport,
  associateSchoolPage,
  exportCustomReport
} from '@/api/report';
import * as gData from './index.data';
import { OrgTypeEnum } from '@common/enum/pageEnum';
import { useThrottleFn } from '@vueuse/core';
import twoSelect from './components/twoSelect.vue';
import Print from '../report/print';
import { downloadByData } from '@common/utils/file/download';

const { userInfo } = useUserStore();
const { appType } = useApplicationStore();
const { fetch: getSchoolApi, loading } = useApi(getReportSchools);
const { fetch: getPlanApi, loading: planLoading } = useApi(getPlanListByOrg);
const { fetch: getTableApi, loading: tableLoading } = useApi(customReport);
const initData = {
  // 普通搜索数据
  areaId: null,
  orgId: null,
  planId: null,
  plan: null,
  class: null,
  classId: null,
  sex: null,
  ageRange: null,
  status: null,
  eyeSightStatus: null,
  wearGlassStatus: null,
  stuType: null,
  checkStatus: null,
  beginAge: null,
  endAge: null,
  // 视力详细指标搜索数据
  beginOdVision: null,
  endOdVision: null,
  beginOdEyesight: null,
  endOdEyesight: null,
  beginOdOk: null,
  endOdOk: null,
  beginDpOdSph: null,
  endDpOdSph: null,
  beginDpOdCyl: null,
  endDpOdCyl: null,
  beginDpOdAxial: null,
  endDpOdAxial: null,
  beginOsVision: null,
  endOsVision: null,
  beginOsEyesight: null,
  endOsEyesight: null,
  beginOsOk: null,
  endOsOk: null,
  beginDpOsSph: null,
  endDpOsSph: null,
  beginDpOsCyl: null,
  endDpOsCyl: null,
  beginDpOsAxial: null,
  endDpOsAxial: null
};

const formRef = ref();
const screenLevel = ref(false);
const formData = reactive({ ...initData });
const areaList = ref([]);
const schoolList = ref([]);
const planList = ref([]);
const tableData = ref([]);
const printEl = ref();
const optObj = reactive({
  beginAge: gData.ageRange,
  endAge: gData.ageRange,

  beginOdVision: gData.nakedRange,
  endOdVision: gData.nakedRange,
  beginOdEyesight: gData.glassRange,
  endOdEyesight: gData.glassRange,
  beginOdOk: gData.okRange,
  endOdOk: gData.okRange,
  beginDpOdSph: gData.sRange,
  endDpOdSph: gData.sRange,
  beginDpOdCyl: gData.cRange,
  endDpOdCyl: gData.cRange,
  beginDpOdAxial: gData.aRange,
  endDpOdAxial: gData.aRange,

  beginOsVision: gData.nakedRange,
  endOsVision: gData.nakedRange,
  beginOsEyesight: gData.glassRange,
  endOsEyesight: gData.glassRange,
  beginOsOk: gData.okRange,
  endOsOk: gData.okRange,
  beginDpOsSph: gData.sRange,
  endDpOsSph: gData.sRange,
  beginDpOsCyl: gData.cRange,
  endDpOsCyl: gData.cRange,
  beginDpOsAxial: gData.aRange,
  endDpOsAxial: gData.aRange
});
const columns = ref([
  { title: '筛查计划', key: 'planName', align: 'center', minWidth: 120 },
  { title: '统计范围', key: 'schoolName', align: 'center', minWidth: 120 },
  { title: '总计', key: 'total', align: 'center', minWidth: 80 }
]);

const isSchool = computed(() => {
  return !userInfo.govLevel && !isSocial.value;
});
// 是否为机构 医院或者社会机构
const isSocial = computed(() => {
  return OrgTypeEnum[userInfo.orgType] == 'HOSPITAL' || OrgTypeEnum[userInfo.orgType] == 'SOCIAL';
});

async function getArea() {
  let res = await getReportArea();
  areaList.value = [res];
}

const getSchools = useThrottleFn(async name => {
  let api = isSocial.value ? associateSchoolPage : getSchoolApi;
  let res = await api({ current: 1, size: 50, name, planRange: formData.areaId, associateOrgId: userInfo.orgId });
  schoolList.value = res.records || [];
}, 300);

async function getPlanList(orgId) {
  formData.planId = null;
  let res = await getPlanApi({ appType, orgId });
  planList.value = res;
}

function changeArea() {
  formData.orgId = null;
  formData.planId = null;
  planList.value = [];
  getSchools();
}

async function getData() {
  await formRef.value.validate();

  let res = await getTableApi(formData);
  let column = res.ageSexList.map(key => {
    return { key, title: key, width: 80, align: 'center' };
  });

  tableData.value = res.tableInfo.map(item => {
    let { values, ...v } = item;
    let ageV = res.ageSexList.reduce((perv, key, i) => {
      perv[key] = values[i];
      return perv;
    }, {});

    return { ...v, ...ageV };
  });
  columns.value.splice(2, columns.value.length - 3, ...column);
}

function reset() {
  columns.value.splice(2, columns.value.length - 3);
  Object.assign(formData, initData);
  tableData.value = [];
}

async function print() {
  await formRef.value.validate();
  Print(printEl.value);
}

async function exportRepData() {
  await formRef.value.validate();
  let res = await exportCustomReport(formData);
  console.log(res);
  let fileName = res.headers['content-disposition'].split(';')[1].split('filename=')[1];
  downloadByData(res.data, decodeURIComponent(fileName));
}

onMounted(() => {
  if (isSocial.value) {
    getSchools();
  } else if (!isSchool.value) {
    getArea();
    getSchools();
  } else {
    initData.orgId = userInfo.orgId;
    formData.orgId = userInfo.orgId;
    getPlanList(userInfo.orgId);
  }
});
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s;
  overflow: hidden;
  height: 330px;
}
.fade-enter,
.fade-leave-to {
  height: 0;
  overflow: hidden;
}
</style>
