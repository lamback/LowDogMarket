package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.ShoppingCartMapper;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Shoppingcart;
import com.javaWeb.lowDog.service.ShoppingCartService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

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

    @Override
    public Goods showCart(int goodsid) {
        return shoppingCartMapper.showCart(goodsid);
    }

    @Override
    public List<Shoppingcart> getAllGoodsID(String username) {
        return shoppingCartMapper.getAllGoodsID(username);
    }

    @Override
    public Boolean changeNumberInCart(int goodsid,int action) {
        if (action==0) {
            if (shoppingCartMapper.getNumber(goodsid)>0)
            shoppingCartMapper.minusNumber(goodsid);
        }
        else{
            if (action==1){
                shoppingCartMapper.addNumber(goodsid);
            }
            else
                shoppingCartMapper.deleteGoodsInCart(goodsid);
        }
        return true;
    }

    @Override
    public int getNumber(int goodsid) {
        return shoppingCartMapper.getNumber(goodsid);
    }

    @Override
    public Boolean deleteGoodsInCart(int goodsid) {
        return shoppingCartMapper.deleteGoodsInCart(goodsid);
    }


}
