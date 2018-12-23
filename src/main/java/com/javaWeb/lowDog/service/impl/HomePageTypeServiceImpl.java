package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.HomePageTypeMapper;
import com.javaWeb.lowDog.entity.Homepagetype;
import com.javaWeb.lowDog.service.HomePageTypeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class HomePageTypeServiceImpl implements HomePageTypeService {
    @Resource
    HomePageTypeMapper homePageTypeMapper;

    @Override
    public List<Homepagetype> getTypeListInHomePage() {
        return homePageTypeMapper.getTypeListInHomePage();
    }

    @Override
    public Boolean addTypesToHomePage(String type) {
        for (Homepagetype h:homePageTypeMapper.getTypeListInHomePage()) {
            if (h.getType().equals(type))            //如果首页中不存在这个种类，添加
            {
                return false;
            }
        }
        homePageTypeMapper.addTypesToHomePage(type);
        return true;
    }
}
