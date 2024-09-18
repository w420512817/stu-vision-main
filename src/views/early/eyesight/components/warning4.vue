<template>
  <n-form
    ref="formRef"
    :rules="astigmatismRules"
    :model="formData"
    label-placement="left"
    class="b-(1px solid #ccc) h-600px"
    :show-require-mark="false"
  >
    <n-card title="散光预警" size="small" pl-1 pt-sm :bordered="false">
      <n-grid cols="5" pt-lg>
        <n-form-item-gi label="散光度数：" path="symbol">
          <n-select v-model:value="formData.symbol" w-80px :options="operate" />
        </n-form-item-gi>
        <n-form-item-gi class="-ml-xl" path="numericalValue">
          <n-input v-model:value="formData.numericalValue" ml-30px w-160px />
        </n-form-item-gi>
        <n-form-item-gi ml-lg> D </n-form-item-gi>
      </n-grid>
      <n-button type="primary" class="mt-10 ml-9% w-75px" @click="save">保存</n-button>
      <n-button color="#a7a7a7" class="ml-12% w-75px" @click="onReset">清除</n-button>
    </n-card>
  </n-form>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { number } from 'vue-types';
import { addEyesightValueWaning, eyesightWarningOrdinary } from '@/api/early/index';
import { operate, astigmatismRules } from '@/views/early/table.data';

const props = defineProps({ num: number().def() });
const origin = {
  numericalValue: null,
  symbol: null
};

const formData = reactive({ ...origin });
const formRef = ref(null);

async function btn() {
  const res = await eyesightWarningOrdinary({ warningType: props.num });
  Object.assign(formData, res);
}

// 保存
async function save() {
  validateItems().then(async res => {
    if (res) {
      await addEyesightValueWaning({ warningType: props.num, param: JSON.stringify(formData) });
      window.$message.success('保存成功');
    }
  });
}

// 清除
function onReset() {
  Object.assign(formData, origin);
}

/**
 * 校验
 */
function validateItems() {
  return new Promise(resolve => {
    formRef.value.validate(errors => {
      if (!errors) {
        resolve(true);
      } else {
        throw new Error('表单验证错误');
      }
    });
  });
}

onMounted(() => {
  btn();
});
</script>

<style scoped>
:deep(.n-card-header__main) {
  font-weight: 700 !important;
  font-size: 17px;
}
</style>
