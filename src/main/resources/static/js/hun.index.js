

var goodstype;          //商品类型数组
var typelen;            //类型总数
function getGoodsType() {           //获取商品种类
    var type=document.getElementById("typeshow");
    $.ajax({
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: "/getTypeListInHomePage" ,//url
        success: function (result) {
             typelen=result.length;
            for(var i=0;i<typelen;i++)
            {
                goodstype[i]=result[i].type;
                alert(goodstype+"111"+result[i].type);
                type.innerHTML+="<a class=\"ftc-626262\" href=\"javascript:getGoodsByType("+result[i].type+")\">"+result[i].type+"&nbsp;</a>"
            }
        }
    })
}
function getGoodsByType(type) {
    var ul1=document.getElementById("piclist1");

        $.ajax({
            type: "POST",//方法类型
            dataType: "json",//预期服务器返回的数据类型
            url: "/salesRanking" ,//url
            data:type,          //传一个种类过去
            success: function (result) {        //传回该类型所有商品
                for(let a=0;a<result.length;a++) ul.innerHTML+="<li></li>";
                var lilist1=ul1.getElementsByTagName("li");
                for(var i1=0;i1<result.length;i1++)
                {
                var photo1,information1,goodsid1;
                    photo1=result[i1].photo;
                    information1=result[i1].information;
                    goodsid1=result[i1].goodsid;
                lilist1[i1].innerHTML+="<div class='pic f1'><a href='//localhost:8080/good.html?goodsid="+goodsid1+"'>";
                lilist1[i1].innerHTML+="<img src="+photo1+"/></a></div>"+"<div class='title w-all fl m-t-18'><a href='//localhost:8080/good.html?goodsid="+goodsid1+"' class='dsblock w-all fl'> ";
                lilist1[i1].innerHTML+="<h3 class='fs-14 ftc-787878 text-l line-h18 tw_hidden fl'>"+information1+"</h3></a></div>";
         }
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
                loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
                loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
			}
        },
		error:function () {
            loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
            loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
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
                lilist[i].innerHTML="<i>"+(i+1)+"</i>";
                lilist[i].innerHTML+="<div class='pic f1'>";
                console.log(result);
                lilist[i].innerHTML+="<a href='#'><img src="+result[i].photo+"></a></div>"+"<div class='title w-all fl m-t-18'><a href='//localhost:8080/good.html?goodsid="+result[i].goodsid+"' class='dsblock w-all fl'> ";
                lilist[i].innerHTML+="<h3 class='fs-14 ftc-787878 text-l line-h18 tw_hidden fl'>"+result[i].information+"</h3></a></div>";

            }
        }
    });

    var ul = document.getElementById ("piclist");
    var lis = ul.getElementsByTagName("i");

	lis[0].className="picspan_icon1";
	lis[1].className="picspan_icon2";
	lis[2].className="picspan_icon3";
	lis[3].className="picspan_icon4";
	lis[4].className="picspan_icon5";
	lis[5].className="picspan_icon1";
	lis[6].className="picspan_icon2";
	lis[7].className="picspan_icon3";
	lis[8].className="picspan_icon4";
	lis[9].className="picspan_icon5";
	lis[10].className="picspan_icon1";
	lis[11].className="picspan_icon2";
	lis[12].className="picspan_icon3";
	lis[13].className="picspan_icon4";
	lis[14].className="picspan_icon5";
	lis[15].className="picspan_icon1";
	lis[16].className="picspan_icon2";
	lis[17].className="picspan_icon3";
	lis[18].className="picspan_icon4";
	lis[19].className="picspan_icon5";
	
}
