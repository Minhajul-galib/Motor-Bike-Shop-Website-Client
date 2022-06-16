import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';



const MainAddReview = () => {

    const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {

      axios.post('https://floating-anchorage-50833.herokuapp.com/reviews', data)
      .then(res =>{

        // console.log(res);
        //   if(res.data.insertedID){
              alert('Thank You For Review');
        //       e.target.reset();
        //   }
          e.target.reset();

      })
      
    }
    return (
        <div className="add-products">
                    
            <div className="add-products-div">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>ADD REVIEW</h3>
                        <div>
                        <input style={{color:'black'}} {...register("name")} type="text" placeholder="Your Name" required />
                        </div>
            
                        <div>
                        <input style={{color:'black'}} {...register("email")} type="text" placeholder="YOUR EMAIL" />
                        </div>

                        <div>
                        <input style={{color:'black'}} {...register("image")} type="text" placeholder="PUT YOUR IMAGE LINK" required />
                        </div>

                        <div>
                        <input style={{color:'black'}} {...register("profession")} type="text" placeholder="PROFESSION" />
                        </div>

                        <div>
                        <input style={{color:'black'}} {...register("rate")} type="number" placeholder="RATE US (1-5)" />
                        </div>
                        <div>
                        <textarea style={{color:'black'}} {...register("description")} cols="60" rows="3" placeholder="REVIEW DESCRIPTION" required></textarea>
                        </div>
                        <div className="new-service-btn">
                        <Button sx={{width: '73%'}} color="secondary" variant="contained" type="submit">Contained</Button>
                        </div>
                        </form>    
            </div>         

        </div>
    );
};


export default MainAddReview;