var express = require('express')
var router = express.Router()
// 一、引入相应模块
var AipOcrClient = require("baidu-aip-sdk").ocr;
var fs = require('fs')
// var HttpClient = require("baidu-aip-sdk").HttpClient;
// HttpClient.setRequestOptions({timeout: 10000});

// 设置APPID/AK/SK
var APP_ID = "17520563";
var API_KEY = "G27RBZwTDiQ9AGvqGEmrYXgw";
var SECRET_KEY = "QewXskuNblGXV9bcsbYm2jFTFRx63CG4";

// 二、新建一个对象，建议只保存一个对象调用服务接口
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

// var image = fs.readFileSync('./public/images/test.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test2.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test3.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test4.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test5.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test6.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test7.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test8.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test9.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test10.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test11.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test12.jpg').toString('base64')
// var image = fs.readFileSync('./public/images/test13.jpg').toString('base64')
var image = fs.readFileSync('./public/images/test14.jpg').toString('base64')

// 三、调用api, 图片参数为本地图片

// client.generalBasic(image).then(function(result) {
//     console.log('成功', JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log('错误', err);
// });

// var idCardSide = 'front'
// client.idcard(image, idCardSide).then(function(result) {
//     console.log('成功', JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log('错误', err);
// });

// 调用二维码识别
// client.qrcode(image).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });

// 调用车牌识别,识别机动车车牌，并返回签发地和号牌。
// client.licensePlate(image).then(function(result) {
//     console.log('成功', JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log('错误', err);
// });

// multi_detect 检测多张车牌。【不是很准确，有时候识别少或者识别不出来，最好还是采用单张的来，多张的时候就在前面识别出来切割划分好，再去多次请求 https://ai.baidu.com/forum/topic/show/496990】
var options = {};
options["multi_detect"] = "true";
client.licensePlate(image, options).then(function(result) {
    console.log('成功', JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log('错误', err);
});


/* GET ai listing. */
router.get('/', function (req, res) {
    res.send('ai页面启动')
})

module.exports = router