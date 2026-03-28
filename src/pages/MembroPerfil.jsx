import React from 'react';
import { useParams } from 'react-router-dom';
import './MembroPerfil.css';

// Importar as mesmas imagens do carrossel
import foto1 from '../assets/images/carousel/foto-19.jpg';
import foto2 from '../assets/images/carousel/foto-11.jpg';
import foto3 from '../assets/images/carousel/foto-35.jpg';
import foto4 from '../assets/images/carousel/foto-49.JPG';
import foto5 from '../assets/images/carousel/foto-29.jpeg';
import foto6 from '../assets/images/carousel/foto-09.jpg';
import foto7 from '../assets/images/carousel/foto-45.jpg';
import foto8 from '../assets/images/carousel/foto-27.jpg';

function SpotifyIcon({ className }) {
  return (
    <svg
      className={className}
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.381-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function MembroPerfil() {
  const { nome } = useParams();

  const membrosData = {
    'bang-chan': {
      nome: 'Bang Chan',
      nomeKorean: '방찬',
      foto: foto1,
      fotoPosition: 'center top',
      posicao: 'Líder, Produtor, Rapper, Vocalista',
      nascimento: '03 de Outubro de 1997',
      nacionalidade: 'Australiano-Coreano',
      altura: '171 cm',
      biografia: `Bang Chan é o líder e produtor principal do Stray Kids. Aos treze anos passou para uma audição na JYP Entertainment, onde atuou como trainee até debutar em 2018 com o grupo Stray Kids. Após o lançamento do grupo, Bang Chan se tornou um dos membros mais populares do grupo, graças à sua personalidade e habilidades musicais.`,
      projetosSolo: [
        {
          titulo: 'RAILWAY',
          ano: 2024,
          descricao: 'Lançada no álbum de solos "HOP".',
          spotify: 'https://open.spotify.com/track/4vNhzQfgfWIzOxbB8HfIHa'
        },
        {
          titulo: 'Connected',
          ano: 2023,
          descricao: 'Faixa solo presente no álbum 5-STAR.',
          spotify: 'https://open.spotify.com/track/3vGSv4l4czTve9jZoYeIWk'
        },
        {
          titulo: 'i hate to admit',
          ano: 2022,
          descricao: 'Lançada como SKZ-RECORD.',
          spotify: 'https://open.spotify.com/track/0XABJLloqjHsF4mY4tGIOH'
        },
        {
          titulo: 'Roman Empire',
          ano: 2025,
          descricao: 'Projeto especial com a Fendi.',
          spotify: 'https://open.spotify.com/track/6XWU4JGNmxdFkeAahsXGNE'
        }
      ],
      redesSociais: { instagram: 'https://www.instagram.com/gnabnahc/', spotify: '#' }
    },
    'changbin': {
      nome: 'Changbin',
      nomeKorean: '창빈',
      foto: foto2,
      fotoPosition: 'center 20%',
      posicao: 'Rapper, Produtor',
      nascimento: '11 de Agosto de 1999',
      nacionalidade: 'Coreano',
      altura: '167 cm',
      biografia: `Changbin é um rapper e produtor do grupo Stray Kids. Entrou para a JYP Entertainment em 2016 através de uma audição. Realizou o seu debut com o grupo em 2018.`,
      projetosSolo: [
        {
          titulo: 'Fly High (비상)',
          ano: 2023,
          descricao: 'Faixa solo.',
          spotify:
            'https://open.spotify.com/search/Fly%20High%20%EB%B9%84%EC%83%81%20Changbin'
        },
        {
          titulo: 'ULTRA',
          ano: 2024,
          descricao: 'Faixa solo do álbum HOP (2024).',
          spotify: 'https://open.spotify.com/track/5LiRLjFqwPNR8WBmlsbQW6'
        },
        {
          titulo: 'Streetlight (feat. Bang Chan)',
          ano: 2022,
          descricao: 'Lançada no SKZ-REPLAY.',
          spotify: 'https://open.spotify.com/track/1Z6NmeYIfN4e8TuEYLFTKL'
        },
        {
          titulo: 'DOODLE',
          ano: 2022,
          descricao: 'Lançada no SKZ-REPLAY.',
          spotify: 'https://open.spotify.com/track/786A4mxiKmPGHA7z7dPA9K'
        }
      ],
      redesSociais: { instagram: 'https://www.instagram.com/jutdwae', spotify: '#' }
    },
    'han': {
      nome: 'Han',
      nomeKorean: '한',
      foto: foto3,
      fotoPosition: 'center 20%',
      posicao: 'Rapper, Produtor',
      nascimento: '14 de Setembro de 2000',
      nacionalidade: 'Coreano',
      altura: '169 cm',
      biografia: `Han é um rapper e produtor do grupo Stray Kids. Foi aceito na JYP Entertainment em 2015 por volta dos seus 14 anos de idade. Fez parte da unit 3RACHA com Bang Chan e Changbin, antes de debutar oficialmente com o Stray Kids em 2018.`,
      projetosSolo: [
        {
          titulo: 'Hold my hand',
          ano: 2024,
          descricao: 'Single solo oficial com clipe.',
          spotify: 'https://open.spotify.com/track/6U9CTAof4KBnyzDt8OYY75'
        },
        {
          titulo: 'HaPpY',
          ano: 2021,
          descricao: 'Single com uma vibe mais leve.',
          spotify: 'https://open.spotify.com/track/2KHgPAJycXwbZ2S1xuUT9T'
        },
        {
          titulo: 'Wish You Back',
          ano: 2021,
          descricao: 'Música mais intensa e emocional.',
          spotify: 'https://open.spotify.com/track/1ifB8sqR8gd09DSEloo4Du'
        },
        {
          titulo: 'Alien',
          ano: 2021,
          descricao: 'Faixa reflexiva e mais calma.',
          spotify: 'https://open.spotify.com/track/3czfvJgfEDfBT5OKA5qAU5'
        }
      ],
      redesSociais: { instagram: 'https://www.instagram.com/_doolsetnet/', spotify: '#' }
    },
    'hyunjin': {
      nome: 'Hyunjin',
      nomeKorean: '현진',
      foto: foto4,
      fotoPosition: 'center 78%',
      posicao: 'Dancer, Rapper',
      nascimento: '20 de Março de 2000',
      nacionalidade: 'Coreano',
      altura: '179 cm',
      biografia: `Hyunjin é um dançarino, rapper e visual do grupo Stray Kids. Entrou para a JYP Entertainment em 2016, permaneceu por dois anos como trainee até debutar em 2018 com o grupo.`,
      projetosSolo: [
        {
          titulo: 'ice.cream',
          ano: 2023,
          descricao: 'Lançada como parte do repertório solo, tem um clima mais suave.',
          spotify: 'https://open.spotify.com/track/07x9Jr01lqjlFycZsfKBae'
        },
        {
          titulo: 'Rush',
          ano: 2023,
          descricao: 'Lançada em participação com Troye Sivan e PinkPantheress.',
          spotify: 'https://open.spotify.com/track/12qq70vp6hMUikpAyeyDPc'
        },
        {
          titulo: 'Love Untold',
          ano: 2022,
          descricao: 'Faixa com uma atmosfera melancólica e meio etérea.',
          spotify: 'https://open.spotify.com/track/1SrsEuRiRoopW2pZDaHgVA'
        },
        {
          titulo: 'Miss You (꼬마별)',
          ano: 2022,
          descricao:
            'Escrita pelo próprio Hyunjin; fala mais sobre sentir falta de alguém especial.',
          spotify: 'https://open.spotify.com/track/1BwFLLe233S6HR1ravS3yi'
        }
      ],
      redesSociais: { instagram: 'https://www.instagram.com/hynjinnnn/', spotify: '#' }
    },
    'felix': {
      nome: 'Felix',
      nomeKorean: '필릭스',
      foto: foto5,
      fotoPosition: 'center 30%',
      posicao: 'Dancer, Rapper',
      nascimento: '15 de Setembro de 2000',
      nacionalidade: 'Australiano-Coreano',
      altura: '171 cm',
      biografia: `Felix é um dançarino e rapper do Stray Kids, natural da Austrália e conhecido pela voz grave marcante e pelo carisma no palco. Integrou a JYP Entertainment em 2017 e estreou com o grupo em 2018. Além do trabalho com o SKZ, colabora em projetos internacionais e é embaixador da marca Louis Vuitton.`,
      projetosSolo: [
        {
          titulo: 'Deep end',
          ano: 2022,
          descricao: 'Balada solo do álbum SKZ-REPLAY; letra e composição assinadas pelo próprio Felix.',
          spotify: 'https://open.spotify.com/track/3VMeAc0SlgLaS9RzA8TSxH'
        },
        {
          titulo: 'Unfair',
          ano: 2024,
          descricao: 'Faixa solo do mixtape HOP, com clima intenso e interpretação vocal marcante.',
          spotify: 'https://open.spotify.com/track/04vneFKe8iMdaA4d2zxgjb'
        },
        {
          titulo: 'ReawakeR (feat. Felix of Stray Kids)',
          ano: 2025,
          descricao: 'Colaboração com LiSA para a opening do anime Solo Leveling.',
          spotify: 'https://open.spotify.com/track/2rOUaQ1TGj7wZdHdn9UgTL'
        },
        {
          titulo: 'NO PROBLEM (Feat. Felix of Stray Kids)',
          ano: 2022,
          descricao: 'Participação no álbum solo da Nayeon (TWICE).',
          spotify: 'https://open.spotify.com/track/4zHvWi4iFAG45lgiN7smLC'
        }
      ],
      redesSociais: { instagram: 'https://www.instagram.com/yong.lixx/', spotify: '#' }
    },
    'seungmin': {
      nome: 'Seungmin',
      nomeKorean: '승민',
      foto: foto6,
      fotoPosition: 'center 40%',
      posicao: 'Vocalista',
      nascimento: '22 de Setembro de 2000',
      nacionalidade: 'Coreano',
      altura: '178 cm',
      biografia: `Kim Seung-min é um dos vocalistas principais do Stray Kids, reconhecido pelo timbre claro e estável e por interpretações emotivas em baladas e OSTs. Treinou na JYP e debutou com o grupo em 2018; costuma ser chamado de “sunshine” pelos fãs pela personalidade gentil e pelo sorriso marcante.`,
      projetosSolo: [
        {
          titulo: 'Here Always',
          ano: 2021,
          descricao: 'OST de Hometown Cha-Cha-Cha; que mostra a sensibilidade vocal do Seungmin.',
          spotify: 'https://open.spotify.com/track/2WdnAdw7zpgU0FRkGiRV8n'
        },
        {
          titulo: 'Stars and Raindrops (Seungmin)',
          ano: 2022,
          descricao: 'Faixa sobre memórias de um amor passado em tom melancólico.',
          spotify: 'https://open.spotify.com/track/5kFGqKqHzVVMMI7V7uoID1'
        },
        {
          titulo: 'Close To You',
          ano: 2022,
          descricao: 'OST de Love in Contract; arranjo com banda e vocais suaves em clima romântico.',
          spotify: 'https://open.spotify.com/track/6JWBfjrCBDXKtFM1ViEAYU'
        },
        {
          titulo: 'CINEMA (Lee Know & Seungmin)',
          ano: 2025,
          descricao: 'Dueto do mixtape dominATE; Feat entre Lee Know e Seungmin.',
          spotify: 'https://open.spotify.com/track/2StQuhn6KdemQlwsvLgwBy'
        }
      ],
      redesSociais: { instagram: 'https://www.instagram.com/miniseungkim/', spotify: '#' }
    },
    'in': {
      nome: 'I.N',
      nomeKorean: '아이엔',
      foto: foto7,
      fotoPosition: 'center 2%',
      posicao: 'Vocalista, Maknae',
      nascimento: '08 de Fevereiro de 2001',
      nacionalidade: 'Coreano',
      altura: '172 cm',
      biografia: `Yang Jeong-in, conhecido como I.N, é o maknae (membro mais novo) e vocalista do Stray Kids. Entrou na JYP após ser descoberto cantando em um evento escolar e evoluiu de voz aguda para um registro mais maduro e versátil. Participa da linha vocal do grupo e costuma surpreender em baladas e faixas acústicas.`,
      projetosSolo: [
        {
          titulo: 'Hug Me',
          ano: 2022,
          descricao: 'Canção acústica folk do SKZ-REPLAY.',
          spotify: 'https://open.spotify.com/track/5gXUFmE5AKFiInKyHVVEnL'
        },
        {
          titulo: 'HALLUCINATION',
          ano: 2024,
          descricao: 'Solo do mixtape HOP; atmosfera sonhadora e vocal delicado.',
          spotify: 'https://open.spotify.com/track/6tVyzdoIKEtPQmhC1oZB7d'
        },
        {
          titulo: 'Maknae On Top',
          ano: 2022,
          descricao: 'Faixa com participação de Bang Chan e Changbin.',
          spotify: 'https://open.spotify.com/track/1J0qupz0gVGSB5jcRY35tL'
        },
        {
          titulo: "Can't Stop",
          ano: 2021,
          descricao: 'Dueto com Seungmin no álbum NOEASY; troca de vocais leve e melodia cativante.',
          spotify: 'https://open.spotify.com/track/33vfE5bxDMHpOFHMSgxehR'
        }
      ],
      redesSociais: { instagram: 'https://www.instagram.com/i.2.n.8/', spotify: '#' }
    },
    'lee-know': {
      nome: 'Lee Know',
      nomeKorean: '리노',
      foto: foto8,
      fotoPosition: 'center 30%',
      posicao: 'Dancer, Vocalista',
      nascimento: '25 de Outubro de 1998',
      nacionalidade: 'Coreano',
      altura: '172 cm',
      biografia: `Lee Min-ho, artisticamente Lee Know, é dançarino principal e vocalista do Stray Kids. Antes do debut, trabalhou como dançarino de apoio e integrou a JYP em 2017. É conhecido pela precisão na dança, pelo humor peculiar e por solos que misturam voz suave e presença de palco marcante.`,
      projetosSolo: [
        {
          titulo: 'Limbo',
          ano: 2022,
          descricao: 'Balada solo do SKZ-REPLAY; letras sobre saudade e um arranjo íntimo.',
          spotify: 'https://open.spotify.com/track/0nuXhivBOFDiriWCpdyU93'
        },
        {
          titulo: 'Youth',
          ano: 2024,
          descricao: 'Faixa solo do mixtape HOP; energia jovem e uma melodia envolvente.',
          spotify: 'https://open.spotify.com/track/6fOLPHRGb6putSY6xFk45t'
        },
        {
          titulo: 'Drive',
          ano: 2022,
          descricao: 'Dueto do SKZ-REPLAY; road trip em forma de música, com vocais relaxados e suaves.',
          spotify: 'https://open.spotify.com/track/0hLvtmoexLKl14LrzxOYRt'
        },
        {
          titulo: 'START!',
          ano: 2025,
          descricao:
            'OST de Resident Playbook (Part. 1); faixa em trio com Seungmin e I.N, com vocais energéticos.',
          spotify: 'https://open.spotify.com/track/4fdxYCWRK0YXkxepMKsCDG'
        }
      ],
      redesSociais: { instagram: 'https://www.instagram.com/t.leeknowsaurus/', spotify: '#' }
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
      <div
        className="perfil-header"
        style={{
          backgroundImage: `url(${membro.foto})`,
          backgroundPosition: membro.fotoPosition
        }}
      >
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

            <div className="card shadow">
              <div className="card-body">
                <h4 className="card-title mb-3">🎬 Principais projetos solo</h4>
                <ul
                  className={
                    membro.projetosSolo.some((p) => typeof p === 'object')
                      ? 'list-unstyled mb-0'
                      : 'mb-0'
                  }
                >
                  {membro.projetosSolo.map((projeto, index) =>
                    typeof projeto === 'string' ? (
                      <li key={index} className="mb-2">{projeto}</li>
                    ) : (
                      <li key={index} className="mb-3 perfil-projeto-solo-item">
                        <div className="d-flex align-items-start gap-2 flex-wrap">
                          <p className="mb-0 flex-grow-1">
                            <strong>{projeto.titulo}</strong> ({projeto.ano}): {projeto.descricao}
                          </p>
                          {projeto.spotify && (
                            <a
                              href={projeto.spotify}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="perfil-projeto-spotify d-inline-flex align-items-center text-decoration-none"
                              title={`Ouvir ${projeto.titulo} no Spotify`}
                              aria-label={`Ouvir ${projeto.titulo} no Spotify`}
                            >
                              <SpotifyIcon />
                            </a>
                          )}
                        </div>
                      </li>
                    )
                  )}
                </ul>
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