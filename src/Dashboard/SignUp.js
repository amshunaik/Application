import react, { useState,useEffect,useContext } from 'react'
import {useNavigate} from 'react-router-dom'
//import Cartcont from '../component/Store/cart-cont';
const SignUp=()=>{
    const [name,setname]=useState('');
    const [pw,setpw]=useState('');
    const navigate=useNavigate()
    
    //const {presslogout,setpresslogout}=useContext(Cartcont)
    const [email,setemail]=useState('');
    const nav=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        //setpresslogout(true)
        if(auth){
          nav('/')
        }
      })
const collect=async()=>{
    console.log(name,pw,email);
    let result=await fetch('http://localhost:4000/register',{
        method:'post',
        body:JSON.stringify({name,email,pw}),
        headers:{
            'Content-Type':'application/json'
        },
    })
    console.log("prac", result);
    result=await result.json();
    console.warn(result);
    nav('/');
    localStorage.setItem("user",JSON.stringify(result))
}
    return(
        <div className='box0'>
            <h1>Register</h1>
            <input type="text" placeholder='Enter name' value={name} onChange={(e)=>(setname(e.target.value))}/>
            <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)} />
            <input type="password" placeholder='Enter Password' value={pw} onChange={(e)=>setpw(e.target.value)} />
            <button onClick={collect} type='button'>Sign Up</button>
        </div>
    )
}
export default SignUp;