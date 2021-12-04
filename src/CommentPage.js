import React, { useEffect, useState } from 'react';

const CommentPage = () => {

  const [state, setState] = useState({});

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
        setState(myJson)
      });
  };
  
  useEffect(() => {
    getData();
  }, []);
  
  console.log(state);
  const name = state.restaurant.name;
  console.log(name);
  return (
    <div>
      {name}
    </div>
  );
};

export default CommentPage;
