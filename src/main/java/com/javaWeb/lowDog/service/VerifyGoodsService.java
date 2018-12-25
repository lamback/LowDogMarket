package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.entity.Verifygoods;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface VerifyGoodsService {

    /*
        添加商品
     */
    Boolean addGoods(Verifygoods verifygoods);
    User SelectUserByUserName(String username);

    /*
        显示所有待审核商品
     */
    List<Verifygoods> showAllVerifyGoods();

    /*
        商品审核
     */
    void verifyGoods(int goodsid,int status,String username);
}
