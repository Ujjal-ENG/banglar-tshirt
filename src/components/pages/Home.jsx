import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeData from './HomeData';

const Home = () => {
    const data = useLoaderData();

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-4">
            {data.map((el) => (
                <HomeData key={el._id} data={el} />
            ))}
        </div>
    );
};

export default Home;
