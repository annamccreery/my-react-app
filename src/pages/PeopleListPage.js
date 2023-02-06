import React from "react";
import { PeopleList } from "../PeopleList";

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

export const PeopleListPage = () => (
    <>
        <h1>The People List Page</h1>
        <PeopleList people={people} />
    </>
)
