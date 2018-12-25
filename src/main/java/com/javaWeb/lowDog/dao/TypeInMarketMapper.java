package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Typeinmarket;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface TypeInMarketMapper {
    @Delete("delete from typeinmarket where type=#{type} and username=#{seller}")
    Boolean deleteTypeInMarket(@Param("type") String type,@Param("seller") String seller);

    @Select("select * from typeinmarket where username=#{username}")
    List<Typeinmarket> allTypesInMarket(@Param("username") String username);

    @Select("select type from typeinmarket")
    List<String> selectAllType();

    @Insert("insert into typeinmarket(username,type) values(#{username},#{type})")
    Boolean addTypeToMarket(@Param("username") String username,@Param("type") String type);
}
