import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  // isso aqui é um server component, portanto podemos fazer chamadas a API diretamente aqui
  // não é o ideal, mas é só um exemplo
  // const products = await fetch('https://dummyjson.com/products').then((res) => res.json());
  // como é um server component, consigo transformar em função async e fazer chamadas a API diretamente aqui
  const products = await db.product.findMany();
  return (
    <div className="m-4 w-full space-y-4 rounded-lg bg-white p-4">
      {/* Esquerda */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        {/* Direita */}
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo Produto
        </Button>
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
