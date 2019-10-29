// OCR（optical character reader）光学字符识别(文字识别)
var express = require('express');
var router = express.Router();
var https = require('https');
var qs = require('querystring')
var http = require('http')
const access_token = '24.7842ffdbfdc6620fdedb3a1e849eb128.2592000.1573627846.282335-17520563'

// 新建AipOcrClient
var AipOcrClient = require("baidu-aip-sdk").ocr;

// 设置APPID/AK/SK
var APP_ID = "17520563";
var API_KEY = "G27RBZwTDiQ9AGvqGEmrYXgw";
var SECRET_KEY = "QewXskuNblGXV9bcsbYm2jFTFRx63CG4";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

var HttpClient = require('baidu-aip-sdk').HttpClient;
// 设置request库的一些参数，例如代理服务地址，超时时间等
// request参数请参考 https://github.com/request/request#requestoptions-callback
HttpClient.setRequestOptions({timeout: 10000});

var fs = require('fs')
// var image = fs.readFileSync("./6.png").toString("base64");
// var image = fs.readFileSync("./5.png").toString("base64");
var image = fs.readFileSync("./4.png").toString("base64");
// var image = fs.readFileSync("./3.png").toString("base64");
// var image = fs.readFileSync("./2.png").toString("base64");
// var image = fs.readFileSync("./1.png").toString("base64");

// 调用通用文字识别（高精度版，识别时间较长）;  调用通用文字识别, 图片参数为本地图片(普通版，快：generalBasic函数替换accurateBasic 即可)
client.accurateBasic(image).then(function(result) {
    console.log('哈哈哈哈哈哈', JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log('错误了', err);
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
