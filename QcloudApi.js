var request = require('request')
var assign = require('object-assign')

var qs = require('querystring')
var dotQs = require('dot-qs');
var crypto = require('crypto')

var baseHost = 'api.qcloud.com'

/**
 * API ���캯��
 * @param {Object} [defaults] Ĭ�ϲ���������
 * @param {String} defaults.serviceType ��������. ��: cvm, vpc, dfw, lb ��. ���� `serviceType` �� `baseHost` ��ƴװ����������, ��: `vpc.api.qcloud.com`
 * @param {String} defaults.path='/v2/index.php' Api ����·��
 * @param {String} defaults.method='POST' ���󷽷�
 * @param {String} defaults.baseHost='api.qcloud.com' Api �Ļ�������. �� `serviceType` ƴװ����������.
 * @param {String} defaults.SecretId secretId
 * @param {String} defaults.SecretKey secretKey
 * @constructor
 */
var QcloudApi = function(defaults) {
  this.defaults = assign({
    path: '/v2/index.php',
    method: 'POST',
    baseHost: baseHost
  }, defaults)
}

/**
 * ���� API �������ַ
 * @param {Object} opts
 * @returns {string}
 */
QcloudApi.prototype.generateUrl = function(opts) {
  opts = opts || {}
  var host = this._getHost(opts)

  return 'https://' + host + (opts.path || this.defaults.path)
}

/**
 * �����������.
 * @param {Object} data �ô�����Ĳ���. ͬ `request` ������ `data` ����
 * @param {Object} [opts] ��������. ͬ `request` ������ `opts` ����
 * @returns {string} ����ǩ���Ĳ����ַ���
 */
QcloudApi.prototype.generateQueryString = function(data, opts) {
  opts = opts || this.defaults

  var defaults = this.defaults
  var param = assign({
    Region: this.defaults.Region,
    SecretId: opts.SecretId || this.defaults.SecretId,
    Timestamp: Math.round(Date.now() / 1000),
    Nonce: Math.round(Math.random() * 65535)
  }, data)

  param = dotQs.flatten(param)

  var keys = Object.keys(param)
  var qstr = '', signStr

  var host = this._getHost(opts)
  var method = (opts.method || defaults.method).toUpperCase()

  keys.sort()

  //ƴ�� querystring, ע������ƴ�ӵĲ���Ҫ������ `qs.stringify` ��Ĳ���һ��
  keys.forEach(function(key) {
    var val = param[key]
    // �ų��ϴ��ļ��Ĳ���
    if(method === 'POST' && val && val[0] === '@'){
      return
    }
    if(key === '') {
      return
    }
    if(val === undefined || val === null || (typeof val === 'number' && isNaN(val))) {
      val = ''
    }
    //�Ѳ����е� _ �滻�� .
    qstr += '&' + key.replace('_', '.') + '=' + val
  })

  qstr = qstr.slice(1)

  signStr = this.sign(method + host + (opts.path || defaults.path) + '?' + qstr, opts.SecretKey || defaults.SecretKey)

  param.Signature = signStr

  return qs.stringify(param)
}

/**
 * ���� API
 * @param {Object} data �ô�����Ĳ���.
 * @param {Object} [data.SecretId] Api SecrectId, ͨ�� `data` ��������ʱ������ `opt` ���뼰Ĭ�ϵ� `secretId`
 * @param {Object} [opts] ��������. ������Ĳ���ȱʡʹ��Ĭ������ (`this.defaults`) ��Ķ�Ӧ��
 * @param {String} opts.host �ô�����ʹ�õ� API host. ������ò�����ʱ��, ������ `serviceType` ��Ĭ�� `host`
 * @param {requestCallback} callback
 */
QcloudApi.prototype.request = function(data, opts, callback) {
  if(typeof opts === 'function') {
    callback = opts
    opts = this.defaults
  }
  opts = opts || this.defaults
  callback = callback || Function.prototype

  var url = this.generateUrl(opts)
  var method = (opts.method || this.defaults.method).toUpperCase()
  var dataStr = this.generateQueryString(data, opts)
  var option = {url: url, method: method, json: true, strictSSL: false}

  if(method === 'POST') {
    option.form = qs.parse(dataStr)
  }else{
    option.url += '?' + dataStr
  }

  request(option, function(error, response, body) {
    /**
     * `.request` ������ص�
     * @callback requestCallback
     * @param {Error} error �������
     * @param {Object} body API ������
     */
    callback(error, body)
  })
}


/**
 * ����ǩ��
 * @param {String} str ��ǩ���Ĳ�����
 * @param {String} secretKey
 * @returns {String} ǩ��
 */
QcloudApi.prototype.sign = function(str, secretKey) {
  var hmac = crypto.createHmac('sha1', secretKey || '')
  return hmac.update(new Buffer(str, 'utf8')).digest('base64')
}

/**
 * ��ȡ API host
 * @param opts ��������
 * @param {String} [opts.serviceType] ��������. ��: cvm, vpc, dfw, lb ��
 * @param {String} [opts.host] ���������ֱ�Ӵ��� host, ��ֱ�ӷ��ظ� host
 * @returns {String}
 * @private
 */
QcloudApi.prototype._getHost = function(opts) {
  var host = opts.host
  if(!host) {
    host = (opts.serviceType || this.defaults.serviceType) + '.' + (opts.baseHost || this.defaults.baseHost)
  }
  return host
}

module.exports = QcloudApi