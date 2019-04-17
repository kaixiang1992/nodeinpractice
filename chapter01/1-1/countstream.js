const Writable = require("stream").Writable;
const util = require("util");

function CounStream(matchtext, options){
    Writable.call(this, options);
    this.count = 0;
    this.matcher = new RegExp(matchtext, 'ig'); //TODO: 2.创建一个全局忽略大小写的正则对象
}

CounStream.prototype._write = function(chunk, encoding, cb){
    let matches = chunk.toString().match(this.matcher); //TODO: 3.将当前输入数据转为字符串并进行匹配
    if(matches){
        this.count += matches.length;
    }
    cb();
}

CounStream.prototype.end = function(){
    this.emit('total', {  //TODO: 4.输入流结束时，出发total事件
        count: this.count,
        matcher: this.matcher
    });
}

util.inherits(CounStream, Writable); //TODO: 1.继承可写流

module.exports = CounStream;
