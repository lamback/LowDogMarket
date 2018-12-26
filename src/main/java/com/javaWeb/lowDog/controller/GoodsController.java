package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.SellersRanking;
import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
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

    /*
        商店首页，点击种类，展示该商店中的商品
     */
    @RequestMapping(value = "/getgetGoodsByTypeInMarket",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String getgetGoodsByTypeInMarket (@RequestBody JSONObject data, HttpSession session) {
        JSONArray result=new JSONArray();
        String type=data.getString("type");
//        session.setAttribute("seller","aaa");
        String seller=session.getAttribute("seller").toString();
        for (Goods goods:goodsService.getgetGoodsByTypeInMarket(type,seller)
        ) {
            JSONObject temp=new JSONObject();
            temp.put("photo",goods.getPhoto());
            temp.put("information",goods.getInformation());
            temp.put("price",goods.getPrice());
            temp.put("seller",goods.getSeller());
            temp.put("sellnumber",goods.getSellnumber());
            temp.put("address",goods.getAddress());

            temp.put("goodsid",goods.getGoodsid());
            temp.put("name",goods.getName());
            temp.put("type",goods.getType());
            result.add(temp);
        }
        return result.toString();
    }

    /*
    展示该商店中的所有商品，用于商家选择是否撤销
     */
    @RequestMapping(value = "/showGoodsInMarket",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String showGoodsInMarket(HttpSession session) {
        JSONArray result=new JSONArray();
//        session.setAttribute("username","seller1");
        String username=session.getAttribute("username").toString();
        for (Goods goods:goodsService.showGoodsInMarket(username)
        ) {
            JSONObject temp=new JSONObject();
            temp.put("goodsid",goods.getGoodsid());
            temp.put("name",goods.getName());
            temp.put("type",goods.getType());
            temp.put("photo",goods.getPhoto());
            temp.put("information",goods.getInformation());
            temp.put("price",goods.getPrice());
            temp.put("sellnumber",goods.getSellnumber());

            result.add(temp);
        }
        return result.toString();
    }

    /*
      商家撤销商品
     */
    @RequestMapping(value = "/deleteGoods",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public void deleteGoods(@RequestBody JSONObject data,HttpSession session) {
        session.setAttribute("username","seller1");
        int goodsid=data.getInteger("goodsid");
        String seller=session.getAttribute("username").toString();
        goodsService.deleteGoods(goodsid,seller);
    }

    /*
        全网销售排行榜
     */
    @RequestMapping(value = "/salesRanking",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String salesRanking() {
        JSONArray result=new JSONArray();
        for (Goods goods:goodsService.salesRanking()
        ) {
            JSONObject temp=new JSONObject();
            temp.put("information",goods.getInformation());
            temp.put("price",goods.getPrice());
            temp.put("seller",goods.getSeller());
            temp.put("sellnumber",goods.getSellnumber());
            temp.put("address",goods.getAddress());

            temp.put("goodsid",goods.getGoodsid());
            temp.put("name",goods.getName());
            temp.put("type",goods.getType());
            temp.put("photo",goods.getPhoto());
            result.add(temp);
        }
//        System.out.println(result.toString());
        return result.toString();
    }

    /*
      全网销售排行榜,再加类型限制
   */
    @RequestMapping(value = "/salesRankingByType",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String salesRankingByType(@RequestBody JSONObject data) {
        JSONArray result=new JSONArray();
        for (Goods goods:goodsService.salesRankingByType(data.getString("type"))
        ) {
            JSONObject temp=new JSONObject();
            temp.put("seller",goods.getSeller());
            temp.put("sellnumber",goods.getSellnumber());
            temp.put("address",goods.getAddress());

            temp.put("goodsid",goods.getGoodsid());
            temp.put("name",goods.getName());
            temp.put("type",goods.getType());
            temp.put("photo",goods.getPhoto());
            temp.put("information",goods.getInformation());
            temp.put("price",goods.getPrice());
            result.add(temp);
        }
        return result.toString();
    }

//    /*
//        全网商家销量排行榜
//     */
//    @RequestMapping(value = "/sellersRanking",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
//    public String sellersRanking() {
//        JSONArray result=new JSONArray();
//        for (SellersRanking sellersRanking:goodsService.sellersRanking()
//        ) {
//            JSONObject temp=new JSONObject();
//            temp.put("username",sellersRanking.getSeller());
//            temp.put("number",sellersRanking.getSellernumber());
//            result.add(temp);
//        }
//        return result.toString();
//    }


}
