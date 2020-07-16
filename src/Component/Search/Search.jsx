import React, { Component } from 'react'

export class Search extends Component {
    render() {
        const { handleChange, search } = this.props;
        return (
            <div className="search-group">
                <label htmlFor={"search"}>search</label>
                <input name={"search"} id="search" onChange={handleChange} value={search} />
            </div>
        )
    }
}

export default Search
