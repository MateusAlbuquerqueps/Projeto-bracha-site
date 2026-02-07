import React from 'react';

function Guia() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Guia da Baby Stay</h1>
      <p className="lead text-muted mb-5">Tudo que você precisa saber sobre o grupo</p>

      <div className="row">
        <div className="col-lg-8">
          <section className="mb-5">
            <h2 className="h3 mb-3">Sobre o Grupo</h2>
            <p>Baby Stay é um grupo formado em [ano]. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>

          <section className="mb-5">
            <h2 className="h3 mb-3">Membros</h2>
            <div className="list-group">
              <div className="list-group-item">
                <h5 className="mb-1">Membro 1</h5>
                <p className="mb-1">Posição: Vocal principal</p>
                <small className="text-muted">Informações adicionais...</small>
              </div>
              <div className="list-group-item">
                <h5 className="mb-1">Membro 2</h5>
                <p className="mb-1">Posição: Rapper</p>
                <small className="text-muted">Informações adicionais...</small>
              </div>
              <div className="list-group-item">
                <h5 className="mb-1">Membro 3</h5>
                <p className="mb-1">Posição: Dancer</p>
                <small className="text-muted">Informações adicionais...</small>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="h3 mb-3">Perguntas Frequentes</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    Como posso apoiar o grupo?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Você pode apoiar comprando produtos oficiais, assistindo aos vídeos e compartilhando nas redes sociais.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    Onde posso acompanhar as novidades?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Acompanhe nossa página de notícias e as redes sociais oficiais dos membros.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Links Rápidos</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/redes" className="text-decoration-none">🔗 Redes Sociais</a></li>
                <li className="mb-2"><a href="/discografia" className="text-decoration-none">🎵 Discografia</a></li>
                <li className="mb-2"><a href="/agenda" className="text-decoration-none">📅 Agenda</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guia;
