import React from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import '../01-useState/CounterApp.css';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-3'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}
      <div>
        <button type='button' className='btn btn-primary' onClick={increment}>
          Next Quote!
        </button>
      </div>
    </>
  )
}

export default MultipleCustomHooks;
