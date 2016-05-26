import React, { PropTypes } from 'react'
import $ from 'jquery'

/* @author: @zaxlct
 * 由于使用了 jquery 的 .next() 和 .parent() 来选择 DOM 节点，所以当修改 InputSelect 的 DOM 结构时请注意
 */
const InputSelect = props => {
  const { iconLeft, iconRight, placeholder, itemList, updateValue } = props

  return (
    <div className="input-group-light">
      <i className={`icon-left ${iconLeft}`} />
      <input type="text"
        placeholder={placeholder}
        onFocus={e => $(e.target).next('i').next('.input-select').slideDown()}
      />
      <i className={`icon-right ${iconRight}`}
        onClick={e => $(e.target).next('.input-select').slideToggle()}
      />
      <ul className="input-select">
        {itemList.map((item, index) =>
          <li
            className="select-item"
            key={index}
            onClick={e => {
              $(e.target).parent('.input-select').slideUp()
              updateValue(item)
            }}
          >
            {item}
          </li>
        )}
      </ul>
    </div>
  )
}

InputSelect.propTypes = {
  updateValue: PropTypes.func.isRequired, // 回调函数，把选择后的值传给父组件
  iconLeft: PropTypes.string.isRequired, // input 左侧 icon
  iconRight: PropTypes.string.isRequired, // input 右侧 icon
  placeholder: PropTypes.string.isRequired,
  itemList: PropTypes.array.isRequired, // 要选择的内容列表
}

export default InputSelect
