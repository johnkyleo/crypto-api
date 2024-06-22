
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopCoins from './components/TopCoins';
import Contact from './components/Contact';
import About from './components/About';

function App() {


  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/topcoins" element={<TopCoins/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
     
    <Footer/>
    </BrowserRouter>
  )
}

export default App
