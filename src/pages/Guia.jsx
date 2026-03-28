import React from 'react';
import { Link } from 'react-router-dom';
import './Guia.css';

import foto1 from '../assets/images/carousel/foto-19.jpg';
import foto2 from '../assets/images/carousel/foto-11.jpg';
import foto3 from '../assets/images/carousel/foto-35.jpg';
import foto4 from '../assets/images/carousel/foto-49.JPG';
import foto5 from '../assets/images/carousel/foto-29.jpeg';
import foto6 from '../assets/images/carousel/foto-09.jpg';
import foto7 from '../assets/images/carousel/foto-45.jpg';
import foto8 from '../assets/images/carousel/foto-27.jpg';

const SKZ_YOUTUBE = 'https://www.youtube.com/@StrayKids';
const SKZ_SPOTIFY = 'https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE';

const membrosGuia = [
  {
    nome: 'Bang Chan',
    nomeCoreano: '방찬',
    rota: '/membro/bang-chan',
    foto: foto1,
    fotoPosition: 'center top',
    posicoes: 'Líder · Produtor (3RACHA) · Rapper · Vocalista',
    destaque: 'Líder oficial do grupo e peça central do 3RACHA na produção das músicas do Stray Kids.',
    papelExtra: 'Liderança & produção'
  },
  {
    nome: 'Lee Know',
    nomeCoreano: '리노',
    rota: '/membro/lee-know',
    foto: foto8,
    fotoPosition: 'center 30%',
    posicoes: 'Dançarino · Vocalista',
    destaque: 'Dançarino principal do grupo: coreografias precisas e presença forte no palco.',
    papelExtra: 'Dança principal'
  },
  {
    nome: 'Changbin',
    nomeCoreano: '창빈',
    rota: '/membro/changbin',
    foto: foto2,
    fotoPosition: 'center 20%',
    posicoes: 'Rapper · Produtor (3RACHA)',
    destaque: 'Rapper com flow marcante e parte fixa do 3RACHA nas letras e batidas.',
    papelExtra: 'Rap & produção'
  },
  {
    nome: 'Hyunjin',
    nomeCoreano: '현진',
    rota: '/membro/hyunjin',
    foto: foto4,
    fotoPosition: 'center 78%',
    posicoes: 'Dançarino · Rapper · Visual',
    destaque: 'Dance line de destaque, conhecido por performances expressivas e carisma visual.',
    papelExtra: 'Dança & performance'
  },
  {
    nome: 'Han',
    nomeCoreano: '한',
    rota: '/membro/han',
    foto: foto3,
    fotoPosition: 'center 20%',
    posicoes: 'Rapper · Produtor (3RACHA) · Vocalista',
    destaque: 'Rapper versátil que também canta e compõe; membro do 3RACHA.',
    papelExtra: 'Rap, vocal & produção'
  },
  {
    nome: 'Felix',
    nomeCoreano: '필릭스',
    rota: '/membro/felix',
    foto: foto5,
    fotoPosition: 'center 30%',
    posicoes: 'Dançarino · Rapper',
    destaque: 'Dance line com voz grave característica e energia no palco.',
    papelExtra: 'Dança & rap'
  },
  {
    nome: 'Seungmin',
    nomeCoreano: '승민',
    rota: '/membro/seungmin',
    foto: foto6,
    fotoPosition: 'center 40%',
    posicoes: 'Vocalista',
    destaque: 'Referência vocal estável do grupo — voz clara em baladas e músicas mais calmas.',
    papelExtra: 'Vocal principal'
  },
  {
    nome: 'I.N',
    nomeCoreano: '아이엔',
    rota: '/membro/in',
    foto: foto7,
    fotoPosition: 'center 2%',
    posicoes: 'Vocalista · Maknae',
    destaque: 'Maknae (membro mais novo) da vocal line, com timbre doce e presença carismática.',
    papelExtra: 'Vocal & maknae'
  }
];

