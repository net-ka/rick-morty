import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './characters.scss'

const path = 'https://rickandmortyapi.com/api/character';

class CharactersComp extends Component {

    state = {
        path: 'https://rickandmortyapi.com/api/character',
        pageNumber: 1,
        data: {}
    }

    componentDidMount() {
        const { pageNumber } = this.state;

        fetch(`${path}/?page=${pageNumber}`)
        .then(response => response.json())
        .then(data => this.updateData(data))
        .catch(error => error);
    }

    updateData(data) {
        this.setState({ data });
    }

    render() {
        const { data } = this.state;
        const { results } = data;

        console.log(data);
        return (
            <section className='characters-wrapper'>
                <h1 className='characters-title'>Rick & Morty characters list</h1>
                { results && <table>
                    <tbody>
                        {results.map(({ id, name, image }) => {
                            return (
                            <tr key={id} className='hero-row'>
                                <td className='hero-photo-data'><img className='hero-photo' src={image} alt={name} /></td>
                                <td className='hero-name-data'><Link to={`/characters/${id}`}>{name}</Link></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>}
            </section>
        )
    }
}

export default CharactersComp