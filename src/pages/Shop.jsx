import { useState, useEffect } from 'react';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts= async ()=> {
      try {
        const response = await fetch('http://localhost:3000/shop');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        setProducts(data.buscarProduct);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>Id:{product.id} Product:{product.product}</li>
        ))}
      </ul>
    </div>
  );
}
