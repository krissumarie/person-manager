import React, { useState, useEffect } from 'react';

function PeopleList() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/persons')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.log("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>People List</h1>
            <ul>
                {people.map(person => (
                    <li key={person.id}>
                        {person.name} - {person.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PeopleList;
