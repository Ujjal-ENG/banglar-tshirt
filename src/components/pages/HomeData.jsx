import React from 'react';

const HomeData = ({ data }) => {
    const { _id, price, picture, name } = data;
    return (
        <div className="mt-14 border-2 border-orange-500 rounded-2xl shadow-2xl p-4">
            <img src={picture} alt={name} className="object-contain w-full h-52 rounded-3xl" />
            <h1 className="font-bold text-2xl text-violet-500 p-3">Name: {name}</h1>
            <p className="mt-auto font-bold text-xl text-red-500 p-3">price: {price}</p>
        </div>
    );
};

export default HomeData;
