import { connect } from 'react-redux';
import LoginLayout from 'user/layouts/LoginLayout';
import { userLoginActionAsync } from 'user/actions';

const mapStateToProps = state => {
  const result = {
    user: state.user.userData,
  };
  return result;
};

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
