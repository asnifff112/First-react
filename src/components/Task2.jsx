
import React, { useEffect, useState } from "react";

function Task2() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes.slice(0, 10));
      })
      .catch((err) => {
        console.error("Error fetching quotes:", err);
      });
  }, []); 

  return (
    <div>
      {quotes.map((quote, index) => (
        <h1 key={index}>{quote.quote}</h1>
      ))}
    </div>
  );
}

export default Task2;
