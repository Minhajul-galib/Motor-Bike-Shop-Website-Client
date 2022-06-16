import { Alert, Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../AllExist/Header/Header';
import logIn from '../../../image/login.png'
import './LogIn.css'
import Footer from '../../AllExist/Footer/Footer';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';


const LogIn = () => {

    const [loginData, setLoginData] = useState({});
    const { user, logInUser, isLoading, authError } = useAuth();
    
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        
        logInUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div className="LogIn">
            <Header></Header>

            <div className="LogIn-div">
            <Grid style={{width: '75%', margin: '0 auto'}} className="form-grid" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid style={{width: '80%', backgroundColor: 'white'}} item xs={6}>
                    <img src={logIn} alt="" width="100%" />
                </Grid>
                <Grid style={{width: '80%',margin: '0 auto',padding: '3% 0',backgroundColor: '#ffffff00'}} item xs={6}>
                    <h4 style={{paddingBottom: '5%', color:'white'}}>LogIn here</h4>
                    <div className="Login-form">
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                            {/* <div>
                            <TextField 
                            sx={{m: 1,width:'80%',backgroundColor: '#ffffff82'}} 
                            id="filled-basic" label="Your Name"
                            type="text" name="name"
                            onBlur={handleOnBlur}
                            variant="filled" required />
                            </div> */}

                            <div>
                            <TextField 
                            sx={{m: 1,width:'80%',backgroundColor: '#ffffff82'}}
                            id="filled-basic" label="Your Email"
                            type="email" name="email"
                            onBlur={handleOnBlur}
                            variant="filled" required />
                            </div>

                            <div>
                            <TextField 
                            sx={{m: 1,width:'80%',backgroundColor: '#ffffff82'}}
                            id="filled-basic" label="Your Password"
                            type="password" name="password"
                            onBlur={handleOnBlur}
                            variant="filled" required />
                            </div>

                            <div>
                            <Button type="submit" sx={{mt:2,width:'80%',px:3}} color="success" variant="contained">LOGIN</Button>
                            </div>
                        </form>}
                        {isLoading && <CircularProgress />}
                        
                        {user?.email && <Alert style={{width:'80%', margin:'auto', marginTop: '4%'}} severity="success">Congratulation! user successfully Loge In</Alert>}

                        {authError && <Alert style={{width:'80%', margin:'auto', marginTop: '4%'}} severity="error">This is an error message!</Alert>}

                        <h6 style={{marginTop: '4%', color:'white'}} >New User? Please Registration now <Link style={{textDecoration: 'none'}} to='/registration' ><Button color="secondary" variant="contained">Register</Button></Link></h6>

                    </div>
                </Grid>
            </Grid>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LogIn;