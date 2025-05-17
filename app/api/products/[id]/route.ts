import { db } from "@/app/_lib/prisma";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest, // Request é do tipo NextRequest, que é uma extensão do Request padrão
  { params }: { params: { id: string } },
) {
  // quando queremos pegar parametros da url, exemplo: /api/products?teste=1
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("teste");
  console.log(query);

  // aqui segue normal
  const productId = params.id;
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    return Response.json(
      { message: "Produto não encontrado" },
      {
        status: 404,
      },
    );
  }
  return Response.json(product, {
    status: 200,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  await db.product.delete({
    where: {
      id: params.id,
    },
  });
  return Response.json(
    { message: "Produto deletado com sucesso" },
    {
      status: 200,
    },
  );
}
