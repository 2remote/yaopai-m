<!DOCTYPE html>
<html
<% if(htmlWebpackPlugin.files.manifest) { %>
  manifest="<%=htmlWebpackPlugin.files.manifest %>"
<% } %>
>
<head>
  <!-- 字符集：utf-8 -->
  <meta charset="UTF-8" />
  <!-- 适配手机 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <!-- 禁用手机号码检测 -->
  <meta name="format-detection" content="telephone=no" />
  <!-- 禁用电子邮件检测 -->
  <meta name="format-detection" content="email=no" />
  <title><%=htmlWebpackPlugin.options.title %></title>
  <!-- http://iconfont.cn/ -->
  <link rel="stylesheet" href="//at.alicdn.com/t/font_1458528282_0916994.css" />
  <!-- <link rel="stylesheet" type="text/css" href="http://cdn.staticfile.org/slick-carousel/1.3.15/slick.css" /> -->
  <!-- 插入favicon -->
  <% if(htmlWebpackPlugin.files.favicon) { %>
  <link rel="shortcut icon" href="{%=htmlWebpackPlugin.files.favicon%}" />
  <% } %>
  <!-- pure css -->
  <link rel="stylesheet" href="//cdn.bootcss.com/pure/0.6.0/pure-min.css" />
  <!-- 插入依赖的css -->
  <% for (var css in htmlWebpackPlugin.files.css) { %>
  <link href="{%=htmlWebpackPlugin.files.css[css]%}" ref="stylesheet" />
  <% } %>
</head>
<body>
  <div id="app"></div>
</body>
<!-- <script type="text/javascript" src="/imgs/ua-parser.min.js"></script> -->
<!-- <script src="http://cdn.staticfile.org/plupload/2.1.8/plupload.full.min.js"></script> -->
<!-- <script src="http://cdn.staticfile.org/plupload/2.1.8/i18n/zh_CN.js"></script> -->
<!-- <script type="text/javascript" src="/imgs/js/qiniu.js"></script> -->
</html>
