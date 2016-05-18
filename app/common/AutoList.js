import React, { PropTypes } from 'react'

const onClick = (props, callback) => {
  const conditions = {
    CityId: props.cons.city, // 城市id
    CategoryId: props.cons.cate, // 类型id
    PriceStart: props.cons.pstart, // 价格：最低价格
    PriceEnd: props.cons.pend, // 价格：最高价格
  }
  console.log(conditions)
  // 还有total没用到
  const { index, pages, size } = props.paging
  if (index < pages) {
    callback(index + 1, size, conditions)
  }
}

/**
 * AutoList负责根据滚动情况调用props提供的刷新方法
 */
const AutoList = props => (
  <div>
    {props.children}
    <div onClick={ () => onClick(props, props.updateCallback) }>
      {props.paging.index < props.paging.pages ? '加载更多' : '没有更多了'}
    </div>
  </div>
)

AutoList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  updateCallback: PropTypes.func.isRequired,
  cons: PropTypes.object,
  paging: PropTypes.object,
}

export default AutoList
