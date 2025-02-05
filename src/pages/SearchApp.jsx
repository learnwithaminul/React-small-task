import React from 'react';
import Search from '../components/Search';
import DragInputForm from '../components/DragInputForm';

const SearchApp = () => {
    return (
        <div className='w-[600px] justify-center text-center items-center mx-auto h-screen flex '>
          <div className='w-full'>
            <h1 className='font-bold'>Module 7</h1>
            <h2 className='font-semibold text-3xl mt-1 pb-6'>Search Dropdown</h2>
            <Search/>
        
          </div>
            
        </div>
    );
};

export default SearchApp;