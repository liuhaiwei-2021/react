/** @format */

import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center'>
        <div>
            <h1>Counter:{ counter}</h1>
            <div className='d-flex mt-5'>
                <button onClick={()=>{setCounter(counter+1)} }className='btn btn-outline-dark px-5 me-2'>+</button>
                <button onClick={()=>{setCounter(counter-1)} }className='btn btn-outline-dark px-5 me-2'>-</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
