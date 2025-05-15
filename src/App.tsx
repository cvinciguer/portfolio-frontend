import './App.css'
import { Route, Routes } from 'react-router-dom';
import Experience from './pages/About/Experience';
import { Contact } from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import { Services } from './pages/Services/Services';
import Navbar from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={4000} pauseOnHover={false} />
    </div>
  )
}

export default App
