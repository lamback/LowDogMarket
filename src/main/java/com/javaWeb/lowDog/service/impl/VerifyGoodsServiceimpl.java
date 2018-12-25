package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.GoodsMapper;
import com.javaWeb.lowDog.dao.TypeInMarketMapper;
import com.javaWeb.lowDog.dao.UserMapper;
import com.javaWeb.lowDog.dao.VerifyGoodsMapper;
import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.entity.Verifygoods;
import com.javaWeb.lowDog.service.VerifyGoodsService;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class VerifyGoodsServiceimpl implements VerifyGoodsService {
    @Resource
    VerifyGoodsMapper verifyGoodsMapper;

    @Resource
    UserMapper userMapper;

    @Resource
    GoodsMapper goodsMapper;

    @Resource
    TypeInMarketMapper typeInMarketMapper;

    @Override
    public Boolean addGoods(Verifygoods verifygoods) {
        return verifyGoodsMapper.addGoods(verifygoods);
    }

    @Override
    public User SelectUserByUserName(String username) {
        return userMapper.SelectUserByUserName(username);
    }

    @Override
    public List<Verifygoods> showAllVerifyGoods() {
        return verifyGoodsMapper.showAllVerifyGoods();
    }

    @Override
    public void verifyGoods(int goodsid, int status,String username) {
        if(status==0){
            Verifygoods verifygoods=verifyGoodsMapper.selectVerifyGoods(goodsid);
            goodsMapper.AddGoods(verifygoods);
            String type=verifygoods.getType();
            if (!typeInMarketMapper.selectAllType().contains(type))
            {
                typeInMarketMapper.addTypeToMarket(username,type);
            }
            verifyGoodsMapper.deletePassGoods(goodsid);
        }
    }
}
