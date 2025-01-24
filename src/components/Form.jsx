import React, { useState } from 'react';

const Form = () => {

    const [formObj, setFormObj]=useState({fname:"", lname:"", email:"", phone:"", message:""})

    const handleChange =(e)=>{
        e.preventDefault()
        setFormObj((prevObj)=>({
            ...prevObj, [e.target.name]: e.target.value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       alert("submit done. Form Data list" + " " +
        "First Name :" + formObj.fname + " " +
        "Last Name : " + formObj.lname + " " +
        "Email : " + formObj.email + " " +
        "Phone: " + formObj.phone + " " +
        "Message : " + formObj.message 
       )
   

    }
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="w-[600px] shadow p-5 rounded">
              <h2 className='text-center font-semibold text-xl mb-7'>Contact Form with React</h2>
              <form onSubmit={handleSubmit}>
                <div className="full-name-group flex justify-between items-center gap-x-3 mb-3">
                <input type="text" placeholder='First Name'name='fname' onChange={handleChange}  className='px-4 py-3 w-full rounded border border-gray-400 focus:outline-blue-200 text-black bg-transparent' />
                
                <input type="text" placeholder='Last Name' name='lname' onChange={handleChange}   className='px-4 py-3 w-full rounded border border-gray-400 focus:outline-blue-200 text-black bg-transparent' />
                </div>

                <div className="full-name-group flex justify-between items-center gap-x-3 mb-3">
                <input type="email" placeholder='Email Address' name='email' onChange={handleChange}   className='px-4 py-3 w-full rounded border border-gray-400 focus:outline-blue-200 text-black bg-transparent' />
                </div>

                <div className="full-name-group flex justify-between items-center gap-x-3 mb-3">
                <input type="phone" placeholder='Phone Number' name='phone' onChange={handleChange}   className='px-4 py-3 w-full rounded border border-gray-400 focus:outline-blue-200 text-black bg-transparent' />
                </div>

                <div className="full-name-group flex justify-between items-center gap-x-3 mb-3">
                <textarea type="text" placeholder='Message' name='message' onChange={handleChange}   className='px-4 py-3 w-full rounded border border-gray-400 focus:outline-blue-200 text-black bg-transparent length' />
                </div>

                <button type='submit' className='bg-blue-500 px-6 py-3 text-white font-semibold rounded'>Submit</button>
              </form>
            </div>
           
        </div>
    );
};

export default Form;