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
        for (User user:userService.SelectAllUser()
             ) {
            if(user.getUsername().equals(username))
            {
                if(user.getPassword().equals(password))
                {
                    if (user.getUsertype()==1){
                        if (user.getUsertype()==2)
                        {
                            session.setAttribute("userName",username);        //登录成功，将用户名和用户类型存入session
                            session.setAttribute("userType",user.getUsertype());
                            return result.put("status",2).toString();      //管理员
                        }
                        session.setAttribute("userName",username);
                        session.setAttribute("userType",user.getUsertype());
                        return result.put("status",1).toString();    //商家
                    }
                    session.setAttribute("userName",username);
                    session.setAttribute("userType",user.getUsertype());
                    return result.put("status",0).toString();  //普通用户
                }
                return result.put("status",3).toString();   //账号错误
            }
            return result.put("status",3).toString();
        }
        return result.put("status",3).toString();
    }

    /*
        注册
     */
    @RequestMapping(value = "/register",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String register(@RequestBody JSONObject data){
        JSONObject result=new JSONObject();
        for (String name:userService.getAllUserName()    //判断用户名是否被注册了
             ) {
            if(name.equals(data.getString("username")))
                return result.put("status",0).toString();
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

            if(userService.addNormalUser(user))          //注册普通用户
                return result.put("status",1).toString();
            return result.put("status",0).toString();
        }

        if(userService.addSeller(data.getString("username"),data.getString("password"),
                data.getInteger("usertype"),data.getString("phone"),data.getString("address")))   //商家注册
            return result.put("status",1).toString();
        return result.put("status",0).toString();
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
        return result.toJSONString();
    }

    /*
        商家管理，删除某个商家
     */

}


