function addTypesToHomePage(){

    // var typeName = document.getElementById(typeName2).value;
    var typeN=document.getElementById("typeName");
    alert(typeN);
    var xmlHttp = new XMLHttpRequest();
    var url = "/addTypesToHomePage?type ="+ typeN;
    xmlHttp.open("POST",url,true);
    xmlHttp.onreadystatechange=function() {
        if(xmlHttp.readyState==4){
            if(xmlHttp.responseText.status==1)
            {
                resultp.innerHTML+="已有该种类";

            }
            else
            {
                resultp.innerHTML+="添加成功";
            }
        }
    };
    xmlHttp.send();
}