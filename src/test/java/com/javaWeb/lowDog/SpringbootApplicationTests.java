package com.javaWeb.lowDog;

import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringbootApplicationTests {
    @Resource
    UserService service;

    @Test
    public void contextLoads() {

    }

    @Test
    public void test(){
        for (User u:service.SelectAllUser()
        ) {
            System.out.println(u.getUsername());
        }
    }

}

