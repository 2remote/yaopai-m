import React, { PropTypes } from 'react'

/**
 * 当前位置(进度)展示器
 * @param currentLocation: 当前位置，用string表示
 * @param indicatorList: 位置展示列表，包含：
 *   text: 展示文字（optional）
 *   img: 展示图片（optional）
 *   activeUrl: 判断active状态的url，用来与currentLocation进行比较
 *   activeState: active为true时要应用到这个indicator上的className
 *
 * 其他：可以考虑根据需求调整其中的展示逻辑
 * FIXME: functional, yet requires styles
**/
const LocationIndicator = ({ currentLocation, indicatorList }) => (
  <div>
    {
      indicatorList.map(({ text, img, activeUrl, activeState }, key) => (
        <div className={activeUrl === currentLocation ? activeState : ''}
          style={{ // HACK: temporary display
            background: activeUrl === currentLocation ? 'yellow' : 'green',
            display: 'inline-block',
            width: `${100 / indicatorList.length}%`,
          }}
          key={ key }
        >
        {/* <div className={activeUrl === currentLocation ? activeState : ''} key={ key }> */}
          { text }
          { img ? <img src={img} alt={text} /> : '' }
        </div>
      ))
    }
  </div>
)

LocationIndicator.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  indicatorList: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    img: PropTypes.string,
    activeUrl: PropTypes.string.isRequired,
    activeState: PropTypes.string.isRequired,
  })),
}

export default LocationIndicator
