import React from 'react';

function Redes() {
  const membros = [
    {
      id: 1,
      nome: 'Membro 1',
      redes: {
        instagram: 'https://instagram.com/exemplo1',
        twitter: 'https://twitter.com/exemplo1',
        youtube: 'https://youtube.com/exemplo1'
      }
    },
    {
      id: 2,
      nome: 'Membro 2',
      redes: {
        instagram: 'https://instagram.com/exemplo2',
        twitter: 'https://twitter.com/exemplo2',
        tiktok: 'https://tiktok.com/@exemplo2'
      }
    },
    {
      id: 3,
      nome: 'Membro 3',
      redes: {
        instagram: 'https://instagram.com/exemplo3',
        twitter: 'https://twitter.com/exemplo3',
        youtube: 'https://youtube.com/exemplo3'
      }
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Redes Sociais</h1>
      <p className="lead text-muted mb-5">Siga os membros do Baby Stay nas redes sociais</p>

      <section className="mb-5">
        <h2 className="h3 mb-4">Redes Oficiais do Grupo</h2>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap gap-3">
              <a href="https://instagram.com/babystay" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                📷 Instagram
              </a>
              <a href="https://twitter.com/babystay" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">
                🐦 Twitter
              </a>
              <a href="https://youtube.com/babystay" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger">
                ▶️ YouTube
              </a>
              <a href="https://tiktok.com/@babystay" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                🎵 TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="h3 mb-4">Redes dos Membros</h2>
        <div className="row g-4">
          {membros.map(membro => (
            <div key={membro.id} className="col-md-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title mb-3">{membro.nome}</h5>
                  <div className="d-flex flex-column gap-2">
                    {membro.redes.instagram && (
                      <a href={membro.redes.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                        📷 Instagram
                      </a>
                    )}
                    {membro.redes.twitter && (
                      <a href={membro.redes.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info">
                        🐦 Twitter
                      </a>
                    )}
                    {membro.redes.youtube && (
                      <a href={membro.redes.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-danger">
                        ▶️ YouTube
                      </a>
                    )}
                    {membro.redes.tiktok && (
                      <a href={membro.redes.tiktok} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark">
                        🎵 TikTok
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Redes;

