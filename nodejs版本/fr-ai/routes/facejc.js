var express = require('express');
var router = express.Router();
var fs = require('fs')


var AipFaceClient = require("baidu-aip-sdk").face;

// 设置APPID/AK/SK
var APP_ID = "17637722";
var API_KEY = "3sa4WjQ6TA2ObyGGcOAe6GXy";
var SECRET_KEY = "ad8xNYkMvS34IrkBlUV8x8kTKq5KIypV";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipFaceClient(APP_ID, API_KEY, SECRET_KEY);

// var image = "取决于image_type参数，传入BASE64字符串或URL字符串或FACE_TOKEN字符串";
// var imageType = "BASE64";
// var image = fs.readFileSync("./public/images/1.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/2.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/3.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/4.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/5.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/6.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/7.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/8.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/9.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/10.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/11.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/12.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/13.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/14.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/15.jpg").toString('base64');
// var image = fs.readFileSync("./public/images/16.jpg").toString('base64');
var image = fs.readFileSync("./public/images/17.jpg").toString('base64');
var imageType = "BASE64";

// 如果有可选参数
var options = {};
options["face_field"] = "age,beauty,expression,face_shape,gender,emotion,race";
options["max_face_num"] = "2";
options["face_type"] = "LIVE";
options["liveness_control"] = "NONE";

// 带参数调用人脸检测
client.detect(image, imageType, options).then(function(result) {
    console.log('结果-----', JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log('错误了', err);
});;


/* GET facejc page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '人脸检测' });
});

module.exports = router;
