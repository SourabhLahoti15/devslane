import { useState } from "react";
import SearchBar from "./SearchBar";
import Show from "./Show";
import Shows from "./Shows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
    return (
        <BrowserRouter>
            <div className="p-4 flex flex-col gap-4">
                <SearchBar />
                <Routes>
                    <Route path="/" element={<Shows />} />
                    <Route path="show/:showid" element={<Show />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
