package com.javaWeb.lowDog.service;


import com.javaWeb.lowDog.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    /*
        返回所有用户
        用于登录验证
     */
    List<User> SelectAllUser();


    /*
        返回所有用户名
        用于注册验证用户名是否有重
     */
    List<String> getAllUserName();


    /*
        普通用户和商家注册
     */
    Boolean addNormalUser(User user);
    Boolean addSeller(String username,String password,Integer usertype,String phone,String address);

    /*
        获取所有商家
     */
    List<User>  getAllSellers();

//    /*
//        通过用户名查询，删除某个商家
//     */
//    Boolean deleteSellerByUsername(String username);
}
