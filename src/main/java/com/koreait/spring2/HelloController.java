package com.koreait.spring2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
    @CrossOrigin
    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }

}
