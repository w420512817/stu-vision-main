<template>
  <n-form-item-gi flex-1 label="" path="beginAge">
    <n-select v-model:value="firstV" :options="opt1" :placeholder="placeholder[0]" clearable />
  </n-form-item-gi>
  <n-form-item-gi>
    <span mx-2>-</span>
  </n-form-item-gi>
  <n-form-item-gi flex-1 path="endAge">
    <n-select v-model:value="endV" :options="opt2" :placeholder="placeholder[1]" clearable />
  </n-form-item-gi>
</template>

<script setup>
import { watch, ref, computed } from 'vue';
import { cloneDeep } from 'lodash-es';

const props = defineProps({
  v1: [String, Number],
  v2: [String, Number],
  placeholder: {
    type: Array,
    default: () => ['请选择', '请选择']
  },
  opt1: {
    type: Array,
    default: () => []
  },
  opt2: {
    type: Array,
    default: () => []
  }
});
const emits = defineEmits(['update:v1', 'update:v2']);
const opt1 = ref(cloneDeep(props.opt1));
const opt2 = ref(cloneDeep(props.opt2));

const firstV = computed({
  get() {
    return props.v1;
  },

  set(v) {
    emits('update:v1', v);
  }
});

const endV = computed({
  get() {
    return props.v2;
  },

  set(v) {
    emits('update:v2', v);
  }
});

watch(firstV, v => {
  if (!v) {
    opt1.value.forEach(item => (item.disabled = false));
    opt2.value.forEach(item => (item.disabled = false));
    return;
  } else {
    opt2.value.forEach(item => {
      item.disabled = +item.value < v;
    });
  }
});
watch(endV, v => {
  if (!v) {
    opt1.value.forEach(item => (item.disabled = false));
    opt2.value.forEach(item => (item.disabled = false));
    return;
  } else {
    opt1.value.forEach(item => {
      item.disabled = +item.value > v;
    });
  }
});
</script>
