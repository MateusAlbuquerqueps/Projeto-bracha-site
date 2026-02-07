import React from 'react';
import { useParams } from 'react-router-dom';
import './MembroPerfil.css';

// Importar as mesmas imagens do carrossel
import foto1 from '../assets/images/carousel/foto-01.jpg';
import foto2 from '../assets/images/carousel/foto-02.jpg';
import foto3 from '../assets/images/carousel/foto-03.jpg';
import foto4 from '../assets/images/carousel/foto-04.jpg';
import foto5 from '../assets/images/carousel/foto-05.jpg';
import foto6 from '../assets/images/carousel/foto-06.jpg';
import foto7 from '../assets/images/carousel/foto-07.jpg';
import foto8 from '../assets/images/carousel/foto-08.jpg';

function MembroPerfil() {
  const { nome } = useParams();

  const membrosData = {
    'bang-chan': {
      nome: 'Bang Chan',
      nomeKorean: '방찬',
      foto: foto1,
      posicao: 'Líder, Produtor, Rapper, Vocalista',
      nascimento: '03 de Outubro de 1997',
      nacionalidade: 'Australiano-Coreano',
      altura: '171 cm',
      biografia: `Bang Chan é o líder e produtor principal do Stray Kids.`,
      projetosSolo: ['Produtor de todas as músicas do grupo'],
      musicasSolo: [{ titulo: 'Red Lights', colaboracao: 'com Hyunjin', ano: 2021, link: '#' }],
      redesSociais: { instagram: 'https://www.instagram.com/gnabnahc/', spotify: '#' }
    },
    'changbin': {
      nome: 'Changbin',
      nomeKorean: '창빈',
      foto: foto2,
      posicao: 'Rapper, Produtor',
      nascimento: '11 de Agosto de 1999',
      nacionalidade: 'Coreano',
      altura: '167 cm',
      biografia: `Changbin é conhecido por seu rap poderoso.`,
      projetosSolo: ['Membro do 3RACHA'],
      musicasSolo: [{ titulo: 'Cypher', colaboracao: 'SKZ-PLAYER', ano: 2022, link: '#' }],
      redesSociais: { instagram: '#', spotify: '#' }
    },
    'han': {
      nome: 'Han',
      nomeKorean: '한',
      foto: foto3,
      posicao: 'Rapper, Produtor',
      nascimento: '14 de Setembro de 2000',
      nacionalidade: 'Coreano',
      altura: '169 cm',
      biografia: `Han é um artista multitalentoso.`,
      projetosSolo: ['Compositor principal'],
      musicasSolo: [{ titulo: 'Alien', colaboracao: 'SKZ-PLAYER', ano: 2023, link: '#' }],
      redesSociais: { instagram: '#', spotify: '#' }
    },
    'hyunjin': {
      nome: 'Hyunjin',
      nomeKorean: '현진',
      foto: foto4,
      posicao: 'Dancer, Rapper',
      nascimento: '20 de Março de 2000',
      nacionalidade: 'Coreano',
      altura: '179 cm',
      biografia: `Hyunjin é conhecido por sua dança excepcional.`,
      projetosSolo: ['Covers de dança virais'],
      musicasSolo: [{ titulo: 'Red Lights', colaboracao: 'com Bang Chan', ano: 2021, link: '#' }],
      redesSociais: { instagram: '#', spotify: '#' }
    },
    'felix': {
      nome: 'Felix',
      nomeKorean: '필릭스',
      foto: foto5,
      posicao: 'Dancer, Rapper',
      nascimento: '15 de Setembro de 2000',
      nacionalidade: 'Australiano-Coreano',
      altura: '171 cm',
      biografia: `Felix é conhecido por sua voz grave única.`,
      projetosSolo: ['Embaixador da Louis Vuitton'],
      musicasSolo: [{ titulo: 'Deep End', colaboracao: 'SKZ-PLAYER', ano: 2023, link: '#' }],
      redesSociais: { instagram: '#', spotify: '#' }
    },
    'seungmin': {
      nome: 'Seungmin',
      nomeKorean: '승민',
      foto: foto6,
      posicao: 'Vocalista',
      nascimento: '22 de Setembro de 2000',
      nacionalidade: 'Coreano',
      altura: '178 cm',
      biografia: `Seungmin é o vocalista principal.`,
      projetosSolo: ['Covers vocais'],
      musicasSolo: [{ titulo: 'Here Always', colaboracao: 'SKZ-PLAYER', ano: 2022, link: '#' }],
      redesSociais: { instagram: '#', spotify: '#' }
    },
    'in': {
      nome: 'I.N',
      nomeKorean: '아이엔',
      foto: foto7,
      posicao: 'Vocalista, Maknae',
      nascimento: '08 de Fevereiro de 2001',
      nacionalidade: 'Coreano',
      altura: '172 cm',
      biografia: `I.N é o membro mais novo do grupo.`,
      projetosSolo: ['Covers vocais'],
      musicasSolo: [{ titulo: 'Hug Me', colaboracao: 'SKZ-PLAYER', ano: 2023, link: '#' }],
      redesSociais: { instagram: '#', spotify: '#' }
    },
    'lee-know': {
      nome: 'Lee Know',
      nomeKorean: '리노',
      foto: foto8,
      posicao: 'Dancer, Vocalista',
      nascimento: '25 de Outubro de 1998',
      nacionalidade: 'Coreano',
      altura: '172 cm',
      biografia: `Lee Know é o dançarino principal do grupo.`,
      projetosSolo: ['Ex-dançarino de backup da BTS'],
      musicasSolo: [{ titulo: 'Want So Bad', colaboracao: 'SKZ-PLAYER', ano: 2023, link: '#' }],
      redesSociais: { instagram: '#', spotify: '#' }
    }
  };

  const membro = membrosData[nome];

  if (!membro) {
    return (
      <div className="container py-5 text-center">
        <h1>Membro não encontrado</h1>
        <a href="/" className="btn btn-success mt-3">Voltar para Home</a>
      </div>
    );
  }

  return (
    <div className="membro-perfil">
      <div className="perfil-header" style={{ backgroundImage: `url(${membro.foto})` }}>
        <div className="perfil-overlay">
          <div className="container">
            <h1 className="perfil-nome">{membro.nome}</h1>
            <p className="perfil-nome-korean">{membro.nomeKorean}</p>
            <p className="perfil-posicao">{membro.posicao}</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="card-title mb-4">📋 Informações</h4>
                <ul className="list-unstyled">
                  <li className="mb-3"><strong>Data de Nascimento:</strong><br />{membro.nascimento}</li>
                  <li className="mb-3"><strong>Nacionalidade:</strong><br />{membro.nacionalidade}</li>
                  <li className="mb-3"><strong>Altura:</strong><br />{membro.altura}</li>
                </ul>
                <hr />
                <h5 className="mb-3">🔗 Redes Sociais</h5>
                <div className="d-flex gap-2 flex-wrap">
                  {membro.redesSociais.instagram && membro.redesSociais.instagram !== '#' && (
                    <a href={membro.redesSociais.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-sm">Instagram</a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card shadow mb-4">
              <div className="card-body">
                <h4 className="card-title mb-3">📖 Biografia</h4>
                <p className="text-muted">{membro.biografia}</p>
              </div>
            </div>

            <div className="card shadow mb-4">
              <div className="card-body">
                <h4 className="card-title mb-3">🎬 Projetos Solo</h4>
                <ul>
                  {membro.projetosSolo.map((projeto, index) => (
                    <li key={index} className="mb-2">{projeto}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card shadow">
              <div className="card-body">
                <h4 className="card-title mb-4">🎵 Músicas Solo</h4>
                <div className="row g-3">
                  {membro.musicasSolo.map((musica, index) => (
                    <div key={index} className="col-md-6">
                      <div className="card bg-light">
                        <div className="card-body">
                          <h6 className="card-title">{musica.titulo}</h6>
                          <p className="card-text small text-muted mb-2">{musica.colaboracao} • {musica.ano}</p>
                          <a href={musica.link} className="btn btn-sm btn-success">Ouvir 🎧</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="/" className="btn btn-outline-success btn-lg">← Voltar para Home</a>
        </div>
      </div>
    </div>
  );
}

export default MembroPerfil;