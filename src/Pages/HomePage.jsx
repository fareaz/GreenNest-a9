import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero';
import Plants from '../Components/HomePlants';
import Expert from '../Components/Expert';
import PlantOfTheWeek from '../Components/PlantOfTheWeek';
import Loading from '../Components/Loading';
import PlantCare from '../Components/PlantCare';


const HomePage = () => {
      const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; 
  }
    return (
        <div>
           <Hero></Hero>
           
           <Plants></Plants>
           <PlantCare></PlantCare>
           <PlantOfTheWeek></PlantOfTheWeek>
           <Expert></Expert>  
        </div>
    );
};

export default HomePage;