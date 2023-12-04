// controllers/CreateCategoryController.ts

import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    try {
      // Extrai informações do corpo do pedido (o que o cliente enviou).
      const { name } = request.body;

      console.log("Corpo da solicitação:", request.body);

      // Usa o Prisma Client para criar um novo registro de produto no banco de dados SQLite.
      // Estamos passando os detalhes do novo produto (nome, código de barras e preço) como dados para o Prisma Client.
      const category = await prismaClient.category.create({
        data: {
          name,
        },
      });

      console.log("Categoria criada com sucesso:", category);

      // Prepara uma resposta para o cliente (geralmente contendo os detalhes do novo produto criado).
      return response.json(category);
    } catch (error) {
      console.error("Erro ao criar categoria:", error);

      // Adicione um retorno de erro para a solicitação
      return response
        .status(500)
        .json({ error: "Erro interno ao criar categoria" });
    }
  }
}
