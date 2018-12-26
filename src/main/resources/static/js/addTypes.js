function addTypesToHomePage(){

    // var typeName = document.getElementById(typeName2).value;
    var typeN=document.getElementById("typeName");
    var xmlHttp = new XMLHttpRequest();
    var url = "/addTypesToHomePage?type ="+ typeN;
    xmlHttp.open("POST",url,true);
    xmlHttp.onreadystatechange=function() {
        if(xmlHttp.readyState==4){
            if(xmlHttp.responseText.status==1)
            {
                alert("已有该种类，请重新添加");

            }
            else
            {
                alert("添加成功");
            }
        }
    };
    xmlHttp.send();
}