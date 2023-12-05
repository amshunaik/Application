import { useContext,useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import Cartcont from '../Store/cart-cont';
import CartItem from './CartItem';
import CheckForm from './CheckForm';
const Cart=props=>{
    const [isorder,setord]=useState(false)

    const cartctx=useContext(Cartcont);
    const totalAmount=`₹${cartctx.totalAmount.toFixed(2)}`;
    const presentitem =cartctx.item.length>0;
    
    const cartitemRemoveHand=id=>{
        cartctx.removeItem(id);
    };

    const cartitemAddHand=item=>{
        cartctx.addIteam(item);
        console.log("cartctx: ",cartctx)
    };

    
    //async
    const orderHand=()=>{
        setord(true);

    }
    const submithand=(data1)=>{
        fetch('https://foodmeal-478c3-default-rtdb.firebaseio.com/order.json',{
            method:'POST',
            body:JSON.stringify({
                user:data1,
                orderedItems:cartctx.item
            })
            
        })

    }

    const cartitem=<ul className={classes['cart-items']}>
        {cartctx.item.map((item)=>
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
        onRemove={cartitemRemoveHand.bind(null,item.id)} onAdd={cartitemAddHand.bind(null,item)}/>)}
         </ul>

    return(
        <Modal onClose={props.onClose}>
            {cartitem}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {isorder&&<CheckForm onConfirm={submithand} onCancel={props.onClose}/>}
            {!isorder&& <>
                <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {presentitem &&<button className={classes.button} onClick={orderHand}>Order</button>}
            </div>
            
            </>}
            
        </Modal>
    )
};
export default Cart;