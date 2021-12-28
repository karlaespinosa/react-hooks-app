import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter';
import Small from './Small';

const Memorize = () => {
  const [show, setShow] = useState(false);
  const { counter, increment } = useCounter(10);

  return (
    <>
      <h1>Counter <Small value={counter} /></h1>
      <hr />
      <button
        type='button'
        className='btn btn-primary' 
        onClick={increment}
      >
        Increment +1
      </button>
      <button
        type='button'
        className='btn btn-outline-primary'
        onClick={() => {
          setShow(!show);
        }}
      >
        Show has changed {JSON.stringify(show)}
      </button>
    </>
  )
}

export default Memorize
