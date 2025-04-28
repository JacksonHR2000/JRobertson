package org.example.bucketlist.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="bucketlist_items")
public class BucketListItem {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private String description;

    private boolean isComplete;
}
