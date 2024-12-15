import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import ProductsPage from './pages/products/ProductsPage';
import CartPage from './pages/cart/CartPage';
import ProfilePage from './pages/profile/ProfilePage';
import AuthPage from './pages/auth/AuthPage';
import Navbar from './components/_navbar/Navbar';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="products" element={<ProductsPage/>}/>
      <Route path="cart" element={<CartPage/>}/>
      <Route path="profile" element={<ProfilePage/>}/>
      <Route path="auth" element={<AuthPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
