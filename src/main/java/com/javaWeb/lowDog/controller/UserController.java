package com.javaWeb.lowDog.controller;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;


@RestController
public class UserController {
    @Autowired
    private UserService userService;

    /*
        登录验证
     */
    @RequestMapping(value = "/login",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String login(@RequestBody JSONObject data,HttpSession session){
        JSONObject result=new JSONObject();
        String username=data.getString("username");
        String password=data.getString("password");
        int flag=0;         //记录查询结果
        for (User user:userService.SelectAllUser()
             ) {
            if(user.getUsername().equals(username))
            {
                if(user.getPassword().equals(password))
                {
                    if (user.getUsertype()==1){
                        session.setAttribute("userName",username);
                        session.setAttribute("userType",user.getUsertype());
                        result.put("status",1);
                        return result.toString();   //商家
                    }
                    if (user.getUsertype()==2)
                    {
                        session.setAttribute("userName",username);        //登录成功，将用户名和用户类型存入session
                        session.setAttribute("userType",user.getUsertype());
                        result.put("status",2);
                        return result.toString();      //管理员
                    }
                    session.setAttribute("userName",username);
                    session.setAttribute("userType",user.getUsertype());
                    result.put("status",0);
                    return result.toString(); //普通用户
                }
            }
        }
        result.put("status",3);
        return result.toString();
    }

    /*
        注册
     */
    @RequestMapping(value = "/register",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String register(@RequestBody JSONObject data){
        JSONObject result=new JSONObject();
        System.out.println(data);
        for (String name:userService.getAllUserName()    //判断用户名是否被注册了
             ) {
            if(name.equals(data.getString("username"))){
                result.put("status",0);
                return result.toString();
            }
        }
        if(data.getString("gender")!= null)       //判断是普通用户还是商家注册
        {
            User user=new User();
            user.setUsername(data.getString("username"));
            user.setPassword(data.getString("password"));
            user.setUsertype(data.getInteger("usertype"));
            user.setGender(data.getString("gender"));
            user.setPhone(data.getString("phone"));
            user.setAddress(data.getString("address"));

            System.out.println(user.getUsername());
            if(userService.addNormalUser(user))          //注册普通用户
            {
              result.put("status",1);
              return result.toString();
            }
            result.put("status",0);
            return result.toString();
        }

        if(userService.addSeller(data.getString("username"),data.getString("password"),
                data.getInteger("usertype"),data.getString("phone"),data.getString("address")))   //商家注册
        {
            result.put("status",1);
            return result.toString();
        }

        result.put("status",0);
        return result.toString();
    }

    /*
        商家管理，展示所有商家
     */
    @RequestMapping(value = "/allSellers",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String allSellers(){
        JSONArray result=new JSONArray();
        for (User seller:userService.getAllSellers()
             ) {
            JSONObject temp=new JSONObject();
            temp.put("username",seller.getUsername());
            temp.put("phone",seller.getPhone());
            temp.put("address",seller.getAddress());
            result.add(temp);
        }
        return result.toString();
    }

    /*
        商家管理，删除某个商家,并删除该商家的所有商品
     */
    @RequestMapping(value = "/deleteSeller",method = RequestMethod.POST,produces ="application/json;charset=UTF-8" )
    public void deleteSeller(@RequestBody JSONObject data){
        String username=data.getString("username");
        userService.deleteSeller(username);

    }

}


