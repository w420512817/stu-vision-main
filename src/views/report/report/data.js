import { reactive, markRaw } from 'vue';
// import ScreenState from './components/ScreenState.vue';
import MyopiaState from './components/MyopiaState.vue';
import MyopiaTrend from './components/MyopiaTrend.vue';
import MyopiaCorrect from './components/MyopiaCorrect.vue';
import MyopiaSpread from './components/MyopiaSpread.vue';
import DiopterSpread from './components/DiopterSpread.vue';
import HyperopiaReserve from './components/HyperopiaReserve.vue';
import VisionBad from './components/VisionBad.vue';
import SchoolAndStu from './components/SchoolAndStu.vue';
import PrefixMyopia from './components/PrefixMyopia.vue';
import GradeMyopia from './components/GradeMyopia.vue';
import SexMyopia from './components/SexMyopia.vue';
import CityVillage from './components/CityVillage.vue';
import KeyNoneKey from './components/KeyNoneKey.vue';
import DiffSchoolType from './components/DiffSchoolType.vue';
import DiffAge from './components/DiffAge.vue';
import ThreeTypes from './components/ThreeTypes.vue';
import SubPrefixMyopia from './components/SubPrefixMyopia.vue';
import SubSchoolMyopia from './components/SubSchoolMyopia.vue';
import SubSchoolCorrect from './components/SubSchoolCorrect.vue';
import SubThreeType from './components/SubThreeType.vue';
import SubSchoolBadVision from './components/SubSchoolBadVision.vue';
import SubClassMyopia from './components/SubClassMyopia.vue';
import SubClassCorrect from './components/SubClassCorrect.vue';
import SubClassThreeType from './components/SubClassThreeType.vue';

