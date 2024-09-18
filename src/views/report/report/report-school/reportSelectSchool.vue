<template>
  <n-card title="数据报告" class="h-full shadow-sm flex">
    <div class="flex w-full">
      <div class="w-1/2">
        <n-form
          ref="formRef"
          :model="state"
          :rules="rules"
          label-placement="left"
          label-width="100"
          require-mark-placement="right-hanging"
          :style="{
            maxWidth: '640px'
          }"
        >
          <n-form-item label="报告类型" path="reportType">
            <n-radio-group v-model:value="state.reportType" name="radiogroup" @update:value="getPlanData">
              <n-space>
                <n-radio v-for="item in reportTypeList" :key="item.value" :value="item.value">
                  {{ item.label }}
                </n-radio>
              </n-space>
            </n-radio-group>
          </n-form-item>
          <n-form-item v-if="isSocial" label="学校名称" path="schoolId" show-require-mark style="width: 300px">
            <n-select
              v-model:value="state.schoolId"
              placeholder="请输入学校名称选择"
              :options="schoolOpt"
              label-field="schoolName"
              value-field="schoolId"
              filterable
              remote
              @search="getAssociateSchool"
              @update:value="changeSchool"
            />
          </n-form-item>
          <n-form-item label="筛查模式" path="planMode" show-require-mark style="width: 300px">
            <n-select
              v-model:value="state.planMode"
              placeholder="请选择"
              :options="planModeList"
              @update:value="getPlanData"
            />
          </n-form-item>
          <n-form-item label="年份" path="planYear" style="width: 300px">
            <n-select v-model:value="state.planYear" :options="years" clearable @update:value="getPlanData" />
          </n-form-item>
          <n-form-item label="学段" path="perfixId" style="width: 300px">
            <n-select
              v-model:value="state.perfixId"
              :options="state.GradeClassTree"
              value-field="id"
              label-field="name"
              children-field="none"
              @update:value="handleUpdatePerfix"
            />
          </n-form-item>
          <n-form-item
            v-if="state.reportType == 4 || state.reportType == 5"
            label="年级"
            path="gradeId"
            style="width: 300px"
          >
            <n-select
              v-model:value="state.gradeId"
              :options="state.grades"
              value-field="id"
              label-field="name"
              children-field="none"
              @update:value="handleUpdateGrade"
            />
          </n-form-item>
          <n-form-item v-if="state.reportType == 5" label="班级" path="classId" style="width: 300px">
            <n-select
              v-model:value="state.classId"
              :options="state.classes"
              value-field="id"
              label-field="name"
              children-field="none"
              @update:value="handleUpdateClass"
            />
          </n-form-item>
        </n-form>
        <n-data-table :columns="columns" :data="state.plans" :loading="loading" max-height="500" />
      </div>
      <div class="w-1/2 p-2 box-border flex-y-center flex-col">
        <div class="w-full shadow border-1 rounded border-gray-200 border-solid p-2 box-border">
          支持自动生成多维度、多样化灵活报表，并具备数据可视化展示功能，满足不同机构的需求；支持学校、年级、班级三级查询权限，多维度展现数据情况，为防控策略的制定提供大数据支撑;
        </div>
        <div class="w-60 h-15 text-xl border border1 flex-center rounded border-gray-500 shadow-md m-t-5">
          选择报告类型
        </div>
        <icon-zondicons:arrow-thick-down class="text-8 text-gray-600" />
        <div class="w-60 h-15 text-xl border border1 flex-center rounded border-gray-500 shadow-md">选择报告维度</div>
        <icon-zondicons:arrow-thick-down class="text-8 text-gray-600" />
        <div class="w-60 h-15 text-xl border border1 flex-center rounded border-gray-500 shadow-md">选择计划</div>
        <icon-zondicons:arrow-thick-down class="text-8 text-gray-600" />
        <div class="w-60 h-15 text-xl border border1 flex-center rounded border-gray-500 shadow-md">生成报告</div>
        <icon-zondicons:arrow-thick-down class="text-8 text-gray-600" />
        <icon-zondicons:clipboard class="text-14 text-gray-600" />
      </div>
    </div>
  </n-card>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from 'vue';
