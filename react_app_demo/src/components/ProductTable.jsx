import { useState } from 'react';

const ProductTable = () => {

    const search = (e) => {
        e.preventDefault();
        const nameToLookFor = e.target.value;
    }

    const [name, setName] = useState('');
    const products = [
        {
            name: "MW2",
            cost: 29.99,
        },
        {
            name: "Black Ops",
            cost: 15,
        },
        {
            name: "FIFA 21",
            cost: 4.50,
        },
        {
            name: "Lego Five a Side",
            cost: 35.00,
        },
        {
            name: "GTA IV",
            cost: 60,
        }
    ];

    return (
        <>
        <table>
            <tr>
            <th>Name</th>
            <th>Cost</th>
            </tr>
            {products.map( x => <tr><td>{x.name}</td><td>{x.cost}</td></tr>)}
        </table>
        <form onSubmit={search}>
        <label>Enter the name of the product you are looking for:</label>
        <input value={name} onChange={e => setName(e.target.value)}/>
        </form>
        </>
    );
}

export default ProductTable;

