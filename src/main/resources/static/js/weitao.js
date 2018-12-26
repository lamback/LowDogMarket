function load(){
    $.ajax( {
        url:"/getAllPostings",
        type: "POST",
        contentType:'application/json;charset=utf-8',
        dataType:"json",
        success: function(data){
            for(var i=data.length-1,j=0;i>=0;i--,j++){
                var text = data[i].comments;
                var Id = data[i].username;
                var time = data[i].postingsdate;
                var H_ImgSrc ="image/TouXiang/"+i+".jpg";
                var PraiseNumber = parseInt(data[i].praise);
                var Postingsid = pdata[i].postingsid;
                var xinId = "xin"+i;
                document.getElementById("PageContent").innerHTML +=
                    "<article class=\"format-standard type-post hentry\">\n" +
                    "                    <header>\n" +
                    "                        <h3 class=\"post-title\">\n" +
                    "                            <div style=\"float: left\">\n" +
                    "                                <img class=\"contentDiv\" src="+H_ImgSrc+">\n"+
                    "                            </div>\n" +
                    "\n" +
                    "                            <div style=\"padding-left: 64px;\">\n" +
                    "                                <a href=\"\">"+Id+"</a>\n" +
                    "                                <p class=\"time-font\">"+time+"</p>\n" +
                    "                            </div>\n" +
                    "                        </h3>\n" +
                    "                    </header>\n" +
                    "                    <p id=\"textQ\">"+text+"</p>\n" +
                    "                    <div class=\"showImg\">"+"</div>\n" +
                    "                    <div class=\"post-meta clearfix\" style=\"width: 900px\">\n" +
                    "<span class=\"dzs\">"+PraiseNumber+"</span>"+
                    "                        <span class=\"like-count like\" id=" +xinId+
                    "  onclick=\"like("+i+","+Postingsid+")\">&#10084;</span>\n" +
                    "                    </div>\n" +
                    "                </article>";

                var PicNumber = 0;
                Img1 = new Image();
                if (typeof (data[i].photo1)!="undefined"){
                    Img1.src = data[i].photo1;
                    Img1.height = 250;
                    Img1.width = 250;
                    document.getElementsByClassName("showImg")[j].appendChild(Img1);
                    PicNumber+=1;
                }
                Img2 = new Image();
                if (typeof (data[i].photo2)!="undefined"){
                    Img2.src = data[i].photo2;
                    Img2.height = 250;
                    Img2.width = 250;
                    document.getElementsByClassName("showImg")[j].appendChild(Img2);
                    PicNumber+=1;
                }
                Img3 = new Image();
                if (typeof (data[i].photo3)!="undefined"){
                    Img3.src = data[i].photo3;
                    Img3.height = 250;
                    Img3.width = 250;
                    document.getElementsByClassName("showImg")[j].appendChild(Img3);
                    PicNumber+=1;
                }
                Img4 = new Image();
                if (typeof (data[i].photo4)!="undefined"){
                    Img4.src = data[i].photo4;
                    Img4.height = 250;
                    Img4.width = 250;
                    document.getElementsByClassName("showImg")[j].appendChild(Img4);
                    PicNumber+=1;
                }
                Img5 = new Image();
                if (typeof (data[i].photo5)!="undefined"){
                    Img5.src = data[i].photo5;
                    Img5.height = 250;
                    Img5.width = 250;
                    document.getElementsByClassName("showImg")[j].appendChild(Img5);
                    PicNumber+=1;
                }
                Img6 = new Image();
                if (typeof (data[i].photo6)!="undefined"){
                    Img6.src = data[i].photo6;
                    Img6.height = 250;
                    Img6.width = 250;
                    document.getElementsByClassName("showImg")[j].appendChild(Img6);
                    PicNumber+=1;
                }
            }
        },
        error:function(){
            alert("ERROR !")
        }
    })
}

// function dz(i) {
//     var xmlHttp2 = new XMLHttpRequest();
//     xmlHttp2.open("post","/changePraiseNumber",true);
//     xmlHttp2.onreadystatechange=function(){
//         if ((xmlHttp2.readyState==4&&xmlHttp2.status==250)){
//             var Id = "xin"+i;
//             var xin = document.getElementById(Id);
//             var num = parseInt(document.getElementsByClassName("dzs")[i].innerHTML.toString());
//             if (xin.style.color=="rgb(204, 204, 204)"||xin.style.color==""){
//                 xin.style.color="#f00";
//                 document.getElementsByClassName("dzs")[i].innerHTML = (num+1);
//             }
//             else{
//                 //xin.style.color="#ccc";
//             }
//         }
//     };
//     xmlHttp2.send();
// }

function like(i,P_id){
    var data=JSON.stringify({postingsid:P_id})
    $.ajax( {
        url:"/changePraiseNumber",
        type: "POST",
        data:data,
        contentType:'application/json;charset=utf-8',
        dataType:"json",
        success: function(){
            var Id = "xin"+i;
            var xin = document.getElementById(Id);
            var num = parseInt(document.getElementsByClassName("dzs")[i].innerHTML.toString());
            if (xin.style.color=="rgb(204, 204, 204)"||xin.style.color==""){
                xin.style.color="#f00";
                document.getElementsByClassName("dzs")[i].innerHTML = (num+1);
            }
        },
        error:function(){
            alert("ERROR !")
        }
    })
}

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

    });
    load();
};