
import { useEffect,useState } from 'react';
import './Order.css'
import Joke2 from './Joke2';
const OrderHis = () => {
    const [ord,setord]=useState([]);
    const [err,seterr]=useState('');
    useEffect( ()=>{
        const fetchmeal =async ()=>{
          const response=      await fetch('https://foodmeal-478c3-default-rtdb.firebaseio.com/order.json');
          if(!response.ok){
            throw new Error('Error in the server')
          }
          const resdata=await response.json();
          
          const d=resdata.orderedItems;
          //console.log("drama: ",d.json())
          setord(resdata)
        }
        try{
          fetchmeal();
        }
        catch(error){
          
          seterr(error.message)
        }
    },[] );

        //   const loadmeal=[];
        //   for(const k in resdata){
        //     loadmeal.push({
        //       id:k,
        //       name:resdata[k].name,
        //       description:resdata[k].description,
        //       price:resdata[k].price
        //     })
        //   }
        //   setmeals(loadmeal);
        //   setload(false);
  
  
        // }
        // try{
        //   fetchmeal();
        // }
        // catch(error){
        //   isload(false);
        //   seterr(error.message)
        // }
    //const d1=ord.map((e1)=>e1.map((e2) =><Joke2 am={e2.amount}></Joke2>))
    //const d1=ord.map((e1)=><Joke2 am={e1}></Joke2>)

  return (
    <div className='ord'>
        <h1 className='hk'>Order History</h1>
        <ul className='list'>
            <li>Name</li>
            <li>Address</li>
            <li>Phone no</li>
            <li>Order details </li>
        </ul>
        <div className='ord2'>
        <ul className='ordlist'>
        {Object.keys(ord).map((orderKey) => (
          <li className='l1'key={orderKey}>
            <li>{ord[orderKey].user.name}</li>
            <li>{ord[orderKey].user.street}</li>
            <li> {ord[orderKey].user.phone}</li>
           
              {Object.keys(ord[orderKey].orderedItems).map((itemKey) => (
                <><li className='l2'key={itemKey}>
                <li><li className='lk1'>Amount :</li><li className='lk2'> {ord[orderKey].orderedItems[itemKey].amount}</li></li>
                <li><li className='lk1'>Name : </li> <li className='lk2'> {ord[orderKey].orderedItems[itemKey].name}</li> </li>
                <li><li className='lk1'>Price :</li> <li className='lk2' >₹ {ord[orderKey].orderedItems[itemKey].price}</li></li>
                </li>
                </>
              ))}
          </li>
        ))}
      </ul>

        </div>
        
      
      
    </div>
  )
}

export default OrderHis

{/* <ul>
        {Object.keys(ord).map((orderKey) => (
          <li key={orderKey}>
            Order ID: {orderKey}, User: {ord[orderKey].user.name}, Ordered Items:
            <ul>
              {Object.keys(ord[orderKey].orderedItems).map((itemKey) => (
                <li key={itemKey}>
                  Amount: {ord[orderKey].orderedItems[itemKey].amount}, 
                  Name: {ord[orderKey].orderedItems[itemKey].name}, 
                  Price: {ord[orderKey].orderedItems[itemKey].price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
