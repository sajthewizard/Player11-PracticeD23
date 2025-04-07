import React from 'react';
import logo from '../../../assets/logo.png'
const Header = () => {
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
                <div>
                    <button>Coin
                        
                    </button>
</div>
            </div>
           </div>

            
        </div>
    );
};

export default Header;