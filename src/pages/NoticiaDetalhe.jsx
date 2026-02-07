import React from 'react';
import { useParams, Link } from 'react-router-dom';

function NoticiaDetalhe() {
  const { id } = useParams();

  const noticiasData = {
    1: {
      titulo: 'Novo Álbum Confirmado para 2025',
      data: '2024-01-15',
      categoria: 'Música',
      imagem: 'https://via.placeholder.com/800x400',
      conteudo: `O Baby Stay confirmou oficialmente que lançará um novo álbum completo no primeiro semestre de 2025. Este será o terceiro álbum de estúdio do grupo e promete trazer uma nova sonoridade.
      
De acordo com declarações dos membros, o álbum terá aproximadamente 12 faixas e contará com colaborações especiais de artistas renomados. As gravações já estão em andamento e o grupo está muito animado com o resultado.

"Estamos trabalhando muito neste projeto e mal podemos esperar para compartilhar com vocês", disse um dos membros em entrevista recente.

Fique ligado para mais atualizações!`
    },
    2: {
      titulo: 'Baby Stay Anuncia Turnê Mundial',
      data: '2024-01-10',
      categoria: 'Eventos',
      imagem: 'https://via.placeholder.com/800x400',
      conteudo: `A tão esperada turnê mundial do Baby Stay foi oficialmente anunciada! O grupo visitará diversos países nos próximos meses, levando seus shows para fãs ao redor do mundo.

As vendas de ingressos começam na próxima semana. Confira as datas e cidades no site oficial.`
    },
    3: {
      titulo: 'Entrevista Exclusiva com os Membros',
      data: '2024-01-05',
      categoria: 'Entrevistas',
      imagem: 'https://via.placeholder.com/800x400',
      conteudo: `Em uma entrevista exclusiva, os membros do Baby Stay compartilharam detalhes sobre seus próximos projetos e planos para o futuro do grupo.`
    },
    4: {
      titulo: 'Novo MV Atinge 10 Milhões de Views',
      data: '2024-01-01',
      categoria: 'Conquistas',
      imagem: 'https://via.placeholder.com/800x400',
      conteudo: `O videoclipe mais recente do grupo alcançou a impressionante marca de 10 milhões de visualizações em tempo recorde!`
    }
  };

  const noticia = noticiasData[id];

  if (!noticia) {
    return (
      <div className="container py-5 text-center">
        <h1>Notícia não encontrada</h1>
        <p className="text-muted">A notícia que você procura não existe.</p>
        <Link to="/noticias" className="btn btn-primary">Voltar para notícias</Link>
      </div>
    );
  }

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="container py-5">
      <Link to="/noticias" className="btn btn-outline-secondary mb-4">← Voltar para notícias</Link>

      <article>
        <header className="mb-4">
          <span className="badge bg-primary mb-3">{noticia.categoria}</span>
          <h1 className="mb-3">{noticia.titulo}</h1>
          <p className="text-muted">Publicado em {formatarData(noticia.data)}</p>
        </header>

        <img src={noticia.imagem} alt={noticia.titulo} className="img-fluid rounded mb-4" />

        <div className="article-content">
          {noticia.conteudo.split('\n').map((paragrafo, index) => (
            paragrafo.trim() && <p key={index} className="lead">{paragrafo.trim()}</p>
          ))}
        </div>

        <div className="mt-5 pt-4 border-top">
          <h5 className="mb-3">Compartilhe esta notícia</h5>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">Facebook</button>
            <button className="btn btn-outline-info">Twitter</button>
            <button className="btn btn-outline-success">WhatsApp</button>
          </div>
        </div>
      </article>

      <section className="mt-5 pt-4 border-top">
        <h3 className="mb-4">Notícias Relacionadas</h3>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Outra notícia interessante</h6>
                <p className="card-text small text-muted">Resumo da notícia...</p>
                <a href="#" className="btn btn-sm btn-outline-primary">Ler mais</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NoticiaDetalhe;
