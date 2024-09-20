// 已经合并到index
import { defHttp } from '@common/utils/http';
import { isDevMode } from '@common/utils/common/env';

// const basic = isDevMode() ? '/config' : '/config';
// const basic_qyj = isDevMode() ? '/config' : '/config';
// const basic_wxt = isDevMode() ? '/config' : '/config';
// const eyesight = isDevMode() ? '/config' : '/config';
// const basic_busy = isDevMode() ? '/business-gov' : '/business-gov';
// // const basic_busy = isDevMode() ? '/business-gov-qyj' : '/business-gov';
// const basic_busy3 = isDevMode() ? '/business-gov' : '/business-gov';

const eyesight = isDevMode() ? '/eyesight-qyx' : '/eyesight';
const org = isDevMode() ? '/org' : '/org';
const base_screen = isDevMode() ? '/base-screen-qyx' : '/base-screen';

const Api = {
  getReportArea: `${org}/basicConfig/getAreaTree`, // 地区树
  getReportSchools: `${org}/plan/getSchoolList`, // 学校列表
  getReportPlans: `${base_screen}/plan/report/getPlanList`, // 计划列表

  // 视力报告
  getEyesightReport: `${eyesight}/report/getEyesightReport`, // 概览
  getSchoolStdInfo: `${eyesight}/report/city/getSchoolStdInfo`, // 学校学生情况
  getOverallMyopiaInfo: `${eyesight}/report/city/getOverallMyopiaInfo`, // 近视情况
  getMyopiaInfoByPrefx: `${eyesight}/report/city/getMyopiaInfoByPrefx`, // 分学段近视情况
  getClassYearMyopiaInfo: `${eyesight}/report/city/getClassYearMyopiaInfo`, // 分年级情况
  getMyopiaInfoByAreaType: `${eyesight}/report/city/getMyopiaInfoByAreaType`, // 城市乡镇近视情况
  getMyopiaInfoBySchoolType: `${eyesight}/report/city/getMyopiaInfoBySchoolType`, // 不同学校类型近视情况
  getMyopiaInfoByAge: `${eyesight}/report/city/getMyopiaInfoByAge`, // 不同年龄近视情况
  getVisionDistribute: `${eyesight}/report/city/getVisionDistribute`, // 视力分布情况
  getDiopterSituation: `${eyesight}/report/city/getDiopterSituation`, // 屈光度分布情况
  getCityShortSightedBySex: `${eyesight}/report/city/getCityShortSightedBySex`, // 分男女情况
  getKeySchoolMyopiaSituation: `${eyesight}/report/city/getKeySchoolMyopiaSituation`, // 重点非重点
  getMyopiaCorrectInfo: `${eyesight}/report/city/getMyopiaCorrectInfo`, // 近视矫正
  getCityHyperopiaReserve: `${eyesight}/report/city/getCityHyperopiaReserve`, // 远视储备
  getMyopiaTypeInfo: `${eyesight}/report/city/getMyopiaTypeInfo`, // 近视远视散光情况
  getCityPoorVision: `${eyesight}/report/city/getCityPoorVision`, // 视力不良
  getPrefixMyopiaRate: `${eyesight}/report/city/getPrefixMyopiaRate`, // 附录-学段近视率

  getSchoolStdInfo_r: `${eyesight}/report/region/getSchoolStdInfo`, // 区-学校学生情况
  getOverallMyopiaInfo_r: `${eyesight}/report/region/getOverallMyopiaInfo`, // 区-近视情况
  getMyopiaInfoByPrefx_r: `${eyesight}/report/region/getMyopiaInfoByPrefx`, // 区-分学段近视情况
  getMyopiaInfoByAreaType_r: `${eyesight}/report/region/getMyopiaInfoByAreaType`, // 区-城市乡镇近视情况
  getMyopiaInfoBySchoolType_r: `${eyesight}/report/region/getMyopiaInfoBySchoolType`, // 区-不同学校类型近视情况
  getMyopiaInfoByAge_r: `${eyesight}/report/region/getMyopiaInfoByAge`, // 区-不同年龄近视情况
  getVisionDistribute_r: `${eyesight}/report/region/getVisionDistribute`, // 区-视力分布
  getDiopterSituation_r: `${eyesight}/report/region/getDiopterSituation`, // 区-屈光分布
  getMyopiaCorrectInfo_r: `${eyesight}/report/region/getMyopiaCorrectInfo`, // 区-近视矫正情况
  getRegionHyperopiaReserve_r: `${eyesight}/report/region/getRegionHyperopiaReserve`, // 区-远视储备情况
  getMyopiaTypeInfo_r: `${eyesight}/report/region/getMyopiaTypeInfo`, // 区-近视远视散光
  getRegionPoorVision_r: `${eyesight}/report/region/getRegionPoorVision`, // 区-视力不良
  getPrefixMyopiaRate_r: `${eyesight}/report/region/getPrefixMyopiaRate`, // 区-学段近视率
  getSchoolMyopiaInfo_r: `${eyesight}/report/region/getSchoolMyopiaInfo`, // 区-学校近视情况
  getSchoolMyopiaCorrectInfo_r: `${eyesight}/report/region/getSchoolMyopiaCorrectInfo`, // 区-学校近视矫正情况
  getSchoolMyopiaTypeInfo_r: `${eyesight}/report/region/getSchoolMyopiaTypeInfo`, // 区-学校近视远视散光情况
  getRegionSchoolPoorVision_r: `${eyesight}/report/region/getRegionSchoolPoorVision`, // 区-学校视力不良情况

  getOverallMyopiaInfo_s: `${eyesight}/report/school/getOverallMyopiaInfo`, // 校-近视情况
  getMyopiaCorrectInfo_s: `${eyesight}/report/school/getMyopiaCorrectInfo`, // 校-视力矫正情况
  getMyopiaTrend_s: `${eyesight}/report/school/getMyopiaTrend`, // 校-近视趋势
  getSchoolPoorVision_s: `${eyesight}/report/school/getSchoolPoorVision`, // 校-视力不良
  getSchoolHyperopiaReserve_s: `${eyesight}/report/school/getSchoolHyperopiaReserve`, // 校-远视储备
  getVisionDistribute_s: `${eyesight}/report/school/getVisionDistribute`, // 校-视力分布
  getDiopterSituation_s: `${eyesight}/report/school/getDiopterSituation`, // 校-屈光分布
  getClassMyopiaInfo_s: `${eyesight}/report/school/getClassMyopiaInfo`, // 校-附件：班级近视率
  getClassMyopiaCorrectInfo_s: `${eyesight}/report/school/getClassMyopiaCorrectInfo`, // 校-附件：班级近视矫正
  getSchoolMyopiaTypeInfo_s: `${eyesight}/report/school/getSchoolMyopiaTypeInfo` // 校-附件：班级近视远视散光
};

