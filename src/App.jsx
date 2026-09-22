import './style.scss';
import Navbar from './sections/navbar.jsx';
import Hero from './sections/hero.jsx';
import Features from './sections/features.jsx';
import Footer from './sections/footer.jsx';

function App() {
  return (
    // bg-white yerine bg-dark kullanarak tüm sayfayı koyu temaya geçirdik
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <Navbar />
      
      <main className="container flex-grow-1">
        <Hero />
        <Features />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
