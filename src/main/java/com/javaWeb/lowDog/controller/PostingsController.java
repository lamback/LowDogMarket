package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Orderlist;
import com.javaWeb.lowDog.entity.Postings;
import com.javaWeb.lowDog.service.PostingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostingsController {
    @Autowired
    PostingsService postingsService;

    /*
        点击微淘，出现所有帖子
     */
    @RequestMapping(value = "/getAllPostings",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String getAllPostings() {
        JSONArray result=new JSONArray();
        for (Postings postings:postingsService.getAllPostings()
        ) {

            JSONObject temp=new JSONObject();


            result.add(temp);
        }
        return result.toString();
    }

}
