import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import CatForm from './components/Form';
import ComponentWithProps from './components/ComponentWithProps.jsx';

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
    <>
    <h1>Hello</h1>
    <h2>This is how you return three elements</h2>
    <ComponentWithProps header={exercise.header} content={exercise.content} number={exercise.number} nonexistent={exercise.nonexistent}/>
    { cats.map(x => (<Cat name={x.name} age={x.age}/>)) }
    <img src="https://media.tenor.com/2roX3uxz_68AAAAM/cat-space.gif"/>
    <CatForm/>
  </>
  );
}

export default App;
