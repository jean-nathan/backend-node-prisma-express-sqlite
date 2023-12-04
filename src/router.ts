import { Router } from "express";
import {
  CreateProductController,
  GetProductsController,
  ProductModel,
} from "./controllers/CreateProductController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { ProductCategoryController } from "./controllers/ProductCategoryController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory"; // <-- Esse daqui
import { FindProductController } from "./controllers/FindProductController";
import { FindCategoryController } from "./controllers/FindCategoryController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const getProductsController = new GetProductsController();
const getOneProduct = new ProductModel();
const createProductCategory = new ProductCategoryController();
const createProductWithExistCategory = new CreateProductWithExistCategory();
const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.get("/products", getProductsController.findAll);
//router.get("/product/:id", getOneProduct.findOne);
router.post("/productCategory", createProductCategory.handle);
router.post("/productWithCategory", createProductWithExistCategory.handle);
router.get("/product/:id", findProduct.handle);
router.get("/category/:id", findCategory.handle);

export { router };
