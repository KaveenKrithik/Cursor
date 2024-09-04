import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoutesPage.css';

const RoutesPage = () => {
    const navigate = useNavigate();

    const handleRouteClick = (route) => {
        navigate(`/map?route=${route}`);
    };

    return (
        <div className="routes-page">
            <h2>Select Your Route</h2>
            <div className="route-buttons">
                <button className="route-btn" onClick={() => handleRouteClick('route1')}>Route 1</button>
                <button className="route-btn" onClick={() => handleRouteClick('route2')}>Route 2</button>
                <button className="route-btn" onClick={() => handleRouteClick('route3')}>Route 3</button>
                <button className="route-btn" onClick={() => handleRouteClick('route4')}>Route 4</button>
            </div>
        </div>
    );
};

export default RoutesPage;

