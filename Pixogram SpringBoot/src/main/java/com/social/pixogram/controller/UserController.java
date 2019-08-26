package com.social.pixogram.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.social.pixogram.model.User;
import com.social.pixogram.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping(path = "/users")
	public List<User> getUsers() {
		//System.out.println("Get all Users...");
		return userService.getUsers();
	}

	@PostMapping(path = "/user/create")
	public User createUser(@RequestBody User user) {
		//System.out.println("Creating User");
		User _user = userService.createUser(user);
		return _user;
	}

	@GetMapping(path = "/user/{userId}")
	public Optional<User> getUserById(@PathVariable Long userId) {
		//System.out.println("Get user with id " + userId);
		return userService.getUserById(userId);
	}

	@GetMapping(path = "/user/check/{username}")
	public boolean checkUser(@PathVariable String username) {
		User user = userService.checkUser(username);
		if (user == null) {
			return true;
		} else
			return false;
	}

	@PostMapping(path = "/user/{username}/{password}")
	public User checkLogin(@PathVariable("username") String username,
			@PathVariable("password") String password) {
		//System.out.println("checklogin");
		List<User> user = userService.findByUserAndPassword(username, password);
		if (user != null) {
			return user.get(0);
		}

		return null;
	}
	
	@PostMapping(path = "/user/update")
	public User updateUser(@RequestBody User user) {
		//System.out.println("Update User");
		User user2 = userService.updateUser(user);
		return user2;
	}

}
