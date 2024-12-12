import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, item.quantity + change);
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-contain rounded"
      />
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <div className="mt-2 text-gray-500 font-medium">¥{item.price}</div>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      
      <button
        onClick={() => onRemove(item.id)}
        className="p-2 text-red-600 hover:bg-red-50 rounded"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CartItem;