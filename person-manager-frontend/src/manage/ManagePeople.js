import React, { useState, useEffect } from 'react';

function PersonManager() {
    const [personId, setPersonId] = useState(''); // ID storage
    const [person, setPerson] = useState(null); // person storage
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [error, setError] = useState(''); // Stores error messages
    const [action, setAction] = useState(''); // Tracks current action

    useEffect(() => {
        if (action === 'update' || action === 'remove') { // If action changes
            if (personId) {
                fetch(`http://localhost:8080/persons/${personId}`) // fetches new person with ID
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Person not found');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setPerson(data);
                        setName(data.name);
                        setEmail(data.email);
                        setPhone(data.phone);
                        setGender(data.gender);
                        setBirthDate(data.birthDate);
                        setError('');
                    })
                    .catch((err) => { // If error then it sends error message
                        setError(err.message);
                    });
            }
        }
    }, [personId, action]);

    // Adds new person
    const handleAddPerson = (event) => {
        event.preventDefault();
        const newPerson = { name, email, phone, gender, birthDate };
        fetch('http://localhost:8080/persons', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPerson),
        })
            .then(() => {
                alert('Person added successfully!');
                setName('');
                setEmail('');
                setPhone('');
                setGender('');
                setBirthDate('');
            })
            .catch(() => {
                alert('Error adding person.');
            });
    };

    // Updates the person
    const handleUpdatePerson = (event) => {
        event.preventDefault();
        const updatedPerson = { name, email, phone, gender, birthDate };
        fetch(`http://localhost:8080/persons/${personId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPerson),
        })

            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error updating person');
                }
                return response.json();
            })
            .then((data) => {
                alert('Person updated successfully!');
                setPerson(data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    // removes person
    const handleRemovePerson = () => {
        fetch(`http://localhost:8080/persons/${personId}`, { method: 'DELETE' })
            .then(() => {
                alert('Person removed successfully!');
                setPersonId('');
                setPerson(null);
            })
            .catch(() => {
                alert('Error removing person.');
            });
    };

    // Returns this, compared to different action states
    return (
        <div className="person-manager-container">
            <h1>Manage Person</h1>

            <div className="input-container">
                <label>Enter Person ID:</label>
                <input
                    type="number"
                    value={personId}
                    onChange={(e) => setPersonId(e.target.value)}
                    placeholder="Person ID"
                    className="input-field"
                />
            </div>

            <div className="buttons-container">
                <button onClick={() => setAction('add')} className="action-button">Add Person</button>
                <button onClick={() => setAction('update')} className="action-button">Update Person</button>
                <button onClick={() => setAction('remove')} className="action-button">Remove Person</button>
            </div>

            {error && <p className="error-message">{error}</p>}

            {action === 'add' && (
                <form onSubmit={handleAddPerson} className="form-container">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <input
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Birth Date:</label>
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="submit-button">Add Person</button>
                </form>
            )}

            {action === 'update' && person && (
                <form onSubmit={handleUpdatePerson} className="form-container">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <input
                            type="text"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>Birth Date:</label>
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="submit-button">Update Person</button>
                </form>
            )}

            {action === 'remove' && person && (
                <div className="remove-confirmation">
                    <h2>Are you sure you want to remove {person.name}?</h2>
                    <button onClick={handleRemovePerson} className="remove-button">Remove Person</button>
                </div>
            )}
        </div>
    );
}

export default PersonManager;
