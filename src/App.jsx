import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Bridal from './pages/Bridal';
import Evening from './pages/Evening';
import Custom from './pages/Custom';
import RentBuy from './pages/RentBuy';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/evening" element={<Evening />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/rent-buy" element={<RentBuy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;