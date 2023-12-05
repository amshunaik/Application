import React, { useState } from 'react';

const YourComponent = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [meals, setMeals] = useState([
    { id: 1, name: 'Meal 1', price: 10 },
    { id: 2, name: 'Meal 2', price: 20 },
    { id: 3, name: 'Meal 3', price: 15 },
    // Add more meal data as needed
  ]);

  const filterByPrice = () => {
    const filteredMeals = meals.filter((meal) => {
      const mealPrice = meal.price;
      const isWithinRange =
        (!minPrice || mealPrice >= parseFloat(minPrice)) &&
        (!maxPrice || mealPrice <= parseFloat(maxPrice));
      return isWithinRange;
    });

    // You can use the filteredMeals array as needed, for example, update the state
    // or use it to render a list of filtered meals.
    // For this example, I'll update the state directly.
    setMeals(filteredMeals);
  };

  // Render the list of meals
  const mealList = meals.map((meal) => (
    <div key={meal.id}>
      <p>Name: {meal.name}</p>
      <p>Price: ${meal.price}</p>
      {/* Add other meal details as needed */}
    </div>
  ));

  return (
    <div>
      <label>
        Min Price:
        <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </label>
      <label>
        Max Price:
        <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>
      <button onClick={filterByPrice}>Filter by Price</button>

      {/* Display the filtered meal list */}
      {mealList}
    </div>
  );
};

export default YourComponent;
