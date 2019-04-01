//定义模块 模块名要和文件名相同，且不能包含目录名
layui.define(function(exports){
		//模块名      //模块接口，可以是函数或类
  exports('modelDemo', {
  		out: "abc",
  		print: function(){
    		alert('Hello World,'+this.out+'!!!');
  		}
	});
});

