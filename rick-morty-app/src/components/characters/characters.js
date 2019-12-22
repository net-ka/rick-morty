import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './characters.scss'

const path = 'https://rickandmortyapi.com/api/character/?page=';

class CharactersComp extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        fetch(path)
        .then(response => response.json())
        .then(data => this.updateData(data))
        .catch(error => error);
    }

    forFetch(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => this.updateData(data))
        .catch(error => error);
    }

    updateData(data) {
        this.setState({ data });
    }

    changePage(url) {
        this.forFetch(url);

        let page = document.querySelector('.current');

        let pagePart = url.split(path).join('');
        let devider = pagePart.indexOf('&');

        if (devider === -1) {
            page.innerHTML = pagePart;
        } else {
            const pageNum = pagePart.slice(0, devider);
            page.innerHTML = pageNum;
        }
    }

    findCharacter(value) {
        const url = `${path}&name=${value}`;

        let page = document.querySelector('.current');
        if (page) {
            page.innerHTML = '1';
        }

        this.forFetch(url);
    }

    openName(currentTarget) {
        currentTarget.lastChild.firstChild.click();
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
                <input className="search-line" type="text" placeholder="Search" onChange={e => this.findCharacter(e.target.value)}></input>

                { results && <table>
                    <tbody>
                        {results.map(({ id, name, image }) => {
                            return (
                            <tr key={id} className='hero-row' onClick={(e) => this.openName(e.currentTarget)}>
                                <td className='hero-photo-data'><img className='hero-photo' src={image} alt={name} /></td>
                                <td className='hero-name-data'><Link to={process.env.PUBLIC_URL + `/characters/${id}`}>{name}</Link></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>}

                <div className="pages-wrapper">
                    { prev && <button className="prev" onClick={() => this.changePage(prev)}>&lt;</button>}
                    { !prev && <button className="prev hidden">&lt;</button>}
                    { results && <p className="current">1</p>}
                    { next && results && <button className="next" onClick={() => this.changePage(next)}>&gt;</button>}
                    { !next && <button className="next hidden">&gt;</button>}
                </div>
            </section>
        )
    }
}

export default CharactersComp