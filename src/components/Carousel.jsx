import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

// Importar as imagens
import foto1 from '../assets/images/carousel/foto-01.jpg';
import foto2 from '../assets/images/carousel/foto-02.jpg';
import foto3 from '../assets/images/carousel/foto-03.jpg';
import foto4 from '../assets/images/carousel/foto-04.jpg';
import foto5 from '../assets/images/carousel/foto-05.jpg';
import foto6 from '../assets/images/carousel/foto-06.jpg';
import foto7 from '../assets/images/carousel/foto-07.jpg';
import foto8 from '../assets/images/carousel/foto-08.jpg';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Dados dos membros
  const membros = [
    { 
      id: 1, 
      nome: 'Bang Chan', 
      imagem: foto1,
      rota: '/membro/bang-chan'
    },
    { 
      id: 2, 
      nome: 'Changbin', 
      imagem: foto2,
      rota: '/membro/changbin'
    },
    { 
      id: 3, 
      nome: 'Han', 
      imagem: foto3,
      rota: '/membro/han'
    },
    { 
      id: 4, 
      nome: 'Hyunjin', 
      imagem: foto4,
      rota: '/membro/hyunjin'
    },
    { 
      id: 5, 
      nome: 'Felix', 
      imagem: foto5,
      rota: '/membro/felix'
    },
    { 
      id: 6, 
      nome: 'Seungmin', 
      imagem: foto6,
      rota: '/membro/seungmin'
    },
    { 
      id: 7, 
      nome: 'I.N', 
      imagem: foto7,
      rota: '/membro/in'
    },
    { 
      id: 8, 
      nome: 'Lee Know', 
      imagem: foto8,
      rota: '/membro/lee-know'
    }
  ];

  // Auto-play - troca a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === membros.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? membros.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (rota) => {
    navigate(rota);
  };

  return (
    <div className="carousel-container">
      {/* Seta Esquerda */}
      <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
        ‹
      </button>

      {/* Slides */}
      <div className="carousel-slides">
        {membros.map((membro, index) => (
          <div
            key={membro.id}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleImageClick(membro.rota)}
          >
            <img 
              src={membro.imagem} 
              alt={membro.nome}
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h2>{membro.nome}</h2>
              <p>Clique para ver mais</p>
            </div>
          </div>
        ))}
      </div>

      {/* Seta Direita */}
      <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
        ›
      </button>

      {/* Indicadores (bolinhas) */}
      <div className="carousel-indicators">
        {membros.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
