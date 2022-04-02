import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import { DataProvider } from "./contexts/GlobalState";
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import Home from '../src/pages/Home'
import NotFound from "./components/not-found/NotFound";
import './App.css';

function App() {

    return (
        <DataProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </DataProvider>
    );
}

export default App;
