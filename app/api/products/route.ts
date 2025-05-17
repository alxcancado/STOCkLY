// Apenas para referencia. Só utilizamos no caso que precisamos interagir com um
// webhook ou se vamos disponibilizar um API para outra aplicacao (mobile? mas dai cria dependencia desse projeto Next)

import { db } from "@/app/_lib/prisma";

export async function GET() {
  const products = await db.product.findMany({});
  return Response.json(products, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, price, stock } = body;

  const product = await db.product.create({
    data: {
      name,
      price,
      stock,
    },
  });

  return Response.json(product, {
    status: 201,
  });
}
