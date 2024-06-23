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
    const auth1=localStorage.getItem('login');
    //console.log("Auth : ",auth)
    const onlogout=()=>{
      console.log("apple");
      localStorage.clear();
      //setdata1(null)
      //setpresslogout(true)
      console.log(auth)
      navigate('/login')
      
    }
    
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.icon1}>
                <img className={classes.food1}src="food.png" alt="" />
                <h1 className={classes.head5}>FooDee</h1>
                </div>
                
                {auth1&&<ul className={classes.lok}>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Home</NavLink></li>
                    <li><NavLink to="/hist" className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Order History</NavLink></li>
                    <li><NavLink to="/signup" onClick={onlogout} className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Logout </NavLink></li>
                    <li><h2 className={classes.hill}> Welcome <span className={classes.sp1}>{JSON.parse(auth1).name.charAt(0)}</span></h2></li>
                    
                  
                  </ul>
                }<ul className={classes.lok1}>
                    
                  {auth1==null&&<><li><NavLink to="/login" className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Login</NavLink></li>
                    <li><NavLink  to ="/signup" className={({ isActive }) => (isActive ? classes.kop : classes.lop)}>Signup</NavLink></li></>}
                  </ul> 
                  
                
                  {auth1&&<HeaderCart onShow={props.onClk}/>}
            </header>

            
        </Fragment>


    )

}
export default Header;