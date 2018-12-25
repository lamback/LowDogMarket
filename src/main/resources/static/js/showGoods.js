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
    document.getElementById("goodsid").innerHTML=goodsid;  //���
    var goodsname=json.name;
    document.getElementById("goodsname").innerHTML=goodsname;  //��Ʒ��
    var goodstype=json.type;
    document.getElementById("goodstype").innerHTML=goodstype;  //��Ʒ����
    var goodsprice=json.price;
    document.getElementById("goodsprice").innerHTML=goodsprice;  //��Ʒ�۸�
    var photo=json.photo;
    document.getElementById("goodsimage").src=photo;
}