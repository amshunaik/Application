

import React,{Fragment,useState} from 'react'
import Nav from './Dashboard/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Dashboard/Footer';
import SignUp from './Dashboard/SignUp';
import PrivateComp from './Dashboard/PrivateComp';
import Login from './Dashboard/Login';
import AddProd from './Dashboard/AddProd';
import Products from './Dashboard/Products';

import Header from "./component/Layout/Header";

import Meals from './component/Meals/Meals';
import Cart from './component/Cart/Cart';
import Cartprovide from './component/Store/cartProvide';
import Home from './component/Home';
import OrderHis from './Dashboard/OrderHis';
function App() {
  // const [cartShown,setcartShown]=useState(false);

  // const showcartHandel=()=>{
  //   setcartShown(true);
  // }
  // const hideCarthandle=()=>{
  //   setcartShown(false)
  // }
  return (
    <div className='link0'>
         <BrowserRouter>
         <Header/>  
        
         <Routes>
             <Route element={<PrivateComp/>}>
             <Route path="/" element={<Home/>}/>   
             <Route path="/p" element={<Products/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/add" element={<AddProd/>}/>
             <Route path="/update" element={<h1>update Product list</h1>}/>
             <Route path="/logout" element={<h1>Logout</h1>}/>
             <Route path="/profile" element={<h1>Profile</h1>}/>
             <Route path="/hist" element={<OrderHis/>}/>
            
             </Route>
             <Route path="/signup" element={<SignUp/>}/>
             



         </Routes>
         </BrowserRouter>
        
         </div>

  );
}

export default App;
