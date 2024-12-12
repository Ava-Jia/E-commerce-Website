import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCart } from '../../hooks/CartContext';

const ProductCard = ({ id, title, price, image, description }) => {
  const { addToCart, cartItems } = useCart();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const productToAdd = {
        id,
        title,      
        price,
        image,
        description,
        quantity: 1  
      };
      
      addToCart(productToAdd);
      toast.success('Added to Cart!');
      
      console.log('Current cart items:', cartItems);
      
    } catch (error) {
      console.error('Failed to add to cart:', error);
      toast.error('Fail to add to cart!  Try again later.');
    }
  };

  return (
    <div className="product-card-container">
      <Link to={`/products/${id}`} className="group block">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-contain"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-2 text-gray-800 group-hover:text-blue-600">
              {title}
            </h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {description}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-green-700">
                ${price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                  transition duration-200 ease-in-out focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;