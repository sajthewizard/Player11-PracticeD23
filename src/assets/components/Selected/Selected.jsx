import React from 'react';
import Selectedplayer from '../Selectedplayer/Selectedplayer';

const Selected = ({boughtPlayers}) => {
    
    return (
        <div>
           {
            boughtPlayers.map(player=><Selectedplayer player={player}></Selectedplayer>)
           }
        </div>
    );
};

export default Selected;