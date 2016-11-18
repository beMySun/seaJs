
/*
    define define(factory)

    define 接受 factory 参数，factory 可以是一个函数，也可以是一个对象或字符串。

    factory 为对象、字符串时，表示模块的接口就是该对象、字符串。比如可以如下定义一个 JSON 数据模块：

    define({ "foo": "bar" });
    也可以通过字符串定义模板模块：

    define('I am a template. My name is {{name}}.');
    factory 为函数时，表示是模块的构造方法。执行该构造方法，可以得到模块向外提供的接口。factory 方法在执行时，默认会传入三个参数：require、exports 和 module：

    define(function(require, exports, module) {

      // 模块代码

    });
*/
define(function(require) {
    var $ = require("jquery");
    var a = require("./a");
    var b = require("./b");
    var tips = require("tips");
    var dialog = require("dialog");

    console.log($);

    var newLayer = require("./newLayer");
    
    //console.log(newLayer);
    newLayer.dialog('new dialog coming in..');
    console.log("new dialog coming in..")

/*    var layer = require("layer");
    layer.open({
      title: '测试',
      content: '可以填写任意的layer代码'
    });  */   

    a.loga()
    console.log(a);
    console.log(b);
    console.log(tips);
    console.log(dialog);

    console.log("mark");


    var Module = function() {};

    // 初始化
    Module.prototype.init = function() {
      var self = this;

      this.fetchData()
      .then(function (res) { // 请求成功
        console.log("请求成功");
        self.renderData(res);
      }, function () { // 请求失败
        self._fetchDataFailed();
      });
/*        .then(function () { // always
          console.log("last step");
        });*/
    };

    // 绑定事件
    Module.prototype.bindEvent = function() {
      // ...
    };

    // 获取数据
    Module.prototype.fetchData = function() {
     console.log("请求数据");
      return $.ajax({
          url : "http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"
      });
    };

    // 渲染数据
    Module.prototype.renderData = function(data) {
      data = this._resolveData(data);
      console.log("渲染数据");
      // ...
     
    };

    // 处理数据
    Module.prototype._resolveData = function(data) {
      // ...
      console.log("处理数据");
    };

    // 加载失败
    Module.prototype._fetchDataFailed = function() {
      // ...
       console.log("请求数据失败。。。");
    };

    Module.prototype.init();

    
});
