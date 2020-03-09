import React, { Component } from 'react';


class PokedexButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.restart}>
                <img src={require('../styles/restart.png')} alt={"restart-icon"} style={{width: '60px'}} />
            </button>
            </div>
        )
    }
}


export default PokedexButton;