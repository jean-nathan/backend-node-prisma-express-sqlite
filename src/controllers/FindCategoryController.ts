import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class FindCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const category = await prismaClient.category.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: true,
      },
    });
    return response.json(category);
  }
}
