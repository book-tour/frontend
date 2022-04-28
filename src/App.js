import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import { DataProvider } from "./contexts/GlobalState";
import Home from '../src/pages/Home'
import Payment from '../src/pages/Payment'
import NotFound from "./components/not-found/NotFound";
import DetailTourPage from "./pages/DetailTourPage";
import './App.css';

function App() {

    return (
        <DataProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/payment/:idSchedule" element={<Payment />} />
                <Route path="/tours/detail/:idTour" element={<DetailTourPage />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </DataProvider>
    );
}

export default App;
