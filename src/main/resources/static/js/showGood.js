var resultJSON;
function requestJSON(){
    $.ajax({
         url:showGoodsInMarket,
        type:"post",
         dataType:"json",
        success:function(data){
             resultJSON=JSON.parse(data);
             show(resultJSON);
           }
        })
      }

function show(json){
   var  i;
    for(i in json){
      var goodsid=json[i].goodsid;
      var goodid=JSON.stringify(goodsid);
    document.getElementById("goodsid").innerHTML+=document.getElementById("goodsid").innerHTML+goodid+"<br>"; //���
    
   var goodsname=json[i].name;
var goodname=JSON.stringify(goodsname);
    document.getElementById("goodsname").innerHTML+=document.getElementById("goodsname").innerHTML+goodname+"<br>"; //��Ʒ��
 
var goodstype=json[i].type;
var goodtype=JSON.stringify(goodstype);
    document.getElementById("goodstype").innerHTML+=document.getElementById("goodstype").innerHTML+goodtype+"<br>";  //��Ʒ����
   
var goodsprice=json[i].price;
var goodprice=JSON.stringify(goodsprice);
    document.getElementById("goodsprice").innerHTML+=document.getElementById("goodsprice").innerHTML+goodprice+"<br>";  //��Ʒ�۸�
    
   document.write("<input type="button" value="����" name="undo" onClick="delete()">")
          }
        }

fuction delete(){}
     
      