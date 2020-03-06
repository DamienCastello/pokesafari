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

  componentDidMount(){
    Axios.get(this.props.pokemon.url)
    .then(response => {
        this.setState({pokemon: response.data})
    })
    .catch(err => console.log(err))
  }


  render() {
    console.log(localStorage["catched"].split(","))
    console.log(localStorage["escaped"].split(","))
    console.log(this.props.id)
    let unknown = false
    /*for(let i=0;i<localStorage["catched"].split(',').length;i++){
      if(localStorage["catched"][i]===this.props.id){
        unknown = true;
      } 
    }
    for(let j=0;localStorage["escaped"].split(',').length;j++){
      if(localStorage["escaped"][j]===this.props.id){
        unknown = true;
      }
    }*/
    let id = this.props.id;
    id = (id-1).toString();
    localStorage["catched"].split(",").map((catched) => catched === id ? unknown = true : unknown);
    localStorage["escaped"].split(",").map((escaped) => escaped === id ? unknown = true : unknown);
    console.log(unknown)
    console.log('id', typeof id)
    return (

      <div>
        { unknown
        ? 
        <button 
        onClick={() => this.props.history.push(`/pokemon/${this.props.id}`)}
        className="poke-cell">
          <img src={this.state.pokemon.sprites.front_default} alt="Logo" style={{backgroundColor: "#185400", backgroundImage: 'url("https://www.transparenttextures.com/patterns/bright-squares.png")'}}/>
        </button> 
        : 
        <button 
        className="poke-cell">
          <img src={this.state.pokemon.sprites.front_default} alt="Logo" style={{backgroundColor: "#540300", backgroundImage: 'url("https://www.transparenttextures.com/patterns/bright-squares.png")'}}/>
        </button>  
      
        }
        
      </div>
    )
  }
}

export default withRouter(PokeCell);