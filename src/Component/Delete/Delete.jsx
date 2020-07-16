import React, { Component } from 'react'

export class Delete extends Component {
    render() {
        return (
            <button onClick={this.props.hadleDelete}>
                pack me!
            </button>
        )
    }
}

export default Delete
