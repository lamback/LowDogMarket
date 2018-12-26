var goodsID=12;

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
    var fso,file;
    var path="";
    fso=new ActiveXObject("Scripting.FileSystemObject");
    file=fso.GetFile(path);
    alert(file);

}

function submitComments(){
    //评论商品
    var commentgoods=document.getElementById("commentgoods").value;
    console.log(commentgoods);

    var json={
        goodsid:goodsID,
        comments:commentgoods
    };

    $.ajax({
        url: "/writeComment",
        type: "post",
        data: json,
        contentType:'application/json;charset=utf-8',
        dataType: "json",
        success: function (data) {

        }
    });
    alert("评论成功！！");
    window.location.href="userOrder.html";
}

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