import { reportTypes } from './data.js';
import { planModeList } from '../data.js';
import { schoolTypesGradeClassTree, getSchoolPlans, associateSchoolPage, getPlanListByOrg } from '@/api/report';
import { useRouter } from 'vue-router';
import useApi from '@common/hooks/business/useApi';
import { useUserStore, useApplicationStore } from '@/store';
import { createColumns } from './columns.data.jsx';
import { OrgTypeEnum } from '@common/enum/pageEnum';
import { useThrottleFn } from '@vueuse/core';

defineOptions({ name: 'ReportSelect' });

const { fetch: getPlanListByOrgApi, loading } = useApi(getPlanListByOrg);
let {
  userInfo: { orgName, orgType, orgId }
} = useUserStore();

const { push } = useRouter();
const { appType } = useApplicationStore();

const formRef = ref(null);
const rules = {
  perfixId: [{ required: true, message: '请选择学段', trigger: ['blur', 'change'] }],
  gradeId: [{ required: true, message: '请选择年级', trigger: ['blur', 'change'] }],
  classId: [{ required: true, message: '请选择班级', trigger: ['blur', 'change'] }]
};

let state = reactive({
  type: appType,
  reportType: '3',
  planYear: null,
  schoolId: null,
  GradeClassTree: [],
  plans: [],
  perfixId: null,
  grades: [],
  gradeId: null,
  classes: [],
  classId: null,
  loading: false,
  areaList: [],
  planMode: 1,
  orgName: null
});

const schoolOpt = ref([]);
const columns = createColumns(handleClick);

const isSocial = computed(() => {
  return OrgTypeEnum[orgType] == 'HOSPITAL' || OrgTypeEnum[orgType] == 'SOCIAL';
});
let reportTypeList = computed(() => {
  return reportTypes.filter(item => item.show);
});

let years = computed(() => {
  let arr = [];
  for (let i = 0; i <= new Date().getFullYear() - 2017; i++) {
    arr.push({ value: `${2018 + i}`, label: `${2018 + i}` });
  }
  return arr;
});

function getPlanData() {
  if (isSocial.value) {
    return getHospitalOrgPlanData();
  }

  getSchoolPlans({
    screeningType: state.type,
    type: state.reportType,
    planMode: state.planMode,
    planYear: state.planYear,
    gradeId: state.gradeId,
    classId: state.classId
  }).then(d => {
    state.plans = d;
  });
}

async function getHospitalOrgPlanData() {
  let { schoolId, planYear, planMode } = state;
  if (!schoolId) return;
  let res = await getPlanListByOrgApi({ orgId: schoolId, appType, planYear, planMode });
  state.plans = res;
}

function handleUpdatePerfix(e) {
  state.classes = [];
  state.classId = null;
  state.grades = [];
  state.gradeId = null;
  state.grades = state.GradeClassTree.find(v => v.id == e).children;
  getPlanData();
}
function handleUpdateGrade(e) {
  state.classes = [];
  state.classId = null;
  state.classes = state.grades.find(v => v.id == e).children;
  getPlanData();
}
function handleUpdateClass() {
  getPlanData();
}

async function getSchoolTypesGradeClassTree(orgId) {
  let res = await schoolTypesGradeClassTree({ orgId });
  state.GradeClassTree = res;
}

const getAssociateSchool = useThrottleFn(async name => {
  let res = await associateSchoolPage({ name, current: 1, size: 50, associateOrgId: orgId });
  schoolOpt.value = res?.records || [];
}, 300);

function changeSchool(orgId, opt) {
  state.orgName = opt.schoolName;
  state.perfixId = null;
  getSchoolTypesGradeClassTree(orgId);
  getPlanData();
}

function handleClick(row) {
  const { planId } = row;
  formRef.value.validate(async errors => {
    if (!errors) {
      let { reportType, gradeId, classId, perfixId } = state;
      let gradeName = gradeId ? state.grades.find(v => v.id == gradeId).name : '';
      let className = classId ? state.classes.find(v => v.id == classId).name : '';
      push({
        path: '/report/report-view-school',
        query: {
          planId,
          orgName: state.orgName || orgName,
          reportType,
          gradeId,
          gradeName,
          className,
          classId,
          perfixId,
          orgId: state.schoolId || orgId
        }
      });
    }
  });
}

onMounted(() => {
  if (OrgTypeEnum[orgType] == 'SCHOOL') {
    getSchoolTypesGradeClassTree(orgId);
    getPlanData();
  } else if (OrgTypeEnum[orgType] == 'HOSPITAL') {
    getAssociateSchool();
  }
});
</script>

<style scoped lang="less"></style>
