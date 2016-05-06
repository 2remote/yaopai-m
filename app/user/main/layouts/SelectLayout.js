import React, { Component/* ,PropTypes*/ } from 'react'
// import { Link } from 'react-router';
import $ from 'jquery'
import scrollEvent from 'tool/scroll'

const listData = [
  {
    filterType: '拍摄地点',
    filterList: [
      {
        text: '郑州',
      },
      {
        text: '北京',
      },
      {
        text: '大理',
      },
      {
        text: '拉萨',
      },
      {
        text: '南京',
      },
      {
        text: '沈阳',
      },
      {
        text: '海南',
      },
    ],
  },
  {
    filterType: '拍摄系列',
    filterList: [
      {
        text: '小清新',
      },
      {
        text: '复古',
      },
      {
        text: '性感',
      },
    ],
  },
  {
    filterType: '价格筛选',
    filterList: [
      {
        text: '0 - 100 元',
      },
      {
        text: '100 - 1000 元',
      },
      {
        text: '1000 - 10000 元',
      },
    ],
  },
]
const filterType = listData.map((data) => data.filterType)

class SelectLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectList: '',
      filterType,
    }
  }

  componentDidMount() {
    const scrollUp = () => $('#select-component').fadeIn('fast')// 往上滚动事件
    const scrollDown = () => $('#select-component').fadeOut('fast')// 往下滚动事件
    scrollEvent(scrollUp, scrollDown)
  }

  onSelect(index) {
    $('#mask-select').show().addClass('fade-toggle')
    $('#select-list').slideDown()
    const selectList = listData[index].filterList.map((data, selectIndex) =>
      <li key={selectIndex} onClick={() => this.confirmSelect(data.text, index)}>
        <a>{data.text}</a>
      </li>
    )

    this.setState({
      selectList,
    })

    $('#mask-select').click(this.hide)
  }

  confirmSelect(text, index) {
    this.hide()
    const newfilterType = this.state.filterType
    newfilterType[index] = text
    this.setState({
      filterType: newfilterType,
    })
  }

  hide() {
    $('#mask-select').removeClass('fade-toggle').hide()
    $('#select-list').slideUp()
  }

  render() {
    let selectType = this.state.filterType.map((data, index) =>
      <li key={index} onClick={() => this.onSelect(index)}>
        <a>{data}<i className="down" /></a>
      </li>
    )
    return (
      <div>
        <div className="select-component" id="select-component">
          <ul className="select-list">
            {selectType}
          </ul>

          <ul className="select-detail-list" id="select-list">
            {this.state.selectList}
          </ul>
        </div>
        <div className="mask-transition-select" id="mask-select"></div>
      </div>
    )
  }
}

export default SelectLayout
