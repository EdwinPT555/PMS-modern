import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Tasks from '../../pages/Tasks/Tasks';


const PageArea = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/projects" element={<Home />} />
        </Routes>
    )
}

export default PageArea
