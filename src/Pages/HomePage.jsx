import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero';
import Plants from '../Components/HomePlants';
import Expert from '../Components/Expert';
import PlantOfTheWeek from '../Components/PlantOfTheWeek';
import Loading from '../Components/Loading';


const HomePage = () => {
      const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; 
  }
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