var goodsID;

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
            {   window.location.href="../login.html";     //未登录则跳转到登录界面
                loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
                loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
            }
        },
        error:function () {
            window.location.href="../login.html";         //未登录则跳转到登录界面
            loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
            loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
        }

    });
    onCommentReady();
};
//获取评论数
function getCommentAccount(){
    var account=Math.random()*(2000-200)+200;
    document.getElementById("comcount").innerHTML=parseInt(account);
}

function onCommentReady(){
    var url=location.search;
    var length=url.length;
    var index=url.indexOf('=');
    goodsID=url.substring(index+1,length);
    getCommentAccount();
    console.log(goodsID);
}

//添加图片
function addImage(){


}

//提交评论
function submitComments(){
    //评论商品
    var commentgoods=document.getElementById("commentgoods").value;
    console.log(commentgoods);

    var json=JSON.stringify({
        goodsid:goodsID,
        comments:commentgoods
    });
    console.log(json);

    $.ajax({
        url: "/writeComment",
        type: "POST",
        data: json,
        contentType:'application/json;charset=utf-8',
        dataType: "json",
        success: function () {
            alert("评论成功！！");
            window.location.href="userOrder.html";
        },
        error: function(){
            alert("评论失败！");
        }
    });
}


//测试评论
function testComment(){
    var commentgoods=document.getElementById("commentgoods").value;
    console.log(commentgoods);

    var json={
        goodsid:goodsID,
        comments:commentgoods
    };
    alert(json.goodsid+"++++++++"+json.comments);
    window.location.href="userOrder.html";
}

//重置评论
function resetComments(){
    document.getElementById("commentgoods").value='';
    document.getElementById("commentservice").value='';
    document.getElementById("add-photo").value='';
}

function start1(myvalue){
    for(var i=1;i<=5;i++){//将所有都变白星星
        document.getElementById("1"+i).innerHTML="<p >☆</p>";
        document.getElementById("1"+i).setAttribute("style","color:black");
    }
    if(myvalue<3){
        for(var i=1;i<=myvalue;i++){
            document.getElementById("1"+i).innerHTML="<p >★</p>";
            document.getElementById("1"+i).setAttribute("style","color:gray");
        }
    }else if(myvalue<5){
        for(var i=1;i<=myvalue;i++){
            document.getElementById("1"+i).innerHTML="<p >★</p>";
            document.getElementById("1"+i).setAttribute("style","color:orange");
        }
    }else {
        for(var i=1;i<=myvalue;i++){
            document.getElementById("1"+i).innerHTML="<p >★</p>";
            document.getElementById("1"+i).setAttribute("style","color:red");
        }
    }
}
function start2(myvalue){
    for(var i=1;i<=5;i++){//将所有都变白星星
        document.getElementById("2"+i).innerHTML="<p>☆</p>";
        document.getElementById("2"+i).setAttribute("style","color:black");
    }
    if(myvalue<3){
        for(var i=1;i<=myvalue;i++){
            document.getElementById("2"+i).innerHTML="<p>★</p>";
            document.getElementById("2"+i).setAttribute("style","color:gray");
        }
    }else if(myvalue<5){
        for(var i=1;i<=myvalue;i++){
            document.getElementById("2"+i).innerHTML="<p>★</p>";
            document.getElementById("2"+i).setAttribute("style","color:orange");
        }
    }else {
        for(var i=1;i<=myvalue;i++){
            document.getElementById("2"+i).innerHTML="<p>★</p>";
            document.getElementById("2"+i).setAttribute("style","color:red");
        }
    }
}
function start3(myvalue){
    for(var i=1;i<=5;i++){//将所有都变白星星
        document.getElementById("3"+i).innerHTML="<p>☆</p>";
        document.getElementById("3"+i).setAttribute("style","color:black");
    }
    if(myvalue<3){
        for(var i=1;i<=myvalue;i++){
            document.getElementById("3"+i).innerHTML="<p>★</p>";
            document.getElementById("3"+i).setAttribute("style","color:gray");
        }
    }else if(myvalue<5){
        for(var i=1;i<=myvalue;i++){
            document.getElementById("3"+i).innerHTML="<p>★</p>";
            document.getElementById("3"+i).setAttribute("style","color:orange");
        }
    }else {
        for(var i=1;i<=myvalue;i++){
            document.getElementById("3"+i).innerHTML="<p>★</p>";
            document.getElementById("3"+i).setAttribute("style","color:red");
        }
    }
}
