
import React ,{useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();

    const [pw,setpw]=useState('');

     const [email,setemail]=useState('');
     useEffect(()=>{
      const auth=localStorage.getItem('user')
      if(auth){
         navigate("/")
      }
     })
     const handleLogin=async()=>{
         console.log("signed in")
         console.log(email,pw)
         let result=await fetch("http://localhost:4000/login",{
            method:'post',
            body:JSON.stringify({email,pw}),
            headers:{
                'Content-Type':'application/json'
            }

         });
         result=await result.json();
         if(result){
            localStorage.setItem("user",JSON.stringify(result))

         }
         else{
            alert("please enter correct details")
         }
         console.log("hbj")
         navigate("/")
         
     }
  return (
    
        
        <div className='box0'>
             <h1>Login here </h1>
             <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)} />
             <input type="password" placeholder='Enter Password' value={pw} onChange={(e)=>setpw(e.target.value)} />
             <button onClick={handleLogin} type='button'>Sign In </button>
         </div>
      
  )
}

export default Login
