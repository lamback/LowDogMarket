package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.Homepagetype;
import com.javaWeb.lowDog.service.HomePageTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HomePageTypeController {
    @Autowired
    HomePageTypeService homePageTypeService;

    /*
        首页展示所有种类
     */
    @RequestMapping(value = "/getTypeListInHomePage",method = RequestMethod.POST,produces ="application/json;charset=UTF-8" )
    public String  getTypeListInHomePage(){
            JSONArray result=new JSONArray();
            for (Homepagetype homepagetype:homePageTypeService.getTypeListInHomePage()
            ) {
                JSONObject temp=new JSONObject();
                temp.put("type",homepagetype.getType());
                result.add(temp);
            }

            return result.toString();
    }

    /*
        添加首页种类
     */
    @RequestMapping(value = "/addTypesToHomePage",method = RequestMethod.POST,produces ="application/json;charset=UTF-8" )
    public String  addTypesToHomePage(@RequestBody JSONObject data){
        JSONObject result=new JSONObject();
       String type=data.getString("type");

       if(homePageTypeService.addTypesToHomePage(type)){
           result.put("status",1);
           return result.toString();
       }
       result.put("status",0);
        return result.toString();
    }
}
