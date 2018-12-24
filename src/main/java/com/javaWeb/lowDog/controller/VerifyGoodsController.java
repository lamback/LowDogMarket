package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.entity.Verifygoods;
import com.javaWeb.lowDog.service.VerifyGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
public class VerifyGoodsController {
    @Autowired
    VerifyGoodsService verifyGoodsService;

    /*
        添加商品
     */
    @RequestMapping(value = "/addGoods",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public void addGoods(@RequestBody JSONObject data,HttpSession session) {

//        session.setAttribute("username","aaa");
        String username=session.getAttribute("username").toString();
        User user=verifyGoodsService.SelectUserByUserName(username);
        Verifygoods verifygoods=new Verifygoods();

//        verifygoods.setGoodsid(data.getInteger("goodsid"));
        verifygoods.setName(data.getString("name"));
        verifygoods.setType(data.getString("type"));
        verifygoods.setPhoto(data.getString("photo"));
        verifygoods.setPhoto2(data.getString("photo2"));
        verifygoods.setPhoto3(data.getString("photo3"));
        verifygoods.setPhoto4(data.getString("photo4"));
        verifygoods.setInformation(data.getString("information"));
        verifygoods.setPrice(data.getFloat("price"));
        verifygoods.setSeller(user.getUsername());
        verifygoods.setAddress(user.getAddress());

        verifyGoodsService.addGoods(verifygoods);
    }

    /*
        显示所有待审核商品
     */
    @RequestMapping(value = "/showAllVerifyGoods",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String  showAllVerifyGoods  () {
        JSONArray result=new JSONArray();

        for (Verifygoods verifygoods:verifyGoodsService.showAllVerifyGoods()
             ) {
            JSONObject temp=new JSONObject();
            temp.put("name",verifygoods.getName());
            temp.put("type",verifygoods.getType());
            temp.put("photo",verifygoods.getPhoto());
            temp.put("information",verifygoods.getInformation());
            temp.put("price",verifygoods.getPrice());
            temp.put("seller",verifygoods.getSeller());
            temp.put("address",verifygoods.getAddress());

            result.add(temp);
        }
        return result.toString();
    }

    /*
      商品审核
   */
    @RequestMapping(value = "/verifyGoods",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public void   verifyGoods(@RequestBody JSONObject data,HttpSession session) {
//        session.setAttribute("username","aaa");
        String username=session.getAttribute("username").toString();
       int status=data.getInteger("status");
       int goodsid=data.getInteger("goodsid");
       verifyGoodsService.verifyGoods(goodsid,status,username);
    }

}
