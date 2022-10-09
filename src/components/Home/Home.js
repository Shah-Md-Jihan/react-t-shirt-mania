import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [carts, setCarts] = useState([]);


    const tshirts = useLoaderData();
    const handleAddToCart = tshirt => {
        const exists = carts.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('t-shirt already added');
        }
        else {
            const newCarts = [...carts, tshirt];
            setCarts(newCarts);

        }
    }
    const handleRemoveCart = tshirt => {
        const remaining = carts.filter(ts => ts._id !== tshirt._id);
        setCarts(remaining);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart carts={carts} handleRemoveCart={handleRemoveCart}></Cart>
            </div>
        </div>
    );
};

export default Home;