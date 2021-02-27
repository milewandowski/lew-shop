package com.lewandowski.shoplew.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.persistence.EntityManager;
import java.util.stream.Collectors;

@Configuration
public class RepositoryRestConfig implements RepositoryRestConfigurer {

    private final EntityManager entityManager;

    @Autowired
    public RepositoryRestConfig(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()
                            .map(e -> e.getJavaType()).collect(Collectors.toList()).toArray(new Class[0]));
    }
}
