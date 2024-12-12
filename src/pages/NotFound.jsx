import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl p-8 text-center">
        {/* 创意标题和副标题 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Oops! Looks like you've wandered too far
          </h2>
          <p className="text-gray-500">
            The page you're looking for has gone on a shopping spree and hasn't returned yet.
          </p>
        </div>

        {/* 导航选项 */}
        <div className="space-y-4">
          {/* 返回上一页按钮 */}
          <button
            onClick={() => navigate(-1)}
            className="block w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors mb-4"
          >
            Go Back
          </button>

          {/* 常用链接 */}
          <div className="flex justify-center space-x-4">
            <Link 
              to="/" 
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;