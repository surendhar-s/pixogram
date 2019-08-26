package com.social.pixogram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.social.pixogram.model.Media;

public interface MediaRepository extends CrudRepository<Media, Long> {
	
	@Query(value="select m from Media m where m.userId in (select f.followId from Follow f where f.userId=?1)")
	public List<Media> getFollowingsMedia(long userId);

	@Query(value="select u.name from User u where u.id =?1")
	public String getUserName(long userId);

}
