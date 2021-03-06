var goodsID;
//商品详情JSON数据
var goodsInfoJSON={
    goodsid:'1',
    name:'华为荣耀',
    type:'手机',
    photo:'image/product/product1.PNG',
    photo2:'image/product/product2.PNG',
    photo3:'image/product/product3.PNG',
    photo4:'image/product/product5.PNG',
    information:'跳楼大甩卖！',
    price:'1890',
    seller:'nohji',
    sellnumber:'150',
    address:'赣州'
};
//评论JSON数据
var commentsJSON= {
    data:
        [
            {commentsid: '1', goodsid: '1', comments: "这件商品很好", username: '肖裕钊', commentsdate: '2018-08-08',
                photo1:"image/product/comment-image1.PNG",photo2:"image/product/comment-image2.PNG",photo3:"image/product/comment-image3.PNG",
                photo4:"image/product/comment-image4.PNG",photo5:"image/product/comment-image5.PNG",photo6:"image/product/comment-image6.PNG"},
            {commentsid: '2', goodsid: '1', comments: "这件商品很好", username: '童一', commentsdate: '2018-08-06',
                photo1:"image/product/comment-image1.PNG",photo2:"image/product/comment-image2.PNG",photo3:"image/product/comment-image3.PNG",
                photo4:"image/product/comment-image4.PNG"},
            {commentsid: '1', goodsid: '1', comments: "这件商品很好", username: '肖裕钊', commentsdate: '2018-08-08',
                photo1:"image/product/comment-image1.PNG",photo2:"image/product/comment-image2.PNG"},
            {commentsid: '2', goodsid: '1', comments: "这件商品很好", username: '童一', commentsdate: '2018-08-06',
                photo1:"image/product/comment-image1.PNG",photo2:"image/product/comment-image2.PNG",photo3:"image/product/comment-image3.PNG",
                photo4:"image/product/comment-image4.PNG",photo5:"image/product/comment-image5.PNG"},
            {commentsid: '1', goodsid: '1', comments: "这件商品很好", username: '肖裕钊', commentsdate: '2018-08-08',},
            {commentsid: '2', goodsid: '1', comments: "这件商品很好", username: '童一', commentsdate: '2018-08-06',
                photo1:"image/product/comment-image1.PNG",photo2:"image/product/comment-image2.PNG",photo3:"image/product/comment-image3.PNG"},
            {commentsid: '1', goodsid: '1', comments: "这件商品很好", username: '肖裕钊', commentsdate: '2018-08-08',
                photo1:"image/product/comment-image1.PNG",photo2:"image/product/comment-image2.PNG"},
            {commentsid: '2', goodsid: '1', comments: "这件商品很好", username: '童一', commentsdate: '2018-08-06',
                photo1:"image/product/comment-image1.PNG",photo2:"image/product/comment-image2.PNG",photo3:"image/product/comment-image3.PNG",
                photo4:"image/product/comment-image4.PNG",photo5:"image/product/comment-image5.PNG",photo6:"image/product/comment-image6.PNG"},
            {commentsid: '1', goodsid: '1', comments: "这件商品很好", username: '肖裕钊', commentsdate: '2018-08-08',
                photo1:"image/product/comment-image1.PNG",photo2:"image/product/comment-image2.PNG",photo3:"image/product/comment-image3.PNG",
                photo4:"image/product/comment-image4.PNG"},
            {commentsid: '2', goodsid: '1', comments: "这件商品很好", username: '童一', commentsdate: '2018-08-06',
                photo1:"image/product/comment-image1.PNG",photo2:"image/product/comment-image2.PNG",photo3:"image/product/comment-image3.PNG"}
        ]
};

function goodsnumber_decrease(){
    var value=document.getElementById("goodsnumber").value;
    var goodsnumber=parseInt(value);
    if(goodsnumber>1){
        goodsnumber=goodsnumber-1;
        document.getElementById("goodsnumber").value=goodsnumber;
    }

}

function goodsnumber_increase(){
    var value=document.getElementById("goodsnumber").value;
    var goodsnumber=parseInt(value);
    goodsnumber=goodsnumber+1;
    document.getElementById("goodsnumber").value=goodsnumber;
}

function onGoodsReady(){
    var url=location.search;
    var length=url.length;
    var index=url.indexOf('=');
    goodsID=url.substring(index+1,length);
    console.log(url+":"+goodsID);


    var sendData=JSON.stringify({goodsid:goodsID}); //发送给服务器端的JSON数据

    console.log(sendData);
    $.ajax({
        url:"/getGoodsNewsByGoodsID",
        type:"post",
        data:sendData,
        contentType:'application/json;charset=utf-8',
        dataType: "json",
        success: function (data) {
            goodsInfo(data);
            onreadyImage();
            console.log(data);
        },
        error: function(){
            console.log("获取商品详情接口信息失败！");
        }
    });

    $.ajax({  //向服务器请求评论数据
        url: "/getCommentsByGoodsID",
        type: "post",
        data: sendData,
        contentType:'application/json;charset=utf-8',
        dataType: "json",
        success: function (data) {
            console.log(data);
            getCommentsInfo(data);

        },
        error: function(){
            console.log("获取商品评论接口信息失败！");
        }
    });
}


//测试
function testReady(){
    var id=123;
    var json={goodsid:id};
    console.log(json);
    goodsInfo(goodsInfoJSON);
    onreadyImage();
    getCommentsInfo(commentsJSON);
}

