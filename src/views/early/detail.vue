<template>
  <n-card class="h-full shadow-sm" title="查看详情">
    <n-form
      inline
      class="w-full"
      label-placement="left"
      :model="formValue"
      :rules="idCardRules"
      @keypress.enter="onSearch"
    >
      <n-grid cols="2 md:3 xl:4 2xl:5 3xl:6" :x-gap="20" responsive="screen" :collapsed="gridCollapsed">
        <n-form-item-gi label="姓名:">
          <n-input v-model:value="formValue.studentName" />
        </n-form-item-gi>
        <n-form-item-gi label="性别:">
          <n-select v-model:value="formValue.sex" :options="sexOptions" label-field="name" value-field="type" />
        </n-form-item-gi>
        <n-form-item-gi label="身份证号/护照号:" path="idcard" :show-require-mark="false">
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
    <n-data-table remote :loading="loading" :columns="columns" :data="dataSource" :pagination="pagination" />
  </n-card>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useThrottleFn } from '@vueuse/core';
import { useRoute } from 'vue-router';
// hooks
import useApi from '@common/hooks/business/useApi';
import usePagination from '@common/hooks/business/usePagination';
// api
import { getSexList, waringStateList } from '@common/api/common/index';
import { studentWaringList, warningType } from '@/api/early/index';

import { idCardRules, createDetail } from './table.data.jsx';

const origin = {
  studentName: null,
  sex: null,
  idcard: null,
  orgName: null,
  organizer: null,
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

const gridCollapsed = ref(true);

const { fetch: getList, loading } = useApi(studentWaringList);
const { pagination, setCount, setPage } = usePagination(() => {
  getDataSource();
});

/**
 * 获取 table 数据
 */
function getDataSource() {
  const { page: current, pageSize: size } = pagination;
  const params = {
    planId: query.planId,
    orgId: query.id,
    ...formValue,
    current,
    size
  };
  getList(params).then(data => {
    sourceList(data);
  });
}

function sourceList(data) {
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

// 下拉框
async function dropDown() {
  let [data1, data2, data3] = await Promise.allSettled([getSexList(), warningType(), waringStateList()]);
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
