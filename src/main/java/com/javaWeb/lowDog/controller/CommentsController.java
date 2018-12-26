package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.Comments;
import com.javaWeb.lowDog.entity.Goods;
import com.javaWeb.lowDog.entity.Util;
import com.javaWeb.lowDog.service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Date;

@RestController
public class CommentsController {
    @Autowired
    CommentsService commentsService;

    /*
         点击商品，进入详情展示评论
     */
    @RequestMapping(value = "/getCommentsByGoodsID",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public String getCommentsByGoodsID(@RequestBody JSONObject data) {
        JSONArray result=new JSONArray();
        int goodsid=data.getInteger("goodsid");
        for (Comments comments:commentsService.getCommentsByGoodsID(goodsid)
        ) {
            JSONObject temp=new JSONObject();
            temp.put("commentsid",comments.getCommentsid());
            temp.put("goodsid",comments.getGoodsid());
            temp.put("comments",comments.getComments());
            temp.put("username",comments.getUsername());
            temp.put("commentsdate",comments.getCommentsdate().toString());
            temp.put("photo1",comments.getPhoto1());
            temp.put("photo2",comments.getPhoto2());
            temp.put("photo3",comments.getPhoto3());
            temp.put("photo4",comments.getPhoto4());
            temp.put("photo5",comments.getPhoto5());
            temp.put("photo6",comments.getPhoto6());

            result.add(temp);
        }
        return result.toString();
    }

    /*
        写评论
     */
    @RequestMapping(value = "/writeComment",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public void writeComment(@RequestBody JSONObject data, HttpSession session) {
        Comments comments = new Comments();
//        comments.setCommentsid(data.getInteger("commentsid"));
        comments.setGoodsid(data.getInteger("goodsid"));
        comments.setComments(data.getString("comments"));
//        session.setAttribute("username","seller");
        comments.setUsername(session.getAttribute("username").toString());

        comments.setCommentsdate(Util.getTime());
        comments.setPhoto1(data.getString("photo1"));
        comments.setPhoto2(data.getString("photo2"));
        comments.setPhoto3(data.getString("photo3"));
        comments.setPhoto4(data.getString("photo4"));
        comments.setPhoto5(data.getString("photo5"));
        comments.setPhoto6(data.getString("photo6"));

        commentsService.writeComment(comments);
    }
}
