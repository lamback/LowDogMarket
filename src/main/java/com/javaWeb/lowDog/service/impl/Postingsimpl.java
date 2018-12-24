package com.javaWeb.lowDog.service.impl;

import com.javaWeb.lowDog.dao.PostingsMapper;
import com.javaWeb.lowDog.entity.Postings;
import com.javaWeb.lowDog.service.PostingsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class Postingsimpl implements PostingsService {
    @Resource
    PostingsMapper postingsMapper;


    @Override
    public List<Postings> getAllPostings() {
        return postingsMapper.getAllPostings();
    }
}
