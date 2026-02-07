import React from 'react';

function Agenda() {
  const eventos = [
    {
      id: 1,
      titulo: 'Showcase em São Paulo',
      data: '2024-02-15',
      horario: '20:00',
      local: 'Arena São Paulo',
      cidade: 'São Paulo, SP',
      tipo: 'Show',
      ingressos: 'Disponíveis'
    },
    {
      id: 2,
      titulo: 'Fan Meeting Rio de Janeiro',
      data: '2024-02-20',
      horario: '18:00',
      local: 'Jeunesse Arena',
      cidade: 'Rio de Janeiro, RJ',
      tipo: 'Fan Meeting',
      ingressos: 'Esgotado'
    },
    {
      id: 3,
      titulo: 'Entrevista Rádio Mix',
      data: '2024-02-25',
      horario: '10:00',
      local: 'Rádio Mix FM',
      cidade: 'São Paulo, SP',
      tipo: 'Mídia',
      ingressos: 'N/A'
    },
    {
      id: 4,
      titulo: 'Apresentação Music Awards',
      data: '2024-03-10',
      horario: '21:00',
      local: 'Allianz Parque',
      cidade: 'São Paulo, SP',
      tipo: 'Award Show',
      ingressos: 'Em breve'
    }
  ];

  const getBadgeClass = (tipo) => {
    switch (tipo) {
      case 'Show': return 'bg-primary';
      case 'Fan Meeting': return 'bg-success';
      case 'Mídia': return 'bg-info';
      case 'Award Show': return 'bg-warning';
      default: return 'bg-secondary';
    }
  };

  const getIngressosBadge = (status) => {
    switch (status) {
      case 'Disponíveis': return <span className="badge bg-success">Disponíveis</span>;
      case 'Esgotado': return <span className="badge bg-danger">Esgotado</span>;
      case 'Em breve': return <span className="badge bg-warning text-dark">Em breve</span>;
      default: return <span className="badge bg-secondary">N/A</span>;
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Agenda de Eventos</h1>
      <p className="lead text-muted mb-5">Confira os próximos eventos e apresentações</p>

      <div className="row g-4">
        {eventos.map(evento => (
          <div key={evento.id} className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-2 text-center mb-3 mb-md-0">
                    <div className="bg-primary text-white rounded p-3">
                      <div className="h2 mb-0">{new Date(evento.data).getDate()}</div>
                      <div className="small">{new Date(evento.data).toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase()}</div>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <div className="mb-2">
                      <span className={`badge ${getBadgeClass(evento.tipo)} me-2`}>{evento.tipo}</span>
                      {getIngressosBadge(evento.ingressos)}
                    </div>
                    <h4 className="mb-2">{evento.titulo}</h4>
                    <p className="mb-1 text-muted">📍 {evento.local} - {evento.cidade}</p>
                    <p className="mb-0 text-muted">🕐 {evento.horario}</p>
                  </div>

                  <div className="col-md-3 text-md-end">
                    {evento.ingressos === 'Disponíveis' ? (
                      <button className="btn btn-primary">Comprar ingressos</button>
                    ) : evento.ingressos === 'Em breve' ? (
                      <button className="btn btn-outline-primary">Me avise</button>
                    ) : (
                      <button className="btn btn-outline-secondary" disabled>Ver detalhes</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-5">
        <h2 className="h3 mb-4">Calendário Visual</h2>
        <div className="alert alert-info">
          <strong>Em breve:</strong> Calendário interativo com todos os eventos do ano.
        </div>
      </section>

      <section className="mt-5">
        <div className="card bg-light">
          <div className="card-body text-center py-5">
            <h3 className="mb-3">Não perca nenhum evento!</h3>
            <p className="mb-4">Inscreva-se na nossa newsletter e receba notificações sobre novos eventos</p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Seu e-mail" />
                  <button className="btn btn-primary">Inscrever-se</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Agenda;