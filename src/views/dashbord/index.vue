<template>
  <div class="text-primary text-32px">工作台</div>
</template>

<script setup>
import { useApplicationStore } from '@/store';
const { appType } = useApplicationStore();
console.log('appType', appType);
</script>

<style scoped lang="less">
.home {
  font-size: @font-size;
}
</style>
