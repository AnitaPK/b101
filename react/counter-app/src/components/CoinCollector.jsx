import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const CoinCollector = () => {
    const [coin, setCoin] = useState(50)
    const [level, setLevel] = useState(1)
    
    function handleGetCoin(){
        setCoin(prev => prev= prev+20)
    }
    function handleLossCoins(){
        setCoin(p => p = p-10)
    }
    function handleJackpot(){
        setCoin(prev => prev= prev+50)
    }
    function handleNextLevel(){
        if(coin >=100){
            setCoin(prev => prev-100)
            setLevel(prev => prev+1)
        }else{
            // alert("GEt more coins")
            toast.warn("Get More Coins", )
        }
    }
  return (
    <>
    <div>CoinCollector</div>
    <h2>Coin: {coin} , level : {level}</h2>
    
    <button onClick={handleGetCoin}>Get Coins</button>
    <button onClick={handleLossCoins}>Loss Coins</button>
    <button onClick={handleJackpot}>Jackpot</button>
    <button onClick={handleNextLevel}>Next Level</button>
    
    
    
    
    <pre>   
        1. create state for coin assign 50coins <br />
        2. create state for level start with level 1 <br />
        3. create function or buttons to increase coins  <br />
            i. get 20 coins<br />
            ii. loss 10 coins<br />
            iii. jackpot 50 coins<br />
        4. update level with coin count 
            {/* if(coin &gt;= 100){
                move to next level 
                and decrease coin count by 100
            } */}
    </pre>
    <ToastContainer position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
// transition={Bounce}
/>
    </>
  )
}

export default CoinCollector