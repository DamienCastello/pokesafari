import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../styles/World.css';
import PokemonsLocation from '../../utils/mock';
import Axios from 'axios';
import url from '../../utils/url';
import PokedexButton from '../pokemon/PokedexButton';
import RestartButton from '../pokemon/RestartButton';
import { updateCatched } from '../../store/actions/catched';
import { updateEscaped } from '../../store/actions/escaped';

import { connect } from 'react-redux';

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



        if (this.state.catched.length > 0) {
            if (localStorage.getItem("catched") !== null) {
                localStorage.setItem("catched", `${localStorage.getItem("catched")},${this.state.catched}`)
            }
            localStorage.setItem('catched', this.state.catched)
        }



        if (this.state.escaped.length > 0) {
            if (localStorage.getItem("escaped") !== null) {
                localStorage.setItem("escaped", localStorage.getItem("escaped") + "," + (this.state.escaped))
            }
            localStorage.setItem('escaped', this.state.escaped)
        }
        //localStorage.setItem('catched', localStorage.getItem("catched") === null ? this.state.catched : localStorage.getItem("catched") + "," + (this.state.catched));
        //localStorage.setItem('escaped', localStorage.getItem("escaped") === null ? this.state.escaped : localStorage.getItem("escaped") + "," + (this.state.escaped));
        this.props.history.push('/pokedex');

    };

    restart = () => {
        localStorage.removeItem('catched');
        localStorage.removeItem('escaped');
    };

    render() {
        return (
            <div className="leaflet-container">
                <div style={{ position: "absolute", top: "110px", left: "50px", zIndex: 1 }}>
                    <div className="btn-container">
                        <PokedexButton
                            redirectPokedex={this.redirectPokedex}
                            catched={this.state.catched}
                            escaped={this.state.escaped} />
                        <p>Go pokedex</p>
                    </div>
                </div>
                <div style={{ position: "absolute", top: "110px", left: "140px", zIndex: 1 }}>
                    <div className="btn-container">
                        <RestartButton
                            restart={this.restart} />
                        <p>Restart game</p>
                    </div>
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
                                <h2>{data["id"] + 1}</h2>
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
