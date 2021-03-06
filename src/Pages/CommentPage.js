import React, { useEffect, useContext, useState } from 'react';
import CommentContext from '../context/CommentContext';
import Restaurant from '../Components/Restaurant';
import CommentList from '../Components/CommentList';
import CommentForm from '../Components/CommentForm';
import { v4 as uuid } from 'uuid';

import './CommentPage.css';

const CommentPage = () => {

  const { setComments } = useContext(CommentContext)

  const [restaurantData, setRestaurantData] = useState({});

  const addUUID = (comment) => {
    const newComment = { ...comment, id: uuid() };
    setComments((state) => [...state, newComment]);
  };
  
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
            return response.json();
          })
          .then((data) => {
            setRestaurantData(data.restaurant);
            data.comments.forEach((c) => {
              addUUID(c);
            });
          });
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className='CommentPage'>
      <Restaurant data={restaurantData} />
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default CommentPage;
