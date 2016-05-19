// 认证结束后显示页面
import React from 'react'

// let id

const VertifyResultLayout = () => (
  <section>
    <div style={{
      textAlign: 'center',
      color: 'white',
      padding: 50,
    }
   }>
      <h3>您的认证已经提交审核</h3>
      <p>请等待1-2个工作日</p>
    </div>
    <div style={{
      background: 'white',
      padding: 50,
      textAlign: 'center',
    }
   }>
      <p>现在你可以上传自己的作品，
      待审核成功后，将直接上架YAOPAI商城</p>
      <button style={{ color: 'black' }}>上传作品</button>
      <br />
      <button style={{ color: 'black' }}>完善个人资料</button>
    </div>
  </section>
)

export default VertifyResultLayout
