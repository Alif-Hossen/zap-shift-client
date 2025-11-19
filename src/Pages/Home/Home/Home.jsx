import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowWork/HowWork';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Another from '../Another/Another';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWork></HowWork>
            <Services></Services>
            <Brands></Brands>
            <Another></Another>
            <Reviews 
                reviewsPromise={reviewsPromise}
            ></Reviews>
        </div>
    );
};

export default Home;