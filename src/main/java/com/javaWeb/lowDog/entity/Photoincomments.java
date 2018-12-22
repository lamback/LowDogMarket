package com.javaWeb.lowDog.entity;

public class Photoincomments {
    private int photoincommentsid;
    private int commentsid;
    private String photo;

    public int getPhotoincommentsid() {
        return photoincommentsid;
    }

    public void setPhotoincommentsid(int photoincommentsid) {
        this.photoincommentsid = photoincommentsid;
    }

    public int getCommentsid() {
        return commentsid;
    }

    public void setCommentsid(int commentsid) {
        this.commentsid = commentsid;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
