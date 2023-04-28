import { useState } from 'react';

const Converter = () => {
    const [fathoms, setFathoms] = useState(0);
    const [cubits , setCubits] = useState(0);

    const changeFathoms = (e) => {
        const newFathoms = e.target.value;
        setFathoms(newFathoms);
        setCubits(newFathoms * 3.42);
    }

    const changeCubits = (e) => {
        const newCubits = e.target.value;
        setCubits(newCubits);
        setFathoms(newCubits / 3.42);
    }

    return (
        <>
          <br></br>
          <label>Fathoms:</label>
          <input value={fathoms} onChange={changeFathoms}/>
          <br></br>
          <label>Cubits:</label>
          <input value={cubits} onChange={changeCubits}/>
          <br></br>
        </>
    );
}


export default Converter;