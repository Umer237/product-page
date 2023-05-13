import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import OurStory from './pages/OurStory';

import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
<>

<Switch>
   <Route path='/' element={Home} />
   <Route path='/about' element={About} />
   <Route path='/service' element={Services} />
   <Route path='/contact' element={Contact} />
   <Route path='/ourstory' element={OurStory} />
   </Switch>
  </>
    
  
  );
}

export default App;
