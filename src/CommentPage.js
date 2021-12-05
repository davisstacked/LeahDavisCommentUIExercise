import React, { useEffect, useContext, useState } from 'react';
import CommentContext from './context/CommentContext';
import RestaurantInfo from './RestaurantInfo';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

import './CommentPage.css';

const CommentPage = () => {

  const [restaurantData, setRestaurantData] = useState({});

  const { setComments, addState, comments } = useContext(CommentContext);
  
    useEffect(() => {
    const getData = () => {
      try {
        fetch('data.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            console.log(data);
            console.log(data.comments);
            console.log(data.restaurant);
            setRestaurantData(data.restaurant);
            data.comments.forEach((c) => {
              addState(c, setComments);
            });
          });
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
 
  console.log(comments);
  console.log(restaurantData);
 
  return (
    <div className="CommentPage">
      <RestaurantInfo />
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default CommentPage;
