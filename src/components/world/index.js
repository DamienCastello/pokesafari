import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import '../styles/World.css';
import PokemonsLocation from '../../utils/mock';


class World extends Component {
    constructor() {
        super();
        this.state = {};
    }


    render() {
        console.log(PokemonsLocation);
        return (
            <div className="leaflet-container">
                <Map center={[43.6, 3.8833]} zoom={12} dragging={true}
                    animate={true}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxZoom='19'
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                    {PokemonsLocation.map((pokemonLocation, idx) => {
                        
                        console.log("hey", pokemonLocation);
                        return (
                            <Marker
                                key={idx+1}
                                position={pokemonLocation} />
                        )
                    })}
                </Map>
            </div>
        );
    }
}


export default World;