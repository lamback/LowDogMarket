package com.javaWeb.lowDog.entity;

public class Postingsphoto {
    private int id;
    private int postingsid;
    private String photo;
    private String radio;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPostingsid() {
        return postingsid;
    }

    public void setPostingsid(int postingsid) {
        this.postingsid = postingsid;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getRadio() {
        return radio;
    }

    public void setRadio(String radio) {
        this.radio = radio;
    }
}
