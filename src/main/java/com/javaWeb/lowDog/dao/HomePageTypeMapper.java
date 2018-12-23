package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Homepagetype;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface HomePageTypeMapper {

    @Select("select * from homepagetype")
    List<Homepagetype> getTypeListInHomePage();

    @Insert("insert into homepagetype(type) values(#{type})")
    Boolean addTypesToHomePage(String type);
}
