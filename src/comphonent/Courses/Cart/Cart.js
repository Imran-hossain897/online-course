import React from 'react';
import './cart.css'

const Cart = (props) => {
    console.log(props)
    const cart= props.cart;
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total+product.price;
    };
    return (
        <div className='cart-display bg-info text-white' >
            <h1 >order summary</h1>
                <h4>total course: <span className='text-warning'> {cart.length}</span></h4>
          <h3>total amount: <span className='text-warning'>${total}</span></h3>
        </div>
    );
};

export default Cart;