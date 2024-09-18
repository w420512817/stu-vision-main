import { reactive, markRaw } from 'vue';
// import ScreenState from './components/ScreenState.vue';
import MyopiaState from './components/MyopiaState.vue';
import MyopiaTrend from './components/MyopiaTrend.vue';
import MyopiaCorrect from './components/MyopiaCorrect.vue';
import MyopiaSpread from './components/MyopiaSpread.vue';
import DiopterSpread from './components/DiopterSpread.vue';
import HyperopiaReserve from './components/HyperopiaReserve.vue';
import VisionBad from './components/VisionBad.vue';
import SubClassMyopia from './components/SubClassMyopia.vue';
import SubClassCorrect from './components/SubClassCorrect.vue';
import SubClassThreeType from './components/SubClassThreeType.vue';
import { usePermission } from '@common/hooks/business/usePermission';
const { hasPermission } = usePermission();

export const reportIndexs = reactive([
  // {
  //   name: '筛查情况',
  //   checked: true,
  //   key: 'ScreenState',
  //   component: markRaw(ScreenState)
  // },
  {
    name: '近视情况',
    checked: true,
    key: 'MyopiaState',
    type: ['205', '305', '405'],
    component: markRaw(MyopiaState)
  },
  {
    name: '近视率趋势',
    checked: true,
    key: 'MyopiaTrend',
    type: ['210', '310', '410'],
    component: markRaw(MyopiaTrend)
  },
  {
    name: '近视矫正情况',
    checked: true,
    key: 'MyopiaCorrect',
    type: ['215', '315', '415'],
    component: markRaw(MyopiaCorrect)
  },
  {
    name: '视力分布情况',
    checked: true,
    key: 'MyopiaSpread',
    type: ['220', '320', '420'],
    component: markRaw(MyopiaSpread)
  },
  {
    name: '屈光度分布情况',
    checked: true,
    key: 'DiopterSpread',
    type: ['225', '325', '425'],
    component: markRaw(DiopterSpread)
  },
  {
    name: '远视储备情况',
    checked: true,
    key: 'HyperopiaReserve',
    type: ['230', '330', '430'],
    component: markRaw(HyperopiaReserve)
  },
  {
    name: '视力不良情况',
    checked: true,
    key: 'VisionBad',
    type: ['235', '336', '436'],
    component: markRaw(VisionBad)
  },
  {
    name: '附:班级近视情况',
    checked: true,
    key: 'SubClassMyopia',
    type: ['245'],
    component: markRaw(SubClassMyopia)
  },
  {
    name: '附:班级近视矫正情况',
    checked: true,
    key: 'SubClassCorrect',
    type: ['250'],
    component: markRaw(SubClassCorrect)
  },
  {
    name: '附:班级近视、远视、散光情况',
    checked: true,
    key: 'SubClassThreeType',
    type: ['255'],
    component: markRaw(SubClassThreeType)
  }
]);

export const reportTypes = [
  { label: '学校报告', value: '3', show: hasPermission(9038) },
  { label: '年级报告', value: '4', show: hasPermission(9041) },
  { label: '班级报告', value: '5', show: hasPermission(9044) }
];
export const areas = [
  {
    label: '浙江省',
    value: '330000',
    children: [
      {
        label: '杭州市',
        value: '330100'
      }
    ]
  }
];
export function percentToFloat(d) {
  let str = d.substr(0, d.length - 1);
  return (str / 100).toFixed(2) * 1;
}
export function floatToPercent(d) {
  if (d >= 1) {
    return '100%';
  } else if (!d) {
    return '0%';
  } else {
    return Math.round(d * 10000) / 100 + '%';
  }
}
