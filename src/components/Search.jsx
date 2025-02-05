import React, { useEffect, useRef, useState } from 'react';

const Search = () => {
    const options =[
        'Apple', 'Mango', 'Orange', 'Banaa', 'Chery', 'Coconut', 'Gova', 'Rice'
    ]

    const [search, SetSearch]=useState("")
    const [filteroption, setFilterOption]=useState(options);
    const[isOpen, setIsOpen]=useState(false);
    const dropDownRef = useRef(null);

const handleChange =(event) => {
    const value= event.target.value;
    SetSearch(value);
    setFilterOption(options.filter((option)=>option.toLowerCase().includes(value.toLowerCase())));
    setIsOpen(true)
}

// close dropdown area with useref

useEffect(()=>{
    const handleOutsideClick =(event) => {
        if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
            setIsOpen(false)
        }
      
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick)

},[])



    return (
        <div className='relative'>
            <input type="text" value={search} onChange={handleChange} onFocus={()=>setIsOpen(true)} placeholder='Search...' className='border border-gray-100 p-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-600 rounded' />
            {isOpen && filteroption.length>0 && (
                <ul className='absolute text-left shadow-md w-full py-3 overflow-auto max-h-64' ref={dropDownRef}>
                
                   {filteroption.map((option, index) => (
                       <li className='py-2 px-4 hover:bg-blue-600 hover:text-white' onClick={()=>{
                           SetSearch(option)
                           setIsOpen(false)
                       }}>{option}</li>
   
                   ))}
               </ul>
            )}
         
            
        </div>
    );
};

export default Search;