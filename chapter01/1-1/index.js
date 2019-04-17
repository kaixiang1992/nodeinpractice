const CounStream = require("./countstream.js");
const str = 'displayName';
const counstream = new CounStream(str); //TODO: 匹配displayName的文本计数
const https = require("https");


https.get('https://www.geex.vip:8443/exchange/back/tradePair', function(res){
    res.pipe(counstream)
});

counstream.on('total', function(obj){
    console.log(`${obj.matcher} Total matches: ${obj.count}`);
});