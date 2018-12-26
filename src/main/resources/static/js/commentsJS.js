var goodsID;

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

    $.ajax({
        url: "/writeComment",
        type: "post",
        data: json,
        contentType:'application/json;charset=utf-8',
        dataType: "json",
        success: function () {
            alert("评论成功！！");
        },
        error: function(){
            alert("评论失败！");
        }
    });

    window.location.href="userOrder.html";
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
