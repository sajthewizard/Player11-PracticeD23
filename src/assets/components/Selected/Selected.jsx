import React from 'react';
import Selectedplayer from '../Selectedplayer/Selectedplayer';

const Selected = ({boughtPlayers,handleDelete}) => {
    
    return (
        <div>
            <h1>Selected Player {boughtPlayers.length}/6</h1>
          <div className='mb-16'>
          {
            boughtPlayers.map(player=><Selectedplayer
                 player={player}
                 handleDelete={handleDelete}
                 ></Selectedplayer>)
           }
          </div>
        </div>
    );
};

export default Selected;