import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles/PokeCell.css';
import Axios from 'axios';

class PokeCell extends Component {
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

  componentDidMount() {
    Axios.get(this.props.pokemon.url)
      .then(response => {
        this.setState({ pokemon: response.data })
      })
      .catch(err => console.log(err))
  }


  render() {
    //unknown means catched or escaped pokemons
    let unknown = false
    let id = this.props.id;
    //Need to compare only strings
    id = (id - 1).toString();
    if (localStorage.getItem('catched') !== null) {
      localStorage.getItem('catched').split(",").map((catched) => catched === id ? unknown = true : unknown);
    }
    if (localStorage.getItem('escaped') !== null) {
      localStorage.getItem('escaped').split(",").map((escaped) => escaped === id ? unknown = true : unknown);
    }
    return (
      //conditional rendering on unknown boolean
      <div>
        {unknown
          ?
          <button
            onClick={() => this.props.history.push(`/pokemon/${this.props.id}`)}
            className="poke-cell">
            <img src={this.state.pokemon.sprites.front_default} alt="Logo" style={{ backgroundColor: "#185400", backgroundImage: 'url("https://www.transparenttextures.com/patterns/bright-squares.png")' }} />
          </button>
          :
          <button
            className="poke-cell">
            <img src={this.state.pokemon.sprites.front_default} alt="Logo" style={{ backgroundColor: "#540300", backgroundImage: 'url("https://www.transparenttextures.com/patterns/bright-squares.png")' }} />
          </button>
        }
      </div>
    )
  }
}

export default withRouter(PokeCell);