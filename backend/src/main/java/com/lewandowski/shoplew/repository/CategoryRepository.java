package com.lewandowski.shoplew.repository;

import com.lewandowski.shoplew.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "category", path = "category")
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
