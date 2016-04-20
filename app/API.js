/**
 * API常量
 */
const DEV_ENV = '//dev.api.aiyaopai.com/';
// const PRODUCTION_ENV = '//api.aiyaopai.com/';

// TODO: 临时测试用，建议讨论一下数据的组织（url和Fields合并是不是可行？）
const temp = `${DEV_ENV}?API=Albums.Search`;

const API = {
  WORK: {
    SEARCH: temp,
  },
};

export default API;
