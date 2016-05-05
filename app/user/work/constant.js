/* Route constants */
const ROOT = 'work/:wid'
/* Action Types */
// 这类action type要在action和reducer里用到
// 如果action和reducer都有多个的话，reducer
// 调用的时候引用起来也乱，就集中放这里了
const LOAD_WORK_DETAIL = 'load_work_detail'

/* exports */
export const ROUTE = {
  ROOT,
}

export const ACTION_TYPE = {
  LOAD_WORK_DETAIL,
}
