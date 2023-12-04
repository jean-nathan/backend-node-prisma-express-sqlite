-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "products_categories_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_categories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products_categories" ("id", "id_category", "id_product") SELECT "id", "id_category", "id_product" FROM "products_categories";
DROP TABLE "products_categories";
ALTER TABLE "new_products_categories" RENAME TO "products_categories";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
