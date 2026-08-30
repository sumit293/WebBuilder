import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import useGetCurrrentUser from './hooks/useGetCurrrentUser'
export const serverUrl = "http://localhost:8000"
function App() {
useGetCurrrentUser()

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App