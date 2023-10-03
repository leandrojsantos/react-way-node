import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;    
  }
  
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/favoritos" element={<h1>Test route favoritos</h1>} />
              <Route path="/categorias" element={<h1>Test route categorias</h1>} />
              <Route path="/compras" element={<h1>Test route compras</h1>} />
          </Routes>
      </BrowserRouter>
      <App />
  </React.StrictMode>
);

reportWebVitals();
