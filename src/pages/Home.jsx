import React from 'react';
import Carousel from '../components/Carousel';
import './Home.css';

/** Destaques recentes (atualize periodicamente conforme a cobertura da imprensa). */
const noticiasRecentes = [
  {
    id: 1,
    titulo: 'Stray Kids lança single digital “별, 빛 (STAY)” no aniversário de 8 anos do debut',
    resumo:
      'Balada com Han e Seungmin na composição; letras falam da conexão do grupo com o fandom. Capa inspirada no light stick Nachimbong, com arte participativa dos oito membros.',
    fonte: 'Yonhap News Agency',
    data: '25 de março de 2026',
    link: 'https://en.yna.co.kr/view/AEN20260325003500315'
  },
  {
    id: 2,
    titulo: 'Stray Kids divulga capa online do single “별, 빛 (STAY)” antes do lançamento do 8º aniversário',
    resumo: 'Antevisão da arte e do projeto especial de aniversário para os STAYs.',
    fonte: 'allkpop',
    data: 'Março de 2026',
    link: 'https://www.allkpop.com/article/2026/03/stray-kids-unveil-online-cover-for-upcoming-single-stay-ahead-of-8th-anniversary-release'
  },
  {
    id: 3,
    titulo: 'Stray Kids realiza fan meetings oficiais “STAY in Our Little House” (Incheon)',
    resumo:
      'Série de encontros com fãs no Inspire Arena; transmissão Beyond LIVE em datas selecionadas. Cobertura da imprensa destaca ingressos esgotados.',
    fonte: 'STARNEWS Korea (EN)',
    data: 'Março de 2026',
    link: 'https://www.starnewskorea.com/en/music/2026/03/27/2026032709165569612'
  },
  {
    id: 4,
    titulo: 'Stray Kids marca aniversário de debut com novo single digital',
    resumo: 'Resumo do lançamento e do contexto do oitavo ano de carreira do grupo.',
    fonte: 'The Korea Times',
    data: '25 de março de 2026',
    link: 'http://www.koreatimes.co.kr/entertainment/k-pop/20260325/stray-kids-marks-debut-anniversary-with-new-digital-single'
  }
];

const GOOGLE_NOTICIAS_SKZ =
  'https://news.google.com/search?q=Stray+Kids&hl=pt-BR&gl=BR&ceid=BR%3Apt-419';

function Home() {
  return (
    <div className="position-relative home-page" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Carousel />

      <p className="home-portal-name mb-0">Portal BRacha</p>

      <h1 className="visually-hidden">Stray Kids — portal para STAYs</h1>

      <section className="home-news-section" aria-labelledby="home-news-heading">
        <div className="container py-5 home-news-inner">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4 mb-4 pb-2">
            <div>
              <div className="home-news-badge">
                <span className="home-news-badge-dot" aria-hidden />
                Na mídia
              </div>
              <h2 id="home-news-heading" className="home-news-title">
                Informações atualizadas do grupo
              </h2>
              <p className="home-news-sub mb-0">
                Resumo de reportagens recentes na imprensa internacional. Clique no título para abrir a
                matéria completa em nova aba.
              </p>
            </div>
            <a
              href={GOOGLE_NOTICIAS_SKZ}
              target="_blank"
              rel="noopener noreferrer"
              className="btn home-btn-google text-nowrap"
            >
              Ver mais no Google Notícias →
            </a>
          </div>

          <div className="row g-4">
            {noticiasRecentes.map((n) => (
              <div key={n.id} className="col-md-6">
                <article className="card h-100 home-news-card">
                  <div className="card-body d-flex flex-column position-relative">
                    <p className="home-news-card-date mb-0">{n.data}</p>
                    <h3 className="h5 home-news-card-title mt-0 mb-2">
                      <a href={n.link} target="_blank" rel="noopener noreferrer" className="stretched-link text-decoration-none">
                        {n.titulo}
                      </a>
                    </h3>
                    <p className="home-news-card-text flex-grow-1 mb-0">{n.resumo}</p>
                    <p className="home-news-card-source mb-0 mt-3">
                      <strong>Fonte</strong> · {n.fonte}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-5 home-main">
        <div className="row g-4 pb-4 justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card home-quick-card h-100">
              <div className="card-body">
                <div className="home-quick-icon" aria-hidden>
                  🛍️
                </div>
                <h3 className="card-title h5">Loja oficial</h3>
                <p className="card-text">Confira produtos oficiais e coleções disponíveis.</p>
                <a href="/loja" className="btn btn-success">
                  Ir para loja
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className="card home-quick-card h-100">
              <div className="card-body">
                <div className="home-quick-icon" aria-hidden>
                  📅
                </div>
                <h3 className="card-title h5">Próximos eventos</h3>
                <p className="card-text">Agenda de apresentações e eventos para acompanhar.</p>
                <a href="/agenda" className="btn btn-success">
                  Ver agenda
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
