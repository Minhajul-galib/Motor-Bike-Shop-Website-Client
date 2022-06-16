import React from 'react';
import useProducts from '../../hooks/useProducts';
import Footer from '../AllExist/Footer/Footer';
import Header from '../AllExist/Header/Header';
import ExploreSingle from './ExploreSingle/ExploreSingle';

const Explore = () => {
    const [products] = useProducts();
    return (
        <div className="HomeProducts">
            <Header></Header>
            <div style={{marginBottom: '15%'}} className="HomeProducts-div">
                <h2>Purchase your favorite one</h2>
                
                <div className="all-home-products">
                    {
                        products.map(product => <ExploreSingle
                                                                        key={product._id}
                                                                        product={product}    
                                                                        ></ExploreSingle>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;