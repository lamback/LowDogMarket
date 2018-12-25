function showGoods(){
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp=new XMLHttpRequest();
    }
    xmlHttp.open("POST","http://localhost:8080/showGoodsInMarket",true);
    xmlHttp.send();
    xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState == 4){
            if(xmlHttp.status == 200){
                var json=JSON.parse(xmlHttp.responseText);
              show(json);
            }
        }
       }
    };

function show(json){
    var goodsid=json.goodsid;
    document.getElementById("goodsid").innerHTML=goodsid;  //编号
    var goodsname=json.name;
    document.getElementById("goodsname").innerHTML=goodsname;  //商品名
    var goodstype=json.type;
    document.getElementById("goodstype").innerHTML=goodstype;  //商品类型
    var goodsprice=json.price;
    document.getElementById("goodsprice").innerHTML=goodsprice;  //商品价格
    var photo=json.photo;
    document.getElementById("goodsimage").src=photo;
}