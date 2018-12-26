package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Shoppingcart;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Mapper
public interface ShoppingCartMapper {
    @Insert("insert into shoppingcart(cartid,goodsid,number,username)values(#{cartid},#{goodsid},#{number},#{username})")
    Boolean addGoodsToCart(Shoppingcart shoppingcart);

    @Select("select count(*) from shoppingcart where goodsid=#{goodsid} and username=#{username}")
    int  isInCart(@Param("goodsid") int goodsid,@Param("username") String username);

    @Select("select * from shoppingcart where username=#{username}")
    List<Shoppingcart> getAllGoodsID(String username);

    @Select("select * from goods where goodsid=#{goodsid}")
    Goods showCart(@Param("goodsid") int goodsid);

    @Update("update shoppingcart set number=number+1 where goodsid=#{goodsid}")
    Boolean addNumber(int goodsid);

    @Update("update shoppingcart set number=number-1 where goodsid=#{goodsid}")
    Boolean minusNumber(int goodsid);

    @Delete("delete from shoppingcart where goodsid=#{goodsid}")
    Boolean deleteGoodsInCart(int goodsid);

    @Select("select number from shoppingcart where goodsid=#{goodsid}")
    int  getNumber(int goodsid);

}
