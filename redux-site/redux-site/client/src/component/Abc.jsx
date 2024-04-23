import React from 'react'
import { useSelector } from 'react-redux';

function Abc() {
  const state1=useSelector(state=>state.cart)

  return (
    <div>Abc</div>
  )
}

export default Abc