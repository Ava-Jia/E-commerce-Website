import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '' 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      if (!formData.name) {
        toast.error('Please enter your name');
        return;
      }
    }

    try {
      console.log('Form data submitted:', formData);
      toast.success(isLogin ? 'Successfully logged in!' : 'Account created successfully!');
    } catch (error) {
      console.error('Operation failed:', error);
      toast.error('Operation failed, please try again');
    }
  };

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Sign in to your account' : 'Create a new account'}
        </h2>
      </div>

      <div className="mt-8 shadow-xl border-2 rounded-lg sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Name input field - only shown during registration */}
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                             focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Email input field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Password input field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Confirm Password field - only shown during registration */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                             focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm 
                         text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </div>
          </form>

          {/* Toggle between login and registration */}
          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {isLogin ? 'New to our platform?' : 'Already have an account?'}
                  <button
                    className="ml-2 font-medium text-blue-600 hover:text-blue-500"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? 'Create an account' : 'Sign in'}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;