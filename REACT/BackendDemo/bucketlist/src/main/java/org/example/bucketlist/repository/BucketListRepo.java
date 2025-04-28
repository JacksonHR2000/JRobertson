package org.example.bucketlist.repository;
import org.example.bucketlist.entity.BucketListItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BucketListRepo extends JpaRepository<BucketListItem, Long> {
// Gives us a bunch of free functionality
}
