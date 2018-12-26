window.onload=function ()
{

    var loginText=document.getElementById("loginText");


    $.ajax({
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: "/judgeUser" ,//url

        success: function (result) {
            if(result.status==1)
            {
                loginText.innerHTML+="<span class='fs-14 line-h30 ftc-6b6b6b dsblock fl'>Hello!"+result.username+"</span>";
            }
            else
            {
                loginText.innerHTML+="<a href='../login.html' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
                loginText.innerHTML+="<a href='../register.html' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
            }
        },
        error:function () {

            loginText.innerHTML+="<a href='../login.html' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
            loginText.innerHTML+="<a href='../register.html' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
        }

    })
    initAJAX();
};