package com.social.pixogram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.social.pixogram.model.User;

public interface UserRepository extends CrudRepository<User, Long>{
	
	@Query(value ="select u from User u where u.name like ?1")
	public User checkUser(String username);
	
	@Query(value ="Select u from User u where u.name like ?1 and u.password like ?2")
    List<User> findByUserAndPassword( String username, String password);

	@Query(value="Select u from User u where u.name like %?1%")
	public List<User> serachUserByName(String value);
	
	@Query(value = "Select u from User u where u.id not in(Select f.followId from Follow f where f.userId like ?1 ) and u.id not in(select b.blockedId from Blocked b where b.userId like ?1) and u.name like %?2%")
    public List<User> searchNotFollowed(long id, String value);

	@Query(value = "Select u from User u where u.id in (select f.followId from Follow f where f.userId like ?1) and u.name like %?2%")
	public List<User> searchFollowed(long id, String value);
	
}
