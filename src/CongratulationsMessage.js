import React , { useEffect } from "react";

export const CongratulationsMessage = ({ numberOfClicks, threshold, onHide}) => {
    useEffect(() => {
        return () => console.log('CongratualtionMessage unmounted!');
    }, []);
    return numberOfClicks >= threshold
    ? <>
        <h1>Congratulations! You have reached {threshold} number of clicks</h1>
        <button onClick={onHide}>Hide</button>
    </>
    : null;
}