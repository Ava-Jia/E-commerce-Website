import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../services/productService';
import ProductDetail from '../components/product/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading product details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-gray-600">We couldn't find the product you're looking for.</p>
      </div>
    );
  }

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;