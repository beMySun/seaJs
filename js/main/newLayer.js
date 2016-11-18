
/*
    define define(id?, deps?, factory)

    define 也可以接受两个以上参数。字符串 id 表示模块标识，数组 deps 是模块依赖。比如：

    define('hello', ['jquery'], function(require, exports, module) {

      // 模块代码

    });
    id 和 deps 参数可以省略。省略时，可以通过构建工具自动生成。
*/

/*
 
 config 中指定的路径为./js
 这里定义的模块id ,要在对应的路径
    
*/

define("main/newLayer",["jquery","layer"], function(require,exports, module) {

	var layer = require("layer");
    
    var a = require('main/a');
    a.loga("from newLayer");

	var data = " newLayer data";

    var data2 = {

    	dialog: function(msg){
    		//console.log("log a");
    		    layer.open({
				      title: false,
				      content: msg
				   }); 
    	},

    }

    //return data;
    module.exports = data2;
});
