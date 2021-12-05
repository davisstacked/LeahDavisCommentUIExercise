import React, { useState } from 'react';
import RestaurantContext from './RestaurantContext';



const RestaurantContextProvider = ({children}) => {

  const [restaurantData, setRestaurantData] = useState({});

  return (
    <RestaurantContext.Provider value={{ restaurantData, setRestaurantData}}>
      {children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantContextProvider;
