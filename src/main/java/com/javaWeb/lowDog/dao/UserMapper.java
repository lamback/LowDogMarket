package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {
    @Select("select * from user")
    List<User> SelectAllUser();

    @Select("select * from user where username=#{username}")
    User SelectUserByUserName(String username);

    @Select("select username from user")
    List<String> getAllUserName();

    @Insert("insert into user (username,password,usertype,gender,phone,address) values(#{username},#{password},#{usertype},#{gender},#{phone},#{address})")
    Boolean addNormalUser(User user);

    //参数最好带上@Param标签
    @Insert("insert into user (username,password,usertype,phone,address) values(#{username},#{password},#{usertype},#{phone},#{address})")
    Boolean addSeller(@Param("username") String username, @Param("password")String password, @Param("usertype")Integer usertype, @Param("phone")String phone, @Param("address")String address);

    @Select("select * from user where usertype=1")
    List<User>  getAllSellers();

    @Delete("delete from user where username=#{username}")
    Boolean deleteSellerByUsername(String username);

    @Delete("delete from goods where seller=#{username}")
    Boolean deleteGoodsBySeller(String username);


}
