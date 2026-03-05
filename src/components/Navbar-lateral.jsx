import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Vamos criar este arquivo CSS também

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão Hambúrguer */}
      <button 
        className={`hamburger-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay escuro quando menu está aberto */}
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      {/* Menu Lateral */}
      <nav className={`side-menu ${isOpen ? 'open' : ''}`}>
        {/* Logo/Header do Menu */}
        <div className="menu-header">
          <h2 className="menu-title">SKZ BRacha</h2>
          <button className="close-btn" onClick={closeMenu}>×</button>
        </div>

        {/* Links de navegação */}
        <ul className="menu-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
              onClick={closeMenu}
            >
              <span className="menu-icon">🏠</span>
              <span className="menu-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/loja" 
              className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
              onClick={closeMenu}
            >
              <span className="menu-icon">🛍️</span>
              <span className="menu-text">Loja</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/guia" 
              className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
              onClick={closeMenu}
            >
              <span className="menu-icon">📖</span>
              <span className="menu-text">Guia</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/redes" 
              className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
              onClick={closeMenu}
            >
              <span className="menu-icon">🔗</span>
              <span className="menu-text">Redes</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/discografia" 
              className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
              onClick={closeMenu}
            >
              <span className="menu-icon">🎵</span>
              <span className="menu-text">Discografia</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/noticias" 
              className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
              onClick={closeMenu}
            >
              <span className="menu-icon">📰</span>
              <span className="menu-text">Notícias</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/agenda" 
              className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
              onClick={closeMenu}
            >
              <span className="menu-icon">📅</span>
              <span className="menu-text">Agenda</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/fanarts" 
              className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
              onClick={closeMenu}
            >
              <span className="menu-icon">🎨</span>
              <span className="menu-text">Fanarts</span>
            </NavLink>
          </li>
        </ul>

        {/* Footer do Menu (opcional) */}
        <div className="menu-footer">
          <p className="text-muted small mb-0">© 2024 SKZ BRacha</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
