import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

// Importar as imagens
import foto1 from '../assets/images/carousel/foto-19.jpg';
import foto2 from '../assets/images/carousel/foto-11.jpg';
import foto3 from '../assets/images/carousel/foto-35.jpg';
import foto4 from '../assets/images/carousel/foto-49.JPG';
import foto5 from '../assets/images/carousel/foto-29.jpeg';
import foto6 from '../assets/images/carousel/foto-09.jpg';
import foto7 from '../assets/images/carousel/foto-45.jpg';
import foto8 from '../assets/images/carousel/foto-27.jpg';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [useLongTransition, setUseLongTransition] = useState(false);
  const navigate = useNavigate();
  const startX = useRef(0);
  const justDragged = useRef(false);
  const containerRef = useRef(null);
  const handleDragMoveRef = useRef();
  const handleDragEndRef = useRef();

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
    setCurrentIndex((prevIndex) => {
      if (prevIndex === membros.length - 1) {
        setUseLongTransition(true);
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // Volta à transição normal após a volta completa (último → primeiro)
  useEffect(() => {
    if (!useLongTransition) return;
    const t = setTimeout(() => setUseLongTransition(false), 1200);
    return () => clearTimeout(t);
  }, [useLongTransition]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? membros.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = (rota, e) => {
    if (justDragged.current) {
      justDragged.current = false;
      return;
    }
    navigate(rota);
  };

  const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const handleDragStart = (e) => {
    if (e.button !== undefined && e.button !== 0) return; // só botão esquerdo do mouse
    startX.current = getClientX(e);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    if (e.touches) e.preventDefault();
    const x = getClientX(e);
    const offset = x - startX.current;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    const threshold = 50;
    if (dragOffset > threshold) {
      prevSlide();
      justDragged.current = true;
    } else if (dragOffset < -threshold) {
      nextSlide();
      justDragged.current = true;
    }
    setDragOffset(0);
    setIsDragging(false);
  };

  // Transição suave só quando não está arrastando (cada slide = 100/n % do track)
  const slidePercent = 100 / membros.length;
  const transitionDuration = useLongTransition ? 1.2 : 0.5;
  const trackStyle = {
    transform: `translateX(calc(-${currentIndex * slidePercent}% + ${dragOffset}px))`,
    transition: isDragging ? 'none' : `transform ${transitionDuration}s ease-in-out`,
  };

  handleDragMoveRef.current = handleDragMove;
  handleDragEndRef.current = handleDragEnd;

  // Listeners globais para arrastar com mouse (quando o cursor sai do carrossel)
  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e) => handleDragMoveRef.current?.(e);
    const onEnd = () => handleDragEndRef.current?.();
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    return () => {
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
    };
  }, [isDragging]);

  return (
    <div className="carousel-container" ref={containerRef}>
      {/* Seta Esquerda */}
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        ‹
      </button>

      {/* Faixa de slides (arrasta horizontalmente) */}
      <div
        className="carousel-track"
        style={trackStyle}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onTouchCancel={handleDragEnd}
        onMouseDown={handleDragStart}
      >
        {membros.map((membro, index) => (
          <div
            key={membro.id}
            className="carousel-slide"
            onClick={(e) => handleImageClick(membro.rota, e)}
          >
            <img 
              src={membro.imagem} 
              alt={membro.nome}
              className="carousel-image"
              draggable={false}
            />
            <div className="carousel-caption">
              <h2>{membro.nome}</h2>
              <p>Clique para ver mais</p>
            </div>
          </div>
        ))}
      </div>

      {/* Seta Direita */}
      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
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
