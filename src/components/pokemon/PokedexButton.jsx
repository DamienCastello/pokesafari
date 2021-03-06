import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCatched } from '../../store/actions/catched';
import { updateEscaped } from '../../store/actions/escaped';

class PokedexButton extends Component {
    render() {
        this.props.updateCatched(this.props.catched);
        this.props.updateEscaped(this.props.escaped);
        return (
            <div>
                <button onClick={this.props.redirectPokedex}>
                    <img src={require('../styles/pokedex.png')} alt={"pokedex-icon"} style={{ width: '60px' }} />
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    updateCatched,
    updateEscaped
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexButton)