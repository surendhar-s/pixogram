package com.social.pixogram.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.social.pixogram.model.Blocked;
import com.social.pixogram.service.BlockedService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BlockedController {

	@Autowired
	BlockedService blockedService;

	@GetMapping(path = "/blocked/{userId}")
	public List<Blocked> getBlockedUsers(@PathVariable Long userId) {
		List<Blocked> blocked = blockedService.getAllBlocked();
		List<Blocked> blocked1 = new ArrayList<>();
		for (Blocked block : blocked) {
			if (block.getUserId() == userId) {
				blocked1.add(block);
			}
		}
		return blocked1;
	}

	@DeleteMapping(path = "/unblock/{userId}/{blockedId}")
	public ResponseEntity<String> unblockUser(@PathVariable("userId") long userId,
			@PathVariable("blockedId") Long blockedId) {
		blockedService.unblockUser(userId, blockedId);
		return new ResponseEntity<>("User has been unblocked", HttpStatus.OK);
	}

	@PostMapping(path = "/block")
	public Blocked blockUser(@RequestBody Blocked block) {
		blockedService.blockUser(block);
		return block;
	}

}
