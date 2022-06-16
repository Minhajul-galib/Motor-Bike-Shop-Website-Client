import React from 'react';
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom';
import notFound from '../../image/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-div">
                <img src={notFound} alt="" width="65%" /><br />
                <NavLink to="/" ><Button style={{marginTop: '-200px',width: '10%'}} variant="contained">Back Home</Button></NavLink>
            </div>
        </div>
    );
};

export default NotFound;