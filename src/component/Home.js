
// import Header from "./component/Layout/Header";
// import Header from './component'
import classes from './Home.module.css'
import React,{Fragment,useState} from 'react'
import Meals from './Meals/Meals';

import mealsImg from '../asserts/meal3.jpg'
import Cart from './Cart/Cart';
import Cartprovide from './Store/cartProvide';
import Header from './Layout/Header';
const Home = () => {
    const [cartShown,setcartShown]=useState(false);

  const showcartHandel=()=>{
    setcartShown(true);
  }
  const hideCarthandle=()=>{
    setcartShown(false)
  }
  return (
    <Cartprovide>
    {cartShown &&<Cart onClose={hideCarthandle}/>}
    <Header onClk={showcartHandel}/>
    <main>
    <div className={classes['main-image']}>
                <img src={mealsImg} alt="" />
            </div>  
      <Meals/>
    </main>
  </Cartprovide>
  )
}

export default Home
