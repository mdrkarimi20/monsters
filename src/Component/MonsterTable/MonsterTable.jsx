import React, { Component } from 'react'
import Delete from "../Delete/Delete";
import MonstersCard from "../MonstersCard/MonstersCard";
import "./MonsterTable.scss"

export class MonsterTable extends Component {
    render() {
        const { hadleDelete, filteredMonsters } = this.props;
        return (
            <div class="monster-grid">
                {filteredMonsters.map(monters => (
                    <div key={monters.id}>
                        <MonstersCard monters={monters} name={"ali"} />
                        <Delete hadleDelete={() => hadleDelete(monters.id)} />
                    </div>
                ))}
            </div>
        )
    }
}

export default MonsterTable
