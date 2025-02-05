import React, { useState } from 'react';

const DragInputForm = () => {

const [file, setFile]=useState("");
const [dragging, setDragging]=useState(false);


const handleSelect=(event) => {
    const selectFile = event.target.files[0];
    if(selectFile){
        setFile(selectFile);
    }
  
}
const handleDrop=(e) => {
    e.preventDefault();
    setDragging(false)
    const uploadFile = e.dataTransfer.files[0];
    if(uploadFile){
        setFile(uploadFile)
    }
  
}


    return (
        <div className='mt-6'>
         <h1 className='font-semibold text-2xl mb-8'>Drag Input Form</h1>
         <label className={`border-2 border-dashed mb-1 px-4 py-6 rounded w-full block ${dragging ? "border-red-400 bg-amber-300": " border-gray-200" }`} onDragOver={(e)=>{
            e.preventDefault();
            setDragging(true)
         }}
         onDragLeave={()=>setDragging(false)}
         onDrop={handleDrop}
         
         
         
         >
            <input className="hidden" placeholder='upload' type="file" onChange={handleSelect} />

            <p className='text-gray-400 font-semibold'>
                Drag & Drop your file or {" "} 
                <span className='text-blue-600'>Click to upload</span>
            </p>
         </label>

         {
            file && (
                <p>Select File: {file.name}</p>
            )
         }
            
        </div>
    );
};

export default DragInputForm;