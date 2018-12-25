//生成4位验证码，包含2个英文2个数字
function creatCodeNums(){
	var arr = ['A','B','C','D','E','F','G',
				'H','I','J','K','L','M','N',
				'O','P','Q','R','S','T',
				'U','V','W','X','Y','Z',
				'a','b','c','d','e','f','g',
				'h','i','j','k','l','m','n',
				'o','p','q','r','s','t',
				'u','v','w','x','y','z',
				'0','1','2','3','4','5','6','7','8','9'];
	var str = "";
	var html = "";
	for (var i = 0; i < 4; i++) {
		var random = Math.random();
		//生成16位进制的颜色代码
		var color = "#" + parseInt(random * 0xffffff).toString(16);
		var temp = arr[parseInt(random * arr.length)];
		str += temp;
		html += "<font color="+color+">"+temp+"</font>";
	}
	// 输出包含2个英文2个数字的验证码
	if(/[a-z]*\d[a-z]*\d[a-z]*/i.test(str)){
		$("#codeNums").html(html);
		return;
	}
	creatCodeNums();
}
creatCodeNums();
 // 点击更换验证码事件
 $("#changeCode").click(function(){
 	creatCodeNums();
 });



//点击提交按钮发生的事件
$("#sub").click(function(){
	if ($(".userInput").val() == "") {
		$("#proPhone").text("用户名为必填");
		$("#proPhone").css("color","#f46");
		$("#username").css("borderColor","#f46");
		$("#icPB").attr("class","error");
		$(".icon-person").css("color","#f46");

		$("#proPassword").text("密码为必填");
		$("#proPassword").css("color","#f46");
		$("#password").css("borderColor","#f46");
		$("#icWB").attr("class","error");
		$(".icon-mima").css("color","#f46");

		$("#proCode").text("验证码为必填");
		$("#proCode").css("color","#f46");
		$("#code").css("borderColor","#f46");
		$("#code").children().css("color","#f46");
	}




	// if( $("#proPhone").text() == "OK" && $("#proPassword").text() == "OK" && $("#proCode").text() == "OK"){
	
	// 	window.open("index.html?"+ $("#username").val());
	// }


//验证码正确则调用账号密码检测
	if( $("#proCode").text() == "OK"){
	
		check();
		
	}
});


//检验账号与密码
function check(){
	var name = $("#name").val();
    var password = $("#password").val();
	$.post(
			"/login",
			{
				"name":name,
            	"password":password,
			},
			function(status){
				if(status==0){
					location.href="index.html";
                }else if(status==1){
					location.href="index.html";
				}else if(status==2){
					location.href="index.html";
				}else{
					alert("账号或者密码有误，请确认账号和密码");
				}
			}
		)
}


 // 验证码框格式校验
 $("#code").blur(function(){
 	// console.log($("#code").val());
 	// console.log(($("#codeNums").text()).replace(/\s/g,"") === $("#code").val());
 	//obj.replace(/\s/g,"");
 	if($("#code").val() !=  ($("#codeNums").text()).replace(/\s/g,"")){
		$("#proCode").text("验证码错误");
		$("#proCode").css("color","#f46");
		$("#code").css("borderColor","#f46");
		$("#code").children().css("color","#f46");
		// return;
	}else{
		$("#proCode").text("OK");
		$("#proCode").css("color","#090");
		$("#code").css("borderColor","#090");
		$("#code").children().css("color","#090");
	}
 });





//鼠标失去焦点时用户输入格式校验
// 手机号格式校验
// $("#username").blur(function(){
// 	var str = localStorage.getItem($(this).val());
// 	if(str == null){
// 		$("#proPhone").text("用户名不存在");
// 		$("#proPhone").css("color","#f46");
// 		$("#username").css("borderColor","#f46");
// 		$("#icPB").attr("class","error");
// 		$(".icon-person").css("color","#f46");
// 		// return;
// 	}else{
// 		$("#proPhone").text("OK");
// 		$("#proPhone").css("color","#090");
// 		$("#username").css("borderColor","#090");
// 		$("#icPB").attr("class","ok");
// 		$(".icon-person").css("color","#090");
// 	}
// });




 // // 登录密码格式校验
 // $("#password").blur(function(){
 // 	// var user = JSON.parse(str);
 // 	var str = localStorage.getItem($("#username").val());
 // 	var user = JSON.parse(str);
 // 	// console.log(user.password);
 // 	if( $("#username").val() != "" ){
 // 		if( user.password != $("#password").val()  ){
	// 		$("#proPassword").text("密码错误");
	// 		$("#proPassword").css("color","#f46");
	// 		$("#password").css("borderColor","#f46");
	// 		$("#icWB").attr("class","error");
	// 		$(".icon-mima").css("color","#f46");
	// 	// return;
	// 	}else{
	// 		$("#proPassword").text("OK");
	// 		$("#proPassword").css("color","#090");
	// 		$("#password").css("borderColor","#090");
	// 		$("#icWB").attr("class","ok");
	// 		$(".icon-mima").css("color","#090");
	// 	}
 // 	}else{
 // 		$("#proPhone").text("用户名不存在");
	// 	$("#proPhone").css("color","#f46");
	// 	$("#username").css("borderColor","#f46");
	// 	$("#icPB").attr("class","error");
	// 	$(".icon-person").css("color","#f46");
 // 	}
	
 // });

