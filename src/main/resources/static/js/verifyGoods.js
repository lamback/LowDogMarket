window.onload=function () {
    alert(0);
    $.ajax({
        url:"/showAllVerifyGoods ",
        type:"POST",
        dataType:"json",
        success:function (result) {
            alert(1);
            var sell=document.getElementById("main");
            for (var i=0;i<result.length;i++)
            {
                sell.innerHTML+="<li>" +
                    "<p class='date'></p>" +
                    "<h3>"+result[i].name+"</h3>"+
                    "<p>编号:"+result[i].goodsid+"</p>" +
                    "<p>类型:"+result[i].type+"</p>" +
                    "<p>信息:"+result[i].information+"</p>" +
                    "<p>价格:"+result[i].price+"</p>" +
                    "<p>商家:"+result[i].seller+"</p>" +
                    "<p>地址:"+result[i].address+"</p>" +
                    "<p><a href='javascript:pass("+result[i].goodsid+")'>通过</a></p>" +
                    "<p><a href='javascript:unpass("+result[i].goodsid+")'>不通过</a></p>"
                    "</li>" ;
            }
        },error:function () {
            alert("拉取信息失败");
        }
    })
};


function pass (goodsid) {
    // var data1=JSON.stringify({username:username});
    var data1 = JSON.stringify({goodsid:id,status:0});
    $.ajax({
        url: "/verifyGoods",
        data:data1,
        type: "POST",
        contentType:"application/json;charset=utf-8",
        success:function () {
            alert("审核通过");
        },error:function () {
            alert("审核通过失败");

    })
}



function unpass (username) {
    // var data2=JSON.stringify({username:username});
    var data2 = JSON.stringify({goodsid:id,status:0});
    $.ajax({
        url: "/verifyGoods",
        data:data2,
        type: "POST",
        contentType:"application/json;charset=utf-8",
        success:function () {
            alert("审核不通过");
        },error:function () {
            alert("审核不通过失败");

    })
}