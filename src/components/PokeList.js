import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';

const PokeList = (props) => {
    return (
        <section className="poke-list">
            {props.pokemons.map((pokemon, idx) => {
                return <PokeCell pokemon={pokemon} pokemons={props.pokemons} key={pokemon.idx} id={idx+1}/> 
            })}
        </section>
    )
}


export default PokeList;