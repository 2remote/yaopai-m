import { connect } from 'react-redux';
import LoginLayout from 'user/layouts/LoginLayout';
import { userLoginActionAsync } from 'user/actions';

const mapStateToProps = state => ({
  user: state.user.userData,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (loginname, password) => {
    dispatch(userLoginActionAsync(loginname, password));
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginLayout);

export default LoginContainer;
