import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div>
                <div>Name:{this.state.name}</div>
                <div>Name:{this.state.age}</div>
            </div>
        )
    }
}

export default Person;