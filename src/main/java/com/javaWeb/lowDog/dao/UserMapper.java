package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {
    @Select("select * from user")
    List<User> SelectAllUser();

    @Select("select * from user where username=#{username}")
    User SelectUserByUserName(String username);

    @Select("select username from user")
    List<String> getAllUserName();

    @Insert("insert into user(username,password,usertype,gender,phone,address) values(#{username},#{password},#{usertype},#{gender},#{phone},#{address}")
    Boolean addNormalUser(User user);

    @Insert("insert into user(username,password,usertype,phone,address) values(#{username},#{password},#{usertype},#{phone},#{address}")
    Boolean addSeller(String username,String password,Integer usertype,String phone,String address);

    @Select("select * from user where usertype=1")
    List<User>  getAllSellers();

    @Delete("delete from user where username=#{username}")
    Boolean deleteSellerByUsername(String username);
}
