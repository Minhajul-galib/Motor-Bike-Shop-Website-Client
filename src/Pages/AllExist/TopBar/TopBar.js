import React from 'react';
import './TopBar.css'

const TopBar = () => {
    return (
        <div className="TopBar d-md-flex justify-content-between">
            <div className="TopBar-div-1 d-flex w-50">
                <p><i className="fas fa-envelope"></i>Best Brands Forever</p>
            </div>
            <div className="TopBar-div-1 d-flex w-50 justify-content-end">
                <p>galib@gmail.com</p>
                <p>+54378569349</p>
            </div>
        </div>
    );
};

export default TopBar;