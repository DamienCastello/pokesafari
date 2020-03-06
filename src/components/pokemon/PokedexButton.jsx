import React, { Component } from 'react'

export default class PokedexButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.redirectPokedex}>
                <img src={require('../styles/pokedex.png')} alt={"pokedex-icon"} style={{width: '60px'}} />
            </button>
            </div>
        )
    }
}
