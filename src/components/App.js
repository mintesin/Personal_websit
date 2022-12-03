import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Skills from './Skills' 
import Certification from "./Cerification";
import Education from "./Education"
import Projects from "./Projects"
import Contact from "./Contact"
import About from "./About";


function App() {
  return (
    <div>
    <Heading/>
    <About />
    <Education/>
    <Certification />
    <Projects />
    <Skills/>
    <Contact />
    
      <Footer />
      
      
    
    </div>
  );
}

export default App;
