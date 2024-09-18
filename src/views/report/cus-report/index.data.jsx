export const createStaticArray = (start, end, step = 1, fixedInt = 1) => {
  let arr = [];
  let getStatic = start => {
    if (start <= end) {
      let value = start.toFixed(fixedInt);
      arr.push({ value, label: value });
      getStatic(start + step);
    }
  };
  getStatic(start);
  return arr;
};

// 年龄范围
export const ageRange = createStaticArray(5, 25, 1, 0);

// 裸眼范围
export const nakedRange = createStaticArray(3.3, 5.3, 0.1, 1);

// 戴镜范围
export const glassRange = createStaticArray(3.3, 5.3, 0.1, 1);

// Ok镜范围
export const okRange = createStaticArray(0, 1000, 25, 0);

// S球镜范围
export const sRange = createStaticArray(-20.0, 20.0, 0.25, 2);

// C柱镜范围
export const cRange = createStaticArray(-20.0, 0.0, 0.25, 2);

// A轴位范围
export const aRange = createStaticArray(0, 180, 1, 0);

// 检查情况
export const checkStatusList = [
  // { value: '', label: '全部' },
  { value: '0', label: '未筛查' },
  { value: '1', label: '已筛查' },
  { value: '2', label: '有效筛查' },
  { value: '3', label: '无效筛查' }
];

// 视力情况
export const eyeSituation = [
  { value: '1', label: '视力正常' },
  { value: '2', label: '近视' },
  { value: '3', label: '远视' },
  { value: '4', label: '散光' }
];

// 学生类型
export const stuTypeList = [
  // { id: '', name: '全部' },
  { value: 1, label: '大陆学生' },
  { value: 2, label: '非大陆学生' },
  { value: 3, label: '大陆无身份证' }
];

// 视力情况
export const glassSituation = [
  { value: '1', label: '不戴镜' },
  { value: '2', label: '戴框架' },
  { value: '3', label: '戴隐形' },
  { value: '4', label: '戴OK' }
];

export const rules = {
  planId: { required: true, message: '请选择计划', trigger: ['change', 'input'] },
  orgId: { required: true, message: '请选择学校', trigger: ['change', 'input'] },
  checkStatus: { required: true, message: '请选择检查情况', trigger: ['change', 'input'], type: 'any' }
};
