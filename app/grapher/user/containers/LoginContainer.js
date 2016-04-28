import { connect } from 'react-redux';
import LoginLayout from '../layouts/LoginLayout';

const mapStateToProps = state => {
  const result = {
    user: state.user,
  };
  return result;
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, password) => {
    dispatch({
      type: 'SUBMIT',
      name,
      password,
    });
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginLayout);

export default LoginContainer;
