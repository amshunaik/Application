// import First from "./Core/first";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";

// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// function App() {
//   const router=createBrowserRouter([
//     {path:'/',element:<First/>},
//     {path:'/about',element:<About/>},
//     {path:'/contact',element:<Contact/>}
//   ])


//   return (
//     <div>
//       <RouterProvider router={router}/>



//     </div>

//   );
// }
// export default App;



// ApI code is below mentioned for movie: uncoment it and run it
// }
// export default App;
// import Experience from "./components/Movies/Experience";
// function App(){
//   return(
//     <Experience/>

//   )

// }
// export default App;
// import Todo from './components1/Actions/todo'
// function App() {
//   return (
//     <div>


//       <Todo/>



//     </div>

//   );
// }

//export default App;

// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import Home from './page1/Home';
// import Contact from './page1/Contact';
//  function App(){
//   const router=createBrowserRouter([{
//     path:'/',element:<Home/>
//   },
//   {path:'/contact',element:<Contact/>}])
//   return(
//     <div>
//       <RouterProvider router={router}/>

//     </div>

//   )

//  }
//  export default App;

// stack overflow ----------------------------------------------------------------

// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import Auth from './Pages/Auth/Auth';
// import Root from './Pages/Root';
// import Questions from './components/Homesidebar/Questions';
// function App(){
//   const router=createBrowserRouter([{
//     path:'/',element:<Root/>,children:[
//       {path:'/',element:<Home/>},
// {path:'/Auth',element:<Auth/>},
// {path:'/Questions',element:<Questions/>}

//     ]}
// ])
//   return (
//     <div>
//       <RouterProvider router={router}/>

//     </div>
//   )

// }
// export default App;

//------------------------------food BTP-------------------------------------------------
//  import { Fragment ,useState} from "react";
// import Header from "./foodmenu/components/Layout/Header";
// import Meals from "./foodmenu/components/Meals/Meals";
// import Cart from "./foodmenu/components/Cart/Cart";
// import CartProvider from "./foodmenu/Store/Cart-provider";
// function App(){

//     const [cartIsShown,setcartIsShown]=useState(false);

//     const showCartHandler=()=>{
//         setcartIsShown(true);
//     }
//     const HideCartHandler=()=>{
//         setcartIsShown(false);
//     }
//     return(
//         <CartProvider>
//             {cartIsShown&&<Cart onClose={HideCartHandler}/>}
//             <Header onShowCart={showCartHandler}/>
//             <main>
//                 <Meals/>
//             </main>


//         </CartProvider>
//     )

// }
// export default App;

////////////////////////////////////////////////food btp follow below ///////////////////

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

//////////////////////////////////////////////////////////////////////////////////
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Nav from "./part/Nav";
// import Signup from "./part/Signup";
// import PrivateComponent from "./part/Private.component";
// import Login from "./part/Login";
// import AddProduct from "./part/AddProduct";
// import ProductList from "./part/ProductList";
// function App(){
//   return(
//     <div>
//       <BrowserRouter>
//       <Nav/>
//       <Routes>

//         <Route element={<PrivateComponent/>}>
//         <Route path="/" element={<Home/>}
//         <Route path="/p" element={<ProductList/>}/>
//         <Route path="/add" element={<AddProduct/>}/>
//         <Route path="/update" element={<h1> update product here</h1>}/>
//         <Route path="/logout" element={<h1> logout here</h1>}/>
//         <Route path="/profile" element={<h1> profile here</h1>}/>
//         </Route>

//         <Route path="/signup" element=<Signup/> />
//         <Route path="/Login" element=<Login/>/>
//       </Routes>


//       </BrowserRouter>


//     </div>
//   )

//******************************************************************************* */
// import React, { useEffect, useState } from 'react';

// import Login from './components/Login/Login';
// import Home from './components/Home/Home';
// import MainHeader from './components/MainHeader/MainHeader';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(()=>{
//     const s=localStorage.getItem('isLoggedIn');
//     if(s==='1'){
//       setIsLoggedIn(true);
//     }
//     console.log("hjjjj")
//   },[])
//   const loginHandler = (email, password) => {
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem('isLoggedIn','1');
//     console.log("hi");
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <React.Fragment>
//       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;


// import React from 'react'
// import './App.css'
// import Todolist from './To-Do/Todolist'
// import 'bootstrap/dist/css/bootstrap.min.css'
// function App() {
//   return (
//     <div>
//       <Todolist/>

//     </div>
//   )
// }

