package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.CommentsMapper;
import com.javaWeb.lowDog.entity.Comments;
import com.javaWeb.lowDog.service.CommentsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class Commentsimpl implements CommentsService {
    @Resource
    CommentsMapper commentsMapper;

    @Override
    public List<Comments> getCommentsByGoodsID(int goodsid) {
        return commentsMapper.getCommentsByGoodsID(goodsid);
    }

    @Override
    public Boolean writeComment(Comments comments) {
        return commentsMapper.writeComment(comments);
    }
}
