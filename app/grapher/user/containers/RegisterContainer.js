import { connect } from 'react-redux'
import RegisterLayout from 'user/layouts/RegisterLayout'
import { sendTelRegisterActionAsync, receiveTelRegisterActionAsync } from 'user/actions'

const mapStateToProps = state => ({
  register: state.getIn(['user', 'register']),
})

const mapDispatchToProps = dispatch => ({
  onSendTel: tel => {
    dispatch(sendTelRegisterActionAsync(tel))
  },
  onReceiveTel: (tel, code, password) => {
    dispatch(receiveTelRegisterActionAsync(tel, code, password))
  },
})

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterLayout)

export default RegisterContainer
