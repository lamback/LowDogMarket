package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.SellersRanking;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public interface GoodsService {
    /*
        首页点击种类出现商品
     */
    List<Goods> getGoodsByType(String type);

    /*
    点击商品，出现商品详情
     */
    Goods getGoodsNewsByGoodsID(int goodsid);

    /*
        商店首页，点击种类，展示该商店中的商品
     */
    List<Goods> getgetGoodsByTypeInMarket(String type,String seller);

    /*
       展示该商店中的所有商品，用于商家选择是否撤销
     */
    List<Goods> showGoodsInMarket(String username);

    /*
        //商家撤销商品
     */
    Boolean deleteGoods(int goodsid,String seller);

    /*
        全网销售排行榜
     */
    List<Goods> salesRanking();

    /*
        全网销售排行榜，再加类型限制
     */
    List<Goods> salesRankingByType(String type);

    /*
        全网商家销量排行榜
     */
    List<SellersRanking> sellersRanking();

}
