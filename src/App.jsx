import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import OurStory from './pages/OurStory';

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
<>

<BrowserRouter>
<Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/service' element={<Services/>} />
   <Route path='/contact' element={<Contact/>} />
   <Route path='/ourstory' element={<OurStory/>} />
</Routes>
</BrowserRouter>
  </>
    
  
  );
}

export default App;
