
import React, { Component } from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';

class PokeList extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="poke-list">
            {this.props.pokemons.map((pokemon, idx) => {
                return (
                <PokeCell 
                pokemon={pokemon} 
                pokemons={this.props.pokemons} 
                key={pokemon.idx} 
                id={idx+1}/>
                ) 
            })}
        </section>
        )
    }
}

export default PokeList;