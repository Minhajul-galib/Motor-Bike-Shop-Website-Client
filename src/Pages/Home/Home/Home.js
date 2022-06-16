import React from 'react';
import Footer from '../../AllExist/Footer/Footer';
import Header from '../../AllExist/Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReview from '../HomeReview/HomeReview';
import HomeDetails from '../HomeDetails/HomeDetails';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <HomeReview></HomeReview>
            <HomeDetails></HomeDetails>
            <Footer></Footer>

        </div>
    );
};

export default Home;