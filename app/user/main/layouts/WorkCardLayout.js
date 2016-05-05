import React, { PropTypes } from 'react'

const WorkCardLayout = ({ cover, title, price, views, nickname }) => (
  <article style={{ marginBottom: '3px' }}>
    <div><img style={{ width: '100%' }} src={ cover } /></div>
    <h3>{ title } - <small>{ nickname }</small></h3>
    <p>价格：{ price }</p>
    <p>访问量：{ views }</p>
  </article>
)

WorkCardLayout.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
}

export default WorkCardLayout
