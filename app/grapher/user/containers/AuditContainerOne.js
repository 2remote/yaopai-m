import AuditOneLayout from 'user/layouts/AuditOneLayout'
import { connect } from 'react-redux'
import { changeAvatarActionAsycn, changeInfoActionAsycn } from 'user/actions'


const mapStateToProps = state => ({
  userData: state.user.audit.pgData,
})

const mapDispatchToProps = dispatch => ({
  onChangeAvatar: (Avatar) => dispatch(changeAvatarActionAsycn(Avatar)),
  onChangeInfo: (Nickname, Sex, Location) => dispatch(
    changeInfoActionAsycn(Nickname, Sex, Location)),
})

const AuditContaninerOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuditOneLayout)

export default AuditContaninerOne
