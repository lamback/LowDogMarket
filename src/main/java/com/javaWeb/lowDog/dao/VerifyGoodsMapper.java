package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.entity.Verifygoods;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface VerifyGoodsMapper {
    @Insert("insert into verifygoods(goodsid,name,type,photo,photo2,photo3,photo4,information,price,seller,address)values(#{goodsid},#{name},#{type},#{photo},#{photo2},#{photo3},#{photo4},#{information},#{price},#{seller},#{address})")
    Boolean addGoods(Verifygoods verifygoods);

    @Select("select * from verifygoods")
    List<Verifygoods> showAllVerifyGoods();

    @Delete("delete from verifygoods where goodsid=#{goodsid}")
    Boolean deletePassGoods(int goodsid);

    @Select("select * from verifygoods where goodsid=#{goodsid}")
    Verifygoods selectVerifyGoods(@Param("goodsid") int goodsid);
}
