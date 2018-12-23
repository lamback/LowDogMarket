
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



	var ul = document.getElementById ("piclist");
	var ul1=document.getElementById("piclist1");
	//for(let a=0;a<10;a++) ul.innerHTML+="<li></li>"
    var lilist=ul.getElementsByTagName("li");
    var lilist1=ul1.getElementsByTagName("li");

    for (var i1 = 0; i1 < lilist.length; i1++) {
    	var photo,information,goodsid;
        lilist[i1].innerHTML="<i>"+i1+"</i>";
        lilist[i1].innerHTML+="<div class='pic f1'><a href='#'>";
        $.ajax({
            type: "POST",//方法类型
            dataType: "json",//预期服务器返回的数据类型
            url: "/salesRanking" ,//url

            success: function (result) {
					photo=result[i1].photo;
					information=result[i1].information;
					goodsid=result[i1].goodsid;
            }
        })
        lilist[i1].innerHTML+="<img src="+photo+"/></a></div>"+"<div class='title w-all fl m-t-18'><a href='//localhost:8080/good.html?goodsid="+goodsid+"' class='dsblock w-all fl'> ";
        lilist[i1].innerHTML+="<h3 class='fs-14 ftc-787878 text-l line-h18 tw_hidden fl'>"+information+"</h3></a></div>";


    };
    var lis = ul.getElementsByTagName("i");
	for (var i = 0; i < lis.length; i++) {
	};
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
