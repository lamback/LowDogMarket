package com.javaWeb.lowDog.service;

import org.springframework.stereotype.Service;

@Service
public interface TypeInMarketService {
    /*
        删除商品时，可能需要删除种类
     */
    Boolean deleteTypeInMarket(String type,String seller);
}
