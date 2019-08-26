package com.social.pixogram.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.social.pixogram.model.Blocked;
import com.social.pixogram.repository.BlockedRepository;

@Service
public class BlockedServiceImpl implements BlockedService{

	@Autowired
	BlockedRepository blockedRepo;

	@Override
	public List<Blocked> getAllBlocked() {
		return (List<Blocked>) blockedRepo.findAll();
	}

	@Override
	public void unblockUser(Long id, Long blockedId) {
		Blocked blocked = new Blocked(id, blockedId);
		blockedRepo.delete(blocked);
		blockedRepo.unBlockUser(id, blockedId);
		return;
	}

	@Override
	public Blocked blockUser(Blocked blocked) {
		return blockedRepo.save(blocked);
	}
	
	
}
