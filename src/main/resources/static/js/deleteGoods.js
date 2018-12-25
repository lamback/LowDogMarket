function delete(){
    var id=document.getElementById("goodsid")

    var data={ goodsid:id.toString()};
    var data_json=JSON.stringify(data);

    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp=new XMLHttpRequest();
    }
    xmlHttp.open("POST","http://localhost:8080/deleteGoods",true);
    xmlHttp.send(data_json);
    xmlHttp.onreadystatechange=function(){
        if(xmlHttp.readyState == 4){
            if(xmlHttp.status == 200){
                //var json=JSON.parse(xmlHttp.responseText);
                //goodsInfo(json);
            }
        }
     }
    };