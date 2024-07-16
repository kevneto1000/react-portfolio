import React, {useEffect} from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from ".././src/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"))
const Service = React.lazy(() => import("./pages/Service"))
const Project = React.lazy(() => import("./pages/Project"))
const Contact = React.lazy(() => import("./pages/Contact"))

function App() {

  useEffect(() => {
     
    AOS.init({
      
      offset: 200, 
      delay: 0,
      duration: 1000, 
      easing: 'ease',
      once: false,
      mirror: false, 
    });
  }, []);

  return (
    <React.Suspense fallback={<div style={{position:"absolute", top:"50%", left:"50%"}}>
      <img src={("./../loader.gif")} alt="" />
    </div>}>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </React.Suspense>
  )
}

export default App