import React, { useState } from 'react'
import classes from './CheckForm.module.css'
import { useRef } from 'react'
const isEmpty=value=>value.trim()==='';
const len5=value=>value.trim().length !=5;
const CheckForm = (props) => {
    const name1=useRef();
    const street1=useRef();
    const phone1=useRef();
    const postal1=useRef();
    const [formvalid,setformvalid]=useState({
        name:true,
        street:true,
        phone:true,
        postal:true
    })

    const conifrmHand=(event)=>{

        event.preventDefault();
        const Ename=name1.current.value;
        const Estreet=street1.current.value;
        const Ephone=phone1.current.value;
        const Epostal=postal1.current.value;
        
        const namevalid=!isEmpty(Ename);
        const streetvalid=!isEmpty(Estreet);
        const phonevalid=!isEmpty(Ephone);
        const postvalid=!isEmpty(Epostal);
        const auth=localStorage.getItem("login");
        const emai_user=JSON.parse(auth).email

        const formvalid=namevalid&&streetvalid&&phonevalid&&postvalid;
        // if(!formvalid){
        //     return;
        //     //submit
        // }
        props.onConfirm({
            email:emai_user,
            name:Ename,
            street:Estreet,
            phone:Ephone,
            postal:Epostal
        })
        setformvalid({
            name:namevalid,
            street:streetvalid,
            phone:phonevalid,
            postal:postvalid
        })


    }
    const onConfirm=()=>{
        return alert("Thank you for ordering from FOODIE !\n We will reach you as soon as possible"
        )

    }
  return (
    <form onSubmit={conifrmHand}>
        <div className={`${classes.cont} ${formvalid.name?'':classes.err1}`}>
            <label htmlFor="name">Name</label>
            <input type="text" ref={name1}  />
            {!formvalid.name&&<p >Enter valid name</p>}
        </div>

        <div className={`${classes.cont} ${formvalid.street?'':classes.err1}`}>
            <label htmlFor="name">Street Address</label>
            <input type="text"  ref={street1}/>
            {!formvalid.street&&<p >Enter valid address</p>}
        </div>
        <div className={`${classes.cont} ${formvalid.phone?'':classes.err1}`}>
            <label htmlFor="name">Phone number</label>
            <input type="tel" ref={phone1} />
            {!formvalid.phone&&<p>Enter valid phone number</p>}

        </div>

        <div className={`${classes.cont} ${formvalid.postal?'':classes.err1}`}>
            <label htmlFor="name">Postal Code</label>
            <input type="text"  ref={postal1}/>
            {!formvalid.postal&&<p >Enter valid postal code</p>}

        </div>
        <button className={classes.but1}type='button' onClick={props.onCancel}>Cancel</button>
        <button className={classes.but2} onClick={onConfirm}>Confirm order</button>
        

      
    </form>
  )
}

export default CheckForm


