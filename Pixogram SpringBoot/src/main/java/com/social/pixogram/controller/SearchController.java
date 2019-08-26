package com.social.pixogram.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.social.pixogram.model.User;
import com.social.pixogram.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SearchController {

	@Autowired
	UserService userService;

	@GetMapping(path = "/search/{value}")
	public List<User> search(@PathVariable String value) {
		List<User> list = userService.searchUserByName(value);
		if (list.isEmpty())
			return null;
		return list;
	}

	@GetMapping("/search/newfollow/{userId}/{value}")
	public List<User> searchNotFollowed(@PathVariable("userId") long userId, @PathVariable("value") String value) {
		List<User> list = userService.searchNotFollowed(userId, value);
		return list;
	}

	@GetMapping("/search/alreadyFollow/{userId}/{value}")
	public List<User> searchFollowed(@PathVariable("userId") long userId, @PathVariable("value") String value) {
		System.out.println("Inside search follow");
		List<User> list = userService.searchFollowed(userId, value);
		return list;
	}
}
