package com.javaWeb.lowDog;

import com.javaWeb.lowDog.dao.TypeInMarketMapper;
import com.javaWeb.lowDog.entity.Typeinmarket;
import com.javaWeb.lowDog.entity.User;
import com.javaWeb.lowDog.service.ShoppingCartService;
import com.javaWeb.lowDog.service.TypeInMarketService;
import com.javaWeb.lowDog.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringbootApplicationTests {
    @Resource
    UserService service;

    @Resource
    ShoppingCartService shoppingCartService;

    @Resource
    TypeInMarketMapper typeInMarketMapper;
    @Resource
    TypeInMarketService typeInMarketService;

    @Test
    public void test2(){
        List<Typeinmarket> typeinmarkets=typeInMarketService.allTypesInMarket("seller2");
        System.out.println(typeinmarkets.get(1).getType());
    }

    @Test
    public void contextLoads() {
        shoppingCartService.showCart(1);
    }

    @Test
    public void test(){
        for (User u:service.SelectAllUser()
        ) {
            System.out.println(u.getUsername());
        }
    }

}

