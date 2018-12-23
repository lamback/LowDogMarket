package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Shoppingcart;
import com.javaWeb.lowDog.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class ShoppingCartController {
    @Autowired
    ShoppingCartService shoppingCartService;

    @RequestMapping(value = "/addGoodsToCart",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String addGoodsToCart (@RequestBody JSONObject data, HttpSession session) {
        JSONObject temp=new JSONObject();

        Shoppingcart shoppingcart=new Shoppingcart();
        shoppingcart.setGoodsid(data.getInteger("goodsid"));
        shoppingcart.setNumber(data.getInteger("number"));
        session.setAttribute("username","seller");
        shoppingcart.setUsername(session.getAttribute("username").toString());
        if(shoppingCartService.addGoodsToCart(shoppingcart,data.getInteger("goodsid"))){
            temp.put("status",1);
            return temp.toString();
        }
        temp.put("status",0);
        return temp.toString();
    }
}
