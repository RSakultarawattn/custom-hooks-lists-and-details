import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterById from '../../containers/CharacterById';
import CharactersPage from '../../containers/CharactersPage';
import Header from '../characters/Header';
import ThemeProvider from '../context/ThemeContext';

export default function App() {
  return (
    //getting this to merge
    <Router>
      <ThemeProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={CharactersPage} />
          <Route path="/characters/:id" component={CharacterById} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
