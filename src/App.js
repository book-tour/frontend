import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import Home from '../src/pages/Home'
import './App.css';
import NotFound from "./components/not-found/NotFound";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
