import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MasterLayouts = ({title}) => {
    return (
        <div>
           <Header logotitle={title}/>
           <div className='flex gap-4 w-vw'>
            <Sidebar/>
            <main className='px-5 w-full'>
                <Outlet/>
            </main>
           </div>
           <Footer/>
        </div>
    );
};

export default MasterLayouts;