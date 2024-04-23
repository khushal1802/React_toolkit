import React, { useEffect, useState } from 'react'
import '../asset/style/component/CardDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, decItem, deleteAllCart, deleteCart } from '../Reducer/addCartSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

function CardDetail() {
    let [Price, setPrice] = useState(0)
    const dispatch = useDispatch()

    const removeCart = (id) => {
        dispatch(deleteCart(id))
    }
    const removeAllCart = () => {
        dispatch(deleteAllCart())
    }

    const handalQtyIncrement = (e) => {
        dispatch(addCart(e))
    }
    const handalQtyDecrement = (e) => {
        dispatch(decItem(e))
    }

    const state = useSelector(state => state.cart)

    const Total = () => {
        let totalPrice = 0
        state.map((x, i) => {
            totalPrice = Math.floor(x.price) * x.qty + totalPrice
        })
        setPrice(totalPrice)
    }
    useEffect(() => {
        Total()
    }, [Total])

    const makePyament = async () => {
        const stripe = await loadStripe('pk_test_51OqT6aSJuCh9MehJgv2UHBz5oQTf7exxbfVMpdSL8YLM4hxqsnwpUf4S9WRBKCsLpqJlDwWg9m0PRw69MhcZ8GW600i0H72kXm')
        const body = {
            products: state
        }
        const response = await axios.post('http://localhost:7000/api/create-checkout-session', body);
        console.log(response);
        const session = await response.data.id;
        console.log(session)
        const result = stripe.redirectToCheckout({
            sessionId: session
        })
        if (result.error) {
            console.log(result.error);
        }
    }

    return (
        <>
            <div className="card-detail">
                <div className="card-detail-header">
                    <h2>Cart Calculation({state.length})</h2>
                    {
                        state.length > 0 ? <button onClick={() => removeAllCart()}><i className="fa-solid fa-trash"></i><span>Empty Cart</span></button> : ''
                    }
                </div>
                <div className="cart-detail-body">
                    {
                        state.length === 0 ? <table className='cart-table table'>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='cart-empty'>
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            <p>Your cart is empty</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table> : <table className='table table-responsive'>
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th style={{ textAlign: 'right' }}><span>Total Amount</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.map((x, i) => {
                                        return <tr key={i}>
                                            <td><button className='table-btn' onClick={() => removeCart(x.id)}><i className="fa-solid fa-trash"></i></button></td>
                                            <td><div className='cart-img'><img src={x.image} alt="" /></div></td>
                                            <td>{x.title}</td>
                                            <td>{Math.floor(x.price)}</td>
                                            <td>
                                                <div className='qty'>
                                                    <button onClick={x.qty <= 1 ? () => removeCart(x.id) : () => handalQtyDecrement(x)}><i className="fa-solid fa-minus"></i></button>
                                                    <input type="text" value={x.qty} disabled style={{ textAlign: 'center' }} />
                                                    <button onClick={() => handalQtyIncrement(x)}><i className="fa-solid fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td style={{ textAlign: 'center' }}>{x.qty * Math.floor(x.price)}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th colSpan={2}></th>
                                    <th>Items in Cart <span>:</span><span style={{ color: 'red', margin: '0 5px' }}>{state.length}</span></th>
                                    <th style={{ textAlign: 'right' }}>Total Amount <span>:</span><span style={{ color: 'red', margin: '0 5px' }}>{Price}</span></th>
                                    <th style={{ textAlign: 'right' }}><button style={{ background: 'green', color: 'white', padding: '7px 20px', margin: '0 10px', border: 'none' }} onClick={makePyament}>CheckOut</button></th>
                                </tr>
                            </tfoot>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default CardDetail