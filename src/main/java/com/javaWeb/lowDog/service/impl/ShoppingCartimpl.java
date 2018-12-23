package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.ShoppingCartMapper;
import com.javaWeb.lowDog.entity.Shoppingcart;
import com.javaWeb.lowDog.service.ShoppingCartService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class ShoppingCartimpl implements ShoppingCartService {
    @Resource
    ShoppingCartMapper shoppingCartMapper;


    @Override
    public Boolean addGoodsToCart(Shoppingcart shoppingcart,int goodsid) {
        if(shoppingCartMapper.isInCart(goodsid)==1)
            return false;
        shoppingCartMapper.addGoodsToCart(shoppingcart);
        return true;
    }
}
