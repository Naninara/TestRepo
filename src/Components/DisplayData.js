import axios from "axios";
import React, { useEffect, useState } from "react";
const Display = () => {
  let [data, setData] = useState([]);
  let api = "";
  useEffect(() => {
    axios.get(api).then((response) => {
      setData(response);
    }, []);
  });
};
return (
  <div className="app">
    {data.map((user) => {
      return (
        <div>
          <p>userId:{user.userId}</p>
          <p>title:{user.title}</p>
        </div>
      );
    })}
  </div>
);
