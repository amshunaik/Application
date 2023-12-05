import Cartcont from "./cart-cont";
import { useReducer, useState } from "react";

const defaultcarts1={
    item:[],
    totalAmount:0
};
const cartred=(state,action)=>{
    if(action.type==='ADD'){
    
        const updateAmount=state.totalAmount+action.item.price*action.item.amount;
        const existingIndex =state.item.findIndex(item=> item.id===action.item.id);
        const existingitem=state.item[existingIndex];
        let upItem;
        let updateItems;
        if(existingitem){
            upItem={
                ...existingitem,
                amount: existingitem.amount+action.item.amount
            };
            updateItems=[...state.item];
            updateItems[existingIndex]=upItem;
        }
        else{
            upItem={...action.item};
            updateItems=state.item.concat(action.item);
        }

        //const upItem=state.item.concat(action.item);
        return{
            item:updateItems,
            totalAmount:updateAmount
        };
//
    }
    if(action.type==='REMOVE'){
        const existingIndex=state.item.findIndex((item)=>item.id===action.id);
        const existingitem=state.item[existingIndex];
        const updateTotalAmount=state.totalAmount-existingitem.price;

        let updatedItems;
        if(existingitem.amount===1){
            updatedItems=state.item.filter(item=>item.id !== action.id);

        }
        else{
            const upItem={...existingitem,amount:existingitem.amount-1};
            updatedItems=[...state.item];
            updatedItems[existingIndex]=upItem;
        }
        return{
            item:updatedItems,
            totalAmount:updateTotalAmount
        }

    }
    return defaultcarts1;
}
const Cartprovide=(props)=>{
    const [presslogout,setpresslogout]=useState(false)
    const [cartst,dispatchcartaction] =useReducer(cartred,defaultcarts1);
    const addItemplus=(item)=>{
        dispatchcartaction({type:'ADD',item:item});
    };
    const removeIdminus=(id)=>{
        dispatchcartaction({type:'REMOVE',id:id});
    };

    const cartmat={
        item:cartst.item,
        totalAmount:cartst.totalAmount,
        presslogout,setpresslogout,
        addIteam:addItemplus,
        removeItem:removeIdminus,

    };

    return (
        <Cartcont.Provider value={cartmat}>
            {props.children}
        </Cartcont.Provider>
    );
}
export default Cartprovide;
