/* Route constants */
// 我也没想好为什么把Route常量拿过来放这里
const ROOT = 'main';
const ROUTE_TO_WORK = 'work';
const ROUTE_TO_DISCOVERY = 'discovery';
const ROUTE_TO_GRAPHER = 'grapher';
const ROUTE_TO_USER = 'user';

/* Action Types */
// 这类action type要在action和reducer里用到
// 如果action和reducer都有多个的话，reducer
// 调用的时候引用起来也乱，就集中放这里了
const LOAD_MORE_WORK = 'load_more_work';
const LOAD_MORE_GRAPHER = 'load_more_grapher';

/* exports */
export const ROUTE = {
  ROOT,
  ROUTE_TO_WORK,
  ROUTE_TO_DISCOVERY,
  ROUTE_TO_GRAPHER,
  ROUTE_TO_USER,
};

export const ACTION_TYPE = {
  LOAD_MORE_WORK,
  LOAD_MORE_GRAPHER,
};
