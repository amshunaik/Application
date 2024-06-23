
import { useEffect,useState } from 'react';
import './Order.css'
import Joke2 from './Joke2';
import Footer from './Footer';
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
            <li className='jk1'>{ord[orderKey].user.name}</li>
            <li className='jk1'>{ord[orderKey].user.street}</li>
            <li className='jk1'> {ord[orderKey].user.phone}</li>
            <li className='part0'>
            {Object.keys(ord[orderKey].orderedItems).map((itemKey) => (
                <div className='pt1'><li className='l2'key={itemKey}>
                <li><li className='lk1'>Amount :</li><li className='lk2'> {ord[orderKey].orderedItems[itemKey].amount}</li></li>
                <li><li className='lk1'>Name : </li> <li className='lk2'> {ord[orderKey].orderedItems[itemKey].name}</li> </li>
                <li><li className='lk1'>Price :</li> <li className='lk2' >₹ {ord[orderKey].orderedItems[itemKey].price}</li></li>
                </li>
                </div>
              ))}

            </li>
              
          </li>
        ))}
      </ul>

        </div>
        <Footer/>
        
      
      
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
