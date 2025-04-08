
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
const [boughtPlayers,setboughtPlayers]=useState([])
const [error,setError]=useState(false)
const handleBuy=(player)=>{
  if (player.price>coins){
    setError(true)
  return
  }
setCoins(coins-player.price)
  if (coins>player.price){
    const newPlayer=[...boughtPlayers,player]
   
    setboughtPlayers(newPlayer)

  }
}


  return (
    <>
    <div className='w-7xl mx-auto'>
      {
        (error)&& <div role="alert" className="alert alert-vertical sm:alert-horizontal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>You do not have enouh coins. Add more Coins.</span>
        <div>
          <button className="btn btn-sm" onClick={()=>setError(false)} >Ok!</button>
         
        </div>
      </div>
      }
      <Header coins={coins}></Header>
      <Middle coinHandler={coinHandler}></Middle>
      <div className='flex justify-between m-2'>
        <div>
          <h1 className='text-3xl mt-4'> Available Players</h1>
        </div>
        <div className=''>
          <button onClick={selectedView}  className={`mr-1 border rounded p-1 ${(view)?'bg-white':'bg-amber-200'}`}>
            Available

          </button>
          <button onClick={selectedView} className={`border rounded p-1 ${(view)?'bg-amber-200':'bg-white'}`}>
            Selected ({boughtPlayers.length})

          </button>
        </div>        
      </div>
      {
        (view)?<Selected boughtPlayers={boughtPlayers}></Selected>:<Available handleBuy={handleBuy}></Available>
      }
    
      <Footer></Footer>

    </div>
    
      
    </>
  )
}

export default App
