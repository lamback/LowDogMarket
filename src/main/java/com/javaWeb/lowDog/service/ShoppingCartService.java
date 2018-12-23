package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.Shoppingcart;
import org.springframework.stereotype.Service;

@Service
public interface ShoppingCartService {
    /*
        商品加入购物车
     */
    Boolean addGoodsToCart(Shoppingcart shoppingcart,int goodsid);
}
