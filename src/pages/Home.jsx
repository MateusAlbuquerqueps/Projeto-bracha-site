import React from 'react';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className="position-relative" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Carrossel de membros - ocupa toda a largura */}
      <Carousel />

      {/* Conteúdo abaixo do carrossel */}
      <div className="container py-5" style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <div className="row mb-5 py-5">
          <div className="col-12 text-center">
            <h1 className="display-3 fw-bold mb-3" style={{ color: '#28a745' }}>
             News!!
            </h1>
            <p className="lead text-dark">
              Portal feito para fãs do Stray Kids.
            </p>
          </div>
        </div>

        {/* Cards de destaque */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-body">
                <h5 className="card-title">🎵 Última Notícias</h5>
                <p className="card-text">
                  Fique por dentro das últimas novidades do grupo.
                </p>
                <a href="/noticias" className="btn btn-success">Ver notícias</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-body">
                <h5 className="card-title">🛍️ Loja Oficial</h5>
                <p className="card-text">
                  Confira os produtos oficiais disponíveis.
                </p>
                <a href="/loja" className="btn btn-success">Ir para loja</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-body">
                <h5 className="card-title">📅 Próximos Eventos</h5>
                <p className="card-text">
                  Veja a agenda de apresentações e eventos.
                </p>
                <a href="/agenda" className="btn btn-success">Ver agenda</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
