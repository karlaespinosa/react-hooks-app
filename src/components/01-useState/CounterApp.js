import React, { useState } from 'react'
import './CounterApp.css';

function CounterApp() {
  const [{ counter1, counter2 }, setCounter] = useState({ counter1: 10, counter2: 20 })

  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <hr />
      <button 
        type='button'
        className='btn btn-primary'
        onClick={() => {
          setCounter(counter => ({ ...counter, counter1: counter.counter1 + 1 }));
        }}
      >
        Add 1
      </button>
    </>
  )
}

export default CounterApp
