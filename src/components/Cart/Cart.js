import React from 'react';

const Cart = ({ carts, handleRemoveCart }) => {
    return (
        <div>
            <h2>Order Summary{carts.length}</h2>
            {
                carts.map(cart => <p key={cart._id}>{cart.name}
                    <button onClick={() => handleRemoveCart(cart)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;