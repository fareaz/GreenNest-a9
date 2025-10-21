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
        <div>
             <header className='max-w-11/12 mx-auto'>
              <Navbar></Navbar>
            </header>
            <main className='max-w-11/12 mx-auto'>{isLoading ? <Loading /> : <Outlet></Outlet>}</main>
            <footer className='max-w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;