import React from 'react';

function Loja() {
  const produtos = [
    { id: 1, nome: 'Camiseta Oficial', preco: 'R$ 89,90', imagem: 'https://via.placeholder.com/300x300' },
    { id: 2, nome: 'Moletom Baby Stay', preco: 'R$ 149,90', imagem: 'https://via.placeholder.com/300x300' },
    { id: 3, nome: 'Boné Bordado', preco: 'R$ 59,90', imagem: 'https://via.placeholder.com/300x300' },
    { id: 4, nome: 'Poster A3', preco: 'R$ 29,90', imagem: 'https://via.placeholder.com/300x300' },
    { id: 5, nome: 'Chaveiro', preco: 'R$ 19,90', imagem: 'https://via.placeholder.com/300x300' },
    { id: 6, nome: 'Adesivos Pack', preco: 'R$ 15,90', imagem: 'https://via.placeholder.com/300x300' },
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Loja Oficial</h1>
      <p className="lead text-muted mb-5">Produtos oficiais do Baby Stay</p>

      <div className="row g-4">
        {produtos.map(produto => (
          <div key={produto.id} className="col-md-4 col-lg-3">
            <div className="card h-100">
              <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
              <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text fw-bold text-primary">{produto.preco}</p>
                <button className="btn btn-outline-primary w-100">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loja;