import React, { PropTypes } from 'react'

/* NOTE: 选择性别改为选择城市 */

/* HACK: eslint-disable no-console */
/* eslint-disable no-console */

const AuditContainerOne = ({ onChangeInfo, formData }) => {
  /* 1. data from props */
  const { avatar, nickname, gender, cityId } = formData
  /* 2. prepare func */
  /**
   * 用户输入信息时调用：
   * @param: origin 用户修改的数据位
   * @param: value 用户修改后的数据
  **/
  const onChange = (origin, value) => {
    console.log(`用户修改：${origin}: ${value}`) // TODO:
    onChangeInfo(nickname, gender, cityId)
    console.log(`avatar: ${avatar}`)
  }
  const lastStep = () => {
    console.log('pretending that I\'m going back') // TODO:
  }
  const onSubmit = () => {
    console.log('onSubmit in AuditContainerOne') // TODO:
  }
  /* 3. the real jsx */
  return (
    <section>
      {/* form表单 */}
      <form onSubmit={onSubmit}>
        {/* TODO: hope this becomes input group or sth */}
        <div className="input-group">
          <label htmlFor="auditOneFile">
            1. 请上传头像
          </label>
          <br />
          {/* TODO: should look like a block level button */}
          {/* TODO: this may take some time */}
          <input type="file" id="auditOneFile" ></input>
        </div>
        <div className="input-group">
          <label htmlFor="auditOneNickName">
            2. 您的昵称
          </label>
          <br />
          <input type="text" id="auditOneNickName" value={ nickname }
            onChange={e => onChange('nickname', e.target.value)}
          ></input>
        </div>
        <div className="input-group">
          <label>
            3. 性别
          </label>
          <br />
          {/* TODO: should there be a radio group component? */}
          <input type="radio" name="auditOneGender"></input>男
          <br />
          <input type="radio" name="auditOneGender"></input>女
        </div>
        <div className="input-group">
          <label>
            4. 城市
          </label>
          <br />
          <select onChange={e => onChange('cityId', e.target.value)}>
            <option value="">----请选择城市----</option>
            <option value="ZZ">郑州</option>
            <option value="BJ">北京</option>
            <option value="SH">上海</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={lastStep}>上一步</button>
          <button type="submit">下一步</button>
        </div>
      </form>
    </section>
  )
}

AuditContainerOne.propTypes = {
  onChangeInfo: PropTypes.func.isRequired, // 响应form输入
  formData: PropTypes.shape({ // 表单数据
    avatar: PropTypes.string.isRequired, // 头像
    nickname: PropTypes.string.isRequired, // 昵称
    gender: PropTypes.string.isRequired, // 性别
    cityId: PropTypes.string.isRequired, // 城市ID
  }).isRequired,
}

export default AuditContainerOne
