<template>
  <n-card title="应用选择">
    <div class="h-full shadow-sm flex justify-around flex-wrap">
      <div
        v-for="item in appList"
        :key="item.value"
        class="w-1/5 h-150px flex flex-col items-center justify-center shadow-sm cursor-pointer"
        @click="goApp(item)"
      >
        <img class="absolute w-1/5 h-150px z-1" :src="item.img" alt="" />
        <div class="relative z-2" style="color: #343e7a; font-size: 22px">{{ item.label }}</div>
      </div>
    </div>
  </n-card>
</template>

<script setup>
import { appList } from './table.data.jsx';
import { useGo } from '@/hooks/usePage';
const { go } = useGo();
function goApp(d) {
  go({ path: d.path, query: { appType: d.value } });
}
</script>
