import {useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
          <input value={count}/>
          <button onClick={()=>setCount(count+1)}>+1</button>
        </>
    )
}

export default Counter;