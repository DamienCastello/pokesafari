import React, { Component } from 'react';
import PokeList from '../PokeList';
import '../styles/Pokedex.css';
import Axios from 'axios';
import url from '../../utils/url';
import store from '../../store';



export default class Pokemons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: []
        };
    }

    componentDidMount() {
        Axios.get(url.pokemonsUrl)
            .then(response => {
                this.setState({ pokemons: response.data.results })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="Pokedex">
                <div className="info-container">
                    <div className="info">
                <h2>POKEMON CATCHED :</h2>
                <h2>{localStorage.getItem("catched")===null?0:localStorage.getItem("catched").split(",").length}</h2>
                </div>
                <div className="info">
                <h2>POKEMON ESCAPED :</h2>
                <h2>{localStorage.getItem("escaped")===null?0:localStorage.getItem("escaped").split(",").length}</h2>
                </div>
                <div className="poke-btn">
                <button onClick={() => this.props.history.push(`/`)}>
                    <img src={require('../styles/planet.png')} alt="map_icon" style={{ width: '100px' }} />
                </button>
                </div>
                </div>
                <PokeList pokemons={this.state.pokemons} />
            </div>
        )
    }
}
