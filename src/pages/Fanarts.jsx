import React, { useState } from 'react';

function Fanarts() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  const fanarts = [
    { id: 1, titulo: 'Baby Stay Illustration', artista: '@artista1', imagem: 'https://via.placeholder.com/400x400', categoria: 'Ilustração', likes: 245 },
    { id: 2, titulo: 'Digital Portrait', artista: '@artista2', imagem: 'https://via.placeholder.com/400x400', categoria: 'Retrato', likes: 189 },
    { id: 3, titulo: 'Chibi Style', artista: '@artista3', imagem: 'https://via.placeholder.com/400x400', categoria: 'Chibi', likes: 312 },
    { id: 4, titulo: 'Realistic Drawing', artista: '@artista4', imagem: 'https://via.placeholder.com/400x400', categoria: 'Retrato', likes: 456 },
    { id: 5, titulo: 'Concert Sketch', artista: '@artista5', imagem: 'https://via.placeholder.com/400x400', categoria: 'Ilustração', likes: 178 },
    { id: 6, titulo: 'Anime Style', artista: '@artista6', imagem: 'https://via.placeholder.com/400x400', categoria: 'Anime', likes: 523 }
  ];

  const categorias = ['Todos', 'Ilustração', 'Retrato', 'Chibi', 'Anime'];

  const fanartsFilterados = filtroAtivo === 'Todos' 
    ? fanarts 
    : fanarts.filter(fanart => fanart.categoria === filtroAtivo);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Fanarts</h1>
      <p className="lead text-muted mb-5">Galeria de artes criadas pela comunidade</p>

      <div className="mb-4">
        <div className="btn-group flex-wrap" role="group">
          {categorias.map(categoria => (
            <button
              key={categoria}
              type="button"
              className={`btn ${filtroAtivo === categoria ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFiltroAtivo(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {fanartsFilterados.map(fanart => (
          <div key={fanart.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={fanart.imagem} className="card-img-top" alt={fanart.titulo} style={{ cursor: 'pointer' }} />
              <div className="card-body">
                <h5 className="card-title">{fanart.titulo}</h5>
                <p className="card-text text-muted small mb-2">Por {fanart.artista}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-secondary">{fanart.categoria}</span>
                  <span className="text-muted">❤️ {fanart.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-5 pt-5 border-top">
        <div className="card bg-light">
          <div className="card-body text-center py-5">
            <h3 className="mb-3">Envie sua Fanart!</h3>
            <p className="mb-4">Compartilhe sua arte com a comunidade Baby Stay</p>
            <button className="btn btn-primary btn-lg">Enviar Fanart</button>
            <p className="text-muted small mt-3">Formatos aceitos: JPG, PNG • Tamanho máximo: 5MB</p>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">📋 Regras da Galeria</h5>
            <ul className="mb-0">
              <li>Respeite os direitos autorais - envie apenas suas próprias criações</li>
              <li>Conteúdo apropriado - sem violência ou conteúdo ofensivo</li>
              <li>Dê créditos - sempre mencione se usou referências</li>
              <li>Seja respeitoso com outros artistas</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fanarts;