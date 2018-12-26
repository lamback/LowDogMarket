package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Postings;
import org.apache.ibatis.annotations.*;

import javax.websocket.server.ServerEndpoint;
import java.util.List;

@Mapper
public interface PostingsMapper {
    @Select("select * from postings")
    List<Postings> getAllPostings();

    @Update("update postings set praise=praise+1 where postingsid=#{postingsid}")
    Boolean changePraiseNumber(@Param("postingsid") int postingsid);

    @Insert("insert into postings values(#{postingsid},#{username},#{comments},#{postingsdate},#{praise},#{photo1},#{photo2},#{photo3},#{photo4},#{photo5},#{photo6},#{radio})")
    Boolean addPostings(Postings postings);

}
