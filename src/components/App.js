import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './pokemon/Pokedex';
import Pokemon from './pokemon/Pokemon';
import World from './world/index';


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
          <Route path="/map" component={World} />
        </Switch>
      </div>
    );
  }
}


export default App;