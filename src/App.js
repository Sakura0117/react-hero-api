import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroesPage from './pages/HeroesPage'
import HeroPage from './pages/HeroPage'
import Comics from './pages/ComicsPage'
import Comic from './pages/ComicPage'

function App() {
  return (
    <Router>
      <>
        <Route exact path='/heroes' component={HeroesPage} />
        <Route exact path='/comics' component={Comics} />
        <Route exact path='/comics/:id' component={Comic} />
        <Route exact path='/heroes/:id' component={HeroPage} />
      </>
    </Router>
  );
}

export default App;