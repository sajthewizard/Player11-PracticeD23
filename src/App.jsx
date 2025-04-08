
import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import Middle from './assets/components/Middle/Middle'
import Selected from './assets/components/Selected/Selected'
import Available from './assets/components/Available/available'
import Footer from './assets/components/Footer/Footer'
import FloatingSection from './assets/components/FloatingSection/FloatingSection'

function App() {
  const [coins,setCoins]=useState(0)

 const coinHandler=(coin)=>{
  setCoins(coins+coin)
 }
 const [view,setview]=useState(false)
 const selectedView=()=>{
  setview(!view)
 }
  return (
    <>
    <div className='w-7xl mx-auto'>
      <Header coins={coins}></Header>
      <Middle coinHandler={coinHandler}></Middle>
      <div className='flex justify-between m-2'>
        <div>
          <h1 className='text-3xl mt-4'> Available Players</h1>
        </div>
        <div className=''>
          <button onClick={selectedView}  className='border rounded p-1'>
            Available

          </button>
          <button onClick={selectedView} className='border rounded p-1'>
            Selected ()

          </button>
        </div>        
      </div>
      {
        (view)?<Selected></Selected>:<Available></Available>
      }
    
      <Footer></Footer>

    </div>
    
      
    </>
  )
}

export default App
