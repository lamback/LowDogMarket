package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.TypeInMarketMapper;
import com.javaWeb.lowDog.entity.Typeinmarket;
import com.javaWeb.lowDog.service.TypeInMarketService;
import org.apache.ibatis.annotations.Mapper;

import javax.annotation.Resource;
import java.util.List;

@Mapper
public class TypeInMarketServiceimpl implements TypeInMarketService {
    @Resource
    TypeInMarketMapper typeInMarketMapper;


    @Override
    public Boolean deleteTypeInMarket(String type,String seller) {
        return typeInMarketMapper.deleteTypeInMarket(type,seller);
    }

    @Override
    public List<Typeinmarket> allTypesInMarket(String username) {
        return typeInMarketMapper.allTypesInMarket(username);
    }

}
