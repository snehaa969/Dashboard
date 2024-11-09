import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='bg-white py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8'>
          {/* col 1 */}
          <div className='space-y-4'>
            <h2 className='text-pink-600 text-2xl font-bold'>Makerble</h2>
            <ul className='space-y-2'>
              <li>
                <Link to="/about" className='text-gray-600 hover:text-gray-800'>About US</Link>
              </li>
              <li>
                <Link to="/terms" className='text-gray-600 hover:text-gray-800'>Term & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className='text-gray-600 hover:text-gray-800'>Privacy & Cookies</Link>
              </li>
            </ul>
          </div>

          {/* col 2 */}
          <div className='space-y-4'>
            <h3 className='text-gray-700 font-semibold uppercase'>Organisations</h3>
            <ul className='space-y-2'>
              <li>
              <Link to="/control" className='text-gray-600 hover:text-gray-800'>Control Panel</Link>
              </li>
              <li>
              <Link to="/discover" className='text-gray-600 hover:text-gray-800'>Discover the Marketplace</Link>
              </li>
              <li>
              <Link to="/create" className='text-gray-600 hover:text-gray-800'>Create Organisation Account</Link>
              </li>
            </ul>
          </div>

          {/* col 3 */}
          <div className='space-y-4'>
            <h3 className='text-gray-700 font-semibold uppercase'>Your Account</h3>
            <ul className='space-y-2'>
              <li>
              <Link to="/Library" className='text-gray-600 hover:text-gray-800'>Library</Link>
              </li>
              <li>
              <Link to="/profile" className='text-gray-600 hover:text-gray-800'>Profile</Link>
              </li>
              <li>
              <Link to="/project" className='text-gray-600 hover:text-gray-800'>Projects</Link>
              </li>
              <li>
              <Link to="/help" className='text-gray-600 hover:text-gray-800'>Help</Link>
              </li>
            </ul>
          </div>

          {/* col 4 */}
          <div className='space-y-4'>
            <h3 className='font-semibold uppercase text-gray-800'>Explore</h3>
            <ul className='space-y-2 text-gray-600 hover:text-gray-800'>
              <li>
                <Link to="/metrics">Metrics</Link>
              </li>
              <li>
                <Link to="/networks">Networks</Link>
              </li>
              <li>
                <Link to="/strategies">Strategies</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/studies">Studies</Link>
              </li>
              <li>
                <Link to="/surveys">Surveys</Link>
              </li>
              <li>
                <Link to="/tips">Tips</Link>
              </li>
              <li>
                <Link to="/vouchers">Vouchers</Link>
              </li>
            </ul>
          </div>

          {/* col 5 */}
          <div className='space-y-4'>
           <h3 className='hidden md:block uppercase font-semibold'>Follow the makerable story</h3>
           <ul className='flex space-x-4'>
            <li>
               <Link to="/linkedin" className='text-blue-500 hover:text-blue-600'>
                 <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                 </svg>
              </Link>
            </li>
            <li>
               <Link to="/youtube" className='text-red-500 hover:text-red-800'>
               <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
               </svg>
               </Link>
            </li>
            <li>
               <Link to="/instagram" className='text-pink-500 hover:text-pink-600'>
               <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
               </Link>
            </li>
            <li>
               <Link to="/twitter" className='text-blue-500 hover:text-blue-800'>
               <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
               </svg>
               </Link>
            </li>
           </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-12 pt-8 border-gray-200'>
          <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0'>
            {/* Contact Information */}
            <div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6'>
                  <Link to="/mailto:contact@makerble.com" className='flex items-center text-gray-600 hover:text-gray-800'>
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    contact@makerble.com
                  </Link>
                
                  <Link to="/mailto:contact@makerble.com" className='flex items-center text-gray-600 hover:text-gray-800'>
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                    020 8123 6253
                  </Link>
            </div>

            {/* button */}
            <div className='text-center mt-4'>
              <button className='px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2  focus:ring-gray-500'>
                Request Button
                </button>
            </div>
          </div>
        </div>
      </div>
    
    </footer>
  )
}

