import { connect } from 'react-redux'
// import Immutable from 'immutable'
import AuditOneLayout from 'user/layouts/AuditOneLayout'
// import { changeAvatarActionAsycn, changeInfoActionAsycn } from 'user/actions'

const mapStateToProps = state => {
  /* eslint-disable no-console */
  console.log('InMap', state.getIn(['user', 'audit', 'pgData']))
  return {
    formData: {
      avatar: 'avatar',
      nickname: 'nickname',
      gender: 'gender',
      cityId: 'cityId',
    },
  }
}

/* HACK: eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
const mapDispatchToProps = dispatch => ({
  // onChangeAvatar: (Avatar) => dispatch(changeAvatarActionAsycn(Avatar)),
  onChangeInfo: (nickname, gender, cityId) => {
    // changeInfoActionAsycn(Nickname, Sex, Location)),
    console.log(`hehe${nickname}, ${gender}, ${cityId}`)
  },
})

const AuditContaninerOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuditOneLayout)

export default AuditContaninerOne
