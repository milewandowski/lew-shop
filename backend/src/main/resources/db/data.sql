INSERT INTO product_category(name) VALUES ('Snowboards');
INSERT INTO product_category(name) VALUES ('Snowboard Boots');
INSERT INTO product_category(name) VALUES ('Snowboard Bindings');

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('SNOWBOARD-1000', 'Salomon Super 8 Snowboard', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Donec et tincidunt mi, quis hendrerit nisi. Etiam rhoncus sagittis nisl, eget interdum nulla semper id. Nullam ex.', 'assets/images/products/placeholder.png', 1, 100, 399.99, 1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('SNOWBOARD-1001', 'Burton Custom Snowboard', 'Since 1996, this icon has reigned supreme and constantly evolved with a proven formula that combines time-honored design with envelope-pushing ingredients to create a lightweight, poppy, and highly versatile board.', 'assets/images/products/placeholder.png', 1, 100, 480.00, 1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('SNOWBOARD-1002', 'Burton Process Camber Snowboard', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Donec et tincidunt mi, quis hendrerit nisi. Etiam rhoncus sagittis nisl, eget interdum nulla semper id. Nullam ex.', 'assets/images/products/placeholder.png', 1, 100, 368.99, 1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('SNOWBOARD-1003', 'Burton Deep Thinker', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Donec et tincidunt mi, quis hendrerit nisi. Etiam rhoncus sagittis nisl, eget interdum nulla semper id. Nullam ex.', 'assets/images/products/placeholder.png', 1, 100, 468.99, 1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('SNOWBOARD-1004', 'Burton Free Thinker Camber Snowboard', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Donec et tincidunt mi, quis hendrerit nisi. Etiam rhoncus sagittis nisl, eget interdum nulla semper id. Nullam ex.', 'assets/images/products/placeholder.png', 1, 100, 430.00, 1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('SNOWBOARD-1005', 'Burton Family Tree 3D Snowboard', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Donec et tincidunt mi, quis hendrerit nisi. Etiam rhoncus sagittis nisl, eget interdum nulla semper id. Nullam ex.', 'assets/images/products/placeholder.png', 1, 100, 600.00, 1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('BOOTS-1000', 'ThirtyTwo Focus Boa Snowboard Boots', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Donec et tincidunt mi, quis hendrerit nisi. Etiam rhoncus sagittis nisl, eget interdum nulla semper id. Nullam ex.', 'assets/images/products/placeholder.png', 1, 50, 200.29, 2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('BOOTS-1001', 'Burton Photon Step On Snowboard Boots', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Donec et tincidunt mi, quis hendrerit nisi. Etiam rhoncus sagittis nisl, eget interdum nulla semper id. Nullam ex.', 'assets/images/products/placeholder.png', 1, 200, 380.99, 2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('BINDINGS-1000', 'Burton X Est Snowboard Bindings', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Donec et tincidunt mi, quis hendrerit nisi. Etiam rhoncus sagittis nisl, eget interdum nulla semper id. Nullam ex.', 'assets/images/products/placeholder.png', 1, 200, 350.00, 3, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created)
VALUES ('BINDINGS-1001', 'Bent Metal Corpro Snowboard Bindings', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at laoreet quam. Donec et tincidunt mi, quis hendrerit nisi. Etiam rhoncus sagittis nisl, eget interdum nulla semper id. Nullam ex.', 'assets/images/products/placeholder.png', 1, 200, 200.99, 3, NOW());


INSERT INTO country(code, name) VALUES('PL', 'Poland');
INSERT INTO country(code, name) VALUES('DK', 'Denmark');
INSERT INTO country(code, name) VALUES('CZ', 'Czech Republic');