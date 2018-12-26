$("#sub").click(function() {
    // alert(9);
    // alert(1);
    // console.log($(".userInput").val());
    // 输入框为空提示事件
    /*if ($(".userInput").val() == "") {
    	$("#proPhone").text("手机号码为必填，请输入11位手机号码");
    	$("#proCode").html("验证码为必填，由6位数字组成");
    	$("#proPassword").html("登录密码为必填，请输入6-12位密码,只能包含字符、数字、下划线");
    	$("#proRePaasword").html("确认密码为必填，请与登录密码完全一致");
    	$(".userInput").css("borderColor","#f46");
    	$(".iconBack").css({
    		"background":"#fcc",
    		"borderColor":"#f46",
    	});
    	$("i").css("color","#f46");
    }*/
    $("#username").blur();
    $("#code").blur();
    $("#password").blur();
    if ($("#proPhone").text() == "OK" && $("#proPassword").text() == "OK" && $("#proRePaasword").text() == "OK") {
        // 存储用户信息事件
        // var user = new Object();
        // user.name = $("#name").val();
        // user.password = $("#password").val();
        // user.phone=$("#phone").val();
        // user.address=$("#address").val();
        // user.sex=$("#sex").val();
        // var str = JSON.stringify(user);
        // localStorage.setItem(user.name, str);

        // ajax传递数据
        var name = $("#username").val();
        var password = $("#password").val();
        var phone=$("#phone").val();
        var address=$("#address").val();
        var sex=$("#sex").val();
        var seller=$("#seller").val();

        // alert(name);
        // alert(password);
        // alert(phone);
        // alert(address);
        // alert(sex);

        var data2 = JSON.stringify({username:name,password:password,usertype:"1",phone:phone,address:address});
        $.ajax({
            type:"POST",
            url:"/register",
            dataType:"JSON",
            contentType:"application/json;charset=utf-8",
            data:data2,
            // data:{
            //                 // "username":name,
            //                 // "password":password,
            //                 // "usertype":0,
            //                 // "gender":sex,
            //                 //  "phone":phone,
            //                 // "address":address,
            //
            //     username:"a111111",
            //     password:"222222",
            //     usertype:"0",
            //     gender:"3",
            //     phone:"4",
            //     address:"5"
            //                 // "seller":seller
            //              },
            success:function (result) {
                if(result.status==0){
                    alert("该用户名已被注册，请重新注册");
                }else{
                    alert("注册成功，请登录");
                    // $("#loginForm").submit();
                    window.location.href="login.html";
                }
            },
            error:function () {
                alert(43434);
            }
        })
        // $.post(
        //         "/register",   //处理登录信息的url
        //         "json",
        //          {
        //             "name":name,
        //             "password":password,
        //             "phone":phone,
        //             "address":address,
        //             "sex":sex,
        //             "seller":seller
        //          },
        //          function(status){
        //             var status=this.status;
        //                 if(status==0){
        //                     alert("该用户名已被注册，请重新注册");
        //                 }else{
        //                     alert("注册成功，请登录");
        //                     // $("#loginForm").submit();
        //                     window.location.href="login.html";
        //                 }
        //          }
        //
        //
        //
        //     )
    }





});
//鼠标失去焦点时用户输入格式校验
// 用户名格式校验
$("#username").blur(function() {
    // check(this);
    $(this).prev().attr("class", "");
    var reg = /^[a-z]\w{0,19}$/;
    if (!reg.test($(this).val())) {
        $("#proPhone").text("用户名为必填，且必须以字母开头小于20个字符");
        $("#proPhone").css("color", "#f46");
        $("#username").css("borderColor", "#f46");
        $("#icPB").attr("class", "error");
        $(".icon-phone").css("color", "#f46");
    } else {
        $("#proPhone").text("OK");
        $("#proPhone").css("color", "#090");
        $("#username").css("borderColor", "#090");
        $("#icPB").attr("class", "ok");
        $(".icon-phone").css("color", "#090");
    }

    // // 判断用户输入的手机号是否已被注册
    // var str = localStorage.getItem($('#username').val());
    // // alert(str);
    // console.log(str);
    // // var user = JSON.parse(str);
    // // $(this).prev().attr("class","");
    // if (str != null) {
    //     $("#proPhone").text("该用户名已被注册");
    //     $("#proPhone").css("color", "#f46");
    //     $(this).css("borderColor", "#f46");
    //     $(this).prev().attr("class", "error");
    //     $(this).prev().children().css("color", "#f46");
    // }
});
//






