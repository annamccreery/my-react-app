import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
//be sure to run "npm install query-string" in terminal

export const CounterButtonPage = () => {
    const location = useLocation();
    const startingValue = queryString.parse(location.search).startingValue;
    
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));  // array destructuring, number of clicks is 0
    //url will look like...http://localhost:3000/counter?startingValue=7
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks (numberOfClicks + 1);

    return (
        <>
            <h1>Counter Button Page</h1>
            {hideMessage
                ? null
                :  <CongratulationsMessage 
                    numberOfClicks={numberOfClicks} 
                    threshold={10} 
                    onHide={() => setHideMessage(true)}/>
            }
        
            <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
        </>
    );






}