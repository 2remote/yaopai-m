import React, { PropTypes } from 'react'

const InputGroup = props => {
  const { icon, type, placeholder, link, updateValue } = props
  const { href, text } = link
  return (
    <section className="input-group">
      <i className={ icon } />
      <input className="input input-block" type={ type }
        ref={node => updateValue(node.value)} placeholder={ placeholder }
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
