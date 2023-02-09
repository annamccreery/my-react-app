import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
//be sure to run "npm install query-string" in terminal
import { DisplayIf } from '../DisplayIf';

export const CounterButtonPage = () => {
    const location = useLocation();
    const startingValue = queryString.parse(location.search).startingValue || 0; //|| 0 goves it a starting value
    
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));  // array destructuring, number of clicks is 0
    //url will look like...http://localhost:3000/counter?startingValue=7
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks (numberOfClicks + 1);

    return (
        <>
            <h1>Counter Button Page</h1>
            <DisplayIf condition={!hideMessage && numberOfClicks >=10 } >
                <CongratulationsMessage 
                    threshold={10} 
                    onHide={() => setHideMessage(true)} />
            </DisplayIf>
        
            <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />

        </>
    );






}