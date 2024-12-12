import React, { useMemo } from 'react';

const CartSummary = ({ items }) => {
  const { totalPrice, totalItems } = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        totalPrice: acc.totalPrice + item.price * item.quantity,
        totalItems: acc.totalItems + item.quantity,
      }),
      { totalPrice: 0, totalItems: 0 }
    );
  }, [items]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Cart Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Total Items </span>
          <span>{totalItems} items</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Total Price</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Freight Fee</span>
          <span>$ 0</span>
        </div>
        
        <div className="border-t border-gray-200 my-4"></div>
        
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
          Check out
        </button>
      </div>
    </div>
  );
};

export default CartSummary;