
import React ,{useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from './Helper.js'

const Login = () => {
    const navigate=useNavigate();

    const [pw,setpw]=useState('');

     const [email,setemail]=useState('');
     const [err,seterr]=useState('');
     
     const auth=localStorage.getItem('login')
   //   useEffect(()=>{
   //    if(auth){
   //       navigate("/")
   //    }
   //   })
     const handleLogin=async()=>{
         if(email==''|| pw==''){
            seterr("Fill all the entries");
            return;

         }
         console.log("signed in")
         console.log(email,pw)
         let result=await fetch(`${BASE_URL}/login`,{
            method:'post',
            body:JSON.stringify({email,pw}),
            headers:{
                'Content-Type':'application/json'
            }

         });
         result=await result.json();
         result.status='';
         console.log("login : ",result);
         if(result){
            localStorage.setItem("login",JSON.stringify(result))

         }
         else{
            alert("please enter correct details")
         }
         console.log("hbj")
         //localStorage.setItem("login",auth)
         navigate("/status")
         
     }
  return (
    
        
        <div className='box0'>
             <h1>Login here </h1>
 
           <div className='log11'>
           <div>
           <label htmlFor="" className='detr'>Email ID : </label>
             <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)} required/>
             {email==''&&err&&<h4 className='error1'>Enter valid email id * </h4>}
           </div>
             
           <div>
           <label htmlFor="" className='detr'>Enter password : </label>
             <input type="password" placeholder='Enter Password' value={pw} onChange={(e)=>setpw(e.target.value)} required/>
             {pw==''&&err&&<h4 className='error1'>Enter correct password * </h4>}
           </div>
           </div>

             <button onClick={handleLogin} type='button'>Login </button>
         </div>
      
  )
}

export default Login
