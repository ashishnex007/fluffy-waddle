import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbarx from "./components/Navbar";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Footerx from "./components/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {

  return (
    <>
      <Router>
        <Navbarx />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/features" element={<Features />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        <Footerx />
      </Router>
    </>
  )
}

export default App
