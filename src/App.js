import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Counter from './Counter';
import Arraylist from './Arraylist';
import Interfaces from './Interfaces';
import Page from './Page';
import FigmaDesign from './FigmaDesign';



const App= () => {                                                
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/arraylist" element={<Arraylist />} />
          <Route path="/interfaces" element={<Interfaces />} />
          <Route path="/page" element={<Page />} />
          <Route path="/figmadesign" element={<FigmaDesign />} />

        </Routes>
      </div>

    </Router>
  );
};

export default App