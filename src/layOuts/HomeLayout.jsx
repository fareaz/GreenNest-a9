import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';

import Loading from '../Components/Loading';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
     useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);
   
    return (
        <div className='max-w-7xl mx-auto'>
            
              <Navbar></Navbar>
     
          {isLoading ? <Loading /> : <Outlet></Outlet>}
            
                <Footer></Footer>
          
        </div>
    );
};

export default HomeLayout;