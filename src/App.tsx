import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Services, Contact } from './components/pages';

function App() {

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
  )
}

export default App
