import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/index';
import Contact from './components/Contact/Index';
import Home from './components/Home';
import PlantDetailContainer from './components/PlantDetailContainer';
import CartDetail from './components/CartDetail/Index';
import Profile from './components/Profile';
import CartContextProvider from './components/CartContext';
import './App.css';

function App() {
  return (
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='plant/:id' element={<PlantDetailContainer />} />
        <Route path='cart' element={<CartDetail />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </CartContextProvider>
  );
}

export default App;
