import React from 'react';

export const Feedback = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <div>
      <p>Leave your feedback...</p>
      {options.map((item, idx) => (
        <button
          key={idx}
          value={item}
          onClick={event => onLeaveFeedback(event.target.value)}
        >
          {item}
        </button>
      ))}
      {/* <button value="good" onClick={event => console.log(event.target.value)}>Good</button>
      <button onClick={event => console.log(event.target)}>Neutral</button>
      <button onClick={event => console.log(event.target)}>Bad</button> */}
    </div>
  );
};
