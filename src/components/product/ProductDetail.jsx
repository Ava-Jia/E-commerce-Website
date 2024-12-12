import React from 'react';
import { toast } from 'react-hot-toast';
import { useCart } from '../../hooks/CartContext';

const ProductDetail = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const productToAdd = {
        id: product.id,         
        title: product.title,     
        price: product.price,    
        image: product.image,     
        description: product.description, 
        quantity: 1  
      };
      
      addToCart(productToAdd);
      toast.success('Added to Cart!');
      
      console.log('Current cart items:', cartItems);
      
    } catch (error) {
      console.error('Failed to add to cart:', error);
      toast.error('Fail to add to cart! Try again later.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <p className="text-amber-700 text-lg">Rating: {product.rating}/5</p>
          <p className="text-purple-600 text-lg">Number pf reviews: {product.reviews}</p>
          <div className="text-xl font-bold text-green-700">
            ${product.price.toFixed(2)}
          </div>
          <button
        onClick={handleAddToCart}
        className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                  transition duration-200 ease-in-out focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;