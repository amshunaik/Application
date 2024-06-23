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
    const [err,seterr]=useState(null);
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        //setpresslogout(true)
        // if(auth){
        //   nav('/login')
        // }
      })
const collect=async()=>{
    console.log(name,pw,email);
    if(name==''||pw==''||pw.length()<6||email==''){
        seterr("Fill complete details");
        return;

    }
    let result=await fetch('http://localhost:4000/register',{
        method:'post',
        body:JSON.stringify({name,email,pw}),
        headers:{
            'Content-Type':'application/json'
        },
    })
    console.log("prac", result);
    result=await result.json();
    const user1={name:result.name,email:result.email}
    console.warn(result);
    nav('/login');
    localStorage.setItem("user",JSON.stringify(result))
}
    return(
        <div className='box0'>
            <h1>Register</h1>
            <div className='log11'>
            <div>
            <label htmlFor="" className='detr'>Name : </label>

            <input type="text" placeholder='Enter name' value={name} onChange={(e)=>(setname(e.target.value))} required/>
            {name==''&&err&&<h4 className='error1'>Enter Name * </h4>}
            
            </div>

           <div>
           <label htmlFor="" className='detr'>Email ID : </label>

            <input type="text" placeholder='Enter email' value={email} onChange={(e)=>setemail(e.target.value)} required/>
            {email==''&&err&&<h4 className='error1'>Enter valid email id * </h4>}
           </div>
           <div>
           <label htmlFor="" className='detr'>Enter password : </label>
           
           <input type="password" placeholder='Enter Password' value={pw} onChange={(e)=>setpw(e.target.value)} required />
           {pw==''&&err&&<h4 className='error1'>Enter  password of length greater than 6 * </h4>}
           </div>
            </div>

            <button onClick={collect} type='button'>Sign Up</button>
        </div>
    )
}
export default SignUp;