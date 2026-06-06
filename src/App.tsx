import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import Personal from './pages/Personal';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <ScrollToTop />
      <Nav />
      <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
