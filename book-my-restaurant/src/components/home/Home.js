import React from 'react';
import FamousRestaurants from './FamousRestaurants';
import Banner from './Banner';
import Carousel from './Carousel';
const items = [
    { image: 'https://www.herofincorp.com/public/admin_assets/upload/blog/64b91a06ab1c8_food%20business%20ideas.webp', alt: 'Image 1' },
    { image: 'https://www.vmcdn.ca/f/files/halifaxtoday/images/food/012519-wine-and-food-dining-restaurant-.jpeg;w=960', alt: 'Image 2' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YVihJ1QxIoFkM_tgy0giO9p2xNieNsT77n6tw1FF-bGM06jQLBwF935yuRecBybYpsM&usqp=CAU', alt: 'Image 3' },
    { image: 'https://www.herofincorp.com/public/admin_assets/upload/blog/64b91a06ab1c8_food%20business%20ideas.webp', alt: 'Image 1' },
    { image: 'https://www.vmcdn.ca/f/files/halifaxtoday/images/food/012519-wine-and-food-dining-restaurant-.jpeg;w=960', alt: 'Image 2' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YVihJ1QxIoFkM_tgy0giO9p2xNieNsT77n6tw1FF-bGM06jQLBwF935yuRecBybYpsM&usqp=CAU', alt: 'Image 3' },
];
const Home = () => {
    return (
        <div>
            <Banner/> 
            <FamousRestaurants/>
            
            <Carousel  />
            <h1>hii</h1>
        </div>
    );
};

export default Home;