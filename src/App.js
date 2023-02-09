import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage, 
  ControlledFormPage,
  UncontrolledFormPage
} from './pages'
import { NavBar }  from './NavBar';
import './App.css';
import { FormsNavBar} from './FormsNavBar';
import { UncontrolledFromPage } from './pages/UncontrolledFormPage';



function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <div className='App=header'>
            <Routes>
              <Route exact path="/" element={ <HomePage /> } />
              <Route  exact path="/counter" element={ <CounterButtonPage />} />
              <Route exact path="/people-list" element={ <PeopleListPage />} />
              <Route exact path="/protected" element={ <ProtectedPage />} />
              <Route path="/forms" element={ <FormsNavBar />} />
                  <Route path="/forms/controlled" element={ <ControlledFormPage />} />
                  <Route path="/forms/uncontrolled" element={ <UncontrolledFormPage />} />
              <Route path="*" element={ <NotFoundPage />} />
              //* indicates path is not exclusive (switch previously required but not any longer)
              <Route exact path="*" element={ < NotFoundPage />} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
