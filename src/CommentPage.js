import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';

const CommentPage = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
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
          setData(myJson)
        });
    };

    getData();
  }, [])

  console.log(data);
 
  return (
    <div>
      <CommentList data={data} />
    </div>
  );
};

export default CommentPage;
