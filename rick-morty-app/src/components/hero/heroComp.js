import React, { Component, Fragment } from 'react';
import './heroComp.scss'

const path = 'https://rickandmortyapi.com/api/character';

class HeroComp extends Component {

    state = {
        hero: {},
        id: this.props.id
    }

    componentDidMount() {
        const { id } = this.state;

        fetch(`${path}/${id}`)
        .then(response => response.json())
        .then(hero => this.setState({ hero }))
        .catch(error => error);
    }

    render() {
        const { hero } = this.state;
        const { name, status, species, gender, image, created, origin, location } = hero;
        
        return (
            <Fragment>
                {name && 
                <section className='hero-wrapper'>
                    <img className='hero-photo' src={image} alt={name}/> 
                    <h1 className='hero-name'>{name}</h1>
                    <p><span>Status: </span>{status}</p>
                    <p><span>Species: </span>{species}</p>
                    <p><span>Gender: </span>{gender}</p>
                    <p><span>Origin: </span>{origin.name}</p>
                    <p><span>Location: </span>{location.name}</p>
                    <p><span>Created: </span>{created.slice(0, 10)}</p>
                </section>}
            </Fragment>
        )
    }
}

export default HeroComp