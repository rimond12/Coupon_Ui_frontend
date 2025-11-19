import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
           
          <div className='max-w-7xl mx-auto text-center'>
              <Outlet />
          </div>

        </div>
    );
};

export default MainLayout;