package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Shoppingcart;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ShoppingCartService {
    /*
        商品加入购物车
     */
    Boolean addGoodsToCart(Shoppingcart shoppingcart,int goodsid);

    /*
        展示购物车中的所有商品
     */
    Goods showCart(int goodsid);
    List<Shoppingcart> getAllGoodsID(String username);

    /*
        修改购物车数量或者删除
     */
    Boolean changeNumberInCart(int goodsid,int action);

    /*
        加入订单
     */
    int  getNumber(int goodsid);
    Boolean deleteGoodsInCart(int goodsid);
}
