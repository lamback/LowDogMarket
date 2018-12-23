package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.Comments;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentsService {
    /*
        点击商品，进入详情展示评论
     */
    List<Comments> getCommentsByGoodsID(int goodsid);

    /*
        写评论
     */
    Boolean writeComment(Comments comments);
}
