import React from 'react';
import { FaTrash } from "react-icons/fa";

const Selectedplayer = ({player}) => {
    console.log(player)
    return (

 <div className=" bg-base-200 w-ful shadow-md mb-2 m-4 p-4">
  <div className=" flex justify-between ">
    <div>
        <h1 className='text-2xl'>{player.name}</h1>
        <p>{player.position}</p>
    </div>
    <div>
       <button><FaTrash /></button>
    </div>
   
  </div>
</div>

    );
};

export default Selectedplayer;