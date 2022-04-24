import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import { DataProvider } from "./contexts/GlobalState";
import Login from '../src/components/login'
import Register from '../src/components/register'
import Home from '../src/pages/Home'
import NotFound from "./components/not-found/NotFound";
import DetailTourPage from "./pages/DetailTourPage";
import './App.css';

function App() {

    return (
        <DataProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/tours/detail/:idTour" element={<DetailTourPage />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </DataProvider>
    );
}

export default App;
