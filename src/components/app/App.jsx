import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterById from '../../containers/CharacterById';
import CharactersPage from '../../containers/CharactersPage';
import Header from '../characters/Header';
//import { ThemeProvider } from '../ThemeContext';

export default function App() {
  return (
    
    <Router>
      <Header path="/Home" />
      <Switch>
        <Route exact path="/" component={CharactersPage} />
        <Route path="/characters/:id" component={CharacterById} />
      </Switch>
    </Router>
  );
}
