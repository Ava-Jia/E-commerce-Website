import React, { useState, useEffect }  from 'react'
import { productService } from '../services/productService';
import ProductList from '../components/product/ProductList';
import ProductCard from '../components/product/ProductCard';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const loadHomePageProducts = async () => {
        try {
          setLoading(true);
          const allProducts = await productService.getAllProducts();
          
          // 从所有产品中筛选出特色产品（例如，评分最高的6个产品）
          const featured = allProducts
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 12);
          setFeaturedProducts(featured);
  
          // 获取最新产品（这里我们假设最新的产品ID较大）
          const latest = allProducts
            .sort((a, b) => b.id - a.id)
            .slice(0, 6);
          setNewArrivals(latest);
  
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      loadHomePageProducts();
    }, []);
  
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Loading amazing products...</div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="text-red-500 text-center py-8">
          Error loading products: {error}
        </div>
      );
    }

  return (
    <div>
<div className="w-full h-[1000px] grid grid-cols-4 gap-4 p-4 bg-gray-100">
  {/* 左上部分 */}
  <div className="relative col-span-1 bg-[url('/image1.jpeg')] bg-cover bg-center text-white p-4">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h2 className="text-xl font-bold">Give all the trending things</h2>
      <button className="mt-2 bg-white text-red-500 px-4 py-2 rounded">Shop now</button>
    </div>
  </div>

  {/* 中上部分 */}
  <div className="relative col-span-2 bg-[url('/image2.jpeg')] bg-cover bg-center text-white p-4">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h2 className="text-xl font-bold">Saving all the way</h2>
      <p className="text-lg mt-2">$69 (was $89.99)</p>
      <button className="mt-2 bg-white text-green-500 px-4 py-2 rounded">Shop all</button>
    </div>
  </div>

  {/* 右上部分 */}
  <div className="relative col-span-1 bg-[url('/image3.jpeg')] bg-cover bg-center text-white p-4">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h2 className="text-xl font-bold">Toys, toys, toys!</h2>
      <button className="mt-2 bg-white text-red-700 px-4 py-2 rounded">Shop now</button>
    </div>
  </div>

  {/* 左中部分 */}
  <div className="relative col-span-1 bg-[url('/image4.jpeg')] bg-cover bg-center text-white p-4">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h2 className="text-xl font-bold">Gift-swap goodies</h2>
      <button className="mt-2 bg-white text-green-700 px-4 py-2 rounded">Shop now</button>
    </div>
  </div>

  {/* 中中部分 */}
  <div className="relative col-span-2 bg-[url('/image5.jpeg')] bg-cover bg-center text-white p-4">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h2 className="text-xl font-bold">25 days of 1-click meal ideas</h2>
      <button className="mt-2 bg-black text-yellow-400 px-4 py-2 rounded">Explore now</button>
    </div>
  </div>

  {/* 右中部分 */}
  <div className="relative col-span-1 bg-[url('/image6.jpeg')] bg-cover bg-center text-white p-4">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h2 className="text-xl font-bold">Personalized presents from $10</h2>
      <button className="mt-2 bg-white text-purple-500 px-4 py-2 rounded">Shop now</button>
    </div>
  </div>

  {/* 底部左部分 */}
  <div className="relative col-span-1 bg-[url('/image7.jpeg')] bg-cover bg-center text-white p-4">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h2 className="text-xl font-bold">Up to 50% off</h2>
      <button className="mt-2 bg-white text-blue-400 px-4 py-2 rounded">Shop now</button>
    </div>
  </div>

  {/* 底部右部分 */}
  <div className="relative col-span-3 bg-[url('/image8.jpeg')] bg-cover bg-center text-white p-4">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h2 className="text-xl font-bold">Wall-to-wall seasonal cheer, from $8</h2>
      <button className="mt-2 bg-white text-teal-500 px-4 py-2 rounded">Shop decor</button>
    </div>
  </div>
</div>


    <div className="space-y-12">

      {/* 特色产品区域 */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <a href="/products" className="text-blue-500 hover:text-blue-700">
            View All →
          </a>
        </div>
        <ProductList products={featuredProducts} />
      </section>

      {/* 新品上市区域 */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <a href="/products" className="text-blue-500 hover:text-blue-700">
              View All →
            </a>
          </div>
          <ProductList products={newArrivals} />
        </div>
      </section>

    </div>
    </div>
  )
}

export default Home
