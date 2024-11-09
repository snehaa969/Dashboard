import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEnvelope, faBell, faList } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header className='bg-white shadow'>
      <div className='container mx-auto flex items-center justify-between px-6 py-4'>
        <div className='flex items-center'>
          {/* Logo */}
          <Link className='text-lg font-semibold mr-16'>Logo</Link>

          <ul className='hidden md:flex space-x-4'>
          <li>
          <NavLink to="/" className="text-gray-600 hover:text-blue-500">Home</NavLink>
          </li>
          <li>
          <NavLink to="/features" className="text-gray-600 hover:text-blue-500">Features</NavLink>
          </li>
          <li>
          <NavLink to="/explore" className="text-gray-600 hover:text-blue-500">Explore</NavLink>
          </li>
          </ul>

          {/* Search input */}
         <div className='hidden md:flex ml-4'>
          <input type='text' placeholder='Search for Contacts'
          className='focus:outline-none border border-gray-200 text-gray-500 py-1 px-2 rounded-md text-sm'/>
         </div>
        
        </div>

        {/* Right Side Icon and button */}
        <div className='flex items-center space-x-4'>
          {/* Notification and Icons */}
          <div className='hidden md:flex items-center space-x-2'>
            <Link to="#" className='text-gray-500 hover:text-blue-500'>
            <FontAwesomeIcon icon={faCircleQuestion} style={{ color: '#74C0FC' }} />
            </Link>
            <Link to="#" className='text-gray-500 hover:text-blue-500'>
            <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link to="#" className='text-gray-500 hover:text-blue-500'>
            <FontAwesomeIcon icon={faBell} />
            </Link>
          </div>

          {/* Profile Section */}
          <div className='hidden md:flex items-center space-x-2'>
            <img src='profile.jpg' alt='Profile' className='h-8 w-8 rounded-full'/>
            <span className='text-gray-600'>Sportykids Admin</span>
          </div>

          {/* Action Button */}
          <div className='flex items-center space-x-4'>
            <button className='px-4 py-2 bg-red-500 font-bold rounded-lg hover:text-red-600 text-white'>+ Create</button>
            <button className='border border-gray-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-100'>
            <FontAwesomeIcon icon={faList} /> More</button>
          </div>
        </div>
      </div>
    </header>
  )
}

