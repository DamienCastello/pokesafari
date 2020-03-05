import React, { Component } from 'react';
import './styles/PokeCell.css';
import Axios from 'axios';

export default class PokeCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: this.props.pokemons,
      pokemon: {
        sprites: {},
        species: {},
        types: []
      }
    }
  }

  componentDidMount(){
    Axios.get(this.props.pokemon.url)
    .then(response => {
        this.setState({pokemon: response.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log('stateOfPokeCell component', this.state);
    console.log('propsOfPokeCell component', this.props.pokemons);
    console.log('pokemonOfPokeCell component', this.props.pokemon);
    console.log('test', this.props)
    return (
      <div>
        <button className="poke-cell">
          <img src={this.state.pokemon.sprites.front_default} alt="Logo" />
        </button>
      </div>
    )
  }
}
