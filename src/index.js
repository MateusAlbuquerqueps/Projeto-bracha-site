import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importando o Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando o Bootstrap JS para funcionalidades interativas
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);