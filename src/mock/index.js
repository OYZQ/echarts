const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user/userInfo', 'get', require('./json/userInfo'));
Mock.mock('/user/people', 'get', require('./json/people'));