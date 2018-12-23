package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.dao.UserMapper;
import com.javaWeb.lowDog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;


@Service
public class UserServiceImpl implements UserService {
//    @Autowired
    @Resource
    UserMapper userMapper;

    @Override
    public List<User> SelectAllUser() {
        return userMapper.SelectAllUser();
    }

    @Override
    public Boolean addNormalUser(User user) {
        return userMapper.addNormalUser(user);
    }

    @Override
    public Boolean addSeller(String username, String password, Integer usertype, String phone, String address) {
        return userMapper.addSeller(username,password,usertype,phone,address);
    }

    @Override
    public List<User> getAllSellers() {
        return userMapper.getAllSellers();
    }

    @Override
    public Boolean deleteSeller(String username) {
        userMapper.deleteGoodsBySeller(username);
        return userMapper.deleteSellerByUsername(username);
    }



    @Override
    public List<String> getAllUserName() {
        return userMapper.getAllUserName();
    }
}
