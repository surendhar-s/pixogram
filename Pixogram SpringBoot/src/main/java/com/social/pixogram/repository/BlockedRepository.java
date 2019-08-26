package com.social.pixogram.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.social.pixogram.model.Blocked;

public interface BlockedRepository extends CrudRepository<Blocked, Long>{

	@Transactional
	@Modifying
	@Query(value = "Delete from Blocked b where b.userId like ?1 and b.blockedId like ?2")
	void unBlockUser(long id, long blockedId);
}
