import React, { useState } from 'react';

const AuthForm = () => {

    const [isLogin, setIsLogin]= useState(true);
    const[formData,setFormData]=useState({name:"", email:"", password:""});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
      
    }

const handleSubmit=(e) => {
    e.preventDefault();
    alert("form submit with" + ' ' + formData.name + " "+ formData.email);
  
  
}


    return (
        <div className='w-96 mx-auto items-center justify-center mt-10'>
            <h1 className='font-semibold text-2xl mb-6 text-center'> { isLogin ? "Login Form": "Register Form"}</h1>

            <form onSubmit={handleSubmit} >
                {
                    !isLogin && ( <input name='name' value={formData.name} onChange={handleChange} className='border-2 border-gray-200 p-2 w-full mb-2 rounded focus:border-blue-400 focus:outline-none text-black' type="text" placeholder='Name' />) 
                }
               
                <input name='email' value={formData.email} onChange={handleChange} className='border-2 border-gray-200 p-2 w-full mb-2 rounded focus:border-blue-400 focus:outline-none text-black' type="email" placeholder='Email' />

                <input name='password' value={formData.password} onChange={handleChange} className='border-2 border-gray-200 p-2 w-full mb-2 rounded focus:border-blue-400 focus:outline-none text-black'  type="password" placeholder='password' />
                <button className='bg-blue-600 text-white font-semibold px-5 py-2 w-full rounded mt-3'>{isLogin ? "Login": "Register"}</button>
            </form>

            <p className='font-semibold text-gray-500 mt-3 text-center'>
                {isLogin ? "Don't have an account": "Already have an account"} {" "}
                <button onClick={()=>setIsLogin(!isLogin)} className='text-blue-500 hover:underline'>{isLogin ? "Register": "Login"}</button>
            </p>
        </div>
    );
};

export default AuthForm;