/* For Async Actions */
// import fetch from 'isomorphic-fetch'
/* 用于生成 action creator 的函数*/
// import { makeActionCreator } from '../tool/tool.js'/* @王路怎么省去前面的‘../’ */
// TODO: eslint-disable no-console
/* eslint-disable no-console */
import Immutable from 'immutable'
/* API constants */
import API from 'app/API'
/* HttpFactory の post */
import post from 'app/HttpFactory'
/* Action Types */
import { ACTION_TYPE } from './constant'
import updateWorkPool from 'model/work/actions'
const { LOAD_MORE_WORK, LOAD_MORE_GRAPHER } = ACTION_TYPE

/* Actions */
export const loadMoreWork = workListRefInfo => ({
  type: LOAD_MORE_WORK,
  payload: workListRefInfo,
})


/**
 * Sample Async Action namely: the thunk
 * 要配合redux-thunk这个middleware一起食用
 * ref: https://github.com/gaearon/redux-thunk
 */
export const loadMoreWorkAsync = (idx, size, conditions) => dispatch => {
  /* TODO: 请暂时无视我如此拙劣的dispatch行为 */
  /* 1. fetch之前，可以先发个pending的action */
  // dispatch({
  //   type: LOAD_MORE_WORK,
  //   msg: 'pending',
  // })
  /* HACK: */
  /* eslint-disable new-cap */
  const postDataPrep = Immutable.Map({
    Fields: 'Id,Title,Views,Display,Price,Cover,Photographer.NickName',
    PageIndex: idx,
    PageSize: size,
  })
  const postData = conditions.merge(postDataPrep).toJS()
  post(API.WORK.SEARCH, postData).then(data => {
    /**
     * 作品列表中的展示数据：
     * - Title: 标题
     * - Views: 访问量
     * - Photographer: 摄影师
     * - Display: 是否显示
     * - Price: 价格
     * - Cover: 封面A
    **/
    const convertedList = Immutable.fromJS(data.Result.map(result => ({
      id: result.Id,
      title: result.Title,
      views: result.Views,
      display: result.Display,
      price: result.Price,
      cover: result.Cover,
      nickname: result.Photographer.NickName,
    })))
    /* 更新已保存作品 */
    dispatch(updateWorkPool(convertedList))
    /* 加载作品列表 */
    dispatch(loadMoreWork(Immutable.fromJS({
      total: data.Count,
      index: data.PageIndex,
      pages: data.PageCount,
      size: data.PageSize,
      list: convertedList.map(converted => converted.get('id')), // 只留id
    })))
    // throw new Error('What The Facebook')
    return data
  }).catch(error => {
    console.error(error)
  })
}

export const loadMoreGrapher = () => ({
  type: LOAD_MORE_GRAPHER,
})

// export default { loadMoreWork, loadMoreGrapher }
