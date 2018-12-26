package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Orderlist;
import com.javaWeb.lowDog.entity.Util;
import com.javaWeb.lowDog.service.GoodsService;
import com.javaWeb.lowDog.service.OrderListService;
import com.javaWeb.lowDog.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class OrderListController {
    @Autowired
    OrderListService orderListService;

    @Autowired
    GoodsService goodsService;

    @Autowired
    ShoppingCartService shoppingCartService;
    /*
        查看订单
     */
    @RequestMapping(value = "/allOrderList",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String allOrderList() {
        JSONArray result=new JSONArray();
        for (Orderlist order:orderListService.getAllOrder()
             ) {
            int goodsid=order.getGoodsid();
            JSONObject temp=new JSONObject();
            Goods goods=orderListService.getGoodsInOrder(goodsid);
            temp.put("goodsid",goods.getGoodsid());
            temp.put("name",goods.getName());
            temp.put("type",goods.getType());
            temp.put("photo",goods.getPhoto());
            temp.put("information",goods.getInformation());
            temp.put("price",goods.getPrice());
            temp.put("seller",goods.getSeller());
            temp.put("sellnumber",goods.getSellnumber());
            temp.put("address",goods.getAddress());
            temp.put("number",order.getNumber());
            temp.put("buydate",order.getBuydate().toString());
            temp.put("iscomment",order.getIscomment());

            result.add(temp);
        }
        return result.toString();
    }

    /*
        提交订单
     */
    @RequestMapping(value = "/submitOrder",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public void submitOrder(@RequestBody JSONObject temp, HttpSession session) {
//        session.setAttribute("username","aaa");

            int goodsid=temp.getInteger("goodsid");
//            Goods goods=goodsService.getGoodsNewsByGoodsID(goodsid);
            int number=shoppingCartService.getNumber(goodsid);
            Orderlist orderlist=new Orderlist();
            orderlist.setGoodsid(goodsid);
            orderlist.setUsername(session.getAttribute("username").toString());
            orderlist.setNumber(number);
            orderlist.setBuydate(Util.getTime());
            orderlist.setIscomment(0);

            orderListService.addToOrder(orderlist);
            shoppingCartService.deleteGoodsInCart(goodsid);
        }
}
