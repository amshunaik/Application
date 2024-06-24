import React, { useState } from 'react'
import './Add.css'
import {BASE_URL} from './Helper.js'

const AddProd=()=>{
    const [name,setname]=useState("")
    const [price,setprice]=useState("")
    const [category,setcategory]=useState("")
    const [company,setcompany]=useState("")
    const [err,seterr]=useState(false);
   const addbutton=async()=>{

    if(!name||!price||!category||! company){
        alert("Fill complter details")
        seterr(true);
        return false;
    }
    console.log(name,price,category,company)
    const userid=JSON.parse(localStorage.getItem('user'))._id;
    let result= await fetch(`${BASE_URL}/add`,{
        method:'post',
        body:JSON.stringify({userid,name,price,category,company}),
        headers:{
            "Content-Type":"application/json"
        }

    });

    result=await result.json();

   }
    return(
        <div className='addprod'>
            <h1>Add product</h1>
            <input type="text" placeholder='Enter product name' value={name} onChange={(e)=>setname(e.target.value)}/>
            {err&& !name &&<span>Enter valid name</span>}
            <input type="text" placeholder='Enter product price'  value={price} onChange={(e)=>setprice(e.target.value)}/>
            {err&& !price &&<span>Enter valid price</span>}
            <input type="text" placeholder='Enter product category'  value={category} onChange={(e)=>setcategory(e.target.value)}/>
            {err&& !category &&<span>Enter valid category</span>}

            <input type="text" placeholder='Enter product company'  value={company} onChange={(e)=>setcompany(e.target.value)}/>
            {err&& !company &&<span>Enter valid company name</span>}

            <button onClick={addbutton}>Add Product</button>
        </div>
    )
}
export default AddProd;