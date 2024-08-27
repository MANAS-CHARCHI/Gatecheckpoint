import React, { useState, useEffect } from 'react';

const DecrementCounter = ({ initialValue }) => {
  // Initialize the state with the saved count from localStorage or use initialValue
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem(`count-${initialValue}`);
    return savedCount !== null ? parseInt(savedCount, 10) : initialValue;
  });
 



  // Effect to save the count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`count-${initialValue}`, count);
  }, [count, initialValue]);

  // Function to decrement the count
  const decrement1 = () => {
    setCount(prevCount => Math.max(prevCount - 1, 0)); // Ensure the count does not go below 0
  };
  const decrement5 = () => {
    setCount(prevCount => Math.max(prevCount - 5, 0)); // Ensure the count does not go below 0
  };
  const decrement10 = () => {
    setCount(prevCount => Math.max(prevCount - 10, 0)); // Ensure the count does not go below 0
  };
  const add10=()=>{
    setCount(prevCount => Math.max(prevCount+10, prevCount));
  };

  return (
    <div >
      <h1 className="text-3xl font-bold mb-4 text-center">{count}</h1>
      <button
        onClick={decrement1}
        className="bg-red-300 mr-0.5 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        -1
      </button>
      <button
        onClick={decrement5}
        className="bg-red-300 mr-0.5 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        -5
      </button>
      <button
        onClick={decrement10}
        className="bg-red-300 mr-0.5 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        -10
      </button>
      <button
        onClick={add10}
        className="bg-red-300 mr-0.5 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        +10
      </button>
    </div>
  );
};

export default DecrementCounter;
