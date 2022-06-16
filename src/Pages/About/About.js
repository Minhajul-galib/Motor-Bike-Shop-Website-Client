import React from 'react';
import './About.css'
import Footer from '../AllExist/Footer/Footer';
import Header from '../AllExist/Header/Header';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="About">
                <div className="About-1">
                    <div className="about-1-div">
                    <div className="about-div-extra">
                    <h2>ABOUT US</h2>
                    <p>We will provide you the best Products</p>
                    <NavLink to="/login"><Button variant="contained">LOGIN</Button></NavLink>
                    </div>
                    </div>
                </div>

                <div className="about-2">
                    <h2 style={{marginBottom: '4%'}}>Some Of Our Brands</h2>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <img className="img-thumbnail" src={'https://cdn.pixabay.com/photo/2019/03/15/09/06/bike-4056616_960_720.jpg'} width="80%" alt="" />
                            <h3 style={{margin: '5%'}}>Suzuki</h3>
                        </Grid>
                        <Grid item xs={4}>
                            <img className="img-thumbnail" src={'https://cdn.pixabay.com/photo/2016/06/13/08/56/motorcycle-1453863_960_720.jpg'} width="95%" alt="" />
                            <h3 style={{margin: '5%'}}>Honda</h3>
                        </Grid>
                        <Grid item xs={4}>
                            <img className="img-thumbnail" src={'https://cdn.pixabay.com/photo/2019/03/24/22/03/traffic-4078819_960_720.jpg'} width="80%" alt="" />
                            <h3 style={{margin: '5%'}}>Yamaha</h3>

                        </Grid>
                    </Grid>
                </Box>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;