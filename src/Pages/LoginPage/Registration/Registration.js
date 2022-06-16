import { Alert, Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../AllExist/Header/Header';
import logIn from '../../../image/login.png'
import Footer from '../../AllExist/Footer/Footer';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        
        
        if(loginData.password !== loginData.password2){
            alert("Confirm password didn't matched");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <div className="LogIn">
            <Header></Header>

            <div className="LogIn-div">
            <Grid style={{width: '75%', margin: '0 auto'}} className="form-grid" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid style={{width: '100%', backgroundColor: 'white'}} item xs={6}>
                    <img src={logIn} alt="" width="100%" />
                </Grid>
                <Grid style={{width: '80%',margin: '0 auto',padding: '3% 0',backgroundColor: '#ffffff00'}} item xs={6}>
                    <h4 style={{paddingBottom: '5%', color:'white'}}>Registration here</h4>
                    <div className="Login-form">
                        { !isLoading && <form onSubmit={handleLoginSubmit}>
                            <div>
                            <TextField 
                            sx={{m: 1,width:'80%',backgroundColor: '#ffffff82'}} 
                            id="filled-basic" label="Your Name"
                            type="text" name="name"
                            onBlur={handleOnBlur}
                            variant="filled" required />
                            </div>

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
                            <TextField 
                            sx={{m: 1,width:'80%',backgroundColor: '#ffffff82'}}
                            id="filled-basic" label="Confirm Password"
                            type="password" name="password2"
                            onBlur={handleOnBlur}
                            variant="filled" required />
                            </div>

                            <div>
                            <Button type="submit" sx={{mt:2,width:'80%',px:3}} color="secondary" variant="contained">Register</Button>
                            </div>
                        </form>}
                        {isLoading && <CircularProgress />}
                        
                        {user?.email && <Alert style={{width:'80%', margin:'auto', marginTop: '4%'}} severity="success">Congratulation! user successfully registered</Alert>}

                        {authError && <Alert style={{width:'80%', margin:'auto', marginTop: '4%'}} severity="error">This is an error message!</Alert>}

                        <h6 style={{marginTop: '4%', color:'white'}} > Already registered? go to login <Link style={{textDecoration: 'none'}} to='/login' ><Button color="secondary" variant="contained">LOGIN</Button></Link></h6>
                    </div>
                </Grid>
            </Grid>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;