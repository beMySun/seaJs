/**
 * 配置项目
 *
 */
seajs.config({
	"base":"./js/",
	"paths": { //当目录比较深，或需要跨目录调用模块时，可以使用 paths 来简化书写。 
       	"seajs": "seajs/2.3.0/sea.js"
    },
	"alias":{ // 设置别名，方便调用 , 当模块标识很长时，可以使用 alias 来简化。
		"jquery" : "lib/jquery-2.1.4.min.js",
		"pjax" :"http://cdn.bootcss.com/jquery.pjax/1.9.6/jquery.pjax.min.js",
		"zepto" : "lib/zepto/1.1.3/zepto.js",
		"tips" : "main/tips/0.1.0/tips.js",		
		"dialog" : "main/dialog/0.1.0/dialog.js",
		"layer": "http://cdn.bootcss.com/layer/2.4/layer.js"
	},
	"map": [
		//[".js",".js?1.0"]
	],
	"debug":2 //值为 true 时，加载器不会删除动态插入的 script 标签。插件也可以根据 debug 配置，来决策 log 等信息的输出。
});