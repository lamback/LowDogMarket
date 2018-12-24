package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Orderlist;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderListService {

    /*
        获取订单信息
     */
    List<Orderlist> getAllOrder();
    Goods getGoodsInOrder(int goodsid);

    /*
        提交订单
     */
    Boolean addToOrder(Orderlist orderlist);
}
