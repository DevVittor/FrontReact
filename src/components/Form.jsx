import { useState } from 'react';

const Form = () => {
  const [product, setProduct] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/products/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product })
      });

      if (response.ok) {
        console.log('Produto criado com sucesso');
        // Pode adicionar mais lógica aqui após o produto ser criado
      } else {
        console.error('Erro ao criar produto');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };

  return (
    <div>
      <h2>Criar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Produto:
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </label>
        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
};

export default Form;
