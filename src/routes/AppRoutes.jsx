import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importando todas as páginas
import Home from '../pages/Home';
import Loja from '../pages/Loja';
import Guia from '../pages/Guia';
import Redes from '../pages/Redes';
import Discografia from '../pages/Discografia';
import Noticias from '../pages/Noticias';
import NoticiaDetalhe from '../pages/NoticiaDetalhe';
import Agenda from '../pages/Agenda';
import Fanarts from '../pages/Fanarts';
import MembroPerfil from '../pages/MembroPerfil';

function AppRoutes() {
  return (
    <Routes>
      {/* Rota principal */}
      <Route path="/" element={<Home />} />
      
      {/* Rotas das páginas principais */}
      <Route path="/loja" element={<Loja />} />
      <Route path="/guia" element={<Guia />} />
      <Route path="/redes" element={<Redes />} />
      <Route path="/discografia" element={<Discografia />} />
      
      {/* Rotas de notícias */}
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/noticias/:id" element={<NoticiaDetalhe />} />
      
      {/* Rotas de conteúdo da comunidade */}
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/fanarts" element={<Fanarts />} />
      
      {/* Rotas dos perfis dos membros */}
      <Route path="/membro/:nome" element={<MembroPerfil />} />
      
      {/* Rota 404 - página não encontrada */}
      <Route path="*" element={
        <div className="container py-5 text-center">
          <h1>404</h1>
          <p>Página não encontrada</p>
          <a href="/" className="btn btn-success">Voltar para Home</a>
        </div>
      } />
    </Routes>
  );
}

export default AppRoutes;
