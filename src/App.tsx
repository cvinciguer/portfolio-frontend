import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, Services, Contact } from './components/pages';
import Experience from './components/pages/Experience';

function App() {

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Experience />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
  )
}

export default App
