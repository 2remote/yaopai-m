import React, { PropTypes } from 'react'
/**
* @param: iconLeft 输入框左边的 icon
* @param: iconRight 输入框右边的 icon
* @param: type, placeholder 是 input 的基本属性
* @param: link 输入框右边的 a 标签，link.href 是 a标签的 href 属性，link.text 是 a 标签的内容
* @param: updateValue 回掉函数，把输入的内容传递给调用该组件的父组件
**/
const InputGroup = props => {
  const { iconLeft, iconRight, type, placeholder, link, updateValue } = props
  return (
    <section className="input-group-dark">
      <i className={`icon-left ${iconLeft}`} />
      <input className="input input-block" type={ type }
        ref={ node => {
          if (node) {
            updateValue(node.value.trim()) // 初始化的时候发送一次数据，假如浏览器帮助用户记住账号密码也不怕了
            node.addEventListener('blur', () => updateValue(node.value.trim()))
          }
        }}
        placeholder={ placeholder }
      />
    {link ? <a href={ link.href }>{ link.text }</a> : ''}

    {iconRight ? <i className={`icon-righr ${iconRight}`} /> : ''}
    </section>
  )
}

InputGroup.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
  updateValue: PropTypes.func.isRequired,
}

export default InputGroup
