import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import SideCart from './Component/SideCart/SideCart';

function App() {
  const [watchTime, setWatchTime]=useState('');
const handleWatchTime =(time)=>{
const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'))
if(previousWatchTime){
  const sum = previousWatchTime + time;
  console.log(sum);
  localStorage.setItem('watchTime', sum);
  setWatchTime(sum);

}
else{
  localStorage.setItem('watchTime', time);
  watchTime(time);

}
}

  return (
    <div className="main row d-flex">
    
    <div className='home-container col-md-8 card'>
      <Home handleWatchTime={handleWatchTime}></Home>
   

    </div>
    <div className='side-cart col-md-4 card'>
      <SideCart watchTime={watchTime}></SideCart>

    </div>
    </div>
  )
}

export default App
