package com.javaWeb.lowDog.entity;

import java.sql.Date;


public class Comments {
    private int commentsid;
    private int goodsid;
    private String comments;
    private String username;
    private Date commentsdate;

    public int getCommentsid() {
        return commentsid;
    }

    public void setCommentsid(int commentsid) {
        this.commentsid = commentsid;
    }

    public int getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(int goodsid) {
        this.goodsid = goodsid;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getCommentsdate() {
        return commentsdate;
    }

    public void setCommentsdate(Date commentsdate) {
        this.commentsdate = commentsdate;
    }
}
