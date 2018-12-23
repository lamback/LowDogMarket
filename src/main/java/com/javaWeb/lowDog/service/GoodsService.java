package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.Goods;
import org.springframework.stereotype.Service;

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
}
