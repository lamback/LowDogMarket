window.onload=function ()
{
    var loginText=document.getElementById("loginText");
    var div1=document.getElementById("div1");

    $.ajax({
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: "/judgeUser" ,//url

        success: function (result) {
            if(result.status==1)
            {
                loginText.innerHTML+="<span class='fs-14 line-h30 ftc-6b6b6b dsblock fl'>Hello!"+result.username+"</span>";
                div1.innerHTML="<img src='../Image/orderComplete.png'>"
            }
            else
            {   window.location.href="//localhost:8080/login.html";
                loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
                loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
            }
        },
        error:function () {
            window.location.href="//localhost:8080/login.html";
            loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
            loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
        }

    })
};