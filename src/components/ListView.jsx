import React, { useState } from 'react';

const ListView = () => {

    const [items, setItems] =useState([
        {id:1, name:"item one", isEditing: false},
        {id:2, name:"item two", isEditing: false},
        {id:3, name:"item three", isEditing: false},
        {id:4, name:"item four", isEditing: false},
        {id:5, name:"item five", isEditing: true},
    ]);

const handleEdit =(id) => {
    setItems(items.map((item)=>item.id === id? {...item, isEditing:true}:item))
  
}
const handleDelete=(id) => {
    setItems(items.filter((item)=>item.id !==id))
  
}
const handleCancel=(id) => {
    setItems(
        items.map((item)=>
            item.id === id? {...item, isEditing:false} :item
        )
    )
  
}
const handleSave=(id, newName) => {
    setItems(
        items.map((item)=>
            item.id === id? {...item, name:newName, isEditing:false} : item
        )
    )
  
}

    return (
        <div className='mt-9 w-full'>
            <h1 className='font-semibold text-2xl mb-5'>List View</h1>
            <ul>
                {items.map((item, index)=>(
                    <li className='font-medium flex justify-between py-2 bg-gray-100 px-2 mb-2 hover:text-gray-700 cursor-pointer' key={index}>

                        {
                            item.isEditing ?(
                                <input type="text" defaultValue={item.name} className='px-1 font-medium' onChange={(e)=>(item.name=e.target.value)}/>
                            ) : (
                                <span>{item.name}</span>
                            )
                        }

                        <div className='flex gap-2 px-2'>
                            {item.isEditing ?(
                                <>
                                <button onClick={()=>handleSave(item.id, item.name)} className='font-medium text-blue-500'> Save </button>
                                <button onClick={()=>handleCancel(item.id)} className='font-medium text-red-400 hover:text-red-600'>Cancel</button>
                                </>
                            ):(
                                <>
                                <button onClick={()=>handleEdit(item.id)} className='font-medium text-sm  text-blue-500'> Edit </button>
                                <button onClick={()=>handleDelete(item.id)} className='font-medium text-sm  text-red-400 hover:text-red-600'>Delete</button>
                                </>
                            )}
                        </div>








                        
                        </li>

                ))}
            </ul>

            
        </div>
    );
};

export default ListView;