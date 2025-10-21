import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';

import Loading from '../Components/Loading';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
     useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);
   
    return (
        <div>
             <header>
              <Navbar></Navbar>
            </header>
            <main>{isLoading ? <Loading /> : <Outlet></Outlet>}</main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;