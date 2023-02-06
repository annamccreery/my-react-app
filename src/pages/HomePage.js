import React from "react";
import { Greeting } from '../Greeting';

export const HomePage = () => (
    <>
        <h1>
            <Greeting name="Anna" numberOfMessages={10} />
        </h1>
    </>
)