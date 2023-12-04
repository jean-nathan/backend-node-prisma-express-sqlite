// um controlador age como um intermediário entre o cliente (quem faz pedidos) e o banco de dados
// (onde as informações são armazenadas). Ele recebe as solicitações do cliente, executa ações com base
// nessas solicitações e retorna as respostas apropriadas para o cliente.
// Dessa forma, o controlador ajuda a gerenciar as interações entre a aplicação e o banco de dados,
// garantindo que as solicitações do cliente sejam atendidas corretamente.

import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    // Extrai informações do corpo do pedido (o que o cliente enviou).
    const { name, bar_code, price } = request.body;

    // Usa o Prisma Client para criar um novo registro de produto no banco de dados SQLite.
    // Estamos passando os detalhes do novo produto (nome, código de barras e preço) como dados para o Prisma Client.
    const product = await prismaClient.product.create({
      data: {
        bar_code,
        name,
        price,
      },
    });
    // Prepara uma resposta para o cliente (geralmente contendo os detalhes do novo produto criado).
    return console.log(response.json(product));
  }
}

export class GetProductsController {
  async findAll(req: Request, res: Response) {
    try {
      // Use o Prisma Client para recuperar todos os produtos do banco de dados.
      const products = await prismaClient.product.findMany();

      // Prepara uma resposta para o cliente, retornando a lista de produtos.
      return res.json(products);
    } catch (error) {
      console.error("Erro ao obter produtos:", error);

      // Adicione um retorno de erro para a solicitação
      return res.status(500).json({ error: "Erro interno ao obter produtos" });
    }
  }
}

export class ProductModel {
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
      // Use o Prisma Client para recuperar 1 produto do banco de dados.
      const product = await prismaClient.product.findUnique({
        where: {
          id: id,
        },
      });

      return res.json(product);
    } catch (error) {
      console.error("Erro ao obter produto:", error);

      return res.status(500).json({ error: "Erro interno ao obter o produto" });
    }
  }
}
