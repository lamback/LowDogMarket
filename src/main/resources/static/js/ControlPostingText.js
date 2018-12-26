var nowPic = 0;
var ph1,ph2,ph3,ph4,ph5,ph6;

var fileInput = document.querySelector('input[type=file]'),
    previewImg = document.getElementsByClassName("showPic")[0];
fileInput.addEventListener('change', function () {
    var file = this.files[0];
    var reader = new FileReader();
    // 监听reader对象的的onload事件，当图片加载完成时，把base64编码賦值给预览图片
    reader.addEventListener("load", function () {
        previewImg.src = reader.result;
    }, false);
    // 调用reader.readAsDataURL()方法，把图片转成base64
    reader.readAsDataURL(file);
}, false);
function upload() {
    var filename = document.getElementById("importFile").value;
    // 这时的filename不是 importFile 框中的值
    var s = getPath(document.getElementById("importFile"));
    if (s!="") nowPic+=1;
    switch (nowPic) {
        case 1: ph1=s;break;
        case 2: ph2=s;break;
        case 3: ph3=s;break;
        case 4: ph4=s;break;
        case 5: ph5=s;break;
        case 6: ph6=s;break;
    }
    document.getElementById("importFile").value ="";
    alert("当前已经上传了"+nowPic+"张图片！");
}
function getPath(obj) {
    if(obj)
    {

        if (window.navigator.userAgent.indexOf("MSIE")>=1)
        {
            obj.select();

            return document.selection.createRange().text;
        }

        else if(window.navigator.userAgent.indexOf("Firefox")>=1)
        {
            if(obj.files)
            {

                return obj.files.item(0).getAsDataURL();
            }
            return obj.value;
        }
        return obj.value;
    }
}
function PostTZ() {
    var com = document.getElementsByTagName('textarea')[0].value;
    var Data = JSON.stringify({
        comments:com
        ,photo1:ph1,photo2:ph2,photo3:ph3,photo4:ph4,photo5:ph5,photo6:ph6
    });
    $.ajax( {
        url:"/addPostings",
        type: "POST",
        data:Data,
        contentType:'application/json;charset=utf-8',
        dataType:"json",
        success: function(){
            alert("发布帖子成功，将跳转到微淘页面！");
            window.location.href='weiPosting.html';
        },
        error:function(){
            alert("上传失败");
        }
    })
}