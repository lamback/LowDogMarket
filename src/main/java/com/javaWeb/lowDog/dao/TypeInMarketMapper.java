package com.javaWeb.lowDog.dao;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TypeInMarketMapper {
    @Delete("delete from typeinmarket where type=#{type} and username=#{seller}")
    Boolean deleteTypeInMarket(@Param("type") String type,@Param("seller") String seller);
}
