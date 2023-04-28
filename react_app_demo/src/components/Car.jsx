import { useState } from 'react';

const Car = () => {
    const [make, setMake] = useState('SEAT');
    const [model, setModel] = useState('IBIZA');
    const [colour, setColour] = useState('RED');
    const [year, setYear] = useState(2008);
    return (
        <>
        <label>Make:</label>
        <input value={make} onChange={e=>setMake(e.target.value)} />
        <br/>
        <label>Model:</label>
        <input value={model} onChange={e=>setModel(e.target.value)}/>
        <br/>
        <label>Colour:</label>
        <input value={colour} onChange={e=>setColour(e.target.value)}/>
        <br/>
        <label>Year:</label>
        <input value={year} onChange={e=>setYear(e.target.value)}/>
        <br/>
        </>
    )
}

export default Car;