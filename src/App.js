import React, {useState} from 'react';
import './App.css';
import Counter from './Counter'

function App() {
  const [counters,changeCounters]=useState([
    {count:0, counterName: "counter0", title: "Counter 0", key: 0},
  ])
 
  const generateCounters = () => {
    return counters.map((counter) => {
      return <Counter 
        count={counter.count} 
        counterName={counter.counterName} 
        title={counter.title} 
        key={counter.key} 
        buttonHandler={() => buttonHandler(counter.key)}
        resetHandler={() => resetHandler(counter.key)}
        />
  })
  }

  const addCounter = () => {
    changeCounters((prev) => [...prev, {
      count: 0,
      key: prev.length, 
      counterName: `counter${prev.length}`,
      title: `Counter ${prev.length}`,
      
    }])
  }

  const removeCounter = () => {
    changeCounters((prev) => prev.slice(0, prev.length -1))
  }

  const resetAll = () => {
    const updated = counters.map (value => {
    return {key: value.key, title: value.title, counterName: value.counterName, count: 0}
  })
  changeCounters(updated)
  }



  const buttonHandler = (id) =>{
    const updated = counters.map (value => {
      if(value.key === id){
        return {key: value.key, title: value.title, counterName: value.counterName, count: value.count+1}
      } else {
      return value;
      }  
    })
    changeCounters(updated)
  }

  const resetHandler = (id) =>{
    const updated = counters.map (value => {
      if(value.key === id){
        return {key: value.key, title: value.title, counterName: value.counterName, count: 0}
      } else {
      return value;
      }  
    })
    changeCounters(updated)
  }

  return (
    <div className="App">
      {generateCounters()}
      <button onClick={() => addCounter()}>add counter</button> 
      <button onClick={() =>removeCounter()}> remove counter</button>
      <button onClick={() => resetAll()}>reset all</button> 
    </div>
  );
}

export default App;
