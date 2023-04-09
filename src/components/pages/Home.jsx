import React, { useContext, useState } from 'react';
import { TshirtData } from '../../App';
import { addTOLocalStorage, removeLocalStorageDataByID } from '../fakeDB/localStorage';
import HomeData from './HomeData';
import OrderReview from './OrderReview';

const Home = () => {
    const [data, cartData] = useContext(TshirtData);
    const [cart, setCart] = useState(cartData || []);

    const handleAddtoCart = (id) => {
        const existsId = cart.find((el) => el._id === id);
        addTOLocalStorage(id);

        if (!existsId) {
            const newData = data.find((el) => el._id === id);
            setCart([...cart, newData]);
        } else {
            console.log('Item already exists in the cart');
        }
    };

    const handleDelete = (id) => {
        removeLocalStorageDataByID(id);
        const filterData = cart.filter((el) => el._id !== id);
        setCart(filterData);
        console.log(id);
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
