import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const { id } = useParams(); // Captura o parâmetro "id" da URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fazer a requisição para buscar os detalhes do produto com base no "id"
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar o produto');
        }
        const data = await response.json();
        setProduct(data.product); // Definir o estado com os detalhes do produto
      } catch (error) {
        console.error('Erro ao buscar o produto:', error);
      }
    };

    fetchProduct();
  }, [id]); // Executar o efeito sempre que o "id" mudar

  if (!product) {
    return <div>Carregando...</div>; // Pode exibir uma mensagem de carregamento enquanto os dados são buscados
  }

  return (
  <div>
    {product.map((product) => (
      <h2 key={product.id}>{product.product}</h2>
    ))}
  </div>
);

}
