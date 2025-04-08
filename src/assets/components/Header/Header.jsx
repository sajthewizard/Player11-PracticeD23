import React from 'react';
import logo from '../../../assets/logo.png';
import { BsCoin } from "react-icons/bs";
const Header = ({coins}) => {
    return (
        <div>
           <div className='flex justify-between m-2 p-2'> 
            <div>
                <img src={logo} alt="" />

            </div>
            <div className='flex gap-4 mt-4'>
              <div className='flex gap-4'>
              <h1>
                    Home

                </h1>
                <h1>
                    Fixure
                </h1>
                <h1>
                    team
                </h1>
                <h1>
                    Schedule
                </h1>
              </div>
                
                <kbd className="kbd kbd-xl flex gap-2"><p>{coins}  Coin</p> <span className='mt-2'><BsCoin className='mb-2' /></span></kbd>
                     

                   
</div>
          
           </div>

            
        </div>
    );
};

export default Header;