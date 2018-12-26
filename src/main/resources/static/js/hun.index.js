

var goodstype;          //第一个商品类型
var typelen;            //类型总数
function getGoodsType() {           //获取商品种类

    $.ajax({
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: "/getTypeListInHomePage" ,//url
        success: function (result) {
            var type=document.getElementById("typeshow");
            goodstype=result[0].type;
            getGoodsByType(goodstype);
             typelen=result.length;
            for(var i=0;i<typelen;i++)
            {
                type.innerHTML+="<a class=\"ftc-626262 fs-20 \" href=\"javascript:getGoodsByType('"+result[i].type+"')\">"+result[i].type+"&nbsp;</a>"

            }
        }
    })
}
function getGoodsByType(type) {


        var type1=JSON.stringify({type:type});
        $.ajax({
            type: "POST",//方法类型
            dataType: "json",//预期服务器返回的数据类型
            url: "/getGoodsByType" ,//url
            data:type1,         //传一个种类过去
            contentType:"application/json;charset=utf-8",
            success: function (result) {        //传回该类型所有商品
                var ul1=document.getElementById("piclist1");
                ul1.innerHTML="";
                for(let a=0;a<result.length;a++) ul1.innerHTML+="<li></li>";
                var lilist1=ul1.getElementsByTagName("li");
                for(var i1=0;i1<result.length;i1++)
                {
                var photo1,information1,goodsid1;
                    photo1=result[i1].photo;
                    information1=result[i1].information;
                    goodsid1=result[i1].goodsid;
                lilist1[i1].innerHTML+="<div class='pic f1'><a href='//localhost:8080/goodsdetail.html?goodsid="+goodsid1+"'>";
                lilist1[i1].innerHTML+="<img style='height: 200px;width: 200px' src="+photo1+"/></a></div>"+"<div class='title w-all fl m-t-18'><a href='//localhost:8080/goodsdetail.html?goodsid="+goodsid1+"' class='dsblock w-all fl'> ";
                lilist1[i1].innerHTML+="<h3 class='fs-14 ftc-787878 text-l line-h18 tw_hidden fl'>"+information1+"</h3></a></div>";
         }
        },
            error:function () {
                //alert(type);
            }
    })
}



window.onload = function () {
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

    getGoodsType();

    $.ajax({
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: "/salesRanking" ,//url
        success: function (result) {
            var ul = document.getElementById ("piclist");

            //for(let a=0;a<10;a++) ul.innerHTML+="<li></li>"
            var lilist=ul.getElementsByTagName("li");
            for (var i = 0; i < lilist.length; i++) {          //生成排行榜
                var photo="",information="",goodsid="";
                switch (i%5)
                {
                    case 0:lilist[i].innerHTML="<i class='picspan_icon1'>"+(i+1)+"</i>";break;
                    case 1:lilist[i].innerHTML="<i class='picspan_icon2'>"+(i+1)+"</i>";break;
                    case 2:lilist[i].innerHTML="<i class='picspan_icon3'>"+(i+1)+"</i>";break;
                    case 3:lilist[i].innerHTML="<i class='picspan_icon4'>"+(i+1)+"</i>";break;
                    case 4:lilist[i].innerHTML="<i class='picspan_icon5'>"+(i+1)+"</i>";break;

                }
                lilist[i].innerHTML+="<div class='pic f1'>";
                console.log(result);
                lilist[i].innerHTML+="<a href='//localhost:8080/goodsdetail.html?goodsid="+result[i].goodsid+"'><img style='width: 200px;height: 200px' src="+result[i].photo+"></a></div>"+"<div class='title w-all fl m-t-18'><a href='//localhost:8080/goodsdetail.html?goodsid="+result[i].goodsid+"' class='dsblock w-all fl'> ";
                lilist[i].innerHTML+="<h3 class='fs-14 ftc-787878 text-l line-h18 tw_hidden fl'>"+result[i].information+"</h3></a></div>";

            }
        }
    });

    var ul23 = document.getElementById ("piclist");
    var lis = ul23.getElementsByTagName("i");

	
};
