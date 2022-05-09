import App from './App';
import React from 'react';
import Inicio from './routes/Inicio';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        
        <Route path='*' element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
