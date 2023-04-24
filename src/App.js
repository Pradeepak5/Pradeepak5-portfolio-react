import './App.css';
import * as React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Contact } from './Contact';
import Projects from './Projects';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
export const drawerWidth = 240;
export const navItems = ['Home', 'About', 'Skills', 'PathWay','Projects', 'Contact'];

