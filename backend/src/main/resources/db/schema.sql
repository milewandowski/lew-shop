CREATE DATABASE IF NOT EXISTS lewshop;
USE lewshop;

CREATE TABLE IF NOT EXISTS product_category (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NULL DEFAULT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS product (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sku VARCHAR(255) DEFAULT NULL,
    name VARCHAR(255) DEFAULT NULL,
    description VARCHAR(255) DEFAULT NULL,
    unit_price DECIMAL(13,2) DEFAULT NULL,
    image_url VARCHAR(255) DEFAULT NULL,
    active BIT DEFAULT 1,
    units_in_stock INT DEFAULT NULL,
    date_created DATETIME(6) DEFAULT NULL,
    last_updated DATETIME(6) DEFAULT NULL,
    category_id BIGINT NOT NULL,
    KEY fk_category (category_id),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES product_category (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS country (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NULL DEFAULT NULL,
    code VARCHAR(2) NULL DEFAULT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS address (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(255) DEFAULT NULL,
    country VARCHAR(255) DEFAULT NULL,
    street VARCHAR(255) DEFAULT NULL,
    zip_code VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS customer (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) DEFAULT NULL,
    last_name VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    phone_number VARCHAR(255) DEFAULT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS orders (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_tracking_number VARCHAR(255) DEFAULT NULL,
    total_price decimal(19,2) DEFAULT NULL,
    total_quantity int DEFAULT NULL,
    billing_address_id BIGINT DEFAULT NULL,
    customer_id BIGINT DEFAULT NULL,
    shipping_address_id BIGINT DEFAULT NULL,
    status VARCHAR(128) DEFAULT NULL,
    date_created datetime(6) DEFAULT NULL,
    last_updated datetime(6) DEFAULT NULL,
    UNIQUE KEY UK_billing_address_id (billing_address_id),
    UNIQUE KEY UK_shipping_address_id (shipping_address_id),
    KEY K_customer_id (customer_id),
    CONSTRAINT FK_customer_id FOREIGN KEY (customer_id) REFERENCES customer (id),
    CONSTRAINT FK_billing_address_id FOREIGN KEY (billing_address_id) REFERENCES address (id),
    CONSTRAINT FK_shipping_address_id FOREIGN KEY (shipping_address_id) REFERENCES address (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS order_item (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) DEFAULT NULL,
    quantity int DEFAULT NULL,
    unit_price decimal(19,2) DEFAULT NULL,
    order_id BIGINT DEFAULT NULL,
    product_id BIGINT DEFAULT NULL,
    KEY K_order_id (order_id),
    CONSTRAINT FK_order_id FOREIGN KEY (order_id) REFERENCES orders (id),
    CONSTRAINT FK_product_id FOREIGN KEY (product_id) REFERENCES product (id)
) ENGINE=InnoDB;
