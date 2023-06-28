import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import SearchResults from 'pages/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile/:username' element={<Profile />}/>
        <Route path='/search' element={<SearchResults />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
