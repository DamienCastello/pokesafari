import React, { Component } from 'react';
import PokeList from '../PokeList';
import '../styles/Pokemons.css';
import Axios from 'axios';
import url from '../../utils/url';



export default class Pokemons extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemons: []
        };
    }

    componentDidMount(){
        Axios.get(url.pokemonsUrl)
        .then(response => {
            this.setState({pokemons: response.data.results})
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log('stateOfPokemons Component:', this.state)
        return (
            <div className="Pokemons">
                <PokeList pokemons={this.state.pokemons} />
            </div>
        )
    }
}
