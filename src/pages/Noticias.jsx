import React from 'react';
import { Link } from 'react-router-dom';

function Noticias() {
  const noticias = [
    {
      id: 1,
      titulo: 'Novo Álbum Confirmado para 2025',
      resumo: 'O grupo confirmou o lançamento de um novo álbum completo para o primeiro semestre de 2025.',
      data: '2024-01-15',
      categoria: 'Música',
      imagem: 'https://via.placeholder.com/400x250'
    },
    {
      id: 2,
      titulo: 'Baby Stay Anuncia Turnê Mundial',
      resumo: 'A tão esperada turnê mundial foi anunciada com datas em diversos países.',
      data: '2024-01-10',
      categoria: 'Eventos',
      imagem: 'https://via.placeholder.com/400x250'
    },
    {
      id: 3,
      titulo: 'Entrevista Exclusiva com os Membros',
      resumo: 'Confira a entrevista exclusiva onde os membros falam sobre seus planos futuros.',
      data: '2024-01-05',
      categoria: 'Entrevistas',
      imagem: 'https://via.placeholder.com/400x250'
    },
    {
      id: 4,
      titulo: 'Novo MV Atinge 10 Milhões de Views',
      resumo: 'O videoclipe da música mais recente alcançou a marca de 10 milhões de visualizações.',
      data: '2024-01-01',
      categoria: 'Conquistas',
      imagem: 'https://via.placeholder.com/400x250'
    }
  ];

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Notícias</h1>
      <p className="lead text-muted mb-5">Fique por dentro das últimas novidades</p>

      <div className="row g-4">
        {noticias.map(noticia => (
          <div key={noticia.id} className="col-md-6 col-lg-6">
            <div className="card h-100 shadow-sm">
              <img src={noticia.imagem} className="card-img-top" alt={noticia.titulo} />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge bg-primary">{noticia.categoria}</span>
                  <span className="text-muted small ms-2">{formatarData(noticia.data)}</span>
                </div>
                <h5 className="card-title">{noticia.titulo}</h5>
                <p className="card-text text-muted">{noticia.resumo}</p>
                <Link to={`/noticias/${noticia.id}`} className="btn btn-outline-primary">
                  Ler mais →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Navegação de página" className="mt-5">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <span className="page-link">Anterior</span>
          </li>
          <li className="page-item active">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">Próximo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Noticias;

