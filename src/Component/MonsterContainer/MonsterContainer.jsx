import React, { Component } from 'react';
import Form from "../Form/Form";
import "./MonsterContainer.scss";
import MonsterTable from '../MonsterTable/MonsterTable';
import Search from "../Search/Search"

class MonsterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monters: [],
            search: "",
        }
    }

    hadleDelete = (id) => {
        const { monters } = this.state;
        this.setState({ monters: monters.filter(monters => monters.id !== id) });
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
            this.setState({ monters: data })
        })
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleAdd = (obj) => {
        this.setState({ monters: [...this.state.monters, obj] });
    }

    render() {
        const { monters, search } = this.state;
        let filteredMonsters = monters.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()));
        return (
            <div className="grid-container">
                <Search handleChange={this.handleChange} search={search} />
                <Form handleAdd={this.handleAdd} />
                <MonsterTable filteredMonsters={filteredMonsters} hadleDelete={this.hadleDelete} />
            </div>
        );
    }
}

export default MonsterContainer;