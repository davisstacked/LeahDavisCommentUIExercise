import React, { useEffect, useContext } from 'react';
import CommentContext from './context/CommentContext';
import CommentList from './CommentList';
// import CommentContext from './CommentContext';
// import CommentFormTwo from './CommentFormTwo';



const CommentPage = () => {

  const { setRestaurantData, setComments, addState, comments, restaurantData } = useContext(CommentContext);
  
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
            myJson.comments.forEach((c) => {
              addState(c, setComments);
            });
            myJson.restaurant.forEach((r) => {
              addState(r, setRestaurantData)
            })
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
    <div>
      <CommentList />
    </div>
  );
};

export default CommentPage;
