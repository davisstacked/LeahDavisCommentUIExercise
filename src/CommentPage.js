import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';

const CommentPage = () => {

  const [restaurantData, setRestaurantData] = useState({});
  const [commentData, setCommentData] = useState([])

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
            setRestaurantData(myJson.restaurant);
            setCommentData(myJson.comments);
          });
      }
      catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [])

  // console.log(data);
 
  return (
    <div>
      <CommentList data={commentData} />
    </div>
  );
};

export default CommentPage;
