package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.GoodsMapper;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.service.GoodsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class GoodsServiceimpl implements GoodsService {
    @Resource
    GoodsMapper goodsMapper;


    @Override
    public List<Goods> getGoodsByType(String type) {
        return goodsMapper.getGoodsByType(type);
    }

    @Override
    public Goods getGoodsNewsByGoodsID(int goodsid) {
        return goodsMapper.getGoodsNewsByGoodsID(goodsid);
    }
}
