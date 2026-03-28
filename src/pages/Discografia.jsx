import React from 'react';

const SKZ_YOUTUBE = 'https://www.youtube.com/@StrayKids';
const SKZ_SPOTIFY = 'https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE';

function Discografia() {
  const discografia = [
    { id: 1, tipo: 'Álbum', titulo: 'First Album', ano: 2023, capa: 'https://via.placeholder.com/300x300', faixas: 12 },
    { id: 2, tipo: 'Single', titulo: 'Hit Song', ano: 2024, capa: 'https://via.placeholder.com/300x300', faixas: 1 },
    { id: 3, tipo: 'Mini Álbum', titulo: 'Special Edition', ano: 2024, capa: 'https://via.placeholder.com/300x300', faixas: 5 }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Discografia</h1>
      <p className="lead text-muted mb-4">
        Lançamentos e curadorias do Stray Kids — para ouvir tudo no catálogo oficial, use os canais abaixo.
      </p>

      <div className="card border-0 shadow-sm mb-5 bg-light">
        <div className="card-body p-4">
          <h2 className="h5 mb-3">Canais oficiais</h2>
          <p className="text-muted small mb-3">
            MVs, SKZ-PLAYER, SKZ-TALKER e estreias no YouTube; álbuns e singles completos no Spotify.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <a
              href={SKZ_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              YouTube — Stray Kids
            </a>
            <a
              href={SKZ_SPOTIFY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              Spotify — Stray Kids
            </a>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {discografia.map(item => (
          <div key={item.id} className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src={item.capa} className="card-img-top" alt={item.titulo} />
              <div className="card-body">
                <span className="badge bg-primary mb-2">{item.tipo}</span>
                <h5 className="card-title">{item.titulo}</h5>
                <p className="card-text text-muted">{item.ano} • {item.faixas} {item.faixas === 1 ? 'faixa' : 'faixas'}</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">🎵 Ouvir</button>
                  <button className="btn btn-sm btn-outline-secondary">ℹ️ Detalhes</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-5">
        <h2 className="h3 mb-4">Playlists Oficiais</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">🎧 Melhores Músicas</h6>
                <p className="card-text small text-muted">As músicas mais tocadas</p>
                <a href={SKZ_SPOTIFY} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Ouvir no Spotify</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">🎤 B-Sides</h6>
                <p className="card-text small text-muted">Lado B dos álbuns</p>
                <a href={SKZ_SPOTIFY} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Ouvir no Spotify</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">💿 Completo</h6>
                <p className="card-text small text-muted">Toda a discografia</p>
                <a href={SKZ_SPOTIFY} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Ouvir no Spotify</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discografia;