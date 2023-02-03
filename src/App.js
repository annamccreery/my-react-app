import React from 'react';
import logo from './logo.svg';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import './App.css';

const people = [{
  name: 'John',
  age: 40,
  hairColor: 'brown',
}, {
  name: 'Freyja',
  age: 4,
  hairColor: 'white',
}, {
  name: 'Rocky',
  age: 2,
  hairColor: 'brown',
}];

function App() {
  let adjective = 'sweet';
  let url = 'https://reactjs.org';

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: 'red', fontSize: '96px' }}>Big Red Text</p>
        <Greeting name ="Freyja" numberOfMessages={10}/>
        <PeopleList people={people} />
        <button onClick={() => alert('Hello!')}>Click Me!</button>
        <p>
          This is so {adjective}!
        </p>
        <a
          className="App-link"
          href= {url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
