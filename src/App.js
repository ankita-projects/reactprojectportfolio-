import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import './App.scss';

function App() {
  return (
   <main className="text-gray-400 bg-gray-900 body-font">
     <Navbar/>
     <About/>
     <Cards />
     <Skills/>
     <Contact/>
   </main>
  );
}

export default App;
