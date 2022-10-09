import React from 'react';

const Cart = ({ carts, handleRemoveCart }) => {
    let message;
    if (carts.length === 0) {
        message = "Please buy at lease one Item!";
    }
    return (
        <div>
            <h2>Order Summary</h2>
            {
                carts.map(cart => <p key={cart._id}>{cart.name}
                    <button onClick={() => handleRemoveCart(cart)}>X</button></p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;