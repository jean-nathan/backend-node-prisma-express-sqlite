-- CreateTable
CREATE TABLE "products_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    CONSTRAINT "products_categories_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_categories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_categories" ("id", "name") SELECT "id", "name" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
