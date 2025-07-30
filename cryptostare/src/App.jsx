import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Coin from './pages/Coin'
import Compare from './pages/Compare'
import Watchlist from './pages/Watchlist'
import { BrowserRouter, Routes, Route } from'react-router-dom'



function App() {
 

  return (
    <>
 <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
