import React from 'react';
import { FaTrash } from "react-icons/fa";

const Selectedplayer = ({player,handleDelete}) => {
    console.log(player)
    return (

 <div className=" bg-base-200 w-ful shadow-md mb-2 m-4 p-4">
  <div className=" flex justify-between ">
    <div>
        <h1 className='text-2xl'>{player.name}</h1>
        <p>{player.position}</p>
    </div>
    <div className='flex'>
        <img src={player.image} className='h-16 w-16 rounded-b-full mr-16' alt="" />
       <button onClick={()=>handleDelete(player.id)}><FaTrash /></button>
    </div>
   
  </div>
</div>

    );
};

export default Selectedplayer;