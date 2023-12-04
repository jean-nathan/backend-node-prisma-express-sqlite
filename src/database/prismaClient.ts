// Crie a pasta database/  e depois crie o arquivo prismaClient.ts
// Este arquivo contém a configuração centralizada com o banco de dados usando Prisma Client.

import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient(); // Instância do Prisma Client

export { prismaClient }; // Exporta a instância para uso em outras partes do código.
// prismaClient.ts cria e exporta uma instância do Prisma Client para acessar o SQLite em outras partes do aplicativo Express.

// O Prisma Client, em uma aplicação com SQLite, é como um assistente que simplifica a comunicação com o banco de dados.
// Ele ajuda a realizar tarefas comuns, como salvar ou buscar informações, de maneira fácil e organizada. Em vez de lidar diretamente com o SQLite, você usa o Prisma Client para tornar essas interações mais simples e menos complicadas, permitindo que você se concentre mais na construção da lógica da sua aplicação.
// É como ter um amigo que cuida das conversas com o banco de dados para que você possa se concentrar em outras partes importantes do seu código.
