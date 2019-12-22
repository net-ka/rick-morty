import React, { Component } from 'react';
import HeroComp from '../components/hero/heroComp';

class Hero extends Component {
    state = {
        id: this.props.match.params.id
    }

    render() {
        return (<HeroComp id={this.state.id} />);
    } 
}

export default Hero