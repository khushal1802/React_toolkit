import React, { useEffect, useState } from 'react'
import '../asset/style/layout/Main.css'
import Card from '../component/Card'
import { useSelector } from 'react-redux';
function Main() {
  const state1 = useSelector(state => state.cart)

  return (
    <>
      <section>
        <div className="main-sec-div">
          <h1>All Product </h1>
          <div className="card-sec">
            <Card />
          </div>
        </div>
      </section>
    </>
  )
}

export default Main