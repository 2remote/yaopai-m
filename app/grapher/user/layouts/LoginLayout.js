import React from 'react'
import { RouteTransition, presets } from 'react-router-transition'
import UserEntryLayout from './UserEntryLayout'
import InputGroup from 'common/InputGroup'
import { checkTel } from 'common/InputRegular'

class LoginLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMsg: '',
    }
  }

  onSubmit(name, password) {
    if (name === '') {
      this.setState({ errorMsg: '请输入手机号' })
      return
    } else if (checkTel(name)) {
      this.setState({ errorMsg: '格式不正确' })
      return
    }
    this.props.onSubmit(name, password)
  }

  render() {
    let name
    let password
    const { user } = this.props
    return (
      <section>
        <UserEntryLayout />

        <RouteTransition { ...presets.slideLeft } >
          <form className="form-box " onSubmit={() => this.onSubmit(name, password)} >
            <InputGroup
              icon={ 'phone' }
              type={ 'number' }
              placeholder={ '请输入账号' }
              link={{
                text: this.state.errorMsg,
              }}
              updateValue={ text => {name = text} }
            />

            <InputGroup
              icon={ 'lockclosed' }
              type={ 'password' }
              placeholder={ '请输入密码' }
              link={{
                href: '//m.aiyaopai.com/#/find_my_pass_page1',
                text: '忘记密码',
              }}
              updateValue={ text => {password = text} }
            />

            <button className="btn btn-block" type="submit">登陆</button>
          </form>
        </RouteTransition>
      </section>
    )
  }
}

export default LoginLayout
