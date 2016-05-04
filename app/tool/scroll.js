/* 判断浏览器滚动条的滚动方向
 * By @zaxlct
 * prewShow() 向下滚动
 * nextShow() 向下滚动
*/

/* 调用例子：
 * const prewShow = () => console.log('浏览器向上滚动');
 * const nextShow = () => console.log('浏览器向下滚动');
 * scrollEvent(prewShow, nextShow);
 * 或者参照 ./app/user/main/layouts/SelectLayout.js
 */

import $ from 'jquery'

const scrollEvent = (prewShow = () => {}, nextShow = () => {}) => {
  const scrollFunc = e => { // 判断鼠标滚动方向并兼容浏览器
    const event = e || window.event
    if (event.wheelDelta) { // IE/Opera/Chrome
      if (event.wheelDelta > 0) {
        prewShow() // 向上滚动
      } else {
        nextShow() // 向下滚动
      }
    } else if (event.detail) { // Firefox
      if (event.detail > 0) {
        nextShow()
      } else {
        prewShow()
      }
    }
  }

  const mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel'
  document.addEventListener(mousewheelevt, scrollFunc, false)

  // 键盘上下键事件的判断
  $(document).keydown((e) => {
    if (e.keyCode === 38) { // ↑键代表38
      prewShow()
    } else if (e.keyCode === 40) { // ↓键代表40
      nextShow()
    }
  })
}

export default scrollEvent
