package com.javaWeb.lowDog.entity;

import java.sql.Date;

public class Orderlist {
    private int orderid;
    private int goodsid;
    private String username;
    private int number;
    private Date buydate;
    private int iscomment;

    public int getOrderid() {
        return orderid;
    }

    public void setOrderid(int orderid) {
        this.orderid = orderid;
    }

    public int getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(int goodsid) {
        this.goodsid = goodsid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Date getBuydate() {
        return buydate;
    }

    public void setBuydate(Date buydate) {
        this.buydate = buydate;
    }

    public int getIscomment() {
        return iscomment;
    }

    public void setIscomment(int iscomment) {
        this.iscomment = iscomment;
    }
}
