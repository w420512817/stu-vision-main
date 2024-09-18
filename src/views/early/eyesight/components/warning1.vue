<template>
  <n-form ref="formRef" :model="formData" label-placement="left" class="b-(1px solid #ccc)" :show-require-mark="false">
    <n-card title="未戴镜孩子裸眼视力" size="small" relative pt-sm pl-1>
      <div v-for="(item, index) in formData.notWearGlassesParamVOS" :key="index" mt-2>
        <n-grid cols="24">
          <n-form-item-gi :span="3" flex justify-end> 年龄区间：</n-form-item-gi>
          <n-form-item-gi
            :span="2"
            :rule="{
              pattern: /^[+]{0,1}(\d+)$/,
              message: '输入内容不能为空且只能输入整数',
              required: true,
              trigger: ['blur', 'input']
            }"
            :path="`notWearGlassesParamVOS[${index}].startAge`"
          >
            <n-input-number v-model:value="item.startAge" placeholder="开始年龄" min="0" :show-button="false" />
          </n-form-item-gi>
          <n-form-item-gi :span="1" flex-center> 至 </n-form-item-gi>
          <n-form-item-gi
            :span="2"
            :rule="{
              pattern: /^[+]{0,1}(\d+)$/,
              message: '输入内容不能为空且大于等于前者的整数',
              required: true,
              trigger: ['blur', 'input']
            }"
            :path="`notWearGlassesParamVOS[${index}].endAge`"
          >
            <n-input-number
              v-model:value="item.endAge"
              placeholder="结束年龄"
              :min="item.startAge"
              :show-button="false"
            />
          </n-form-item-gi>
          <n-form-item-gi
            label="低于视力值："
            :offset="1"
            :span="5"
            :rule="{
              pattern: /^\d(\.\d){0,1}$/,
              message: '数值不可低于3.3，且保留一位小数',
              required: true,
              trigger: ['blur', 'input']
            }"
            :path="`notWearGlassesParamVOS[${index}].belowVision`"
          >
            <n-input-number v-model:value="item.belowVision" :show-button="false" placeholder="单行输入" min="3.4" />
          </n-form-item-gi>
          <n-form-item-gi
            v-if="index === formData.notWearGlassesParamVOS.length - 1 && formData.notWearGlassesParamVOS.length > 1"
            cursor-pointer
            :offset="3"
            :span="2"
            flex-center
          >
            <icon-mi:delete
              class="text-18px -ml-50px w-10"
              @click="
                formData.notWearGlassesParamVOS.length < 2 ? '' : formData.notWearGlassesParamVOS.splice(index, 1)
              "
            />
          </n-form-item-gi>
          <n-form-item-gi v-if="index === 0" cursor-pointer :offset="2" :span="2">
            <n-button v-auth="9049" @click="addNotGlasses">增加预警设置</n-button>
          </n-form-item-gi>
        </n-grid>
      </div>
    </n-card>
    <n-card title="戴镜孩子矫正视力" size="small" :bordered="false" relative pt-sm pl-1>
      <div v-for="(item, index) in formData.wearGlassesParamVOS" :key="index" mt-2>
        <n-grid cols="24">
          <n-form-item-gi :span="3" flex justify-end> 年龄区间：</n-form-item-gi>
          <n-form-item-gi
            :span="2"
            :rule="{
              pattern: /^[+]{0,1}(\d+)$/,
              message: '输入内容不能为空且只能输入整数',
              required: true,
              trigger: ['blur', 'input']
            }"
            :path="`wearGlassesParamVOS[${index}].startAge`"
          >
            <n-input-number v-model:value="item.startAge" placeholder="开始年龄" min="0" :show-button="false" />
          </n-form-item-gi>
          <n-form-item-gi :span="1" flex-center> 至 </n-form-item-gi>
          <n-form-item-gi
            :span="2"
            :rule="{
              pattern: /^[+]{0,1}(\d+)$/,
              message: '输入内容不能为空且大于等于前者的整数',
              required: true,
              trigger: ['blur', 'input']
            }"
            :path="`wearGlassesParamVOS[${index}].endAge`"
          >
            <n-input-number
              v-model:value="item.endAge"
              placeholder="结束年龄"
              :min="item.startAge"
              :show-button="false"
            />
          </n-form-item-gi>
          <n-form-item-gi
            label="低于视力值："
            :offset="1"
            :span="5"
            :rule="{
              pattern: /^\d(\.\d){0,1}$/,
              message: '数值不可低于3.3，仅支持保留一位小数',
              required: true,
              trigger: ['blur', 'input']
            }"
            :path="`wearGlassesParamVOS[${index}].belowVision`"
          >
            <n-input-number v-model:value="item.belowVision" placeholder="单行输入" min="3.4" :show-button="false" />
          </n-form-item-gi>
          <n-form-item-gi
            v-if="index === formData.wearGlassesParamVOS.length - 1 && formData.wearGlassesParamVOS.length > 1"
            :offset="3"
            :span="2"
            flex-center
          >
            <icon-mi:delete
              class="text-18px w-10 -ml-50px"
              @click="formData.wearGlassesParamVOS.length < 2 ? '' : formData.wearGlassesParamVOS.splice(index, 1)"
            />
          </n-form-item-gi>
          <n-form-item-gi v-if="index === 0" cursor-pointer :offset="2" :span="2">
            <n-button v-auth="9049" @click="addWearGlasses">增加预警设置</n-button>
          </n-form-item-gi>
        </n-grid>
      </div>
      <n-button type="primary" class="mt-12 mb-11% ml-9% w-75px" @click="save()">保存</n-button>
      <n-button color="#a7a7a7" class="ml-12% w-75px" @click="onReset"> 清除 </n-button>
    </n-card>
  </n-form>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { cloneDeep } from 'lodash-es';
import { number } from 'vue-types';
import { addEyesightValueWaning, visionDeviationVOList } from '@/api/early/index';

const props = defineProps({ num: number().def() });
const origin = {
  notWearGlassesParamVOS: [
    { startAge: null, endAge: null, belowVision: null },
    { startAge: null, endAge: null, belowVision: null }
  ],
  wearGlassesParamVOS: [
    { startAge: null, endAge: null, belowVision: null },
    { startAge: null, endAge: null, belowVision: null }
  ]
};

const formData = reactive(cloneDeep(origin));
const formRef = ref(null);

async function btn() {
  const res = await visionDeviationVOList({ warningType: props.num });
  const { notWearGlassesParamVOS = null, wearGlassesParamVOS = null } = res;
  notWearGlassesParamVOS && (formData.notWearGlassesParamVOS = notWearGlassesParamVOS);
  wearGlassesParamVOS && (formData.wearGlassesParamVOS = wearGlassesParamVOS);
  // Object.assign(formData, res);
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
  Object.assign(formData, cloneDeep(origin));
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

// 增加未戴镜设置
const addNotGlasses = () => {
  formData.notWearGlassesParamVOS.push({
    startAge: null,
    endAge: null,
    belowVision: null
  });
};

// 增加戴镜设置
function addWearGlasses() {
  formData.wearGlassesParamVOS.push({
    startAge: null,
    endAge: null,
    belowVision: null
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
