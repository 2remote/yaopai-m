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
          reject(new Error(respData.ErrorMsg))
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
