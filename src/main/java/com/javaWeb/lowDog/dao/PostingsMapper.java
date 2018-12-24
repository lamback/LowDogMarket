package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Postings;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import javax.websocket.server.ServerEndpoint;
import java.util.List;

@Mapper
public interface PostingsMapper {
    @Select("select * from postings")
    List<Postings> getAllPostings();
}
