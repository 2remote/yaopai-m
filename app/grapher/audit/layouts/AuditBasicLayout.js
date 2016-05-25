import React, { PropTypes } from 'react'
import $ from 'jquery'
import LocationIndicatorContainer from 'audit/containers/LocationIndicatorContainer'

/* NOTE: 选择性别改为选择城市 */

/* HACK: eslint-disable no-console */
/* eslint-disable no-console */

/**
 * 认证 - 基础信息
 * @param updateUI: 更新UI方法，接收以下参数：
 *   1. nickname 昵称
 *   2. cityId 城市ID
 * @param formData: 表单数据，包含以下参数：
 *   1. nickname 昵称
 *   2. cityId 城市ID
**/
const AuditBasicLayout = ({ updateUI, formData }) => {
  /* 1. data from props */
  const { avatar, nickname, cityId } = formData
  /* 2. prepare func */
  /**
   * 用户输入信息时调用：
   * @param: origin 用户修改的数据位
   * @param: value 用户修改后的数据
  **/
  const onChange = (origin, value) => {
    if (origin === 'nickname') {
      updateUI(value, cityId)
    } else if (origin === 'cityId') {
      updateUI(nickname, value)
    }
    console.log(`用户修改：${origin}: ${value}`) // TODO:
  }

  const onSubmit = () => {
    console.log('onSubmit in AuditBasicLayout') // TODO:
  }
  /* 3. slide animated */
  const provinceList = ['北京', '上海', '河南', '湖北', '河北', '云南']
  const cityList = ['南阳', '周口', '洛阳', '郑州', '开封', '安阳']

  const chooseProvince = (province, e) => {
    $(e).parent('.input-select').slideUp()
    console.log(`用户修改省份：${province}`)
  }
  const chooseCity = (city, e) => {
    $(e).parent('.input-select').slideUp()
    console.log(`用户修改城市：${city}`)
  }

  /* 4. the real jsx */
  return (
    <section style={{ backgroundColor: '#ececec' }}>
      <LocationIndicatorContainer />
      {/* form表单 */}
      <form onSubmit={onSubmit}>
        {/* TODO: hope this becomes input group or sth */}
        <div className="input-group">
          <label htmlFor="auditOneFile">
            1. 请上传头像
          </label>
          <div>{ avatar }</div>
          <br />
          {/* TODO: should look like a block level button */}
          {/* TODO: this may take some time */}
          <input type="file" id="auditOneFile" />
        </div>
        <label htmlFor="auditOneNickName">
          2. 您的昵称
        </label>
        <br />

        <div className="input-group-light">
          <i className="icon-left phone" />
          <input type="text" id="auditOneNickName" value={ nickname }
            onChange={e => onChange('nickname', e.target.value)}
          />
        </div>

        <br />
        <div className="input-group-light">
          <i className="icon-left phone" />
          <input type="text"
            placeholder="请选择省"
            onFocus={() => $('#chooseProvince').slideDown()}
          />
          <i className="icon-right down"
            onClick={() => $('#chooseProvince').slideToggle()}
          />
          <ul className="input-select" id="chooseProvince">
            {provinceList.map((province, index) =>
              <li
                className="select-item"
                key={index}
                onClick={e => chooseProvince(province, e.target)}
              >
                {province}
              </li>
            )}
          </ul>
        </div>
        <br />

        <div className="input-group-light">
          <i className="icon-left phone" />
          <input type="text"
            placeholder="请选择城市"
            onFocus={() => $('#chooseCity').slideDown()}
          />
          <i className="icon-right down"
            onClick={() => $('#chooseCity').slideToggle()}
          />
          <ul className="input-select" id="chooseCity">
            {cityList.map((city, index) =>
              <li
                className="select-item"
                key={index}
                onClick={e => chooseCity(city, e.target)}
              >
                {city}
              </li>
            )}
          </ul>
        </div>
        <br />
        <div className="btn-block">
          <button className="btn-black" type="submit">下一步</button>
        </div>
      </form>
    </section>
  )
}

AuditBasicLayout.propTypes = {
  updateUI: PropTypes.func.isRequired, // 响应form输入
  formData: PropTypes.shape({ // 表单数据
    avatar: PropTypes.string.isRequired, // 头像
    nickname: PropTypes.string.isRequired, // 昵称
    gender: PropTypes.string.isRequired, // 性别
    cityId: PropTypes.string.isRequired, // 城市ID
  }).isRequired,
}

export default AuditBasicLayout
