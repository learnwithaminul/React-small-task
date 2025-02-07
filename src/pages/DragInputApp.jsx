import React from 'react';
import DragInputForm from '../components/DragInputForm';
import ListView from '../components/ListView';


const DragInputApp = () => {
    return (
        <div className='w-[500px] flex flex-col justify-center items-center mx-auto'>
                <DragInputForm/>
                <ListView/>
        </div>
    );
};

export default DragInputApp;