import React from 'react';

const Header = ({logotitle}) => {
    return (
        <div className='bg-black text-white px-10 py-4'>
            <h3 className='font-semibold text-3xl'>{logotitle}</h3>
        </div>
    );
};

export default Header;