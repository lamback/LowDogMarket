var swiper=new Swiper(".swiper-container",{
	pagination:".swiper-pagination",
	direction:"vertical",		
	// loop:true,
	keyboardControl:true,
	// 设置首页nav样式和其他页nav样式不同
	// 先设置初始化时的nav样式
	onInit:function(swiper){
		$("#nav").css("background","#eee");
	},
	// 再设置滑动结束时的nav样式
	onSlideChangeStart:function(swiper){
		if (swiper.activeIndex==0) {
			// alert(1);
			$("#nav").css("background","#eee");
			$("#nav #logo").attr("src","img/nav-logo.png");
		}else{
			$("#nav").css("background","rgba(0,0,0,0.5)");
			$("#nav #logo").attr("src","img/logo1.png")
		}
	},

});

// 第一页
// 设置视频自动播放和循环
$("video").attr({
	"autoplay":"autoplay",
	"loop":"loop",
});
// 鼠标移入顶部时头部导航栏出现
// 移出时头部导航栏隐藏
/*$("#lucencyBox").mouseover(function(){
	$(this).hide();
	// $(".nav").slideDown(100);
	$("#nav").show();
});

$("#nav").mouseout(function(){
	// $(this).slideUp(100);
	$(this).hide();
	$("#lucencyBox").show();
});*/
function showNav(event){
	if(event.clientY<60){
		$("#nav").show();
	}else{
		$("#nav").hide();
	}
}





var str = window.location.search.slice(1);
if ( str ) {
	$("#changeTxt").text("欢迎回来！尊敬的"+str);
	$("#changeTxt").attr("href","");
	$("#hideTxt").text("退出");
	$("#hideTxt").attr("href","index.html");
}else{
	$("#changeTxt").text("登录");
	$("#changeTxt").attr("href","login.html");
	$("#hideTxt").text("注册");
	$("#hideTxt").attr("href","register.html");
}
