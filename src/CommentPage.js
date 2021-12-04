import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import CommentFormTwo from './CommentFormTwo';
import { v4 as uuid } from 'uuid';

const CommentPage = () => {

  const [restaurantData, setRestaurantData] = useState({});
  const [commentData, setCommentData] = useState([]);

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
            console.log(myJson.restaurant);
            console.log(myJson.comments);
            myJson.comments.forEach(c => {
              addUUID(c)
            })
            setRestaurantData(myJson.restaurant);
          });
      }
      catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [])

    const addUUID = (comment) => {
      const newComment = { ...comment, id: uuid() };
      setCommentData((state) => [...state, newComment]);
    };
 
  return (
    <div>
      <CommentList data={commentData} />
    </div>
  );
};

export default CommentPage;
