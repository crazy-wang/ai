var express = require('express');
var router = express.Router();
var fs = require('fs')

var AipSpeechClient = require("baidu-aip-sdk").speech;
// 设置APPID/AK/SK
var APP_ID = "17610075";
var API_KEY = "Pq3vUo8TkvPv5ZkPfVfadHvs";
var SECRET_KEY = "nwAeNcGLSBAI5eCrDU3OHGqVlYMHbnxu";
// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);

// var voice = fs.readFileSync('./public/16k.pcm');
var voice = fs.readFileSync('./demoVoice.pcm');
var voiceBuffer = new Buffer(voice)

// 识别本地文件 【读取语音为文字】
client.recognize(voiceBuffer, 'wav', 16000).then(function (result) {
  console.log('识别出来的：' + JSON.stringify(result))
}, function (err) {
  console.log('错误了-----------', err)
})

// 语音合成 【文字合成为语音文件】
// var text = '帅的一发不可收拾的王政奇的百度语音合成测试'
// var options = {
//     // per: 3
//     per: 1
// }
// client.text2audio(text, options).then(function (result) {
//   // console.log('这是什么呀------', result)
//   if (result.data) {
//     console.log('已合成成功')
//     fs.writeFileSync('demoVoice.pcm', result.data)
//   } else {
//     console.log('服务器发生错误', result)
//   }
// })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '语音识别已启动' });
});

module.exports = router;
