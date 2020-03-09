import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './pokemon/Pokedex';
import Pokemon from './pokemon/Pokemon';
import World from './world/index';
import './styles/app.css';
import { connect } from 'react-redux';



class App extends Component {
  constructor() {
    super();
    this.state = {
      ready: false
    };
  };


  render() {

    return (
      <div className="App">
        <Switch>
          <Route path="/pokedex" component={Pokedex} />
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route path="/" component={World} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