// // 验证码点击事件
// var count = 5;

// function countDown() {
//     if (count > 0) {
//         count--;
//         $("#codeBtn").text(count + "秒");
//         setTimeout(countDown, 1000);
//         $("#codeBtn").css("background", "#ccc");
//         $("#codeBtn").attr("disabled", true);
//     } else {
//         $("#codeBtn").text("获取验证码");
//         $("#codeBtn").css("background", "");
//         $("#codeBtn").attr("disabled", false);
//         count = 5
//     }
// }

$("#codeBtn").click(function() {
    // alert(1);
    countDown();
});
// 获取对应的正则表达式
function getReg(obj) {
    var id = $(obj).attr("id");
    if (id == "username") {
        return /^1[5,8,7,3]\d{9}$/;
    } else if (id == "code") {
        return /^\d{6}$/;
    } else if (id == "password") {
        return /^\w{6,12}$/;
    }
}
// 获取对应的提示文字
function getPro(obj) {
    var id = $(obj).attr("id");
    // if(id=="phone"){
    // 	return "手机号码为必填，请输入11位手机号码";
    // }else
    if (id == "code") {
        return "验证码为必填，由6位数字组成";
    } else if (id == "password") {
        return "登录密码为必填，请输入6-12位密码,只能包含字符、数字、下划线";
    } else if (id == "rePassword") {
        return "确认密码为必填，请与登录密码完全一致";
    }
}


//密码验证
$("#password").blur(function() {
    check(this);
    $("#rePassword").blur();
});




function isOK(obj) {
    if ($(obj).attr("id") == "rePassword") {
        return $(obj).val() == $("#password").val() && $(obj).val() != "";
    }
    return getReg(obj).test($(obj).val());
}

// 正则验证
// function check(obj) {
//     // 获取提示框
//     // var pro = $(obj).attr("id")=="code"?$(obj).next().next():$(obj).next();
//     var pro = $(obj).attr("id");
//     if (pro == "code") {
//         pro = $(obj).next().next();
//     } else {
//         pro = $(obj).next();
//     }
//     $(obj).prev().attr("class", "");
//     // 开始验证
//     if (!isOK(obj)) {
//         pro.html(getPro(obj));
//         pro.css("color", "#f46");
//         $(obj).css("borderColor", "#f46");
//         $(obj).prev().attr("class", "error");
//         $(obj).prev().children().css("color", "#f46");
//     } else {
//         pro.html("OK");
//         pro.css("color", "#090");
//         $(obj).css("borderColor", "#090");
//         $(obj).prev().attr("class", "ok");
//         $(obj).prev().children().css("color", "#090");
//     }

// }



function check(obj) {
    // 获取提示框
    // var pro = $(obj).attr("id")=="code"?$(obj).next().next():$(obj).next();
    var pro = $(obj).attr("id");
    if (pro == "password") {
        pro = $(obj).next().next();
    } else if(pro == "rePassword"){
        pro = $(obj).next().next();
    }
    $(obj).prev().attr("class", "");
    // 开始验证
    if (!isOK(obj)) {
        pro.html(getPro(obj));
        pro.css("color", "#f46");
        $(obj).css("borderColor", "#f46");
        $(obj).prev().attr("class", "error");
        $(obj).prev().children().css("color", "#f46");
    } else {
        pro.html("OK");
        pro.css("color", "#090");
        $(obj).css("borderColor", "#090");
        $(obj).prev().attr("class", "ok");
        $(obj).prev().children().css("color", "#090");
    }

}







//眼睛点击事件控制密码是否可见
$("#eye1").click(function(){
    if ($(this).attr("class") == "icon iconfont icon-biyan") {
        $(this).attr("class","icon iconfont icon-yanjing");
        $(this).prev().attr("type","text");
        // $(this).next().css("fontSize","20px");
    }else{
        $(this).attr("class","icon iconfont icon-biyan");
        $(this).prev().attr("type","password");
    }
});

$("#eye2").click(function(){
    if ($(this).attr("class") == "icon iconfont icon-biyan") {
        $(this).attr("class","icon iconfont icon-yanjing");
        $(this).prev().attr("type","text");
        // $(this).next().css("font-size","20px");
    }else{
        $(this).attr("class","icon iconfont icon-biyan");
        $(this).prev().attr("type","password");
    }
});