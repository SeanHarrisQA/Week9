import { useState } from 'react';

const State = () => {
    const [username, bagels] = useState('');
    const [password, setPassword] = useState('');

    const showLoginDetails = e => {
        e.preventDefault();
        console.log(username);
        console.log(password);
    }

    return (
        <>
          <form onSubmit={showLoginDetails}>
            <label>Username</label>
            <input value={username} onChange={e => bagels(e.target.value)}/>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)}/>
          </form>
        </>
    )
}

export default State;