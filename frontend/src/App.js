import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState('');


  useEffect(() => {
    axios.get('http://localhost:8000/api/data/')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  

  return (
    <div className="App">
      <h1>React and Django API Example</h1>
      <p>Data from Django: {data}</p>
    </div>
  );
}

export default App;
