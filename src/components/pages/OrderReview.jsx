import React from 'react';

const OrderReview = ({ cart }) => {
    return (
        <div>
            Order Summary: {cart.length}
            {cart.map((el) => (
                <h3 key={el.id} className="font-bold text-xl text-violet-500">
                    {el.name}
                </h3>
            ))}
        </div>
    );
};

export default OrderReview;
