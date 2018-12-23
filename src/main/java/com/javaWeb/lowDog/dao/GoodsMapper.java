package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Goods;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface GoodsMapper {
    @Select("select * from goods where type=#{type}")
    List<Goods> getGoodsByType(String type);

    @Select("select * from goods where goodsid=#{goodsid}")
    Goods getGoodsNewsByGoodsID(int goodsid);
}
