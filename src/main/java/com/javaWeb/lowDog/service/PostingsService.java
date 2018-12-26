package com.javaWeb.lowDog.service;

import com.javaWeb.lowDog.entity.Postings;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostingsService {
    /*
        进入微淘板块，展示所有帖子
     */
    List<Postings> getAllPostings();

    /*
        点赞
     */
    Boolean changePraiseNumber(int postingsid);

    /*
        发帖子
     */
    Boolean addPostings(Postings postings);
}
