import React, { Component } from 'react';
import PokeCard from './PokeCard';
import Axios from 'axios';
import url from '../../utils/url';

import '../styles/Pokedex.css';

export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pokemon: {
            sprites: {},
            species: {},
            types: []
          }
        }
      }
    
      componentDidMount(){
        Axios.get(`${url.pokemonUrl}/${this.props.match.params.id}/`)
        .then(response => {
            this.setState({pokemon: response.data})
        })
        .catch(err => console.log(err))
      }


      getImgFromType(type){
        switch (type) {
          case "normal":
            return "https://cdn.bulbagarden.net/upload/2/22/GO_Normal.png"
            case "fighting":
            return "https://cdn.bulbagarden.net/upload/1/1e/GO_Fighting.png"
            case "flying":
            return "https://cdn.bulbagarden.net/upload/8/87/GO_Flying.png"
            case "poison":
            return "https://cdn.bulbagarden.net/upload/f/ff/GO_Poison.png"
            case "ground":
            return "https://cdn.bulbagarden.net/upload/2/21/GO_Ground.png"
            case "rock":
            return "https://cdn.bulbagarden.net/upload/1/11/GO_Rock.png"
            case "bug":
            return "https://cdn.bulbagarden.net/upload/9/94/GO_Bug.png"
            case "ghost":
            return "https://cdn.bulbagarden.net/upload/a/a1/GO_Ghost.png"
            case "steel":
            return "https://cdn.bulbagarden.net/upload/d/d2/GO_Steel.png"
            case "fire":
            return "https://cdn.bulbagarden.net/upload/0/0e/GO_Fire.png"
            case "water":
            return "https://cdn.bulbagarden.net/upload/a/aa/GO_Water.png"
            case "grass":
            return "https://cdn.bulbagarden.net/upload/6/61/GO_Grass.png"
            case "electric":
            return "https://cdn.bulbagarden.net/upload/4/4a/GO_Electric.png"
            case "psychic":
            return "https://cdn.bulbagarden.net/upload/f/f2/GO_Psychic.png"
            case "ice":
            return "https://cdn.bulbagarden.net/upload/c/c6/GO_Ice.png"
            case "dragon":
            return "https://cdn.bulbagarden.net/upload/9/90/GO_Dragon.png"
            case "dark":
            return "https://cdn.bulbagarden.net/upload/7/73/GO_Dark.png"
            case "fairy":
            return "https://cdn.bulbagarden.net/upload/a/ae/GO_Fairy.png"
            case "unknown":
            return "https://www.pokepedia.fr/images/b/bb/Miniature_Type_Inconnu_Colo.png"
            default: break;
        }
      }



    render() {
        console.log('proooops', this.state)
        return (
            <div className="Pokedex">
            <button 
            onClick={() => this.props.history.push(`/pokedex`)}
            style={{marginRight:'20px'}}>
                <img src={require('../styles/back_icon.png')} alt="back_icon" style={{width: '45px'}} />
                </button>
               <PokeCard  
               id={this.props.match.params.id} 
               getImgFromType={this.getImgFromType}
               pokemon={this.state.pokemon}/>

            </div>
        )
    }
}
