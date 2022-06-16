import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router';
import Footer from '../../Pages/AllExist/Footer/Footer';
import Header from '../../Pages/AllExist/Header/Header';
import TextField from '@mui/material/TextField';
import './Purchase.css'
import Button from '@mui/material/Button';


const Purchase = () => {
    const { id } = useParams();
    const [single, setSingle] = useState({});
    const [value, setValue] = useState(5);

    useEffect(()=>{
        const url = `https://floating-anchorage-50833.herokuapp.com/products/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data=> {
            setSingle(data) 
            setValue(data.rate)})
    }, [id]);

    // const {title, description, image, Engine, ABS, KerbWeight, rate, status, price, _id} = props.product;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleNameChange = ({ target }) => {
      setName(target.value);
    };
    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    };
    const handlePhoneChange = ({ target }) => {
        setPhone(target.value);
    };

    


    const orderTitle = single?.title;
    const orderImage = single?.image;
    const orderRate = single?.rate;
    const orderPrice = single?.price;
    const orderStatus = true;

    // const nameRef = useRef();
    // const emailRef = useRef();
    // const phoneRef = useRef();
    // console.log(nameRef);
    const handleBookedProduct = e =>{
       
        const newOrder = { name, email, phone, orderTitle, orderImage, orderRate, orderPrice, orderStatus };
        fetch('https://floating-anchorage-50833.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Your Order is taken')
                e.target.reset();

            }
        })
        // send Data to the server!
        e.target.reset();

        e.preventDefault();

    }

    return (
        <div>
            <Header></Header>
            <div className="Purchase">
                <div style={{textAlign:'center'}} className="Purchase-img">
                    <img style={{marginTop:'9%',filter: 'grayscale(100%)'}} src={single?.image} alt="" />
                    <img style={{marginTop:'9%'}} src={single?.image} alt="" />
                    <img style={{marginTop:'9%',filter: 'hue-rotate(90deg)'}} src={single?.image} alt="" />
                </div>
                <h2>{single?.title}</h2>
                <div className="Purchase-content">
                    <div className="Purchase-details">
                        <p>{single?.description}</p>

                        <div className="Purchase-details-dev">
                        <p>ABS: {single.ABS}</p>
                        <p>Engine: {single?.Engine}</p>
                        </div>
                        <div className="Purchase-details-dev">
                        <p>Kerb Weight: {single?.KerbWeight}</p>
                        <Rating name="read-only" value={value} precision={0.5} readOnly />
                        </div>
                        <p className="price">Price: <span style={{color:'white'}}>${single?.price}</span></p>
                    </div>
                    <div className="Purchase-form">
                    
                    <form onSubmit={handleBookedProduct}>
                        
                        <TextField sx={{ width: '100%', px:0, mb: 2}} 
                        id="standard-basic" 
                        // ref={nameRef} 
                        label="Your Name" 
                        variant="standard" 
                        onChange={handleNameChange}
                        value={name} />

                        <TextField 
                        // ref={emailRef} 
                        sx={{ width: '100%', px:0, mb: 2}} 
                        id="standard-basic" label="Your Email" 
                        variant="standard" 
                        onChange={handleEmailChange}
                        value={email} />

                        <TextField 
                        // ref={phoneRef} 
                        sx={{ width: '100%', px:0, mb: 2}} 
                        id="standard-basic" 
                        label="Your Phone Number" 
                        variant="standard"
                        onChange={handlePhoneChange}
                        value={phone} />

                        <Button type="submit" variant="contained">BUY NOW</Button>
                    </form>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;