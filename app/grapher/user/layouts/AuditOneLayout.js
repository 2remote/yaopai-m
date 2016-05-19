import React from 'react'

class AuditContainerOne extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      male: false,
      isSelect: false,
    }
  }

  onSubmit(nickNameUpdate, NickName) {
    const Sex = this.state.isSelect ? Number(this.state.isSelect) : 1
    const Location = this.props.CityId || 2255

    if (nickNameUpdate === '') {
      if (NickName === '') {
        alert('请输入昵称')
      } else {
        this.props.onChangeInfo(NickName, Sex, Location)
      }
    } else {
      this.props.onChangeInfo(nickNameUpdate, Sex, Location)
    }

    // TODO
    // this.props.onChangeAvatar(Avatar)
  }

  handleChange(e) {
    const male = (e.target.value === 'female')
    this.setState({
      male,
      isSelect: true,
    })
  }

  render() {
    const { NickName, Sex, Avatar } = this.props.userData
    let nickNameUpdate
    return (
      <section>
        <form
          style={{ backgroundColor: 'white' }}
          onSubmit={() => this.onSubmit(nickNameUpdate.value.trim(), NickName)}
        >
          <div style={{ border: '2px solid black' }}>
            1.请上传头像
            {
              Avatar ?
              <img
                src={Avatar}
                style={{ width: 50, height: 50, backgroundColor: '#f60', borderRadius: '50%' }}
              />
            : ''
            }
            <button style={{ color: 'black', border: '1px solid #ccc' }}>上传</button>
          </div>

          <div style={{ border: '2px solid #f60' }}>
            1.您的昵称&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              style={{ color: 'black' }}
              placeholder={NickName}
              ref={node => {nickNameUpdate = node}}
            />
          </div>

          <div style={{ border: '2px solid black' }}>
            3.性别
              男性：
              {/* TODO 这绝对是一个反面教材，谁能看得懂你下面写的是啥！😒*/ }
              <input
                type="radio" name="Sex" value="female"
                checked={this.state.isSelect ? this.state.male : this.state.male || !Sex}
                onChange={this.handleChange}
              />
              <br />
              女性：
              <input
                type="radio" name="Sex" value="male"
                checked={this.state.isSelect ? !this.state.male : !this.state.male && Sex}
                onChange={this.handleChange}
              />
          </div>

          <div>
            <button style={{ color: 'black', border: '1px solid #ccc' }} type="submit">下一步</button>
          </div>
        </form>
      </section>
    )
  }
}

export default AuditContainerOne
