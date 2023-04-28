import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import CatForm from './components/Form';
import ComponentWithProps from './components/ComponentWithProps.jsx';
import Counter from './components/Counter';
import Converter from './components/Converter';
import State from './components/State';
import Car from './components/Car';
import ProductTable from './components/ProductTable';
import FridayTask from './components/FridayTask';
import trainers from './trainers.json';
import Trainer from './components/Trainer';
import Content from './components/Content';
import SubContent from './components/SubContent';
import LoginControl from './components/LoginControl';

let cats = [
    {
      name: "Manny",
      age: 13
    },
    {
      name: "Moriarty",
      age: 11
    },
    {
      name: "Lucy",
      age: 15
    },
    {
      name: "Cifer",
      age: 15
    }
  ];

let exercise = {
  header: "My opinons on JS",
  content: "Pros and cons",
  number: 1000000000,
  nonexistent: null
}

function App() {
  return (
  <body class="style2">
    <h1>Hello</h1>
    <h2>This is how you return three elements</h2>
    <ComponentWithProps header={exercise.header} content={exercise.content} number={exercise.number} nonexistent={exercise.nonexistent}/>
    { cats.map(x => (<Cat name={x.name} age={x.age}/>)) }
    <img src="https://media.tenor.com/2roX3uxz_68AAAAM/cat-space.gif"/>
    <CatForm/>
    <Counter/>
    <Converter/>
    <br></br>
    <h1>State Exercise</h1>
    <br></br>
    <h4>Ex1</h4>
    <State/>
    <h4>Ex2+3</h4>
    <Car/>
    <h4>Ex4</h4>
    <ProductTable/>
    <br></br>
    <h1>Friday</h1>
    <h4>Initial Task</h4>
    <FridayTask/>
    <br/>
    <h4>Trainer Task</h4>
    {trainers.map(({id, name, age}) => (<Trainer key={id} name={name} age={age}/>))}
    <h4>Static State Tutorial</h4>
    <Content/>
    <h5>Using a sub component</h5>
    <SubContent/>
    <h4>Static State Exercise</h4>
    <LoginControl/>
  </body>
  );
}

export default App;
