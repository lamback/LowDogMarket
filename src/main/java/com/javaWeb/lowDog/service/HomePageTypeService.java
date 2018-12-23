package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.Homepagetype;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface HomePageTypeService {
    /*
        进入首页，展示种类
     */
    List<Homepagetype> getTypeListInHomePage();

    /*
       添加首页中的种类
    */
    Boolean addTypesToHomePage(String type);
}
