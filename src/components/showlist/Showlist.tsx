import React from 'react'
import { useParams } from 'react-router-dom';

function Showlist() {

    const blogType = useParams()

  return (
    <div>
        {
           JSON.stringify(blogType)
        }
    </div>
  )
}

export default Showlist