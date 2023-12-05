import React from 'react';

const Cartcont=React.createContext({
    item:[],
    totalAmount:0,
    addIteam: (item)=>{},
    removeItem: (id)=>{}
});
export default Cartcont;