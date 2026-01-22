import React from "react";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let response = await axios("https://jsonplaceholder.typicode.com/todos")
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map(function(elem,idx){
        return <div key={idx}>hello , {elem.title} {idx}</div>
      })}
    </div>
  );
};

export default App;
