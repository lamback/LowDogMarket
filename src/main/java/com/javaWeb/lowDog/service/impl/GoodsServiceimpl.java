package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.GoodsMapper;
import com.javaWeb.lowDog.dao.TypeInMarketMapper;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.SellersRanking;
import com.javaWeb.lowDog.entity.Typeinmarket;
import com.javaWeb.lowDog.service.GoodsService;
import com.javaWeb.lowDog.service.TypeInMarketService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

@Service
public class GoodsServiceimpl implements GoodsService,TypeInMarketService {
    @Resource
    GoodsMapper goodsMapper;
    @Resource
    TypeInMarketMapper typeInMarketMapper;


    @Override
    public List<Goods> getGoodsByType(String type) {
        return goodsMapper.getGoodsByType(type);
    }

    @Override
    public Goods getGoodsNewsByGoodsID(int goodsid) {
        return goodsMapper.getGoodsNewsByGoodsID(goodsid);
    }

    @Override
    public List<Goods> getgetGoodsByTypeInMarket(String type, String seller) {
        return goodsMapper.getgetGoodsByTypeInMarket(type,seller);
    }

    @Override
    public List<Goods> showGoodsInMarket(String username) {
        return goodsMapper.showGoodsInMarket(username);
    }

    @Override
    public Boolean deleteGoods(int goodsid,String seller) {
        String type=goodsMapper.getTypeByGoodsid(goodsid);
        goodsMapper.deleteGoods(goodsid);
        for (Goods goods:goodsMapper.getgetGoodsByTypeInMarket(type,seller)
             ) {
                return true;        //不用删除种类
        }
//        System.out.println(1);
       deleteTypeInMarket(type,seller);
        return false;          //删除种类
    }

    @Override
    public List<Goods> salesRanking() {
        return goodsMapper.salesRanking();
    }

    @Override
    public List<Goods> salesRankingByType(String type) {
        return goodsMapper.salesRankingByType(type);
    }

    @Override
    public List<SellersRanking> sellersRanking() {
        return goodsMapper.sellersRanking();
    }


    @Override
    public Boolean deleteTypeInMarket(String type,String seller) {
        return typeInMarketMapper.deleteTypeInMarket(type,seller);
    }

    @Override
    public List<Typeinmarket> allTypesInMarket(String username) {
        return typeInMarketMapper.allTypesInMarket(username);
    }
}
