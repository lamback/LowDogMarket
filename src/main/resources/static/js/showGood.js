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
    document.getElementById("goodsid").innerHTML+=document.getElementById("goodsid").innerHTML+goodid+"<br>"; //编号
    
   var goodsname=json[i].name;
var goodname=JSON.stringify(goodsname);
    document.getElementById("goodsname").innerHTML+=document.getElementById("goodsname").innerHTML+goodname+"<br>"; //商品名
 
var goodstype=json[i].type;
var goodtype=JSON.stringify(goodstype);
    document.getElementById("goodstype").innerHTML+=document.getElementById("goodstype").innerHTML+goodtype+"<br>";  //商品类型
   
var goodsprice=json[i].price;
var goodprice=JSON.stringify(goodsprice);
    document.getElementById("goodsprice").innerHTML+=document.getElementById("goodsprice").innerHTML+goodprice+"<br>";  //商品价格
    
   document.write("<input type="button" value="撤销" name="undo" onClick="delete()">")
          }
        }

fuction delete(){}
     
      