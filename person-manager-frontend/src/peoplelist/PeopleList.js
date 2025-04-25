import React, { useState, useEffect } from 'react';
import '../index.css';  // The css file I use

function PeopleList() {
    const [people, setPeople] = useState([]); // List of people (react method)
    const [searchTerm, setSearchTerm] = useState(''); // what user searches for
    const [sortOrder, setSortOrder] = useState('asc'); // Sorting state, 'asc' for ascending, 'desc' for descending

    useEffect(() => {
        fetch('http://localhost:8080/persons') // Fetches ppl from server
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.log("Error fetching data:", error));
    }, []);

    // Filter people based on the search
    const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort people alphabetically based on name
    const sortedPeople = filteredPeople.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    // Changes from asc to desc
    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <div>
            <h1>List of People</h1>
            <div className="filters-container">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="sort-container">
                    <label htmlFor="sort">Sort alphabetically:</label>
                    <select
                        id="sort"
                        value={sortOrder}
                        onChange={handleSortChange}
                    >
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </div>
            </div>

            <ul>
                {sortedPeople.length > 0 ? (
                    sortedPeople.map(person => (
                        <li key={person.id}>
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
