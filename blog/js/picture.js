 
 	//原理：1、把所有的li的高度值放到数组里面
 	//2、第一行的top都为0
 	//3、计算高度值最小的值是哪个li
 	//4、把接下来的li放到那个li下面
 	var margin=10;//设置间距 
 	function liuxiaofan(){
 		var li=$(".product_list");  //区块名称
 		var li_W=220+margin;//取区块的实际宽度
 		var h=[];//记录区块高度的数组
 		var n=parseInt((parseFloat($(".wrapper").css("width")))/li_W);
 		$("#con1_1").css("marginLeft",(parseFloat($(".wrapper").css("width"))-n*li_W)/2);
 		for(var i=0;i<li.length;i++){
 			li_H=li[i].offsetHeight; //获取每个li的高度
 			if(i<n){  //n是一行最多的li，所以小于n就是第一行了	 
 				max_H=Math.max.apply(null,h);
 				h[i]=li_H;  //把每个li放到数组里面
 				li.eq(i).css("top",0); //第一行的Li的top值为0
 				li.eq(i).css("left",i*li_W);//第i个li的左坐标就是i*i的宽度
 			}else{
 				min_H=Math.min.apply(null,h);//取得数组中的最小值，区块中高度值最小的那个
 				minKey=getarrayKey(h,min_H);//最小的值对应的指针
 				h[minKey]+=li_H+margin; //加上新高度后更新高度值
 				li.eq(i).css("top",min_H+margin); //先得到高度最小的li，然后把接下来的li放到他的下面
 				li.eq(i).css("left",minKey*li_W);  //第i个li的左坐标就是i*li的宽度
 			}
 		}
 		max=Math.max.apply(null,h);
 		$("#con1_1").css("height",max);
 	}

 	function getarrayKey(s,v){
 		for(k in s){
 			if(s[k]==v){
 				return k;
 			}
 		}
 	}


 	window.onload=function(){
 		liuxiaofan();
 	};

 	//鼠标在上样式
 	$(function(){
 		$(".product_list").hover(function(){
 			$(this).css("background-color","#ddd");
 			var r=$(this).index();
 			$("#con1_1 .product_list span").eq(r).css("display","block");
 		},function(){
 			var r=$(this).index();
 			$(this).css("background-color","#eee");
 			$("#con1_1 .product_list span").eq(r).css("display","none");
 		});
 	});

 	function getObjectURL(file){
 		var url=null;
 		if(window.createObjectURL!=undefined){
 			url=window.createObjectURL(file);
 		}else if(window.URL!=undefined){
 			url=window.URL.createObjectURL(file);
 		}else if(window.webkitURL!=undefined){
 			url=window.webkitURL.createObjectURL(file);
 		}
 		return url;
 	}
 	$("#thumbnail").change(function(){
 		var eImag=$("<img />");
 		var eSpan=$("<span class='glyphicon glyphicon-remove-circle'></span>");
 		eImag.attr('src',getObjectURL($(this)[0].files[0]));
 		var eDiv=$("<div class='product_list'></div>");
 		eDiv.append(eImag);
 		eDiv.append(eSpan);
 		var Div=$("#con1_1");
 		Div.append(eDiv);
 		
 		eDiv.click(function(){
 			var k=$(this).index();
 			$(".product_list").eq(k).remove();
 		});
 		liuxiaofan();

 		$(".product_list").hover(function(){
 			$(this).css("background-color","#ddd");
 			var r=$(this).index();
 			$("#con1_1 .product_list span").eq(r).css("display","block");
 		},function(){
 			var r=$(this).index();
 			$(this).css("background-color","#eee");
 			$("#con1_1 .product_list span").eq(r).css("display","none");
 		});

 	 
 	});

 	$(".product_list span").click(function(){
 		var k=$(this).parent().index();
 		$(".product_list").eq(k).remove();
 		liuxiaofan();
 	});


