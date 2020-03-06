import React from 'react';
import '../styles/PokeList.css';
import { Container, Row, Col } from 'reactstrap';

export default function PokeCard(props) {
    return (
        <div className="poke-list">
            <Container>

                <Row>
                    <Col xs={6}>
                        <p>Name : {props.pokemon.species.name}</p>
                        <p>Pokemon with id : {props.id}</p>
                    </Col>
                    <Col xs={6}><img src={props.pokemon.sprites.front_default} alt={props.pokemon.species.name} /></Col>
                </Row>
                <Row>
                    {props.pokemon.types.map((type, idx) => {
                        return (
                            <Col xs={6}>
                                <p>Type : {type.type.name}</p>
                                <img src={props.getImgFromType(type.type.name)} style={{ width: '40px' }} alt={type} key={idx} />
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <Col xs={6}><p>Height : {props.pokemon.height}</p></Col>
                    <Col xs={6}><p>Weight : {props.pokemon.weight}</p></Col>
                </Row>
            </Container>
        </div>

    )
}
