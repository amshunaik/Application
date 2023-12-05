import classes from './Mealiteam.module.css'
import MealForm from './MealForm';
import { useContext } from 'react';
import Cartcont from '../Store/cart-cont';
const MealIteam =props=>{
    const ctx1=useContext(Cartcont);

    const price=`₹${props.price}`;
    const addtoCart =amount=>{
        ctx1.addIteam({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    return (

        <li className={classes.meal}>
            <div><h2 className={classes.name}>{props.name}</h2>
            <div className={classes.desc}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealForm onAddToCart={addtoCart}/>
            </div>
        </li>
    )

}
export default MealIteam;