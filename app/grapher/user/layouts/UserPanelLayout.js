import React from 'react'

//
const userInfo = {
  userId: 1,
  nickname: 'stone',
  avatar: 'http://img.25pp.com/uploadfile/youxi/images/2014/1202/20141202105822882.jpg',
  userSex: 1,
  userType: 'Photographer,moter',
  signature: '一个热爱摄影的大学生',
}

const arr = userInfo.userType.split(',')

const getUserType = (type) => {
  switch (type) {
    case 'moter' :
      return '认证模特'
    case 'Photographer':
      return '认证摄影师'
    case 'MakeupArtist':
      return '认证化妆师'
    default:
      return '未认证'
  }
}

const UserPanelLayout = () => (
  <section style={{ textAlign: 'center', color: 'white' }}>
      <div style={
      {
        width: 150,
        height: 150,
        borderRadius: '50%',
        background: `url('${userInfo.avatar}')`,
        backgroundSize: 'contain',
        margin: '0 auto',
      }
    } >
      </div>
      <h4>{ userInfo.nickname }</h4>
      <h4>{ userInfo.signature }</h4>
      {
        arr.map((data, index) =>
          <h4>{getUserType(arr[index])}</h4>
        )
      }
  </section>
)


export default UserPanelLayout
