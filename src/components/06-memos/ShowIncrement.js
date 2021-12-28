import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {
  console.log('Me volvi a renderizar');

  return (
    <button
      type='button'
      className='btn btn-primary'
      onClick={() => {
        increment(5)
      }}
    >
      Increment
    </button>
  )
})

export default ShowIncrement
