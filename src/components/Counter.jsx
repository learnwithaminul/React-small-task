import React, { useState } from 'react';



const Counter = () => {


 let [counter, setCounter]=useState(0)
const IncrementValue =()=>{
    if(counter>=10) return;
     setCounter(counter+1)

}

const DecrementValue =()=>{
    
    if(counter<=0) return;
    setCounter(counter-1)

}

    return (
        <div className='w-full justify-center items-center flex h-screen'>
            <div>
                <h2 className='font-bold text-4xl text-center'>Simple Counter App</h2>
                <h3 className='font-bold text-2xl text-center mt-6'>Current Value: {counter}</h3>
                <div className="flex justify-center mt-10">
                    <button onClick={IncrementValue} className='bg-blue-400 px-6 py-3 rounded-full text-white font-semibold -tracking-tighter mr-5 hover:bg-black duration-100 transition-colors'>Increment</button>

                    <button onClick={DecrementValue} className='bg-red-700 px-6 py-3 rounded-full text-white font-semibold -tracking-tighter hover:bg-black duration-100 transition-colors'>Decrement</button>
                
                </div>

            </div>
        
        </div>
    );
};

export default Counter;