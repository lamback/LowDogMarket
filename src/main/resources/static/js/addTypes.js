function addTypesToHomePage(){
	var typeName = document.localName.typeName.value;
	var xmlHttp = new XMLHttpRequest();
	var url = "?type = typeName"
	xmlHttp.open("POST","url",true);
	xmlHttp.onreadystatechange=function () {
        if((xmlHttp.readyState==4)){
            if(xmlHttp.responseText.status==1)
        {
            resultp.innerHTML+="已有该种类";

        }
        else
        {
            resultp.innerHTML+="添加成功";
        }
    }
}