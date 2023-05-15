import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Store from './Store'
import OurStory from './OurStory'
import Recipes from './Recipes'
import Contact from './Contact'


const Home = () => {
  return (
 <>
 <BrowserRouter>
<Switch>
  <Route exact path='/' component={HomePage} />
  <Route exact path='/ourstory' component={OurStory} />
  <Route exact path='/recipes' component={Recipes} />
  <Route exact path='/contact' component={Contact} />
  <Route exact path='/store' component={Store}/>
  </Switch>
 </BrowserRouter>
 </>
  )
}

export default Home