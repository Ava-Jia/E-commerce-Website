import React from 'react'
import { Link } from'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="w-full h-28 flex flex-col items-center justify-center bg-blue-200 text-black font-sans">
        <p className='text-lg m-2'>We'd love to hear your what you think!</p>
        <a href='mailto:avafrom2003@gmail.com' className='w-32 h-12 font-bold flex items-center justify-center bg-white border-2 border-black rounded-full'>Give feedback</a>
      </div>
      <div className="w-full h-32 flex flex-col items-center bg-blue-700 text-white font-Jost">
      <ul className="p-8 flex flex-wrap gap-6 items-center justify-center text-white">
        <li>
            <Link 
            to="/all-departments" 
            className="text-white hover:text-gray-200 transition-colors"
            >
            All Departments
            </Link>
        </li>
        <li>
            <Link 
            to="/careers" 
            className="text-white hover:text-gray-200 transition-colors"
            >
            Careers
            </Link>
        </li>
        <li>
            <Link 
            to="/company" 
            className="text-white hover:text-gray-200 transition-colors"
            >
            Our Company
            </Link>
        </li>
        <li>
            <Link 
            to="/help" 
            className="text-white hover:text-gray-200 transition-colors"
            >
            Help
            </Link>
        </li>
        <li>
            <Link 
            to="/product-recalls" 
            className="text-white hover:text-gray-200 transition-colors"
            >
            Product Recalls
            </Link>
        </li>
        <li>
            <Link 
            to="/email-signup" 
            className="text-white hover:text-gray-200 transition-colors"
            >
            Sign-up for Email
            </Link>
        </li>
        <li>
            <Link 
            to="/safety-data" 
            className="text-white hover:text-gray-200 transition-colors"
            >
            Safety Data Sheet
            </Link>
        </li>
        <li>
            <Link 
            to="/terms" 
            className="text-white hover:text-gray-200 transition-colors"
            >
            Terms of Use
            </Link>
        </li>
        <li>
            <Link 
            to="/privacy" 
            className="text-white hover:text-gray-200 transition-colors"
            >
            Privacy & Security
            </Link>
        </li>
        </ul>

        <span className='text-sm'>© 2024 E-mart. All Rights Reserved.</span>
      </div>


    </div>
  )
}

export default Footer
