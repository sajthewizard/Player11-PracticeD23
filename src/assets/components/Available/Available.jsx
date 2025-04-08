import React, { useEffect, useState } from 'react';
import Player from './Player/Player';

const Available = () => {
    const [players,setPlayers]=useState([])
    useEffect(()=>{
        fetch('player.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-4 mx-auto mb-4'>
           {
            players.map(player=><Player player={player}></Player>)
           }
        </div>
    );
};

export default Available;