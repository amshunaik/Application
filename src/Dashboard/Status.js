import React from 'react'
import "./Status.css"
import { useNavigate } from 'react-router-dom'
const Status = (props) => {
    const nav=useNavigate();
    const loginData=localStorage.getItem("login")
    const handlecust=()=>{
        props.onChange("cust");
        
        let loginObj = JSON.parse(loginData);
        loginObj.status="cust";

       let updatedLoginData = JSON.stringify(loginObj);
       
       localStorage.setItem("login", updatedLoginData);
        nav('/');
    }
    const handleserver=()=>{
        props.onChange("server");
        
        let loginObj = JSON.parse(loginData);
        loginObj.status="server";
       let updatedLoginData = JSON.stringify(loginObj);
       localStorage.setItem("login", updatedLoginData);
        nav('/');
    }
  return (
    <div>
        <div className='mainstat'>
            <h1 className='stat1'>Who are you ?</h1>
            <div className='stat2'>
                <button onClick={handlecust} className='stat3'>Customer</button>
                <button onClick={handleserver} className='stat3'>Service Provider</button>
            </div>
        </div>
      
    </div>
  )
}

export default Status
