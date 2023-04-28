import { useState } from 'react';

const FridayTask = () => {
    const [runningTotal, setRunningTotal] = useState(0);
    const [history, setHistory] = useState([""]);

    function updateHistory(e) {
        const value = parseInt(e.target.innerText);
        let equation = "";
        if (value > 0) {
            equation = runningTotal + " + " + value + " = ";
        } else {
            equation = runningTotal + " - " + (value * -1) + " = ";
        }  
        setRunningTotal(runningTotal + value);
        equation = equation + (runningTotal + value);
        setHistory([equation,...history]);
        
    }

    function resetHistory(e) {
        setRunningTotal(0);
        setHistory([]);
    }

    return (
    <>
    <input value={runningTotal} readOnly={true}/>
    <br/>
    <button onClick={updateHistory}>-5</button>
    <button onClick={updateHistory}>-1</button>
    <button onClick={resetHistory}>R</button>
    <button onClick={updateHistory}>+1</button>
    <button onClick={updateHistory}>+5</button>
    <br/>
    <p>History:</p>
    { history.map(x => (<p>{x}</p>)) }
    </>
    );
}

export default FridayTask;