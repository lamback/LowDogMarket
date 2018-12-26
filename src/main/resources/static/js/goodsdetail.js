
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
    var goodsID=url.substring(index+1,length);
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
            alert(data);
            goodsInfo(data);
            onreadyImage();
        }
    });

    $.ajax({
        url: "/getCommentsByGoodsID",
        type: "post",
        data: sendData,
        contentType:'application/json;charset=utf-8',
        dataType: "json",
        success: function (data) {
            var json=JSON.parse(data);
            getCommentsInfo(json);
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
    document.getElementById("entershop").setAttribute("href","SellerFirstPage?username="+sellerName);
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

    document.getElementById("commentsnumber").innerHTML=json.data.length;  //评论数
    document.getElementById("comment-account").innerHTML=json.data.length;

    var commentsDiv=document.getElementById("panel02");
    if(json.data.length>0){
        for(var i=0;i<json.data.length;i++){
            commentsDiv.innerHTML+='<div class="judge01">' +
                '<div class="idimg"><img src="image/shopdetail/detail102.png"/></div>' +
                '<div class="write">' +
                '<div>' +
                '<p class="idname">'+json.data[i].username+'<samp class="comments-time">'+json.data[i].commentsdate+'</samp></p>' +
                '<p class="which">'+json.data[i].comments+'</p>';
            if(json.data[i].photo1!=null){
                commentsDiv.innerHTML+='<img src='+json.data[i].photo2+' style="margin-left:50px;" width="70px" height="70px"/>';
            }
            if(json.data[i].photo2!=null){
                commentsDiv.innerHTML+='<img src='+json.data[i].photo2+' width="70px" height="70px"/>';
            }
            if(json.data[i].photo3!=null){
                commentsDiv.innerHTML+='<img src='+json.data[i].photo3+' width="70px" height="70px"/>';
            }
            if(json.data[i].photo4!=null){
                commentsDiv.innerHTML+='<img src='+json.data[i].photo4+' width="70px" height="70px"/>';
            }
            if(json.data[i].photo5!=null){
                commentsDiv.innerHTML+='<img src='+json.data[i].photo5+' width="70px" height="70px"/>';
            }
            if(json.data[i].photo6!=null){
                commentsDiv.innerHTML+='<img src='+json.data[i].photo6+' width="70px" height="70px"/>';
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
function add2Cart(){
    var nu=document.getElementById("goodsnumber").value;

    var json={goodsid:goodsID,number:nu};
    $.ajax({
        url: "/addGoodsToCart",
        type: "post",
        data: json,
        dataType: "json",
        success: function (data) {
            var receiveJSON=JSON.parse(data);
            if(receiveJSON.status=="1"){
                alert("已成功加入购物车！");
            }else if(receiveJSON.status=="0"){
                alert("购物车中已存在此商品！");
            }
        }
    });
}


//立即购买
function buyNow(){

}

