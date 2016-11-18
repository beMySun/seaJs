define("main/a", function(require,exports, module) {
    var data = {

    	loga: function(msg){
    		if(msg){
    			console.log(msg);
    		}
    		console.log("from a.js");
    	}
    }

    //return data;
    module.exports = data;
});
