import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './characters.scss'

const path = 'https://rickandmortyapi.com/api/character';

class CharactersComp extends Component {

    state = {
        path: 'https://rickandmortyapi.com/api/character',
        data: {}
    }

    componentDidMount() {
        fetch(`${path}`)
        .then(response => response.json())
        .then(data => this.updateData(data))
        .catch(error => error);
    }

    updateData(data) {
        this.setState({ data });
    }

    changePage(data) {
        fetch(`${data}`)
        .then(response => response.json())
        .then(data => this.updateData(data))
        .catch(error => error);

        const { path } = this.state;
        const pathExceptPage = `${path}/?page=`;

        document.querySelector('.current').innerHTML = `${data.split(pathExceptPage).join('')}`
    }

    render() {
        const { data } = this.state;
        const { results, info } = data;
        let prev, next;
        if (info) {
            prev = info.prev;
            next = info.next;
        }

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
                <div className="pages-wrapper">
                    { prev && <button className="prev" onClick={() => this.changePage(prev)}>&lt;</button>}
                    { !prev && <button className="prev hidden">&lt;</button>}
                    <p className="current">1</p>
                    { next && <button className="next" onClick={() => this.changePage(next)}>&gt;</button>}
                    { !next && <button className="next hidden">&gt;</button>}
                </div>
            </section>
        )
    }
}

export default CharactersComp