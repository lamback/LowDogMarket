package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Shoppingcart;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Service;

@Mapper
public interface ShoppingCartMapper {
    @Insert("insert into shoppingcart(cartid,goodsid,number,username)values(#{cartid},#{goodsid},#{number},#{username})")
    Boolean addGoodsToCart(Shoppingcart shoppingcart);

    @Select("select count(*) from shoppingcart where goodsid=#{goodsid}")
    int  isInCart(int goodsid);
}
