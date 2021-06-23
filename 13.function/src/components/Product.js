/** @format */

import React from "react";
import {useState,useEffect} from 'react'

function Product({ product,removeProductCallback}) {
  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [desc, setDesc] = useState('')
  
  useEffect(() => {
    setId(product.id)
    setName(product.name)
    setDesc(product.desc)
  }, [product.id, product.name, product.desc])
  
  return (
    <div>
      <input name='id' value={id}></input>
      <input name='name' value={name} onChange={e=>setName(e.target.value)}></input>
      <input name='desc' value={desc} onChange={e=>setDesc(e.target.value)}></input>
      <button>spara</button>
      <button onClick={()=>removeProductCallback(id)}>ta bort</button>
    </div>
  );
}

export default Product;
