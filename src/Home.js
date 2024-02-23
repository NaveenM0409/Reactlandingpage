import React from 'react'
import { Link } from 'react-router-dom';

function home() {
  return (
    <div>
      <Link to='/login'>
        <button> go to login </button>
      </Link>
    </div>
  )
}

export default home