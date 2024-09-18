<template>
  <n-card class="h-full shadow-sm" title="视力预警">
    <n-form class="w-full" inline label-placement="left" :model="formValue" @keypress.enter="onSearch">
      <n-grid cols="2 md:3 xl:4 2xl:5 3xl:6" :x-gap="20" responsive="screen">
        <n-form-item-gi label="年份:">
          <n-select v-model:value="formValue.planYear" :options="years" />
        </n-form-item-gi>
        <n-form-item-gi label="计划名称:">
          <n-select v-model:value="formValue.planId" :options="options" label-field="planName" value-field="planId" />
        </n-form-item-gi>
        <n-form-item-gi label="学校名称:">
          <n-input v-model:value="formValue.orgName" />
        </n-form-item-gi>
        <n-gi>
          <search-buttons @search="onSearch" @reset="onReset" />
        </n-gi>
      </n-grid>
    </n-form>
    <n-button v-auth="9048" type="primary" mb-md @click="go('/early/eyesight/setEarly')">预警阀值设置</n-button>
    <!-- <n-button type="primary" mb-md @click="go('/early/eyesight/setEarly')">预警阀值设置</n-button> -->
    <n-data-table remote :loading="loading" :columns="columns" :data="dataSource" :pagination="pagination" />
  </n-card>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useThrottleFn } from '@vueuse/core';
import { useGo } from '@common/hooks/usePage';
// hooks
import useApi from '@common/hooks/business/useApi';
import usePagination from '@common/hooks/business/usePagination';
// static data
import { AC_DETAILS } from '@common/enum/pageEnum';
import { createColumns, years } from '../table.data';
// api
import { schoolWaringList, getPlanList } from '@/api/early/index';

const origin = {
  planId: null,
  planYear: null,
  orgName: null
};

const formValue = reactive({ ...origin });
const dataSource = ref([]);
const options = ref([]);
const { go } = useGo();
const columns = createColumns((key, row) => onClickBtn(key, row));
const { fetch: getList, loading } = useApi(schoolWaringList);
const { pagination, setCount, setPage } = usePagination(() => {
  getDataSource();
});

/**
 * 点击操作区
 * @param key 操作按钮的 key 值
 * @param row 操作按钮对应的行信息
 */
function onClickBtn(key, row = {}) {
  switch (key) {
    case AC_DETAILS:
      go({
        name: 'commonDetail',
        query: { id: row.orgId, planId: row.planId }
      });
      break;
  }
}

/**
 * 获取 table 数据
 */
async function getDataSource() {
  const { page: current, pageSize: size } = pagination;
  const params = {
    ...formValue,
    current,
    size
  };
  const data = await getList(params);
  // dataSource.value = data?.list ?? [];
  dataSource.value = data?.records ?? [];
  setCount(~~data.total);
}
const getPlan = async () => {
  options.value = await getPlanList();
};

const onSearch = useThrottleFn(() => {
  setPage(1);
  getDataSource();
}, 800);

function onReset() {
  Object.assign(formValue, origin);
  onSearch();
}

onMounted(() => {
  getDataSource();
  getPlan();
});
defineOptions({
  name: 'EyesightEarly'
});
</script>

<style scoped></style>
