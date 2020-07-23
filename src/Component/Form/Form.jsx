import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
export default function Form(props) {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })
    let history = useHistory();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    const handleClear = () => {
        setUser({ name: '', email: '' })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/monsters")
        // handleAdd({ ...user, id: 12 });
        // axios.post('https://jsonplaceholder.typicode.com/users', user).then(res => {
        //     handleAdd(res.data);
        // })
        // .catch(err => console.log(err))
    }
    const { name, email } = user;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">name:</label>
            <input type="text" name='name' id='name' onChange={handleChange} value={name} />
            <label htmlFor="email">email:</label>
            <input type="email" name='email' id='email' onChange={handleChange} value={email} />
            <button type="submit">save</button>
            <button type="button" onClick={handleClear}>clear</button>
        </form>
    )

}
