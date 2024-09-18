<template>
  <component :is="curComp" />
</template>
<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/store';
import reportSelectSchool from './report-school/reportSelectSchool.vue';
import reportSelect from './ReportSelect.vue';

const {
  userInfo: { orgType }
} = useUserStore();
// orgType 10-学校 20-医院 30-政府部门 40-社会筛查机构
const curComp = computed(() => {
  let com = reportSelectSchool;
  switch (orgType) {
    case 10:
      com = reportSelectSchool;
      break;
    case 30:
      com = reportSelect;
      break;
  }
  return com;
});
</script>
