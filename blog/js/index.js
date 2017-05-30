$(function(){
	 
	var s1=new Date("2017-4-19");
	var s2=new Date();
	var dif=s2.getTime()-s1.getTime();
	var day=Math.floor(dif/(1000*60*60*24));
	$("#time").html(day);



	//实现屏幕过小时左边栏隐藏
	window.onresize=function(){
		var width=document.body.clientWidth;
		if(width<769){
			$(".shuo-area .shuo-line").removeClass("pc-hidden");
		}else{
			$(".shuo-area .shuo-line").addClass("pc-hidden");
		}
		/*if(Width>width){
			fontSize+=0.3;
			$(".col p").css("font-size",fontSize+'px');
			Width=width;
		}else{
			fontSize-=0.3;
			$(".col p").css("font-size",fontSize+'px');
		}*/
		if(width<800){
			$(".left").css("display","none");
			$(".right").css("width","99%");
		}else{
			$(".left").css("display","block");
			$(".right").css("width",(width-$(".left").width()-30));
		}
	}
	 


	 
		 
});
