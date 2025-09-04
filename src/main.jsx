import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import MarketPrices from './pages/MarketPrices'
import SoilAnalysis from './pages/SoilAnalysis'
import CropPrediction from './pages/CropPrediction'
import Chatbot from './pages/Chatbot'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/market" element={<MarketPrices />} />
      <Route path="/soil" element={<SoilAnalysis />} />
      <Route path="/crop" element={<CropPrediction />} />
      <Route path="/chat" element={<Chatbot />} />
    </Routes>
  </BrowserRouter>
)