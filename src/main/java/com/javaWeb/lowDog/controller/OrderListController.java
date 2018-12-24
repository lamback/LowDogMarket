package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Orderlist;
import com.javaWeb.lowDog.service.OrderListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderListController {
    @Autowired
    OrderListService orderListService;

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

}
