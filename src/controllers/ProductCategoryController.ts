import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class ProductCategoryController {
  async handle(request: Request, response: Response) {
    const { id_product, id_category } = request.body;

    const productCategory = await prismaClient.productCategory.create({
      data: {
        id_product,
        id_category,
      },
    });

    return response.json(productCategory);
  }
}
