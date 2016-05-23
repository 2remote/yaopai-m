import React, { PropTypes } from 'react'

class AuditContainerOne extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      male: false,
      isSelect: true,
    }
  }

  onSubmit(nickNameUpdate, NickName, Sex) {
    event.preventDefault()
    const sexUpdate = this.state.isSelect ? Sex : Number(!this.state.male)
    // TODO 选择城市
    const Location = this.props.userData.CityId || 2255

    if (nickNameUpdate === '') {
      if (NickName === '') {
        // alert('请输入昵称')
      } else {
        this.props.onChangeInfo(NickName, sexUpdate, Location)
      }
    } else {
      this.props.onChangeInfo(nickNameUpdate, sexUpdate, Location)
    }

    // TODO
    // this.props.onChangeAvatar(Avatar)
  }

  handleChange(e) {
    const male = (e.target.value === 'male')
    this.setState({
      male,
      isSelect: false,
    })
  }

  render() {
    const { userData } = this.props
    let nickNameUpdate
    return (
      <section>
        <form
          style={{ backgroundColor: 'white' }}
          onSubmit={
            () => this.onSubmit(nickNameUpdate.value.trim(), userData.NickName, userData.Sex)
          }
        >
          <div style={{ border: '2px solid black' }}>
            1.请上传头像
            {
              userData.Avatar ?
              <img
                src={userData.Avatar}
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
              placeholder={userData.NickName}
              ref={node => {nickNameUpdate = node}}
            />
          </div>

          <div style={{ border: '2px solid black' }}>
            3.性别
              男性：
              {/* TODO 这绝对是一个反面教材，谁能看得懂你下面写的是啥！😒*/ }
              <input
                type="radio" name="Sex" value="female"
                checked={
                  (this.state.isSelect && typeof Sex === 'number') ? userData.Sex : !this.state.male
                }
                onChange={this.handleChange}
              />
              <br />
              女性：
              <input
                type="radio" name="Sex" value="male"
                checked={
                  (this.state.isSelect && typeof Sex === 'number') ? !userData.Sex : this.state.male
                }
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

AuditContainerOne.propTypes = {
  onChangeInfo: PropTypes.func.isRequired,
  onChangeAvatar: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    Avatar: PropTypes.string,
    Sex: PropTypes.number,
    CityId: PropTypes.number,
    NickName: PropTypes.string,
  }),
}

export default AuditContainerOne
