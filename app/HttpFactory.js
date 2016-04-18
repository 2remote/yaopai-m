/**
 * 基于jQuery的Promise封装
 */
import $ from 'jquery';

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
        if (respData.Success) {
          resolve(respData);
        } else {
          reject(new Error(respData.ErrorMsg));
        }
      },
      error: error => {
        reject(new Error(error.statusText));
      },
    });
  });
  return promise;
};

export { post as default };
