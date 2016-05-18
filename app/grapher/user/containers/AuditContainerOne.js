import React from 'react'
import { connect } from 'react-redux'

class AuditContainerOne extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      male: false,
      isSelect: false,
    }
  }

  handleChange(e) {
    const male = (e.target.value === 'female')
    this.setState({
      male,
      isSelect: true,
    })
  }

  render() {
    const { NickName, Sex, Avatar } = this.props
    return (
      <section style={{ backgroundColor: 'white' }}>
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
          <input type="text" style={{ color: 'black' }} value={NickName} />
        </div>

        <div style={{ border: '2px solid black' }}>
          3.性别
          <form>
            男性：
            {/* TODO 这绝对是一个反面教材，谁能看得懂你下面写的是啥！😒*/ }
            <input type="radio" name="Sex" value="male"
              checked={this.state.isSelect ? !this.state.male : !this.state.male && Sex}
              onChange={this.handleChange}
            />
            <br />
            女性：
            <input type="radio" name="Sex" value="female"
              checked={this.state.isSelect ? this.state.male : this.state.male || !Sex}
              onChange={this.handleChange}
            />
          </form>
        </div>

        <div>
          <button style={{ color: 'black', border: '1px solid #ccc' }}>下一步</button>
        </div>
      </section>
    )
  }
}

export default connect(state => state.user.audit)(AuditContainerOne)
