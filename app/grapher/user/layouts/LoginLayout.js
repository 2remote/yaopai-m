import React, { PropTypes } from 'react'
import { RouteTransition, presets } from 'react-router-transition'
import UserEntryLayout from './UserEntryLayout'
import InputGroup from 'common/InputGroup'
import { checkTel } from 'tool/inputRegular'

/* TODO: 这个写法太纠结了。 */
// 让界面根据数据变化的话，方法有：
// 1. 直接使用当前component的state
// 2. 把所有状态dispatch给redux，让container再map回来
// 前者更“方便”，”顺手”，后者更redux

class LoginLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMsg: '',
    }
  }

  onSubmit(name, password) {
    event.preventDefault()
    if (name === '') {
      // this.setState({ errorMsg: '请输入手机号' })
      return
    } else if (checkTel(name)) {
      // this.setState({ errorMsg: '格式不正确' })
      return
    }
    this.props.onSubmit(name, password)
  }

  render() {
    let name
    let password
    // const { user } = this.props
    return (
      <section>
        <UserEntryLayout />

        <RouteTransition { ...presets.slideLeft } >
          <form className="form-box " onSubmit={() => this.onSubmit(name, password)} >
            <InputGroup
              iconLeft={ 'phone' }
              type={ 'number' }
              placeholder={ '请输入账号' }
              updateValue={ text => {name = text} }
            />

            <InputGroup
              iconLeft={ 'lockclosed' }
              type={ 'password' }
              placeholder={ '请输入密码' }
              link={{
                href: '//m.aiyaopai.com/#/find_my_pass_page1',
                text: '忘记密码',
              }}
              updateValue={ text => {password = text} }
            />

          <div className="btn-block"><button className="btn-dark" type="submit">登陆</button></div>
          </form>
        </RouteTransition>
      </section>
    )
  }
}

LoginLayout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default LoginLayout
