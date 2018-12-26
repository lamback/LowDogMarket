package com.javaWeb.lowDog.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.javaWeb.lowDog.entity.*;
import com.javaWeb.lowDog.service.PostingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

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
            temp.put("postingsid",postings.getPostingsid());
            temp.put("username",postings.getUsername());
            temp.put("comments",postings.getComments());
            temp.put("postingsdate",postings.getPostingsdate().toString());
            temp.put("praise",postings.getPraise());
            temp.put("photo1",postings.getPhoto1());
            temp.put("photo2",postings.getPhoto2());
            temp.put("photo3",postings.getPhoto3());
            temp.put("photo4",postings.getPhoto4());
            temp.put("photo5",postings.getPhoto5());
            temp.put("photo6",postings.getPhoto6());
            temp.put("radio",postings.getRadio());
            result.add(temp);
        }
        return result.toString();
    }


    /*
        点赞
     */
    @RequestMapping(value = "/changePraiseNumber",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public void changePraiseNumber(@RequestBody JSONObject data) {
        int postingsid=data.getInteger("postingsid");
        postingsService.changePraiseNumber(postingsid);
    }

    /*
      写评论
   */
    @RequestMapping(value = "/addPostings",method = RequestMethod.POST,produces = "application/json;charset=UTF-8")
    public void addPostings(@RequestBody JSONObject data, HttpSession session) {
       Postings postings=new Postings();

//       session.setAttribute("username","user1");
        postings.setUsername(session.getAttribute("username").toString());
        postings.setComments(data.getString("comments"));
        postings.setPostingsdate(Util.getTime());
        postings.setPraise(0);
        postings.setPhoto1(data.getString("photo1"));
        postings.setPhoto2(data.getString("photo2"));
        postings.setPhoto3(data.getString("photo3"));
        postings.setPhoto4(data.getString("photo4"));
        postings.setPhoto5(data.getString("photo5"));
        postings.setPhoto6(data.getString("photo6"));

        postingsService.addPostings(postings);
    }
}
