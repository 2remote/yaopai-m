/* For Async Actions */
// import fetch from 'isomorphic-fetch';
/* 用于生成 action creator 的函数*/
// import { makeActionCreator } from '../tool/tool.js';/* @王路怎么省去前面的‘../’ */
// TODO: eslint-disable no-console
/* eslint-disable no-console */
/* API constants */
import API from 'app/API'
/* HttpFactory の post */
import post from 'app/HttpFactory'
/* Action Types */
import { ACTION_TYPE } from './constant'
const { LOAD_WORK_DETAIL } = ACTION_TYPE

/* Actions */
export const initWork = ({ total, index, pages, size, nickname, list }) => ({
  type: LOAD_WORK_DETAIL,
  total,
  index,
  pages,
  size,
  nickname,
  list,
}

/**
 * Sample Async Action namely: the thunk
 * 要配合redux-thunk这个middleware一起食用
 * ref: https://github.com/gaearon/redux-thunk
 */
export const initWorkAsync = wid => dispatch => {
  /* TODO: 请暂时无视我如此拙劣的dispatch行为 */
  /* 1. fetch之前，可以先发个pending的action */
  // dispatch({
  //   type: LOAD_MORE_WORK,
  //   msg: 'pending',
  // });
  post(API.WORK.GET, {
    Fields: 'Title,Views,Display,Price,Cover,Photographer.NickName',
    Id: wid,
  }).then(data => {
    /**
     * 作品列表中的展示数据：
     * - Title: 标题
     * - Views: 访问量
     * - Photographer: 摄影师
     * - Display: 是否显示
     * - Price: 价格
     * - Cover: 封面
     */
    dispatch(initWork({
      total: data.Count,
      index: data.PageIndex,
      pages: data.PageCount,
      size: data.PageSize,
      list: data.Result.map(result => ({
        title: result.Title,
        views: result.Views,
        display: result.Display,
        price: result.Price,
        cover: result.Cover,
        nickname: result.Photographer.NickName,
      })),
    }))
    // throw new Error('What The Facebook');
    return data
  }).catch(error => {
    console.error(error)
  })

