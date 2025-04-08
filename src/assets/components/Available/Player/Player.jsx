import React from 'react';
import { IoIosMan } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";


const Player = ({player,handleBuy}) => {
    const{ country,image,name, position, price, wickets,runs}=player
    return (
        <div className="card bg-base-200 w-96 shadow-sm">
             <figure>
    <img className='h-52 w-full m-2' 
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><IoIosMan />    {name}</h2>
    <div className='flex justify-between border-b mb-4'>
      <div className='flex'>
      <CiFlag1 />
      <p className='ml-2 '> 
      {country}</p>
      </div>
      <div>
        <p className='bg-error rounded p-1 m-1'>
            {position}
        </p>
      </div>
    </div>
    <h1 className='text-bold'>Rating</h1>
    <h2>Runs: {runs}</h2>
    <h2>Wickets: {wickets}</h2>
    <h1 className='text-xl'>Price: ${price}</h1>
    <div className="card-actions justify-end">
      <button onClick={()=>handleBuy(player)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
            
        </div>
    );
};

export default Player;