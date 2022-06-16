import React from 'react';
import useProducts from '../../../hooks/useProducts';
import './HomeProducts.css'
import HomeSingleProducts from './HomeSingleProducts/HomeSingleProducts';

const HomeProducts = () => {
    const [products] = useProducts();
    const productsHome = products.slice(0, 6);
    return (
        <div className="HomeProducts">
            <div className="HomeProducts-div">
                <h2>Purchase your favorite one</h2>
                
                <div className="all-home-products">
                    {
                        productsHome.map(product => <HomeSingleProducts
                                                                        key={product._id}
                                                                        product={product}    
                                                                        ></HomeSingleProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;