// export default App
////////////////////////////////////Backend part  node js/////////////////
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Nav from "./part/Nav";
// import Signup from "./part/Signup";
// import PrivateComponent from "./part/Private.component";
// import Login from "./part/Login";
// import AddProduct from "./part/AddProduct";
// import ProductList from "./part/ProductList";
// function App(){
//   return(
//     <div>
//       <BrowserRouter>
//       <Nav/>
//       <Routes>

//         <Route element={<PrivateComponent/>}>
//         <Route path="/" element={<ProductList/>}/>
//         <Route path="/add" element={<AddProduct/>}/>
//         <Route path="/update" element={<h1> update product here</h1>}/>
//         <Route path="/logout" element={<h1> logout here</h1>}/>
//         <Route path="/profile" element={<h1> profile here</h1>}/>
//         </Route>

//         <Route path="/signup" element=<Signup/> />
//         <Route path="/Login" element=<Login/>/>
//       </Routes>


//       </BrowserRouter>


//     </div>
//   )

// }
// export default App;

////////////////////////////////////////Part ended////////////////////////
// import {createBrowserRouter ,  RouterProvider} from 'react-router-dom';
// import Home from './navig/home';
// import Kong from './navig/react';
// import Hk from './navig/hk';
// import Club from './navig/Club';
// import Parse from './navig/Parse';
// const router=createBrowserRouter([
//     {path:'/',element:<Parse/> ,children:[
//         {path:'/',element:<Home/>},
//     {path:'/kong',element:<Kong/>}

//     ]},


//     {path:'/kong',element:<Kong/>},
//     {path:'/kong/:id',element:<Club/>},
//     {path:'/hk',element:<Hk/>}

// ])
// function App(){

//     return(
//         <>
//         <h1>For you</h1>

//         <RouterProvider router={router}/>

//         </>
//     )

// }
// export default App;

////////////////////////////////////////////
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import ADragDrop from './ADragDrop';
// function App(){
//   return(
//     <DndProvider backend={HTML5Backend}>
//       <div className=''>
//         <ADragDrop/>
//       </div>


//     </DndProvider>
//   )


// }
// export default App;
/////////////////////////////////////////////////
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import User from './Todo/User';
// import CreateUser from './Todo/CreateUser';
// import UpdateUser from './Todo/UpdateUser';
// function App(){
//   const router=createBrowserRouter([
//     {path:'/',element:<User/>},
//     {path:'/create',element:<CreateUser/>},
//     {path:'/update/:id',element:<UpdateUser/>}

//   ])
//   return(
//     <>
//     <h1>dfdd</h1>
//     <RouterProvider router={router}/>

//     </>
//   )


// }
// export default App;
////////////////////////////////////////Manas codethon/////////////////////



// import React, { useState } from "react";
// import Questions from "./Manascode/Questions";
// import Start from "./Manascode/Start";
// import './App.css'

// //import Analysis from "./Manascode/Analysis";
// import Root from "./Manascode/Root/Root";
// import Quescover from "./Manascode/Quescover";
// import { codecontext } from "./Manascode/Quescover";
// import { useContext } from "react";
// import Recomend from "./Manascode/Recomend";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import Tracks from "./Manascode/Root/Tracks";
// import Home from "./Manascode/Root/Home";
// import Pass1 from "./Manascode/Root/Audiotrack/Pass1";
// import Pass2 from "./Manascode/Root/Audiotrack/Pass2";
// import Pass3 from "./Manascode/Root/Audiotrack/Pass3";
// const router=createBrowserRouter([
//   {path:'/',element:<Root/>, children:[
    
//   {path:'/',element:<Home/>},
//   {path:'/ques',element:<Questions/>},
//   {path:'/recomend',element:<Recomend/>},
//   {path:'/tracks',element:<Tracks/>},
//   {path:'/aud1',element:<Pass1/>},
//   {path:'/aud2',element:<Pass2/>},
//   {path:'/aud3',element:<Pass3/>},


  
  

// ]},


// ])
// function App(){
//   return(
//     <div className="go">
//     <RouterProvider router={router}/>
    
//     </div>
//   )

// }
// export default App;
////////////////////////////////////////////////////////

// const {start,analyse}=useContext(codecontext)
//   return(
//     <div className="body">
//     <div className="cover">
//     {
//       start==false?<Start/>:<Questions/>
//     }



//     </div>
//     </div>
//   )
/////////////////////////////////FSM website /////////////////////////////////////


// import React from 'react'
// //import Search from './Search/Search';
// import File1 from './Search/File1';
// function App(){
//   return(
//     <>
//     <File1/>
    
