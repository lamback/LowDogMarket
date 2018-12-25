package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Orderlist;
import com.javaWeb.lowDog.entity.Typeinmarket;
import com.javaWeb.lowDog.service.TypeInMarketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class TypeInMarketController {
    @Autowired
    TypeInMarketService typeInMarketService;

        /*
            查看订单
        */
    @RequestMapping(value = "/allTypesInMarket",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String allTypesInMarket(@RequestBody JSONObject data) {
        JSONArray result=new JSONArray();

        String username=data.getString("username");
        System.out.println(username);
        for (Typeinmarket typeinmarket:typeInMarketService.allTypesInMarket(username)
        ) {
            System.out.println(1);
            JSONObject temp=new JSONObject();
            temp.put("typeinmarketid",typeinmarket.getTypeinmarketid());
            temp.put("type",typeinmarket.getType());

            result.add(temp);
        }
        return result.toString();
    }
}
