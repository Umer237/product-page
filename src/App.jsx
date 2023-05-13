import Home from './pages/Home';
import './App.css';

import Contact from './pages/Contact';
import Recipes from './pages/Recipes';
import OurStory from './pages/OurStory';
import Store from './pages/Store';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
<>

<Switch>
   <Route exact path='/' component={Home} />
   <Route exact path='/ourstory' component={OurStory} />
   <Route exact path='/recipes' component={Recipes} />
   <Route exact path='/contact' component={Contact} />
   <Route exact path='/store' component={Store} />
   </Switch>
  </>
    
  
  );
}

export default App;
