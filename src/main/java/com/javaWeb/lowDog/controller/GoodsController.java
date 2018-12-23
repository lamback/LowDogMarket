package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GoodsController {
    @Autowired
    GoodsService goodsService;

    /*
      首页点击种类出现商品
   */
    @RequestMapping(value = "/getGoodsByType",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String getGoodsByType(@RequestBody JSONObject data) {
        JSONArray result=new JSONArray();
        String type=data.getString("type");
        for (Goods goods:goodsService.getGoodsByType(type)
             ) {
            JSONObject temp=new JSONObject();
            temp.put("goodsid",goods.getGoodsid());
            temp.put("name",goods.getName());
            temp.put("type",goods.getType());
            temp.put("photo",goods.getPhoto());
            temp.put("information",goods.getInformation());
            temp.put("price",goods.getPrice());
            temp.put("seller",goods.getSeller());
            temp.put("sellnumber",goods.getSellnumber());
            temp.put("address",goods.getAddress());
            result.add(temp);
        }
        return result.toString();
    }

    /*
   点击商品，出现商品详情
    */
    @RequestMapping(value = "/getGoodsNewsByGoodsID",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String getGoodsNewsByGoodsID(@RequestBody JSONObject data) {
        JSONObject temp=new JSONObject();
        int goodsid=data.getInteger("goodsid");
        Goods goods=goodsService.getGoodsNewsByGoodsID(goodsid);
            temp.put("goodsid",goods.getGoodsid());
            temp.put("name",goods.getName());
            temp.put("type",goods.getType());
            temp.put("photo",goods.getPhoto());
            temp.put("photo2",goods.getPhoto2());
            temp.put("photo3",goods.getPhoto3());
            temp.put("photo4",goods.getPhoto4());
            temp.put("information",goods.getInformation());
            temp.put("price",goods.getPrice());
            temp.put("seller",goods.getSeller());
            temp.put("sellnumber",goods.getSellnumber());
            temp.put("address",goods.getAddress());
        return temp.toString();
    }
}
