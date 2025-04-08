import React from 'react';
import './Middle.css';
import logo from '../../banner-main.png'
const Middle = ({coinHandler}) => {
    return (
        <div className='chobi  content-center justify-items-center '>
         <div>
            <img className=' mb-6' src={logo} alt="" />
         </div>
         <h1 className='text-4xl mb-8'>
            Asemble Your Ultimate Dream 11 Cricket Team 
         </h1>
         <h1 className='text-2xl text-purple-900'>
            Beyond Boundaries Beyond Limit
         </h1>
         <button className="btn btn-dash btn-accent mt-4" onClick={()=>coinHandler(60000)}>Claim Your Coin</button>
        </div>
    );
};

export default Middle;