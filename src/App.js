import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import Home from '../src/pages/Home'
import './App.css';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;
