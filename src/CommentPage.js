import React, { useEffect, useContext, useState } from 'react';
import CommentContext from './context/CommentContext';
import CommentList from './CommentList';
import CommentForm from './CommentForm';



const CommentPage = () => {

  const [restaurantData, setRestaurantData] = useState({});

  const { setComments, addState, comments } = useContext(CommentContext);
  
    useEffect(() => {
    const getData = async () => {
      try {
        await fetch('data.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
            console.log(myJson.comments);
            console.log(myJson.restaurant);
            myJson.comments.forEach((c) => {
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
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default CommentPage;
