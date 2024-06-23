import { useContext ,useEffect,useState} from 'react';
import classes from './HeaderCart.module.css'
import Cartcont from '../Store/cart-cont';
const HeaderCart=(props)=>{
    const [btnclick,setbtnclick]=useState(false);
    const c1=useContext(Cartcont);
    const numbItem=c1.item.reduce((m,t1)=>{
        return m+ t1.amount;
    },0);
    //const {pres}=c1;
    const btmclass=`${classes.button} ${ btnclick?classes.bump:''}`;
    
    useEffect(()=>{
        if(c1.item.length===0){
            return;
        }
        setbtnclick(true);

        setTimeout(()=>{
            setbtnclick(false);
        },300);
        
    },[c1]);
    return (
        <button className={btmclass} onClick={props.onShow}>
            <span>MyCart</span>
            <span className={classes.badge}>{numbItem}</span>
        </button>
    )

}
export default HeaderCart;