import React, { Component } from 'react'

export class Form extends Component {

    state = {
        name: "",
        email: ""
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleClear = () => {
        this.setState({ name: "", email: "" })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email } = this.state;
        const newMonsters = { name, email }
        this.props.handleAdd(newMonsters);
    }

    render() {
        const { name, email } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">name:</label>
                <input type="text" name="name" id="name" onChange={this.handleChange} value={name} />
                <label htmlFor="email"></label>
                <input type="text" name="email" id="email" onChange={this.handleChange} value={email} />
                <button type="submit">save</button>
                <button type="button" onClick={this.handleClear}>clear</button>
            </form>
        )
    }
}

export default Form
