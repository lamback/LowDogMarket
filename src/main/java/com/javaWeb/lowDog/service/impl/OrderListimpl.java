package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.OrderListMapper;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Orderlist;
import com.javaWeb.lowDog.service.OrderListService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class OrderListimpl implements OrderListService {
    @Resource
    OrderListMapper orderListMapper;


    @Override
    public List<Orderlist> getAllOrder() {
        return orderListMapper.getAllOrder();
    }

    @Override
    public Goods getGoodsInOrder(int goodsid) {
        return orderListMapper.getGoodsInOrder(goodsid);
    }
}
