function form2Json(formName){
var form=document.getElementById(formName);
var sb=new StringBuilder();var rcs=new Map();
    for ( var i = 0; i < form.elements.length; i++){
        var element = form.elements[i];    var name = element.name;
        if (typeof (name) === "undefined" || (name === null) || (name.length === 0)){continue;}
        var tagName = element.tagName;        
        if(tagName ==='INPUT'||tagName === 'TEXTAREA'){var type = element.type;
            if ((type === 'text')||(type === 'password') || (type === 'hidden') || (tagName === 'TEXTAREA')){
                sb.append("\""+name+"\":\""+encodeURIComponent(element.value.replace(/\r\n/ig,""))+"\"");
            }else if((type === 'checkbox') || (type === 'radio')){
                rcs.putOverride(name,type);
            }else{continue;}
        }else if (tagName === 'SELECT'){var oc = element.options.length;
            for ( var j = 0; j <oc; j++){
                if (element.options[j].selected){sb.append("\""+name+"\":\""+(element.value)+"\"");}
            }
        }
    }    
    if(rcs.size()>0){
        for(var i=0;i<rcs.size();i++){
        var r=rcs.element(i);var radio="";
            var d=document.getElementsByName(r.key);
            if(r.value==="radio"){
                for(j=0;j<d.length;j++){
                    if(d[j].checked){radio=d[j].value;}
                }                
            }else{
                for(j=0;j<d.length;j++){
                    if(d[j].checked){radio+=","+d[j].value;}
                }
                radio.substr(1);
            }
            sb.append("\""+r.key+"\":\""+radio+"\"");
        }
    }
    return "{"+sb.toJsonString()+"}";
}


function StringBuilder(){
    this._element_ = new Array();
    this.append = function(item) {
        this._element_.push(item);
    }
    this.toString = function() {
        return this._element_.join("");
    }
    this.toJsonString = function() {
        return this._element_.join(",");
    }
    this.join = function(separator) {
        return this._element_.join(separator);
    }
    this.length = function() {
        return this._element_.length;
    }    
}
function Map() {
    this.elements = new Array();
    // ��ȡMAPԪ�ظ���
    this.size = function() {
        return this.elements.length;
    }
    // �ж�MAP�Ƿ�Ϊ��
    this.isEmpty = function() {
        return (this.elements.length < 1);
    }
    // ɾ��MAP����Ԫ��
    this.clear = function() {
        this.elements = new Array();
    }
    // ��MAP������Ԫ�أ�key, value)
    this.put = function(_key, _value) {
        this.elements.push({key : _key,value : _value});
    }    
    //����Ԫ�ز�����
    this.putOverride = function(_key,_value){
        this.remove(_key);
        this.put(_key,_value);
    }
    // ɾ��ָ��KEY��Ԫ�أ��ɹ�����True��ʧ�ܷ���False
    this.remove = function(_key) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    this.elements.splice(i, 1);
                    return true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    }

    // ��ȡָ��KEY��Ԫ��ֵVALUE��ʧ�ܷ���NULL
    this.get = function(_key) {
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    return this.elements[i].value;
                }
            }
        } catch (e) {
            return null;
        }
    }
    // ��ȡָ��������Ԫ�أ�ʹ��element.key��element.value��ȡKEY��VALUE����ʧ�ܷ���NULL
    this.element = function(_index) {
        if (_index < 0 || _index >= this.elements.length) {
            return null;
        }
        return this.elements[_index];
    }
    // �ж�MAP���Ƿ���ָ��KEY��Ԫ��
    this.containsKey = function(_key) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    }
    // �ж�MAP���Ƿ���ָ��VALUE��Ԫ��
    this.containsValue = function(_value) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].value == _value) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    }
    // ��ȡMAP������VALUE�����飨ARRAY��
    this.values = function() {
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].value);
        }
        return arr;
    }
    // ��ȡMAP������KEY�����飨ARRAY��
    this.keys = function() {
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].key);
        }
        return arr;
    }
}

var json = form2Json("formid");//����Ĳ�����form����idֵ
var data=new Object();
data=JSON.stringify(json);


 var xml =  new  XMLHttpRequest();
    xml.open("POST",'http://localhost:8080/hello',true)
    xml.send(data);
    xml.onreadystatechange = function () {
        if(xml.readyState == 4){
            if(xml.status == 200){
                console.log(xml.responseText);
            }