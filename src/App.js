import React, { useState } from 'react';
import logo from './logo.svg';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';
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
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
        ? null
        : <CongratulationsMessage 
          numberOfClicks={numberOfClicks} threshold={10}
          onHide={ () => setHideMessage(true)}/>}
       
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
      </header>
    </div>
  );
}

export default App;
