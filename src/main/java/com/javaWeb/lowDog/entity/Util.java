package com.javaWeb.lowDog.entity;



import java.sql.Date;
import java.text.SimpleDateFormat;

/*
    工具类
 */
public class Util {
    public static Date getTime(){
        java.util.Date date1=new java.util.Date();
        SimpleDateFormat dateFormat=new SimpleDateFormat("YYYY-MM-dd");//设置当前时间的格式，为年-月-日
        java.sql.Date date = Date.valueOf(dateFormat.format(date1));
        System.out.println(date.toString());
        return date;
    }
}
