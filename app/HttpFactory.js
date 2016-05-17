/**
 * 基于jQuery的Promise封装
 */
import $ from 'jquery'

const post = (url, data) => {
  const promise = new Promise((resolve, reject) => {
    $.ajax({
      url,
      type: 'POST',
      dataType: 'json',
      data,
      timeout: 5000,
      crossDomain: true,
      xhrFields: {
        withCredentials: true,
      },
      success: respData => {
        // 这里的逻辑是：如果后台返回HTTP 200，但是Success为false
        // 则仍然reject掉，让post的catch去处理
        if (respData.Success) {
          resolve(respData)
        } else {
          // 与后台沟通后，ErrorCode如果小于0，则类似HTTP 500的报错
          // 但是没有ErrorMsg 😂
          let errorMsg = respData.ErrorMsg
          if (respData.ErrorCode && respData.ErrorCode < 0)
            errorMsg = '未知错误，请稍后再试' // IDEA: 这个可以做成config
          alert(errorMsg) // HACK: 应该要换成高级alert组件吧
          reject(new Error(errorMsg))
        }
      },
      error: error => {
        reject(new Error(error.statusText))
      },
    })
  })
  return promise
}

export { post as default }
