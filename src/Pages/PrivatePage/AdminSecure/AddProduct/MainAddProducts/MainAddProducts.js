import React from 'react';
import axios from 'axios';
import './MainAddProducts.css';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';


const MainAddProducts = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {

      axios.post('https://floating-anchorage-50833.herokuapp.com/products', data)
      .then(res =>{

        // console.log(res);
        //   if(res.data.insertedID){
        //       alert('Added new service');
        //       e.target.reset();
        //   }
          e.target.reset();

      })
      
    }
    return (
        <div className="add-products">
                    
            <div className="add-products-div">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>ADD PRODUCTS</h3>
                        <div>
                        <input style={{color:'black'}} {...register("title")} type="text" placeholder="PRODUCT TITLE" required />
                        </div>
                        <div>
                        <input style={{color:'black'}} {...register("price")} type="number" placeholder="PRICE FOR PRODUCTS" required />
                        </div>
                        <div>
                        <input style={{color:'black'}} {...register("image")} type="text" placeholder="PUT IMAGE LINK" required />
                        </div>
                        <div>
                        <input style={{color:'black'}} {...register("Engine")} type="text" placeholder="ENGINE" />
                        </div>
                        <div>
                        <input style={{color:'black'}} {...register("ABS")} type="text" placeholder="ABS" />
                        </div>

                        <div>
                        <input style={{color:'black'}} {...register("KerbWeight")} type="text" placeholder="KERB WEIGHT" />
                        </div>
                        <div>
                        <input style={{color:'black'}} {...register("rate")} type="number" placeholder="RATE (1-5)" />
                        </div>
                        <div>
                        <textarea style={{color:'black'}} {...register("description")} cols="60" rows="3" placeholder="DESCRIPTION" required></textarea>
                        </div>
                        <div className="new-service-btn">
                        <Button sx={{width: '73%'}} color="secondary" variant="contained" type="submit">Contained</Button>
                        </div>
                        </form>    
            </div>         

        </div>
    );
};

export default MainAddProducts;


// const {title, description, image, Engine, ABS, KerbWeight, rate, status, price, _id} = props.product;
