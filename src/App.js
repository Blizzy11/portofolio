import logo from './logo.svg';
import './App.css';
import './css/Home.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portofolio from './pages/Portofolio';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='sticky top-0'>
          <Navbar />
        </div>
        <div className=''>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portofolio" element={<Portofolio />} />
          </Routes>
          {/* <Hero />
          <Ability /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
