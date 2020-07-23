import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
function MonsterSingle(props) {
    console.log(props);
    const { id } = useParams();
    console.log(id);
    const [monster, SetMonster] = useState({});
    const getData = () => {
        console.log('1')
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json()).then(data => {
            SetMonster(data);
            console.log(data);
        })
    }

    useEffect(() => { getData(); }, []);

    return (
        <div className='MonsterSingle'>
            <div className='card'>
                <div className='card-header'>
                    {monster.name}
                </div>
                <div className='card-body'>
                    email: {monster.email}<br />
                    name: {monster.name}<br />
                    phone: {monster.phone}<br />
                    username: {monster.username}<br />
                    website: {monster.website}<br />
                </div>

            </div>
        </div>
    )
}

export default MonsterSingle
