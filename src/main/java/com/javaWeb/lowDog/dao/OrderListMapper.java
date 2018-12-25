package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Orderlist;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface OrderListMapper {
    @Select("select * from orderlist")
    List<Orderlist> getAllOrder();

    @Select("select * from goods where goodsid=#{goodsid}")
    Goods getGoodsInOrder(int goodsid);

    @Insert("insert into orderlist values(#{orderid},#{goodsid},#{username},#{number},#{buydate},#{iscomment})")
    Boolean addToOrder(Orderlist orderlist);
}
