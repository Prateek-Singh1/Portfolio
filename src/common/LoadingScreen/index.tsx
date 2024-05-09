import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FunctionComponent = () => {
    return (
        <div className="loader-wrapper">
            <div className="loading-box-shadow"></div>
            <div className="loading-box"></div>
            <div className='loading-text'>Loading...</div>
        </div>
    );
};

export default LoadingScreen;
