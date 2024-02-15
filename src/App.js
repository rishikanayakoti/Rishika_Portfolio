import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from "./components/projects/Projects";
import Milestones from "./components/milestones/Milestones";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
function App() {
  return (
   <>
   <Header/>
   <main className ="main">
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Milestones/>
    <Contact/>
    
   </main>
   
    <Footer/>
    <Scrollup/>
   </>
  );
}

export default App;
