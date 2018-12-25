var pd;
function dynamicTable(result) {
    var data = result;//取到一个json数据
    if (data == null) {
        return;
    }
    alert(result);
    var datavue = [];
    for (var i = 0; i < result.length; i++) {//json类似一个数组，所以通过循环输出里面
        var objproject = {
            "productId" : result[i].productId,//这个是赋值到一个数组对象里面去，开发的时候就是取到里面的值进行一个逻辑判断，要干嘛干嘛的。这个也加上他的下标
            "productName" : result[i].productName,
            "productPrice" : result[i].productPrice,
            "productQuentity" : result[i].productQuentity,
            "productImage" : result[i].productImage
        };
        console.log(objproject);
        datavue.push(objproject);
    }
    pd=datavue;
}
window.onload=function ()
{
    var loginText=document.getElementById("loginText");

$.ajax({
    type: "POST",//方法类型
    dataType: "json",//预期服务器返回的数据类型
    url: "/judgeUser" ,//url

    success: function (result) {
        if(result.status==1)
        {
            loginText.innerHTML+="<span class='fs-14 line-h30 ftc-6b6b6b dsblock fl'>Hello!"+result.username+"</span>";

        }
        else
        {
            loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
            loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
        }
    },
    error:function () {
        loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>Hi，请登录</a>";
        loginText.innerHTML+="<a href='#' class='dsblock fl line-h30 fs-14 ftc-e23435 m-l-40'>注册</a>";
    }

})
};


var vm=new Vue({
	el:"#app",
	data:{
		totalMoney:0,
		productList:[],
		checkAllFlag:false
	},
	filters:{
		formatMoney: function (value) {
			return "￥ "+value.toFixed(2);
		}
	},
	created:function () {
		this.cartView();
    },
	mounted:function(){
		//this.cartView();
	},
	methods:{
		cartView:function () {
			var _this=this;
            $.ajax({
                type: "POST",//方法类型
                dataType: "json",//预期服务器返回的数据类型
                url: "/showCart" ,//url
                error:function () {
                    alert("ERROR")
                },
                success: function (result) {
                    _this.productList=result;
                }});
			//获取商品数据信息

		},
		//点击增加或减少商品数量按钮后修改对应金额
		changeMoney:function (product,way) {
            var action=1;
			if (way>0) {
				product.number++;
                $.ajax({
                    type: "POST",//方法类型
                    dataType: "json",//预期服务器返回的数据类型
                    url: "/changeNumberInCart" ,//url
                    data: $('#'+product.goodsid).serialize(),action
                })
			}else{
				product.number--;
                action=0;
                $.ajax({
                    type: "POST",//方法类型
                    dataType: "json",//预期服务器返回的数据类型
                    url: "/changeNumberInCart" ,//url
                    data: $('#'+product.goodsid).serialize(),action
                });
				if (product.number<1) {
					product.number=1;
				}
			}
			this.getTotalMoney();
		},
		//单选框设置
		checkBox:function (item){
			var _this=this;
			var num=0;
			if (typeof item.check == "undefined") {
				this.$set(item,"check",true);
			}else{
				item.check = !item.check;
			}
			this.productList.forEach(function (item,value) {
				if (item.check) {
					num++;
				}
			})
			if (num==_this.productList.length) {
				this.checkAllFlag=true;
			}else{
				this.checkAllFlag=false;
			}
			this.getTotalMoney();
		},
		//全选按钮设置
		checkAll:function (){
			var _this=this;
			this.checkAllFlag = !this.checkAllFlag;
			this.productList.forEach(function(item,index){
				if (typeof item.check == "undefined") {
					_this.$set(item,"check",_this.checkAllFlag);
				}else{
					item.check = _this.checkAllFlag;
				}
			})
			this.getTotalMoney();
		},
		//总金额设置
		getTotalMoney:function () {
			var _this=this;
			this.totalMoney = 0;
			this.productList.forEach(function (item,index) {
				if (item.check) {
					_this.totalMoney += item.number*item.price;
				}
			})
		},
		//删除商品
		del: function (item) {
			var index=this.productList.indexOf(item);
			this.productList.splice(index,1);
			this.getTotalMoney();
            $.ajax({
                type: "POST",//方法类型
                dataType: "json",//预期服务器返回的数据类型
                url: "/changeNumberInCart" ,//url
                data: $('#'+item.goodsid).serialize()
            })
		},
		//增加订单
		addorder: function (item) {
            this.productList.forEach(function (item,index) { //所选商品
                if (item.check) {
                    $.ajax({
                        type: "POST",//方法类型
                        dataType: "json",//预期服务器返回的数据类型
                        url: "/submitOrder" ,//url
                        data: $('#'+item.goodsid).serialize(),
                        success: function (result) {
                            console.log(result);//打印服务端返回的数据(调试用)
                        }
                    })
                }
            });
			window.location.href="//localhost:8080/orderComplete.html";
        }
	}
})