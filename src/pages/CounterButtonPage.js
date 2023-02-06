import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';

export const CounterButtonPage = () => {
    const { name } = useParams();
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);

    return (
        <>
        <h1>{name}'s The Counter Button Page </h1>
        {hideMessage
        ? null
        : <CongratulationsMessage 
        numberOfClicks={numberOfClicks} threshold={10}
        onHide={ () => setHideMessage(true)}/>}
    
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
        </>
     );
}