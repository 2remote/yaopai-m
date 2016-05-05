/* 判断浏览器滚动条的滚动方向
 * By @zaxlct
 * prewShow() 向上滚动
 * nextShow() 向下滚动
*/

/* 调用例子：
 * const prewShow = () => console.log('浏览器向上滚动')
 * const nextShow = () => console.log('浏览器向下滚动')
 * scrollEvent(prewShow, nextShow)
 * 或者参照 ./app/user/main/layouts/SelectLayout.js
 */

import $ from 'jquery'

const scrollDirect = (fn = () => {}) => {
  let beforeScrollTop = document.body.scrollTop
  window.addEventListener('scroll', () => {
    const afterScrollTop = document.body.scrollTop
    const delta = afterScrollTop - beforeScrollTop
    beforeScrollTop = afterScrollTop

    if (afterScrollTop < 10 || afterScrollTop > $(document.body).height - 10) {
      fn('up')
    } else {
      if (Math.abs(delta) < 10) {
        return
      }
      fn(delta > 0 ? 'down' : 'up')
    }
  }, false)
}

const scrollEvent = (prewShow = () => {}, nextShow = () => {}) => {
  const lock = {//  scroll上下滑动时，prewShow()、nextShow()只执行一次
    upflag: false,
    downflag: true,
  }

  scrollDirect((direction) => {
    if (direction === 'up') {
      if (lock.upflag) {
        prewShow()    // 往上滚动事件
        lock.downflag = true
        lock.upflag = false
      }
    }
    if (direction === 'down') {
      if (lock.downflag) {
        nextShow()      // 往下滚动事件
        lock.downflag = false
        lock.upflag = true
      }
    }
  })
}

export default scrollEvent
