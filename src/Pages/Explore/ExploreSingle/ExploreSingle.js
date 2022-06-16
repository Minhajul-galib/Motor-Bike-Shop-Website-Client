import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const ExploreSingle = (props) => {
    const {title, description, image, Engine, ABS, KerbWeight, rate, price, _id} = props.product;

    const descriptionHome = description.slice(0, 70);
    return (
        <div>
            <div className="col mb-3 home-single-product">
                        <div className="card pb-2">
                        <div className="w-100%">
                            <img src={image} width="95%" alt="" />
                        </div>
                        <div className="home-single-content">
                           <Stack className="single-product-rate" spacing={1}>
                                <Rating className="product-content-rate" name="half-rating-read" defaultValue={rate} precision={0.5} readOnly />
                            </Stack>
                            <h5>{title}</h5>
                            <div className="product-single-tool">
                                    <p><SpeedIcon /> <br />{Engine}</p>
                                    <p><SettingsIcon /> <br />{ABS}</p>
                                    <p><PowerSettingsNewIcon /><br />{KerbWeight}</p>
                            </div>
                            <p style={{marginTop: '20px'}}>{descriptionHome}....</p>
                            <div className="d-flex justify-content-between">
                                <b>$ {price}</b>
                                <NavLink style={{textDecoration: 'none'}} to={`/Purchase/${_id}`}><Button sx={{py:1}} variant="contained">PURCHASE NOW</Button></NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
        </div>
    );
};

export default ExploreSingle;