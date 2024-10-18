import { defHttp } from '@common/utils/http';
import { isDevMode } from '@common/utils/common/env';

const basic = isDevMode() ? '/eyesight' : '/eyesight';

// 视力预警
const Api = {
  getPlanList: `${basic}/warn/getPlanList`, // 计划名称下拉框
  schoolWaringList: `${basic}/warn/orgWarningInfoPageList`, // 学校预警列表
  studentWaringList: `${basic}/warn/studentWarningPageList`, // 学生预警列表
  warningType: `${basic}/warn/getWarningTypeList`, // 预警类型下拉框

  addEyesightValueWaning: `${basic}/warn/addEyesightValueWaning`, // 预警阀值设置

  visionDeviationVOList: `${basic}/warn/visionDeviationVOList`, // 预警类型为 1
  eyesightWarningOrdinary: `${basic}/warn/eyesightWarningOrdinaryList` // 预警类型为 2 3 4 5
};

export function schoolWaringList(params) {
  return defHttp.get({
    url: Api.schoolWaringList,
    params
  });
}

export function studentWaringList(params) {
  return defHttp.get({
    url: Api.studentWaringList,
    params
  });
}
export function getPlanList(params) {
  return defHttp.get({
    url: Api.getPlanList,
    params
  });
}
export function warningType(params) {
  return defHttp.get({
    url: Api.warningType,
    params
  });
}
export function getSexList(params) {
  return defHttp.get({
    url: Api.getSexList,
    params
  });
}
export function waringStateList(params) {
  return defHttp.get({
    url: Api.waringStateList,
    params
  });
}
export function addEyesightValueWaning(params) {
  return defHttp.post({
    url: Api.addEyesightValueWaning,
    params
  });
}

export function visionDeviationVOList(params) {
  return defHttp.get({
    url: Api.visionDeviationVOList,
    params
  });
}

export function eyesightWarningOrdinary(params) {
  return defHttp.get({
    url: Api.eyesightWarningOrdinary,
    params
  });
}
