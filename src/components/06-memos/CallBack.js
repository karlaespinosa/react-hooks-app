import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement';

const CallBack = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((i) => {
      setCounter(c => c + i)
  }, [setCounter])

  return (
    <div>
      <h1>useCallBck Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  )
}

export default CallBack;
