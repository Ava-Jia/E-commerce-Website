import React, { useEffect } from 'react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useCart } from '../hooks/CartContext.jsx'; // 假设我们使用了 Context 来管理购物车状态

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  console.log('Cart component rendered with items:', cartItems);

  useEffect(() => {
    console.log('Cart items updated:', cartItems);
    
    const savedCart = localStorage.getItem('cartItems');
    console.log('Saved cart items:', savedCart ? JSON.parse(savedCart) : null);
  }, [cartItems]);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-full py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg border-2 p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Cart is empty!</h2>
            <p className="mt-2 text-gray-600">Go pick your products!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Shopping Cart ({cartItems.length} items)
        </h1>
        <div className="flex flex-col gap-8">
          <div className="w-full ">
            <div className="bg-white rounded-lg shadow">
              {cartItems.map((item) => {
                console.log('Rendering cart item:', item);
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={removeFromCart}
                    onUpdateQuantity={updateQuantity}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full">
            <CartSummary items={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;