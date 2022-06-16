import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const MainMakeAdmin = () => {
    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleAdmin = e =>{
        const user = {email}
        fetch('https://floating-anchorage-50833.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
                setEmail('');
            }
        })
        e.preventDefault();
    }

    return (
        <div className="MainMakeAdmin">
            <h2>Make a admin</h2>
            
            <form onSubmit={handleAdmin}>
            <TextField 
            style={{marginBottom: '10px', width: '25%'}}
            id="standard-basic" 
            label="Email" 
            type="email"
            onBlur={handleOnBlur}
            variant="standard" />
            
            <Stack direction="row" spacing={2}>
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Send admin make request
                </Button>
             </Stack>
            </form>
            {success && <Alert severity="success">Made admin successfully !</Alert>}

        </div>
    );
};

export default MainMakeAdmin;