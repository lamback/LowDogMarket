package com.javaWeb.lowDog.dao;

import com.javaWeb.lowDog.entity.Comments;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CommentsMapper {
    @Select("select * from comments where goodsid=#{goodsid}")
    List<Comments> getCommentsByGoodsID(int goodsid);

    @Insert("insert into comments(commentsid,goodsid,comments,username,commentsdate,photo1,photo2,photo3,photo4,photo5,photo6) values(#{commentsid},#{goodsid},#{comments},#{username},#{commentsdate},#{photo1},#{photo2},#{photo3},#{photo4},#{photo5},#{photo6})")
    Boolean writeComment(Comments comments);

}
