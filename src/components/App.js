import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './pokemon/Pokedex';
import Pokemon from './pokemon/Pokemon';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/pokedex" component={Pokedex}/>
          <Route path="/pokemon/:id" component={Pokemon}/>
        </Switch>
      </div>
    );
  }
}


export default App;