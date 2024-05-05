import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer'
import Service from './components/Services';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar class="sticky top-0 z-50" />
        <Hero class="relative" />
        <About/>
        <Service/>
        <Rooms/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;




