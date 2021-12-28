import React, { useRef } from 'react'
import '../02-useEffect/SimpleForm.css';

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr/>
      <input
        type="text"
        className='form-control'
        placeholder='Su nombre'
        ref={inputRef}
      />
      <button type='button' className='btn btn-outline-primary' onClick={handleClick}>
        Focus
      </button>
    </>
  )
}

export default FocusScreen
