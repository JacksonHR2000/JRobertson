package org.example.bucketlist.service;

import org.example.bucketlist.entity.BucketListItem;
import org.example.bucketlist.repository.BucketListRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;


@AllArgsConstructor
@Service
public class BucketListService {

    private final BucketListRepo bucketListRepo;

    // Return a list of all bucket items
    public List<BucketListItem>getAllItems() {
        return bucketListRepo.findAll();
    }


}
