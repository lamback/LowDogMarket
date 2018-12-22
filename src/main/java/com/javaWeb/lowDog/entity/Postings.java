package com.javaWeb.lowDog.entity;

import java.sql.Date;

public class Postings {
    private int postingsid;
    private String username;
    private String comments;
    private Date postingsdate;
    private int praise;

    public int getPostingsid() {
        return postingsid;
    }

    public void setPostingsid(int postingsid) {
        this.postingsid = postingsid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Date getPostingsdate() {
        return postingsdate;
    }

    public void setPostingsdate(Date postingsdate) {
        this.postingsdate = postingsdate;
    }

    public int getPraise() {
        return praise;
    }

    public void setPraise(int praise) {
        this.praise = praise;
    }
}
