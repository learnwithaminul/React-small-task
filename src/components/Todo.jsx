import React, { useState } from 'react';

const Todo = () => {

const [itemTodo, setItemTodo]= useState("")
const [itemList, setItemList]=useState([])

const addTodo =(e)=>{
    e.preventDefault();
    if(!itemTodo){
        return;
    } 
    if(itemList.includes(itemTodo)){
        setItemTodo("")
        alert('Already Added this' + ' '+  itemTodo)
        return

    }

    setItemList([...itemList, itemTodo])
    

}
const removeItem=(items)=>{
    const filterItem = itemList.filter((itemTodo)=>itemTodo !== items)
    setItemList(filterItem)
}

const clearTodo=()=>{
    setItemList("")
}


    return (
        <div>
         <div className="container w-[600px] rounded bg-gray-100 px-6 py-10 text-center">
            <h1 className='font-semibold text-2xl mb-8'>Todo App</h1>
            <form className='flex mb-5' onSubmit={addTodo}>
                <input type="text" placeholder='Write Todo' autoComplete='off' value={itemTodo} onChange={(e)=>setItemTodo(e.target.value)} className='px-5 py-3 focus:outline-none text-black rounded flex-1' />
                <button className='bg-red-400 px-6 py-2 rounded-full font-semibold text-white ml-3 hover:bg-red-600 transition-colors duration-300'>Add Task</button>
            </form>
 
               {
                itemList.length>0 ? (
                    <div className="item-list">
                    {
                        itemList.map((items, index)=>(
                            <div key={index} className="item flex bg-white px-3 py-2 rounded gap-4 justify-between items-center mb-3">
                            <span className='bg-red-400 p-1 rounded-full w-6 h-6 !text-[12px] leading-none text-center overflow-hidden font-semibold text-white'>{index}</span>
                            <p className='font-medium '>{items}</p>
                            <button className='bg-red-400 px-5 py-2 rounded-full text-white text-sm font-semibold' onClick={()=>removeItem(items)}>Delete</button>
                        </div>
                        ))
                    }
                     </div>
                ): ("Empty Todo")
               }

               <div className='mt-6'>
                <button className='bg-blue-400 hover:bg-red-400 px-5 py-3 rounded-full font-semibold text-xs' onClick={clearTodo}>Clear Todo</button>
               </div>

           

         </div>
        </div>
    );
};

export default Todo;