package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.Typeinmarket;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TypeInMarketService {
    /*
        删除商品时，可能需要删除种类
     */
    Boolean deleteTypeInMarket(String type,String seller);

    /*
        进入商家首页，查询所有种类，进行展示
     */
    List<Typeinmarket> allTypesInMarket(String username);
}