function Guia() {
  return (
    <div className="container py-5 guia-page">
      <h1 className="mb-3">Guia para Baby Stays</h1>
      <p className="lead text-muted guia-intro mb-4">
        <strong>Baby Stay</strong> é como a comunidade costuma chamar quem está começando agora no fandom{' '}
        <strong>STAY</strong> do <strong>Stray Kids</strong>. Este guia resume quem é quem no grupo, com foto
        e função de cada membro — no K-pop ninguém tem <em>apenas</em> um rótulo, mas estes são os papéis
        mais falados pelos fãs e pela mídia.
      </p>

      <div className="row">
        <div className="col-lg-8">
          <section className="mb-5">
            <h2 className="h3 mb-3">Linhas do grupo (resumo)</h2>
            <ul className="mb-0">
              <li className="mb-2">
                <strong>Vocal line:</strong> Bang Chan, Seungmin, I.N — cantam muito nas partes melódicas;
                Han e outros também pegam vocais conforme a música.
              </li>
              <li className="mb-2">
                <strong>Dance line:</strong> Lee Know, Hyunjin e Felix lideram as performances de dança.
              </li>
              <li className="mb-2">
                <strong>Rap line / 3RACHA:</strong> Bang Chan, Changbin e Han compõem e rimam no núcleo
                3RACHA; Hyunjin e Felix também rapeiam em várias faixas.
              </li>
              <li>
                <strong>“Vocal principal” e “dançarino principal”</strong> não são títulos oficiais fixos,
                mas entre os Stays costuma-se destacar <strong>Seungmin</strong> como referência vocal e{' '}
                <strong>Lee Know</strong> (com <strong>Hyunjin</strong>) na dança.
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h3 mb-4">Os 8 membros</h2>
            <div className="row g-4">
              {membrosGuia.map((m) => (
                <div key={m.rota} className="col-md-6">
                  <div className="card shadow-sm guia-membro-card">
                    <div className="guia-membro-foto-wrap">
                      <img
                        src={m.foto}
                        alt={m.nome}
                        className="guia-membro-foto"
                        style={{ objectPosition: m.fotoPosition }}
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                        <h3 className="card-title mb-0">{m.nome}</h3>
                        <span className="text-muted small">{m.nomeCoreano}</span>
                        <span className="badge bg-success guia-papel-badge">{m.papelExtra}</span>
                      </div>
                      <p className="small fw-semibold text-secondary mb-2">{m.posicoes}</p>
                      <p className="card-text small text-muted mb-3">{m.destaque}</p>
                      <Link to={m.rota} className="btn btn-sm btn-outline-success">
                        Ver perfil
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h2 className="h3 mb-3">Perguntas frequentes</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    O que significa STAY?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    STAY é o nome do fandom do Stray Kids: a ideia é que os fãs ficam (stay) com o grupo em
                    cada passo da jornada.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    Por onde acompanhar o Stray Kids?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Use o canal oficial no YouTube e o perfil no Spotify (links ao lado e na página{' '}
                    <Link to="/discografia">Discografia</Link>
                    ), além das redes oficiais do grupo e dos membros.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-lg-4 guia-sidebar">
          <div className="card shadow-sm sticky-lg-top" style={{ top: '1rem' }}>
            <div className="card-body">
              <h5 className="card-title mb-3">Ouvir o Stray Kids</h5>
              <p className="small text-muted mb-3">
                Catálogo oficial no YouTube e no Spotify — perfeito para quem está conhecendo o som do grupo.
              </p>
              <div className="d-grid gap-2 mb-4">
                <a
                  href={SKZ_YOUTUBE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger btn-youtube"
                >
                  YouTube oficial
                </a>
                <a
                  href={SKZ_SPOTIFY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-spotify"
                >
                  Spotify oficial
                </a>
              </div>
              <h6 className="text-secondary text-uppercase small mb-2">No site</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/discografia" className="text-decoration-none">
                    Discografia
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guia;
