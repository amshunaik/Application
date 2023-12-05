
import { useRef,useState,useContext } from 'react'
import Input from '../UI/input'
import classes from './MealForm.module.css'
import Cartcont from '../Store/cart-cont'
const MealForm=(props)=>{
    const aref=useRef();
    const [amountisVal,setamountisval]=useState(true)
    const[added,setadded]=useState(0)
   
    const submitHandler1 = event =>{
        event.preventDefault();
        const e1= aref.current.value;
        console.log("dfd: ",e1);
        const eno = +e1;

        if(e1.trim().length===0 || eno<1 || eno>5){
            setamountisval(false);
            return;
        }
        props.onAddToCart(eno);
    }
    const addsum=()=>{
        setadded((prev)=> {return (prev+1)})
        console.log("added",added)
        return added

    }
    
        return (
    
        <form className={classes.form} onSubmit={submitHandler1}>
            <Input label='Manual adder'
            ref={aref} 
            input={{id:'amount'+props.id, tupe:'number', min:'1', max:'10', step:'1', defaultValue:'1', addno:added}}  />
            <button onClick={addsum} className={classes.bt2}>+ Add</button>
            {!amountisVal&&<p>Enter valid amount 1-5</p>}
        </form>
    )

}
export default MealForm;