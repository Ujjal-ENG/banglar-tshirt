import React, { useState } from 'react';
import { addTOLocalStorage } from '../fakeDB/localStorage';
import HomeData from './HomeData';
import OrderReview from './OrderReview';

const Home = () => {
    // const data = useLoaderData();
    // const contextData = useContext();
    // console.log(contextData);
    const [cart, setCart] = useState([]);

    const handleAddtoCart = (id, name) => {
        const existsId = cart.find((el) => el.id === id);
        addTOLocalStorage(id);
        if (existsId) {
            console.log('items added');
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
