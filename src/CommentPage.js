import React, { useEffect, useContext, useState } from 'react';
import CommentContext from './context/CommentContext';
import Restaurant from './Restaurant';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

import './CommentPage.css';

const CommentPage = () => {
  const [restaurantData, setRestaurantData] = useState({});

  const { addUUID } = useContext(CommentContext);

  // just leave useEffect here
  useEffect(() => {
    // put this in service
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
