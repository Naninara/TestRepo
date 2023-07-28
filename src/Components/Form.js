import React, { useState, useEffect } from "react";
import axios from "axios";
async function test() {
    const url = 'https://maptiles.p.rapidapi.com/es/map/v1/3/4/2.png';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7c16f5f164mshe9ec411c6c3bedep11f7f7jsn6ae26b8374f0',
            'X-RapidAPI-Host': 'maptiles.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function Form() {
  test();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/getAllUser").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <ul>
      {data.map((ele, index) => {
        return <li key={index}>{ele.name}</li>;
      })}
    </ul>
  );
}

export default Form;
