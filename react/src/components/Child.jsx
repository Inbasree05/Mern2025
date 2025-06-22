import React from 'react'


const Child = (props) => {
  return (
    <div>
        <h1>Name:{props.name}</h1>
        <h1>Phoneno:{props.phnNum}</h1>
        <h1>Dept:{props.dept}</h1>
        
    </div>
  )
}

export default Child
