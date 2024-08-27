import React, { useState, useEffect } from 'react';

const Dec = ({ initialValue }) => {
  // Initialize the state with the saved count from localStorage or use initialValue
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem(`count-${initialValue}`);
    return savedCount !== null ? parseInt(savedCount, 10) : initialValue;
  });
 
  useEffect(() => {
    localStorage.setItem(`count-${initialValue}`, count);
  }, [count, initialValue]);


  const decrement = () => {
    setCount(prevCount => Math.max(prevCount - 1, 0)); // Ensure the count does not go below 0
  };
  const add = () => {
    setCount(prevCount => Math.max(prevCount + 1, 0)); // Ensure the count does not go below 0
  };

  return (
    <div className='flex '>
      <h1 className="text-base pl-4 font-bold mb-4 text-center">{count}</h1>
      <button
        onClick={decrement}
        className="bg-red-300 mr-0.5 text-white w-14 h-6 ml-4  rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        -1
      </button>
      <button
        onClick={add}
        className="bg-red-300 mr-0.5 text-white w-14 h-6 ml-4  rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        +1
      </button>

    </div>
  );
};

export default Dec;
