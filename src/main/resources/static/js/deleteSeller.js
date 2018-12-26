window.onload=function () {
    alert(0);
    $.ajax({
        url:"/allSellers",
        type:"POST",
        dataType:"json",
        success:function (result) {
            alert(1);
            var sellers=document.getElementById("sellers");
            for (var i=0;i<result.length;i++)
            {
                sellers.innerHTML+="<li><p class='date'></p><h3>"+result[i].username+"</h3>"+"<p>电话:"+result[i].phone+"</p><p>地址:"+result[i].address+"</p><p><a href='javascript:deleteSeller("+result[i].username+"'>删除</a></p></li>" ;
            }
        },error:function () {

        }
    })
};
function deleteSeller (username) {
    var data=JSON.stringify({username:username});
        $.ajax({
            url: "/deleteSeller",
            data:data,
            type: "POST",
            contentType:"application/json;charset=utf-8",
            success:function () {
                alert("删除成功");
            }

        })
}