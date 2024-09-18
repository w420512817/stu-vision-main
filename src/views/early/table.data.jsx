import { toRaw, reactive, markRaw } from 'vue';
import { AC_DETAILS } from '@common/enum/pageEnum';
import { usePermission } from '@common/hooks/business/usePermission';
import useTableActios from '@common/hooks/business/useTableActions';
import { isIdcardRule } from '@common/utils/form/rule';
import { formatToDate } from '@common/utils/common/date';

import VisionDeviation from './eyesight/components/warning1.vue';
import Myopia from './eyesight/components/warning2.vue';
import MyopiaRisk from './eyesight/components/warning3.vue';
import Astigmatism from './eyesight/components/warning4.vue';
import VisionFall from './eyesight/components/warning5.vue';

const { hasPermission } = usePermission();

export const years = [
  { label: '2023', value: '2023' },
  { label: '2022', value: '2022' },
  { label: '2021', value: '2021' },
  { label: '2020', value: '2020' },
  { label: '2019', value: '2019' },
  { label: '2018', value: '2018' }
];

export const operate = [
  { label: '>', value: '>' },
  { label: '≥', value: '>=' },
  { label: '<', value: '<' },
  { label: '≤', value: '<=' }
];

// 视力预警
export const createColumns = onClickBtn => {
  const pers = { detail: hasPermission(9050) };
  return [
    { title: '年份', key: 'planYear', align: 'center' },
    { title: '计划名称', key: 'planName', align: 'center' },
    { title: '学校名称', key: 'orgName', align: 'center' },
    {
      title: '结束时间',
      key: 'endTime',
      align: 'center',
      render(row) {
        return row.endTime ? row.endTime : '/';
      }
    },
    {
      title: '视力偏差预警人数',
      key: 'visionDeviationNum',
      align: 'center',
      render(row) {
        return row.visionDeviationNum ? row.visionDeviationNum + '人' : '0人';
      }
    },
    {
      title: '近视预警人数',
      key: 'myopiaNum',
      align: 'center',
      render(row) {
        return row.myopiaNum ? row.myopiaNum + '人' : '0人';
      }
    },
    {
      title: '近视风险预警人数',
      key: 'myopiaRiskNum',
      align: 'center',
      render(row) {
        return row.myopiaRiskNum ? row.myopiaRiskNum + '人' : '0人';
      }
    },
    {
      title: '散光预警人数',
      key: 'astigmatismNum',
      align: 'center',
      render(row) {
        return row.astigmatismNum ? row.astigmatismNum + '人' : '0人';
      }
    },
    {
      title: '视力下降预警人数',
      key: 'visionFallNum',
      align: 'center',
      render(row) {
        return row.visionFallNum ? row.visionFallNum + '人' : '0人';
      }
    },
    {
      title: '操作',
      key: 'actions',
      fixed: 'right',
      render(row) {
        const { renderActions } = useTableActios(
          act => {
            onClickBtn(act, toRaw(row));
          },
          [{ label: '查看详情', show: pers.detail, act: AC_DETAILS }]
          // [{ label: '查看详情', show: true, act: AC_DETAILS }]
        );
        return renderActions(false);
      }
    }
  ];
};

// 视力预警详情、预警学生详情
export const createDetail = () => {
  return [
    { title: '姓名', key: 'studentName', align: 'center' },
    { title: '性别', key: 'sexName', align: 'center' },
    {
      title: '出生年月',
      key: 'birth',
      align: 'center',
      render(row) {
        return row.birth ? formatToDate(row.birth) : '/';
      }
    },
    { title: '身份证号/护照号', key: 'idcard', align: 'center' },
    { title: '学年', key: 'classYear', align: 'center' },
    { title: '班级', key: 'className', align: 'center' },
    {
      title: '监护人姓名',
      key: 'guardianName',
      align: 'center',
      render(row) {
        return row.guardianName ? row.guardianName : '/';
      }
    },
    {
      title: '监护人电话',
      key: 'guardianPhone',
      align: 'center',
      render(row) {
        return row.guardianPhone ? row.guardianPhone : '/';
      }
    },
    { title: '预警类型', key: 'warningTypeName', align: 'center' },
    { title: '预警状态', key: 'warningStateName', align: 'center' }
  ];
};

// 预警阀值设置
export const componentType = reactive([
  {
    name: '视力偏差预警',
    comName: markRaw(VisionDeviation)
  },
  {
    name: '近视预警',
    comName: markRaw(Myopia)
  },
  {
    name: '近视风险预警',
    comName: markRaw(MyopiaRisk)
  },
  {
    name: '散光预警',
    comName: markRaw(Astigmatism)
  },
  {
    name: '视力下降预警',
    comName: markRaw(VisionFall)
  }
]);

// 视力预警表单校验
const rbi = { required: true, trigger: ['blur', 'input'] };
const rbc = { required: true, trigger: ['blur', 'change'] };
export const rules = {
  symbol: { ...rbc, message: '请选择' },
  numericalValue: {
    ...rbi,
    pattern: /^[1-9]\d*$|^[1-9]\d*\.\d$|^0\.\d$/,
    message: '不可以有负数，仅支持填写到小数点后1位'
  }
};
export const astigmatismRules = {
  symbol: { ...rbc, message: '请选择' },
  numericalValue: {
    ...rbi,
    pattern: '^[\\-\\+]?\\d+(\\.\\d)?$',
    message: '可有负值，仅支持填写到小数点后1位'
  }
};
export const visionFallRules = {
  symbol: { ...rbc, message: '请选择' },
  numericalValue: {
    ...rbi,
    pattern: '^[0-9]*[1-9][0-9]*$',
    message: '不可以有负值，仅能填写整数'
  }
};

export const idCardRules = {
  idcard: {
    ...rbc,
    validator(_r, value, callBack) {
      if (value.length > 9) {
        let isIdCard = isIdcardRule(value);
        isIdCard ? callBack() : callBack(new Error('请输入正确的身份证号'));
      } else {
        let PassportNumberReg =
          /^1[45][0-9]{7}$|(^[P|p|S|s]\d{7}$)|(^[S|s|G|g|E|e]\d{8}$)|(^[Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8}$)|(^[H|h|M|m]\d{8,10}$)/;
        let passportNum = PassportNumberReg.test(value);
        passportNum ? callBack() : callBack(new Error('请输入正确的护照号'));
      }
    }
  }
};
const getImg = url => {
  return new URL(`../../assets/image/${url}`, import.meta.url).href;
};
export const appList = [
  { label: '视力预警', value: 1, path: '/early/eyesight', img: getImg('funbg1.png') },
  { label: '龋齿预警', value: 2, path: '/early/decayed', img: getImg('funbg2.png') },
  { label: '体测预警', value: 3, path: '/early/physical', img: getImg('funbg3.png') },
  { label: '体检预警', value: 4, path: '/early/examine', img: getImg('funbg4.png') }
];
