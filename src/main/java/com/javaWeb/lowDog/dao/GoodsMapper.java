package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.SellersRanking;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface GoodsMapper {
    @Select("select * from goods where type=#{type}")
    List<Goods> getGoodsByType(String type);

    @Select("select * from goods where goodsid=#{goodsid}")
    Goods getGoodsNewsByGoodsID(int goodsid);

    @Select("select * from goods where type=#{type} and seller=#{seller}")
    List<Goods> getgetGoodsByTypeInMarket(@Param("type") String type,@Param("seller") String seller);

    @Delete("delete from goods where goodsid=#{goodsid}")
    Boolean deleteGoods(int goodsid);

    @Select("select type from goods where goodsid=#{goodsid}")
    String getTypeByGoodsid(int goodsid);

    @Select("select * from goods where seller=#{username}")
    List<Goods> showGoodsInMarket(String username);

    @Select("select * from goods order by sellnumber")
    List<Goods> salesRanking();

    @Select("select * from goods where type=#{type} order by sellnumber")
    List<Goods> salesRankingByType(String type);

    @Select("select seller,count(sellnumber) sellernumber from goods group by seller")
    List<SellersRanking> sellersRanking();

}
