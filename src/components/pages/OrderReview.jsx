import React from 'react';

const OrderReview = ({ cart, handleDelete }) => {
    const handleDeleted = (id) => {
        handleDelete(id);
    };
    return (
        <div>
            Order Summary: {cart.length}
            {cart.map((el) => (
                <h3 key={el.id} className="font-bold text-xl text-violet-500">
                    {el.name}
                    <span className="btn cursor-pointer" onClick={() => handleDeleted(el.id)}>
                        Delete
                    </span>
                </h3>
            ))}
        </div>
    );
};

export default OrderReview;
