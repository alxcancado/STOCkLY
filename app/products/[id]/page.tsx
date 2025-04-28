// cria tipagem para os params
interface Params {
  id: string;
}

// params: { id }, onde esta id é o nome da pasta entre conchetes, no caso é [id], mas poderia ser [slug] por ex.
const ProductsDetailPage = ({ params: { id } }: { params: Params }) => {
  return <h1>Product Id {id}</h1>;
};

export default ProductsDetailPage;
