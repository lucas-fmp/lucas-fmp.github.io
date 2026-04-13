import { LanguageProvider } from './i18n/LanguageContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#050505] text-white min-h-screen">
        <NavBar />
        <Home />
        <div className="section-divider max-w-6xl mx-auto" />
        <About />
        <div className="section-divider max-w-6xl mx-auto" />
        <Experience />
        <div className="section-divider max-w-6xl mx-auto" />
        <TechStack />
        <div className="section-divider max-w-6xl mx-auto" />
        <Education />
        <div className="section-divider max-w-6xl mx-auto" />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
