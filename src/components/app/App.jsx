import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterById from '../../containers/CharacterById';
import CharactersPage from '../../containers/CharactersPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharactersPage} />
        <Route path="/characters/:id" component={CharacterById} />
      </Switch>
    </Router>
  );
}
