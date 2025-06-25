import React from 'react';
import { Link } from 'react-router-dom'; 

const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <h2>React Hooks Page</h2>
      <Link to='/state'>useState</Link> 
      <Link to='/effect'>Effect</Link>
      <Link to='/effect2'>Effect2</Link> 
      <Link to='/ref'>Ref</Link>
      <Link to='/red'>Reducer</Link> 
    </div>
  );
};

export default Hooks;
