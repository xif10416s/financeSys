package org.fxi.admin.controller;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.fxi.admin.bean.request.RegisterRequest;
import org.fxi.auth.entity.User;
import org.fxi.auth.entity.UserAuthority;
import org.fxi.auth.service.UserService;
import org.fxi.common.bean.reponse.Response;
import org.fxi.common.controller.BaseController;
import org.fxi.common.utils.UUIDGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by xifei on 16-5-10.
 */
@Controller
@RequestMapping(value="/admin", method= RequestMethod.POST)
public class AdminAccountController extends BaseController {
    @Autowired
    protected UserService userService;

    @RequestMapping(value="/test", method= RequestMethod.GET)
    public @ResponseBody
    Response logoutSuccess() {
        Response respBody = new Response();

        respBody.setCode(Response.SUCCESS);
        return respBody;
    }

    @RequestMapping("/addAdminUser")
    @Secured(UserAuthority.ROLE_ADMIN)
    public @ResponseBody Response addAdminUser(@RequestBody RegisterRequest requBody) {
        String email = requBody.getEmail();
        if (userService.getUserByEmail(email) != null) {
            String msg = messageResource.getMessage("auth.register.advertiserExisted", new Object[] {email}, locale);
            return new Response(Response.ILLEGAL_PARAM, msg);
        }
        User user = new User();
        user.setEmail(requBody.getEmail());
        user.setPhone(requBody.getPhone());
        user.setPassword(requBody.getPassword());
        user.setEnabled(true);
        List<String> auths = new ArrayList<>();
//        auths.addAll(Arrays.asList(requBody.getRole()));
        user.setAuthorities(auths);
        user.setUserId(UUIDGenerator.generate());
        user.setName(requBody.getName());
        userService.saveUser(user);
        return new Response(Response.SUCCESS);
    }
}
