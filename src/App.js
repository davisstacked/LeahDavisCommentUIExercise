import React, { useEffect, useState } from 'react';
import './App.css';




function App() {

  const [state, setState] = useState({});

  const getData = () => {
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
    <div className='App'>
      <p>
        {name}
      </p>
    </div>
  );
}

export default App;
