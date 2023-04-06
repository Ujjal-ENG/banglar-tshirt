import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeData from './HomeData';
import OrderReview from './OrderReview';

const Home = () => {
    const data = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddtoCart = (id) => {
        setCart([...cart, id]);
    };
    console.log(cart);
    return (
        <div className="grid grid-cols-12 justify-items-center gap-4">
            <div className="col-span-10 grid grid-cols-3 gap-4">
                {data.map((el) => (
                    <HomeData key={el._id} data={el} handleAddtoCart={handleAddtoCart} />
                ))}
            </div>

            <div className="mt-14">
                <OrderReview />
            </div>
        </div>
    );
};

export default Home;
