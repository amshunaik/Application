import classes from './AvailableMeal.module.css'
import Card from '../UI/Card';
import MealIteam from './mealIteam';
//import { useCallback } from 'react';
// const listmeal=[
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 199,
//       },
//       {
//         id: 'm2',
//         name: 'Dosa-Sambar',
//         description: 'South Indian Food ,made by rice',
//         price: 70,
//       },
//       {
//         id: 'm3',
//         name: 'Chicken Rice ',
//         description: 'Chicken, Rice,  Spices',
//         price: 270,
//       },
//       {
//         id: 'm4',
//         name: 'Poori Sabji',
//         description: 'potato, curry leaves, tomato',
//         price: 150,
//       },
// ]

import { useEffect,useState } from 'react';
const AvailableMeal=(props)=>{
  const [btnchoice, setbtnchoice]=useState(0);
  const [isload,setload]=useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [meals,setmeals]=useState([]);
  const [httperr,seterr]=useState();
  const [amt,setamt]=useState('');
  const [chg,setchg]=useState('');
    useEffect( ()=>{
      const fetchmeal =async ()=>{
        const response=      await fetch('https://foodmeal-478c3-default-rtdb.firebaseio.com/meals.json');
        if(!response.ok){
          throw new Error('Error in the server')
        }
        const resdata=await response.json();
        const loadmeal=[];
        for(const k in resdata){
          loadmeal.push({
            id:k,
            name:resdata[k].name,
            description:resdata[k].description,
            price:resdata[k].price
          })
        }
        setmeals(loadmeal);
        setload(false);


      }
      try{
        fetchmeal();
      }
      catch(error){
        isload(false);
        seterr(error.message)
      }
    },[]);
    if (isload){
      return(
        <section>
          <p className={classes.loading}>Wait its loading....</p>
        </section>
      )
    }
    if(httperr){
      return(
        <section>
          <p className={classes.err}>{httperr}</p>

        </section>
      )
    }
    const find1=(event)=>{
      
      event.preventDefault();
  
      setbtnchoice(1)
      console.log("hi")
      


    }
    const find2=(event)=>{
      event.preventDefault();
      
      setbtnchoice(2)
      

    }
    var filteredMeals
    const find3=(event)=>{
      event.preventDefault();
      filteredMeals = meals.filter((each) => amt === '' || each.amount >= parseFloat(amt));
      setbtnchoice(3)
      

    }
    var meal1;
    const filterByPrice = () => {
      return meallist1;
      };

    const meallist=meals.filter((each)=>{return chg.toLowerCase()===''?each: each.name.toLowerCase().includes(chg);
  }).map((each)=> <MealIteam key={each.id} id={each.id} name={each.name} description={each.description} price={each.price}/>);

  const meallist2=meals.filter((each)=>{return chg.toLowerCase()===''?each: each.description.toLowerCase().includes(chg);
}).map((each)=> <MealIteam key={each.id} id={each.id} name={each.name} description={each.description} price={each.price}/>);

//const filteredMeals = meals.filter((each) => amt === '' || each.amount >= parseFloat(amt));
  const meallist1=meals.filter((meal) => {
    const mealPrice = meal.price;
    const isWithinRange =
      (!minPrice || mealPrice >= parseFloat(minPrice)) &&
      (!maxPrice || mealPrice <= parseFloat(maxPrice));
    //console.log("hio",meal1)
    return isWithinRange;
  }).map((each)=> <MealIteam key={each.id} id={each.id} name={each.name} description={each.description} price={each.price}/>);

const meallist0=meals.map((each)=> <MealIteam key={each.id} id={each.id} name={each.name} description={each.description} price={each.price}/>);
const amountvis= (<div><label>
  Min Price:
  <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
</label>
<label>
  Max Price:
  <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
</label>
<button onClick={filterByPrice}>Filter by Price</button></div>)

    // const fetchmeals=useCallback(async ()=>{
    //   try{
    //     const res= await fetch('https://react-food-69bb0-default-rtdb.firebaseio.com/')
    //   }
    //   catch (error){
        
    //   }
    // })
//              <input type="text" placeholder='Search..' onChange={(e)=>setchg(e.target.value)} />
//<input type="number"placeholder='Amount..' onChange={(e)=>setamt(parseInt(e.target.value))}  />
    
    
    return(
        <section className={classes.meals}>
          <form className={classes.search}>

              <input type="text" placeholder='Search..' onChange={(e)=>setchg(e.target.value)} />
              <div className={classes.butstack}>
                <button onClick={find1} className={btnchoice === 1 ? classes.active : ''}>Name search</button>
                <button onClick={find2} className={btnchoice === 2 ? classes.active : ''}>Description search</button>
                <button onClick={find3} className={btnchoice === 3 ? classes.active : ''}>Amount</button>


              </div>
              
              {btnchoice==3&&<div className={classes.amount}><label>Min Price:
                  <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                  </label>
                  <label> Max Price:
                  <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                  </label>
                  </div>}
            
              
            </form>
          <Card>
            
            <ul>
                
                {btnchoice==0&&meallist0}
                {btnchoice===1&&meallist}
                {btnchoice===2&&meallist2}
                
                {btnchoice===3&&meallist1}
                
                
            </ul>
          </Card>
            
        </section>
    )
                }
export default AvailableMeal;
// <li>{each.name}</li>
//<MealIteam key={each.id} name={each.name} description={each.description} price={each.price}/>

//<input type="number"placeholder='Amount..' onChange={(e)=>setamt(parseInt(e.target.value))}  />

// {btnchoice===1&&meallist}
//                 {btnchoice===2&&meallist2}
//                 {btnchoice===3&&meallist1}
//

// <div className={classes.amount}><label>Min Price:
//                   <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
//                   </label>
//                   <label> Max Price:
//                   <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
//                   </label>
//                   <button onClick={filterByPrice}>Filter by Price</button></div>