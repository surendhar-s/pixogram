package com.social.pixogram.service;

import java.util.List;
import java.util.Optional;


import com.social.pixogram.model.User;


public interface UserService {

	public List<User> getUsers();
	
	public User createUser(User user);
	
	public Optional<User> getUserById(Long userId);
	
	public User checkUser(String name);

	public List<User> findByUserAndPassword(String username, String password);

	public List<User> searchUserByName(String value);
	
	public User updateUser(User user);
	
	public List<User> searchNotFollowed(long id, String value);
	
	public List<User> searchFollowed(long id, String value);
}
