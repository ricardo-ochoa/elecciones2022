import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { App } from '../components/App';
import { Candidato } from '../components/Candidato';
import { Distritos } from '../components/Distritos';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/distritos" element={<Distritos />} />
            <Route path="/:id" element={<Candidato />} />
            <Route
                path="*"
                element={<Navigate to="/" />}
             />
        </Routes>  
    </BrowserRouter>
  )
}
