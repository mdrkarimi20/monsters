import React, { Component } from 'react';
import "./MonsterCard.scss"

class MonstersCard extends Component {
    render() {
        const {monters} = this.props;
        return (
            <div className="Monsters-Card">
                <img  src={"https://api.adorable.io/avatars/256/Ali@adorable2.png" + monters.id} alt="fireSpot"/>
                <p>{monters.name}</p>
                <h1>{monters.email}</h1>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default MonstersCard;