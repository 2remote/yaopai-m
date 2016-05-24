import React, { PropTypes } from 'react'

const InputGroup = props => {
  const { icon, type, placeholder, link, updateValue } = props
  const { href, text } = link
  return (
    <section className="input-group-dark">
      <i className={ icon } />
      <input className="input input-block" type={ type }
        ref={ node => {
          if (node) {
            updateValue(node.value.trim()) // 初始化的时候发送一次数据，假如浏览器帮助用户记住账号密码也不怕了
            node.addEventListener('blur', () => updateValue(node.value.trim()))
          }
        }}
        placeholder={ placeholder }
      />
    {
      href ?
      <a href={ href }>{ text }</a> :
      <span>{ text }</span>
    }
    </section>
  )
}

InputGroup.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
  updateValue: PropTypes.func.isRequired,
}

export default InputGroup
