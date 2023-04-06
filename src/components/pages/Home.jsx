import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeData from './HomeData';
import OrderReview from './OrderReview';

const Home = () => {
    const data = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddtoCart = (id, name) => {
        const existsId = cart.find((el) => el.id === id);
        if (existsId) {
            alert('Already Added this products');
        } else {
            setCart([...cart, { name: name, id: id }]);
        }
    };

    const handleDelete = (id) => {
        const filterData = cart.filter((el) => el.id !== id);
        setCart(filterData);
    };

    return (
        <div className="grid grid-cols-12 justify-items-center gap-4">
            <div className="col-span-8  ml-4  grid grid-cols-3 gap-4">
                {data.map((el) => (
                    <HomeData key={el._id} data={el} handleAddtoCart={handleAddtoCart} />
                ))}
            </div>

            <div className="mt-14 col-span-3 w-full ">
                <OrderReview cart={cart} handleDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Home;
