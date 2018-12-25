package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
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
import java.util.List;

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
//        session.setAttribute("username","seller");
        shoppingcart.setUsername(session.getAttribute("username").toString());
        if(shoppingCartService.addGoodsToCart(shoppingcart,data.getInteger("goodsid"))){
            temp.put("status",1);
            return temp.toString();
        }
        temp.put("status",0);
        return temp.toString();
    }

    /*
        展示购物车中的所有商品
     */
    @RequestMapping(value = "/showCart",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String showCart(HttpSession session) {

//        session.setAttribute("username","aaa");

        String username=session.getAttribute("username").toString();
        JSONArray result=new JSONArray();
        for (Shoppingcart shoppingcart:shoppingCartService.getAllGoodsID(username)
             ) {
//            System.out.println(shoppingcart.toString());
            int goodsID=shoppingcart.getGoodsid();
            Goods goods=shoppingCartService.showCart(goodsID);
//            System.out.println(2);
            JSONObject temp=new JSONObject();
//            System.out.println(2);
            System.out.println(goods.toString());
            temp.put("name",goods.getName());
            temp.put("type",goods.getType());
            temp.put("photo",goods.getPhoto());
            temp.put("information",goods.getInformation());
            temp.put("price",goods.getPrice());
            temp.put("seller",goods.getSeller());
            temp.put("sellnumber",goods.getSellnumber());
            temp.put("address",goods.getAddress());
            temp.put("number",shoppingcart.getNumber());
            result.add(temp);
        }
        return result.toString();
    }

    /*
        修改购物车内商品数量或者删除
     */
    @RequestMapping(value = "/changeNumberInCart",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public void changeNumberInCart(@RequestBody JSONObject data) {
        int goodsid=data.getInteger("goodsid");
        int action=data.getInteger("action");
        shoppingCartService.changeNumberInCart(goodsid,action);
    }
}
