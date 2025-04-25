import React, { useState, useEffect } from 'react';

function PeopleList() {
    const [people, setPeople] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/persons')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.log("Error fetching data:", error));
    }, []);

    // Filter people based on the search term
    const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>List of People</h1>

            <section className="People-text">
                <p>Here is a list of all people in the database</p>
            </section>

            <div className="search-container" style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "100%",
                        maxWidth: "400px",
                        margin: "0 auto",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "16px"
                    }}
                />
            </div>

            <ul>
                {filteredPeople.length > 0 ? (
                    filteredPeople.map(person => (
                        <li key={person.id} style={{ marginBottom: "20px" }}>
                            <strong>ID:</strong> {person.id} <br />
                            <strong>Name:</strong> {person.name} <br />
                            <strong>Birthdate:</strong> {new Date(person.birthDate).toLocaleDateString()} <br />
                            <strong>Email:</strong> {person.email} <br />
                            <strong>Phone:</strong> {person.phone} <br />
                            <strong>Gender:</strong> {person.gender} <br />
                        </li>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </ul>
        </div>
    );
}

export default PeopleList;
