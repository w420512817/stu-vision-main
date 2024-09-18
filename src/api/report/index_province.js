import { defHttp } from '@common/utils/http';
import { isDevMode } from '@common/utils/common/env';

const eyesight = isDevMode() ? '/eyesight' : '/eyesight';

export const getSchoolStdInfoPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getSchoolStdInfo`,
    params
  }); // 学校学生情况情况

export const getOverallMyopiaInfoPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getOverallMyopiaInfo`,
    params
  }); // 近视情况

export const getMyopiaInfoByPrefxPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getMyopiaInfoByPrefx`,
    params
  }); // 分学段近视情况

export const getMyopiaInfoByAreaTypePro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getMyopiaInfoByAreaType`,
    params
  }); // 城市，乡镇近视情况

export const getMyopiaInfoBySchoolTypePro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getMyopiaInfoBySchoolType`,
    params
  }); // 不同学校类型近视情况

export const getMyopiaInfoByAgePro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getMyopiaInfoByAge`,
    params
  }); // 不同年龄视情况

export const getVisionDistributePro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getVisionDistribute`,
    params
  }); // 视力分布情况

export const getDiopterSituationPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getDiopterSituation`,
    params
  }); // 屈光度分布情况

export const getMyopiaCorrectInfoPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getMyopiaCorrectInfo`,
    params
  }); // 视力矫正情况

export const getCityHyperopiaReservePro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getCityHyperopiaReserve`,
    params
  }); // 远视储备情况

export const getMyopiaTypeInfoPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getMyopiaTypeInfo`,
    params
  }); // 近视远视散光情况

export const getCityPoorVisionPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getCityPoorVision`,
    params
  }); // 视力不良情况

export const getPrefixMyopiaRatePro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getPrefixMyopiaRate`,
    params
  }); // 附：学段近视率

export const getClassYearMyopiaInfoPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getClassYearMyopiaInfo`,
    params
  }); // 年级近视情况（市 区）

export const getKeySchoolMyopiaSituationPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getKeySchoolMyopiaSituation`,
    params
  }); // 重点、非重点学校近视情况

export const getCityShortSightedBySexPro = params =>
  defHttp.get({
    url: `${eyesight}/report/province/getCityShortSightedBySex`,
    params
  }); // 分男、女生近视情况