export const reportIndexs = reactive([
  {
    name: '学校和学生情况',
    checked: true,
    key: 'SchoolAndStu',
    type: ['10', '105'],
    component: markRaw(SchoolAndStu)
  },
  // {
  //   name: '筛查情况',
  //   checked: true,
  //   key: 'ScreenState',
  //   type: ['5','100','200','300','400'],
  //   component: markRaw(ScreenState)
  // },
  {
    name: '总体近视情况',
    checked: true,
    key: 'MyopiaState',
    type: ['15', '110', '205', '305', '405'],
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
    name: '分学段近视情况',
    checked: true,
    key: 'PrefixMyopia',
    type: ['20', '115'],
    component: markRaw(PrefixMyopia)
  },
  {
    name: '分年级近视情况',
    checked: true,
    key: 'GradeMyopia',
    type: ['25', '120'],
    component: markRaw(GradeMyopia)
  },
  {
    name: '分男女近视情况',
    checked: true,
    key: 'SexMyopia',
    type: ['30'],
    component: markRaw(SexMyopia)
  },
  {
    name: '城市、乡镇近视情况',
    checked: true,
    key: 'CityVillage',
    type: ['35', '130'],
    component: markRaw(CityVillage)
  },
  {
    name: '重点、非重点学校近视情况',
    checked: true,
    key: 'KeyNoneKey',
    type: ['40', '135'],
    component: markRaw(KeyNoneKey)
  },
  {
    name: '不同学校类型近视情况',
    checked: true,
    key: 'DiffSchoolType',
    type: ['45', '140'],
    component: markRaw(DiffSchoolType)
  },
  {
    name: '不同年龄近视情况',
    checked: true,
    key: 'DiffAge',
    type: ['50', '145'],
    component: markRaw(DiffAge)
  },
  {
    name: '视力分布情况',
    checked: true,
    key: 'MyopiaSpread',
    type: ['60', '155', '220', '320', '420'],
    component: markRaw(MyopiaSpread)
  },
  {
    name: '屈光度分布情况',
    checked: true,
    key: 'DiopterSpread',
    type: ['65', '160', '225', '325', '425'],
    component: markRaw(DiopterSpread)
  },
  {
    name: '近视矫正情况',
    checked: true,
    key: 'MyopiaCorrect',
    type: ['70', '165', '215', '315', '415'],
    component: markRaw(MyopiaCorrect)
  },
  {
    name: '远视储备情况',
    checked: true,
    key: 'HyperopiaReserve',
    type: ['75', '170', '230', '330', '430'],
    component: markRaw(HyperopiaReserve)
  },
  {
    name: '近视、远视、散光情况',
    checked: true,
    key: 'ThreeTypes',
    type: ['80', '180', '260'],
    component: markRaw(ThreeTypes)
  },
  {
    name: '视力不良情况',
    checked: true,
    key: 'VisionBad',
    type: ['81', '175', '235', '336', '436'],
    component: markRaw(VisionBad)
  },
  {
    name: '附:学校近视情况',
    checked: true,
    key: 'SubSchoolMyopia',
    type: ['190'],
    component: markRaw(SubSchoolMyopia)
  },
  {
    name: '附:学校近视矫正情况',
    checked: true,
    key: 'SubSchoolCorrect',
    type: ['195'],
    component: markRaw(SubSchoolCorrect)
  },
  {
    name: '附:学校近视、远视、散光情况',
    checked: true,
    key: 'SubThreeType',
    type: ['196'],
    component: markRaw(SubThreeType)
  },
  {
    name: '附:学校视力不良情况',
    checked: true,
    key: 'SubSchoolBadVision',
    type: ['197'],
    component: markRaw(SubSchoolBadVision)
  },
  {
    name: '附:学段近视率',
    checked: true,
    key: 'SubPrefixMyopia',
    type: ['90', '198'],
    component: markRaw(SubPrefixMyopia)
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

// 筛查情况 待定 是否为百分比
// export const reportIndexs_caries = reactive([
//   {
//     name: '筛查情况',
//     checked: true,
//     key: 'ScreenState_c',
//     type: ['5'],
//     component: markRaw(ScreenState_c) // done
//   },
//   {
//     name: '筛查情况',
//     checked: true,
//     key: 'ScreenState_z',
//     type: ['100'],
//     component: markRaw(ScreenState_z) // done
//   },
//   {
//     name: '学校和学生情况',
//     checked: true,
//     key: 'SchoolAndStu_c',
//     type: ['10', '105'],
//     component: markRaw(SchoolAndStu_c) // done
//   },
//   {
//     name: '总体患龋情况',
//     checked: true,
//     key: 'CariesState_c',
//     type: ['15', '110'],
//     component: markRaw(CariesState_c) // done
//   },
//   {
//     name: '分学段患龋情况',
//     checked: true,
//     key: 'PrefixCaries_c',
//     type: ['20', '115'],
//     component: markRaw(PrefixCaries_c) //  区域数据对应检查，字段已经对应
//   },
//   {
//     name: '分年级患龋情况',
//     checked: true,
//     key: 'GradeCaries_c',
//     type: ['25', '120'],
//     component: markRaw(GradeCaries_c) // TODO 地区接口字段需要补充，前端字段需要补齐
//   },
//   {
//     name: '分男、女生患龋情况',
//     checked: true,
//     key: 'SexCaries_c',
//     type: ['30', '130'],
//     component: markRaw(SexCaries_c) // 字段done，接口返回的null
//   },
//   {
//     name: '城市、乡镇患龋情况',
//     checked: true,
//     key: 'CityVillage_c',
//     type: ['35', '135'],
//     component: markRaw(CityVillage_c) // done
//   },
//   {
//     name: '重点、非重点学校患龋情况',
//     checked: true,
//     key: 'KeyNoneKey_c',
//     type: ['40', '140'],
//     component: markRaw(KeyNoneKey_c) // done
//   },
//   {
//     name: '患龋率趋势',
//     checked: true,
//     key: 'CariesTrend_c',
//     type: ['45', '145'],
//     component: markRaw(CariesTrend_c) // done
//   },
//   {
//     name: '筛查情况',
//     checked: true,
//     key: 'ScreenState_s',
//     type: ['200'],
//     component: markRaw(ScreenState_s) // 字段done，后端gradeScreeningSituation返回null
//   },
//   {
//     name: '学校患龋情况',
//     checked: true,
//     key: 'CariesState_s',
//     type: ['205'],
//     component: markRaw(CariesState_s) // 字段 done,后端需要调整
//   },
//   {
//     name: '学校患龋率趋势',
//     checked: true,
//     key: 'CariesTrend_c',
//     type: ['210'],
//     component: markRaw(CariesTrend_c) // done
//   }
// ]);
export const types = [
  { label: '视力筛查', value: '1' },
  { label: '龋齿筛查', value: '2' },
  { label: '学生体检', value: '3' },
  { label: '学生体测', value: '4' }
];
export const reportTypes = [
  { label: '省级报告', value: '1' },
  { label: '市级报告', value: '2' },
  { label: '区县报告', value: '3' },
  { label: '市级报告', value: '4' }
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
  return (str / 100).toFixed(4) * 1;
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

export const planModeList = [
  { label: '计划模式', value: 1 },
  { label: '任务模式', value: 2 }
];
