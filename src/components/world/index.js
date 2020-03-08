import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../styles/World.css';
import PokemonsLocation from '../../utils/mock';
import Axios from 'axios';
import url from '../../utils/url';
import PokedexButton from '../pokemon/PokedexButton';
import { updateCatched } from '../../store/actions/catched';
import { updateEscaped } from '../../store/actions/escaped';

import { connect } from 'react-redux';
import store from '../../store';

class World extends Component {
    constructor() {
        super();
        this.state = {
            activePokemon: [],
            pokemons: [],
            catched: [],
            escaped: [],
        };
    }

    redirectPokedex = () => {
        localStorage.removeItem('catched');
        localStorage.removeItem('escaped');
        localStorage.setItem('catched', this.state.catched);
        localStorage.setItem('escaped', this.state.escaped);
        this.props.history.push('/pokedex');
    }

    render() {
        console.log(this.props, 'here')

        console.log("CURRENT REDUX STATE IN WORLD:", store.getState());
        console.log("STATE IN WORLD:", this.state)
        return (
            <div className="leaflet-container">
                <div style={{ position: "absolute", top: "10px", left: "50px", zIndex: 1 }}>
                    <PokedexButton
                        redirectPokedex={this.redirectPokedex}
                        catched={this.state.catched}
                        escaped={this.state.escaped} />
                </div>
                <Map center={[43.6, 3.8833]} zoom={12} dragging={true} animate={true} style={{ zIndex: 0 }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxZoom='19'
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                    {PokemonsLocation.map((pokemonLocation, idx) => {
                        return (
                            <Marker
                                key={idx + 1}
                                position={pokemonLocation}
                                onClick={() => {
                                    Axios.get(`${url.pokemonUrl}/${idx + 1}`)
                                        .then(response => {
                                            this.setState({ pokemons: [response.data.sprites.front_default, ...this.state.pokemons] })
                                        })
                                        .catch(err => console.log(err))
                                    this.setState({
                                        activePokemon: [{ id: idx, location: pokemonLocation }, ...this.state.activePokemon],
                                    })
                                }} />
                        )
                    })}

                    {this.state.activePokemon.map((data, idx) => {
                        let random = Math.random();
                        //FIX BUG HERE: Need to make keys unique but template string always interprets values ...
                            return <Popup key={data["id"]} position={data["location"]}>
                            <div style={this.state.catched.includes(data["id"]) ? { backgroundColor: 'green' } : this.state.escaped.includes(data["id"]) ? { backgroundColor: 'red' } : {}}>
                                <h2>{data["id"]+1}</h2>
                                <img src={this.state.pokemons[idx]} alt={"poke-preview"} style={{ width: "100px", height: "100px" }} />
                                <p>Let's Catch him !</p>
                                <button onClick={() => {
                                    if (random < 0.50) {
                                        alert("Yes ! I got him !");
                                        this.setState({ catched: [data["id"], ...this.state.catched] });
                                    } else {
                                        alert("Oh damn ! He escaped !");
                                        this.setState({ escaped: [data["id"], ...this.state.escaped] });
                                    }
                                }}>
                                    <img src={require("../styles/pokeball.png")} alt={"pokeball-icon"} style={{ width: "40px", height: "40px" }} />
                                </button>
                            </div>
                        </Popup>
                        
                        
                    })}
                </Map>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    updateCatched,
    updateEscaped
}

export default connect(mapStateToProps, mapDispatchToProps)(World)