//将商品详情渲染到HTML中
function goodsInfo(json){
    var goodsname=json.name;
    document.getElementById("goodsname").innerHTML=goodsname;  //商品名
    document.getElementById("sellname").innerHTML=goodsname;
    var goodstype=json.type;
    document.getElementById("goodstype").innerHTML=goodstype;  //商品类型
    var goodsPrice=json.price;
    var price=parseFloat(goodsPrice)*1.2;
    var Aprice="￥"+price.toFixed(2);
    document.getElementById("Aprice").innerHTML=Aprice;  //原价
    document.getElementById("price").innerHTML="￥"+goodsPrice;   //促销价
    var sellerName=json.seller;
    document.getElementById("shopname").innerHTML=sellerName;  //店铺名
    document.getElementById("entershop").setAttribute("href","SellerFirstPage.html?username="+sellerName);
    var information=json.information;
    document.getElementById("information").innerHTML=information;   //店铺优惠
    var sellnumber=json.sellnumber;
    document.getElementById("sellaccount").innerHTML=sellnumber;  //月销量
    var address=json.address;
    document.getElementById("address").innerHTML=address;  //商家地址
    var photo4=json.photo4;
    document.getElementById("goodsInfo-image").src=photo4;
    var photo1=json.photo;
    var photo2=json.photo2;
    var photo3=json.photo3;
    document.getElementById("showbox").innerHTML=
        '        <img  src='+photo1+' width="400" height="550" />\n' +
        '        <img  src='+photo2+' width="400" height="550" />\n' +
        '        <img  src='+photo3+' width="400" height="550" />';

}

//将评论详情渲染到HTML中
function getCommentsInfo(json) {

    console.log(json);
    document.getElementById("commentsnumber").innerHTML=json.length;  //评论数
    document.getElementById("comment-account").innerHTML=json.length;

    var commentsDiv=document.getElementById("panel02");
    if(json.length>0){
        for(var i=0;i<json.length;i++){
            commentsDiv.innerHTML+='<div class="judge01">' +
                '<div class="idimg"><img src="image/shopdetail/detail102.png"/></div>' +
                '<div class="write">' +
                '<div>' +
                '<p class="idname">'+json[i].username+'<samp class="comments-time">'+json[i].commentsdate+'</samp></p>' +
                '<p class="which">'+json[i].comments+'</p>';
            if(json[i].photo1!=undefined){
                commentsDiv.innerHTML+='<img src='+json[i].photo2+' style="margin-left:50px;" width="70px" height="70px"/>';
            }
            if(json[i].photo2!=undefined){
                commentsDiv.innerHTML+='<img src='+json[i].photo2+' width="70px" height="70px"/>';
            }
            if(json[i].photo3!=undefined){
                commentsDiv.innerHTML+='<img src='+json[i].photo3+' width="70px" height="70px"/>';
            }
            if(json[i].photo4!=undefined){
                commentsDiv.innerHTML+='<img src='+json[i].photo4+' width="70px" height="70px"/>';
            }
            if(json[i].photo5!=undefined){
                commentsDiv.innerHTML+='<img src='+json[i].photo5+' width="70px" height="70px"/>';
            }
            if(json[i].photo6!=undefined){
                commentsDiv.innerHTML+='<img src='+json[i].photo6+' width="70px" height="70px"/>';
            }

            commentsDiv.innerHTML+='</div></div></div>';
        }
    }
    commentsDiv.innerHTML+='<div class="clear"></div>';
}

//渲染图片放大效果
function onreadyImage(){
    var showproduct = {
        "boxid":"showbox",
        "sumid":"showsum",
        "boxw":400,
        "boxh":550,
        "sumw":60,//列表每个宽度,该版本中请把宽高填写成一样
        "sumh":60,//列表每个高度,该版本中请把宽高填写成一样
        "sumi":7,//列表间隔
        "sums":5,//列表显示个数
        "sumsel":"sel",
        "sumborder":1,//列表边框，没有边框填写0，边框在css中修改
        "lastid":"showlast",
        "nextid":"shownext"
    };//参数定义
    $.ljsGlasses.pcGlasses(showproduct);//方法调用，务必在加载完后执行

    $(function(){

        $('.tabs a').click(function(){

            var f=false;
            var $this=$(this);
            $('.panel').hide();
            $('.tabs a.active').removeClass('active');
            $this.addClass('active').blur();
            var panel=$this.attr("href");
            $(panel).show();
            return f;  //告诉浏览器  不要纸箱这个链接
        })//end click


        $(".tabs li:first a").click()   //web 浏览器，单击第一个标签吧


    })//end ready

    $(".centerbox li").click(function(){
        $("li").removeClass("now");
        $(this).addClass("now")

    });


}

//添加到购物车
function add2Cart() {
    $.ajax({
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: "/judgeUser",//url
        success: function (result) {
            if (result.status == 1) { //是已登录用户
                var nu = document.getElementById("goodsnumber").value;

                var json = JSON.stringify({goodsid: 1, number: 1});
                console.log(json);
                $.ajax({
                    url: "/addGoodsToCart",
                    type: "POST",
                    data: json,
                    dataType: "json",
                    contentType:"application/json;charset=utf-8",
                    success: function (data) {
                        var receiveJSON =data;
                        if (data.status == 1) {
                            alert("已成功加入购物车！");
                        } else if (data.status == 0) {
                            alert("购物车中已存在此商品！");
                        }
                    },
                    error: function () {
                        console.log("加入购物车接口数据失败！");
                    }
                });
            }
            else {
                window.location.href = "../login.html";     //未登录则跳转到登录界面
            }
        },
        error: function () {
            window.location.href = "../login.html";         //未登录则跳转到登录界面
        }
    })
}

window.onload=function ()
{
    onGoodsReady();
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
    onGoodsReady();
};



