import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
