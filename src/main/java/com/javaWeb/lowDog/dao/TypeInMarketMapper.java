package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Typeinmarket;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TypeInMarketMapper {
    @Delete("delete from typeinmarket where type=#{type} and username=#{seller}")
    Boolean deleteTypeInMarket(@Param("type") String type,@Param("seller") String seller);

    @Select("select * from typeinmarket where username=#{username}")
    List<Typeinmarket> allTypesInMarket(@Param("username") String username);
}
