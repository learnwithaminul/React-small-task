import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {

const menuLinks =[
    {id:1, name:"Counter", url:"/"},
    {id:2, name:"Todo", url:"/todo"},
    {id:3, name:"Form", url:"/form"}
]

    return (
        <div className='bg-gray-200 h-screen w-[300px] px-10 py-5'>
            <nav>
                <ul>
                 {
                    menuLinks.map((item, i)=>(
                    <li key={item.id} >
                        <NavLink  className={({isActive})=> isActive? "regular-color active-color" : "regular-color pending-color"} to={item.url}>{item.name}</NavLink>
                    </li>
                    ))
                 }
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;