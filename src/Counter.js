import React from 'react';

function Counter(props) {
  
  return (
    <div className={props.counterName}>
      <h1>{props.title}</h1>
      <p>{props.count}</p>
      <button onClick={()=>props.buttonHandler()}>increace count</button>
      <button onClick={()=>props.resetHandler()}>resest</button>
    </div>
  );
}

export default Counter;
