import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';
import { CartProvider } from './hooks/CartContext.jsx'; 
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          {/* 404页面 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;