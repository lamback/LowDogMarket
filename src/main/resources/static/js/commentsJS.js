var goodsID;

function getCommentAccount(){
    var account=Math.random()*(2000-200)+200;
    document.getElementById("comcount").innerHTML=parseInt(account);
}

function onCommentReady(){
    var thisURL=document.URL;
    var getval=thisURL.split('?')[1];
    var showval=getval.split('=')[1];
    goodsID=showval;
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
    var commentgoods=document.getElementById("commentgoods").value;
    var commentservice=document.getElementById("commentservice").value;
    consol.log(commentgoods+"   "+commentservice);

    var json={
        goodsid:goodsID
    };

    $.ajax({
        url: "/writeComment",
        type: "post",
        data: json,
        dataType: "json",
        success: function (data) {

        }
    });
    document.location.href("/uerOrder.html");
}

function resetComments(){
    document.getElementById("commentgoods").value='';
    document.getElementById("commentservice").value='';
    document.getElementById("add-photo").value='';
}