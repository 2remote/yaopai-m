import React from 'react'

class AuditContainerOne extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      male: true,
    }
  }

  handleChange(e) {
    const male = !!(e.target.value === 'male')
    this.setState({
      male,
    })
  }

  render() {
    return (
      <section style={{ backgroundColor: 'white' }}>
        <div style={{ border: '2px solid black' }}>
          1.请上传头像
          <img />
          <button>上传</button>
        </div>

        <div style={{ border: '2px solid #f60' }}>
          1.您的昵称&nbsp;&nbsp;&nbsp;
          <input type="text" style={{ color: 'black' }} />
        </div>

        <div style={{ border: '2px solid black' }}>
          3.性别
          <form>
            男性：
            <input type="radio" name="Sex" value="male"
              checked={this.state.male}
              onChange={this.handleChange}
            />
            <br />
            女性：
            <input type="radio" name="Sex" value="female"
              checked={!this.state.male}
              onChange={this.handleChange}
            />
          </form>
        </div>

        <div>
          <button style={{ color: 'black', border: '1px solid #ccc' }}>上一步</button>
          <button style={{ color: 'black', border: '1px solid #ccc' }}>下一步</button>
        </div>
      </section>
    )
  }
}


export default AuditContainerOne
