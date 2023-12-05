import React,{Fragment, useState,useContext} from 'react'
import classes from './Header.module.css'

import {NavLink,Link, useNavigate} from 'react-router-dom'
import mealsImg from '../../asserts/meal1.jpg'
import HeaderCart from './HeaderCart'
import Cartcont from '../Store/cart-cont'
const Header=(props)=>{
    const navigate=useNavigate();
    //const {presslogout,setpresslogout}=useContext(Cartcont)
    //const [presslogout,setpresslogout]=useState(false);
    //const[data1,setdata1]=useState(localStorage.getItem('user'))
    const auth=localStorage.getItem('user');
    const onlogout=()=>{
      console.log("apple");
      localStorage.clear();
      //setdata1(null)
      //setpresslogout(true)
      console.log(auth)
      navigate('/signup')
      
    }
    
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>FOODIE</h1>
                {auth?<ul className={classes.lok}>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Home</NavLink></li>
                    <li><NavLink to="/hist" className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Order History</NavLink></li>
                    <li><NavLink to="/signup" onClick={onlogout} className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Logout <span className={classes.sp1}>{JSON.parse(auth).name}</span> </NavLink></li>
                    
                  
                  </ul>:<ul className={classes.lok}>
                    
                    <li><NavLink  to ="/signup" className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Sign up</NavLink></li>
                    <li><NavLink to="/login" className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Login</NavLink></li>
                  </ul> 
                  }
                
                <HeaderCart onShow={props.onClk}/>
            </header>

            
        </Fragment>


    )

}
export default Header;