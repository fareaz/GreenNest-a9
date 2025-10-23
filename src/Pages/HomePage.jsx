import React from 'react';
import Hero from '../Components/Hero';
import Plants from '../Components/HomePlants';
import Expert from '../Components/Expert';
import PlantOfTheWeek from '../Components/PlantOfTheWeek';


const HomePage = () => {
    return (
        <div>
           <Hero></Hero>
           <Plants></Plants>
           <PlantOfTheWeek></PlantOfTheWeek>
           <Expert></Expert>  
        </div>
    );
};

export default HomePage;