import React from 'react'
import '../asset/style/layout/Header.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

function Header() {
    const state = useSelector(state => state.cart)
    return (
        <>
            <nav>
                <div className='header-main'>
                    <div className="logo">
                        <h1><a href="">E-Commerce</a></h1>
                    </div>
                    <div className="cart-logo" id='ex4'>
                        <NavLink to='/cart'>
                            <span className='p1 fa-stack fa-2x' data-count={state.length} style={{ cursor: 'pointer' }}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header