//     </>
//   )

// }
// export default App;
///////////////////////////////////////////////////
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Root from "./Learn/Root";
// import Home from "./Learn/Home";
// import React from "react";
// //import About from "./Learn/About";
// import Nomatch from "./Learn/Nomatch";
// import Feature from "./Learn/Feature";
// import Prod from "./Learn/Prod";
// import New from "./Learn/New";
// const Lazy=React.lazy(()=>import('./Learn/About'))

// const App=()=>{
//   const router=createBrowserRouter([
//     {path:'/',element:<Root/>,children:[
//       {path:'/',element:<Home/>},
//       {path:'/about',element:<Lazy/>},
//       {path:'*',element:<Nomatch/>},
//       {path:'prod',element:<Prod/>,children:[
//         {path:'feat',element:<Feature/> },
//         {path:'new',element:<New/>}
//       ]}
      
//     ]}
//   ])

//   return(
//     <>
//     <RouterProvider router={router}/>
//     </>
//   )
// }
// export default App;

/////////////////////////////////////////////
// import React from 'react'
// import Help from './Port/Help.js'
// const App = () => {
//   return (
//     <div>
//         <Help/>
        
      
//     </div>
//   )
// }

// export default App;
////////////////////////////////////////////////////////

//Dashboard///////////
// import './App.css'
// import Nav from './Dashboard/Nav';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Footer from './Dashboard/Footer';
// import SignUp from './Dashboard/SignUp';
// import PrivateComp from './Dashboard/PrivateComp';
// import Login from './Dashboard/Login';
// import AddProd from './Dashboard/AddProd';
// import Products from './Dashboard/Products';
// function App(){
//     return(
//         <div className='link0'>
//         <BrowserRouter>
//         <Nav/>  
//         <h1>Dashboard</h1>
        
//         <Routes>
//             <Route element={<PrivateComp/>}>
                
//             <Route path="/" element={<Products/>}/>
//             <Route path="/add" element={<AddProd/>}/>
//             <Route path="/update" element={<h1>update Product list</h1>}/>
//             <Route path="/logout" element={<h1>Logout</h1>}/>
//             <Route path="/profile" element={<h1>Profile</h1>}/>
//             </Route>
//             <Route path="/signup" element={<SignUp/>}/>
//             <Route path="/login" element={<Login/>}/>



//         </Routes>
//         </BrowserRouter>
//         <Footer/>
//         </div>
//     )
// }
// export default App;

////////////////////////Blog  js/////////
// import React from 'react'
// import Topblg from './Topblg/Topblg'
// import Home from './TopHome/Home'
// import Single from './TopHead/Single'
// import Write from './TopHead/Write'
// import Setting from './TopHead/Setting'
// import Login from './TopHead/Login'
// import Root from './TopHead/Root'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// const App = () => {
//   const router=createBrowserRouter([
//     {path:'/',element:<Root/>,children:[
//     {path:'/',element:<Home/>},
//     {path:'/register',element:<Setting/>},
//     {path:'/write',element:<Write/>},
//   {
//     path:'/login', element:<Login/>
//   }]}
//   ])
//   return (
//     <div>
//       <RouterProvider router={router}/>
        
//     </div>
//   )
// }

// export default App
/////////////////////////////////////////
// <Home/> 
//<Setting>
//<Topblg/>
//<Login/>

/////////////////////////////////////////////////////////Toogle////
// import Theme from './SCASS/Theme'
// import Togo from './SCASS/Togo'
// import Switch from "react-switch";
// import { createContext,useContext, useState } from 'react'
// import './SCASS/Togo.css'

// export const ThemeCont=createContext(null)
// const App = () => {
//   const [th,setth]=useState("light");

//   const toggle=()=>{
//     setth((curr)=>(curr==="light"?"dark":"light"));

//   }
//   return (
//     <ThemeCont.Provider value={{th,setth}}>
//       <div id={th}>
//       <Togo/>
//       <div className="st">
//         <label htmlFor="">{th==="light"?"Light Mode":"Dark Mode"}</label>
//       <Switch onChange={toggle} checked={th==="dark"}/>
//       </div>
      
      
      
//     </div>

//     </ThemeCont.Provider>
    
//   )
// }

// export default App
/////////////////////////////////////////////////

// import React from 'react'
// import Counter from './SCASS/Counter'

// const App = () => {
//   return (
//     <div>
//       <Counter/>
      
//     </div>
//   )
// }

// export default App