export function getReportArea(params) {
  return defHttp.get({ url: Api.getReportArea, params });
}
export function getReportSchools(params) {
  return defHttp.get({ url: Api.getReportSchools, params });
}
export function getReportPlans(params) {
  return defHttp.get({ url: Api.getReportPlans, params });
}

export function getEyesightReport(params) {
  return defHttp.get({ url: Api.getEyesightReport, params });
}
export function getSchoolStdInfo(params) {
  return defHttp.get({ url: Api.getSchoolStdInfo, params });
}
export function getOverallMyopiaInfo(params) {
  return defHttp.get({ url: Api.getOverallMyopiaInfo, params });
}
export function getMyopiaInfoByPrefx(params) {
  return defHttp.get({ url: Api.getMyopiaInfoByPrefx, params });
}
export function getMyopiaInfoByAreaType(params) {
  return defHttp.get({ url: Api.getMyopiaInfoByAreaType, params });
}
export function getMyopiaInfoBySchoolType(params) {
  return defHttp.get({ url: Api.getMyopiaInfoBySchoolType, params });
}
export function getMyopiaInfoByAge(params) {
  return defHttp.get({ url: Api.getMyopiaInfoByAge, params });
}
export function getVisionDistribute(params) {
  return defHttp.get({ url: Api.getVisionDistribute, params });
}
export function getDiopterSituation(params) {
  return defHttp.get({ url: Api.getDiopterSituation, params });
}
export function getClassYearMyopiaInfo(params) {
  return defHttp.get({ url: Api.getClassYearMyopiaInfo, params });
}
export function getCityShortSightedBySex(params) {
  return defHttp.get({ url: Api.getCityShortSightedBySex, params });
}
export function getKeySchoolMyopiaSituation(params) {
  return defHttp.get({ url: Api.getKeySchoolMyopiaSituation, params });
}
export function getMyopiaCorrectInfo(params) {
  return defHttp.get({ url: Api.getMyopiaCorrectInfo, params });
}
export function getCityHyperopiaReserve(params) {
  return defHttp.get({ url: Api.getCityHyperopiaReserve, params });
}
export function getMyopiaTypeInfo(params) {
  return defHttp.get({ url: Api.getMyopiaTypeInfo, params });
}
export function getCityPoorVision(params) {
  return defHttp.get({ url: Api.getCityPoorVision, params });
}
export function getPrefixMyopiaRate(params) {
  return defHttp.get({ url: Api.getPrefixMyopiaRate, params });
}
export function getSchoolStdInfo_r(params) {
  return defHttp.get({ url: Api.getSchoolStdInfo_r, params });
}
export function getOverallMyopiaInfo_r(params) {
  return defHttp.get({ url: Api.getOverallMyopiaInfo_r, params });
}
export function getMyopiaInfoByPrefx_r(params) {
  return defHttp.get({ url: Api.getMyopiaInfoByPrefx_r, params });
}
export function getMyopiaInfoByAreaType_r(params) {
  return defHttp.get({ url: Api.getMyopiaInfoByAreaType_r, params });
}
export function getMyopiaInfoBySchoolType_r(params) {
  return defHttp.get({ url: Api.getMyopiaInfoBySchoolType_r, params });
}
export function getMyopiaInfoByAge_r(params) {
  return defHttp.get({ url: Api.getMyopiaInfoByAge_r, params });
}
export function getVisionDistribute_r(params) {
  return defHttp.get({ url: Api.getVisionDistribute_r, params });
}
export function getDiopterSituation_r(params) {
  return defHttp.get({ url: Api.getDiopterSituation_r, params });
}
export function getMyopiaCorrectInfo_r(params) {
  return defHttp.get({ url: Api.getMyopiaCorrectInfo_r, params });
}
export function getRegionHyperopiaReserve_r(params) {
  return defHttp.get({ url: Api.getRegionHyperopiaReserve_r, params });
}
export function getMyopiaTypeInfo_r(params) {
  return defHttp.get({ url: Api.getMyopiaTypeInfo_r, params });
}
export function getRegionPoorVision_r(params) {
  return defHttp.get({ url: Api.getRegionPoorVision_r, params });
}
export function getPrefixMyopiaRate_r(params) {
  return defHttp.get({ url: Api.getPrefixMyopiaRate_r, params });
}
export function getSchoolMyopiaInfo_r(params) {
  return defHttp.get({ url: Api.getSchoolMyopiaInfo_r, params });
}
export function getSchoolMyopiaCorrectInfo_r(params) {
  return defHttp.get({ url: Api.getSchoolMyopiaCorrectInfo_r, params });
}
export function getSchoolMyopiaTypeInfo_r(params) {
  return defHttp.get({ url: Api.getSchoolMyopiaTypeInfo_r, params });
}
export function getRegionSchoolPoorVision_r(params) {
  return defHttp.get({ url: Api.getRegionSchoolPoorVision_r, params });
}

