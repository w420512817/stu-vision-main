<template>
  <div class="w-full">
    <div id="SubSchoolCorrect" class="text-base font-bold m-b-1">附：学校近视矫正情况</div>
    <n-table :single-line="false" class="text-center">
      <thead>
        <tr>
          <th>序号</th>
          <th><div class="w-60px">学校名称</div></th>
          <th><div class="w-50px">学段</div></th>
          <th>
            <div>足矫人数</div>
            (男/女)
          </th>
          <th>
            <div>足矫率</div>
            (男/女)
          </th>
          <th>
            <div>欠矫人数</div>
            (男/女)
          </th>
          <th>
            <div>欠矫率</div>
            (男/女)
          </th>
          <th>
            <div>未矫人数</div>
            (男/女)
          </th>
          <th>
            <div>未矫率</div>
            (男/女)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in state.detail" :key="item.prefix">
          <td>{{ index + 1 }}</td>
          <td>
            <div class="w-60px text-left">{{ item.schoolName }}</div>
          </td>
          <td>
            <div class="w-50px text-left">{{ item.schoolPrefix }}</div>
          </td>
          <td>
            <div>{{ item.correctMyopiaStdCount }}</div>
            ({{ item.manCorrectMyopiaStdCount }}/{{ item.womanCorrectMyopiaStdCount }})
          </td>
          <td>
            <div>{{ floatToPercent(item.correctMyopiaRate) }}</div>
            ({{ floatToPercent(item.manCorrectMyopiaRate) }}/{{ floatToPercent(item.womanCorrectMyopiaRate) }})
          </td>
          <td>
            <div>{{ item.udMyopiaStdCount }}</div>
            ({{ item.manUdMyopiaStdCount }}/{{ item.womanUdMyopiaStdCount }})
          </td>
          <td>
            <div>{{ floatToPercent(item.udMyopiaRate) }}</div>
            ({{ floatToPercent(item.manUdMyopiaRate) }}/{{ floatToPercent(item.womanUdMyopiaRate) }})
          </td>
          <td>
            <div>{{ item.unMyopiaStdCount }}</div>
            ({{ item.manUnMyopiaStdCount }}/{{ item.womanUnMyopiaStdCount }})
          </td>
          <td>
            <div>{{ floatToPercent(item.unMyopiaRate) }}</div>
            ({{ floatToPercent(item.manUnMyopiaRate) }}/{{ floatToPercent(item.womanUnMyopiaRate) }})
          </td>
        </tr>
      </tbody>
    </n-table>
    <report-divider />
    <div style="page-break-after: always"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { getSchoolMyopiaCorrectInfo_r } from '@/api/report/index';
import { useReportStore } from '@/store/modules/report';
import { floatToPercent } from '../data';
const userStore = useReportStore();
let { planId, areaId } = userStore.getAreaData;
const state = reactive({
  detail: {},
  loading: false
});
getSchoolMyopiaCorrectInfo_r({
  planId,
  regionId: areaId
}).then(d => {
  state.detail = d;
});
</script>

<style scoped lang="less"></style>
