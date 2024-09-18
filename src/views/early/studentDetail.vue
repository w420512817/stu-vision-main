<template>
  <n-card class="h-full shadow-sm" title="预警学生详情">
    <n-form
      class="w-full"
      inline
      label-placement="left"
      :model="formValue"
      :rules="idCardRules"
      @keypress.enter="onSearch"
    >
      <n-grid cols="2 md:3 xl:4 2xl:5 3xl:6" :x-gap="20" responsive="screen" :collapsed="gridCollapsed">
        <n-form-item-gi label="学生姓名:">
          <n-input v-model:value="formValue.studentName" />
        </n-form-item-gi>
        <n-form-item-gi label="性别:">
          <n-select v-model:value="formValue.sex" :options="sexOptions" label-field="name" value-field="type" />
        </n-form-item-gi>
        <n-form-item-gi label="身份证号/护照号:" path="idcard" w-280px :show-require-mark="false">
          <n-input v-model:value="formValue.idcard" placeholder="身份证号/护照号" />
        </n-form-item-gi>
        <n-form-item-gi label="预警类型:" class="ml-14%">
          <n-select
            v-model:value="formValue.warningType"
            :options="typeOptions"
            label-field="warningTypeName"
            value-field="warningType"
          />
        </n-form-item-gi>
        <n-form-item-gi label="预警状态:">
          <n-select
            v-model:value="formValue.warningState"
            :options="stateOptions"
            label-field="name"
            value-field="type"
          />
        </n-form-item-gi>
        <n-gi suffix #="{ overflow }">
          <n-form-item>
            <search-buttons
              breakpoint="3xl"
              :overflow="overflow"
              @search="onSearch"
              @reset="onReset"
              @collapse="gridCollapsed = !gridCollapsed"
            />
          </n-form-item>
        </n-gi>
      </n-grid>
    </n-form>
    <n-data-table remote :columns="columns" :data="dataSource" :pagination="pagination" />
  </n-card>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useThrottleFn } from '@vueuse/core';
import { useRoute } from 'vue-router';
// hooks
import usePagination from '@/hooks/business/usePagination';
// api
// import { studentWaringList } from '@/api/early/index';
import { getCariesStudent, getCariesSex, getCariesType, getCariesState } from '@/api/early/decayed';
import { getWarningTypeList, studentWarningPageList } from '@/api/early/examine';

import { createDetail, idCardRules } from './table.data';

const gridCollapsed = ref(true);

const origin = {
  studentName: null,
  sex: null,
  idcard: null,
  warningType: null,
  warningState: null
};

const { query } = useRoute();
const formValue = reactive({ ...origin });
const dataSource = ref([]);
const columns = createDetail();
const sexOptions = ref([]);
const typeOptions = ref([]);
const stateOptions = ref([]);
const { pagination, setCount, setPage } = usePagination(() => {
  getDataSource();
});

/**
 * 获取 table 数据
 */
async function getDataSource() {
  const { page: current, pageSize: size } = pagination;
  const params = {
    planId: query.planId,
    orgId: query.orgId,
    warningCategory: query.flagsV == 1 ? 2 : 1,
    ...formValue,
    current,
    size
  };
  const api = query.flagsV == 1 ? studentWarningPageList : getCariesStudent;
  const data = await api(params);
  dataSource.value = data?.records ?? [];
  setCount(~~data.total);
}

const onSearch = useThrottleFn(() => {
  setPage(1);
  getDataSource();
}, 800);

function onReset() {
  Object.assign(formValue, origin);
  onSearch();
}

/**
 * 下拉框
 */
async function dropDown() {
  let [data1, data2, data3] = await Promise.allSettled([
    getCariesSex(),
    query.flagsV == 1 ? getWarningTypeList() : getCariesType(),
    getCariesState()
  ]);
  sexOptions.value = data1.value;
  typeOptions.value = data2.value;
  stateOptions.value = data3.value;
}

onMounted(() => {
  getDataSource();
  dropDown();
});
</script>

<style scoped></style>
