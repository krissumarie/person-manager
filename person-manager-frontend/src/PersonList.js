import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PersonList() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/persons')
            .then(response => {
                setPersons(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div>
            <h2>Person List</h2>
            <ul>
                {persons.map(person => (
                    <li key={person.id}>
                        {person.name} - {person.email} - {person.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonList;
