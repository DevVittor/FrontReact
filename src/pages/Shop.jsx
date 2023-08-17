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
    <div className='flex items-center flex-col justify-center p-3'>
      <h1 className='text-4xl font-semibold pb-3 '>Lista de Produtos:</h1>
      <ul className='flex flex-col gap-2'>
        {products.map(product => (
          <li className='border-2 border-gray-100 p-2 rounded-md hover:cursor-pointer' key={product.id}>Id:{product.id}<br/> Product: {product.product}<br/> createdAt: {product.createdAt}</li>
        ))}
      </ul>
    </div>
  );
}
