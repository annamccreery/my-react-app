import React, { useEffect } from 'react';

    export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    useEffect(() => {
        console.log('useEffect function called!');
    }, []);

    return (
        <>
        <p>You have clicked the button {numberOfClicks} times</p>
        <button onClick={onIncrement}>Click Me!</button>
        </>
    );
}