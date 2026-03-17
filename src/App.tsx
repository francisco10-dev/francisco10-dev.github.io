// src/App.tsx
import './styles/globals.css';
import './App.css';
import { AppProvider } from './context/AppContext';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Skills from './sections/skills/Skills';
import Contact from './sections/contact/Contact';
import Edu from './sections/education/edu';

function App() {
  return (
    <AppProvider>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
       {/* <Projects />*/}
        <Skills />
        <Edu />
        <Contact />
      </main>
      <Footer />
    </AppProvider>
  );
}

export default App;
