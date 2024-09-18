<template>
  <div flex>
    <div class="w-230px h-650px bg-[#fff] mr-10 text-center">
      <h2 text-18px pt-xl font-700>预警阀值设置</h2>
      <div v-for="(item, index) in componentType" :key="index">
        <button
          class="w-150px h-32px mt-xl color-white"
          :class="{ active: num == index + 1, unActive: num != index + 1 }"
          @click="btn(item, index)"
        >
          {{ item.name }}
        </button>
        <br />
      </div>
    </div>
    <n-card flex-1 h-full>
      <keep-alive>
        <component :is="current.comName" :num="num" />
      </keep-alive>
    </n-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { componentType } from '../table.data';

const num = ref(1);

let current = reactive({
  comName: componentType[0].comName
});

const btn = (item, index) => {
  current.comName = item.comName;
  num.value = index + 1;
};
</script>

<style scoped>
:deep(.active) {
  background-color: #409eff !important;
}
:deep(.unActive) {
  background-color: #b5b5b5 !important;
}
</style>
