import React, { useEffect, useState } from 'react';
import "./Add.css"
const Products=()=>{
    const [prod,setprod]=useState([]);
    // useEffect(() => {
    //     getProduct();
    //   }, [prod]);
    // const getProduct=async()=>{
    //     let r1 =await fetch("http://localhost:4000/product");
    //     r1=await r1.json();
    //     setprod(r1);
    //     //console.log(prod);

    // }
    useEffect(()=>{
        getprod();
    },[]);
    const getprod= async()=>{
        let result=await fetch('http://localhost:4000/product');
        result=await result.json();
        console.log(setprod)
        setprod(result);
    }
    
    const deleteit=async (id)=>{
        let result=await fetch(`http://localhost:4000/product/${id}`,{
            method:"Delete",

        });
        result=await result.json();
        //if(result){
        //    alert("record is deleted")
        //}
    }
    return(
        <div className='prod'>
            <h1>Product list</h1>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                prod.map((item,ind)=>
                <ul key={item._id}>
                <li>{ind+1}</li>
                <li>{item.name}</li>
                <li>₹ {item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li><button onClick={()=>deleteit(item._id)}>Delete</button></li>
                
            </ul>)
            }
        </div>
    )
}
export default Products;