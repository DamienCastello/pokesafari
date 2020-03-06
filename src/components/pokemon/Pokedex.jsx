import React, { Component } from 'react';
import PokeList from '../PokeList';
import '../styles/Pokedex.css';
import Axios from 'axios';
import url from '../../utils/url';



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
                <button
                    onClick={() => this.props.history.push(`/`)}
                    style={{ marginRight: '20px' }}>
                    <img src={require('../styles/planet.png')} alt="map_icon" style={{ width: '100px' }} />
                </button>
                <PokeList pokemons={this.state.pokemons} />
            </div>
        )
    }
}
