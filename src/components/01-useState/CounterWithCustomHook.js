import React from 'react'
import useCounter from '../../hooks/useCounter';
import './CounterApp.css';

const CounterWithCustomHook = () =>{
  const { counter, increment, decrement, reset } = useCounter(35);

  return (
    <>
      <h1>Counet with Hook: {counter}</h1>
      <hr />
      <button 
        type='button'
        className='btn btn-primary'
        onClick={() => decrement()}
      >
        -1
      </button>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => increment()}
      >
        +1
      </button>
      <button
        type='button'
        className='btn btn-danger'
        onClick={reset}
      >
        Reset
      </button>
    </>
  )
}

export default CounterWithCustomHook
