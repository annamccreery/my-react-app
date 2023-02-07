import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages'
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import './App.css';



function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Go to the Home Page </Link>
        <>&nbsp; &nbsp; &nbsp;</>
        <Link to="/counter">Go to the Counter Page</Link>
        <>&nbsp; &nbsp; &nbsp;</>
        <Link to="/people-list">Go to the People List Page</Link>
        <Routes>
          <Route exact path="/" element={ <HomePage /> }>
          
          </Route>
          <Route  exact path="/counter" element={ <CounterButtonPage />} />
          <Route exact path="/people-list" element={ <PeopleListPage />} />
          <Route exact path="/protected" element={ <ProtectedPage />} />
          //* indicates path is not exclusive (switch previously required but not any longer)
          <Route exact path="*" element={ < NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
