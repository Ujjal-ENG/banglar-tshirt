import React from 'react';

const OrderReview = ({ cart, handleDelete }) => {
    const handleDeleted = (id) => {
        handleDelete(id);
    };
    return (
        <div className=" text-center space-y-4 space-x-3">
            <span className="text-3xl font-bold text-orange-500">Order Summary: {cart.length}</span>
            <br />
            {cart.length === 0 ? (
                <span className="text-3xl font-bold text-yellow-500">Please add Some Products</span>
            ) : (
                <>
                    {cart.map((el) => (
                        <h3 key={el.id} className="font-bold text-xl text-violet-500">
                            {el.name}
                            <span className="btn ml-5 cursor-pointer" onClick={() => handleDeleted(el.id)}>
                                X
                            </span>
                        </h3>
                    ))}
                </>
            )}
        </div>
    );
};

export default OrderReview;
