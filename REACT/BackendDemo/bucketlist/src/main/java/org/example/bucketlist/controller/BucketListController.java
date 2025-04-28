package org.example.bucketlist.controller;

import lombok.AllArgsConstructor;
import org.example.bucketlist.entity.BucketListItem;
import org.example.bucketlist.service.BucketListService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("")
@AllArgsConstructor
@RestController
@RequestMapping("/api/bucket")
public class BucketListController {

    private final BucketListService bucketListService;

    @GetMapping
    public ResponseEntity<List<BucketListItem>>getAllItems() {
        List<BucketListItem> bucketListItems = bucketListService.getAllItems();
        return ResponseEntity.ok(bucketListItems);
    }

    @PostMapping
    public ResponseEntity<BucketListItem>createTask(@RequestBody BucketListItem item) {
        return new ResponseEntity<>(new BucketListItem(), HttpStatus.CREATED);
    }


}
