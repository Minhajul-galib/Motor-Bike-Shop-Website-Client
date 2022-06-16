import React from 'react';
import Grid from '@mui/material/Grid';
import logo from '../../../image/logo-rm.png'
import './HomeDetails.css'
import useProducts from '../../../hooks/useProducts';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';

const HomeDetails = () => {

    const [ products ] = useProducts();
    const footerProducts = products.slice(0, 6);
   

    return (
        <div className="HomeDetails">
            <div className="HomeDetails-div">
            <div className="footer-widget-main">
                <Grid item>
                    <img src={logo} alt="" />
                </Grid>
                <Grid className="footer-btn-set" item xs={12} md={4}>
                    
                        {
                            footerProducts.map(product => <Button style={{margin: '1%', width: '80%'}} variant="outlined"  key={product._id}> 
                            <NavLink style={{color: 'white', textDecoration: 'none'}} to={`/Purchase/${product._id}`}>{product?.title}<br /></NavLink>
                            </Button>)
                        }
                </Grid>
                <Grid className="footer-btn-set"  item xs={12} md={4}>
                        <Button style={{margin: '1%', width: '80%'}} variant="outlined">
                        <a style={{color: 'white', textDecoration: 'none'}}  href="https://www.facebook.com/" ><FacebookIcon /> Contact Us With Facebook</a>
                        </Button>
                        <Button style={{margin: '1%', width: '80%'}} variant="outlined">
                        <a style={{color: 'white', textDecoration: 'none'}}  href="https://twitter.com/" ><TwitterIcon /> Contact Us With Twitter</a>
                        </Button>
                        <Button style={{margin: '1%', width: '80%'}} variant="outlined">
                        <a style={{color: 'white', textDecoration: 'none'}}  href="https://www.linkedin.com/" ><LinkedInIcon /> Contact Us With LinkedIn</a>
                        </Button>
                        <Button style={{margin: '1%', width: '80%'}} variant="outlined">
                        <a style={{color: 'white', textDecoration: 'none'}}  href="https://www.google.com/maps/place/Chattogram/@22.3261918,91.679779,11z/data=!3m1!4b1!4m5!3m4!1s0x30acd8a64095dfd3:0x5015cc5bcb6905d9!8m2!3d22.356851!4d91.7831819" ><HomeIcon /> Agrabad 4001, Bangladesh, Chittagong</a>
                        </Button>
                        
                        
                </Grid>
            </div>
            </div>
        </div>
    );
};

export default HomeDetails;