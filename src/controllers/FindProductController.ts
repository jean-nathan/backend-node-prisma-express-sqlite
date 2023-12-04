import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class FindProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const product = await prismaClient.product.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: true,
      },
    });
    return response.json(product);
  }
}
