import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
