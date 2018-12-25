var resultJSON; //从后台服务器接收的json数据

//请求服务器端获取数据，并存到resultJSON中
function requestJSON(){
    $.ajax({
        url: "allOrderList", //请求接口
        type: "post",  //提交方式
        //data:
        dataType:"json",  //接收数据类型
        success:function (data) {   //接收数据成功之后的处理函数
            resultJSON=JSON.parse(data);
        }
    })
}

function consols(){
    alert("ceshi ");
}

function onOrderReady(){
    requestJSON();
         //该段代码仅用于测试
    //resultJSON={data:[
           // {goodsid:12,name:'特步球鞋', type:'男鞋', photo:'image/product/product1.PNG', information:'精品球鞋，大甩卖',price:'122.98', seller:'商家1', sellnumber:'12', address:'赣州',number:'2',buydate:'2018-12-01',iscomment:'1'},
           // {goodsid:32,name:'特步球鞋', type:'男鞋', photo:'image/product/product2.PNG', information:'精品球鞋，大甩卖',price:'122.98', seller:'商家1', sellnumber:'12', address:'赣州',number:'2',buydate:'2018-12-01',iscomment:'0'},
           // {goodsid:22,name:'特步球鞋', type:'男鞋', photo:'image/product/product3.PNG', information:'精品球鞋，大甩卖',price:'122.98', seller:'商家1', sellnumber:'12', address:'赣州',number:'2',buydate:'2018-12-01',iscomment:'1'},
           // {goodsid:14,name:'特步球鞋', type:'男鞋', photo:'image/product/product4.PNG', information:'精品球鞋，大甩卖',price:'122.98', seller:'商家1', sellnumber:'12', address:'赣州',number:'2',buydate:'2018-12-01',iscomment:'0'},
           // {goodsid:56,name:'特步球鞋', type:'男鞋', photo:'image/product/product1.PNG', information:'精品球鞋，大甩卖',price:'122.98', seller:'商家1', sellnumber:'12', address:'赣州',number:'2',buydate:'2018-12-01',iscomment:'1'}
       // ]};
    //测试端结束
    var orderContainer=document.getElementById("orderContainer");
    if(resultJSON!=null){
        for(var i=0;i<resultJSON.data.length;i++){
            orderContainer.innerHTML+='<div class="order-list">\n' +
                '        <div class="order-list-header">\n' +
                '            <p class="time-id"><samp>&nbsp;&nbsp;下单时间：</samp><samp class="time">'+resultJSON.data[i].buydate+'</samp><samp class="id">&nbsp;&nbsp;订单号：</samp><samp class="idmunber">'+getOrderID()+'</samp></p>\n' +
                '            <p class="sellername"><samp class="seller">'+resultJSON.data[i].seller+'</samp></p>\n' +
                '            <p class="null"><img src="image/order-image/null.PNG" height="39px"/></p>\n' +
                '            <p class="callwithme"><img class="callwithme-image" src="image/order-image/callwithme.PNG" height="38px"/></p>\n' +
                '        </div>\n' +
                '        <div class="list-clear"></div>\n' +
                '        <div class="order-info">\n' +
                '            <div class="list1">\n' +
                '                <img src='+resultJSON.data[i].photo+' class="order-image"/>\n' +
                '                <div class="order-div">\n' +
                '                    商品名：<span class="info">'+resultJSON.data[i].name+'</span><br/>\n' +
                '                    类型：<span class="info">'+resultJSON.data[i].type+'</span><br/>\n' +
                '                    商品详情：<span class="info">'+resultJSON.data[i].information+'</span>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <p class="list2"><samp class="infosamp">￥'+oneGoods(resultJSON.data[i].price,resultJSON.data[i].number)+'</samp></p>\n' +
                '            <p class="list3"><samp class="infosamp">'+resultJSON.data[i].number+'</samp></p>\n' +
                '            <p class="list4"><samp class="infosamp">运费险已失效！</samp></p>\n' +
                '            <p class="list5"><samp class="infosamp">￥'+resultJSON.data[i].price+'</samp></p>\n' +
                '            <p class="list6"><samp class="infosamp" >订单已完成！</samp></p>\n' +
                '            <p class="list7"><button class="commentsState" '+isClick(resultJSON.data[i].iscomment,resultJSON.data[i].goodsid)+'>'+isComment(resultJSON.data[i].iscomment)+'</button></p>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '    <div class="list-in-clear"></div>'

        }
    }
}

//评论
function comment(goodsID){
    location.href="localhost:8080/commentPage.html?goodID="+goodsID;
}

//获取订单号
function getOrderID() {
    var orderID='';
    for(var i=0;i<12;i++){
        var random=Math.floor(Math.random()*10);
        orderID+=random;
    }
    return orderID;
}

//获取单价
function oneGoods(price,number) {
    var total=parseFloat(price);
    var number=parseInt(number);
    var oneGoods=(total/number).toFixed(2);
    return oneGoods;
}

//是否需要评论
function isClick(isComments,goodsID){
    var onclick=null;
    if(isComments=='0'){
        onclick='onclick="comment('+goodsID+')"';
    }
    return onclick;
}

//是否需要评论
function isComment(isComments){
    var isComment='去评论';

    if(isComments=='1'){
        isComment='已评论';
    }
    return isComment;
}