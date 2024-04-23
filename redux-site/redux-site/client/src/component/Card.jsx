import React from 'react'
import '../asset/style/component/Card.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../Reducer/addCartSlice';

function Card(props) {
    const dispatch = useDispatch()

    const state=useSelector(state=>state.alldata.data)

    const state1=useSelector(state=>state.cart)

    const addData = (x) => {
        dispatch(addCart(x))
    }
    return (
        <>
            {
                state?.map((x, i) => {
                    return <div className="card" key={i} >
                        <div className="card-images">
                            <img src={x.image} alt="" />
                        </div>
                        <div className="product-price">
                            price:{Math.floor(x.price)}
                        </div>
                        <div className="product-title">
                            {x.title}
                        </div>
                        <div className="product-description">
                            {x.description}
                        </div>
                        <div className="product-operation">
                            <div className="icon">
                                <button onClick={() => addData(x)}><i className="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default Card