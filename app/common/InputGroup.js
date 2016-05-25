import React, { PropTypes } from 'react'

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
