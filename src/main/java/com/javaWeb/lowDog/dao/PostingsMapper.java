package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Postings;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import javax.websocket.server.ServerEndpoint;
import java.util.List;

@Mapper
public interface PostingsMapper {
    @Select("select * from postings")
    List<Postings> getAllPostings();

    @Update("update postings set praise=praise+1 where postingsid=#{postingsid}")
    Boolean changePraiseNumber(@Param("postingsid") int postingsid);
}
