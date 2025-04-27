import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../index.css"; // Import the CSS file

// Import the components for the pages
import PeopleList from '../peoplelist/PeopleList';
import ManagePeople from "../manage/ManagePeople";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="nav-list">
                        <li>
                            <Link to="/peoplelist">People list</Link>
                        </li>
                        <li>
                            <Link to="/manage">Manage people</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <header className="section">
                                <h1>Welcome to my Person Manager website!!</h1>
                                <div className="name">
                                    <p>-Kristiina Marie Palu</p>
                                </div>
                            </header>
                        }
                    />
                    <Route path="/peoplelist" element={<PeopleList />} />
                    <Route path="/manage" element={<ManagePeople />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
