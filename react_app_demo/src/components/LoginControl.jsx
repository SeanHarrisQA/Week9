import State from './State'
import {useState} from 'react';

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (isLoggedIn) {
      return (
        <>
        <h1>Welcome Back</h1>
        <State/>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      );
    } else {
        return (
        <>
        <h1>Please sign in</h1>
        <State/>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      );
    }
}
export default LoginControl;