export function getOverallMyopiaInfo_s(params) {
  return defHttp.get({ url: Api.getOverallMyopiaInfo_s, params });
}
export function getMyopiaCorrectInfo_s(params) {
  return defHttp.get({ url: Api.getMyopiaCorrectInfo_s, params });
}
export function getMyopiaTrend_s(params) {
  return defHttp.get({ url: Api.getMyopiaTrend_s, params });
}
export function getSchoolPoorVision_s(params) {
  return defHttp.get({ url: Api.getSchoolPoorVision_s, params });
}
export function getSchoolHyperopiaReserve_s(params) {
  return defHttp.get({ url: Api.getSchoolHyperopiaReserve_s, params });
}
export function getVisionDistribute_s(params) {
  return defHttp.get({ url: Api.getVisionDistribute_s, params });
}
export function getDiopterSituation_s(params) {
  return defHttp.get({ url: Api.getDiopterSituation_s, params });
}
export function getClassMyopiaInfo_s(params) {
  return defHttp.get({ url: Api.getClassMyopiaInfo_s, params });
}
export function getClassMyopiaCorrectInfo_s(params) {
  return defHttp.get({ url: Api.getClassMyopiaCorrectInfo_s, params });
}
export function getSchoolMyopiaTypeInfo_s(params) {
  return defHttp.get({ url: Api.getSchoolMyopiaTypeInfo_s, params });
}
