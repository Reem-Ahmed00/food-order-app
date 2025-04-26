import React from 'react';
import {useContext, useState} from 'react'
import {CartContext} from '../context/cart.jsx'
import Cart from './Cart.jsx'

export default function MealItem({ meal }) {
    const { name, id, price, image } = meal;
    const [showModal, setShowModal] = useState(false)

    const { cartItems, addToCart } = useContext(CartContext)

    const getRandomPrice = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const toggle = () => {
        setShowModal(!showModal)
      }

    return (
        <>
            <div>
            {!showModal && <button onClick={toggle}>Cart ({cartItems.length})</button>}
                <h3>{name}</h3>
                <img height={"400px"} width={"400px"} src={image}></img>
                <p>{price ? price.toFixed(2) : getRandomPrice(10, 50)}$</p>
                <button onClick={() => addToCart(meal)} >Add to cart</button>
                <Cart showModal={showModal} toggle={toggle} />
            </div>
        </>
    )
}